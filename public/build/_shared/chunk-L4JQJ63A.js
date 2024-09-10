var Xt=()=>{},_t={},pn={},hn=null,bn={mark:Xt,measure:Xt};try{typeof window<"u"&&(_t=window),typeof document<"u"&&(pn=document),typeof MutationObserver<"u"&&(hn=MutationObserver),typeof performance<"u"&&(bn=performance)}catch{}var{userAgent:Gt=""}=_t.navigator||{},_=_t,g=pn,$t=hn,at=bn,_a=!!_.document,C=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",yn=~Gt.indexOf("MSIE")||~Gt.indexOf("Trident/"),p="classic",vn="duotone",y="sharp",v="sharp-duotone",Vn=[p,vn,y,v],qn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Bt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Kn=["kit"],Qn=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Jn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Zn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},te={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},ne={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},ee={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},ae={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},re={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},xn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},ie=["solid","regular","light","thin","duotone","brands"],An=[1,2,3,4,5,6,7,8,9,10],oe=An.concat([11,12,13,14,15,16,17,18,19,20]),q={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},se=[...Object.keys(ee),...ie,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",q.GROUP,q.SWAP_OPACITY,q.PRIMARY,q.SECONDARY].concat(An.map(t=>"".concat(t,"x"))).concat(oe.map(t=>"w-".concat(t))),ce={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},le={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},fe={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Vt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},O="___FONT_AWESOME___",yt=16,kn="fa",En="svg-inline--fa",Y="data-fa-i2svg",vt="data-fa-pseudo-element",ue="data-fa-pseudo-element-pending",Mt="data-prefix",Lt="data-icon",qt="fontawesome-i2svg",me="async",de=["HTML","HEAD","STYLE","SCRIPT"],wn=(()=>{try{return!0}catch{return!1}})(),Sn=[p,y,v];function nt(t){return new Proxy(t,{get(n,e){return e in n?n[e]:n[p]}})}var Pn={...xn};Pn[p]={...xn[p],...Bt.kit,...Bt["kit-duotone"]};var z=nt(Pn),xt={...re};xt[p]={...xt[p],...Vt.kit,...Vt["kit-duotone"]};var Z=nt(xt),At={...ae};At[p]={...At[p],...fe.kit};var j=nt(At),kt={...ne};kt[p]={...kt[p],...le.kit};var ge=nt(kt),pe=Qn,On="fa-layers-text",he=Jn,be={...qn},Ma=nt(be),ye=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],dt=q,$=new Set;Object.keys(Z[p]).map($.add.bind($));Object.keys(Z[y]).map($.add.bind($));Object.keys(Z[v]).map($.add.bind($));var ve=[...Kn,...se],Q=_.FontAwesomeConfig||{};function xe(t){var n=g.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function Ae(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}g&&typeof g.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(n=>{let[e,a]=n,r=Ae(xe(e));r!=null&&(Q[a]=r)});var Nn={styleDefault:"solid",familyDefault:"classic",cssPrefix:kn,replacementClass:En,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Q.familyPrefix&&(Q.cssPrefix=Q.familyPrefix);var B={...Nn,...Q};B.autoReplaceSvg||(B.observeMutations=!1);var f={};Object.keys(Nn).forEach(t=>{Object.defineProperty(f,t,{enumerable:!0,set:function(n){B[t]=n,J.forEach(e=>e(f))},get:function(){return B[t]}})});Object.defineProperty(f,"familyPrefix",{enumerable:!0,set:function(t){B.cssPrefix=t,J.forEach(n=>n(f))},get:function(){return B.cssPrefix}});_.FontAwesomeConfig=f;var J=[];function ke(t){return J.push(t),()=>{J.splice(J.indexOf(t),1)}}var T=yt,E={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ee(t){if(!t||!C)return;let n=g.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;let e=g.head.childNodes,a=null;for(let r=e.length-1;r>-1;r--){let i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return g.head.insertBefore(n,a),t}var we="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function tt(){let t=12,n="";for(;t-- >0;)n+=we[Math.random()*62|0];return n}function V(t){let n=[];for(let e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function Rt(t){return t.classList?V(t.classList):(t.getAttribute("class")||"").split(" ").filter(n=>n)}function Cn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Se(t){return Object.keys(t||{}).reduce((n,e)=>n+"".concat(e,'="').concat(Cn(t[e]),'" '),"").trim()}function ct(t){return Object.keys(t||{}).reduce((n,e)=>n+"".concat(e,": ").concat(t[e].trim(),";"),"")}function Dt(t){return t.size!==E.size||t.x!==E.x||t.y!==E.y||t.rotate!==E.rotate||t.flipX||t.flipY}function Pe(t){let{transform:n,containerWidth:e,iconWidth:a}=t,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:l}}function Oe(t){let{transform:n,width:e=yt,height:a=yt,startCentered:r=!1}=t,i="";return r&&yn?i+="translate(".concat(n.x/T-e/2,"em, ").concat(n.y/T-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(n.x/T,"em), calc(-50% + ").concat(n.y/T,"em)) "):i+="translate(".concat(n.x/T,"em, ").concat(n.y/T,"em) "),i+="scale(".concat(n.size/T*(n.flipX?-1:1),", ").concat(n.size/T*(n.flipY?-1:1),") "),i+="rotate(".concat(n.rotate,"deg) "),i}var Ne=`:root, :host {
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
}`;function In(){let t=kn,n=En,e=f.cssPrefix,a=f.replacementClass,r=Ne;if(e!==t||a!==n){let i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var Kt=!1;function gt(){f.autoAddCss&&!Kt&&(Ee(In()),Kt=!0)}var Ce={mixout(){return{dom:{css:In,insertCss:gt}}},hooks(){return{beforeDOMElementCreation(){gt()},beforeI2svg(){gt()}}}},N=_||{};N[O]||(N[O]={});N[O].styles||(N[O].styles={});N[O].hooks||(N[O].hooks={});N[O].shims||(N[O].shims=[]);var w=N[O],Tn=[],Fn=function(){g.removeEventListener("DOMContentLoaded",Fn),ot=1,Tn.map(t=>t())},ot=!1;C&&(ot=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),ot||g.addEventListener("DOMContentLoaded",Fn));function Ie(t){C&&(ot?setTimeout(t,0):Tn.push(t))}function et(t){let{tag:n,attributes:e={},children:a=[]}=t;return typeof t=="string"?Cn(t):"<".concat(n," ").concat(Se(e),">").concat(a.map(et).join(""),"</").concat(n,">")}function Qt(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var Te=function(n,e){return function(a,r,i,o){return n.call(e,a,r,i,o)}},pt=function(n,e,a,r){var i=Object.keys(n),o=i.length,s=r!==void 0?Te(e,r):e,c,l,u;for(a===void 0?(c=1,u=n[i[0]]):(c=0,u=a);c<o;c++)l=i[c],u=s(u,n[l],l,n);return u};function Fe(t){let n=[],e=0,a=t.length;for(;e<a;){let r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){let i=t.charCodeAt(e++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function Et(t){let n=Fe(t);return n.length===1?n[0].toString(16):null}function _e(t,n){let e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Jt(t){return Object.keys(t).reduce((n,e)=>{let a=t[e];return!!a.icon?n[a.iconName]=a.icon:n[e]=a,n},{})}function wt(t,n){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:a=!1}=e,r=Jt(n);typeof w.hooks.addPack=="function"&&!a?w.hooks.addPack(t,Jt(n)):w.styles[t]={...w.styles[t]||{},...r},t==="fas"&&wt("fa",n)}var{styles:D,shims:Me}=w,Le={[p]:Object.values(j[p]),[y]:Object.values(j[y]),[v]:Object.values(j[v])},zt=null,_n={},Mn={},Ln={},Rn={},Dn={},Re={[p]:Object.keys(z[p]),[y]:Object.keys(z[y]),[v]:Object.keys(z[v])};function De(t){return~ve.indexOf(t)}function ze(t,n){let e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!De(r)?r:null}var zn=()=>{let t=a=>pt(D,(r,i,o)=>(r[o]=pt(i,a,{}),r),{});_n=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(s=>typeof s=="number").forEach(s=>{a[s.toString(16)]=i}),a)),Mn=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(s=>typeof s=="string").forEach(s=>{a[s]=i}),a)),Dn=t((a,r,i)=>{let o=r[2];return a[i]=i,o.forEach(s=>{a[s]=i}),a});let n="far"in D||f.autoFetchSvg,e=pt(Me,(a,r)=>{let i=r[0],o=r[1],s=r[2];return o==="far"&&!n&&(o="fas"),typeof i=="string"&&(a.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:o,iconName:s}),a},{names:{},unicodes:{}});Ln=e.names,Rn=e.unicodes,zt=lt(f.styleDefault,{family:f.familyDefault})};ke(t=>{zt=lt(t.styleDefault,{family:f.familyDefault})});zn();function jt(t,n){return(_n[t]||{})[n]}function je(t,n){return(Mn[t]||{})[n]}function F(t,n){return(Dn[t]||{})[n]}function jn(t){return Ln[t]||{prefix:null,iconName:null}}function Ye(t){let n=Rn[t],e=jt("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function M(){return zt}var Yt=()=>({prefix:null,iconName:null,rest:[]});function lt(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:e=p}=n,a=z[e][t],r=Z[e][t]||Z[e][a],i=t in w.styles?t:null;return r||i||null}var Ue={[p]:Object.keys(j[p]),[y]:Object.keys(j[y]),[v]:Object.keys(j[v])};function ft(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:e=!1}=n,a={[p]:"".concat(f.cssPrefix,"-").concat(p),[y]:"".concat(f.cssPrefix,"-").concat(y),[v]:"".concat(f.cssPrefix,"-").concat(v)},r=null,i=p,o=Vn.filter(c=>c!==vn);o.forEach(c=>{(t.includes(a[c])||t.some(l=>Ue[c].includes(l)))&&(i=c)});let s=t.reduce((c,l)=>{let u=ze(f.cssPrefix,l);if(D[l]?(l=Le[i].includes(l)?ge[i][l]:l,r=l,c.prefix=l):Re[i].indexOf(l)>-1?(r=l,c.prefix=lt(l,{family:i})):u?c.iconName=u:l!==f.replacementClass&&!o.some(d=>l===a[d])&&c.rest.push(l),!e&&c.prefix&&c.iconName){let d=r==="fa"?jn(c.iconName):{},m=F(c.prefix,c.iconName);d.prefix&&(r=null),c.iconName=d.iconName||m||c.iconName,c.prefix=d.prefix||c.prefix,c.prefix==="far"&&!D.far&&D.fas&&!f.autoFetchSvg&&(c.prefix="fas")}return c},Yt());return(t.includes("fa-brands")||t.includes("fab"))&&(s.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(s.prefix="fad"),!s.prefix&&i===y&&(D.fass||f.autoFetchSvg)&&(s.prefix="fass",s.iconName=F(s.prefix,s.iconName)||s.iconName),!s.prefix&&i===v&&(D.fasds||f.autoFetchSvg)&&(s.prefix="fasds",s.iconName=F(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||r==="fa")&&(s.prefix=M()||"fas"),s}var St=class{constructor(){this.definitions={}}add(){for(var n=arguments.length,e=new Array(n),a=0;a<n;a++)e[a]=arguments[a];let r=e.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...r[i]},wt(i,r[i]);let o=j[p][i];o&&wt(o,r[i]),zn()})}reset(){this.definitions={}}_pullDefinitions(n,e){let a=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(a).map(r=>{let{prefix:i,iconName:o,icon:s}=a[r],c=s[2];n[i]||(n[i]={}),c.length>0&&c.forEach(l=>{typeof l=="string"&&(n[i][l]=s)}),n[i][o]=s}),n}},Zt=[],X={},G={},We=Object.keys(G);function He(t,n){let{mixoutsTo:e}=n;return Zt=t,X={},Object.keys(G).forEach(a=>{We.indexOf(a)===-1&&delete G[a]}),Zt.forEach(a=>{let r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(e[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(o=>{e[i]||(e[i]={}),e[i][o]=r[i][o]})}),a.hooks){let i=a.hooks();Object.keys(i).forEach(o=>{X[o]||(X[o]=[]),X[o].push(i[o])})}a.provides&&a.provides(G)}),e}function Pt(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];return(X[t]||[]).forEach(o=>{n=o.apply(null,[n,...a])}),n}function U(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];(X[t]||[]).forEach(i=>{i.apply(null,e)})}function L(){let t=arguments[0],n=Array.prototype.slice.call(arguments,1);return G[t]?G[t].apply(null,n):void 0}function Ot(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:n}=t,e=t.prefix||M();if(n)return n=F(e,n)||n,Qt(Yn.definitions,e,n)||Qt(w.styles,e,n)}var Yn=new St,Xe=()=>{f.autoReplaceSvg=!1,f.observeMutations=!1,U("noAuto")},Ge={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return C?(U("beforeI2svg",t),L("pseudoElements2svg",t),L("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:n}=t;f.autoReplaceSvg===!1&&(f.autoReplaceSvg=!0),f.observeMutations=!0,Ie(()=>{Be({autoReplaceSvgRoot:n}),U("watch",t)})}},$e={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:F(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){let n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],e=lt(t[0]);return{prefix:e,iconName:F(e,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(f.cssPrefix,"-"))>-1||t.match(pe))){let n=ft(t.split(" "),{skipLookups:!0});return{prefix:n.prefix||M(),iconName:F(n.prefix,n.iconName)||n.iconName}}if(typeof t=="string"){let n=M();return{prefix:n,iconName:F(n,t)||t}}}},x={noAuto:Xe,config:f,dom:Ge,parse:$e,library:Yn,findIconDefinition:Ot,toHtml:et},Be=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:n=g}=t;(Object.keys(w.styles).length>0||f.autoFetchSvg)&&C&&f.autoReplaceSvg&&x.dom.i2svg({node:n})};function ut(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(e=>et(e))}}),Object.defineProperty(t,"node",{get:function(){if(!C)return;let e=g.createElement("div");return e.innerHTML=t.html,e.children}}),t}function Ve(t){let{children:n,main:e,mask:a,attributes:r,styles:i,transform:o}=t;if(Dt(o)&&e.found&&!a.found){let{width:s,height:c}=e,l={x:s/c/2,y:.5};r.style=ct({...i,"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")})}return[{tag:"svg",attributes:r,children:n}]}function qe(t){let{prefix:n,iconName:e,children:a,attributes:r,symbol:i}=t,o=i===!0?"".concat(n,"-").concat(f.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:o},children:a}]}]}function Ut(t){let{icons:{main:n,mask:e},prefix:a,iconName:r,transform:i,symbol:o,title:s,maskId:c,titleId:l,extra:u,watchable:d=!1}=t,{width:m,height:h}=e.found?e:n,I=a==="fak",R=[f.replacementClass,r?"".concat(f.cssPrefix,"-").concat(r):""].filter(H=>u.classes.indexOf(H)===-1).filter(H=>H!==""||!!H).concat(u.classes).join(" "),A={children:[],attributes:{...u.attributes,"data-prefix":a,"data-icon":r,class:R,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(h)}},P=I&&!~u.classes.indexOf("fa-fw")?{width:"".concat(m/h*16*.0625,"em")}:{};d&&(A.attributes[Y]=""),s&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(l||tt())},children:[s]}),delete A.attributes.title);let b={...A,prefix:a,iconName:r,main:n,mask:e,maskId:c,transform:i,symbol:o,styles:{...P,...u.styles}},{children:k,attributes:W}=e.found&&n.found?L("generateAbstractMask",b)||{children:[],attributes:{}}:L("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=k,b.attributes=W,o?qe(b):Ve(b)}function tn(t){let{content:n,width:e,height:a,transform:r,title:i,extra:o,watchable:s=!1}=t,c={...o.attributes,...i?{title:i}:{},class:o.classes.join(" ")};s&&(c[Y]="");let l={...o.styles};Dt(r)&&(l.transform=Oe({transform:r,startCentered:!0,width:e,height:a}),l["-webkit-transform"]=l.transform);let u=ct(l);u.length>0&&(c.style=u);let d=[];return d.push({tag:"span",attributes:c,children:[n]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function Ke(t){let{content:n,title:e,extra:a}=t,r={...a.attributes,...e?{title:e}:{},class:a.classes.join(" ")},i=ct(a.styles);i.length>0&&(r.style=i);let o=[];return o.push({tag:"span",attributes:r,children:[n]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var{styles:ht}=w;function Nt(t){let n=t[0],e=t[1],[a]=t.slice(4),r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(f.cssPrefix,"-").concat(dt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(dt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(dt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:n,height:e,icon:r}}var Qe={found:!1,width:512,height:512};function Je(t,n){!wn&&!f.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function Ct(t,n){let e=n;return n==="fa"&&f.styleDefault!==null&&(n=M()),new Promise((a,r)=>{if(e==="fa"){let i=jn(t)||{};t=i.iconName||t,n=i.prefix||n}if(t&&n&&ht[n]&&ht[n][t]){let i=ht[n][t];return a(Nt(i))}Je(t,n),a({...Qe,icon:f.showMissingIcons&&t?L("missingIconAbstract")||{}:{}})})}var nn=()=>{},It=f.measurePerformance&&at&&at.mark&&at.measure?at:{mark:nn,measure:nn},K='FA "6.6.0"',Ze=t=>(It.mark("".concat(K," ").concat(t," begins")),()=>Un(t)),Un=t=>{It.mark("".concat(K," ").concat(t," ends")),It.measure("".concat(K," ").concat(t),"".concat(K," ").concat(t," begins"),"".concat(K," ").concat(t," ends"))},Wt={begin:Ze,end:Un},rt=()=>{};function en(t){return typeof(t.getAttribute?t.getAttribute(Y):null)=="string"}function ta(t){let n=t.getAttribute?t.getAttribute(Mt):null,e=t.getAttribute?t.getAttribute(Lt):null;return n&&e}function na(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(f.replacementClass)}function ea(){return f.autoReplaceSvg===!0?it.replace:it[f.autoReplaceSvg]||it.replace}function aa(t){return g.createElementNS("http://www.w3.org/2000/svg",t)}function ra(t){return g.createElement(t)}function Wn(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:e=t.tag==="svg"?aa:ra}=n;if(typeof t=="string")return g.createTextNode(t);let a=e(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(Wn(i,{ceFn:e}))}),a}function ia(t){let n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var it={replace:function(t){let n=t[0];if(n.parentNode)if(t[1].forEach(e=>{n.parentNode.insertBefore(Wn(e),n)}),n.getAttribute(Y)===null&&f.keepOriginalSource){let e=g.createComment(ia(n));n.parentNode.replaceChild(e,n)}else n.remove()},nest:function(t){let n=t[0],e=t[1];if(~Rt(n).indexOf(f.replacementClass))return it.replace(t);let a=new RegExp("".concat(f.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){let i=e[0].attributes.class.split(" ").reduce((o,s)=>(s===f.replacementClass||s.match(a)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}let r=e.map(i=>et(i)).join(`
`);n.setAttribute(Y,""),n.innerHTML=r}};function an(t){t()}function Hn(t,n){let e=typeof n=="function"?n:rt;if(t.length===0)e();else{let a=an;f.mutateApproach===me&&(a=_.requestAnimationFrame||an),a(()=>{let r=ea(),i=Wt.begin("mutate");t.map(r),i(),e()})}}var Ht=!1;function Xn(){Ht=!0}function Tt(){Ht=!1}var st=null;function rn(t){if(!$t||!f.observeMutations)return;let{treeCallback:n=rt,nodeCallback:e=rt,pseudoElementsCallback:a=rt,observeMutationsRoot:r=g}=t;st=new $t(i=>{if(Ht)return;let o=M();V(i).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!en(s.addedNodes[0])&&(f.searchPseudoElements&&a(s.target),n(s.target)),s.type==="attributes"&&s.target.parentNode&&f.searchPseudoElements&&a(s.target.parentNode),s.type==="attributes"&&en(s.target)&&~ye.indexOf(s.attributeName))if(s.attributeName==="class"&&ta(s.target)){let{prefix:c,iconName:l}=ft(Rt(s.target));s.target.setAttribute(Mt,c||o),l&&s.target.setAttribute(Lt,l)}else na(s.target)&&e(s.target)})}),C&&st.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function oa(){st&&st.disconnect()}function sa(t){let n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce((a,r)=>{let i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),e}function ca(t){let n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=ft(Rt(t));return r.prefix||(r.prefix=M()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=je(r.prefix,t.innerText)||jt(r.prefix,Et(t.innerText))),!r.iconName&&f.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function la(t){let n=V(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return f.autoA11y&&(e?n["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(a||tt()):(n["aria-hidden"]="true",n.focusable="false")),n}function fa(){return{iconName:null,title:null,titleId:null,prefix:null,transform:E,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function on(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:e,prefix:a,rest:r}=ca(t),i=la(t),o=Pt("parseNodeAttributes",{},t),s=n.styleParser?sa(t):[];return{iconName:e,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:E,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:s,attributes:i},...o}}var{styles:ua}=w;function Gn(t){let n=f.autoReplaceSvg==="nest"?on(t,{styleParser:!1}):on(t);return~n.extra.classes.indexOf(On)?L("generateLayersText",t,n):L("generateSvgReplacementMutation",t,n)}var S=new Set;Sn.map(t=>{S.add("fa-".concat(t))});Object.keys(z[p]).map(S.add.bind(S));Object.keys(z[y]).map(S.add.bind(S));Object.keys(z[v]).map(S.add.bind(S));S=[...S];function sn(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!C)return Promise.resolve();let e=g.documentElement.classList,a=u=>e.add("".concat(qt,"-").concat(u)),r=u=>e.remove("".concat(qt,"-").concat(u)),i=f.autoFetchSvg?S:Sn.map(u=>"fa-".concat(u)).concat(Object.keys(ua));i.includes("fa")||i.push("fa");let o=[".".concat(On,":not([").concat(Y,"])")].concat(i.map(u=>".".concat(u,":not([").concat(Y,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=V(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();let c=Wt.begin("onTree"),l=s.reduce((u,d)=>{try{let m=Gn(d);m&&u.push(m)}catch(m){wn||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise((u,d)=>{Promise.all(l).then(m=>{Hn(m,()=>{a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),c(),u()})}).catch(m=>{c(),d(m)})})}function ma(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Gn(t).then(e=>{e&&Hn([e],n)})}function da(t){return function(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:Ot(n||{}),{mask:r}=e;return r&&(r=(r||{}).icon?r:Ot(r||{})),t(a,{...e,mask:r})}}var ga=function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:e=E,symbol:a=!1,mask:r=null,maskId:i=null,title:o=null,titleId:s=null,classes:c=[],attributes:l={},styles:u={}}=n;if(!t)return;let{prefix:d,iconName:m,icon:h}=t;return ut({type:"icon",...t},()=>(U("beforeDOMElementCreation",{iconDefinition:t,params:n}),f.autoA11y&&(o?l["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(s||tt()):(l["aria-hidden"]="true",l.focusable="false")),Ut({icons:{main:Nt(h),mask:r?Nt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:m,transform:{...E,...e},symbol:a,title:o,maskId:i,titleId:s,extra:{attributes:l,styles:u,classes:c}})))},pa={mixout(){return{icon:da(ga)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=sn,t.nodeCallback=ma,t}}},provides(t){t.i2svg=function(n){let{node:e=g,callback:a=()=>{}}=n;return sn(e,a)},t.generateSvgReplacementMutation=function(n,e){let{iconName:a,title:r,titleId:i,prefix:o,transform:s,symbol:c,mask:l,maskId:u,extra:d}=e;return new Promise((m,h)=>{Promise.all([Ct(a,o),l.iconName?Ct(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(I=>{let[R,A]=I;m([n,Ut({icons:{main:R,mask:A},prefix:o,iconName:a,transform:s,symbol:c,maskId:u,title:r,titleId:i,extra:d,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(n){let{children:e,attributes:a,main:r,transform:i,styles:o}=n,s=ct(o);s.length>0&&(a.style=s);let c;return Dt(i)&&(c=L("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),e.push(c||r.icon),{children:e,attributes:a}}}},ha={mixout(){return{layer(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:e=[]}=n;return ut({type:"layer"},()=>{U("beforeDOMElementCreation",{assembler:t,params:n});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(f.cssPrefix,"-layers"),...e].join(" ")},children:a}]})}}}},ba={mixout(){return{counter(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:e=null,classes:a=[],attributes:r={},styles:i={}}=n;return ut({type:"counter",content:t},()=>(U("beforeDOMElementCreation",{content:t,params:n}),Ke({content:t.toString(),title:e,extra:{attributes:r,styles:i,classes:["".concat(f.cssPrefix,"-layers-counter"),...a]}})))}}}},ya={mixout(){return{text(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:e=E,title:a=null,classes:r=[],attributes:i={},styles:o={}}=n;return ut({type:"text",content:t},()=>(U("beforeDOMElementCreation",{content:t,params:n}),tn({content:t,transform:{...E,...e},title:a,extra:{attributes:i,styles:o,classes:["".concat(f.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(n,e){let{title:a,transform:r,extra:i}=e,o=null,s=null;if(yn){let c=parseInt(getComputedStyle(n).fontSize,10),l=n.getBoundingClientRect();o=l.width/c,s=l.height/c}return f.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([n,tn({content:n.innerHTML,width:o,height:s,transform:r,title:a,extra:i,watchable:!0})])}}},va=new RegExp('"',"ug"),cn=[1105920,1112319],ln={FontAwesome:{normal:"fas",400:"fas"},...te,...Zn,...ce},Ft=Object.keys(ln).reduce((t,n)=>(t[n.toLowerCase()]=ln[n],t),{}),xa=Object.keys(Ft).reduce((t,n)=>{let e=Ft[n];return t[n]=e[900]||[...Object.entries(e)][0][1],t},{});function Aa(t){let n=t.replace(va,""),e=_e(n,0),a=e>=cn[0]&&e<=cn[1],r=n.length===2?n[0]===n[1]:!1;return{value:Et(r?n[0]:n),isSecondary:a||r}}function ka(t,n){let e=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(n),r=isNaN(a)?"normal":a;return(Ft[e]||{})[r]||xa[e]}function fn(t,n){let e="".concat(ue).concat(n.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(e)!==null)return a();let o=V(t.children).filter(m=>m.getAttribute(vt)===n)[0],s=_.getComputedStyle(t,n),c=s.getPropertyValue("font-family"),l=c.match(he),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),a();if(l&&d!=="none"&&d!==""){let m=s.getPropertyValue("content"),h=ka(c,u),{value:I,isSecondary:R}=Aa(m),A=l[0].startsWith("FontAwesome"),P=jt(h,I),b=P;if(A){let k=Ye(I);k.iconName&&k.prefix&&(P=k.iconName,h=k.prefix)}if(P&&!R&&(!o||o.getAttribute(Mt)!==h||o.getAttribute(Lt)!==b)){t.setAttribute(e,b),o&&t.removeChild(o);let k=fa(),{extra:W}=k;W.attributes[vt]=n,Ct(P,h).then(H=>{let $n=Ut({...k,icons:{main:H,mask:Yt()},prefix:h,iconName:b,extra:W,watchable:!0}),mt=g.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?t.insertBefore(mt,t.firstChild):t.appendChild(mt),mt.outerHTML=$n.map(Bn=>et(Bn)).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function Ea(t){return Promise.all([fn(t,"::before"),fn(t,"::after")])}function wa(t){return t.parentNode!==document.head&&!~de.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(vt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function un(t){if(C)return new Promise((n,e)=>{let a=V(t.querySelectorAll("*")).filter(wa).map(Ea),r=Wt.begin("searchPseudoElements");Xn(),Promise.all(a).then(()=>{r(),Tt(),n()}).catch(()=>{r(),Tt(),e()})})}var Sa={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=un,t}}},provides(t){t.pseudoElements2svg=function(n){let{node:e=g}=n;f.searchPseudoElements&&un(e)}}},mn=!1,Pa={mixout(){return{dom:{unwatch(){Xn(),mn=!0}}}},hooks(){return{bootstrap(){rn(Pt("mutationObserverCallbacks",{}))},noAuto(){oa()},watch(t){let{observeMutationsRoot:n}=t;mn?Tt():rn(Pt("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},dn=t=>{let n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((e,a)=>{let r=a.toLowerCase().split("-"),i=r[0],o=r.slice(1).join("-");if(i&&o==="h")return e.flipX=!0,e;if(i&&o==="v")return e.flipY=!0,e;if(o=parseFloat(o),isNaN(o))return e;switch(i){case"grow":e.size=e.size+o;break;case"shrink":e.size=e.size-o;break;case"left":e.x=e.x-o;break;case"right":e.x=e.x+o;break;case"up":e.y=e.y-o;break;case"down":e.y=e.y+o;break;case"rotate":e.rotate=e.rotate+o;break}return e},n)},Oa={mixout(){return{parse:{transform:t=>dn(t)}}},hooks(){return{parseNodeAttributes(t,n){let e=n.getAttribute("data-fa-transform");return e&&(t.transform=dn(e)),t}}},provides(t){t.generateAbstractTransformGrouping=function(n){let{main:e,transform:a,containerWidth:r,iconWidth:i}=n,o={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(s," ").concat(c," ").concat(l)},d={transform:"translate(".concat(i/2*-1," -256)")},m={outer:o,inner:u,path:d};return{tag:"g",attributes:{...m.outer},children:[{tag:"g",attributes:{...m.inner},children:[{tag:e.icon.tag,children:e.icon.children,attributes:{...e.icon.attributes,...m.path}}]}]}}}},bt={x:0,y:0,width:"100%",height:"100%"};function gn(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function Na(t){return t.tag==="g"?t.children:[t]}var Ca={hooks(){return{parseNodeAttributes(t,n){let e=n.getAttribute("data-fa-mask"),a=e?ft(e.split(" ").map(r=>r.trim())):Yt();return a.prefix||(a.prefix=M()),t.mask=a,t.maskId=n.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(n){let{children:e,attributes:a,main:r,mask:i,maskId:o,transform:s}=n,{width:c,icon:l}=r,{width:u,icon:d}=i,m=Pe({transform:s,containerWidth:u,iconWidth:c}),h={tag:"rect",attributes:{...bt,fill:"white"}},I=l.children?{children:l.children.map(gn)}:{},R={tag:"g",attributes:{...m.inner},children:[gn({tag:l.tag,attributes:{...l.attributes,...m.path},...I})]},A={tag:"g",attributes:{...m.outer},children:[R]},P="mask-".concat(o||tt()),b="clip-".concat(o||tt()),k={tag:"mask",attributes:{...bt,id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[h,A]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:Na(d)},k]};return e.push(W,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(P,")"),...bt}}),{children:e,attributes:a}}}},Ia={provides(t){let n=!1;_.matchMedia&&(n=_.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){let e=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:{...a,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});let i={...r,attributeName:"opacity"},o={tag:"circle",attributes:{...a,cx:"256",cy:"364",r:"28"},children:[]};return n||o.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),e.push(o),e.push({tag:"path",attributes:{...a,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:n?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),n||e.push({tag:"path",attributes:{...a,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},Ta={hooks(){return{parseNodeAttributes(t,n){let e=n.getAttribute("data-fa-symbol"),a=e===null?!1:e===""?!0:e;return t.symbol=a,t}}}},Fa=[Ce,pa,ha,ba,ya,Sa,Pa,Oa,Ca,Ia,Ta];He(Fa,{mixoutsTo:x});var La=x.noAuto,Ra=x.config,Da=x.library,za=x.dom,ja=x.parse,Ya=x.findIconDefinition,Ua=x.toHtml,Wa=x.icon,Ha=x.layer,Xa=x.text,Ga=x.counter;export{Ra as a,ja as b,Wa as c};
