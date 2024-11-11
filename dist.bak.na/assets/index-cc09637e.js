import{d as m,l as k,J as $,i as l,P as g,j as x,k as w,o as B,m as N,n as e,t as s,x as o,S as p}from"./index-69d08b4b.js";import{b as v}from"./route-block-83d24a4e.js";const M={class:"bg-base-100 px-4 pt-3 pb-4 rounded mb-4 shadow"},S={class:"card-title truncate mb-2"},E={class:"text-sm"},V={class:"text-primary lowercase",href:"https://blog.cosmos.network/cosmos-sdk-state-sync-guide-99e4cf43be2f"},j={class:"lowercase"},q={class:"bg-base-100 px-4 pt-3 pb-4 rounded mb-4 shadow"},C={class:"card-title truncate mb-2"},H={class:"text-sm"},I=e("br",null,null,-1),D=e("br",null,null,-1),J=e("br",null,null,-1),O=e("br",null,null,-1),P=e("br",null,null,-1),T=e("br",null,null,-1),U={class:"mockup-code bg-base-200 my-2"},z=p('<pre data-prefix="&gt;"><code class="text-gray-800 dark:invert">[state-sync]</code></pre><pre data-prefix="&gt;"><code class="text-gray-800 dark:invert">enable = true</code></pre><pre data-prefix="&gt;"><code class="text-gray-800"></code></pre>',3),A={"data-prefix":">"},F={class:"text-gray-800 dark:invert"},G={"data-prefix":">"},K={class:"text-gray-800 dark:invert"},L={"data-prefix":">"},Q={class:"text-gray-800 dark:invert"},R=p('<pre data-prefix="&gt;"><code class="text-gray-800 dark:invert"></code></pre><pre data-prefix="&gt;"><code class="text-green-400"># 2/3 of unbonding time</code></pre><pre data-prefix="&gt;"><code class="text-gray-800 dark:invert">trust_period = &quot;168h&quot;</code></pre>',3),W=e("br",null,null,-1),X={class:"bg-base-200 text-gray-600 px-2 py-px mx-1 rounded shadow"},Y=e("br",null,null,-1),Z={class:"bg-base-200 text-gray-600 px-2 py-px mx-1 rounded shadow"},ee={class:"bg-base-200 text-gray-600 px-2 py-px mx-1 rounded shadow"},te={class:"bg-base-100 px-4 pt-3 pb-4 rounded shadow"},se={class:"card-title truncate mb-2"},ae={class:"text-sm"},oe=p('<br><br><div class="mockup-code bg-base-200 my-2"><pre data-prefix="&gt;"><code class="text-gray-800 dark:invert">[state-sync]</code></pre><pre data-prefix="&gt;"><code class="text-green-400"># snapshot-interval specifies the block interval at which local state sync snapshots are</code></pre><pre data-prefix="&gt;"><code class="text-green-400"># taken (0 to disable). Must be a multiple of pruning-keep-every.</code></pre><pre data-prefix="&gt;"><code class="text-gray-800 dark:invert">snapshot-interval = 1000</code></pre><pre data-prefix="&gt;"><code class="text-gray-800 dark:invert"></code></pre><pre data-prefix="&gt;"><code class="text-green-400"># snapshot-keep-recent specifies the number of recent snapshots to keep and serve (0 to keep all). Each snapshot is about 500MiB</code></pre><pre data-prefix="&gt;"><code class="text-gray-800 dark:invert">snapshot-keep-recent = 2</code></pre></div>',3),re=m({__name:"index",props:["hash","chain"],setup(ne){const h=k(),_=$(),d=l({}),i=l(0),u=l("");_.$subscribe((t,{latest:r})=>{var c,b;let a=Number((b=(c=r.block)==null?void 0:c.header)==null?void 0:b.height);a=Math.round((a-2e3)/1e3)*1e3,a>i.value&&(i.value=a,_.fetchBlock(a).then(f=>{u.value=g.toHex(g.fromBase64(f.block_id.hash)).toUpperCase()}))});const y=x(()=>{var t,r,a;return(a=(r=(t=h.current)==null?void 0:t.endpoints)==null?void 0:r.rpc)==null?void 0:a.map(c=>c.address).join(",")}),n=x(()=>{var t;return((t=d.value.application_version)==null?void 0:t.app_name)||"gaiad"});return w(()=>{h.rpc.getBaseNodeInfo().then(t=>{d.value=t})}),(t,r)=>{var a;return B(),N("div",null,[e("div",M,[e("h2",S,s(t.$t("statesync.title")),1),e("div",E,[o(s(t.$t("statesync.description"))+" ",1),e("a",V,s(t.$t("statesync.here"))+" ",1),e("a",j,s(t.$t("statesync.for_more_info"))+".",1)])]),e("div",q,[e("h2",C,s(t.$t("statesync.title_2")),1),e("div",H,[o(" 1. "+s(t.$t("statesync.text_1"))+" ("+s(n.value)+" "+s(t.$t("statesync.version"))+": "+s(((a=d.value.application_version)==null?void 0:a.version)||"")+") ",1),I,o(" "+s(t.$t("statesync.text_1_1"))+". ",1),D,J,o(" 2. "+s(t.$t("statesync.text_2")),1),O,o(" "+s(t.$t("statesync.text_2_1"))+". ",1),P,T,e("div",U,[z,e("pre",A,[e("code",F,'rpc_servers = "'+s(y.value)+'"',1)]),e("pre",G,[e("code",K,"trust_height = "+s(i.value)+" ",1)]),e("pre",L,[e("code",Q,'trust_hash = "'+s(u.value)+'"',1)]),R]),W,o(" 3. "+s(t.$t("statesync.text_3"))+": ",1),e("code",X,s(n.value)+" start",1),Y,o(" "+s(t.$t("statesync.text_3_1"))+" ",1),e("code",Z,s(n.value)+" unsafe-reset-all",1),o(" or "),e("code",ee,s(n.value)+" tendermint unsafe-reset-all --home ~/.HOME",1),o(" "+s(t.$t("statesync.text_3_2"))+". ",1)])]),e("div",te,[e("h2",se,s(t.$t("statesync.title_3")),1),e("div",ae,[o(s(t.$t("statesync.text_title_3"))+" ",1),oe])])])}}});typeof v=="function"&&v(re);export{re as default};