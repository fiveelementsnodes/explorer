import{d as A,l as R,i as r,a7 as B,k as L,r as N,o as c,m as i,n as e,t as o,F as v,q as C,L as b,M as F,x as P,p as d}from"./index-b8b25d6d.js";import{_ as S}from"./PaginationBar.vue_vue_type_script_setup_true_lang-8aef4748.js";const V={class:"overflow-x-auto"},M={class:"table table-compact"},x=A({__name:"index",props:["chain"],setup(g){const k=R(),p=r([]),l=r(new B),f=r({});L(()=>{m(1)});function m(t){l.value.setPage(t),k.rpc.getAuthAccounts(l.value).then(a=>{p.value=a.accounts,f.value=a.pagination})}function y(t){return t.replace("/cosmos.auth.v1beta1.","")}function u(t,a){if(!t||Array.isArray(t)||typeof t=="string")return null;const s=Object.keys(t);if(s.includes(a))return t[a];for(let n=0;n<s.length;n++){const _=u(t[s[n]],a);if(_)return _}}function h(t){return u(t,"address")}function w(t){return u(t,"account_number")}function $(t){return u(t,"sequence")}function q(t){return u(t,"pub_key")}return(t,a)=>{const s=N("RouterLink");return c(),i("div",V,[e("table",M,[e("thead",null,[e("tr",null,[e("td",null,o(t.$t("account.type")),1),e("td",null,o(t.$t("account.address")),1),e("td",null,o(t.$t("account.acc_num")),1),e("td",null,o(t.$t("account.sequence")),1),e("td",null,o(t.$t("account.pub_key")),1)])]),(c(!0),i(v,null,C(d(p),n=>(c(),i("tr",null,[e("td",null,o(y(n["@type"])),1),e("td",null,[b(s,{to:`/${g.chain}/account/${h(n)}`},{default:F(()=>[P(o(h(n)),1)]),_:2},1032,["to"])]),e("td",null,o(w(n)),1),e("td",null,o($(n)),1),e("td",null,o(q(n)),1)]))),256))]),b(S,{limit:d(l).limit,total:d(f).total,callback:m},null,8,["limit","total"])])}}});export{x as default};