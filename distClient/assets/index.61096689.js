var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r;import{R as i,r as a,L as s,f as l,U as c}from"./vendor.8839be9f.js";import{f as u,E as f}from"./fakeData.8a29f74c.js";import"./UploadIcon.0fa8a85a.js";import"./event3.1c3d1ade.js";function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}function h(e,t){return Object.getOwnPropertyNames(Object(e)).reduce((function(n,r){var o=Object.getOwnPropertyDescriptor(Object(e),r),i=Object.getOwnPropertyDescriptor(Object(t),r);return Object.defineProperty(n,r,i||o)}),{})}function g(e){var t=h(e);return(t.types||t.split)&&(t.types=t.types||t.split),(t.absolute||t.position)&&(t.absolute=t.absolute||/absolute/.test(e.position)),t}function m(e){return null!==e&&"object"==typeof e}function v(e){return Array.isArray(e)?e:null==e?[]:function(e){return m(e)&&function(e){return"number"==typeof e&&e>-1&&e%1==0}(e.length)}(e)?Array.prototype.slice.call(e):[e]}function b(e){return m(e)&&/^(1|3|11)$/.test(e.nodeType)}function x(e){return"string"==typeof e}function y(e){var t,n=e;return x(e)&&(n=/^(#[a-z]\w+)$/.test(e.trim())?document.getElementById(e.trim().slice(1)):document.querySelectorAll(e)),(t=n,v(t).reduce((function(e,t){return e.concat(v(t))}),[])).filter(b)}function w(e,t,n){var r={},o=null;return m(e)&&(o=e[w.expando]||(e[w.expando]=++w.uid),r=w.cache[o]||(w.cache[o]={})),void 0===n?void 0===t?r:r[t]:void 0!==t?(r[t]=n,n):void 0}function E(e){var t=e&&e[w.expando];t&&(delete e[t],delete w.cache[t])}function C(e,t){for(var n=v(e),r=n.length,o=0;o<r;o++)t(n[o],o,n)}w.expando="splitType".concat(1*new Date),w.cache={},w.uid=0;var k="[".concat("\\ud800-\\udfff","]"),N="[".concat("\\u0300-\\u036f\\ufe20-\\ufe23").concat("\\u20d0-\\u20f0","]"),T="\\ud83c[\\udffb-\\udfff]",O="(?:".concat(N,"|").concat(T,")"),S="[^".concat("\\ud800-\\udfff","]"),M="(?:\\ud83c[\\udde6-\\uddff]){2}",P="[\\ud800-\\udbff][\\udc00-\\udfff]",L="".concat(O,"?"),R="[".concat("\\ufe0e\\ufe0f","]?"),j=R+L+("(?:\\u200d(?:"+[S,M,P].join("|")+")"+R+L+")*"),B="(?:".concat(["".concat(S).concat(N,"?"),N,M,P,k].join("|"),"\n)"),A=RegExp("".concat(T,"(?=").concat(T,")|").concat(B).concat(j),"g"),z=RegExp("[".concat(["\\u200d","\\ud800-\\udfff","\\u0300-\\u036f\\ufe20-\\ufe23","\\u20d0-\\u20f0","\\ufe0e\\ufe0f"].join(""),"]"));function _(e){return z.test(e)}function W(e){return _(e)?function(e){return e.match(A)||[]}(e):function(e){return e.split("")}(e)}function I(e){return null==e?"":String(e)}function H(e,t){var n=document.createElement(e);return t?(Object.keys(t).forEach((function(e){var r=t[e];null!==r&&("textContent"===e||"innerHTML"===e?n[e]=r:"children"===e?C(r,(function(e){b(e)&&n.appendChild(e)})):n.setAttribute(e,String(r).trim()))})),n):n}var D={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:"lines, words, chars",absolute:!1,tagName:"div"},F=function(){return document.createDocumentFragment()},q=function(e){return document.createTextNode(e)};function V(e,t){var n,r,o=function(e){var t=x(e)||Array.isArray(e)?String(e):"";return{lines:/line/i.test(t),words:/word/i.test(t),chars:/(char)|(character)/i.test(t)}}((t=h(D,t)).types),i=t.tagName,a="B".concat(1*new Date,"R"),s="absolute"===t.position||t.absolute,l=[],c=[];if(r=o.lines?H("div"):F(),n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";return(e=e?String(e):"").split(t)}(function(e,t){var n=e.textContent;if(t){var r=e.innerHTML,o=document.createElement("div");o.innerHTML=r.replace(/<br\s*\/?>/g," ".concat(t," ")),n=o.textContent}return n.replace(/\s+/g," ").trim()}(e,a)).reduce((function(e,n,s,l){var u,f;return n===a?(r.appendChild(H("br")),e):(o.chars&&(f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(e=I(e))&&x(e)&&!t&&_(e)?W(e):e.split(t)}(n).map((function(e){return H(i,{class:"".concat(t.splitClass," ").concat(t.charClass),style:"display: inline-block;",textContent:e})})),c=c.concat(f)),o.words||o.lines?(u=H(i,{class:"".concat(t.wordClass," ").concat(t.splitClass),style:"display: inline-block; position: ".concat(o.words?"relative":"static"),children:o.chars?f:null,textContent:o.chars?null:n}),r.appendChild(u)):C(f,(function(e){r.appendChild(e)})),s!==l.length-1&&r.appendChild(q(" ")),o.words?e.concat(u):e)}),[]),e.innerHTML="",e.appendChild(r),!s&&!o.lines)return{chars:c,words:n,lines:[]};var u,f,d,p,g,m=[],v=[],b=w(e,"nodes",e.getElementsByTagName(i)),y=e.parentElement,E=e.nextElementSibling,k=window.getComputedStyle(e).textAlign;return s&&(p={left:r.offsetLeft,top:r.offsetTop,width:r.offsetWidth},d=e.offsetWidth,f=e.offsetHeight,w(e).cssWidth=e.style.width,w(e).cssHeight=e.style.height),C(b,(function(e){if(e!==r){var t,n=e.parentElement===r;o.lines&&n&&((t=w(e,"top",e.offsetTop))!==g&&(g=t,m.push(v=[])),v.push(e)),s&&(w(e).top=t||e.offsetTop,w(e).left=e.offsetLeft,w(e).width=e.offsetWidth,w(e).height=u||(u=e.offsetHeight))}})),y&&y.removeChild(e),o.lines&&(r=F(),l=m.map((function(e){var n=H(i,{class:"".concat(t.splitClass," ").concat(t.lineClass),style:"display: block; text-align: ".concat(k,"; width: 100%;")});return r.appendChild(n),s&&(w(n).type="line",w(n).top=w(e[0]).top,w(n).height=u),C(e,(function(e,t,r){o.words?n.appendChild(e):o.chars?C(e.children,(function(e){n.appendChild(e)})):n.appendChild(q(e.textContent)),t!==r.length-1&&n.appendChild(q(" "))})),n})),e.replaceChild(r,e.firstChild)),s&&(e.style.width="".concat(e.style.width||d,"px"),e.style.height="".concat(f,"px"),C(b,(function(e){var t="line"===w(e).type,n=!t&&"line"===w(e.parentElement).type;e.style.top="".concat(n?0:w(e).top,"px"),e.style.left="".concat(t?p.left:w(e).left-(n?p.left:0),"px"),e.style.height="".concat(w(e).height,"px"),e.style.width="".concat(t?p.width:w(e).width,"px"),e.style.position="absolute"}))),y&&(E?y.insertBefore(e,E):y.appendChild(e)),{lines:l,words:o.words?n:[],chars:c}}var $=h(D,{}),U=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.isSplit=!1,this.settings=h($,g(n)),this.elements=y(t)||[],this.elements.length&&(this.originals=this.elements.map((function(e){return w(e,"html",w(e).html||e.innerHTML)})),this.settings.types&&this.split())}return p(e,null,[{key:"defaults",get:function(){return $},set:function(e){$=h($,g(e))}}]),p(e,[{key:"split",value:function(e){var t=this;this.revert(),this.lines=[],this.words=[],this.chars=[];var n=[window.pageXOffset,window.pageYOffset];void 0!==e&&(this.settings=h(this.settings,g(e))),this.elements.forEach((function(e){var n=V(e,t.settings),r=n.lines,o=n.words,i=n.chars;t.lines=t.lines.concat(r),t.words=t.words.concat(o),t.chars=t.chars.concat(i),w(e).isSplit=!0})),this.isSplit=!0,window.scrollTo(n[0],n[1]),this.elements.forEach((function(e){v(w(e).nodes||[]).forEach(E)}))}},{key:"revert",value:function(){var e=this;this.isSplit&&(this.lines=null,this.words=null,this.chars=null),this.elements.forEach((function(t){w(t).isSplit&&w(t).html&&(t.innerHTML=w(t).html,t.style.height=w(t).cssHeight||"",t.style.width=w(t).cssWidth||"",e.isSplit=!1)}))}}]),e}();const X=({className:e})=>i.createElement("svg",{className:e,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})),Y=()=>{const e=a.exports.useRef(null),t=a.exports.useRef(null),n=a.exports.useRef([]),r=a.exports.useRef([]);return a.exports.useEffect((()=>()=>{}),[]),i.createElement("form",{ref:e,className:" mx-auto search-form rounded-xl p-6 flex items-center backdrop-filter backdrop-blur-sm bg-opacity-80 bg-[#0b0434] dark:shadow-neon text-white shadow-xl space-x-3"},i.createElement("div",{className:"grid flex-1 grid-cols-3 gap-x-4 gap-y-2 textshadow"},i.createElement("div",{className:"col-span-3 space-y-3 lg:col-span-1"},i.createElement("h3",{className:"text-lg font-medium",ref:e=>n.current[0]=e},"Looking for"),i.createElement("input",{ref:e=>r.current[0]=e,type:"text",name:"",className:"!bg-[#0b0434] w-full text-xl font-semibold border-t-0 border-b-2 border-l-0 border-r-0 rounded-md outline-none ring-offset-2"})),i.createElement("div",{className:"col-span-3 space-y-3 lg:col-span-1"},i.createElement("h3",{className:"text-lg font-medium",ref:e=>n.current[1]=e},"In"),i.createElement("input",{ref:e=>r.current[1]=e,type:"text",name:"",className:"!bg-[#0b0434] w-full text-xl font-semibold border-t-0 border-b-2 border-l-0 border-r-0 rounded-md outline-none ring-offset-2"})),i.createElement("div",{className:"col-span-3 space-y-3 lg:col-span-1"},i.createElement("h3",{className:"text-lg font-medium",ref:e=>n.current[2]=e},"When"),i.createElement("select",{ref:e=>r.current[2]=e,name:"",className:"transition-colors capitalize bg-[#0b0434] w-full border-b-2 border-t-0 border-r-0 border-l-0 font-semibold text-xl outline-none rounded-md ring-offset-2"},i.createElement("option",{value:"a",className:"text-xl font-semibold capitalize"},"any date"),i.createElement("option",{value:"a",className:"text-xl font-semibold"},"1"),i.createElement("option",{value:"a",className:"text-xl font-semibold"},"1"),i.createElement("option",{value:"a",className:"text-xl font-semibold"},"1")))),i.createElement("div",{className:"flex h-full submit-btn",ref:t},i.createElement(s,{to:"/search",type:"submit",className:"flex h-full p-5 text-white bg-blue-500 rounded-lg"},i.createElement(X,{className:"w-10 h-10"}))))};
/*!
 * ScrollTrigger 3.7.0
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Z,G,J,K,Q,ee,te,ne,re,oe,ie,ae,se,le,ce,ue,fe,de,pe,he,ge,me,ve,be,xe,ye,we,Ee=1,Ce=[],ke=[],Ne=Date.now,Te=Ne(),Oe=0,Se=1,Me=function(e){return e},Pe=function(e){return Math.round(1e5*e)/1e5||0},Le=function(){return"undefined"!=typeof window},Re=function(){return Z||Le()&&(Z=window.gsap)&&Z.registerPlugin&&Z},je=function(e){return!!~te.indexOf(e)},Be=function(e,t){return~Ce.indexOf(e)&&Ce[Ce.indexOf(e)+1][t]},Ae=function(e,t){var n=t.s,r=t.sc,o=ke.indexOf(e),i=r===Ze.sc?1:2;return!~o&&(o=ke.push(e)-1),ke[o+i]||(ke[o+i]=Be(e,n)||(je(e)?r:function(t){return arguments.length?e[n]=t:e[n]}))},ze=function(e){return Be(e,"getBoundingClientRect")||(je(e)?function(){return Bt.width=J.innerWidth,Bt.height=J.innerHeight,Bt}:function(){return Ke(e)})},_e=function(e,t){var n=t.s,r=t.d2,o=t.d,i=t.a;return(n="scroll"+r)&&(i=Be(e,n))?i()-ze(e)()[o]:je(e)?Math.max(Q[n],ee[n])-(J["inner"+r]||Q["client"+r]||ee["client"+r]):e[n]-e["offset"+r]},We=function(e,t){for(var n=0;n<ge.length;n+=3)(!t||~t.indexOf(ge[n+1]))&&e(ge[n],ge[n+1],ge[n+2])},Ie=function(e){return"string"==typeof e},He=function(e){return"function"==typeof e},De=function(e){return"number"==typeof e},Fe=function(e){return"object"==typeof e},qe=function(e){return He(e)&&e()},Ve=function(e,t){return function(){var n=qe(e),r=qe(t);return function(){qe(n),qe(r)}}},$e=Math.abs,Ue="padding",Xe="px",Ye={s:"scrollLeft",p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:function(e){return arguments.length?J.scrollTo(e,Ze.sc()):J.pageXOffset||K.scrollLeft||Q.scrollLeft||ee.scrollLeft||0}},Ze={s:"scrollTop",p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ye,sc:function(e){return arguments.length?J.scrollTo(Ye.sc(),e):J.pageYOffset||K.scrollTop||Q.scrollTop||ee.scrollTop||0}},Ge=function(e){return J.getComputedStyle(e)},Je=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ke=function(e,t){var n=t&&"matrix(1, 0, 0, 1, 0, 0)"!==Ge(e)[fe]&&Z.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},Qe=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},et=function(e){var t,n=[],r=e.labels,o=e.duration();for(t in r)n.push(r[t]/o);return n},tt=function(e,t,n,r){return n.split(",").forEach((function(n){return e(t,n,r)}))},nt=function(e,t,n){return e.addEventListener(t,n,{passive:!0})},rt=function(e,t,n){return e.removeEventListener(t,n)},ot={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},it={toggleActions:"play",anticipatePin:0},at={top:0,left:0,center:.5,bottom:1,right:1},st=function(e,t){if(Ie(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in at?at[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},lt=function(e,t,n,r,o,i,a){var s=o.startColor,l=o.endColor,c=o.fontSize,u=o.indent,f=o.fontWeight,d=K.createElement("div"),p=je(n)||"fixed"===Be(n,"pinType"),h=-1!==e.indexOf("scroller"),g=p?ee:n,m=-1!==e.indexOf("start"),v=m?s:l,b="border-color:"+v+";font-size:"+c+";color:"+v+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+(h&&p?"fixed;":"absolute;"),(h||!p)&&(b+=(r===Ze?"right":"bottom")+":"+(i+parseFloat(u))+"px;"),a&&(b+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),d._isStart=m,d.setAttribute("class","gsap-marker-"+e),d.style.cssText=b,d.innerText=t||0===t?e+"-"+t:e,g.children[0]?g.insertBefore(d,g.children[0]):g.appendChild(d),d._offset=d["offset"+r.op.d2],ct(d,0,r,m),d},ct=function(e,t,n,r){var o={display:"block"},i=n[r?"os2":"p2"],a=n[r?"p2":"os2"];e._isFlipped=r,o[n.a+"Percent"]=r?-100:0,o[n.a]=r?"1px":0,o["border"+i+"Width"]=1,o["border"+a+"Width"]=0,o[n.p]=t+"px",Z.set(e,o)},ut=[],ft={},dt=function(){return oe||(oe=re(Ot))},pt=function(){oe||(oe=re(Ot),Oe||yt("scrollStart"),Oe=Ne())},ht=function(){return!ce&&!be&&!K.fullscreenElement&&ne.restart(!0)},gt={},mt=[],vt=[],bt=function(e){var t,n=Z.ticker.frame,r=[],o=0;if(we!==n||Ee){for(Ct();o<vt.length;o+=4)(t=J.matchMedia(vt[o]).matches)!==vt[o+3]&&(vt[o+3]=t,t?r.push(o):Ct(1,vt[o])||He(vt[o+2])&&vt[o+2]());for(Et(),o=0;o<r.length;o++)t=r[o],ye=vt[t],vt[t+2]=vt[t+1](e);ye=0,G&&kt(0,1),we=n,yt("matchMedia")}},xt=function e(){return rt(It,"scrollEnd",e)||kt(!0)},yt=function(e){return gt[e]&&gt[e].map((function(e){return e()}))||mt},wt=[],Et=function(e){for(var t=0;t<wt.length;t+=5)e&&wt[t+4]!==e||(wt[t].style.cssText=wt[t+1],wt[t].getBBox&&wt[t].setAttribute("transform",wt[t+2]||""),wt[t+3].uncache=1)},Ct=function(e,t){var n;for(de=0;de<ut.length;de++)n=ut[de],t&&n.media!==t||(e?n.kill(1):n.revert());t&&Et(t),t||yt("revert")},kt=function(e,t){if(!Oe||e){var n=yt("refreshInit");me&&It.sort(),t||Ct(),ut.forEach((function(e){return e.refresh()})),n.forEach((function(e){return e&&e.render&&e.render(-1)})),ke.forEach((function(e){return"function"==typeof e&&(e.rec=0)})),ne.pause(),yt("refresh")}else nt(It,"scrollEnd",xt)},Nt=0,Tt=1,Ot=function(){var e=ut.length,t=Ne(),n=t-Te>=50,r=e&&ut[0].scroll();if(Tt=Nt>r?-1:1,Nt=r,n&&(Oe&&!ue&&t-Oe>200&&(Oe=0,yt("scrollEnd")),se=Te,Te=t),Tt<0){for(de=e;de-- >0;)ut[de]&&ut[de].update(0,n);Tt=1}else for(de=0;de<e;de++)ut[de]&&ut[de].update(0,n);oe=0},St=["left","top","bottom","right","marginBottom","marginRight","marginTop","marginLeft","display","flexShrink","float","zIndex","grid-column-start","grid-column-end","grid-row-start","grid-row-end","grid-area","justify-self","align-self","place-self"],Mt=St.concat(["width","height","boxSizing","maxWidth","maxHeight","position","margin",Ue,"paddingTop","paddingRight","paddingBottom","paddingLeft"]),Pt=function(e,t,n,r){if(e.parentNode!==t){for(var o,i=St.length,a=t.style,s=e.style;i--;)a[o=St[i]]=n[o];a.position="absolute"===n.position?"absolute":"relative","inline"===n.display&&(a.display="inline-block"),s.bottom=s.right="auto",a.overflow="visible",a.boxSizing="border-box",a.width=Qe(e,Ye)+Xe,a.height=Qe(e,Ze)+Xe,a.padding=s.margin=s.top=s.left="0",Rt(r),s.width=s.maxWidth=n.width,s.height=s.maxHeight=n.height,s.padding=n.padding,e.parentNode.insertBefore(t,e),t.appendChild(e)}},Lt=/([A-Z])/g,Rt=function(e){if(e){var t,n,r=e.t.style,o=e.length,i=0;for((e.t._gsap||Z.core.getCache(e.t)).uncache=1;i<o;i+=2)n=e[i+1],t=e[i],n?r[t]=n:r[t]&&r.removeProperty(t.replace(Lt,"-$1").toLowerCase())}},jt=function(e){for(var t=Mt.length,n=e.style,r=[],o=0;o<t;o++)r.push(Mt[o],n[Mt[o]]);return r.t=e,r},Bt={left:0,top:0},At=function(e,t,n,r,o,i,a,s,l,c,u,f){if(He(e)&&(e=e(s)),Ie(e)&&"max"===e.substr(0,3)&&(e=f+("="===e.charAt(4)?st("0"+e.substr(3),n):0)),De(e))a&&ct(a,n,r,!0);else{He(t)&&(t=t(s));var d,p,h,g=ie(t)[0]||ee,m=Ke(g)||{},v=e.split(" ");m&&(m.left||m.top)||"none"!==Ge(g).display||(h=g.style.display,g.style.display="block",m=Ke(g),h?g.style.display=h:g.style.removeProperty("display")),d=st(v[0],m[r.d]),p=st(v[1]||"0",n),e=m[r.p]-l[r.p]-c+d+o-p,a&&ct(a,p,r,n-p<20||a._isStart&&p>20),n-=n-p}if(i){var b=e+n,x=i._isStart;f="scroll"+r.d2,ct(i,b,r,x&&b>20||!x&&(u?Math.max(ee[f],Q[f]):i.parentNode[f])<=b+1),u&&(l=Ke(a),u&&(i.style[r.op.p]=l[r.op.p]-r.op.m-i._offset+Xe))}return Math.round(e)},zt=/(?:webkit|moz|length|cssText|inset)/i,_t=function(e,t,n,r){if(e.parentNode!==t){var o,i,a=e.style;if(t===ee){for(o in e._stOrig=a.cssText,i=Ge(e))+o||zt.test(o)||!i[o]||"string"!=typeof a[o]||"0"===o||(a[o]=i[o]);a.top=n,a.left=r}else a.cssText=e._stOrig;Z.core.getCache(e).uncache=1,t.appendChild(e)}},Wt=function(e,t){var n,r,o=Ae(e,t),i="_scroll"+t.p2,a=function t(a,s,l,c,u){var f=t.tween,d=s.onComplete,p={};return f&&f.kill(),n=Math.round(l),s[i]=a,s.modifiers=p,p[i]=function(e){return(e=Pe(o()))!==n&&e!==r&&Math.abs(e-n)>2?(f.kill(),t.tween=0):e=l+c*f.ratio+u*f.ratio*f.ratio,r=n,n=Pe(e)},s.onComplete=function(){t.tween=0,d&&d.call(f)},f=t.tween=Z.to(e,s)};return e[i]=o,e.addEventListener("wheel",(function(){return a.tween&&a.tween.kill()&&(a.tween=0)})),a};Ye.op=Ze;var It=function(){function e(t,n){G||e.register(Z)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(t,n)}return e.prototype.init=function(t,n){if(this.progress=this.start=0,this.vars&&this.kill(1),Se){var r,o,i,a,s,l,c,u,f,d,p,h,g,m,v,b,x,y,w,E,C,k,N,T,O,S,M,P,L,R,j,B,A,z,_,W,I,H,D,F=(t=Je(Ie(t)||De(t)||t.nodeType?{trigger:t}:t,it)).horizontal?Ye:Ze,q=t,V=q.onUpdate,$=q.toggleClass,U=q.id,X=q.onToggle,Y=q.onRefresh,G=q.scrub,te=q.trigger,ne=q.pin,re=q.pinSpacing,oe=q.invalidateOnRefresh,le=q.anticipatePin,fe=q.onScrubComplete,pe=q.onSnapComplete,he=q.once,ge=q.snap,be=q.pinReparent,we=!G&&0!==G,ke=ie(t.scroller||J)[0],Te=Z.core.getCache(ke),Pe=je(ke),Le="pinType"in t?"fixed"===t.pinType:Pe||"fixed"===Be(ke,"pinType"),Re=[t.onEnter,t.onLeave,t.onEnterBack,t.onLeaveBack],We=we&&t.toggleActions.split(" "),qe="markers"in t?t.markers:it.markers,Ve=Pe?0:parseFloat(Ge(ke)["border"+F.p2+"Width"])||0,tt=this,at=t.onRefreshInit&&function(){return t.onRefreshInit(tt)},ct=function(e,t,n){var r=n.d,o=n.d2,i=n.a;return(i=Be(e,"getBoundingClientRect"))?function(){return i()[r]}:function(){return(t?J["inner"+o]:e["client"+o])||0}}(ke,Pe,F),dt=function(e,t){return!t||~Ce.indexOf(e)?ze(e):function(){return Bt}}(ke,Pe),gt=0;tt.media=ye,le*=45,tt.scroller=ke,tt.scroll=Ae(ke,F),a=tt.scroll(),tt.vars=t,n=n||t.animation,"refreshPriority"in t&&(me=1),Te.tweenScroll=Te.tweenScroll||{top:Wt(ke,Ze),left:Wt(ke,Ye)},tt.tweenTo=r=Te.tweenScroll[F.p],n&&(n.vars.lazy=!1,n._initted||!1!==n.vars.immediateRender&&!1!==t.immediateRender&&n.render(0,!0,!0),tt.animation=n.pause(),n.scrollTrigger=tt,(j=De(G)&&G)&&(R=Z.to(n,{ease:"power3",duration:j,onComplete:function(){return fe&&fe(tt)}})),P=0,U||(U=n.vars.id)),ut.push(tt),ge&&(Fe(ge)||(ge={snapTo:ge}),"scrollBehavior"in ee.style&&Z.set(Pe?[ee,Q]:ke,{scrollBehavior:"auto"}),i=He(ge.snapTo)?ge.snapTo:"labels"===ge.snapTo?function(e){return function(t){return Z.utils.snap(et(e),t)}}(n):"labelsDirectional"===ge.snapTo?(I=n,function(e,t){var n,r=et(I);if(r.sort((function(e,t){return e-t})),t.direction>0){for(e-=1e-4,n=0;n<r.length;n++)if(r[n]>=e)return r[n];return r.pop()}for(n=r.length,e+=1e-4;n--;)if(r[n]<=e)return r[n];return r[0]}):Z.utils.snap(ge.snapTo),B=ge.duration||{min:.1,max:2},B=Fe(B)?ae(B.min,B.max):ae(B,B),A=Z.delayedCall(ge.delay||j/2||.1,(function(){if(Math.abs(tt.getVelocity())<10&&!ue&&gt!==tt.scroll()){var e=n&&!we?n.totalProgress():tt.progress,t=(e-L)/(Ne()-se)*1e3||0,o=Z.utils.clamp(-tt.progress,1-tt.progress,$e(t/2)*t/.185),a=tt.progress+(!1===ge.inertia?0:o),s=ae(0,1,i(a,tt)),u=tt.scroll(),f=Math.round(l+s*g),d=ge,p=d.onStart,h=d.onInterrupt,m=d.onComplete,v=r.tween;if(u<=c&&u>=l&&f!==u){if(v&&!v._initted&&v.data<=Math.abs(f-u))return;!1===ge.inertia&&(o=s-tt.progress),r(f,{duration:B($e(.185*Math.max($e(a-e),$e(s-e))/t/.05||0)),ease:ge.ease||"power3",data:Math.abs(f-u),onInterrupt:function(){return A.restart(!0)&&h&&h(tt)},onComplete:function(){gt=tt.scroll(),P=L=n&&!we?n.totalProgress():tt.progress,pe&&pe(tt),m&&m(tt)}},u,o*g,f-u-o*g),p&&p(tt,r.tween)}}else tt.isActive&&A.restart(!0)})).pause()),U&&(ft[U]=tt),te=tt.trigger=ie(te||ne)[0],ne=!0===ne?te:ie(ne)[0],Ie($)&&($={targets:te,className:$}),ne&&(!1===re||"margin"===re||(re=!(!re&&"flex"===Ge(ne.parentNode).display)&&Ue),tt.pin=ne,!1!==t.force3D&&Z.set(ne,{force3D:!0}),(o=Z.core.getCache(ne)).spacer?m=o.pinState:(o.spacer=x=K.createElement("div"),x.setAttribute("class","pin-spacer"+(U?" pin-spacer-"+U:"")),o.pinState=m=jt(ne)),tt.spacer=x=o.spacer,M=Ge(ne),N=M[re+F.os2],w=Z.getProperty(ne),E=Z.quickSetter(ne,F.a,Xe),Pt(ne,x,M),b=jt(ne)),qe&&(h=Fe(qe)?Je(qe,ot):ot,d=lt("scroller-start",U,ke,F,h,0),p=lt("scroller-end",U,ke,F,h,0,d),y=d["offset"+F.op.d2],u=lt("start",U,ke,F,h,y),f=lt("end",U,ke,F,h,y),Le||Ce.length&&!0===Be(ke,"fixedMarkers")||(D=Ge(H=Pe?ee:ke).position,H.style.position="absolute"===D||"fixed"===D?D:"relative",Z.set([d,p],{force3D:!0}),O=Z.quickSetter(d,F.a,Xe),S=Z.quickSetter(p,F.a,Xe))),tt.revert=function(e){var t=!1!==e||!tt.enabled,r=ce;t!==tt.isReverted&&(t&&(tt.scroll.rec||(tt.scroll.rec=tt.scroll()),_=Math.max(tt.scroll(),tt.scroll.rec||0),z=tt.progress,W=n&&n.progress()),u&&[u,f,d,p].forEach((function(e){return e.style.display=t?"none":"block"})),t&&(ce=1),tt.update(t),ce=r,ne&&(t?function(e,t,n){if(Rt(n),e.parentNode===t){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}}(ne,x,m):(!be||!tt.isActive)&&Pt(ne,x,Ge(ne),T)),tt.isReverted=t)},tt.refresh=function(r,o){if(!ce&&tt.enabled||o)if(ne&&r&&Oe)nt(e,"scrollEnd",xt);else{ce=1,R&&R.pause(),oe&&n&&n.progress(0).invalidate(),tt.isReverted||tt.revert();for(var i,h,y,E,N,O,S,M,P,L,j=ct(),B=dt(),A=_e(ke,F),I=0,H=0,D=t.end,q=t.endTrigger||te,V=t.start||(0!==t.start&&te?ne?"0 0":"0 100%":0),$=t.pinnedContainer&&ie(t.pinnedContainer)[0],U=te&&Math.max(0,ut.indexOf(tt))||0,X=U;X--;)(O=ut[X]).end||O.refresh(0,1)||(ce=1),!(S=O.pin)||S!==te&&S!==ne||O.isReverted||(L||(L=[]),L.unshift(O),O.revert());for(l=At(V,te,j,F,tt.scroll(),u,d,tt,B,Ve,Le,A)||(ne?-.001:0),He(D)&&(D=D(tt)),Ie(D)&&!D.indexOf("+=")&&(~D.indexOf(" ")?D=(Ie(V)?V.split(" ")[0]:"")+D:(I=st(D.substr(2),j),D=Ie(V)?V:l+I,q=te)),c=Math.max(l,At(D||(q?"100% 0":A),q,j,F,tt.scroll()+I,f,p,tt,B,Ve,Le,A))||-.001,g=c-l||(l-=.01)&&.001,I=0,X=U;X--;)(S=(O=ut[X]).pin)&&O.start-O._pinPush<l&&(i=O.end-O.start,(S===te||S===$)&&(I+=i),S===ne&&(H+=i));if(l+=I,c+=I,tt._pinPush=H,u&&I&&((i={})[F.a]="+="+I,$&&(i[F.p]="-="+tt.scroll()),Z.set([u,f],i)),ne)i=Ge(ne),E=F===Ze,y=tt.scroll(),C=parseFloat(w(F.a))+H,!A&&c>1&&((Pe?ee:ke).style["overflow-"+F.a]="scroll"),Pt(ne,x,i),b=jt(ne),h=Ke(ne,!0),M=Le&&Ae(ke,E?Ye:Ze)(),re&&((T=[re+F.os2,g+H+Xe]).t=x,(X=re===Ue?Qe(ne,F)+g+H:0)&&T.push(F.d,X+Xe),Rt(T),Le&&tt.scroll(_)),Le&&((N={top:h.top+(E?y-l:M)+Xe,left:h.left+(E?M:y-l)+Xe,boxSizing:"border-box",position:"fixed"}).width=N.maxWidth=Math.ceil(h.width)+Xe,N.height=N.maxHeight=Math.ceil(h.height)+Xe,N.margin=N.marginTop=N.marginRight=N.marginBottom=N.marginLeft="0",N.padding=i.padding,N.paddingTop=i.paddingTop,N.paddingRight=i.paddingRight,N.paddingBottom=i.paddingBottom,N.paddingLeft=i.paddingLeft,v=function(e,t,n){for(var r,o=[],i=e.length,a=n?8:0;a<i;a+=2)r=e[a],o.push(r,r in t?t[r]:e[a+1]);return o.t=e.t,o}(m,N,be)),n?(P=n._initted,ve(1),n.render(n.duration(),!0,!0),k=w(F.a)-C+g+H,g!==k&&v.splice(v.length-2,2),n.render(0,!0,!0),P||n.invalidate(),ve(0)):k=g;else if(te&&tt.scroll())for(h=te.parentNode;h&&h!==ee;)h._pinOffset&&(l-=h._pinOffset,c-=h._pinOffset),h=h.parentNode;L&&L.forEach((function(e){return e.revert(!1)})),tt.start=l,tt.end=c,(a=s=tt.scroll())<_&&tt.scroll(_),tt.revert(!1),ce=0,n&&we&&n._initted&&n.progress()!==W&&n.progress(W,!0).render(n.time(),!0,!0),z!==tt.progress&&(R&&n.totalProgress(z,!0),tt.progress=z,tt.update()),ne&&re&&(x._pinOffset=Math.round(tt.progress*k)),Y&&Y(tt)}},tt.getVelocity=function(){return(tt.scroll()-s)/(Ne()-se)*1e3||0},tt.update=function(e,t){var o,i,u,f,p,h=tt.scroll(),m=e?0:(h-l)/g,y=m<0?0:m>1?1:m||0,w=tt.progress;if(t&&(s=a,a=h,ge&&(L=P,P=n&&!we?n.totalProgress():y)),le&&!y&&ne&&!ce&&!Ee&&Oe&&l<h+(h-s)/(Ne()-se)*le&&(y=1e-4),y!==w&&tt.enabled){if(f=(p=(o=tt.isActive=!!y&&y<1)!==(!!w&&w<1))||!!y!=!!w,tt.direction=y>w?1:-1,tt.progress=y,we||(!R||ce||Ee?n&&n.totalProgress(y,!!ce):(R.vars.totalProgress=y,R.invalidate().restart())),ne)if(e&&re&&(x.style[re+F.os2]=N),Le){if(f){if(u=!e&&y>w&&c+1>h&&h+1>=_e(ke,F),be)if(e||!o&&!u)_t(ne,x);else{var T=Ke(ne,!0),M=h-l;_t(ne,ee,T.top+(F===Ze?M:0)+Xe,T.left+(F===Ze?0:M)+Xe)}Rt(o||u?v:b),k!==g&&y<1&&o||E(C+(1!==y||u?0:k))}}else E(C+k*y);ge&&!r.tween&&!ce&&!Ee&&A.restart(!0),$&&(p||he&&y&&(y<1||!xe))&&ie($.targets).forEach((function(e){return e.classList[o||he?"add":"remove"]($.className)})),V&&!we&&!e&&V(tt),f&&!ce?(i=y&&!w?0:1===y?1:1===w?2:3,we&&(u=!p&&"none"!==We[i+1]&&We[i+1]||We[i],n&&("complete"===u||"reset"===u||u in n)&&("complete"===u?n.pause().totalProgress(1):"reset"===u?n.restart(!0).pause():"restart"===u?n.restart(!0):n[u]()),V&&V(tt)),!p&&xe||(X&&p&&X(tt),Re[i]&&Re[i](tt),he&&(1===y?tt.kill(!1,1):Re[i]=0),p||Re[i=1===y?1:3]&&Re[i](tt))):we&&V&&!ce&&V(tt)}S&&(O(h+(d._isFlipped?1:0)),S(h))},tt.enable=function(t,n){tt.enabled||(tt.enabled=!0,nt(ke,"resize",ht),nt(ke,"scroll",pt),at&&nt(e,"refreshInit",at),!1!==t&&(tt.progress=z=0,a=s=gt=tt.scroll()),!1!==n&&tt.refresh())},tt.getTween=function(e){return e&&r?r.tween:R},tt.disable=function(t,n){if(tt.enabled&&(!1!==t&&tt.revert(),tt.enabled=tt.isActive=!1,n||R&&R.pause(),_=0,o&&(o.uncache=1),at&&rt(e,"refreshInit",at),A&&(A.pause(),r.tween&&r.tween.kill()&&(r.tween=0)),!Pe)){for(var i=ut.length;i--;)if(ut[i].scroller===ke&&ut[i]!==tt)return;rt(ke,"resize",ht),rt(ke,"scroll",pt)}},tt.kill=function(e,t){tt.disable(e,t),U&&delete ft[U];var r=ut.indexOf(tt);ut.splice(r,1),r===de&&Tt>0&&de--,n&&(n.scrollTrigger=null,e&&n.render(-1),t||n.kill()),u&&[u,f,d,p].forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),ne&&(o&&(o.uncache=1),r=0,ut.forEach((function(e){return e.pin===ne&&r++})),r||(o.spacer=0))},tt.enable(!1,!1),n&&n.add&&!g?Z.delayedCall(.01,(function(){return l||c||tt.refresh()}))&&(g=.01)&&(l=c=0):tt.refresh()}else this.update=this.refresh=this.kill=Me},e.register=function(t){if(!G&&(Z=t||Re(),Le()&&window.document&&(J=window,K=document,Q=K.documentElement,ee=K.body),Z&&(ie=Z.utils.toArray,ae=Z.utils.clamp,ve=Z.core.suppressOverwrites||Me,Z.core.globals("ScrollTrigger",e),ee))){re=J.requestAnimationFrame||function(e){return setTimeout(e,16)},nt(J,"wheel",pt),te=[J,K,Q,ee],nt(K,"scroll",pt);var n,r=ee.style,o=r.borderTop;r.borderTop="1px solid #000",n=Ke(ee),Ze.m=Math.round(n.top+Ze.sc())||0,Ye.m=Math.round(n.left+Ye.sc())||0,o?r.borderTop=o:r.removeProperty("border-top"),le=setInterval(dt,200),Z.delayedCall(.5,(function(){return Ee=0})),nt(K,"touchcancel",Me),nt(ee,"touchstart",Me),tt(nt,K,"pointerdown,touchstart,mousedown",(function(){return ue=1})),tt(nt,K,"pointerup,touchend,mouseup",(function(){return ue=0})),fe=Z.utils.checkPrefix("transform"),Mt.push(fe),G=Ne(),ne=Z.delayedCall(.2,kt).pause(),ge=[K,"visibilitychange",function(){var e=J.innerWidth,t=J.innerHeight;K.hidden?(pe=e,he=t):pe===e&&he===t||ht()},K,"DOMContentLoaded",kt,J,"load",function(){return Oe||kt()},J,"resize",ht],We(nt)}return G},e.defaults=function(e){for(var t in e)it[t]=e[t]},e.kill=function(){Se=0,ut.slice(0).forEach((function(e){return e.kill(1)}))},e.config=function(e){"limitCallbacks"in e&&(xe=!!e.limitCallbacks);var t=e.syncInterval;t&&clearInterval(le)||(le=t)&&setInterval(dt,t),"autoRefreshEvents"in e&&(We(rt)||We(nt,e.autoRefreshEvents||"none"),be=-1===(e.autoRefreshEvents+"").indexOf("resize"))},e.scrollerProxy=function(e,t){var n=ie(e)[0],r=ke.indexOf(n),o=je(n);~r&&ke.splice(r,o?6:2),o?Ce.unshift(J,t,ee,t,Q,t):Ce.unshift(n,t)},e.matchMedia=function(e){var t,n,r,o,i;for(n in e)r=vt.indexOf(n),o=e[n],ye=n,"all"===n?o():(t=J.matchMedia(n))&&(t.matches&&(i=o()),~r?(vt[r+1]=Ve(vt[r+1],o),vt[r+2]=Ve(vt[r+2],i)):(r=vt.length,vt.push(n,o,i),t.addListener?t.addListener(bt):t.addEventListener("change",bt)),vt[r+3]=t.matches),ye=0;return vt},e.clearMatchMedia=function(e){e||(vt.length=0),(e=vt.indexOf(e))>=0&&vt.splice(e,4)},e}();It.version="3.7.0",It.saveStyles=function(e){return e?ie(e).forEach((function(e){if(e&&e.style){var t=wt.indexOf(e);t>=0&&wt.splice(t,5),wt.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Z.core.getCache(e),ye)}})):wt},It.revert=function(e,t){return Ct(!e,t)},It.create=function(e,t){return new It(e,t)},It.refresh=function(e){return e?ht():kt(!0)},It.update=Ot,It.maxScroll=function(e,t){return _e(e,t?Ye:Ze)},It.getScrollFunc=function(e,t){return Ae(ie(e)[0],t?Ye:Ze)},It.getById=function(e){return ft[e]},It.getAll=function(){return ut.slice(0)},It.isScrolling=function(){return!!Oe},It.addEventListener=function(e,t){var n=gt[e]||(gt[e]=[]);~n.indexOf(t)||n.push(t)},It.removeEventListener=function(e,t){var n=gt[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},It.batch=function(e,t){var n,r=[],o={},i=t.interval||.016,a=t.batchMax||1e9,s=function(e,t){var n=[],r=[],o=Z.delayedCall(i,(function(){t(n,r),n=[],r=[]})).pause();return function(e){n.length||o.restart(!0),n.push(e.trigger),r.push(e),a<=n.length&&o.progress(1)}};for(n in t)o[n]="on"===n.substr(0,2)&&He(t[n])&&"onRefreshInit"!==n?s(0,t[n]):t[n];return He(a)&&(a=a(),nt(It,"refresh",(function(){return a=t.batchMax()}))),ie(e).forEach((function(e){var t={};for(n in o)t[n]=o[n];t.trigger=e,r.push(It.create(t))})),r},It.sort=function(e){return ut.sort(e||function(e,t){return-1e6*(e.vars.refreshPriority||0)+e.start-(t.start+-1e6*(t.vars.refreshPriority||0))})},Re()&&Z.registerPlugin(It);const Ht=()=>{const e=a.exports.useRef(null);let s=l.utils.selector(e);return a.exports.useEffect((()=>{l.registerPlugin(It);const e=l.timeline({scrollTrigger:{trigger:s(".event-item"),start:"top 80%"}});return e.from(s(".event-item"),{opacity:0,stagger:{each:.1,from:0,grid:"auto"},ease:"Power2.easeIn"}),e.from(s(".price"),{width:0,stagger:{each:.1,from:0,grid:"auto"},ease:"Power2.easeIn"},.25),()=>{}}),[s]),i.createElement("div",{className:"py-6 space-y-20 upcoming-event"},i.createElement("div",{className:"flex flex-col space-y-8 header lg:justify-between lg:items-center lg:flex-row lg:space-y-0"},i.createElement("h1",{className:"text-3xl font-bold dark:text-white sp-header"},"Upcoming Event"),i.createElement("div",{className:"flex flex-wrap gap-x-3 gap-y-3"},i.createElement("select",{name:"",placeholder:"Weekdays",defaultValue:"",className:"flex-1 py-3 font-semibold bg-gray-200 border-none rounded-md dark:bg-gray-800 pr-13 pl-7"},i.createElement("option",{value:"",disabled:!0},"Weekdays"),i.createElement("option",{value:"1"},"Monday")),i.createElement("select",{name:"",placeholder:"Event Type",className:"flex-1 py-3 font-semibold bg-gray-200 border-none rounded-md dark:bg-gray-800 pr-13 pl-7",defaultValue:""},i.createElement("option",{value:"",disabled:!0},"Event Type")),i.createElement("select",{name:"",placeholder:"Event Type",defaultValue:"",className:"flex-1 py-3 font-semibold bg-gray-200 border-none rounded-md dark:bg-gray-800 pr-13 pl-7"},i.createElement("option",{value:"",disabled:!0},"Any Category")))),i.createElement("div",{className:"grid grid-flow-row grid-cols-1 event-list md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 lg:gap-x-16 lg:gap-y-10",ref:e},u.map(((e,a)=>i.createElement(f,((e,i)=>{for(var a in i||(i={}))n.call(i,a)&&o(e,a,i[a]);if(t)for(var a of t(i))r.call(i,a)&&o(e,a,i[a]);return e})({key:a},e))))),i.createElement("div",{className:"flex items-center justify-center load-more"},i.createElement("div",{className:"px-6 py-4 text-lg font-bold text-blue-600 bg-gray-200 load-more__btn rounded-xl"},"Load More Event")))};const Dt=({className:e})=>i.createElement("svg",{id:"sw-js-blob-svg",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",className:e},i.createElement("defs",null,i.createElement("linearGradient",{id:"sw-gradient",x1:"0",x2:"1",y1:"1",y2:"0"},i.createElement("stop",{id:"stop1",stopColor:"rgba(169.97, 236.278, 255, 1)",offset:"0%"}),i.createElement("stop",{id:"stop2",stopColor:"rgba(90.734, 138.16, 198.258, 1)",offset:"100%"}))),i.createElement("path",{fill:"url(#sw-gradient)",d:"M21.8,-24.4C29.1,-19.8,36.5,-13.8,39.8,-5.5C43.1,2.8,42.3,13.4,36.8,19.8C31.3,26.2,21.2,28.4,11.8,31.3C2.4,34.3,-6.4,38,-13.1,35.7C-19.8,33.3,-24.4,25,-28,17C-31.7,9,-34.3,1.2,-33.9,-6.8C-33.5,-14.9,-30,-23.3,-23.9,-28C-17.7,-32.7,-8.8,-33.9,-0.8,-32.9C7.2,-31.9,14.5,-28.9,21.8,-24.4Z",width:"100%",height:"100%",transform:"translate(50 50)",strokeWidth:"0",stroke:"url(#sw-gradient)"}));var Ft=c((({className:e})=>{const t=a.exports.useRef(null),n=a.exports.useRef(null),r=a.exports.useRef(null);return a.exports.useEffect((()=>{const e=new U("#banner-text",{lineClass:"parrent overflow-hidden"}),t=new U(e.lines,{types:["lines","words"],lineClass:"child"}),n=l.timeline();return n.from(t.lines,{duration:1.5,yPercent:100,ease:"power4",stagger:.1}),n.play(),()=>{}}),[]),i.createElement("div",{className:`${e} mx-auto w-full space-y-10`},i.createElement("div",{className:" h-[calc(100vh-88px)] rounded-lg bg-cover flex justify-between mx-1 lg:px-12 lg:py-16 overflow-hidden"},i.createElement("div",{className:"items-center justify-center w-full pl-10 my-auto space-y-6 lg:pr-40 content lg:w-1/2"},i.createElement("div",{className:"relative pl-3"},i.createElement("div",{className:"text-2xl font-semibold tracking-widest uppercase dark:text-white first-letter:text-blue-500 first-letter:textshadow-neon first-letter:text-4xl"},"EventBuzz"),i.createElement("div",{className:"text-6xl font-bold leading-tight uppercase dark:text-white banner-text",ref:t,id:"banner-text"},"A Social Media for Event"),i.createElement("div",{className:"absolute top-0 bottom-0 w-1 bg-blue-500 rounded-full -left-10 bg-blue animate-flicker"})),i.createElement(s,{to:"/signup",className:"inline-block px-16 py-5 overflow-hidden text-xl font-semibold transition-all rounded-lg shadow-lg bg-gradient-to-tr from-red-700 to-blue-600 hover:scale-105 text-gray-50 hover:shadow-neon",ref:n},i.createElement("div",{ref:r},"Start your journey"))),i.createElement("div",{className:"relative hidden w-1/2 lg:block"},i.createElement(Dt,{className:"absolute z-0 w-10/12 h-auto top-10 left-10"}),i.createElement("img",{src:"assets/Succes.f0359316.png",alt:"",className:"absolute z-10 w-10/12 animate-floating"}),i.createElement("div",{className:"absolute h-20 rounded-full shadow w-72 bg-gray-50 left-1/2 top-20 animate-floating",style:{animationDelay:"1s"}}),i.createElement("div",{className:"absolute left-0 h-20 rounded-full shadow w-72 bg-gray-50 bottom-20 animate-floating",style:{animationDelay:"0.5s"}}))),i.createElement("div",{className:"container px-3 mx-auto space-y-16 lg:px-24"},i.createElement(Y,null),i.createElement(Ht,null)))}))`
  .heroSection {
    background-image: url(${"assets/guitarra.001.e6a40f4b.jpeg"});
    background-repeat: no-repeat;
  }
`;export default Ft;
