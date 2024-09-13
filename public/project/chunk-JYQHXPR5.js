import{a as An}from"./chunk-LTFFWF27.js";import{a as yt,c as te}from"./chunk-5TBO732O.js";var rn=yt((Mr,an)=>{"use strict";var sr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";an.exports=sr});var fn=yt((Lr,ln)=>{"use strict";var lr=rn();function on(){}function sn(){}sn.resetWarningCache=on;ln.exports=function(){function t(a,r,i,o,s,l){if(l!==lr){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:sn,resetWarningCache:on};return n.PropTypes=n,n}});var un=yt((zr,cn)=>{cn.exports=fn()();var Rr,Dr});var ee=()=>{},jt={},Ee={},Pe=null,Se={mark:ee,measure:ee};try{typeof window<"u"&&(jt=window),typeof document<"u"&&(Ee=document),typeof MutationObserver<"u"&&(Pe=MutationObserver),typeof performance<"u"&&(Se=performance)}catch{}var{userAgent:ne=""}=jt.navigator||{},z=jt,g=Ee,ae=Pe,ot=Se,kr=!!z.document,L=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",Ie=~ne.indexOf("MSIE")||~ne.indexOf("Trident/"),h="classic",Ne="duotone",O="sharp",w="sharp-duotone",kn=[h,Ne,O,w],On={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},re={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},wn=["kit"],En=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Pn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Sn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},In={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Nn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Cn={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Tn={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},_n={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Ce={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Fn=["solid","regular","light","thin","duotone","brands"],Te=[1,2,3,4,5,6,7,8,9,10],Mn=Te.concat([11,12,13,14,15,16,17,18,19,20]),J={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ln=[...Object.keys(Cn),...Fn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",J.GROUP,J.SWAP_OPACITY,J.PRIMARY,J.SECONDARY].concat(Te.map(t=>"".concat(t,"x"))).concat(Mn.map(t=>"w-".concat(t))),Rn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Dn={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},zn={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},ie={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},F="___FONT_AWESOME___",wt=16,_e="fa",Fe="svg-inline--fa",X="data-fa-i2svg",Et="data-fa-pseudo-element",jn="data-fa-pseudo-element-pending",Wt="data-prefix",Yt="data-icon",oe="fontawesome-i2svg",Wn="async",Yn=["HTML","HEAD","STYLE","SCRIPT"],Me=(()=>{try{return!0}catch{return!1}})(),Le=[h,O,w];function rt(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[h]}})}var Re={...Ce};Re[h]={...Ce[h],...re.kit,...re["kit-duotone"]};var U=rt(Re),Pt={..._n};Pt[h]={...Pt[h],...ie.kit,...ie["kit-duotone"]};var nt=rt(Pt),St={...Tn};St[h]={...St[h],...zn.kit};var H=rt(St),It={...Nn};It[h]={...It[h],...Dn.kit};var Un=rt(It),Hn=En,De="fa-layers-text",Xn=Pn,Gn={...On},Or=rt(Gn),$n=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],vt=J,V=new Set;Object.keys(nt[h]).map(V.add.bind(V));Object.keys(nt[O]).map(V.add.bind(V));Object.keys(nt[w]).map(V.add.bind(V));var Bn=[...wn,...Ln],tt=z.FontAwesomeConfig||{};function Vn(t){var e=g.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function qn(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}g&&typeof g.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e,r=qn(Vn(n));r!=null&&(tt[a]=r)});var ze={styleDefault:"solid",familyDefault:"classic",cssPrefix:_e,replacementClass:Fe,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};tt.familyPrefix&&(tt.cssPrefix=tt.familyPrefix);var q={...ze,...tt};q.autoReplaceSvg||(q.observeMutations=!1);var c={};Object.keys(ze).forEach(t=>{Object.defineProperty(c,t,{enumerable:!0,set:function(e){q[t]=e,et.forEach(n=>n(c))},get:function(){return q[t]}})});Object.defineProperty(c,"familyPrefix",{enumerable:!0,set:function(t){q.cssPrefix=t,et.forEach(e=>e(c))},get:function(){return q.cssPrefix}});z.FontAwesomeConfig=c;var et=[];function Kn(t){return et.push(t),()=>{et.splice(et.indexOf(t),1)}}var R=wt,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Qn(t){if(!t||!L)return;let e=g.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;let n=g.head.childNodes,a=null;for(let r=n.length-1;r>-1;r--){let i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return g.head.insertBefore(e,a),t}var Jn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function at(){let t=12,e="";for(;t-- >0;)e+=Jn[Math.random()*62|0];return e}function K(t){let e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ut(t){return t.classList?K(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function je(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Zn(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(je(t[n]),'" '),"").trim()}function ut(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Ht(t){return t.size!==I.size||t.x!==I.x||t.y!==I.y||t.rotate!==I.rotate||t.flipX||t.flipY}function ta(t){let{transform:e,containerWidth:n,iconWidth:a}=t,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:f}}function ea(t){let{transform:e,width:n=wt,height:a=wt,startCentered:r=!1}=t,i="";return r&&Ie?i+="translate(".concat(e.x/R-n/2,"em, ").concat(e.y/R-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/R,"em), calc(-50% + ").concat(e.y/R,"em)) "):i+="translate(".concat(e.x/R,"em, ").concat(e.y/R,"em) "),i+="scale(".concat(e.size/R*(e.flipX?-1:1),", ").concat(e.size/R*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var na=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function We(){let t=_e,e=Fe,n=c.cssPrefix,a=c.replacementClass,r=na;if(n!==t||a!==e){let i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var se=!1;function xt(){c.autoAddCss&&!se&&(Qn(We()),se=!0)}var aa={mixout(){return{dom:{css:We,insertCss:xt}}},hooks(){return{beforeDOMElementCreation(){xt()},beforeI2svg(){xt()}}}},M=z||{};M[F]||(M[F]={});M[F].styles||(M[F].styles={});M[F].hooks||(M[F].hooks={});M[F].shims||(M[F].shims=[]);var N=M[F],Ye=[],Ue=function(){g.removeEventListener("DOMContentLoaded",Ue),ft=1,Ye.map(t=>t())},ft=!1;L&&(ft=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),ft||g.addEventListener("DOMContentLoaded",Ue));function ra(t){L&&(ft?setTimeout(t,0):Ye.push(t))}function it(t){let{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?je(t):"<".concat(e," ").concat(Zn(n),">").concat(a.map(it).join(""),"</").concat(e,">")}function le(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var ia=function(e,n){return function(a,r,i,o){return e.call(n,a,r,i,o)}},At=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=r!==void 0?ia(n,r):n,l,f,u;for(a===void 0?(l=1,u=e[i[0]]):(l=0,u=a);l<o;l++)f=i[l],u=s(u,e[f],f,e);return u};function oa(t){let e=[],n=0,a=t.length;for(;n<a;){let r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){let i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Nt(t){let e=oa(t);return e.length===1?e[0].toString(16):null}function sa(t,e){let n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function fe(t){return Object.keys(t).reduce((e,n)=>{let a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Ct(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:a=!1}=n,r=fe(e);typeof N.hooks.addPack=="function"&&!a?N.hooks.addPack(t,fe(e)):N.styles[t]={...N.styles[t]||{},...r},t==="fas"&&Ct("fa",e)}var{styles:Y,shims:la}=N,fa={[h]:Object.values(H[h]),[O]:Object.values(H[O]),[w]:Object.values(H[w])},Xt=null,He={},Xe={},Ge={},$e={},Be={},ca={[h]:Object.keys(U[h]),[O]:Object.keys(U[O]),[w]:Object.keys(U[w])};function ua(t){return~Bn.indexOf(t)}function ma(t,e){let n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!ua(r)?r:null}var Ve=()=>{let t=a=>At(Y,(r,i,o)=>(r[o]=At(i,a,{}),r),{});He=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(s=>typeof s=="number").forEach(s=>{a[s.toString(16)]=i}),a)),Xe=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(s=>typeof s=="string").forEach(s=>{a[s]=i}),a)),Be=t((a,r,i)=>{let o=r[2];return a[i]=i,o.forEach(s=>{a[s]=i}),a});let e="far"in Y||c.autoFetchSvg,n=At(la,(a,r)=>{let i=r[0],o=r[1],s=r[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(a.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:o,iconName:s}),a},{names:{},unicodes:{}});Ge=n.names,$e=n.unicodes,Xt=mt(c.styleDefault,{family:c.familyDefault})};Kn(t=>{Xt=mt(t.styleDefault,{family:c.familyDefault})});Ve();function Gt(t,e){return(He[t]||{})[e]}function da(t,e){return(Xe[t]||{})[e]}function D(t,e){return(Be[t]||{})[e]}function qe(t){return Ge[t]||{prefix:null,iconName:null}}function pa(t){let e=$e[t],n=Gt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function j(){return Xt}var $t=()=>({prefix:null,iconName:null,rest:[]});function mt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:n=h}=e,a=U[n][t],r=nt[n][t]||nt[n][a],i=t in N.styles?t:null;return r||i||null}var ga={[h]:Object.keys(H[h]),[O]:Object.keys(H[O]),[w]:Object.keys(H[w])};function dt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:n=!1}=e,a={[h]:"".concat(c.cssPrefix,"-").concat(h),[O]:"".concat(c.cssPrefix,"-").concat(O),[w]:"".concat(c.cssPrefix,"-").concat(w)},r=null,i=h,o=kn.filter(l=>l!==Ne);o.forEach(l=>{(t.includes(a[l])||t.some(f=>ga[l].includes(f)))&&(i=l)});let s=t.reduce((l,f)=>{let u=ma(c.cssPrefix,f);if(Y[f]?(f=fa[i].includes(f)?Un[i][f]:f,r=f,l.prefix=f):ca[i].indexOf(f)>-1?(r=f,l.prefix=mt(f,{family:i})):u?l.iconName=u:f!==c.replacementClass&&!o.some(p=>f===a[p])&&l.rest.push(f),!n&&l.prefix&&l.iconName){let p=r==="fa"?qe(l.iconName):{},d=D(l.prefix,l.iconName);p.prefix&&(r=null),l.iconName=p.iconName||d||l.iconName,l.prefix=p.prefix||l.prefix,l.prefix==="far"&&!Y.far&&Y.fas&&!c.autoFetchSvg&&(l.prefix="fas")}return l},$t());return(t.includes("fa-brands")||t.includes("fab"))&&(s.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(s.prefix="fad"),!s.prefix&&i===O&&(Y.fass||c.autoFetchSvg)&&(s.prefix="fass",s.iconName=D(s.prefix,s.iconName)||s.iconName),!s.prefix&&i===w&&(Y.fasds||c.autoFetchSvg)&&(s.prefix="fasds",s.iconName=D(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||r==="fa")&&(s.prefix=j()||"fas"),s}var Tt=class{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];let r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...r[i]},Ct(i,r[i]);let o=H[h][i];o&&Ct(o,r[i]),Ve()})}reset(){this.definitions={}}_pullDefinitions(e,n){let a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{let{prefix:i,iconName:o,icon:s}=a[r],l=s[2];e[i]||(e[i]={}),l.length>0&&l.forEach(f=>{typeof f=="string"&&(e[i][f]=s)}),e[i][o]=s}),e}},ce=[],$={},B={},ha=Object.keys(B);function ba(t,e){let{mixoutsTo:n}=e;return ce=t,$={},Object.keys(B).forEach(a=>{ha.indexOf(a)===-1&&delete B[a]}),ce.forEach(a=>{let r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=r[i][o]})}),a.hooks){let i=a.hooks();Object.keys(i).forEach(o=>{$[o]||($[o]=[]),$[o].push(i[o])})}a.provides&&a.provides(B)}),n}function _t(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return($[t]||[]).forEach(o=>{e=o.apply(null,[e,...a])}),e}function G(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];($[t]||[]).forEach(i=>{i.apply(null,n)})}function W(){let t=arguments[0],e=Array.prototype.slice.call(arguments,1);return B[t]?B[t].apply(null,e):void 0}function Ft(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t,n=t.prefix||j();if(e)return e=D(n,e)||e,le(Ke.definitions,n,e)||le(N.styles,n,e)}var Ke=new Tt,ya=()=>{c.autoReplaceSvg=!1,c.observeMutations=!1,G("noAuto")},va={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return L?(G("beforeI2svg",t),W("pseudoElements2svg",t),W("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e}=t;c.autoReplaceSvg===!1&&(c.autoReplaceSvg=!0),c.observeMutations=!0,ra(()=>{Aa({autoReplaceSvgRoot:e}),G("watch",t)})}},xa={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:D(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){let e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=mt(t[0]);return{prefix:n,iconName:D(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(c.cssPrefix,"-"))>-1||t.match(Hn))){let e=dt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||j(),iconName:D(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){let e=j();return{prefix:e,iconName:D(e,t)||t}}}},E={noAuto:ya,config:c,dom:va,parse:xa,library:Ke,findIconDefinition:Ft,toHtml:it},Aa=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e=g}=t;(Object.keys(N.styles).length>0||c.autoFetchSvg)&&L&&c.autoReplaceSvg&&E.dom.i2svg({node:e})};function pt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>it(n))}}),Object.defineProperty(t,"node",{get:function(){if(!L)return;let n=g.createElement("div");return n.innerHTML=t.html,n.children}}),t}function ka(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:o}=t;if(Ht(o)&&n.found&&!a.found){let{width:s,height:l}=n,f={x:s/l/2,y:.5};r.style=ut({...i,"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")})}return[{tag:"svg",attributes:r,children:e}]}function Oa(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t,o=i===!0?"".concat(e,"-").concat(c.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:o},children:a}]}]}function Bt(t){let{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:o,title:s,maskId:l,titleId:f,extra:u,watchable:p=!1}=t,{width:d,height:y}=n.found?n:e,k=a==="fak",P=[c.replacementClass,r?"".concat(c.cssPrefix,"-").concat(r):""].filter(S=>u.classes.indexOf(S)===-1).filter(S=>S!==""||!!S).concat(u.classes).join(" "),b={children:[],attributes:{...u.attributes,"data-prefix":a,"data-icon":r,class:P,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(y)}},x=k&&!~u.classes.indexOf("fa-fw")?{width:"".concat(d/y*16*.0625,"em")}:{};p&&(b.attributes[X]=""),s&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(f||at())},children:[s]}),delete b.attributes.title);let v={...b,prefix:a,iconName:r,main:e,mask:n,maskId:l,transform:i,symbol:o,styles:{...x,...u.styles}},{children:A,attributes:_}=n.found&&e.found?W("generateAbstractMask",v)||{children:[],attributes:{}}:W("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=A,v.attributes=_,o?Oa(v):ka(v)}function ue(t){let{content:e,width:n,height:a,transform:r,title:i,extra:o,watchable:s=!1}=t,l={...o.attributes,...i?{title:i}:{},class:o.classes.join(" ")};s&&(l[X]="");let f={...o.styles};Ht(r)&&(f.transform=ea({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);let u=ut(f);u.length>0&&(l.style=u);let p=[];return p.push({tag:"span",attributes:l,children:[e]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function wa(t){let{content:e,title:n,extra:a}=t,r={...a.attributes,...n?{title:n}:{},class:a.classes.join(" ")},i=ut(a.styles);i.length>0&&(r.style=i);let o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var{styles:kt}=N;function Mt(t){let e=t[0],n=t[1],[a]=t.slice(4),r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(c.cssPrefix,"-").concat(vt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(vt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(vt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}var Ea={found:!1,width:512,height:512};function Pa(t,e){!Me&&!c.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Lt(t,e){let n=e;return e==="fa"&&c.styleDefault!==null&&(e=j()),new Promise((a,r)=>{if(n==="fa"){let i=qe(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&kt[e]&&kt[e][t]){let i=kt[e][t];return a(Mt(i))}Pa(t,e),a({...Ea,icon:c.showMissingIcons&&t?W("missingIconAbstract")||{}:{}})})}var me=()=>{},Rt=c.measurePerformance&&ot&&ot.mark&&ot.measure?ot:{mark:me,measure:me},Z='FA "6.6.0"',Sa=t=>(Rt.mark("".concat(Z," ").concat(t," begins")),()=>Qe(t)),Qe=t=>{Rt.mark("".concat(Z," ").concat(t," ends")),Rt.measure("".concat(Z," ").concat(t),"".concat(Z," ").concat(t," begins"),"".concat(Z," ").concat(t," ends"))},Vt={begin:Sa,end:Qe},st=()=>{};function de(t){return typeof(t.getAttribute?t.getAttribute(X):null)=="string"}function Ia(t){let e=t.getAttribute?t.getAttribute(Wt):null,n=t.getAttribute?t.getAttribute(Yt):null;return e&&n}function Na(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(c.replacementClass)}function Ca(){return c.autoReplaceSvg===!0?lt.replace:lt[c.autoReplaceSvg]||lt.replace}function Ta(t){return g.createElementNS("http://www.w3.org/2000/svg",t)}function _a(t){return g.createElement(t)}function Je(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:n=t.tag==="svg"?Ta:_a}=e;if(typeof t=="string")return g.createTextNode(t);let a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(Je(i,{ceFn:n}))}),a}function Fa(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var lt={replace:function(t){let e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Je(n),e)}),e.getAttribute(X)===null&&c.keepOriginalSource){let n=g.createComment(Fa(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){let e=t[0],n=t[1];if(~Ut(e).indexOf(c.replacementClass))return lt.replace(t);let a=new RegExp("".concat(c.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){let i=n[0].attributes.class.split(" ").reduce((o,s)=>(s===c.replacementClass||s.match(a)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}let r=n.map(i=>it(i)).join(`
`);e.setAttribute(X,""),e.innerHTML=r}};function pe(t){t()}function Ze(t,e){let n=typeof e=="function"?e:st;if(t.length===0)n();else{let a=pe;c.mutateApproach===Wn&&(a=z.requestAnimationFrame||pe),a(()=>{let r=Ca(),i=Vt.begin("mutate");t.map(r),i(),n()})}}var qt=!1;function tn(){qt=!0}function Dt(){qt=!1}var ct=null;function ge(t){if(!ae||!c.observeMutations)return;let{treeCallback:e=st,nodeCallback:n=st,pseudoElementsCallback:a=st,observeMutationsRoot:r=g}=t;ct=new ae(i=>{if(qt)return;let o=j();K(i).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!de(s.addedNodes[0])&&(c.searchPseudoElements&&a(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&c.searchPseudoElements&&a(s.target.parentNode),s.type==="attributes"&&de(s.target)&&~$n.indexOf(s.attributeName))if(s.attributeName==="class"&&Ia(s.target)){let{prefix:l,iconName:f}=dt(Ut(s.target));s.target.setAttribute(Wt,l||o),f&&s.target.setAttribute(Yt,f)}else Na(s.target)&&n(s.target)})}),L&&ct.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ma(){ct&&ct.disconnect()}function La(t){let e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce((a,r)=>{let i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Ra(t){let e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=dt(Ut(t));return r.prefix||(r.prefix=j()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=da(r.prefix,t.innerText)||Gt(r.prefix,Nt(t.innerText))),!r.iconName&&c.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Da(t){let e=K(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return c.autoA11y&&(n?e["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(a||at()):(e["aria-hidden"]="true",e.focusable="false")),e}function za(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function he(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:n,prefix:a,rest:r}=Ra(t),i=Da(t),o=_t("parseNodeAttributes",{},t),s=e.styleParser?La(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:s,attributes:i},...o}}var{styles:ja}=N;function en(t){let e=c.autoReplaceSvg==="nest"?he(t,{styleParser:!1}):he(t);return~e.extra.classes.indexOf(De)?W("generateLayersText",t,e):W("generateSvgReplacementMutation",t,e)}var C=new Set;Le.map(t=>{C.add("fa-".concat(t))});Object.keys(U[h]).map(C.add.bind(C));Object.keys(U[O]).map(C.add.bind(C));Object.keys(U[w]).map(C.add.bind(C));C=[...C];function be(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!L)return Promise.resolve();let n=g.documentElement.classList,a=u=>n.add("".concat(oe,"-").concat(u)),r=u=>n.remove("".concat(oe,"-").concat(u)),i=c.autoFetchSvg?C:Le.map(u=>"fa-".concat(u)).concat(Object.keys(ja));i.includes("fa")||i.push("fa");let o=[".".concat(De,":not([").concat(X,"])")].concat(i.map(u=>".".concat(u,":not([").concat(X,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=K(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();let l=Vt.begin("onTree"),f=s.reduce((u,p)=>{try{let d=en(p);d&&u.push(d)}catch(d){Me||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise((u,p)=>{Promise.all(f).then(d=>{Ze(d,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(d=>{l(),p(d)})})}function Wa(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;en(t).then(n=>{n&&Ze([n],e)})}function Ya(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Ft(e||{}),{mask:r}=n;return r&&(r=(r||{}).icon?r:Ft(r||{})),t(a,{...n,mask:r})}}var Ua=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=I,symbol:a=!1,mask:r=null,maskId:i=null,title:o=null,titleId:s=null,classes:l=[],attributes:f={},styles:u={}}=e;if(!t)return;let{prefix:p,iconName:d,icon:y}=t;return pt({type:"icon",...t},()=>(G("beforeDOMElementCreation",{iconDefinition:t,params:e}),c.autoA11y&&(o?f["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(s||at()):(f["aria-hidden"]="true",f.focusable="false")),Bt({icons:{main:Mt(y),mask:r?Mt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:d,transform:{...I,...n},symbol:a,title:o,maskId:i,titleId:s,extra:{attributes:f,styles:u,classes:l}})))},Ha={mixout(){return{icon:Ya(Ua)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=be,t.nodeCallback=Wa,t}}},provides(t){t.i2svg=function(e){let{node:n=g,callback:a=()=>{}}=e;return be(n,a)},t.generateSvgReplacementMutation=function(e,n){let{iconName:a,title:r,titleId:i,prefix:o,transform:s,symbol:l,mask:f,maskId:u,extra:p}=n;return new Promise((d,y)=>{Promise.all([Lt(a,o),f.iconName?Lt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(k=>{let[P,b]=k;d([e,Bt({icons:{main:P,mask:b},prefix:o,iconName:a,transform:s,symbol:l,maskId:u,title:r,titleId:i,extra:p,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:o}=e,s=ut(o);s.length>0&&(a.style=s);let l;return Ht(i)&&(l=W("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(l||r.icon),{children:n,attributes:a}}}},Xa={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:n=[]}=e;return pt({type:"layer"},()=>{G("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(c.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Ga={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return pt({type:"counter",content:t},()=>(G("beforeDOMElementCreation",{content:t,params:e}),wa({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(c.cssPrefix,"-layers-counter"),...a]}})))}}}},$a={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=I,title:a=null,classes:r=[],attributes:i={},styles:o={}}=e;return pt({type:"text",content:t},()=>(G("beforeDOMElementCreation",{content:t,params:e}),ue({content:t,transform:{...I,...n},title:a,extra:{attributes:i,styles:o,classes:["".concat(c.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){let{title:a,transform:r,extra:i}=n,o=null,s=null;if(Ie){let l=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();o=f.width/l,s=f.height/l}return c.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,ue({content:e.innerHTML,width:o,height:s,transform:r,title:a,extra:i,watchable:!0})])}}},Ba=new RegExp('"',"ug"),ye=[1105920,1112319],ve={FontAwesome:{normal:"fas",400:"fas"},...In,...Sn,...Rn},zt=Object.keys(ve).reduce((t,e)=>(t[e.toLowerCase()]=ve[e],t),{}),Va=Object.keys(zt).reduce((t,e)=>{let n=zt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function qa(t){let e=t.replace(Ba,""),n=sa(e,0),a=n>=ye[0]&&n<=ye[1],r=e.length===2?e[0]===e[1]:!1;return{value:Nt(r?e[0]:e),isSecondary:a||r}}function Ka(t,e){let n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(zt[n]||{})[r]||Va[n]}function xe(t,e){let n="".concat(jn).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();let o=K(t.children).filter(d=>d.getAttribute(Et)===e)[0],s=z.getComputedStyle(t,e),l=s.getPropertyValue("font-family"),f=l.match(Xn),u=s.getPropertyValue("font-weight"),p=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&p!=="none"&&p!==""){let d=s.getPropertyValue("content"),y=Ka(l,u),{value:k,isSecondary:P}=qa(d),b=f[0].startsWith("FontAwesome"),x=Gt(y,k),v=x;if(b){let A=pa(k);A.iconName&&A.prefix&&(x=A.iconName,y=A.prefix)}if(x&&!P&&(!o||o.getAttribute(Wt)!==y||o.getAttribute(Yt)!==v)){t.setAttribute(n,v),o&&t.removeChild(o);let A=za(),{extra:_}=A;_.attributes[Et]=e,Lt(x,y).then(S=>{let vn=Bt({...A,icons:{main:S,mask:$t()},prefix:y,iconName:v,extra:_,watchable:!0}),bt=g.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(bt,t.firstChild):t.appendChild(bt),bt.outerHTML=vn.map(xn=>it(xn)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Qa(t){return Promise.all([xe(t,"::before"),xe(t,"::after")])}function Ja(t){return t.parentNode!==document.head&&!~Yn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Et)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ae(t){if(L)return new Promise((e,n)=>{let a=K(t.querySelectorAll("*")).filter(Ja).map(Qa),r=Vt.begin("searchPseudoElements");tn(),Promise.all(a).then(()=>{r(),Dt(),e()}).catch(()=>{r(),Dt(),n()})})}var Za={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Ae,t}}},provides(t){t.pseudoElements2svg=function(e){let{node:n=g}=e;c.searchPseudoElements&&Ae(n)}}},ke=!1,tr={mixout(){return{dom:{unwatch(){tn(),ke=!0}}}},hooks(){return{bootstrap(){ge(_t("mutationObserverCallbacks",{}))},noAuto(){Ma()},watch(t){let{observeMutationsRoot:e}=t;ke?Dt():ge(_t("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},Oe=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{let r=a.toLowerCase().split("-"),i=r[0],o=r.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)},er={mixout(){return{parse:{transform:t=>Oe(t)}}},hooks(){return{parseNodeAttributes(t,e){let n=e.getAttribute("data-fa-transform");return n&&(t.transform=Oe(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e,o={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),l="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(s," ").concat(l," ").concat(f)},p={transform:"translate(".concat(i/2*-1," -256)")},d={outer:o,inner:u,path:p};return{tag:"g",attributes:{...d.outer},children:[{tag:"g",attributes:{...d.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...d.path}}]}]}}}},Ot={x:0,y:0,width:"100%",height:"100%"};function we(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function nr(t){return t.tag==="g"?t.children:[t]}var ar={hooks(){return{parseNodeAttributes(t,e){let n=e.getAttribute("data-fa-mask"),a=n?dt(n.split(" ").map(r=>r.trim())):$t();return a.prefix||(a.prefix=j()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:o,transform:s}=e,{width:l,icon:f}=r,{width:u,icon:p}=i,d=ta({transform:s,containerWidth:u,iconWidth:l}),y={tag:"rect",attributes:{...Ot,fill:"white"}},k=f.children?{children:f.children.map(we)}:{},P={tag:"g",attributes:{...d.inner},children:[we({tag:f.tag,attributes:{...f.attributes,...d.path},...k})]},b={tag:"g",attributes:{...d.outer},children:[P]},x="mask-".concat(o||at()),v="clip-".concat(o||at()),A={tag:"mask",attributes:{...Ot,id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[y,b]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:nr(p)},A]};return n.push(_,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(x,")"),...Ot}}),{children:n,attributes:a}}}},rr={provides(t){let e=!1;z.matchMedia&&(e=z.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){let n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...a,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});let i={...r,attributeName:"opacity"},o={tag:"circle",attributes:{...a,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...a,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...a,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},ir={hooks(){return{parseNodeAttributes(t,e){let n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},or=[aa,Ha,Xa,Ga,$a,Za,tr,er,ar,rr,ir];ba(or,{mixoutsTo:E});var wr=E.noAuto,Er=E.config,Pr=E.library,Sr=E.dom,gt=E.parse,Ir=E.findIconDefinition,Nr=E.toHtml,nn=E.icon,Cr=E.layer,Tr=E.text,_r=E.counter;var m=te(un()),Zt=te(An());function mn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?mn(Object(n),!0).forEach(function(a){Q(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):mn(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function ht(t){"@babel/helpers - typeof";return ht=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ht(t)}function Q(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function fr(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function cr(t,e){if(t==null)return{};var n=fr(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Qt(t){return ur(t)||mr(t)||dr(t)||pr()}function ur(t){if(Array.isArray(t))return Jt(t)}function mr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function dr(t,e){if(t){if(typeof t=="string")return Jt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Jt(t,e)}}function Jt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function pr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gr(t){var e,n=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,l=t.spin,f=t.spinPulse,u=t.spinReverse,p=t.pulse,d=t.fixedWidth,y=t.inverse,k=t.border,P=t.listItem,b=t.flip,x=t.size,v=t.rotation,A=t.pull,_=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":f,"fa-pulse":p,"fa-fw":d,"fa-inverse":y,"fa-border":k,"fa-li":P,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},Q(e,"fa-".concat(x),typeof x<"u"&&x!==null),Q(e,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),Q(e,"fa-pull-".concat(A),typeof A<"u"&&A!==null),Q(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(_).map(function(S){return _[S]?S:null}).filter(function(S){return S})}function hr(t){return t=t-0,t===t}function gn(t){return hr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var br=["style"];function yr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function vr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=gn(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?e[yr(r)]=i:e[r]=i,e},{})}function hn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(l){return hn(t,l)}),r=Object.keys(e.attributes||{}).reduce(function(l,f){var u=e.attributes[f];switch(f){case"class":l.attrs.className=u,delete e.attributes.class;break;case"style":l.attrs.style=vr(u);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?l.attrs[f.toLowerCase()]=u:l.attrs[gn(f)]=u}return l},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=cr(n,br);return r.attrs.style=T(T({},r.attrs.style),o),t.apply(void 0,[e.tag,T(T({},r.attrs),s)].concat(Qt(a)))}var bn=!1;try{bn=!0}catch{}function xr(){if(!bn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function dn(t){if(t&&ht(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(gt.icon)return gt.icon(t);if(t===null)return null;if(t&&ht(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Kt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Q({},t,e):{}}var pn={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},yn=Zt.default.forwardRef(function(t,e){var n=T(T({},pn),t),a=n.icon,r=n.mask,i=n.symbol,o=n.className,s=n.title,l=n.titleId,f=n.maskId,u=dn(a),p=Kt("classes",[].concat(Qt(gr(n)),Qt((o||"").split(" ")))),d=Kt("transform",typeof n.transform=="string"?gt.transform(n.transform):n.transform),y=Kt("mask",dn(r)),k=nn(u,T(T(T(T({},p),d),y),{},{symbol:i,title:s,titleId:l,maskId:f}));if(!k)return xr("Could not find icon",u),null;var P=k.abstract,b={ref:e};return Object.keys(n).forEach(function(x){pn.hasOwnProperty(x)||(b[x]=n[x])}),Ar(P[0],b)});yn.displayName="FontAwesomeIcon";yn.propTypes={beat:m.default.bool,border:m.default.bool,beatFade:m.default.bool,bounce:m.default.bool,className:m.default.string,fade:m.default.bool,flash:m.default.bool,mask:m.default.oneOfType([m.default.object,m.default.array,m.default.string]),maskId:m.default.string,fixedWidth:m.default.bool,inverse:m.default.bool,flip:m.default.oneOf([!0,!1,"horizontal","vertical","both"]),icon:m.default.oneOfType([m.default.object,m.default.array,m.default.string]),listItem:m.default.bool,pull:m.default.oneOf(["right","left"]),pulse:m.default.bool,rotation:m.default.oneOf([0,90,180,270]),shake:m.default.bool,size:m.default.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:m.default.bool,spinPulse:m.default.bool,spinReverse:m.default.bool,symbol:m.default.oneOfType([m.default.bool,m.default.string]),title:m.default.string,titleId:m.default.string,transform:m.default.oneOfType([m.default.string,m.default.object]),swapOpacity:m.default.bool};var Ar=hn.bind(null,Zt.default.createElement);export{yn as a};
