import{u as j,P as M,d as J,l as q,H as U,i as g,j as N,C as K,r as Q,o as u,m as h,n as e,t as i,p as d,K as f,F as x,q as w,x as k,L as z,M as O,G as W,w as B,y as R,Q as X,R as Y,S as A}from"./index-69d08b4b.js";function Z($){const _=j(),C=[];return $.forEach(l=>{Object.values(_.chains).forEach(p=>{var b,m;const{data:y}=M.fromBech32(l.cosmosAddress);C.push({chainName:p.chainName,logo:p.logo,address:M.toBech32(p.bech32Prefix,y),coinType:p.coinType,compatiable:l.hdPath.indexOf(p.coinType)>0,endpoint:(m=(b=p.endpoints.rest)==null?void 0:b.at(0))==null?void 0:m.address})})}),C}const ee={class:"overflow-x-auto w-full rounded-md"},te={class:"flex flex-wrap justify-between bg-base-100 p-5"},se=A('<div class="min-w-0"><h2 class="text-2xl font-bold leading-7 sm:!truncate sm:!text-3xl sm:!tracking-tight"> Accounts </h2><div class="mt-1 flex flex-col sm:!mt-0 sm:!flex-row sm:!flex-wrap sm:!space-x-6"><div class="mt-2 items-center text-sm text-gray-500 hidden md:!flex"><svg class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z" clip-rule="evenodd"></path><path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z"></path></svg> Manage all your assets in one page </div></div></div>',1),ae={class:"flex flex-col text-right"},oe=e("span",null,"Total Value",-1),ne={class:"text-xl text-success font-bold"},le={class:"overflow-x-auto"},ce={class:"bg-base-100 rounded-md my-5 py-5"},de={class:"flex justify-self-center"},re={class:"mx-2 p-2"},ie=["fill"],ue=A('<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g><g><path d="M437,12.3C437,5.5,431.5,0,424.7,0H126.3C84.4,0,50.4,34.1,50.4,75.9v335.7c0,41.9,34.1,75.9,75.9,75.9h298.5 c6.8,0,12.3-5.5,12.3-12.3V139.6c0-6.8-5.5-12.3-12.3-12.3H126.3c-28.3,0-51.4-23.1-51.4-51.4S98,24.5,126.3,24.5h298.5 C431.5,24.5,437,19,437,12.3z M126.3,151.8h286.2V463H126.3c-28.3,0-51.4-23.1-51.4-51.4V131.7 C88.4,144.2,106.5,151.8,126.3,151.8z"></path><path d="M130.5,64.8c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h280.1c6.8,0,12.3-5.5,12.3-12.3s-5.5-12.3-12.3-12.3H130.5z"></path><path d="M178,397.7c6.3,2.4,13.4-0.7,15.8-7.1l17.9-46.8h62.7c0.5,0,0.9-0.1,1.3-0.1l17.9,46.9c1.9,4.9,6.5,7.9,11.4,7.9 c1.5,0,2.9-0.3,4.4-0.8c6.3-2.4,9.5-9.5,7.1-15.8l-54-141.2c-3-7.9-10.4-13-18.8-13c-8.4,0-15.8,5.1-18.8,13l-54,141.2 C168.5,388.2,171.7,395.2,178,397.7z M243.7,260l22.7,59.3h-45.3L243.7,260z"></path></g></g></g>',3),he=[ue],me={class:"max-w-md overflow-hidden"},pe={class:"font-bold"},ve={class:"dropdown"},_e={tabindex:"0",class:"cursor-pointer"},ge={tabindex:"0",class:"-left-14 dropdown-content menu p-2 shadow bg-base-200 rounded-box z-50"},fe=["src"],be={class:"font-bold capitalize"},xe=e("br",null,null,-1),we={class:"text-xs font-normal sm:w-16 sm:overflow-hidden"},Ce=["onClick"],ye=e("div",{class:"p-4 bg-base-200 mt-2"},"Delegations",-1),Ne={class:"!menu w-full"},ke={key:0},Ve=["src"],Me={class:"font-bold"},Se=e("br",null,null,-1),ze={class:"float-right text-right"},Be=e("br",null,null,-1),Ae=e("div",{class:"p-4 bg-base-200"},"Balances",-1),$e={class:"!menu w-full"},Ee=["src"],Te={class:"font-bold"},Ie=e("br",null,null,-1),Oe={class:"float-right text-right"},Re=e("br",null,null,-1),je=A('<div class="text-center bg-base-100 rounded-md my-4 p-4"><a href="#address-modal" class="inline-flex items-center ml-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"><svg class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path><path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path></svg> Import Address </a></div>',1),De={class:"modal",id:"address-modal"},Fe={class:"modal-box"},He=e("a",{href:"#",class:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2"},"✕",-1),Pe=e("h3",{class:"font-bold text-lg mb-2"},"Derive Account From Address",-1),Le={class:"my-2"},Ge={class:"py-4 max-h-72 overflow-y-auto"},Je={class:"table table-compact"},qe={class:"flex items-center space-x-2"},Ue={class:"avatar"},Ke={class:"mask mask-squircle w-8 h-8"},Qe=["src","alt"],We=["data-tip"],Xe={class:"text-xs opacity-50 hidden md:!block"},Ye={class:"text-right"},Ze=["onClick"],et={class:"modal-action mt-2 mb-0"},st=J({__name:"accounts",setup($){const _=j(),C=q(),l=U(),p=g(""),y=g("m/44/118/0'/0/0");g({});const b=g("step1"),m=g(JSON.parse(localStorage.getItem("imported-addresses")||"{}")),S=g({}),E=g({});Object.values(m.value).forEach(t=>{let o=Promise.resolve();for(let n=0;n<t.length;n++)o=o.then(()=>new Promise(s=>{t[n].endpoint?I(t[n].chainName,t[n].endpoint||"",t[n].address).finally(()=>s()):s()}))});const V=N(()=>{let t=[];return Object.values(m.value).forEach(o=>{var s;const n=o.map(c=>{const v=E.value[c.address];let a={};return v&&v.length>0&&(v.forEach(r=>{a.amount=(Number(r.balance.amount)+Number(a.amount||0)).toFixed(),a.denom=r.balance.denom}),a.value=l.tokenValueNumber(a),a.change24h=l.priceChanges(a.denom)),{account:c,delegation:a,balances:S.value[c.address]?S.value[c.address].map(r=>{const G=l.tokenValueNumber(r);return{amount:r.amount,denom:r.denom,value:G,change24h:l.priceChanges(r.denom)}}):[]}});o.at(0)&&t.push({key:((s=o.at(0))==null?void 0:s.address)||" ",subaccounts:n})}),t}),D=N(()=>V.value.flatMap(t=>t.subaccounts.map(o=>o.account.address))),F=N(()=>V.value.flatMap(t=>t.subaccounts).reduce((t,o)=>(t+=o.delegation.value||0,o.balances.forEach(n=>{t+=n.value||0}),t),0)),T=N(()=>V.value.flatMap(t=>t.subaccounts).reduce((t,o)=>(t+=(o.delegation.change24h||0)*(o.delegation.value||0)/100,o.balances.forEach(n=>{t+=(n.change24h||0)*(n.value||0)/100}),t),0)),H=N(()=>p.value?Z([{cosmosAddress:p.value,hdPath:y.value}]).filter(t=>!D.value.includes(t.address)):[]);function P(t){const o={};Object.keys(m.value).forEach(n=>{const s=m.value[n].filter(c=>c.address!==t);s.length>0&&(o[n]=s)}),m.value=o,localStorage.setItem("imported-addresses",JSON.stringify(m.value))}async function L(t){var s;const{data:o}=M.fromBech32(t.address),n=M.toBase64(o);if(m.value[n]){if(m.value[n].findIndex(c=>c.address===t.address)>-1)return;m.value[n].push(t)}else m.value[n]=[t];(s=_==null?void 0:_.favoriteMap)!=null&&s[t.chainName]||(_.favoriteMap[t.chainName]=!0,window.localStorage.setItem("favoriteMap",JSON.stringify(_.favoriteMap))),t.endpoint&&I(t.chainName,t.endpoint,t.address),localStorage.setItem("imported-addresses",JSON.stringify(m.value))}async function I(t,o,n){const s=C.randomEndpoint(t),c=K.newDefault((s==null?void 0:s.address)||o);await c.getBankBalances(n).then(v=>{S.value[n]=v.balances.filter(a=>a.denom.length<10)}),await c.getStakingDelegations(n).then(v=>{E.value[n]=v.delegation_responses})}return(t,o)=>{const n=Q("RouterLink");return u(),h("div",null,[e("div",ee,[e("div",te,[se,e("div",ae,[oe,e("span",ne,"$"+i(d(l).formatNumber(F.value,"0,0.[00]")),1),e("span",{class:f(["text-sm",d(l).color(T.value)])},i(d(l).formatNumber(T.value,"+0,0.[00]")),3)])])]),e("div",le,[(u(!0),h(x,null,w(V.value,({key:s,subaccounts:c})=>{var v;return u(),h("div",ce,[e("div",de,[e("div",re,[(u(),h("svg",{fill:((v=d(C).current)==null?void 0:v.themeColor)||"#666CFF",height:"28px",width:"28px",version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 487.5 487.5","xml:space":"preserve"},he,8,ie))]),e("div",null,[e("div",me,[e("div",pe,i(s),1)]),e("div",ve,[e("label",_e,i(c.length)+" addresses",1),e("ul",ge,[(u(!0),h(x,null,w(c,a=>(u(),h("li",null,[e("a",null,[e("img",{src:a.account.logo,class:"w-8 h-8 mr-2"},null,8,fe),e("span",be,[k(i(a.account.chainName)+" ",1),xe,e("span",we,i(a.account.address),1)]),e("label",{class:"btn btn-xs !btn-error",onClick:r=>P(a.account.address)},"Remove",8,Ce)])]))),256))])])])]),ye,e("div",null,[e("ul",Ne,[(u(!0),h(x,null,w(c,a=>(u(),h("div",null,[a.delegation.amount?(u(),h("li",ke,[z(n,{to:`/${a.account.chainName}/account/${a.account.address}`},{default:O(()=>[e("img",{src:a.account.logo,class:"w-6 h-6 mr-2"},null,8,Ve),e("span",Me,[k(i(d(l).formatToken(a.delegation,!0,"0,0.[00]","all"))+" ",1),Se,e("span",{class:f(["text-xs",d(l).color(a.delegation.change24h)])},i(d(l).formatNumber(a.delegation.change24h,"+0.[00]"))+"%",3)]),e("span",ze,[k("$"+i(d(l).formatNumber(a.delegation.value,"0,0.[00]")),1),Be,e("span",{class:f(["text-xs",d(l).color(a.delegation.change24h)])},i(d(l).formatNumber((a.delegation.change24h||0)*(a.delegation.value||0)/100,"+0,0.[00]")),3)])]),_:2},1032,["to"])])):W("",!0)]))),256))])]),Ae,e("div",null,[e("ul",$e,[(u(!0),h(x,null,w(c,a=>(u(),h("div",null,[(u(!0),h(x,null,w(a.balances,r=>(u(),h("li",null,[z(n,{to:`/${a.account.chainName}/account/${a.account.address}`},{default:O(()=>[e("img",{src:a.account.logo,class:"w-6 h-6 mr-2"},null,8,Ee),e("span",Te,[k(i(d(l).formatToken(r,!0,"0,0.[00]","all"))+" ",1),Ie,e("span",{class:f(["text-xs",d(l).color(r.change24h)])},i(d(l).formatNumber(r.change24h,"+0.[00]"))+"%",3)]),e("span",Oe,[k("$"+i(d(l).formatNumber(r.value,"0,0.[00]")),1),Re,e("span",{class:f(["text-xs",d(l).color(r.change24h)])},i(d(l).formatNumber((r.change24h||0)*(r.value||0)/100,"+0,0.[00]")),3)])]),_:2},1032,["to"])]))),256))]))),256))])])])}),256)),je]),e("div",De,[e("div",Fe,[He,Pe,e("div",null,[e("label",Le,[B(e("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>p.value=s),class:"input input-bordered w-full input-sm",placeholder:"Input an address",onChange:o[1]||(o[1]=s=>b.value="step2")},null,544),[[R,p.value]]),B(e("input",{"onUpdate:modelValue":o[2]||(o[2]=s=>y.value=s),class:"input input-bordered w-full input-sm",placeholder:"m/44/118/0'/0/0"},null,512),[[R,y.value]])])]),B(e("div",Ge,[e("table",Je,[(u(!0),h(x,null,w(H.value,s=>(u(),h("tr",null,[e("td",null,[e("div",qe,[e("div",Ue,[e("div",Ke,[e("img",{src:s.logo,alt:s.address},null,8,Qe)])]),e("div",null,[e("div",{class:f(["tooltip",s.compatiable?"tooltip-success":"tooltip-error"]),"data-tip":`Coin Type: ${s.coinType}`},[e("div",{class:f(["font-bold capitalize",s.compatiable?"text-green-500":"text-red-500"])},i(s.chainName),3)],10,We),e("div",Xe,i(s.address),1)])])]),e("td",Ye,[e("span",{class:"btn !bg-yes !border-yes btn-xs text-white",onClick:c=>L(s)},[z(d(Y),{icon:"mdi:plus"})],8,Ze)])]))),256))])],512),[[X,b.value==="step2"]]),e("div",et,[e("a",{href:"#",class:"btn btn-primary btn-sm",onClick:o[3]||(o[3]=s=>b.value="step1")},"Close")])])])])}}});export{st as default};
