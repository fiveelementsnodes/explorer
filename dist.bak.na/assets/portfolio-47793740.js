import{d as F,H as G,i,l as H,I as R,C as z,j as u,J,r as K,o as p,m as f,n as t,x as j,w as U,v as Q,t as d,p as h,K as W,L as D,G as A,F as X,q as Y,M as Z,O as ee}from"./index-69d08b4b.js";import{_ as te}from"./DonutChart.vue_vue_type_script_setup_true_lang-28b3a6a8.js";import{A as se}from"./vue3-apexcharts.common-0818a59b.js";import{g as ae}from"./apexChartConfig-77ef0f59.js";const oe={class:"overflow-x-auto w-full rounded-md"},ne={class:"flex flex-wrap justify-between bg-base-100 p-5"},le={class:"min-w-0"},ce=t("h2",{class:"text-2xl font-bold leading-7 sm:!truncate sm:!text-3xl sm:!tracking-tight"}," Portfolio ",-1),re={class:"flex items-center text-sm"},ie=t("option",null,"usd",-1),ue=t("option",null,"cny",-1),de=t("option",null,"eur",-1),he=t("option",null,"hkd",-1),_e=t("option",null,"jpy",-1),ve=t("option",null,"sgd",-1),me=t("option",null,"krw",-1),pe=t("option",null,"btc",-1),fe=t("option",null,"eth",-1),ge=[ie,ue,de,he,_e,ve,me,pe,fe],be={class:"text-right"},ke=t("div",null,"Total Value",-1),ye={class:"text-success font-bold"},we={class:"bg-base-100"},Ce={key:0,class:"grid grid-cols-1 md:grid-cols-3"},je={class:"md:col-span-2"},De={class:"overflow-x-auto mt-4"},Ne={class:"table w-full"},xe=t("thead",{class:"bg-base-200"},[t("tr",null,[t("th",null,"Token"),t("th",{class:"text-right"},"Value"),t("th",{class:"text-right"},"Percent")])],-1),Ee={class:"flex gap-1 text-xs items-center"},Oe={class:"avatar"},Se={class:"mask mask-squircle w-6 h-6 mr-2"},Ie=["src","alt"],qe={class:"uppercase font-bold text-lg"},Ve={class:"capitalize"},Be={class:"text-right"},Ae={class:"text-right"},$e={key:1,class:"p-4 text-center"},Te={class:"text-center my-5 bg-base-200"},He=F({__name:"portfolio",setup(Le){const c=G(),$=i(JSON.parse(localStorage.getItem("imported-addresses")||"{}")),T=H(),N=i({}),x=i({}),g=i({}),E=i(!1),m=i(localStorage.getItem("currency")||"usd"),b=i([]),k=i(0),O=i(0);R(()=>{k.value>0&&k.value===O.value&&(E.value||(E.value=!0,I()))}),Object.values($.value).forEach(a=>{a&&a.forEach(e=>{if(e.endpoint&&e.address){k.value+=1;const o=T.randomEndpoint(e.chainName),s=z.newDefault((o==null?void 0:o.address)||e.endpoint);s.getBankBalances(e.address).then(n=>{const l=n.balances.filter(r=>r.denom.length<10);l&&(N.value[e.address||""]=l),l.forEach(r=>{g.value[r.denom]=e})}).finally(()=>{O.value+=1}),s.getStakingDelegations(e.address).then(n=>{n&&n.delegation_responses&&(x.value[e.address||""]=n.delegation_responses),n.delegation_responses.forEach(l=>{g.value[l.balance.denom]=e})})}})});const _=u(()=>{const a={};return Object.values(N.value).forEach(e=>{e.forEach(o=>{var n;const s=c.tokenDisplayNumber(o);s&&(a[o.denom]?a[o.denom].qty+=s:a[o.denom]={qty:s,coinId:((n=c.findGlobalAssetConfig(o.denom))==null?void 0:n.coingecko_id)||""})})}),Object.values(x.value).forEach(e=>{e.forEach(o=>{var n;const s=c.tokenDisplayNumber(o.balance);s&&(a[o.balance.denom]?a[o.balance.denom].qty+=s:a[o.balance.denom]={qty:s,coinId:((n=c.findGlobalAssetConfig(o.balance.denom))==null?void 0:n.coingecko_id)||""})})}),a}),v=u(()=>{const a={};return Object.keys(_.value).forEach(e=>{const o=_.value[e],s=b.value.find(n=>n.id===o.coinId);a[e]=s?o.qty*s.current_price:0}),a}),S=u(()=>Object.values(v.value).reduce((a,e)=>a+e,0)),y=u(()=>{const a=[];return Object.keys(v.value).map(e=>{var o,s;a.push({denom:e,value:v.value[e],chainName:(o=g.value[e])==null?void 0:o.chainName,logo:(s=g.value[e])==null?void 0:s.logo,percentage:v.value[e]/S.value})}),a.filter(e=>e.value>0).sort((e,o)=>o.value-e.value)});function I(){localStorage.setItem("currency",m.value);const a=Object.values(_.value).map(e=>e.coinId).join(",");ee(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${m.value}&ids=${a}&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=14d&locale=en`).then(e=>{b.value=e})}const w=u(()=>Object.values(_.value).map(a=>{const e=b.value.find(o=>o.id===a.coinId);return e?a.qty*(e.price_change_24h||0):0}).reduce((a,e)=>a+e,0)),L=u(()=>{var s,n;const a=Object.keys(_.value).map(l=>{var B;const r=_.value[l],V=b.value.find(C=>C.id===r.coinId);return V?(B=V.sparkline_in_7d)==null?void 0:B.price.map(C=>C*r.qty):[]}).filter(l=>l.length>0),e=((s=a.at(0))==null?void 0:s.length)||0,o=new Array(e).fill(0);for(let l=0;l<e;l++)for(let r=0;r<a.length;r++)o[l]+=((n=a.at(r))==null?void 0:n.at(l))||0;return[{name:"value",data:o}]}),M=J(),P=u(()=>{const a=M.theme,e=[],o=new Date().getTime();for(let s=0;s<168;s++)e.unshift(o-s*2*60*60*1e3);return ae(a,e)}),q=u(()=>{switch(m.value){case"usd":return"$";case"cny":return"¥";case"eur":return"€";case"hkd":return"HK$";case"jpy":return"¥";case"sdg":return"S$";case"krw":return"₩";case"btc":return"BTC";case"eth":return"ETH"}return"$"});return(a,e)=>{const o=K("RouterLink");return p(),f("div",oe,[t("div",ne,[t("div",le,[ce,t("div",null,[t("div",re,[j(" Currency: "),U(t("select",{"onUpdate:modelValue":e[0]||(e[0]=s=>m.value=s),onChange:I,class:"ml-1 uppercase"},ge,544),[[Q,m.value]])])])]),t("div",be,[ke,t("div",ye,d(q.value)+" "+d(h(c).formatNumber(S.value,"0,0.[00]")),1),t("div",{class:W(["text-xs",{"text-success":w.value>0,"text-error":w.value<0}])},d(h(c).formatNumber(w.value,"+0,0.[00]")),3)])]),t("div",we,[y.value?(p(),f("div",Ce,[t("div",null,[D(te,{height:"280",series:Object.values(v.value),labels:Object.keys(v.value).map(s=>{var n;return(n=h(c).tokenDisplayDenom(s))==null?void 0:n.toUpperCase()})},null,8,["series","labels"])]),t("div",je,[D(h(se),{type:"area",height:"280",options:P.value,series:L.value},null,8,["options","series"])])])):A("",!0),t("div",De,[t("table",Ne,[xe,t("tbody",null,[(p(!0),f(X,null,Y(y.value,(s,n)=>(p(),f("tr",{key:n},[t("td",null,[t("div",Ee,[t("div",Oe,[t("div",Se,[t("img",{src:s.logo,alt:s.chainName},null,8,Ie)])]),t("span",qe,d(h(c).tokenDisplayDenom(s.denom)),1),j(" @ "),t("span",Ve,d(s.chainName),1)])]),t("td",Be,d(q.value)+d(h(c).formatNumber(s.value,"0,0.[00]")),1),t("td",Ae,d(h(c).percent(s.percentage)),1)]))),128))])])]),y.value.length===0?(p(),f("div",$e," No Data ")):A("",!0)]),t("div",Te,[D(o,{to:"./accounts",class:"btn btn-link"},{default:Z(()=>[j("Add More Asset")]),_:1})])])}}});export{He as default};
