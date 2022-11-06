function t(t,e,i,o){var s,r=arguments.length,n=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n}const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;class r{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new r(i,t,o)},l=(t,o)=>{i?t.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):o.forEach((i=>{const o=document.createElement("style"),s=e.litNonce;void 0!==s&&o.setAttribute("nonce",s),o.textContent=i.cssText,t.appendChild(o)}))},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,o))(e)})(t):t;var d;const h=window,c=h.trustedTypes,p=c?c.emptyScript:"",u=h.reactiveElementPolyfillSupport,v={toAttribute(t,e){switch(e){case Boolean:t=t?p:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},g=(t,e)=>e!==t&&(e==e||t==t),b={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:g};class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;null!==(e=this.h)&&void 0!==e||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const o=this._$Ep(i,e);void 0!==o&&(this._$Ev.set(o,i),t.push(o))})),t}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const s=this[t];this[e]=o,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||b}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=b){var o;const s=this.constructor._$Ep(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==(null===(o=i.converter)||void 0===o?void 0:o.toAttribute)?i.converter:v).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,s=o._$Ev.get(t);if(void 0!==s&&this._$El!==s){const t=o.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:v;this._$El=s,this[s]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var m;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:f}),(null!==(d=h.reactiveElementVersions)&&void 0!==d?d:h.reactiveElementVersions=[]).push("1.4.1");const y=window,$=y.trustedTypes,_=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,x="?"+w,k=`<${x}>`,A=document,E=(t="")=>A.createComment(t),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,O=/>/g,U=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),B=/'/g,T=/"/g,H=/^(?:script|style|textarea|title)$/i,M=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),N=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),D=new WeakMap,z=A.createTreeWalker(A,129,null,!1),I=(t,e)=>{const i=t.length-1,o=[];let s,r=2===e?"<svg>":"",n=P;for(let e=0;e<i;e++){const i=t[e];let l,a,d=-1,h=0;for(;h<i.length&&(n.lastIndex=h,a=n.exec(i),null!==a);)h=n.lastIndex,n===P?"!--"===a[1]?n=R:void 0!==a[1]?n=O:void 0!==a[2]?(H.test(a[2])&&(s=RegExp("</"+a[2],"g")),n=U):void 0!==a[3]&&(n=U):n===U?">"===a[0]?(n=null!=s?s:P,d=-1):void 0===a[1]?d=-2:(d=n.lastIndex-a[2].length,l=a[1],n=void 0===a[3]?U:'"'===a[3]?T:B):n===T||n===B?n=U:n===R||n===O?n=P:(n=U,s=void 0);const c=n===U&&t[e+1].startsWith("/>")?" ":"";r+=n===P?i+k:d>=0?(o.push(l),i.slice(0,d)+"$lit$"+i.slice(d)+w+c):i+w+(-2===d?(o.push(void 0),e):c)}const l=r+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==_?_.createHTML(l):l,o]};class L{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let s=0,r=0;const n=t.length-1,l=this.parts,[a,d]=I(t,e);if(this.el=L.createElement(a,i),z.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=z.nextNode())&&l.length<n;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(w)){const i=d[r++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+"$lit$").split(w),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?W:"?"===e[1]?J:"@"===e[1]?K:Z})}else l.push({type:6,index:s})}for(const e of t)o.removeAttribute(e)}if(H.test(o.tagName)){const t=o.textContent.split(w),e=t.length-1;if(e>0){o.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],E()),z.nextNode(),l.push({type:2,index:++s});o.append(t[e],E())}}}else if(8===o.nodeType)if(o.data===x)l.push({type:2,index:s});else{let t=-1;for(;-1!==(t=o.data.indexOf(w,t+1));)l.push({type:7,index:s}),t+=w.length-1}s++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function q(t,e,i=t,o){var s,r,n,l;if(e===N)return e;let a=void 0!==o?null===(s=i._$Co)||void 0===s?void 0:s[o]:i._$Cl;const d=S(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==d&&(null===(r=null==a?void 0:a._$AO)||void 0===r||r.call(a,!1),void 0===d?a=void 0:(a=new d(t),a._$AT(t,i,o)),void 0!==o?(null!==(n=(l=i)._$Co)&&void 0!==n?n:l._$Co=[])[o]=a:i._$Cl=a),void 0!==a&&(e=q(t,a._$AS(t,e.values),a,o)),e}class F{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:o}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:A).importNode(i,!0);z.currentNode=s;let r=z.nextNode(),n=0,l=0,a=o[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new V(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new Y(r,this,t)),this.u.push(e),a=o[++l]}n!==(null==a?void 0:a.index)&&(r=z.nextNode(),n++)}return s}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class V{constructor(t,e,i,o){var s;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cm=null===(s=null==o?void 0:o.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=q(this,t,e),S(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==N&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>C(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==j&&S(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:o}=t,s="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=L.createElement(o.h,this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.p(i);else{const t=new F(s,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=D.get(t.strings);return void 0===e&&D.set(t.strings,e=new L(t)),e}k(t){C(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const s of t)o===e.length?e.push(i=new V(this.O(E()),this.O(E()),this,this.options)):i=e[o],i._$AI(s),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Z{constructor(t,e,i,o,s){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const s=this.strings;let r=!1;if(void 0===s)t=q(this,t,e,0),r=!S(t)||t!==this._$AH&&t!==N,r&&(this._$AH=t);else{const o=t;let n,l;for(t=s[0],n=0;n<s.length-1;n++)l=q(this,o[i+n],e,n),l===N&&(l=this._$AH[n]),r||(r=!S(l)||l!==this._$AH[n]),l===j?t=j:t!==j&&(t+=(null!=l?l:"")+s[n+1]),this._$AH[n]=l}r&&!o&&this.j(t)}j(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class W extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===j?void 0:t}}const Q=$?$.emptyScript:"";class J extends Z{constructor(){super(...arguments),this.type=4}j(t){t&&t!==j?this.element.setAttribute(this.name,Q):this.element.removeAttribute(this.name)}}class K extends Z{constructor(t,e,i,o,s){super(t,e,i,o,s),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=q(this,t,e,0))&&void 0!==i?i:j)===N)return;const o=this._$AH,s=t===j&&o!==j||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==j&&(o===j||s);s&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Y{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}}const G=y.litHtmlPolyfillSupport;null==G||G(L,V),(null!==(m=y.litHtmlVersions)&&void 0!==m?m:y.litHtmlVersions=[]).push("2.4.0");var X,tt;class et extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var o,s;const r=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let n=r._$litPart$;if(void 0===n){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;r._$litPart$=n=new V(e.insertBefore(E(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return N}}et.finalized=!0,et._$litElement$=!0,null===(X=globalThis.litElementHydrateSupport)||void 0===X||X.call(globalThis,{LitElement:et});const it=globalThis.litElementPolyfillSupport;null==it||it({LitElement:et}),(null!==(tt=globalThis.litElementVersions)&&void 0!==tt?tt:globalThis.litElementVersions=[]).push("3.2.2");const ot=new WeakMap;const st=!!ShadowRoot.prototype.createElement,rt=(nt=t=>class extends t{static get scopedElements(){return{}}static get shadowRootOptions(){return this.__shadowRootOptions}static set shadowRootOptions(t){this.__shadowRootOptions=t}static get elementStyles(){return this.__elementStyles}static set elementStyles(t){this.__elementStyles=t}constructor(...t){super(),this.renderOptions=this.renderOptions||void 0}get registry(){return this.constructor.__registry}set registry(t){this.constructor.__registry=t}createRenderRoot(){const{scopedElements:t,shadowRootOptions:e,elementStyles:i}=this.constructor;if(!this.registry||this.registry===this.constructor.__registry&&!Object.prototype.hasOwnProperty.call(this.constructor,"__registry")){this.registry=st?new CustomElementRegistry:customElements;for(const[e,i]of Object.entries(t))this.defineScopedElement(e,i)}const o={mode:"open",...e,customElements:this.registry},s=this.attachShadow(o);return st&&(this.renderOptions.creationScope=s),s instanceof ShadowRoot&&(l(s,i),this.renderOptions.renderBefore=this.renderOptions.renderBefore||s.firstChild),s}createScopedElement(t){return(st?this.shadowRoot:document).createElement(t)}defineScopedElement(t,e){const i=this.registry.get(t);return i&&!1===st&&i!==e&&console.error([`You are trying to re-register the "${t}" custom element with a different class via ScopedElementsMixin.`,"This is only possible with a CustomElementRegistry.","Your browser does not support this feature so you will need to load a polyfill for it.",'Load "@webcomponents/scoped-custom-element-registry" before you register ANY web component to the global customElements registry.','e.g. add "<script src="/node_modules/@webcomponents/scoped-custom-element-registry/scoped-custom-element-registry.min.js"><\/script>" as your first script tag.',"For more details you can visit https://open-wc.org/docs/development/scoped-elements/"].join("\n")),i?this.registry.get(t):this.registry.define(t,e)}getScopedTagName(t){return t}static getScopedTagName(t){return t}},t=>{if(function(t,e){let i=e;for(;i;){if(ot.get(i)===t)return!0;i=Object.getPrototypeOf(i)}return!1}(nt,t))return t;const e=nt(t);return ot.set(e,nt),e});var nt;const lt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function at(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):lt(t,e)}var dt;null===(dt=window.HTMLSlotElement)||void 0===dt||dt.prototype.assignedElements;class ht extends et{render(){return M`<button><slot></slot></button>`}}ht.styles=n`
        button {
            appearance: none;
            background-color: #FAFBFC;
            border: 1px solid rgba(27, 31, 35, 0.15);
            border-radius: 6px;
            box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
            box-sizing: border-box;
            color: #24292E;
            cursor: pointer;
            display: inline-block;
            font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
            list-style: none;
            padding: 6px 16px;
            position: relative;
            transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
            vertical-align: middle;
            white-space: nowrap;
            word-wrap: break-word;
        }
        
        button:hover {
            background-color: #F3F4F6;
            text-decoration: none;
            transition-duration: 0.1s;
        }

        button:before {
            display: none;
        }
        
        button:-webkit-details-marker {
            display: none;
        }
      `;const ct=n`
    :host > svg {
        width: 24px;
        height: 24px;
        margin: 2px;
        display: inline-block;
        background-size: cover;
        border-radius: 4px;
        background-color: #transparent;
        background-repeat: no-repeat;
        cursor: pointer;
        transition: 
            background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1),
            fill:  0.2s cubic-bezier(0.3, 0, 0.5, 1);
    }
    svg {
        fill: white;
    }
    svg:hover {
        background-color: #F3F4F6;
        fill: black;
    }
`;class pt extends et{render(){return M`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <path d="M22.65 34h3v-8.3H34v-3h-8.35V14h-3v8.7H14v3h8.65ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 23.95q0-4.1 1.575-7.75 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24.05 4q4.1 0 7.75 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm.05-3q7.05 0 12-4.975T41 23.95q0-7.05-4.95-12T24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24.05 41ZM24 24Z"/>
            </svg>
        `}}pt.styles=ct;class ut extends(rt(et)){constructor(){super(...arguments),this.book={id:"",title:"",cover:"",additionalAuthors:"",author:"",fullSizeCover:"",publisher:"",review:"",dateRead:"",dateAdded:"",yearPublished:""},this.updateBook=null,this.close=()=>{},this.editing=!1,this.save=async()=>{if(!this.updateBook)return;await this.updateBook(this.bookFromInput())&&this.close()},this.coverClick=()=>{const t=document.createElement("input");t.type="file",t.accept="image/png, image/gif, image/jpeg",t.click(),t.onchange=()=>{if(null!=FileReader&&null!=t.files&&t.files.length>0){const e=new FileReader;e.onload=()=>{if("string"!=typeof e.result)return;const t=document.createElement("img");t.onload=()=>{const e=document.createElement("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");null!=i&&(i.drawImage(t,0,0,e.width,e.height),this.book=this.bookFromInput(),this.book.fullSizeCover=e.toDataURL("image/jpeg"),e.height=100*e.height/e.width,e.width=100,i.drawImage(t,0,0,e.width,e.height),this.book.cover=e.toDataURL("image/jpeg"))},t.src=e.result},e.readAsDataURL(t.files[0])}}}}static get scopedElements(){return{"action-button":ht}}bookFromInput(){return{...this.book,title:this.shadowRoot.getElementById("title").value,author:this.shadowRoot.getElementById("author").value,additionalAuthors:this.shadowRoot.getElementById("additionalAuthors").value,publisher:this.shadowRoot.getElementById("publisher").value,yearPublished:this.shadowRoot.getElementById("yearPublished").value,review:this.shadowRoot.getElementById("review").value}}renderEditMode(){return M`
            <div class="info">
                <div class="cover">
                    <img src=${this.book.fullSizeCover} @click=${this.coverClick}/>
                </div>
                <div class="bookMeta">
                    <div class="title"><textarea id="title" placeholder="title">${this.book.title}</textarea></div>
                    <div class="author"><input id="author" placeholder="author"  .value=${this.book.author} /></div>
                    <div class="additionalAuthors"><input id="additionalAuthors" placeholder="authors"  value=${this.book.additionalAuthors} /></div>
                    <div class="publisher"><input id="publisher" placeholder="publisher"  value=${this.book.publisher} /></div>
                    <div class="yearPublished"><input id="yearPublished" placeholder="year of publish"  value=${this.book.yearPublished} /></div>
                </div>
            </div>
            <div class="review"><textarea placeholder="My review" id="review">${this.book.review}</textarea></div>
            <div class="actions">
                <action-button @click=${this.save}>OK</action-button>
                <action-button @click=${this.close}>Mégsem</action-button>
            </div>
        `}renderDisplayMode(){return M`
            <div class="info" >
                <div class="cover">
                <img src=${this.book.cover}/>
                <img src=${this.book.fullSizeCover} />
                </div>
                <div class="bookMeta">
                    <div class="title">${this.book.title}</div>
                    <div class="author">${this.book.author}</div>
                    <div class="additionalAuthors">${this.book.additionalAuthors}</div>
                    <div class="publisher">${this.book.publisher}</div>
                    <div class="yearPublished">${this.book.yearPublished}</div>
                </div>
            </div>
            <div class="review">${this.book.review}</div>
        `}render(){return M`
            <div class="wrap" @click=${this.editing?null:this.close}>
                <div class="details">
                    ${this.editing?this.renderEditMode():this.renderDisplayMode()}
                </div>
            </div>
        `}}ut.styles=n`
        .wrap {
            position: fixed;
            z-index: 1;
            inset: 0px;
            display: flex;
            border: 0px;
            justify-content: center;
        }

        .details {
            background: white;
            position: relative;
            color: black;
            line-height: 1.4;
            padding: 32px;
            width: 600px;

            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
            overflow: auto;
        }

        .info {
            display: flex;
            gap: 24px;
            flex-wrap: wrap;
        }

        .cover {
            box-shadow: 
                -1px -1px #444, 
                -1px 1px #444, 
                1px 1px #444, 
                2px 1px #eee, 
                3px 1px #444, 
                4px 1px #eee,
                5px 1px #444;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            display: grid;
            margin: 0 auto;
        }
        
        .cover img {
            width: 200px;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            grid-column: 1;
            grid-row: 1;
        }

        .bookMeta {
            width: 300px;
        }
        
        .bookMeta div {
            display: flex;
        }

        .title {
            font-weight: 800;
        }
        .author, .additionalAuthors {
            font-style: italic;
        }

        .review {
            width: 100%;
            white-space: pre-wrap;
            flex-grow: 1;
        }

        input, textarea {
            font: inherit;
            border: none;
            width: 100%;
            resize: none;
            background: #f7f7f7;
            margin:0;
            padding:0;
            display: flex;
        }
        
        textarea {
            height: 100%;
        }

        input:focus, textarea:focus {
            outline-offset: 0px;
            outline: none;
        }

    `,t([at()],ut.prototype,"book",void 0),t([at()],ut.prototype,"updateBook",void 0),t([at()],ut.prototype,"close",void 0),t([at()],ut.prototype,"editing",void 0);class vt extends(rt(et)){constructor(){super(...arguments),this.updateBook=null,this.mode="closed"}static get scopedElements(){return{"add-button":pt,"book-details":ut}}render(){const t=t=>e=>{this.mode=t,null==e||e.stopPropagation()};let e=null;return"open"===this.mode&&(e=M`<book-details 
                .close=${t("closed")}
                .editing=${!0}
                .updateBook=${this.updateBook}
            ></book-details>`),M`<add-button @click=${t("open")}></add-button>${e}`}}t([at()],vt.prototype,"updateBook",void 0),t([at()],vt.prototype,"mode",void 0);class gt extends et{render(){return M`
            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 2 52 52">
            <path d="M9 47.4q-1.2 0-2.1-.9-.9-.9-.9-2.1v-30q0-1.2.9-2.1.9-.9 2.1-.9h20.25l-3 3H9v30h30V27l3-3v20.4q0 1.2-.9 2.1-.9.9-2.1.9Zm15-18Zm9.1-17.6 2.15 2.1L21 28.1v4.3h4.25l14.3-14.3 2.1 2.1L26.5 35.4H18v-8.5Zm8.55 8.4-8.55-8.4 5-5q.85-.85 2.125-.85t2.125.9l4.2 4.25q.85.9.85 2.125t-.9 2.075Z"/>
            </svg>
        `}}gt.styles=ct;class bt extends et{render(){return M`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <path d="M13.05 42q-1.25 0-2.125-.875T10.05 39V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z"/>
            </svg>
        `}}bt.styles=ct;class ft extends(rt(et)){constructor(){super(...arguments),this.book={id:"",title:"",cover:"",additionalAuthors:"",author:"",fullSizeCover:"",publisher:"",review:"",dateRead:"",dateAdded:"",yearPublished:""},this.updateBook=null,this.deleteBook=null,this.mode="closed"}static get scopedElements(){return{"edit-button":gt,"delete-button":bt,"book-details":ut}}render(){const t=t=>e=>{this.mode=t,null==e||e.stopPropagation()};let e=null;return"view"!==this.mode&&"edit"!==this.mode||(e=M`<book-details 
                .close=${t("closed")}
                .editing=${"edit"===this.mode}
                .book=${this.book}
                .updateBook=${this.updateBook}
            ></book-details>`),window.document.body.style.overflow=null!=e?"hidden":"",M`
            <div class="book" title=${this.book.title} @click="${t("view")}">
                ${this.book.cover?M`<img class="cover" src=${this.book.cover} alt=${this.book.title} loading="lazy" />`:M`<div class="cover"></div>`}
                <div class="buttons">
                    ${this.deleteBook&&M`<delete-button @click=${t=>{this.deleteBook&&window.confirm(`Delete ${this.book.title}?`)&&this.deleteBook(this.book),null==t||t.stopPropagation()}}></delete-button>`}
                    ${this.updateBook&&M`<edit-button @click=${t("edit")}></edit-button>`}
                </div>
            </div>
            ${e}
        `}}ft.styles=n`
        :host {
            display: flex;
        }
        .book {
            display: grid;
            cursor: pointer;
        }

        .cover {
            display:flex;
            margin: 4px;
            box-shadow: 
                -0.5px -0.5px #444, 
                0.5px -0.5px #444, 
                -0.5px 0.5px #444, 
                0.5px 0.5px #444, 

                1px 1px #eee, 
                1.5px 1.5px #444, 
                2px 2px #eee;
            border-top-right-radius: 2px;
            border-bottom-right-radius: 2px;
            background: #eee;
            width: 100px;
            min-height: 100px;
            grid-column: 1;
            grid-row: 1;
        }

        .buttons {
            grid-column: 1;
            grid-row: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            visibility: hidden;
        }

        .book:hover .buttons {
            visibility: visible;
        }

    `,t([at()],ft.prototype,"book",void 0),t([at()],ft.prototype,"updateBook",void 0),t([at()],ft.prototype,"deleteBook",void 0),t([at()],ft.prototype,"mode",void 0);class mt extends(rt(et)){constructor(){super(...arguments),this.src="",this.editable=!1,this._editingEnabled=!1,this._booksData=[],this.deleteBook=async t=>{const e=this._booksData.filter((e=>e.id!==t.id)),i=await fetch(`api/book/${t.id}`,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});return i.status>=200&&i.status<300&&(this._booksData=e,!0)},this.updateBook=async t=>{let e,i;return""!==t.id?(e=this._booksData.map((e=>e.id===t.id?t:e)),i=await fetch(`api/book/${t.id}`,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)})):(e=[...this._booksData],t.id=crypto.randomUUID(),t.dateAdded=(new Date).toISOString(),e.unshift(t),i=await fetch("api/book/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)})),i.status>=200&&i.status<300&&(this._booksData=e,!0)}}static get scopedElements(){return{"x-book":ft,"new-book":vt,"action-button":ht}}resolve(t){const e=new URL(this.src,window.location.href).href;return new URL(t,e).href}async firstUpdated(){const t=t=>{for(const e of["dateRead","dateAdded","yearPublished"])if(t[e])return new Date(t[e]);return new Date("1970")};this._editingEnabled=await this.checkEditingFeature();const e=await fetch(this.src);let i=await e.json();i=i.map((t=>({...t,cover:this.resolve(t.cover),fullSizeCover:this.resolve(t.fullSizeCover)}))),this._booksData=i.sort(((e,i)=>t(i).getTime()-t(e).getTime()))}async checkEditingFeature(){if(!this.editable)return!1;const t=await fetch("api");return t.status>=200&&t.status<300}render(){if(this._editingEnabled){const t=this._booksData.map((t=>M`<div>
                    <x-book 
                        .book=${t} 
                        .updateBook=${this.updateBook}
                        .deleteBook=${this.deleteBook}
                    ></x-book>
                </div>`));return M`<new-book .updateBook=${this.updateBook}></new-book>${t}`}return this._booksData.map((t=>M`<div><x-book .book=${t}></x-book></div>`))}}mt.styles=n`
    :host {
        display: flex;
        flex-wrap: wrap;
        background: #552a0a;
        border: 8px solid rgb(119 63 21);
        box-shadow: rgb(0 0 0) 0px 0px 25px -4px inset;
        align-items: flex-end;
    }

    :host > div, new-book {
        border-bottom: 8px solid rgb(119 63 21);
        min-height: 180px;
        display: flex;
        align-items: flex-end;
    }
    :host > div {
        flex: 1;
    }
  `,t([at()],mt.prototype,"src",void 0),t([at()],mt.prototype,"editable",void 0),t([at()],mt.prototype,"_editingEnabled",void 0),t([at()],mt.prototype,"_booksData",void 0),window.customElements.define("my-bookshelf",mt);
//# sourceMappingURL=bookshelf.js.map
