var e,t,r,n,i,o,a,s,c,l,u,d,h,p,f,v,g=globalThis;function m(e){return e&&e.__esModule?e.default:e}var y={},b={},_=function(e){return e&&e.Math===Math&&e};b=_("object"==typeof globalThis&&globalThis)||_("object"==typeof window&&window)||_("object"==typeof self&&self)||_("object"==typeof g&&g)||_("object"==typeof b&&b)||function(){return this}()||Function("return this")();var w={},k={};w=!(k=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var E={},L={};L=!k(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var S=Function.prototype.call;E=L?S.bind(S):function(){return S.apply(S,arguments)};var $={}.propertyIsEnumerable,T=Object.getOwnPropertyDescriptor;n=T&&!$.call({1:2},1)?function(e){var t=T(this,e);return!!t&&t.enumerable}:$;var P={};P=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var j={},O={},M={},H=Function.prototype,x=H.call,F=L&&H.bind.bind(x,x),q={},I=(M=L?F:function(e){return function(){return x.apply(e,arguments)}})({}.toString),C=M("".slice);q=function(e){return C(I(e),8,-1)};var N=Object,A=M("".split);O=k(function(){return!N("z").propertyIsEnumerable(0)})?function(e){return"String"===q(e)?A(e,""):N(e)}:N;var B={},R={};R=function(e){return null==e};var D=TypeError;B=function(e){if(R(e))throw new D("Can't call method on "+e);return e},j=function(e){return O(B(e))};var G={},U={},z={},W={},J="object"==typeof document&&document.all;W=void 0===J&&void 0!==J?function(e){return"function"==typeof e||e===J}:function(e){return"function"==typeof e},z=function(e){return"object"==typeof e?null!==e:W(e)};var Y={},Q={};Q=function(e,t){var r;return arguments.length<2?(r=b[e],W(r)?r:void 0):b[e]&&b[e][t]};var K={};K=M({}.isPrototypeOf);var V={},X={},Z={},ee={};ee="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var et=b.process,er=b.Deno,en=et&&et.versions||er&&er.version,ei=en&&en.v8;ei&&(o=(i=ei.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!o&&ee&&(!(i=ee.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=ee.match(/Chrome\/(\d+)/))&&(o=+i[1]),Z=o;var eo=b.String;V=(X=!!Object.getOwnPropertySymbols&&!k(function(){var e=Symbol("symbol detection");return!eo(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&Z&&Z<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ea=Object;Y=V?function(e){return"symbol"==typeof e}:function(e){var t=Q("Symbol");return W(t)&&K(t.prototype,ea(e))};var es={},ec={},el={},eu=String;el=function(e){try{return eu(e)}catch(e){return"Object"}};var ed=TypeError;ec=function(e){if(W(e))return e;throw new ed(el(e)+" is not a function")},es=function(e,t){var r=e[t];return R(r)?void 0:ec(r)};var eh={},ep=TypeError;eh=function(e,t){var r,n;if("string"===t&&W(r=e.toString)&&!z(n=E(r,e))||W(r=e.valueOf)&&!z(n=E(r,e))||"string"!==t&&W(r=e.toString)&&!z(n=E(r,e)))return n;throw new ep("Can't convert object to primitive value")};var ef={},ev={},eg={};eg=!1;var em={},ey=Object.defineProperty;em=function(e,t){try{ey(b,e,{value:t,configurable:!0,writable:!0})}catch(r){b[e]=t}return t};var eb="__core-js_shared__",e_=ev=b[eb]||em(eb,{});(e_.versions||(e_.versions=[])).push({version:"3.37.1",mode:eg?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE",source:"https://github.com/zloirock/core-js"}),ef=function(e,t){return ev[e]||(ev[e]=t||{})};var ew={},ek={},eE=Object;ek=function(e){return eE(B(e))};var eL=M({}.hasOwnProperty);ew=Object.hasOwn||function(e,t){return eL(ek(e),t)};var eS={},e$=0,eT=Math.random(),eP=M(1..toString);eS=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eP(++e$+eT,36)};var ej=b.Symbol,eO=ef("wks"),eM=V?ej.for||ej:ej&&ej.withoutSetter||eS,eH=TypeError,ex=(ew(eO,e="toPrimitive")||(eO[e]=X&&ew(ej,e)?ej[e]:eM("Symbol."+e)),eO[e]);U=function(e,t){if(!z(e)||Y(e))return e;var r,n=es(e,ex);if(n){if(void 0===t&&(t="default"),r=E(n,e,t),!z(r)||Y(r))return r;throw new eH("Can't convert object to primitive value")}return void 0===t&&(t="number"),eh(e,t)},G=function(e){var t=U(e,"string");return Y(t)?t:t+""};var eF={},eq={},eI=b.document,eC=z(eI)&&z(eI.createElement);eq=function(e){return eC?eI.createElement(e):{}},eF=!w&&!k(function(){return 7!==Object.defineProperty(eq("div"),"a",{get:function(){return 7}}).a});var eN=Object.getOwnPropertyDescriptor;r=w?eN:function(e,t){if(e=j(e),t=G(t),eF)try{return eN(e,t)}catch(e){}if(ew(e,t))return P(!E(n,e,t),e[t])};var eA={},eB={};eB=w&&k(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eR={},eD=String,eG=TypeError;eR=function(e){if(z(e))return e;throw new eG(eD(e)+" is not an object")};var eU=TypeError,ez=Object.defineProperty,eW=Object.getOwnPropertyDescriptor,eJ="enumerable",eY="configurable",eQ="writable";a=w?eB?function(e,t,r){if(eR(e),t=G(t),eR(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eQ in r&&!r[eQ]){var n=eW(e,t);n&&n[eQ]&&(e[t]=r.value,r={configurable:eY in r?r[eY]:n[eY],enumerable:eJ in r?r[eJ]:n[eJ],writable:!1})}return ez(e,t,r)}:ez:function(e,t,r){if(eR(e),t=G(t),eR(r),eF)try{return ez(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eU("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eA=w?function(e,t,r){return a(e,t,P(1,r))}:function(e,t,r){return e[t]=r,e};var eK={},eV={},eX=Function.prototype,eZ=w&&Object.getOwnPropertyDescriptor,e0=ew(eX,"name")&&(!w||w&&eZ(eX,"name").configurable),e1={},e2=M(Function.toString);W(ev.inspectSource)||(ev.inspectSource=function(e){return e2(e)}),e1=ev.inspectSource;var e3={},e4={},e7=b.WeakMap;e4=W(e7)&&/native code/.test(String(e7));var e8={},e9=ef("keys");e8=function(e){return e9[e]||(e9[e]=eS(e))};var e5={};e5={};var e6="Object already initialized",te=b.TypeError,tt=b.WeakMap;if(e4||ev.state){var tr=ev.state||(ev.state=new tt);tr.get=tr.get,tr.has=tr.has,tr.set=tr.set,s=function(e,t){if(tr.has(e))throw new te(e6);return t.facade=e,tr.set(e,t),t},c=function(e){return tr.get(e)||{}},l=function(e){return tr.has(e)}}else{var tn=e8("state");e5[tn]=!0,s=function(e,t){if(ew(e,tn))throw new te(e6);return t.facade=e,eA(e,tn,t),t},c=function(e){return ew(e,tn)?e[tn]:{}},l=function(e){return ew(e,tn)}}var ti=(e3={set:s,get:c,has:l,enforce:function(e){return l(e)?c(e):s(e,{})},getterFor:function(e){return function(t){var r;if(!z(t)||(r=c(t)).type!==e)throw new te("Incompatible receiver, "+e+" required");return r}}}).enforce,to=e3.get,ta=String,ts=Object.defineProperty,tc=M("".slice),tl=M("".replace),tu=M([].join),td=w&&!k(function(){return 8!==ts(function(){},"length",{value:8}).length}),th=String(String).split("String"),tp=eV=function(e,t,r){"Symbol("===tc(ta(t),0,7)&&(t="["+tl(ta(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!ew(e,"name")||e0&&e.name!==t)&&(w?ts(e,"name",{value:t,configurable:!0}):e.name=t),td&&r&&ew(r,"arity")&&e.length!==r.arity&&ts(e,"length",{value:r.arity});try{r&&ew(r,"constructor")&&r.constructor?w&&ts(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=ti(e);return ew(n,"source")||(n.source=tu(th,"string"==typeof t?t:"")),e};Function.prototype.toString=tp(function(){return W(this)&&to(this).source||e1(this)},"toString"),eK=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(W(r)&&eV(r,o,n),n.global)i?e[t]=r:em(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:a(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tf={},tv={},tg={},tm={},ty={},tb={},t_=Math.ceil,tw=Math.floor;tb=Math.trunc||function(e){var t=+e;return(t>0?tw:t_)(t)},ty=function(e){var t=+e;return t!=t||0===t?0:tb(t)};var tk=Math.max,tE=Math.min;tm=function(e,t){var r=ty(e);return r<0?tk(r+t,0):tE(r,t)};var tL={},tS={},t$=Math.min;tS=function(e){var t=ty(e);return t>0?t$(t,9007199254740991):0},tL=function(e){return tS(e.length)};var tT=function(e){return function(t,r,n){var i,o=j(t),a=tL(o);if(0===a)return!e&&-1;var s=tm(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tP={includes:tT(!0),indexOf:tT(!1)}.indexOf,tj=M([].push);tg=function(e,t){var r,n=j(e),i=0,o=[];for(r in n)!ew(e5,r)&&ew(n,r)&&tj(o,r);for(;t.length>i;)ew(n,r=t[i++])&&(~tP(o,r)||tj(o,r));return o};var tO=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");u=Object.getOwnPropertyNames||function(e){return tg(e,tO)},d=Object.getOwnPropertySymbols;var tM=M([].concat);tv=Q("Reflect","ownKeys")||function(e){var t=u(eR(e));return d?tM(t,d(e)):t},tf=function(e,t,n){for(var i=tv(t),o=0;o<i.length;o++){var s=i[o];ew(e,s)||n&&ew(n,s)||a(e,s,r(t,s))}};var tH={},tx=/#|\.prototype\./,tF=function(e,t){var r=tI[tq(e)];return r===tN||r!==tC&&(W(t)?k(t):!!t)},tq=tF.normalize=function(e){return String(e).replace(tx,".").toLowerCase()},tI=tF.data={},tC=tF.NATIVE="N",tN=tF.POLYFILL="P";tH=tF,y=function(e,t){var n,i,o,a,s,c=e.target,l=e.global,u=e.stat;if(n=l?b:u?b[c]||em(c,{}):b[c]&&b[c].prototype)for(i in t){if(a=t[i],o=e.dontCallGetSet?(s=r(n,i))&&s.value:n[i],!tH(l?i:c+(u?".":"#")+i,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tf(a,o)}(e.sham||o&&o.sham)&&eA(a,"sham",!0),eK(n,i,a,e)}};var tA={},tB={},tR=Function.prototype,tD=tR.apply,tG=tR.call;tB="object"==typeof Reflect&&Reflect.apply||(L?tG.bind(tD):function(){return tG.apply(tD,arguments)});var tU={},tz={},tW=(tz=function(e){if("Function"===q(e))return M(e)})(tz.bind);tU=function(e,t){return ec(e),void 0===t?e:L?tW(e,t):function(){return e.apply(t,arguments)}};var tJ={};tJ=Q("document","documentElement");var tY={};tY=M([].slice);var tQ={},tK=TypeError;tQ=function(e,t){if(e<t)throw new tK("Not enough arguments");return e};var tV={};tV=/(?:ipad|iphone|ipod).*applewebkit/i.test(ee);var tX={};tX="process"===q(b.process);var tZ=b.setImmediate,t0=b.clearImmediate,t1=b.process,t2=b.Dispatch,t3=b.Function,t4=b.MessageChannel,t7=b.String,t8=0,t9={},t5="onreadystatechange";k(function(){h=b.location});var t6=function(e){if(ew(t9,e)){var t=t9[e];delete t9[e],t()}},re=function(e){return function(){t6(e)}},rt=function(e){t6(e.data)},rr=function(e){b.postMessage(t7(e),h.protocol+"//"+h.host)};tZ&&t0||(tZ=function(e){tQ(arguments.length,1);var t=W(e)?e:t3(e),r=tY(arguments,1);return t9[++t8]=function(){tB(t,void 0,r)},p(t8),t8},t0=function(e){delete t9[e]},tX?p=function(e){t1.nextTick(re(e))}:t2&&t2.now?p=function(e){t2.now(re(e))}:t4&&!tV?(v=(f=new t4).port2,f.port1.onmessage=rt,p=tU(v.postMessage,v)):b.addEventListener&&W(b.postMessage)&&!b.importScripts&&h&&"file:"!==h.protocol&&!k(rr)?(p=rr,b.addEventListener("message",rt,!1)):p=t5 in eq("script")?function(e){tJ.appendChild(eq("script"))[t5]=function(){tJ.removeChild(this),t6(e)}}:function(e){setTimeout(re(e),0)});var rn=(tA={set:tZ,clear:t0}).clear;y({global:!0,bind:!0,enumerable:!0,forced:b.clearImmediate!==rn},{clearImmediate:rn});var ri=tA.set,ro={},ra={};ra="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rs=b.Function,rc=/MSIE .\./.test(ee)||ra&&((t=b.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));ro=function(e,t){var r=t?2:1;return rc?function(n,i){var o=tQ(arguments.length,1)>r,a=W(n)?n:rs(n),s=o?tY(arguments,r):[],c=o?function(){tB(a,this,s)}:a;return t?e(c,i):e(c)}:e};var rl=b.setImmediate?ro(ri,!1):ri;y({global:!0,bind:!0,enumerable:!0,forced:b.setImmediate!==rl},{setImmediate:rl});var ru=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof g?r:g).prototype);return i(c,"_invoke",{value:(a=new T(o||[]),s=h,function(r,i){if(s===p)throw Error("Generator is already running");if(s===f){if("throw"===r)throw i;return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v;var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(o,a);if(c){if(c===v)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===h)throw s=f,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=p;var l=d(e,n,a);if("normal"===l.type){if(s=a.done?f:"suspendedYield",l.arg===v)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(s=f,a.method="throw",a.arg=l.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var h="suspendedStart",p="executing",f="completed",v={};function g(){}function m(){}function y(){}var b={};l(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(P([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=y.prototype=g.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function L(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var l=c.arg,u=l.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(u).then(function(e){l.value=e,a(l)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function $(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function P(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=l(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(L.prototype),l(L.prototype,s,function(){return this}),e.AsyncIterator=L,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new L(u(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),l(k,c,"Generator"),l(k,a,function(){return this}),l(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=P,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach($),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(l){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),$(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;$(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=ru}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=ru:Function("r","regeneratorRuntime = r")(ru)}const rd="https://forkify-api.herokuapp.com/api/v2/recipes",rh="7f61e24e-2da0-4e87-a651-dd632dacc302",rp=async function(e){try{let t=await Promise.race([fetch(e),rf(10)]),r=await t.json();if(!t.ok)throw Error(`${r.message} (${t.status})`);return r}catch(e){throw e}},rf=function(e){return new Promise(function(t,r){setTimeout(function(){r(Error(`Request took too long! Timeout after ${e} second`))},1e3*e)})},rv=async function(e,t){try{let r=fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),n=await Promise.race([r,rf(10)]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},rg={recipe:{},search:{query:"",results:[],resultsPerPage:10,page:1},bookmarks:[]},rm=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,k:1,...t.key&&{key:t.key}}},ry=async function(e){try{let t=await rp(`${rd}/${e}?key=${rh}`);rg.recipe=rm(t)}catch(e){throw e}},rb=function(e){if(rg.recipe.servings*rg.recipe.k+e<=0)return;let t=rg.recipe.servings*rg.recipe.k+e;rg.recipe.k=t/+rg.recipe.servings},r_=async function(e){try{rg.search.query=e;let t=await rp(`${rd}?search=${e}&key=${rh}`);rg.search.results=t.data.recipes}catch(e){throw e}},rw=function(e=1){return rg.search.results.slice((e-1)*rg.search.resultsPerPage,e*rg.search.resultsPerPage)},rk=function(e){rg.bookmarks.some(t=>t.id===e.id)?rg.bookmarks=rg.bookmarks.filter(t=>t.id!==e.id):rg.bookmarks.push(e),localStorage.setItem("bookmarks",JSON.stringify(rg.bookmarks))},rE=async function(e){let t={title:e.title,cooking_time:e.cookingTime,publisher:e.publisher,source_url:e.sourceUrl,image_url:e.image,servings:e.servings,ingredients:[]};for(let[r,n]of Object.entries(e))if(r.includes("ingredient")&&""!==n){if(3!==n.split(",").length)throw Error("The ingredients in the wrong format");let[e,r,i]=n.split(",");t.ingredients.push({quantity:e,unit:r,description:i})}let r=await rv(`${rd}/?key=${rh}`,t);return rg.recipe=rm(r),rk(rg.recipe),rg.recipe.id};var rL={};rL=new URL("icons.c14567a0.svg",import.meta.url).toString();class rS{#e=document.querySelector(".recipe");#t="We could not find that recipe. Pleae try again!";#r="Success";_renderIngredient(e,t){return`<li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${m(rL)}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${e.quantity*t?function(e){let t=Math.floor(e),r=e-t;if(0===r)return t.toString();let n=1,i=0,o=0,a=1,s=r;do{let e=Math.floor(s),t=n;n=e*n+i,i=t,t=o,o=e*o+a,a=t,s=1/(s-e)}while(Math.abs(r-n/o)>1e-6*r)let c=n,l=o;return 0===t?`${c}/${l}`:`${t} ${c}/${l}`}(e.quantity*t+""):""}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${e.unit||""}</span>
        ${e.description}
      </div>
    </li>`}render(e,t){let r=t.some(t=>t.id===e.id)?`${m(rL)}#icon-bookmark-fill`:`${m(rL)}#icon-bookmark`;console.log(e.key);let n=`
      <figure class="recipe__fig">
        <img src="${e.image}" alt="${e.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${e.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${m(rL)}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${e.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${m(rL)}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${e.servings*e.k}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--decrease-servings">
              <svg>
                <use href="${m(rL)}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${m(rL)}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated ${e.key?"":"hidden"}">
            <svg>
              <use href="${m(rL)}#icon-user"></use>
            </svg>
        </div>
        <button class="btn--round btn--bookmark">
          <svg class="">
            <use href="${r}"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${e.ingredients.map(t=>this._renderIngredient(t,e.k)).join("")}
        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${e.publisher}</span>. Please check out directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${e.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${m(rL)}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `;this.#e.innerHTML="",this.#e.insertAdjacentHTML("afterbegin",n)}renderSpinner(){let e=`<div class="spinner">
    <svg>
      <use href="${m(rL)}#icon-loader"></use>
    </svg>
  </div>`;this.#e.innerHTML="",this.#e.insertAdjacentHTML("afterbegin",e)}addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}renderError(e=this.#t){let t=` <div class="error">
      <div>
        <svg>
          <use href="${m(rL)}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div>`;this.#e.innerHTML="",this.#e.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this.#r){let t=` <div class="error">
        <div class='message'>
        <svg>
            <use href="${m(rL)}#icon-alert-triangle"></use>
        </svg>
        </div>
        <p>${e}</p>
    </div>`;this.#e.innerHTML="",this.#e.insertAdjacentHTML("afterbegin",t)}addUpdateServings(e,t){this.#e.addEventListener("click",r=>{let n=r.target.closest(".btn--tiny");n&&(n.classList.contains("btn--increase-servings")&&e(),n.classList.contains("btn--decrease-servings")&&t())})}addHandleBookmarks(e){this.#e.addEventListener("click",t=>{t.target.closest(".btn--bookmark")&&e()})}}var r$=new rS;class rT{#e=document.querySelector(".search");getQuery(){return this.#e.querySelector(".search__field").value}addHandlerSearch(e){this.#e.addEventListener("submit",t=>{t.preventDefault(),e(),this.#e.querySelector(".search__field").value=""})}}var rP=new rT;class rj{#e=document.querySelector(".results");#t="No recipe found for your query! Please try again";#r="Success";#n=null;constructor(){this.#e.addEventListener("click",e=>{let t=e.target.closest(".preview__link");if(!t)return;let r=document.querySelector(".preview__link--share");r&&r.classList.remove("preview__link--active"),null===this.#n||this.#n.classList.remove("preview__link--active"),this.#n=t,t.classList.add("preview__link--active")})}_renderItem(e,t){let r=t||window.location.hash.slice(1);return`<li class="preview">
        <a class="preview__link ${r===e.id?"preview__link--active preview__link--share":""}" href="#${e.id}">
          <figure class="preview__fig">
            <img src="${e.image_url}" alt="${e.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${e.title}</h4>
            <p class="preview__publisher">${e.publisher}</p>
            <div class="preview__user-generated ${e.key?"":"hidden"}">
            <svg>
              <use href="${m(rL)}#icon-user"></use>
            </svg>
          </div>
          </div>
        </a>
      </li>`}render(e,t){if(0===e.length)return this.renderError();console.log(window.location.hash.slice(1));let r=e.map(e=>this._renderItem(e,t)).join("");this.#e.innerHTML="",this.#e.insertAdjacentHTML("afterbegin",r)}renderSpinner(){let e=`<div class="spinner">
    <svg>
      <use href="${m(rL)}#icon-loader"></use>
    </svg>
  </div>`;this.#e.innerHTML="",this.#e.insertAdjacentHTML("afterbegin",e)}renderError(e=this.#t){let t=` <div class="error">
      <div>
        <svg>
          <use href="${m(rL)}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div>`;this.#e.innerHTML="",this.#e.insertAdjacentHTML("afterbegin",t)}addBookmarkRender(e){this.#e.addEventListener("click",t=>{let r=t.target.closest(".preview__link");r&&e(r.href.split("#")[1])})}}var rO=new rj;class rM{#e=document.querySelector(".pagination");#i;#o;setPage(e){this.#o=1,this.#i=e}_renderNextPagination(){return this.#o<this.#i?` <button class="btn--inline pagination__btn--next">
        <span>Page ${this.#o+1}</span>
        <svg class="search__icon">
          <use href="src/img/icons.svg#icon-arrow-right"></use>
        </svg>
      </button>`:""}_renderPreviousPagination(){return this.#o>1?`<button class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="src/img/icons.svg#icon-arrow-left"></use>
      </svg>
      <span>Page ${this.#o-1}</span>
    </button>`:""}render(){if(this.#e.innerHTML="",1===this.#i)return;let e=`${this._renderPreviousPagination()} ${this._renderNextPagination()}`;this.#e.insertAdjacentHTML("beforeend",e)}addHandlePagination(e,t){this.#e.addEventListener("click",r=>{let n=r.target.closest(".btn--inline");n&&(n.classList.contains("pagination__btn--next")&&this.#o<this.#i&&(e(),this.#o++,this.render()),n.classList.contains("pagination__btn--prev")&&this.#o>=2&&(t(),this.#o>=2&&this.#o--,this.render()))})}}var rH=new rM;class rx{#e=document.querySelector(".bookmarks__list");#t="No bookmarks yet. Find a nice recipe and bookmark it :)";#n=null;constructor(){this.#e.addEventListener("click",e=>{let t=e.target.closest(".preview__link");if(!t)return;let r=document.querySelector(".preview__link--share-bookmark");r&&r.classList.remove("preview__link--active"),null===this.#n||this.#n.classList.remove("preview__link--active"),this.#n=t,t.classList.add("preview__link--active")})}_renderItem(e,t){let r=t||window.location.hash.slice(1);return`<li class="preview">
        <a class="preview__link ${r===e.id?"preview__link--active preview__link--share-bookmark":""}" href="#${e.id}">
          <figure class="preview__fig">
            <img src="${e.image}" alt="${e.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${e.title}</h4>
            <p class="preview__publisher">${e.publisher}</p>
            <div class="preview__user-generated ${e.key?"":"hidden"}">
            <svg>
              <use href="${m(rL)}#icon-user"></use>
            </svg>
          </div>
          </div>
        </a>
      </li>`}render(e,t){if(0===e.length)return this.renderError();let r=e.map(e=>this._renderItem(e,t)).join("");this.#e.innerHTML="",this.#e.insertAdjacentHTML("afterbegin",r)}renderError(e=this.#t){let t=`<div class="message">
    <div>
      <svg>
        <use href="${m(rL)}#icon-smile"></use>
      </svg>
    </div>
    <p>
      ${e}
    </p> </div>`;this.#e.innerHTML="",this.#e.insertAdjacentHTML("afterbegin",t)}addHandleChooseBookmark(e){this.#e.addEventListener("click",t=>{let r=t.target.closest(".preview__link");r&&e(r.href.split("#")[1])})}}var rF=new rx;class rq{#e=document.querySelector(".upload");#a=document.querySelector(".add-recipe-window");#s=document.querySelector(".overlay");#c=document.querySelector(".nav__btn--add-recipe");#l=document.querySelector(".btn--close-modal");#t="Cannot upload the new recipe";#u=`Congrats!
Uploaded recipe succesfully`;#d;constructor(){this.#d=this.#a.innerHTML,this.#c.addEventListener("click",this._handleToggle.bind(this)),this.#l.addEventListener("click",this._handleToggle.bind(this))}_handleToggle(){this.#s.classList.toggle("hidden"),this.#a.classList.toggle("hidden")}_reset(e){this.#e=document.querySelector(".upload"),this.#e.addEventListener("submit",t=>this._helper(t,e))}_helper=async(e,t)=>{try{e.preventDefault();let r=[...new FormData(this.#e)],n=Object.fromEntries(r);this.renderSpinner(),await t(n),this.renderSuccess(),setTimeout(()=>{this._handleToggle()},1e3),setTimeout(()=>{this.#a.innerHTML=this.#d,this.#l=document.querySelector(".btn--close-modal"),this.#l.addEventListener("click",this._handleToggle.bind(this))},1500)}catch(e){this.renderError(e.message),window.history.pushState(null,"","/"),setTimeout(()=>{this._handleToggle()},1e3),setTimeout(()=>{this.#a.innerHTML=this.#d,this.#l=document.querySelector(".btn--close-modal"),this.#l.addEventListener("click",this._handleToggle.bind(this))},1500)}setTimeout(()=>this._reset(t),2e3)};addHandlerUpload(e){this.#e.addEventListener("submit",t=>this._helper(t,e))}renderError(e=this.#t){let t=`<div class="error">
      <div>
        <svg>
          <use href="${m(rL)}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div>`;this.#e.innerHTML="",this.#e.insertAdjacentHTML("afterbegin",t)}renderSpinner(){let e=`<div class="spinner">
    <svg>
      <use href="${m(rL)}#icon-loader"></use>
    </svg>
  </div>`;this.#e.innerHTML="",this.#e.insertAdjacentHTML("afterbegin",e)}renderSuccess(e=this.#u){let t=` <div class="error">
        <div class='message'>
        <svg>
            <use href="${m(rL)}#icon-smile"></use>
        </svg>
        <p>${e}</p>
        </div>
       
    </div>`;this.#e.innerHTML="",this.#e.insertAdjacentHTML("afterbegin",t)}}var rI=new rq;function rC(){rO.render(rw(++rg.search.page))}function rN(){rO.render(rw(--rg.search.page))}function rA(){rb(1),r$.render(rg.recipe,rg.bookmarks)}function rB(){rb(-1),r$.render(rg.recipe,rg.bookmarks)}async function rR(){try{rO.renderSpinner();let e=rP.getQuery();if(!e)throw Error("Please enter keywords");await r_(e),rg.search.page=1,rO.render(rw()),rH.setPage(Math.ceil(rg.search.results.length/rg.search.resultsPerPage)),rH.render()}catch(e){rO.renderError(e.message)}}async function rD(e){if(e)try{r$.renderSpinner(),await ry(e),r$.render(rg.recipe,rg.bookmarks)}catch(e){r$.renderError()}}const rG=function(){rk(rg.recipe),r$.render(rg.recipe,rg.bookmarks),rF.render(rg.bookmarks)},rU=function(e){rO.render(rw(),e)},rz=function(e){rF.render(rg.bookmarks,e)},rW=async function(e){try{let t=await rE(e);rF.render(rg.bookmarks,t),r$.render(rg.recipe,rg.bookmarks),window.history.pushState(null,"",`#${rg.recipe.id}`)}catch(e){throw e}};!function(){r$.addHandlerRender(()=>rD(window.location.hash.slice(1))),r$.addUpdateServings(rA,rB),r$.addHandleBookmarks(rG),rP.addHandlerSearch(rR),rH.addHandlePagination(rC,rN),rF.addHandleChooseBookmark(rU),rO.addBookmarkRender(rz),rI.addHandlerUpload(rW);let e=JSON.parse(localStorage.getItem("bookmarks"));e&&(e.forEach(e=>rk(e)),rF.render(rg.bookmarks))}();
//# sourceMappingURL=index.23dcb672.js.map
