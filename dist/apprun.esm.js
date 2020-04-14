class t{constructor(){this._events={}}on(t,e,n={}){this._events[t]=this._events[t]||[],this._events[t].push({fn:e,options:n})}off(t,e){const n=this._events[t]||[];this._events[t]=n.filter(t=>t.fn!==e)}find(t){return this._events[t]}run(t,...e){const n=this._events[t]||[];return console.assert(n&&n.length>0,"No subscriber for event: "+t),this._events[t]=n.filter(t=>!t.options.once),n.forEach(n=>{const{fn:i,options:s}=n;return s.delay?this.delay(t,i,e,s):i.apply(this,e),!n.options.once}),n.length}once(t,e,n={}){this.on(t,e,Object.assign(Object.assign({},n),{once:!0}))}delay(t,e,n,i){i._t&&clearTimeout(i._t),i._t=setTimeout(()=>{clearTimeout(i._t),e.apply(this,n)},i.delay)}}let e;const n="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global;n.app&&n._AppRunVersions?e=n.app:(e=new t,n.app=e,n._AppRunVersions="AppRun-2");var i=e;let s=0;function o(t,e,n=0){if(0===n&&(s=0),"string"==typeof t)return t;if(Array.isArray(t))return t.map(t=>o(t,e,s));let r=t;return t&&"function"==typeof t.tag&&Object.getPrototypeOf(t.tag).t&&(r=function(t,e,n){const{tag:s,props:o,children:r}=t;let c=`_${n}`,h=o&&o.id;h?c=h:h=`_${n}${Date.now()}`,e.i||(e.i={});let u=e.i[c];u?h=u.s:(u=e.i[c]=new s(Object.assign(Object.assign({},o),{children:r})).mount(h),u.s=h);let f=u.state;if(u.mounted){const t=u.mounted(o,r,f);void 0!==t&&(f=u.state=t)}if(f instanceof Promise){const t=t=>{u.element=t,u.setState(f)};return i.createElement("section",Object.assign({},o,{id:h,ref:e=>t(e)}))}{const t=u._view(f,o),e=e=>{u.element=e,u.renderState(f,t)};return i.createElement("section",Object.assign({},o,{id:h,ref:t=>e(t)}),t)}}(t,e,s++)),r&&Array.isArray(r.children)&&(r.children=r.children.map(t=>o(t,e,s))),r}function r(t){const e=[],n=t=>{null!=t&&""!==t&&!1!==t&&e.push("function"==typeof t||"object"==typeof t?t:`${t}`)};return t&&t.forEach(t=>{Array.isArray(t)?t.forEach(t=>n(t)):n(t)}),e}const c=new WeakMap,h=function(t,e,n={}){if(null==e||!1===e)return;e=o(e,n);const i="SVG"===(null==t?void 0:t.nodeName);if(!t)return;Array.isArray(e)?f(t,e,i):f(t,[e],i)};function u(t,e,n){n=n||"svg"===e.tag,function(t,e){const n=t.nodeName,i=`${e.tag||""}`;return n.toUpperCase()===i.toUpperCase()}(t,e)?(!(2&e._op)&&f(t,e.children,n),!(1&e._op)&&d(t,e.props,n)):t.parentNode.replaceChild(a(e,n),t)}function f(t,e,n){var i;const s=(null===(i=t.childNodes)||void 0===i?void 0:i.length)||0,o=(null==e?void 0:e.length)||0,r=Math.min(s,o);for(let i=0;i<r;i++){const s=e[i],o=t.childNodes[i];if("string"==typeof s)o.textContent!==s&&(3===o.nodeType?o.textContent=s:t.replaceChild(l(s),o));else if(s instanceof HTMLElement||s instanceof SVGElement)t.insertBefore(s,o);else{const e=s.props&&s.props.key;if(e)if(o.key===e)u(t.childNodes[i],s,n);else{const r=c[e];r?(t.insertBefore(r,o),t.appendChild(o),u(t.childNodes[i],s,n)):t.insertBefore(a(s,n),o)}else u(t.childNodes[i],s,n)}}let h=t.childNodes.length;for(;h>r;)t.removeChild(t.lastChild),h--;if(o>r){const i=document.createDocumentFragment();for(let t=r;t<e.length;t++)i.appendChild(a(e[t],n));t.appendChild(i)}}function l(t){if(0===t.indexOf("_html:")){const e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t.substring(6)),e}return document.createTextNode(t)}function a(t,e){if(t instanceof HTMLElement||t instanceof SVGElement)return t;if("string"==typeof t)return l(t);if(!t.tag||"function"==typeof t.tag)return l(JSON.stringify(t));const n=(e=e||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return d(n,t.props,e),t.children&&t.children.forEach(t=>n.appendChild(a(t,e))),n}function d(t,e,n){const i=t._props||{};e=function(t,e){e.class=e.class||e.className,delete e.className;const n={};return t&&Object.keys(t).forEach(t=>n[t]=null),e&&Object.keys(e).forEach(t=>n[t]=e[t]),n}(i,e||{}),t._props=e;for(const i in e){const s=e[i];if(i.startsWith("data-")){const e=i.substring(5).replace(/-(\w)/g,t=>t[1].toUpperCase());t.dataset[e]!==s&&(s||""===s?t.dataset[e]=s:delete t.dataset[e])}else if("style"===i)if(t.style.cssText&&(t.style.cssText=""),"string"==typeof s)t.style.cssText=s;else for(const e in s)t.style[e]!==s[e]&&(t.style[e]=s[e]);else if(i.startsWith("xlink")){const e=i.replace("xlink","").toLowerCase();null==s||!1===s?t.removeAttributeNS("http://www.w3.org/1999/xlink",e):t.setAttributeNS("http://www.w3.org/1999/xlink",e,s)}else i.startsWith("on")?s&&"function"!=typeof s?"string"==typeof s&&(s?t.setAttribute(i,s):t.removeAttribute(i)):t[i]=s:/^id$|^class$|^readonly$|^contenteditable$|^role|-/g.test(i)||n?t.getAttribute(i)!==s&&(s?t.setAttribute(i,s):t.removeAttribute(i)):t[i]!==s&&(t[i]=s);"key"===i&&s&&(c[s]=t)}e&&"function"==typeof e.ref&&window.requestAnimationFrame(()=>e.ref(t))}function p(t,...e){return r(e)}const b=(t,e={})=>class extends HTMLElement{constructor(){super()}get component(){return this._component}get state(){return this._component.state}static get observedAttributes(){return e.observedAttributes}connectedCallback(){if(this.isConnected&&!this._component){const n=e||{};this._shadowRoot=n.shadow?this.attachShadow({mode:"open"}):this;const i={};Array.from(this.attributes).forEach(t=>i[t.name]=t.value),(n.observedAttributes||[]).forEach(t=>{void 0!==this[t]&&(i[t]=this[t]),Object.defineProperty(this,t,{get:()=>i[t],set(e){this.attributeChangedCallback(t,i[t],e)},configurable:!0,enumerable:!0})});const s=this.children?Array.from(this.children):[];if(s.forEach(t=>t.parentElement.removeChild(t)),this._component=new t(Object.assign(Object.assign({},i),{children:s})).mount(this._shadowRoot,n),this._component._props=i,this._component.dispatchEvent=this.dispatchEvent.bind(this),this._component.mounted){const t=this._component.mounted(i,s,this._component.state);void 0!==t&&(this._component.state=t)}this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component),!1!==n.render&&this._component.run(".")}}disconnectedCallback(){var t,e,n,i;null===(e=null===(t=this._component)||void 0===t?void 0:t.unload)||void 0===e||e.call(t),null===(i=null===(n=this._component)||void 0===n?void 0:n.unmount)||void 0===i||i.call(n),this._component=null}attributeChangedCallback(t,n,i){var s;null===(s=this._component)||void 0===s||s.run("attributeChanged",t,n,i),this._component&&(this._component._props[t]=i),i!==n&&!1!==e.render&&window.requestAnimationFrame(()=>{var t;null===(t=this._component)||void 0===t||t.run(".")})}};var y=(t,e,n)=>{"undefined"!=typeof customElements&&customElements.define(t,b(e,n))};const m={meta:new WeakMap,defineMetadata(t,e,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[t]=e},getMetadataKeys(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata(t,e){return e=Object.getPrototypeOf(e),this.meta.get(e)?this.meta.get(e)[t]:null}};function v(t,e={}){return(n,i,s)=>{const o=t?t.toString():i;return m.defineMetadata(`apprun-update:${o}`,{name:o,key:i,options:e},n),s}}function g(t,e={}){return function(n,i){const s=t?t.toString():i;m.defineMetadata(`apprun-update:${s}`,{name:s,key:i,options:e},n)}}function w(t,e){return function(n){return y(t,n,e),n}}const j=(t,e)=>(e?t.state[e]:t.state)||"",O=(t,e,n)=>{if(e){const i=t.state||{};i[e]=n,t.setState(i)}else t.setState(n)};var k;function A(t,e){if(t===e)return!0;if(t&&e&&"object"==typeof t&&"object"==typeof e){var n,i,s,o=Array.isArray(t),r=Array.isArray(e);if(o&&r){if((i=t.length)!=e.length)return!1;for(n=i;0!=n--;)if(!A(t[n],e[n]))return!1;return!0}if(o!=r)return!1;var c=Object.keys(t);if((i=c.length)!==Object.keys(e).length)return!1;for(n=i;0!=n--;)if(!e.hasOwnProperty(c[n]))return!1;for(n=i;0!=n--;)if(!A(t[s=c[n]],e[s]))return!1;return!0}return t!=t&&e!=e}!function(t){t[t.NO_ATTR_CHANGE=1]="NO_ATTR_CHANGE",t[t.NO_TREE_CHANGE=2]="NO_TREE_CHANGE"}(k||(k={}));const $={};i.on("get-components",t=>t.components=$);const _=t=>t;class E{constructor(e,n,i,s){this.state=e,this.view=n,this.update=i,this.options=s,this._app=new t,this._actions=[],this._global_events=[],this._history=[],this._history_idx=-1,this._history_prev=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},this._history_next=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1},this.start=(t=null,e)=>this.mount(t,Object.assign(Object.assign({},e),{render:!0}))}render(t,e){i.render(t,e,this)}_view(t,e=null){if(!this.view)return;const n=i.createElement;i.createElement=(t,e,...s)=>(e&&Object.keys(e).forEach(n=>{n.startsWith("$")&&(((t,e,n,s)=>{if(t.startsWith("$on")){const n=e[t];if(t=t.substring(1),"boolean"==typeof n)e[t]=e=>s.run(t,e);else if("string"==typeof n)e[t]=t=>s.run(n,t);else if("function"==typeof n)e[t]=t=>s.setState(n(s.state,t));else if(Array.isArray(n)){const[i,...o]=n;"string"==typeof i?e[t]=t=>s.run(i,...o,t):"function"==typeof i&&(e[t]=t=>s.setState(i(s.state,...o,t)))}}else if("$bind"===t){const i=e.type||"text",o="string"==typeof e[t]?e[t]:e.name;if("input"===n)switch(i){case"checkbox":e.checked=j(s,o),e.onclick=t=>O(s,o||t.target.name,t.target.checked);break;case"radio":e.checked=j(s,o)===e.value,e.onclick=t=>O(s,o||t.target.name,t.target.value);break;case"number":case"range":e.value=j(s,o),e.oninput=t=>O(s,o||t.target.name,Number(t.target.value));break;default:e.value=j(s,o),e.oninput=t=>O(s,o||t.target.name,t.target.value)}else"select"===n?(e.value=j(s,o),e.onchange=t=>{t.target.multiple||O(s,o||t.target.name,t.target.value)}):"option"===n?(e.selected=j(s,o),e.onclick=t=>O(s,o||t.target.name,t.target.selected)):"textarea"===n&&(e.innerHTML=j(s,o),e.oninput=t=>O(s,o||t.target.name,t.target.value))}else i.run("$",{key:t,tag:n,props:e,component:s})})(n,e,t,this),delete e[n])}),n(t,e,...s));const s=e?this.view(t,e):this.view(t);return i.createElement=n,s}renderState(t,e=null){if(!this.view)return;let n=e||this._view(t);if(i.debug&&i.run("debug",{component:this,state:t,vdom:n||"[vdom is null - no render]"}),"object"!=typeof document)return;const s="string"==typeof this.element?document.getElementById(this.element):this.element;if(s){const t="_c";this.unload?s._component===this&&s.getAttribute(t)===this.tracking_id||(this.tracking_id=(new Date).valueOf().toString(),s.setAttribute(t,this.tracking_id),"undefined"!=typeof MutationObserver&&(this.observer||(this.observer=new MutationObserver(t=>{t[0].oldValue!==this.tracking_id&&document.body.contains(s)||(this.unload(this.state),this.observer.disconnect(),this.observer=null,this.save_vdom=[])})),this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[t]}))):s.removeAttribute&&s.removeAttribute(t),s._component===this&&this.save_vdom&&this["-patch-vdom-on"]&&function t(e,n){if(!(null==e?void 0:e.length)||!(null==n?void 0:n.length))return;const i=e.length,s=n.length,o=Math.min(i,s);for(let i=0;i<o;i++){const s=e[i],o=n[i];o&&"object"==typeof o&&(A(s,o)?o._op=k.NO_ATTR_CHANGE|k.NO_TREE_CHANGE:(A(s.props,o.props)&&(o._op=k.NO_ATTR_CHANGE),A(s.children,o.children)?o._op=o._op|k.NO_TREE_CHANGE:t(s.children,o.children)))}}([this.save_vdom],[n]),s._component=this}e||(this.render(s,n),this.save_vdom=n),this.rendered&&this.rendered(this.state)}setState(t,e={render:!0,history:!1}){if(t instanceof Promise)t.then(t=>{this.setState(t,e)}).catch(t=>{throw console.error(t),t}),this._state=t;else{if(this._state=t,null==t)return;this.state=t,!1!==e.render&&this.renderState(t),!1!==e.history&&this.enable_history&&(this._history=[...this._history,t],this._history_idx=this._history.length-1),"function"==typeof e.callback&&e.callback(this.state)}}mount(t=null,e){var n,s;if(console.assert(!this.element,"Component already mounted."),this.options=e=Object.assign(Object.assign({},this.options),e),this.element=t,this.global_event=e.global_event,this.enable_history=!!e.history,this.enable_history&&(this.on(e.history.prev||"history-prev",this._history_prev),this.on(e.history.next||"history-next",this._history_next)),e.route&&(this.update=this.update||{},this.update[e.route]=_),this.add_actions(),this.state=null!==(s=null!==(n=this.state)&&void 0!==n?n:this.model)&&void 0!==s?s:{},e.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),i.debug){const e="string"==typeof t?t:t.id;$[e]=$[e]||[],$[e].push(this)}return this}is_global_event(t){return t&&(this.global_event||this._global_events.indexOf(t)>=0||t.startsWith("#")||t.startsWith("/")||t.startsWith("@"))}add_action(t,e,n={}){e&&"function"==typeof e&&(n.global&&this._global_events.push(t),this.on(t,(...s)=>{const o=e(this.state,...s);i.debug&&i.run("debug",{component:this,event:t,e:s,state:this.state,newState:o,options:n}),this.setState(o,n)},n))}add_actions(){const t=this.update||{};m.getMetadataKeys(this).forEach(e=>{if(e.startsWith("apprun-update:")){const n=m.getMetadata(e,this);t[n.name]=[this[n.key].bind(this),n.options]}});const e={};Array.isArray(t)?t.forEach(t=>{const[n,i,s]=t;n.toString().split(",").forEach(t=>e[t.trim()]=[i,s])}):Object.keys(t).forEach(n=>{const i=t[n];("function"==typeof i||Array.isArray(i))&&n.split(",").forEach(t=>e[t.trim()]=i)}),e["."]||(e["."]=_),Object.keys(e).forEach(t=>{const n=e[t];"function"==typeof n?this.add_action(t,n):Array.isArray(n)&&this.add_action(t,n[0],n[1])})}run(t,...e){const n=t.toString();return this.is_global_event(n)?i.run(n,...e):this._app.run(n,...e)}on(t,e,n){const s=t.toString();return this._actions.push({name:s,fn:e}),this.is_global_event(s)?i.on(s,e,n):this._app.on(s,e,n)}unmount(){var t;null===(t=this.observer)||void 0===t||t.disconnect(),this._actions.forEach(t=>{const{name:e,fn:n}=t;this.is_global_event(e)?i.off(e,n):this._app.off(e,n)})}}E.t=!0;const M="//",x="///",C=t=>{if(t||(t="#"),t.startsWith("#")){const[e,...n]=t.split("/");i.run(e,...n)||i.run("///",e,...n),i.run("//",e,...n)}else if(t.startsWith("/")){const[e,n,...s]=t.split("/");i.run("/"+n,...s)||i.run("///","/"+n,...s),i.run("//","/"+n,...s)}else i.run(t)||i.run("///",t),i.run("//",t)};i.h=i.createElement=function(t,e,...n){const i=r(n);if("string"==typeof t)return{tag:t,props:e,children:i};if(Array.isArray(t))return t;if(void 0===t&&n)return i;if(Object.getPrototypeOf(t).t)return{tag:t,props:e,children:i};if("function"==typeof t)return t(e,i);throw new Error(`Unknown tag in vdom ${t}`)},i.render=function(t,e,n){h(t,e,n)},i.Fragment=p,i.webComponent=y,i.start=(t,e,n,i,s)=>{const o=Object.assign(Object.assign({},s),{render:!0,global_event:!0}),r=new E(e,n,i);return s&&s.rendered&&(r.rendered=s.rendered),r.mount(t,o),r};const T=t=>{};i.on("$",T),i.on("debug",t=>T),i.on("//",T),i.on("#",T),i.route=C,i.on("route",t=>i.route&&i.route(t)),"object"==typeof document&&document.addEventListener("DOMContentLoaded",()=>{i.route===C&&(window.onpopstate=()=>C(location.hash),C(location.hash))}),"object"==typeof window&&(window.Component=E,window.React=i,window.on=g,window.customElement=w);export default i;export{E as Component,p as Fragment,x as ROUTER_404_EVENT,M as ROUTER_EVENT,i as app,w as customElement,v as event,g as on,v as update};
//# sourceMappingURL=apprun.esm.js.map
