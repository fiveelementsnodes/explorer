<script lang="ts" setup>
import { ref, onMounted, computed, onUnmounted } from 'vue';
import { fromHex, toBase64, fromBase64, toHex } from '@cosmjs/encoding';
import {
  useFormatter,
  useStakingStore,
  useBaseStore,
  useBlockchain,
} from '@/stores';
import UptimeBar from '@/components/UptimeBar.vue';
import type { Commit, SlashingParam, SigningInfo } from '@/types';
import { consensusPubkeyToHexAddress, pubKeyToValcons, valconsToBase64 } from '@/libs';

const props = defineProps(['chain']);

const stakingStore = useStakingStore();
const format = useFormatter();
const baseStore = useBaseStore();
const chainStore = useBlockchain();
const latest = ref(0);
const commits = ref([] as Commit[]);
const keyword = ref('');
const live = ref(true);
const slashingParam = ref({} as SlashingParam);

const signingInfo = ref({} as Record<string, SigningInfo>);
const consumerValidators = ref([] as { moniker: string, base64: string }[]);

// Filter validators by keywords or all validators
const validatorSet = computed(() => {
  if (chainStore.isConsumerChain) {
    return consumerValidators.value.map((v) => {
      const b64 = valconsToBase64(v.moniker);
      const moniker = stakingStore.validators.find(
        (x) => toBase64(fromHex(consensusPubkeyToHexAddress(x.consensus_pubkey))) === b64
      )?.description.moniker;
      return {
        moniker: moniker || v.moniker,
        base64: v.base64,
      };
    });
  }
  return stakingStore.validators.map((v) => {
    const hex = consensusPubkeyToHexAddress(v.consensus_pubkey);
    return {
      moniker: v.description.moniker,
      base64: toBase64(fromHex(hex)),
    };
  });
});

const list = computed(() => {
  if (chainStore.isConsumerChain) {
    stakingStore.loadKeyRotationFromLocalstorage(baseStore.latest?.block?.header?.chain_id);

    const window = Number(slashingParam.value.signed_blocks_window || 0);
    const vset = validatorSet.value.map((v) => {
//    const hexAddress = stakingStore.findRotatedHexAddress(v.base64);
      const hexAddress = stakingStore.findRotatedHexAddress({ '@type': 'cosmos.crypto.ed25519.PubKey', key: v.base64 });
      const signing = signingInfo.value[hexAddress];
      return {
        v,
        signing,
        hex: toBase64(fromHex(hexAddress)),
        uptime:
          signing && window > 0
            ? (window - Number(signing.missed_blocks_counter)) / window
            : undefined,
      };
    });
    return vset;
  } else {
    const window = Number(slashingParam.value.signed_blocks_window || 0);
    const vset = validatorSet.value.map((v) => {
//    const signing = signingInfo.value[consensusPubkeyToHexAddress(v.base64)];
      const signing = signingInfo.value[consensusPubkeyToHexAddress({ '@type': 'cosmos.crypto.ed25519.PubKey', key: v.base64 })];
      return {
        v,
        signing,
//      hex: toBase64(fromHex(consensusPubkeyToHexAddress(v.base64))),
        hex: toBase64(fromHex(consensusPubkeyToHexAddress({ '@type': 'cosmos.crypto.ed25519.PubKey', key: v.base64 }))),
        uptime:
          signing && window > 0
            ? (window - Number(signing.missed_blocks_counter)) / window
            : undefined,
      };
    });
    return vset;
  }
});

const preload = ref(false);
baseStore.$subscribe((_, state) => {
  const newHeight = Number(state.latest?.block?.header?.height || 0);
  if (newHeight > latest.value) {
    latest.value = newHeight;

    // initialize if it's the first time
    if (!preload.value) {
//      preFill();
      preload.value = true;
    }

    // reset the consumer validators
    if (newHeight > 0 && consumerValidators.value.length === 0) {
      const chain_id = state.latest.block.header.chain_id;
      Promise.resolve().then(async () => {
        await stakingStore.getConsumerValidators(chain_id).then((x) => {
          x.validators
            .sort((a, b) => Number(b.power) - Number(a.power))
            .forEach((v) => {
              const base64 = toBase64(
                fromHex(
                  consensusPubkeyToHexAddress({
                    '@type': '/cosmos.crypto.ed25519.PubKey',
                    key: v.consumer_key.ed25519,
                  })
                )
              );
              const moniker = v.provider_address;
              consumerValidators.value.push({ moniker, base64 });
            });
        });
      });
    }

    if (Number(state.latest.block.header.height) % 7 === 0) updateTotalSigningInfo();
//    fillblock(state.latest);
  }
});

onMounted(() => {
  live.value = true;

  // fill the recent blocks
  baseStore.recents?.forEach((b) => {
//    fillblock(b, 'start');
  });

  updateTotalSigningInfo();

  chainStore.rpc.getSlashingParams().then((x) => {
    slashingParam.value = x.params;
  });
});

function updateTotalSigningInfo() {
  chainStore.rpc.getSlashingSigningInfos().then((x) => {
    x.info?.forEach((i) => {
      signingInfo.value[valconsToBase64(i.address)] = i;
    });
  });
}

const commits2 = computed(() => {
  const la = baseStore.recents.map((b) => b.block.last_commit);
  // trigger update total signing info
  if (la.length > 1 && Number(la.at(la.length - 1)?.height || 0) % 10 === 7) {
    updateTotalSigningInfo();
  }
  const all = [...commits.value, ...la];
  return all.length > 50 ? all.slice(all.length - 50) : all;
});

onUnmounted(() => {
  live.value = false;
});

//const tab = ref(window.location.hash.search("block")>-1?"2":"3")
const tab = ref('2');
function changeTab(v: string) {
  tab.value = v;
}

</script>

<template>
  <div>
    <div class="tabs tabs-boxed bg-transparent mb-4">
      <a
        class="tab text-gray-400 capitalize"
        :class="{ 'tab-active': tab === '3' }"
        @click="changeTab('3')"
        >{{ $t('uptime.overall') }}</a
      >
      <a
        class="tab text-gray-400 capitalize"
        :class="{ 'tab-active': tab === '2' }"
        @click="changeTab('2')"
        >{{ $t('module.blocks') }}</a
      >
      <RouterLink :to="`/${chain}/uptime/customize`">
        <a class="tab text-gray-400 capitalize">{{ $t('uptime.customize') }}</a>
      </RouterLink>
    </div>
    <div class="bg-base-100 px-5 pt-5">
      <div class="flex items-center gap-x-4">
        <input
          type="text"
          v-model="keyword"
          placeholder="Keywords to filter validators"
          class="input input-sm w-full flex-1 border border-gray-200 dark:border-gray-600"
        />
      <!-- <button v-if="chainStore.isConsumerChain" class="btn btn-sm btn-primary" @click="fetchAllKeyRotation">Load Rotated Keys</button> -->
      </div>

      <div v-if="chainStore.isConsumerChain && Object.keys(stakingStore.keyRotation).length === 0"
        class="alert alert-warning my-4"
      >
        Note: Please load rotated keys to see the correct uptime
      </div>

      <!-- grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-4 mt-4 -->
      <div
        class="flex flex-row flex-wrap gap-x-4 mt-4 justify-center"
        :class="tab === '2' ? '' : 'hidden'"
      >
        <div v-for="({ v, signing, hex }, i) in list" :key="i">
          <div class="flex items-center justify-between py-0 w-[298px]">
            <label class="truncate text-sm">
              <span class="ml-1 text-black dark:text-white"
                >{{ i + 1 }}.{{ v.moniker }}</span
              >
            </label>
            <div
              v-if="Number(signing?.missed_blocks_counter || 0) > 10"
              class="badge badge-sm bg-transparent border-0 text-red-500 font-bold"
            >
              {{ signing?.missed_blocks_counter }}
            </div>
            <div
              v-else
              class="badge badge-sm bg-transparent text-green-600 border-0 font-bold"
            >
              {{ signing?.missed_blocks_counter }}
            </div>
          </div>
          <UptimeBar :blocks="commits2" :validator="hex" />
        </div>
      </div>

      <div :class="tab === '3' ? '' : 'hidden'" class="overflow-x-auto">
        <table class="table table-compact w-full mt-5">
          <thead class="capitalize">
            <tr>
              <td>{{ $t('account.validator') }}</td>
              <td class="text-right">{{ $t('module.uptime') }}</td>
              <td>{{ $t('uptime.last_jailed_time') }}</td>
              <td class="text-right">{{ $t('uptime.signed_precommits') }}</td>
              <td class="text-right">{{ $t('uptime.start_height') }}</td>
              <td>{{ $t('uptime.tombstoned') }}</td>
            </tr>
          </thead>
          <tr v-for="({ v, signing, uptime }, i) in list" class="hover">
            <td>
              <div class="truncate max-w-sm">
                {{ i + 1 }}. {{ v.moniker }}
              </div>
            </td>
            <td class="text-right">
              <span
                v-if="signing"
                class=""
                :class="
                  uptime && uptime > 0.95 ? 'text-green-500' : 'text-red-500'
                "
              >
                <div
                  class="tooltip"
                  :data-tip="`${signing.missed_blocks_counter} missing blocks`"
                >
                  {{ format.percent(uptime) }}
                </div>
              </span>
            </td>
            <td>
              <span v-if="signing && !signing.jailed_until.startsWith('1970')">
                <div
                  class="tooltip"
                  :data-tip="format.toDay(signing?.jailed_until, 'long')"
                >
                  <span>{{ format.toDay(signing?.jailed_until, 'from') }}</span>
                </div>
              </span>
            </td>
            <td class="text-xs text-right">
              <span
                v-if="signing && signing.jailed_until.startsWith('1970')"
                class="text-right"
                >{{
                  format.percent(
                    Number(signing.index_offset) /
                      (latest - Number(signing.start_height))
                  )
                }}</span
              >
              {{ signing?.index_offset }}
            </td>
            <td class="text-right">{{ signing?.start_height }}</td>
            <td class="capitalize">{{ signing?.tombstoned }}</td>
          </tr>
          <tfoot>
            <tr>
              <td colspan="2" class="text-right">
                {{ $t('uptime.minimum_uptime') }}:
                <span
                  class="lowercase tooltip"
                  :data-tip="`Window size: ${slashingParam.signed_blocks_window}`"
                  ><span class="ml-2 btn btn-error btn-xs">{{
                    format.percent(slashingParam.min_signed_per_window)
                  }}</span>
                </span>
              </td>
              <td colspan="8"></td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div class="h-6"></div>
    </div>
  </div>
</template>
<route>
  {
    meta: {
      i18n: 'uptime',
      order: 8
    }
  }
</route>

<style lang="scss">
.v-field--variant-outlined .v-field__outline__notch {
  border-width: 0 !important;
}
</style>
