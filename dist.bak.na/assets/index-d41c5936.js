import{cd as Q}from"./index-69d08b4b.js";import{u as De}from"./index-dce56f54.js";var Me={},Ce={},be={},Pe;Object.defineProperty(be,"__esModule",{value:!0});be.defaultSnapOrigin=void 0;be.defaultSnapOrigin=(Pe={}.SNAP_ORIGIN)!==null&&Pe!==void 0?Pe:"npm:@leapwallet/metamask-cosmos-snap";(function(g){var v=Q&&Q.__importDefault||function(_){return _&&_.__esModule?_:{default:_}};Object.defineProperty(g,"__esModule",{value:!0}),g.experimentalSuggestChain=g.suggestChain=g.isLocalSnap=g.getKey=g.requestSignAmino=g.requestSignature=g.getSnap=g.connectSnap=g.getSnaps=void 0;const C=v(De),S=be,E=async()=>{let _=!1;if("detected"in window.ethereum)for(const w of window.ethereum.detected)try{return await w.request({method:"wallet_getSnaps"}),window.ethereum.setProvider(w),_=!0,w}catch{}if(!_&&"providers"in window.ethereum)for(const w of window.ethereum.providers)try{return await w.request({method:"wallet_getSnaps"}),window.ethereum=w,_=!0,w}catch{}return window.ethereum},x=async(_,w)=>(await E()).request({method:"wallet_invokeSnap",params:{snapId:S.defaultSnapOrigin,request:{method:_,params:w}}}),T=async()=>await(await E()).request({method:"wallet_getSnaps"});g.getSnaps=T;const V=async(_=S.defaultSnapOrigin,w={})=>(await E()).request({method:"wallet_requestSnaps",params:{[_]:w}});g.connectSnap=V;const z=async _=>{try{const w=await(0,g.getSnaps)();return Object.values(w).find(k=>k.id===S.defaultSnapOrigin&&(!_||k.version===_))}catch(w){console.log("Failed to obtain installed snap",w);return}};g.getSnap=z;const b=async(_,w,k)=>{const X=await x("signDirect",{chainId:_,signerAddress:w,signDoc:k}),{accountNumber:N}=k,se=new C.default((N==null?void 0:N.low)||0,N==null?void 0:N.high,N==null?void 0:N.unsigned);return{signature:X.signature,signed:Object.assign(Object.assign({},X.signed),{accountNumber:`${se.toString()}`,authInfoBytes:new Uint8Array(Object.values(X.signed.authInfoBytes)),bodyBytes:new Uint8Array(Object.values(X.signed.bodyBytes))})}};g.requestSignature=b;const de=async(_,w,k,{isADR36:X=!1}={})=>await x("signAmino",{chainId:_,signerAddress:w,signDoc:k,isADR36:X});g.requestSignAmino=de;const he=async _=>{const w=await x("getKey",{chainId:_});if(!w)throw new Error("No account data found");return w.pubkey=Uint8Array.from(Object.values(w.pubkey)),w};g.getKey=he;const Z=_=>_.startsWith("local:");g.isLocalSnap=Z;const L=async _=>await x("suggestChain",{chainInfo:_});g.suggestChain=L,g.experimentalSuggestChain=g.suggestChain})(Ce);var Oe={};Object.defineProperty(Oe,"__esModule",{value:!0});var re={},Se={exports:{}};(function(g){(function(v){var C,S=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,E=Math.ceil,x=Math.floor,T="[BigNumber Error] ",V=T+"Number primitive has more than 15 significant digits: ",z=1e14,b=14,de=9007199254740991,he=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],Z=1e7,L=1e9;function _(y){var A,D,j,l=u.prototype={constructor:u,toString:null,valueOf:null},U=new u(1),q=20,M=4,H=-7,W=21,ae=-1e7,J=1e7,oe=!1,le=1,ce=0,Ae={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},te="0123456789abcdefghijklmnopqrstuvwxyz",ye=!0;function u(e,i){var n,s,r,o,d,c,a,f,t=this;if(!(t instanceof u))return new u(e,i);if(i==null){if(e&&e._isBigNumber===!0){t.s=e.s,!e.c||e.e>J?t.c=t.e=null:e.e<ae?t.c=[t.e=0]:(t.e=e.e,t.c=e.c.slice());return}if((c=typeof e=="number")&&e*0==0){if(t.s=1/e<0?(e=-e,-1):1,e===~~e){for(o=0,d=e;d>=10;d/=10,o++);o>J?t.c=t.e=null:(t.e=o,t.c=[e]);return}f=String(e)}else{if(!S.test(f=String(e)))return j(t,f,c);t.s=f.charCodeAt(0)==45?(f=f.slice(1),-1):1}(o=f.indexOf("."))>-1&&(f=f.replace(".","")),(d=f.search(/e/i))>0?(o<0&&(o=d),o+=+f.slice(d+1),f=f.substring(0,d)):o<0&&(o=f.length)}else{if(N(i,2,te.length,"Base"),i==10&&ye)return t=new u(e),K(t,q+t.e+1,M);if(f=String(e),c=typeof e=="number"){if(e*0!=0)return j(t,f,c,i);if(t.s=1/e<0?(f=f.slice(1),-1):1,u.DEBUG&&f.replace(/^0\.0*|\./,"").length>15)throw Error(V+e)}else t.s=f.charCodeAt(0)===45?(f=f.slice(1),-1):1;for(n=te.slice(0,i),o=d=0,a=f.length;d<a;d++)if(n.indexOf(s=f.charAt(d))<0){if(s=="."){if(d>o){o=a;continue}}else if(!r&&(f==f.toUpperCase()&&(f=f.toLowerCase())||f==f.toLowerCase()&&(f=f.toUpperCase()))){r=!0,d=-1,o=0;continue}return j(t,String(e),c,i)}c=!1,f=D(f,i,10,t.s),(o=f.indexOf("."))>-1?f=f.replace(".",""):o=f.length}for(d=0;f.charCodeAt(d)===48;d++);for(a=f.length;f.charCodeAt(--a)===48;);if(f=f.slice(d,++a)){if(a-=d,c&&u.DEBUG&&a>15&&(e>de||e!==x(e)))throw Error(V+t.s*e);if((o=o-d-1)>J)t.c=t.e=null;else if(o<ae)t.c=[t.e=0];else{if(t.e=o,t.c=[],d=(o+1)%b,o<0&&(d+=b),d<a){for(d&&t.c.push(+f.slice(0,d)),a-=b;d<a;)t.c.push(+f.slice(d,d+=b));d=b-(f=f.slice(d)).length}else d-=a;for(;d--;f+="0");t.c.push(+f)}}else t.c=[t.e=0]}u.clone=_,u.ROUND_UP=0,u.ROUND_DOWN=1,u.ROUND_CEIL=2,u.ROUND_FLOOR=3,u.ROUND_HALF_UP=4,u.ROUND_HALF_DOWN=5,u.ROUND_HALF_EVEN=6,u.ROUND_HALF_CEIL=7,u.ROUND_HALF_FLOOR=8,u.EUCLID=9,u.config=u.set=function(e){var i,n;if(e!=null)if(typeof e=="object"){if(e.hasOwnProperty(i="DECIMAL_PLACES")&&(n=e[i],N(n,0,L,i),q=n),e.hasOwnProperty(i="ROUNDING_MODE")&&(n=e[i],N(n,0,8,i),M=n),e.hasOwnProperty(i="EXPONENTIAL_AT")&&(n=e[i],n&&n.pop?(N(n[0],-L,0,i),N(n[1],0,L,i),H=n[0],W=n[1]):(N(n,-L,L,i),H=-(W=n<0?-n:n))),e.hasOwnProperty(i="RANGE"))if(n=e[i],n&&n.pop)N(n[0],-L,-1,i),N(n[1],1,L,i),ae=n[0],J=n[1];else if(N(n,-L,L,i),n)ae=-(J=n<0?-n:n);else throw Error(T+i+" cannot be zero: "+n);if(e.hasOwnProperty(i="CRYPTO"))if(n=e[i],n===!!n)if(n)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))oe=n;else throw oe=!n,Error(T+"crypto unavailable");else oe=n;else throw Error(T+i+" not true or false: "+n);if(e.hasOwnProperty(i="MODULO_MODE")&&(n=e[i],N(n,0,9,i),le=n),e.hasOwnProperty(i="POW_PRECISION")&&(n=e[i],N(n,0,L,i),ce=n),e.hasOwnProperty(i="FORMAT"))if(n=e[i],typeof n=="object")Ae=n;else throw Error(T+i+" not an object: "+n);if(e.hasOwnProperty(i="ALPHABET"))if(n=e[i],typeof n=="string"&&!/^.?$|[+\-.\s]|(.).*\1/.test(n))ye=n.slice(0,10)=="0123456789",te=n;else throw Error(T+i+" invalid: "+n)}else throw Error(T+"Object expected: "+e);return{DECIMAL_PLACES:q,ROUNDING_MODE:M,EXPONENTIAL_AT:[H,W],RANGE:[ae,J],CRYPTO:oe,MODULO_MODE:le,POW_PRECISION:ce,FORMAT:Ae,ALPHABET:te}},u.isBigNumber=function(e){if(!e||e._isBigNumber!==!0)return!1;if(!u.DEBUG)return!0;var i,n,s=e.c,r=e.e,o=e.s;e:if({}.toString.call(s)=="[object Array]"){if((o===1||o===-1)&&r>=-L&&r<=L&&r===x(r)){if(s[0]===0){if(r===0&&s.length===1)return!0;break e}if(i=(r+1)%b,i<1&&(i+=b),String(s[0]).length==i){for(i=0;i<s.length;i++)if(n=s[i],n<0||n>=z||n!==x(n))break e;if(n!==0)return!0}}}else if(s===null&&r===null&&(o===null||o===1||o===-1))return!0;throw Error(T+"Invalid BigNumber: "+e)},u.maximum=u.max=function(){return Te(arguments,-1)},u.minimum=u.min=function(){return Te(arguments,1)},u.random=function(){var e=9007199254740992,i=Math.random()*e&2097151?function(){return x(Math.random()*e)}:function(){return(Math.random()*1073741824|0)*8388608+(Math.random()*8388608|0)};return function(n){var s,r,o,d,c,a=0,f=[],t=new u(U);if(n==null?n=q:N(n,0,L),d=E(n/b),oe)if(crypto.getRandomValues){for(s=crypto.getRandomValues(new Uint32Array(d*=2));a<d;)c=s[a]*131072+(s[a+1]>>>11),c>=9e15?(r=crypto.getRandomValues(new Uint32Array(2)),s[a]=r[0],s[a+1]=r[1]):(f.push(c%1e14),a+=2);a=d/2}else if(crypto.randomBytes){for(s=crypto.randomBytes(d*=7);a<d;)c=(s[a]&31)*281474976710656+s[a+1]*1099511627776+s[a+2]*4294967296+s[a+3]*16777216+(s[a+4]<<16)+(s[a+5]<<8)+s[a+6],c>=9e15?crypto.randomBytes(7).copy(s,a):(f.push(c%1e14),a+=7);a=d/7}else throw oe=!1,Error(T+"crypto unavailable");if(!oe)for(;a<d;)c=i(),c<9e15&&(f[a++]=c%1e14);for(d=f[--a],n%=b,d&&n&&(c=he[b-n],f[a]=x(d/c)*c);f[a]===0;f.pop(),a--);if(a<0)f=[o=0];else{for(o=-1;f[0]===0;f.splice(0,1),o-=b);for(a=1,c=f[0];c>=10;c/=10,a++);a<b&&(o-=b-a)}return t.e=o,t.c=f,t}}(),u.sum=function(){for(var e=1,i=arguments,n=new u(i[0]);e<i.length;)n=n.plus(i[e++]);return n},D=function(){var e="0123456789";function i(n,s,r,o){for(var d,c=[0],a,f=0,t=n.length;f<t;){for(a=c.length;a--;c[a]*=s);for(c[0]+=o.indexOf(n.charAt(f++)),d=0;d<c.length;d++)c[d]>r-1&&(c[d+1]==null&&(c[d+1]=0),c[d+1]+=c[d]/r|0,c[d]%=r)}return c.reverse()}return function(n,s,r,o,d){var c,a,f,t,h,m,p,P,B=n.indexOf("."),F=q,I=M;for(B>=0&&(t=ce,ce=0,n=n.replace(".",""),P=new u(s),m=P.pow(n.length-B),ce=t,P.c=i(ie(k(m.c),m.e,"0"),10,r,e),P.e=P.c.length),p=i(n,s,r,d?(c=te,e):(c=e,te)),f=t=p.length;p[--t]==0;p.pop());if(!p[0])return c.charAt(0);if(B<0?--f:(m.c=p,m.e=f,m.s=o,m=A(m,P,F,I,r),p=m.c,h=m.r,f=m.e),a=f+F+1,B=p[a],t=r/2,h=h||a<0||p[a+1]!=null,h=I<4?(B!=null||h)&&(I==0||I==(m.s<0?3:2)):B>t||B==t&&(I==4||h||I==6&&p[a-1]&1||I==(m.s<0?8:7)),a<1||!p[0])n=h?ie(c.charAt(1),-F,c.charAt(0)):c.charAt(0);else{if(p.length=a,h)for(--r;++p[--a]>r;)p[a]=0,a||(++f,p=[1].concat(p));for(t=p.length;!p[--t];);for(B=0,n="";B<=t;n+=c.charAt(p[B++]));n=ie(n,f,c.charAt(0))}return n}}(),A=function(){function e(s,r,o){var d,c,a,f,t=0,h=s.length,m=r%Z,p=r/Z|0;for(s=s.slice();h--;)a=s[h]%Z,f=s[h]/Z|0,d=p*a+f*m,c=m*a+d%Z*Z+t,t=(c/o|0)+(d/Z|0)+p*f,s[h]=c%o;return t&&(s=[t].concat(s)),s}function i(s,r,o,d){var c,a;if(o!=d)a=o>d?1:-1;else for(c=a=0;c<o;c++)if(s[c]!=r[c]){a=s[c]>r[c]?1:-1;break}return a}function n(s,r,o,d){for(var c=0;o--;)s[o]-=c,c=s[o]<r[o]?1:0,s[o]=c*d+s[o]-r[o];for(;!s[0]&&s.length>1;s.splice(0,1));}return function(s,r,o,d,c){var a,f,t,h,m,p,P,B,F,I,O,G,pe,xe,Ie,ee,me,Y=s.s==r.s?1:-1,$=s.c,R=r.c;if(!$||!$[0]||!R||!R[0])return new u(!s.s||!r.s||($?R&&$[0]==R[0]:!R)?NaN:$&&$[0]==0||!R?Y*0:Y/0);for(B=new u(Y),F=B.c=[],f=s.e-r.e,Y=o+f+1,c||(c=z,f=w(s.e/b)-w(r.e/b),Y=Y/b|0),t=0;R[t]==($[t]||0);t++);if(R[t]>($[t]||0)&&f--,Y<0)F.push(1),h=!0;else{for(xe=$.length,ee=R.length,t=0,Y+=2,m=x(c/(R[0]+1)),m>1&&(R=e(R,m,c),$=e($,m,c),ee=R.length,xe=$.length),pe=ee,I=$.slice(0,ee),O=I.length;O<ee;I[O++]=0);me=R.slice(),me=[0].concat(me),Ie=R[0],R[1]>=c/2&&Ie++;do{if(m=0,a=i(R,I,ee,O),a<0){if(G=I[0],ee!=O&&(G=G*c+(I[1]||0)),m=x(G/Ie),m>1)for(m>=c&&(m=c-1),p=e(R,m,c),P=p.length,O=I.length;i(p,I,P,O)==1;)m--,n(p,ee<P?me:R,P,c),P=p.length,a=1;else m==0&&(a=m=1),p=R.slice(),P=p.length;if(P<O&&(p=[0].concat(p)),n(I,p,O,c),O=I.length,a==-1)for(;i(R,I,ee,O)<1;)m++,n(I,ee<O?me:R,O,c),O=I.length}else a===0&&(m++,I=[0]);F[t++]=m,I[0]?I[O++]=$[pe]||0:(I=[$[pe]],O=1)}while((pe++<xe||I[0]!=null)&&Y--);h=I[0]!=null,F[0]||F.splice(0,1)}if(c==z){for(t=1,Y=F[0];Y>=10;Y/=10,t++);K(B,o+(B.e=t+f*b-1)+1,d,h)}else B.e=f,B.r=+h;return B}}();function we(e,i,n,s){var r,o,d,c,a;if(n==null?n=M:N(n,0,8),!e.c)return e.toString();if(r=e.c[0],d=e.e,i==null)a=k(e.c),a=s==1||s==2&&(d<=H||d>=W)?ue(a,d):ie(a,d,"0");else if(e=K(new u(e),i,n),o=e.e,a=k(e.c),c=a.length,s==1||s==2&&(i<=o||o<=H)){for(;c<i;a+="0",c++);a=ue(a,o)}else if(i-=d,a=ie(a,o,"0"),o+1>c){if(--i>0)for(a+=".";i--;a+="0");}else if(i+=o-c,i>0)for(o+1==c&&(a+=".");i--;a+="0");return e.s<0&&r?"-"+a:a}function Te(e,i){for(var n,s,r=1,o=new u(e[0]);r<e.length;r++)s=new u(e[r]),(!s.s||(n=X(o,s))===i||n===0&&o.s===i)&&(o=s);return o}function Ne(e,i,n){for(var s=1,r=i.length;!i[--r];i.pop());for(r=i[0];r>=10;r/=10,s++);return(n=s+n*b-1)>J?e.c=e.e=null:n<ae?e.c=[e.e=0]:(e.e=n,e.c=i),e}j=function(){var e=/^(-?)0([xbo])(?=\w[\w.]*$)/i,i=/^([^.]+)\.$/,n=/^\.([^.]+)$/,s=/^-?(Infinity|NaN)$/,r=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(o,d,c,a){var f,t=c?d:d.replace(r,"");if(s.test(t))o.s=isNaN(t)?null:t<0?-1:1;else{if(!c&&(t=t.replace(e,function(h,m,p){return f=(p=p.toLowerCase())=="x"?16:p=="b"?2:8,!a||a==f?m:h}),a&&(f=a,t=t.replace(i,"$1").replace(n,"0.$1")),d!=t))return new u(t,f);if(u.DEBUG)throw Error(T+"Not a"+(a?" base "+a:"")+" number: "+d);o.s=null}o.c=o.e=null}}();function K(e,i,n,s){var r,o,d,c,a,f,t,h=e.c,m=he;if(h){e:{for(r=1,c=h[0];c>=10;c/=10,r++);if(o=i-r,o<0)o+=b,d=i,a=h[f=0],t=x(a/m[r-d-1]%10);else if(f=E((o+1)/b),f>=h.length)if(s){for(;h.length<=f;h.push(0));a=t=0,r=1,o%=b,d=o-b+1}else break e;else{for(a=c=h[f],r=1;c>=10;c/=10,r++);o%=b,d=o-b+r,t=d<0?0:x(a/m[r-d-1]%10)}if(s=s||i<0||h[f+1]!=null||(d<0?a:a%m[r-d-1]),s=n<4?(t||s)&&(n==0||n==(e.s<0?3:2)):t>5||t==5&&(n==4||s||n==6&&(o>0?d>0?a/m[r-d]:0:h[f-1])%10&1||n==(e.s<0?8:7)),i<1||!h[0])return h.length=0,s?(i-=e.e+1,h[0]=m[(b-i%b)%b],e.e=-i||0):h[0]=e.e=0,e;if(o==0?(h.length=f,c=1,f--):(h.length=f+1,c=m[b-o],h[f]=d>0?x(a/m[r-d]%m[d])*c:0),s)for(;;)if(f==0){for(o=1,d=h[0];d>=10;d/=10,o++);for(d=h[0]+=c,c=1;d>=10;d/=10,c++);o!=c&&(e.e++,h[0]==z&&(h[0]=1));break}else{if(h[f]+=c,h[f]!=z)break;h[f--]=0,c=1}for(o=h.length;h[--o]===0;h.pop());}e.e>J?e.c=e.e=null:e.e<ae&&(e.c=[e.e=0])}return e}function ne(e){var i,n=e.e;return n===null?e.toString():(i=k(e.c),i=n<=H||n>=W?ue(i,n):ie(i,n,"0"),e.s<0?"-"+i:i)}return l.absoluteValue=l.abs=function(){var e=new u(this);return e.s<0&&(e.s=1),e},l.comparedTo=function(e,i){return X(this,new u(e,i))},l.decimalPlaces=l.dp=function(e,i){var n,s,r,o=this;if(e!=null)return N(e,0,L),i==null?i=M:N(i,0,8),K(new u(o),e+o.e+1,i);if(!(n=o.c))return null;if(s=((r=n.length-1)-w(this.e/b))*b,r=n[r])for(;r%10==0;r/=10,s--);return s<0&&(s=0),s},l.dividedBy=l.div=function(e,i){return A(this,new u(e,i),q,M)},l.dividedToIntegerBy=l.idiv=function(e,i){return A(this,new u(e,i),0,1)},l.exponentiatedBy=l.pow=function(e,i){var n,s,r,o,d,c,a,f,t,h=this;if(e=new u(e),e.c&&!e.isInteger())throw Error(T+"Exponent not an integer: "+ne(e));if(i!=null&&(i=new u(i)),c=e.e>14,!h.c||!h.c[0]||h.c[0]==1&&!h.e&&h.c.length==1||!e.c||!e.c[0])return t=new u(Math.pow(+ne(h),c?e.s*(2-se(e)):+ne(e))),i?t.mod(i):t;if(a=e.s<0,i){if(i.c?!i.c[0]:!i.s)return new u(NaN);s=!a&&h.isInteger()&&i.isInteger(),s&&(h=h.mod(i))}else{if(e.e>9&&(h.e>0||h.e<-1||(h.e==0?h.c[0]>1||c&&h.c[1]>=24e7:h.c[0]<8e13||c&&h.c[0]<=9999975e7)))return o=h.s<0&&se(e)?-0:0,h.e>-1&&(o=1/o),new u(a?1/o:o);ce&&(o=E(ce/b+2))}for(c?(n=new u(.5),a&&(e.s=1),f=se(e)):(r=Math.abs(+ne(e)),f=r%2),t=new u(U);;){if(f){if(t=t.times(h),!t.c)break;o?t.c.length>o&&(t.c.length=o):s&&(t=t.mod(i))}if(r){if(r=x(r/2),r===0)break;f=r%2}else if(e=e.times(n),K(e,e.e+1,1),e.e>14)f=se(e);else{if(r=+ne(e),r===0)break;f=r%2}h=h.times(h),o?h.c&&h.c.length>o&&(h.c.length=o):s&&(h=h.mod(i))}return s?t:(a&&(t=U.div(t)),i?t.mod(i):o?K(t,ce,M,d):t)},l.integerValue=function(e){var i=new u(this);return e==null?e=M:N(e,0,8),K(i,i.e+1,e)},l.isEqualTo=l.eq=function(e,i){return X(this,new u(e,i))===0},l.isFinite=function(){return!!this.c},l.isGreaterThan=l.gt=function(e,i){return X(this,new u(e,i))>0},l.isGreaterThanOrEqualTo=l.gte=function(e,i){return(i=X(this,new u(e,i)))===1||i===0},l.isInteger=function(){return!!this.c&&w(this.e/b)>this.c.length-2},l.isLessThan=l.lt=function(e,i){return X(this,new u(e,i))<0},l.isLessThanOrEqualTo=l.lte=function(e,i){return(i=X(this,new u(e,i)))===-1||i===0},l.isNaN=function(){return!this.s},l.isNegative=function(){return this.s<0},l.isPositive=function(){return this.s>0},l.isZero=function(){return!!this.c&&this.c[0]==0},l.minus=function(e,i){var n,s,r,o,d=this,c=d.s;if(e=new u(e,i),i=e.s,!c||!i)return new u(NaN);if(c!=i)return e.s=-i,d.plus(e);var a=d.e/b,f=e.e/b,t=d.c,h=e.c;if(!a||!f){if(!t||!h)return t?(e.s=-i,e):new u(h?d:NaN);if(!t[0]||!h[0])return h[0]?(e.s=-i,e):new u(t[0]?d:M==3?-0:0)}if(a=w(a),f=w(f),t=t.slice(),c=a-f){for((o=c<0)?(c=-c,r=t):(f=a,r=h),r.reverse(),i=c;i--;r.push(0));r.reverse()}else for(s=(o=(c=t.length)<(i=h.length))?c:i,c=i=0;i<s;i++)if(t[i]!=h[i]){o=t[i]<h[i];break}if(o&&(r=t,t=h,h=r,e.s=-e.s),i=(s=h.length)-(n=t.length),i>0)for(;i--;t[n++]=0);for(i=z-1;s>c;){if(t[--s]<h[s]){for(n=s;n&&!t[--n];t[n]=i);--t[n],t[s]+=z}t[s]-=h[s]}for(;t[0]==0;t.splice(0,1),--f);return t[0]?Ne(e,t,f):(e.s=M==3?-1:1,e.c=[e.e=0],e)},l.modulo=l.mod=function(e,i){var n,s,r=this;return e=new u(e,i),!r.c||!e.s||e.c&&!e.c[0]?new u(NaN):!e.c||r.c&&!r.c[0]?new u(r):(le==9?(s=e.s,e.s=1,n=A(r,e,0,3),e.s=s,n.s*=s):n=A(r,e,0,le),e=r.minus(n.times(e)),!e.c[0]&&le==1&&(e.s=r.s),e)},l.multipliedBy=l.times=function(e,i){var n,s,r,o,d,c,a,f,t,h,m,p,P,B,F,I=this,O=I.c,G=(e=new u(e,i)).c;if(!O||!G||!O[0]||!G[0])return!I.s||!e.s||O&&!O[0]&&!G||G&&!G[0]&&!O?e.c=e.e=e.s=null:(e.s*=I.s,!O||!G?e.c=e.e=null:(e.c=[0],e.e=0)),e;for(s=w(I.e/b)+w(e.e/b),e.s*=I.s,a=O.length,h=G.length,a<h&&(P=O,O=G,G=P,r=a,a=h,h=r),r=a+h,P=[];r--;P.push(0));for(B=z,F=Z,r=h;--r>=0;){for(n=0,m=G[r]%F,p=G[r]/F|0,d=a,o=r+d;o>r;)f=O[--d]%F,t=O[d]/F|0,c=p*f+t*m,f=m*f+c%F*F+P[o]+n,n=(f/B|0)+(c/F|0)+p*t,P[o--]=f%B;P[o]=n}return n?++s:P.splice(0,1),Ne(e,P,s)},l.negated=function(){var e=new u(this);return e.s=-e.s||null,e},l.plus=function(e,i){var n,s=this,r=s.s;if(e=new u(e,i),i=e.s,!r||!i)return new u(NaN);if(r!=i)return e.s=-i,s.minus(e);var o=s.e/b,d=e.e/b,c=s.c,a=e.c;if(!o||!d){if(!c||!a)return new u(r/0);if(!c[0]||!a[0])return a[0]?e:new u(c[0]?s:r*0)}if(o=w(o),d=w(d),c=c.slice(),r=o-d){for(r>0?(d=o,n=a):(r=-r,n=c),n.reverse();r--;n.push(0));n.reverse()}for(r=c.length,i=a.length,r-i<0&&(n=a,a=c,c=n,i=r),r=0;i;)r=(c[--i]=c[i]+a[i]+r)/z|0,c[i]=z===c[i]?0:c[i]%z;return r&&(c=[r].concat(c),++d),Ne(e,c,d)},l.precision=l.sd=function(e,i){var n,s,r,o=this;if(e!=null&&e!==!!e)return N(e,1,L),i==null?i=M:N(i,0,8),K(new u(o),e,i);if(!(n=o.c))return null;if(r=n.length-1,s=r*b+1,r=n[r]){for(;r%10==0;r/=10,s--);for(r=n[0];r>=10;r/=10,s++);}return e&&o.e+1>s&&(s=o.e+1),s},l.shiftedBy=function(e){return N(e,-de,de),this.times("1e"+e)},l.squareRoot=l.sqrt=function(){var e,i,n,s,r,o=this,d=o.c,c=o.s,a=o.e,f=q+4,t=new u("0.5");if(c!==1||!d||!d[0])return new u(!c||c<0&&(!d||d[0])?NaN:d?o:1/0);if(c=Math.sqrt(+ne(o)),c==0||c==1/0?(i=k(d),(i.length+a)%2==0&&(i+="0"),c=Math.sqrt(+i),a=w((a+1)/2)-(a<0||a%2),c==1/0?i="5e"+a:(i=c.toExponential(),i=i.slice(0,i.indexOf("e")+1)+a),n=new u(i)):n=new u(c+""),n.c[0]){for(a=n.e,c=a+f,c<3&&(c=0);;)if(r=n,n=t.times(r.plus(A(o,r,f,1))),k(r.c).slice(0,c)===(i=k(n.c)).slice(0,c))if(n.e<a&&--c,i=i.slice(c-3,c+1),i=="9999"||!s&&i=="4999"){if(!s&&(K(r,r.e+q+2,0),r.times(r).eq(o))){n=r;break}f+=4,c+=4,s=1}else{(!+i||!+i.slice(1)&&i.charAt(0)=="5")&&(K(n,n.e+q+2,1),e=!n.times(n).eq(o));break}}return K(n,n.e+q+1,M,e)},l.toExponential=function(e,i){return e!=null&&(N(e,0,L),e++),we(this,e,i,1)},l.toFixed=function(e,i){return e!=null&&(N(e,0,L),e=e+this.e+1),we(this,e,i)},l.toFormat=function(e,i,n){var s,r=this;if(n==null)e!=null&&i&&typeof i=="object"?(n=i,i=null):e&&typeof e=="object"?(n=e,e=i=null):n=Ae;else if(typeof n!="object")throw Error(T+"Argument not an object: "+n);if(s=r.toFixed(e,i),r.c){var o,d=s.split("."),c=+n.groupSize,a=+n.secondaryGroupSize,f=n.groupSeparator||"",t=d[0],h=d[1],m=r.s<0,p=m?t.slice(1):t,P=p.length;if(a&&(o=c,c=a,a=o,P-=o),c>0&&P>0){for(o=P%c||c,t=p.substr(0,o);o<P;o+=c)t+=f+p.substr(o,c);a>0&&(t+=f+p.slice(o)),m&&(t="-"+t)}s=h?t+(n.decimalSeparator||"")+((a=+n.fractionGroupSize)?h.replace(new RegExp("\\d{"+a+"}\\B","g"),"$&"+(n.fractionGroupSeparator||"")):h):t}return(n.prefix||"")+s+(n.suffix||"")},l.toFraction=function(e){var i,n,s,r,o,d,c,a,f,t,h,m,p=this,P=p.c;if(e!=null&&(c=new u(e),!c.isInteger()&&(c.c||c.s!==1)||c.lt(U)))throw Error(T+"Argument "+(c.isInteger()?"out of range: ":"not an integer: ")+ne(c));if(!P)return new u(p);for(i=new u(U),f=n=new u(U),s=a=new u(U),m=k(P),o=i.e=m.length-p.e-1,i.c[0]=he[(d=o%b)<0?b+d:d],e=!e||c.comparedTo(i)>0?o>0?i:f:c,d=J,J=1/0,c=new u(m),a.c[0]=0;t=A(c,i,0,1),r=n.plus(t.times(s)),r.comparedTo(e)!=1;)n=s,s=r,f=a.plus(t.times(r=f)),a=r,i=c.minus(t.times(r=i)),c=r;return r=A(e.minus(n),s,0,1),a=a.plus(r.times(f)),n=n.plus(r.times(s)),a.s=f.s=p.s,o=o*2,h=A(f,s,o,M).minus(p).abs().comparedTo(A(a,n,o,M).minus(p).abs())<1?[f,s]:[a,n],J=d,h},l.toNumber=function(){return+ne(this)},l.toPrecision=function(e,i){return e!=null&&N(e,1,L),we(this,e,i,2)},l.toString=function(e){var i,n=this,s=n.s,r=n.e;return r===null?s?(i="Infinity",s<0&&(i="-"+i)):i="NaN":(e==null?i=r<=H||r>=W?ue(k(n.c),r):ie(k(n.c),r,"0"):e===10&&ye?(n=K(new u(n),q+r+1,M),i=ie(k(n.c),n.e,"0")):(N(e,2,te.length,"Base"),i=D(ie(k(n.c),r,"0"),10,e,s,!0)),s<0&&n.c[0]&&(i="-"+i)),i},l.valueOf=l.toJSON=function(){return ne(this)},l._isBigNumber=!0,y!=null&&u.set(y),u}function w(y){var A=y|0;return y>0||y===A?A:A-1}function k(y){for(var A,D,j=1,l=y.length,U=y[0]+"";j<l;){for(A=y[j++]+"",D=b-A.length;D--;A="0"+A);U+=A}for(l=U.length;U.charCodeAt(--l)===48;);return U.slice(0,l+1||1)}function X(y,A){var D,j,l=y.c,U=A.c,q=y.s,M=A.s,H=y.e,W=A.e;if(!q||!M)return null;if(D=l&&!l[0],j=U&&!U[0],D||j)return D?j?0:-M:q;if(q!=M)return q;if(D=q<0,j=H==W,!l||!U)return j?0:!l^D?1:-1;if(!j)return H>W^D?1:-1;for(M=(H=l.length)<(W=U.length)?H:W,q=0;q<M;q++)if(l[q]!=U[q])return l[q]>U[q]^D?1:-1;return H==W?0:H>W^D?1:-1}function N(y,A,D,j){if(y<A||y>D||y!==x(y))throw Error(T+(j||"Argument")+(typeof y=="number"?y<A||y>D?" out of range: ":" not an integer: ":" not a primitive number: ")+String(y))}function se(y){var A=y.c.length-1;return w(y.e/b)==A&&y.c[A]%2!=0}function ue(y,A){return(y.length>1?y.charAt(0)+"."+y.slice(1):y)+(A<0?"e":"e+")+A}function ie(y,A,D){var j,l;if(A<0){for(l=D+".";++A;l+=D);y=l+y}else if(j=y.length,++A>j){for(l=D,A-=j;--A;l+=D);y+=l}else A<j&&(y=y.slice(0,A)+"."+y.slice(A));return y}C=_(),C.default=C.BigNumber=C,g.exports?g.exports=C:(v||(v=typeof self<"u"&&self?self:window),v.BigNumber=C)})(Q)})(Se);var Ee=Se.exports,fe={},Be=Q&&Q.__importDefault||function(g){return g&&g.__esModule?g:{default:g}};Object.defineProperty(fe,"__esModule",{value:!0});fe.toSmall=fe.getGasPriceForChainName=void 0;const Re=Be(Ee),je=6,Le=async(g,v="average")=>{var C;const S=await fetch("https://assets.leapwallet.io/cosmos-registry/v1/gas/gas-prices.json");if(!S.ok)throw new Error(`Failed to get Gas price ${S.status}`);const E=await S.json();return console.log(E,g,v),(C=E==null?void 0:E[g])===null||C===void 0?void 0:C[v]};fe.getGasPriceForChainName=Le;function Ue(g,v=je){return new Re.default(g).times(Math.pow(10,v)).toFixed().toString()}fe.toSmall=Ue;var ve={};Object.defineProperty(ve,"__esModule",{value:!0});const Fe={"eightball-1":{chainId:"eightball-1",chainName:"8ball",bech32Config:{bech32PrefixAccAddr:"8ball"},bip44:{coinType:118},denom:"uebl",decimals:6},"agoric-3":{chainId:"agoric-3",chainName:"agoric",bech32Config:{bech32PrefixAccAddr:"agoric"},bip44:{coinType:564},denom:"ubld",decimals:6},"akashnet-2":{chainId:"akashnet-2",chainName:"akash",bech32Config:{bech32PrefixAccAddr:"akash"},bip44:{coinType:118},denom:"uakt",decimals:6},"archway-1":{chainId:"archway-1",chainName:"archway",bech32Config:{bech32PrefixAccAddr:"archway"},bip44:{coinType:118},denom:"aarch",decimals:18},arkh:{chainId:"arkh",chainName:"arkh",bech32Config:{bech32PrefixAccAddr:"arkh"},bip44:{coinType:118},denom:"arkh",decimals:6},"xstaxy-1":{chainId:"xstaxy-1",chainName:"aura",bech32Config:{bech32PrefixAccAddr:"aura"},bip44:{coinType:118},denom:"uaura",decimals:6},"axelar-dojo-1":{chainId:"axelar-dojo-1",chainName:"axelar",bech32Config:{bech32PrefixAccAddr:"axelar"},bip44:{coinType:118},denom:"uaxl",decimals:6},"laozi-mainnet":{chainId:"laozi-mainnet",chainName:"bandchain",bech32Config:{bech32PrefixAccAddr:"band"},bip44:{coinType:494},denom:"uband",decimals:6},"beezee-1":{chainId:"beezee-1",chainName:"beezee",bech32Config:{bech32PrefixAccAddr:"bze"},bip44:{coinType:118},denom:"ubze",decimals:6},"bitcanna-1":{chainId:"bitcanna-1",chainName:"bitcanna",bech32Config:{bech32PrefixAccAddr:"bcna"},bip44:{coinType:118},denom:"ubcna",decimals:6},"bitsong-2b":{chainId:"bitsong-2b",chainName:"bitsong",bech32Config:{bech32PrefixAccAddr:"bitsong"},bip44:{coinType:639},denom:"ubtsg",decimals:6},"bluzelle-9":{chainId:"bluzelle-9",chainName:"bluzelle",bech32Config:{bech32PrefixAccAddr:"bluzelle"},bip44:{coinType:483},denom:"ubnt",decimals:6},bostrom:{chainId:"bostrom",chainName:"bostrom",bech32Config:{bech32PrefixAccAddr:"bostrom"},bip44:{coinType:118},denom:"boot",decimals:0},"carbon-1":{chainId:"carbon-1",chainName:"carbon",bech32Config:{bech32PrefixAccAddr:"swth"},bip44:{coinType:118},denom:"swth",decimals:8},"perun-1":{chainId:"perun-1",chainName:"chain4energy",bech32Config:{bech32PrefixAccAddr:"c4e"},bip44:{coinType:4444},denom:"uc4e",decimals:6},"cheqd-mainnet-1":{chainId:"cheqd-mainnet-1",chainName:"cheqd",bech32Config:{bech32PrefixAccAddr:"cheqd"},bip44:{coinType:118},denom:"ncheq",decimals:9},"morocco-1":{chainId:"morocco-1",chainName:"chronicnetwork",bech32Config:{bech32PrefixAccAddr:"chronic"},bip44:{coinType:118},denom:"ucht",decimals:6},"comdex-1":{chainId:"comdex-1",chainName:"comdex",bech32Config:{bech32PrefixAccAddr:"comdex"},bip44:{coinType:118},denom:"ucmdx",decimals:6},"commercio-3":{chainId:"commercio-3",chainName:"commercionetwork",bech32Config:{bech32PrefixAccAddr:"did:com:"},bip44:{coinType:701},denom:"ucommercio",decimals:6},"centauri-1":{chainId:"centauri-1",chainName:"composable",bech32Config:{bech32PrefixAccAddr:"centauri"},bip44:{coinType:118},denom:"ppica",decimals:12},"coreum-mainnet-1":{chainId:"coreum-mainnet-1",chainName:"coreum",bech32Config:{bech32PrefixAccAddr:"core"},bip44:{coinType:990},denom:"ucore",decimals:6},"cosmoshub-4":{chainId:"cosmoshub-4",chainName:"cosmoshub",bech32Config:{bech32PrefixAccAddr:"cosmos"},bip44:{coinType:118},denom:"uatom",decimals:6},"crescent-1":{chainId:"crescent-1",chainName:"crescent",bech32Config:{bech32PrefixAccAddr:"cre"},bip44:{coinType:118},denom:"ucre",decimals:6},"crypto-org-chain-mainnet-1":{chainId:"crypto-org-chain-mainnet-1",chainName:"cryptoorgchain",bech32Config:{bech32PrefixAccAddr:"cro"},bip44:{coinType:394},denom:"basecro",decimals:8},"cudos-1":{chainId:"cudos-1",chainName:"cudos",bech32Config:{bech32PrefixAccAddr:"cudos"},bip44:{coinType:118},denom:"acudos",decimals:18},"mainnet-3":{chainId:"mainnet-3",chainName:"decentr",bech32Config:{bech32PrefixAccAddr:"decentr"},bip44:{coinType:118},denom:"udec",decimals:6},"desmos-mainnet":{chainId:"desmos-mainnet",chainName:"desmos",bech32Config:{bech32PrefixAccAddr:"desmos"},bip44:{coinType:852},denom:"udsm",decimals:6},"dig-1":{chainId:"dig-1",chainName:"dig",bech32Config:{bech32PrefixAccAddr:"dig"},bip44:{coinType:118},denom:"udig",decimals:6},"dyson-mainnet-01":{chainId:"dyson-mainnet-01",chainName:"dyson",bech32Config:{bech32PrefixAccAddr:"dys"},bip44:{coinType:118},denom:"dys",decimals:0},"emoney-3":{chainId:"emoney-3",chainName:"emoney",bech32Config:{bech32PrefixAccAddr:"emoney"},bip44:{coinType:118},denom:"ungm",decimals:6},"empowerchain-1":{chainId:"empowerchain-1",chainName:"empowerchain",bech32Config:{bech32PrefixAccAddr:"empower"},bip44:{coinType:118},denom:"umpwr",decimals:6},"fetchhub-4":{chainId:"fetchhub-4",chainName:"fetchhub",bech32Config:{bech32PrefixAccAddr:"fetch"},bip44:{coinType:118},denom:"afet",decimals:18},"colosseum-1":{chainId:"colosseum-1",chainName:"firmachain",bech32Config:{bech32PrefixAccAddr:"firma"},bip44:{coinType:7777777},denom:"ufct",decimals:6},"galaxy-1":{chainId:"galaxy-1",chainName:"galaxy",bech32Config:{bech32PrefixAccAddr:"galaxy"},bip44:{coinType:118},denom:"uglx",decimals:6},"genesis_29-2":{chainId:"genesis_29-2",chainName:"genesisl1",bech32Config:{bech32PrefixAccAddr:"genesis"},bip44:{coinType:118},denom:"el1",decimals:18},gitopia:{chainId:"gitopia",chainName:"gitopia",bech32Config:{bech32PrefixAccAddr:"gitopia"},bip44:{coinType:118},denom:"ulore",decimals:6},"gravity-bridge-3":{chainId:"gravity-bridge-3",chainName:"gravitybridge",bech32Config:{bech32PrefixAccAddr:"gravity"},bip44:{coinType:118},denom:"ugraviton",decimals:6},Antora:{chainId:"Antora",chainName:"idep",bech32Config:{bech32PrefixAccAddr:"idep"},bip44:{coinType:118},denom:"idep",decimals:6},"ixo-5":{chainId:"ixo-5",chainName:"impacthub",bech32Config:{bech32PrefixAccAddr:"ixo"},bip44:{coinType:118},denom:"uixo",decimals:6},"irishub-1":{chainId:"irishub-1",chainName:"irisnet",bech32Config:{bech32PrefixAccAddr:"iaa"},bip44:{coinType:118},denom:"uiris",decimals:6},"jackal-1":{chainId:"jackal-1",chainName:"jackal",bech32Config:{bech32PrefixAccAddr:"jkl"},bip44:{coinType:118},denom:"ujkl",decimals:6},"juno-1":{chainId:"juno-1",chainName:"juno",bech32Config:{bech32PrefixAccAddr:"juno"},bip44:{coinType:118},denom:"ujuno",decimals:6},"kava_2222-10":{chainId:"kava_2222-10",chainName:"kava",bech32Config:{bech32PrefixAccAddr:"kava"},bip44:{coinType:459},denom:"ukava",decimals:6},"kichain-2":{chainId:"kichain-2",chainName:"kichain",bech32Config:{bech32PrefixAccAddr:"ki"},bip44:{coinType:118},denom:"uxki",decimals:6},"kaiyo-1":{chainId:"kaiyo-1",chainName:"kujira",bech32Config:{bech32PrefixAccAddr:"kujira"},bip44:{coinType:118},denom:"ukuji",decimals:6},"kyve-1":{chainId:"kyve-1",chainName:"kyve",bech32Config:{bech32PrefixAccAddr:"kyve"},bip44:{coinType:118},denom:"ukyve",decimals:6},"likecoin-mainnet-2":{chainId:"likecoin-mainnet-2",chainName:"likecoin",bech32Config:{bech32PrefixAccAddr:"like"},bip44:{coinType:118},denom:"nanolike",decimals:9},"loyal-main-02":{chainId:"loyal-main-02",chainName:"loyal",bech32Config:{bech32PrefixAccAddr:"loyal"},bip44:{coinType:118},denom:"ulyl",decimals:6},LumenX:{chainId:"LumenX",chainName:"lumenx",bech32Config:{bech32PrefixAccAddr:"lumen"},bip44:{coinType:118},denom:"ulumen",decimals:6},"lum-network-1":{chainId:"lum-network-1",chainName:"lumnetwork",bech32Config:{bech32PrefixAccAddr:"lum"},bip44:{coinType:880},denom:"ulum",decimals:6},"mars-1":{chainId:"mars-1",chainName:"mars",bech32Config:{bech32PrefixAccAddr:"mars"},bip44:{coinType:118},denom:"umars",decimals:6},"mayachain-mainnet-v1":{chainId:"mayachain-mainnet-v1",chainName:"mayachain",bech32Config:{bech32PrefixAccAddr:"maya"},bip44:{coinType:931},denom:"cacao",decimals:10},"meme-1":{chainId:"meme-1",chainName:"meme",bech32Config:{bech32PrefixAccAddr:"meme"},bip44:{coinType:118},denom:"umeme",decimals:6},"migaloo-1":{chainId:"migaloo-1",chainName:"migaloo",bech32Config:{bech32PrefixAccAddr:"migaloo"},bip44:{coinType:118},denom:"uwhale",decimals:6},mainnet:{chainId:"mainnet",chainName:"mises",bech32Config:{bech32PrefixAccAddr:"mises"},bip44:{coinType:118},denom:"umis",decimals:6},"mun-1":{chainId:"mun-1",chainName:"mun",bech32Config:{bech32PrefixAccAddr:"mun"},bip44:{coinType:118},denom:"umun",decimals:6},"neutron-1":{chainId:"neutron-1",chainName:"neutron",bech32Config:{bech32PrefixAccAddr:"neutron"},bip44:{coinType:118},denom:"untrn",decimals:6},"noble-1":{chainId:"noble-1",chainName:"noble",bech32Config:{bech32PrefixAccAddr:"noble"},bip44:{coinType:118},denom:"ustake",decimals:6},"nois-1":{chainId:"nois-1",chainName:"nois",bech32Config:{bech32PrefixAccAddr:"nois"},bip44:{coinType:118},denom:"unois",decimals:6},"pirin-1":{chainId:"pirin-1",chainName:"nolus",bech32Config:{bech32PrefixAccAddr:"nolus"},bip44:{coinType:118},denom:"unls",decimals:6},nyx:{chainId:"nyx",chainName:"nyx",bech32Config:{bech32PrefixAccAddr:"n"},bip44:{coinType:118},denom:"unyx",decimals:6},octa:{chainId:"octa",chainName:"octa",bech32Config:{bech32PrefixAccAddr:"octa"},bip44:{coinType:118},denom:"uocta",decimals:6},"odin-mainnet-freya":{chainId:"odin-mainnet-freya",chainName:"odin",bech32Config:{bech32PrefixAccAddr:"odin"},bip44:{coinType:118},denom:"loki",decimals:6},"omniflixhub-1":{chainId:"omniflixhub-1",chainName:"omniflixhub",bech32Config:{bech32PrefixAccAddr:"omniflix"},bip44:{coinType:118},denom:"uflix",decimals:6},"onomy-mainnet-1":{chainId:"onomy-mainnet-1",chainName:"onomy",bech32Config:{bech32PrefixAccAddr:"onomy"},bip44:{coinType:118},denom:"anom",decimals:18},Oraichain:{chainId:"Oraichain",chainName:"oraichain",bech32Config:{bech32PrefixAccAddr:"orai"},bip44:{coinType:118},denom:"orai",decimals:6},"osmosis-1":{chainId:"osmosis-1",chainName:"osmosis",bech32Config:{bech32PrefixAccAddr:"osmo"},bip44:{coinType:118},denom:"uosmo",decimals:6},"panacea-3":{chainId:"panacea-3",chainName:"panacea",bech32Config:{bech32PrefixAccAddr:"panacea"},bip44:{coinType:371},denom:"umed",decimals:6},"passage-2":{chainId:"passage-2",chainName:"passage",bech32Config:{bech32PrefixAccAddr:"pasg"},bip44:{coinType:118},denom:"upasg",decimals:6},"passage-1":{chainId:"passage-1",chainName:"passage1",bech32Config:{bech32PrefixAccAddr:"pasg"},bip44:{coinType:118},denom:"upasg",decimals:6},"core-1":{chainId:"core-1",chainName:"persistence",bech32Config:{bech32PrefixAccAddr:"persistence"},bip44:{coinType:118},denom:"uxprt",decimals:6},"pio-mainnet-1":{chainId:"pio-mainnet-1",chainName:"provenance",bech32Config:{bech32PrefixAccAddr:"pb"},bip44:{coinType:505},denom:"nhash",decimals:9},"quasar-1":{chainId:"quasar-1",chainName:"quasar",bech32Config:{bech32PrefixAccAddr:"quasar"},bip44:{coinType:118},denom:"uqsr",decimals:6},"quicksilver-2":{chainId:"quicksilver-2",chainName:"quicksilver",bech32Config:{bech32PrefixAccAddr:"quick"},bip44:{coinType:118},denom:"uqck",decimals:6},"qwoyn-1":{chainId:"qwoyn-1",chainName:"qwoyn",bech32Config:{bech32PrefixAccAddr:"qwoyn"},bip44:{coinType:118},denom:"uqwoyn",decimals:6},"reb_1111-1":{chainId:"reb_1111-1",chainName:"rebus",bech32Config:{bech32PrefixAccAddr:"rebus"},bip44:{coinType:118},denom:"arebus",decimals:18},"regen-1":{chainId:"regen-1",chainName:"regen",bech32Config:{bech32PrefixAccAddr:"regen"},bip44:{coinType:118},denom:"uregen",decimals:6},"titan-1":{chainId:"titan-1",chainName:"rizon",bech32Config:{bech32PrefixAccAddr:"rizon"},bip44:{coinType:118},denom:"uatolo",decimals:6},"secret-4":{chainId:"secret-4",chainName:"secretnetwork",bech32Config:{bech32PrefixAccAddr:"secret"},bip44:{coinType:529},denom:"uscrt",decimals:6},"pacific-1":{chainId:"pacific-1",chainName:"sei",bech32Config:{bech32PrefixAccAddr:"sei"},bip44:{coinType:118},denom:"usei",decimals:6},"sentinelhub-2":{chainId:"sentinelhub-2",chainName:"sentinel",bech32Config:{bech32PrefixAccAddr:"sent"},bip44:{coinType:118},denom:"udvpn",decimals:6},"ShareRing-VoyagerNet":{chainId:"ShareRing-VoyagerNet",chainName:"shareledger",bech32Config:{bech32PrefixAccAddr:"shareledger"},bip44:{coinType:118},denom:"nshr",decimals:9},"shentu-2.2":{chainId:"shentu-2.2",chainName:"shentu",bech32Config:{bech32PrefixAccAddr:"certik"},bip44:{coinType:118},denom:"uctk",decimals:6},"sommelier-3":{chainId:"sommelier-3",chainName:"sommelier",bech32Config:{bech32PrefixAccAddr:"somm"},bip44:{coinType:118},denom:"usomm",decimals:6},"stafihub-1":{chainId:"stafihub-1",chainName:"stafihub",bech32Config:{bech32PrefixAccAddr:"stafi"},bip44:{coinType:118},denom:"ufis",decimals:6},"stargaze-1":{chainId:"stargaze-1",chainName:"stargaze",bech32Config:{bech32PrefixAccAddr:"stars"},bip44:{coinType:118},denom:"ustars",decimals:6},"iov-mainnet-ibc":{chainId:"iov-mainnet-ibc",chainName:"starname",bech32Config:{bech32PrefixAccAddr:"star"},bip44:{coinType:234},denom:"uiov",decimals:6},"stride-1":{chainId:"stride-1",chainName:"stride",bech32Config:{bech32PrefixAccAddr:"stride"},bip44:{coinType:118},denom:"ustrd",decimals:6},"teritori-1":{chainId:"teritori-1",chainName:"teritori",bech32Config:{bech32PrefixAccAddr:"tori"},bip44:{coinType:118},denom:"utori",decimals:6},"columbus-5":{chainId:"columbus-5",chainName:"terra",bech32Config:{bech32PrefixAccAddr:"terra"},bip44:{coinType:330},denom:"uluna",decimals:6},"phoenix-1":{chainId:"phoenix-1",chainName:"terra2",bech32Config:{bech32PrefixAccAddr:"terra"},bip44:{coinType:330},denom:"uluna",decimals:6},"tgrade-mainnet-1":{chainId:"tgrade-mainnet-1",chainName:"tgrade",bech32Config:{bech32PrefixAccAddr:"tgrade"},bip44:{coinType:118},denom:"utgd",decimals:6},"umee-1":{chainId:"umee-1",chainName:"umee",bech32Config:{bech32PrefixAccAddr:"umee"},bip44:{coinType:118},denom:"uumee",decimals:6},"FUND-MainNet-2":{chainId:"FUND-MainNet-2",chainName:"unification",bech32Config:{bech32PrefixAccAddr:"und"},bip44:{coinType:5555},denom:"nund",decimals:9},"ununifi-beta-v1":{chainId:"ununifi-beta-v1",chainName:"ununifi",bech32Config:{bech32PrefixAccAddr:"ununifi"},bip44:{coinType:118},denom:"uguu",decimals:6},"vidulum-1":{chainId:"vidulum-1",chainName:"vidulum",bech32Config:{bech32PrefixAccAddr:"vdl"},bip44:{coinType:370},denom:"uvdl",decimals:6}};ve.default=Fe;var ke=Q&&Q.__importDefault||function(g){return g&&g.__esModule?g:{default:g}};Object.defineProperty(re,"__esModule",{value:!0});re.signArbitrary=re.getOfflineSigner=re.CosmjsOfflineSigner=void 0;const _e=ke(Ee),ge=Ce,Ge=fe,ze=ke(ve);class qe{constructor(v){this.chainId=v}async getAccounts(){const v=await(0,ge.getKey)(this.chainId);return[{address:v.address,algo:"secp256k1",pubkey:v.pubkey}]}async signDirect(v,C){if(this.chainId!==C.chainId)throw new Error("Chain ID does not match signer chain ID");if((await this.getAccounts()).find(E=>E.address!==v))throw new Error("Signer address does not match wallet address");return(0,ge.requestSignature)(this.chainId,v,C)}async signAmino(v,C,S){if(this.chainId!==C.chain_id)throw new Error("Chain ID does not match signer chain ID");if((await this.getAccounts()).find(T=>T.address!==v))throw new Error("Signer address does not match wallet address");const x=ze.default[this.chainId];if(!(S!=null&&S.preferNoSetFee)&&x&&x.denom){const T=await(0,Ge.getGasPriceForChainName)(x.chainName),V="gasLimit"in C.fee?C.fee.gasLimit:C.fee.gas;if(T){const z=[{amount:new _e.default(T).multipliedBy(new _e.default(V)).decimalPlaces(0,1).toString(),denom:x.denom}];C.fee.amount=z}}return(0,ge.requestSignAmino)(this.chainId,v,C)}}re.CosmjsOfflineSigner=qe;function $e(g){return new qe(g)}re.getOfflineSigner=$e;async function Xe(g,v,C){const{signDoc:S}=He(v,C);return(await(0,ge.requestSignAmino)(g,v,S,{isADR36:!0})).signature}re.signArbitrary=Xe;function He(g,v){let C=!1,S="";return typeof v=="string"?(S=Buffer.from(v).toString("base64"),C=!0):S=Buffer.from(v).toString("base64"),{signDoc:{chain_id:"",account_number:"0",sequence:"0",fee:{gas:"0",amount:[]},msgs:[{type:"sign/MsgSignData",value:{signer:g,b64Data:S}}],memo:""},isADR36WithString:C}}(function(g){var v=Q&&Q.__createBinding||(Object.create?function(S,E,x,T){T===void 0&&(T=x);var V=Object.getOwnPropertyDescriptor(E,x);(!V||("get"in V?!E.__esModule:V.writable||V.configurable))&&(V={enumerable:!0,get:function(){return E[x]}}),Object.defineProperty(S,T,V)}:function(S,E,x,T){T===void 0&&(T=x),S[T]=E[x]}),C=Q&&Q.__exportStar||function(S,E){for(var x in S)x!=="default"&&!Object.prototype.hasOwnProperty.call(E,x)&&v(E,S,x)};Object.defineProperty(g,"__esModule",{value:!0}),C(Ce,g),C(Oe,g),C(re,g)})(Me);export{Me as d};
