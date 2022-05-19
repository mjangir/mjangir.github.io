!function(){"use strict";var e={206:function(e,t,n){var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,':root {\n    font-family: "Alata", sans-serif;\n  }\n  \n  .taskit-widget {\n    padding: 1rem;\n    border: 1px solid #ccc;\n    border-radius: 0.25rem;\n  }\n  \n  .taskit-widget .heading {\n    text-transform: uppercase;\n    margin: 0.75rem 0;\n  }\n  \n  .taskit-widget .heading.primary {\n    color: #e74d3c;\n  }\n  \n  .taskit-widget p {\n    font-size: 1rem;\n    color: #50555c;\n  }\n  \n  .taskit-widget .form-group {\n    margin-bottom: 1rem;\n  }\n  \n  .taskit-widget label {\n    display: block;\n    margin-bottom: 0.5rem;\n  }\n  \n  .taskit-widget input {\n    padding: 0.75rem;\n    border: 1px solid #ccc;\n    border-radius: 0.25rem;\n    font-size: 1rem;\n    width: 100%;\n    flex: 1;\n    box-sizing: border-box;\n  }\n\n  .taskit-widget input.has-error {\n      border-color: red;\n  }\n  \n  .taskit-widget .schedule-group {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 1rem;\n  }\n  \n  .taskit-widget .schedule-group .group-item {\n    flex: 1;\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .taskit-widget .schedule-group .group-item.group-name {\n    flex: none;\n    width: 100px;\n    margin-right: 1rem;\n    padding-left: 0;\n  }\n  \n  .taskit-widget .form-input-btn {\n    width: 120px;\n    padding: 0.75rem;\n    background-color: transparent;\n    border: 1px solid;\n    border-radius: 0.25rem;\n    cursor: pointer;\n  }\n  \n  .taskit-widget .form-input-btn.active {\n    background-color: cyan;\n  }\n  \n  .taskit-widget .form-input-btn.is-flexible {\n    width: auto;\n  }\n  \n  .taskit-widget .text-danger {\n      color: red;\n  }\n\n  .taskit-widget .submit-btn {\n    border-radius: 4px;\n    border: none;\n    background: rgb(231, 76, 60);\n    color: rgb(255, 255, 255);\n    transition: all 0.15s ease 0s;\n    width: 100%;\n    padding: 0.75rem;\n    font-size: 1rem;\n    cursor: pointer;\n  }',""]),t.Z=a},645:function(e){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var l=0;l<this.length;l++){var u=this[l][0];null!=u&&(a[u]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),t.push(c))}},t}},81:function(e){e.exports=function(e){return e[1]}},379:function(e){var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],l=0;l<e.length;l++){var u=e[l],s=r.base?u[0]+r.base:u[0],c=i[s]||0,_="".concat(s," ").concat(c);i[s]=c+1;var d=n(_),f={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var p=o(f,r);r.byIndex=l,t.splice(l,0,{identifier:_,updater:p,references:1})}a.push(_)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var l=n(i[a]);t[l].references--}for(var u=r(e,o),s=0;s<i.length;s++){var c=n(i[s]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}i=u}}},569:function(e){var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:function(e){e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:function(e,t,n){e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:function(e){e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:function(e){e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.nc=void 0,function(){var e,t,r,o,i,a,l={},u=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(e,t){for(var n in t)e[n]=t[n];return e}function _(e){var t=e.parentNode;t&&t.removeChild(e)}function f(t,n,r){var o,i,a,l={};for(a in n)"key"==a?o=n[a]:"ref"==a?i=n[a]:l[a]=n[a];if(arguments.length>2&&(l.children=arguments.length>3?e.call(arguments,2):r),"function"==typeof t&&null!=t.defaultProps)for(a in t.defaultProps)void 0===l[a]&&(l[a]=t.defaultProps[a]);return p(t,l,o,i,null)}function p(e,n,o,i,a){var l={type:e,props:n,key:o,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==a?++r:a};return null==a&&null!=t.vnode&&t.vnode(l),l}function h(e){return e.children}function m(e,t){this.props=e,this.context=t}function v(e,t){if(null==t)return e.__?v(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?v(e):null}function y(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return y(e)}}function g(e){(!e.__d&&(e.__d=!0)&&o.push(e)&&!b.__r++||a!==t.debounceRendering)&&((a=t.debounceRendering)||i)(b)}function b(){for(var e;b.__r=o.length;)e=o.sort((function(e,t){return e.__v.__b-t.__v.__b})),o=[],e.some((function(e){var t,n,r,o,i,a;e.__d&&(i=(o=(t=e).__v).__e,(a=t.__P)&&(n=[],(r=c({},o)).__v=o.__v+1,C(a,o,r,t.__n,void 0!==a.ownerSVGElement,null!=o.__h?[i]:null,n,null==i?v(o):i,o.__h),N(n,o),o.__e!=i&&y(o)))}))}function k(e,t,n,r,o,i,a,s,c,_){var d,f,m,y,g,b,k,x=r&&r.__k||u,E=x.length;for(n.__k=[],d=0;d<t.length;d++)if(null!=(y=n.__k[d]=null==(y=t[d])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?p(null,y,null,null,y):Array.isArray(y)?p(h,{children:y},null,null,null):y.__b>0?p(y.type,y.props,y.key,null,y.__v):y)){if(y.__=n,y.__b=n.__b+1,null===(m=x[d])||m&&y.key==m.key&&y.type===m.type)x[d]=void 0;else for(f=0;f<E;f++){if((m=x[f])&&y.key==m.key&&y.type===m.type){x[f]=void 0;break}m=null}C(e,y,m=m||l,o,i,a,s,c,_),g=y.__e,(f=y.ref)&&m.ref!=f&&(k||(k=[]),m.ref&&k.push(m.ref,null,y),k.push(f,y.__c||g,y)),null!=g?(null==b&&(b=g),"function"==typeof y.type&&y.__k===m.__k?y.__d=c=w(y,c,e):c=T(e,y,m,x,g,c),"function"==typeof n.type&&(n.__d=c)):c&&m.__e==c&&c.parentNode!=e&&(c=v(m))}for(n.__e=b,d=E;d--;)null!=x[d]&&("function"==typeof n.type&&null!=x[d].__e&&x[d].__e==n.__d&&(n.__d=v(r,d+1)),A(x[d],x[d]));if(k)for(d=0;d<k.length;d++)P(k[d],k[++d],k[++d])}function w(e,t,n){for(var r,o=e.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=e,t="function"==typeof r.type?w(r,t,n):T(n,r,r,o,r.__e,t));return t}function T(e,t,n,r,o,i){var a,l,u;if(void 0!==t.__d)a=t.__d,t.__d=void 0;else if(null==n||o!=i||null==o.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(o),a=null;else{for(l=i,u=0;(l=l.nextSibling)&&u<r.length;u+=2)if(l==o)break e;e.insertBefore(o,i),a=i}return void 0!==a?a:o.nextSibling}function x(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||s.test(t)?n:n+"px"}function E(e,t,n,r,o){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||x(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||x(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?O:S,i):e.removeEventListener(t,i?O:S,i);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function S(e){this.l[e.type+!1](t.event?t.event(e):e)}function O(e){this.l[e.type+!0](t.event?t.event(e):e)}function C(e,n,r,o,i,a,l,u,s){var _,d,f,p,v,y,g,b,w,T,x,E=n.type;if(void 0!==n.constructor)return null;null!=r.__h&&(s=r.__h,u=n.__e=r.__e,n.__h=null,a=[u]),(_=t.__b)&&_(n);try{e:if("function"==typeof E){if(b=n.props,w=(_=E.contextType)&&o[_.__c],T=_?w?w.props.value:_.__:o,r.__c?g=(d=n.__c=r.__c).__=d.__E:("prototype"in E&&E.prototype.render?n.__c=d=new E(b,T):(n.__c=d=new m(b,T),d.constructor=E,d.render=j),w&&w.sub(d),d.props=b,d.state||(d.state={}),d.context=T,d.__n=o,f=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=E.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=c({},d.__s)),c(d.__s,E.getDerivedStateFromProps(b,d.__s))),p=d.props,v=d.state,f)null==E.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==E.getDerivedStateFromProps&&b!==p&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(b,T),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(b,d.__s,T)||n.__v===r.__v){d.props=b,d.state=d.__s,n.__v!==r.__v&&(d.__d=!1),d.__v=n,n.__e=r.__e,n.__k=r.__k,n.__k.forEach((function(e){e&&(e.__=n)})),d.__h.length&&l.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(b,d.__s,T),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(p,v,y)}))}d.context=T,d.props=b,d.state=d.__s,(_=t.__r)&&_(n),d.__d=!1,d.__v=n,d.__P=e,_=d.render(d.props,d.state,d.context),d.state=d.__s,null!=d.getChildContext&&(o=c(c({},o),d.getChildContext())),f||null==d.getSnapshotBeforeUpdate||(y=d.getSnapshotBeforeUpdate(p,v)),x=null!=_&&_.type===h&&null==_.key?_.props.children:_,k(e,Array.isArray(x)?x:[x],n,r,o,i,a,l,u,s),d.base=n.__e,n.__h=null,d.__h.length&&l.push(d),g&&(d.__E=d.__=null),d.__e=!1}else null==a&&n.__v===r.__v?(n.__k=r.__k,n.__e=r.__e):n.__e=D(r.__e,n,r,o,i,a,l,s);(_=t.diffed)&&_(n)}catch(e){n.__v=null,(s||null!=a)&&(n.__e=u,n.__h=!!s,a[a.indexOf(u)]=null),t.__e(e,n,r)}}function N(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function D(t,n,r,o,i,a,u,s){var c,d,f,p=r.props,h=n.props,m=n.type,y=0;if("svg"===m&&(i=!0),null!=a)for(;y<a.length;y++)if((c=a[y])&&"setAttribute"in c==!!m&&(m?c.localName===m:3===c.nodeType)){t=c,a[y]=null;break}if(null==t){if(null===m)return document.createTextNode(h);t=i?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,h.is&&h),a=null,s=!1}if(null===m)p===h||s&&t.data===h||(t.data=h);else{if(a=a&&e.call(t.childNodes),d=(p=r.props||l).dangerouslySetInnerHTML,f=h.dangerouslySetInnerHTML,!s){if(null!=a)for(p={},y=0;y<t.attributes.length;y++)p[t.attributes[y].name]=t.attributes[y].value;(f||d)&&(f&&(d&&f.__html==d.__html||f.__html===t.innerHTML)||(t.innerHTML=f&&f.__html||""))}if(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||E(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||E(e,i,t[i],n[i],r)}(t,h,p,i,s),f)n.__k=[];else if(y=n.props.children,k(t,Array.isArray(y)?y:[y],n,r,o,i&&"foreignObject"!==m,a,u,a?a[0]:r.__k&&v(r,0),s),null!=a)for(y=a.length;y--;)null!=a[y]&&_(a[y]);s||("value"in h&&void 0!==(y=h.value)&&(y!==t.value||"progress"===m&&!y||"option"===m&&y!==p.value)&&E(t,"value",y,p.value,!1),"checked"in h&&void 0!==(y=h.checked)&&y!==t.checked&&E(t,"checked",y,p.checked,!1))}return t}function P(e,n,r){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,r)}}function A(e,n,r){var o,i;if(t.unmount&&t.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||P(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){t.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&A(o[i],n,"function"!=typeof e.type);r||null==e.__e||_(e.__e),e.__e=e.__d=void 0}function j(e,t,n){return this.constructor(e,n)}function I(n,r,o){var i,a,u;t.__&&t.__(n,r),a=(i="function"==typeof o)?null:o&&o.__k||r.__k,u=[],C(r,n=(!i&&o||r).__k=f(h,null,[n]),a||l,l,void 0!==r.ownerSVGElement,!i&&o?[o]:a?null:r.firstChild?e.call(r.childNodes):null,u,!i&&o?o:a?a.__e:r.firstChild,i),N(u,n)}function H(e,t){I(e,t,H)}function M(t,n,r){var o,i,a,l=c({},t.props);for(a in n)"key"==a?o=n[a]:"ref"==a?i=n[a]:l[a]=n[a];return arguments.length>2&&(l.children=arguments.length>3?e.call(arguments,2):r),p(t.type,l,o||t.key,i||t.ref,null)}function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function F(e){this.getChildContext=function(){return e.context};var t=e.children,n=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(o[n]=e[n]);return o}(e,["context","children"]);return M(t,n)}function U(){var e=new CustomEvent("_preact",{detail:{},bubbles:!0,cancelable:!0});this.dispatchEvent(e),this._vdom=f(F,L({},this._props,{context:e.detail.context}),function e(t,n){if(3===t.nodeType)return t.data;if(1!==t.nodeType)return null;var r=[],o={},i=0,a=t.attributes,l=t.childNodes;for(i=a.length;i--;)"slot"!==a[i].name&&(o[a[i].name]=a[i].value,o[R(a[i].name)]=a[i].value);for(i=l.length;i--;){var u=e(l[i],null),s=l[i].slot;s?o[s]=f(V,{name:s},u):r[i]=u}var c=n?f(V,null,r):r;return f(n||t.nodeName.toLowerCase(),o,c)}(this,this._vdomComponent)),(this.hasAttribute("hydrate")?H:I)(this._vdom,this._root)}function R(e){return e.replace(/-(\w)/g,(function(e,t){return t?t.toUpperCase():""}))}function W(e,t,n){if(this._vdom){var r={};r[e]=n=null==n?void 0:n,r[R(e)]=n,this._vdom=M(this._vdom,r),I(this._vdom,this._root)}}function q(){I(this._vdom=null,this._root)}function V(e,t){var n=this;return f("slot",L({},e,{ref:function(e){e?(n.ref=e,n._listener||(n._listener=function(e){e.stopPropagation(),e.detail.context=t},e.addEventListener("_preact",n._listener))):n.ref.removeEventListener("_preact",n._listener)}}))}e=u.slice,t={__e:function(e,t,n,r){for(var o,i,a;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),a=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),a=o.__d),a)return o.__E=o}catch(t){e=t}throw e}},r=0,m.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof e&&(e=e(c({},n),this.props)),e&&c(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),g(this))},m.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),g(this))},m.prototype.render=h,o=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,b.__r=0;var z=n(379),Z=n.n(z),$=n(795),B=n.n($),G=n(569),K=n.n(G),Y=n(565),J=n.n(Y),Q=n(216),X=n.n(Q),ee=n(589),te=n.n(ee),ne=n(206),re={};re.styleTagTransform=te(),re.setAttributes=J(),re.insert=K().bind(null,"head"),re.domAPI=B(),re.insertStyleElement=X(),Z()(ne.Z,re),ne.Z&&ne.Z.locals&&ne.Z.locals;var oe,ie,ae,le=0,ue=[],se=t.__b,ce=t.__r,_e=t.diffed,de=t.__c,fe=t.unmount;function pe(e){return le=1,function(e,n,r){var o=function(e,n){t.__h&&t.__h(ie,e,le||n),le=0;var r=ie.__H||(ie.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}(oe++,2);return o.t=e,o.__c||(o.__=[ge(void 0,n),function(e){var t=o.t(o.__[0],e);o.__[0]!==t&&(o.__=[t,o.__[1]],o.__c.setState({}))}],o.__c=ie),o.__}(ge,e)}function he(){for(var e;e=ue.shift();)if(e.__P)try{e.__H.__h.forEach(ve),e.__H.__h.forEach(ye),e.__H.__h=[]}catch(n){e.__H.__h=[],t.__e(n,e.__v)}}t.__b=function(e){ie=null,se&&se(e)},t.__r=function(e){ce&&ce(e),oe=0;var t=(ie=e.__c).__H;t&&(t.__h.forEach(ve),t.__h.forEach(ye),t.__h=[])},t.diffed=function(e){_e&&_e(e);var n=e.__c;n&&n.__H&&n.__H.__h.length&&(1!==ue.push(n)&&ae===t.requestAnimationFrame||((ae=t.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),me&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);me&&(t=requestAnimationFrame(n))})(he)),ie=null},t.__c=function(e,n){n.some((function(e){try{e.__h.forEach(ve),e.__h=e.__h.filter((function(e){return!e.__||ye(e)}))}catch(r){n.some((function(e){e.__h&&(e.__h=[])})),n=[],t.__e(r,e.__v)}})),de&&de(e,n)},t.unmount=function(e){fe&&fe(e);var n,r=e.__c;r&&r.__H&&(r.__H.__.forEach((function(e){try{ve(e)}catch(e){n=e}})),n&&t.__e(n,r.__v))};var me="function"==typeof requestAnimationFrame;function ve(e){var t=ie,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),ie=t}function ye(e){var t=ie;e.__c=e.__(),ie=t}function ge(e,t){return"function"==typeof t?t(e):t}function be(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ke(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ke(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ke(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function we(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?we(Object(n),!0).forEach((function(t){xe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):we(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ee=[{label:"WEEKDAYS",start:"weekdaysStartTime",end:"weekdaysEndTime"},{label:"WEEKNIGHTS",start:"weeknightsStartTime",end:"weeknightsEndTime"},{label:"WEEKENDS",start:"weekendsStartTime",end:"weekendsEndTime"},{label:"EVERY DAY",start:"everydayStartTime",end:"everydayEndTime"}];function Se(){var e=function(){var e=be(pe({taskTitle:"",duration:15,customDuration:"",deadline:"",startDate:"",weekdaysStartTime:"",weekdaysEndTime:"",weeknightsStartTime:"",weeknightsEndTime:"",weekendsStartTime:"",weekendsEndTime:"",everydayStartTime:"",everydayEndTime:""}),2),t=e[0],n=e[1],r=be(pe({taskTitle:"",duration:"",deadline:"",startDate:"",weekdaysStartTime:"",weekdaysEndTime:"",weeknightsStartTime:"",weeknightsEndTime:"",weekendsStartTime:"",weekendsEndTime:"",everydayStartTime:"",everydayEndTime:""}),2);return{fieldValues:t,setFieldValues:n,errors:r[0],setErrors:r[1]}}(),t=e.fieldValues,n=e.setFieldValues,r=e.errors,o=e.setErrors,i=function(e,t){return"taskTitle"===e?t&&""!==t.trim()?"":"Task title is required":""},a=function(e){n(Te(Te({},t),e))},l=function(e){o(Te(Te({},r),{},xe({},e.target.name,i(e.target.name,e.target.value)))),n(Te(Te({},t),{},xe({},e.target.name,e.target.value)))};return f("div",{className:"taskit-widget"},f("h2",{className:"heading"},"quick task:"),f("h2",{className:"heading primary"},"valentine's day"),f("p",null,"So you never miss shopping for Valentine's, this quick task will start scheduling a one hour block on weekends and weekday eventings and reschedule the task until it is completed. Days left will be recalculated every day and put into the title."),f("div",null,f("div",{className:"border"},f("div",null,f("div",{className:"form-group"},f("label",null,"Task Title:"),f("input",{type:"text",name:"taskTitle",value:t.taskTitle,onInput:function(e){return l(e)},placeholder:"Task Title",className:r.taskTitle?"has-error":""}),f("div",null,f("span",{className:"text-danger"},r.taskTitle)))),f("div",{className:"form-group"},f("label",null,"Duration:"),[15,30,45,60,90].map((function(e){return f("button",{className:"form-input-btn is-flexible".concat(t.duration===e&&""===t.customDuration?" active":""),style:{marginRight:"1rem"},onClick:function(){return a({duration:e,customDuration:""})}},e," MIN")})),f("button",{className:"form-input-btn is-flexible".concat(""!==t.customDuration?" active":""),style:{marginRight:"1rem"},onClick:function(){return a({duration:d})}},"Custom"),f("input",{style:{marginTop:"1rem"},type:"text",name:"customDuration",value:t.customDuration,onInput:function(e){return l(e)},placeholder:"Custom Duration"}),f("div",null,f("span",{className:"text-danger"},r.email))),f("div",{className:"form-group"},f("label",null,"Deadline:"),f("input",{name:"deadline",value:t.deadline,onInput:function(e){return l(e)},placeholder:"Deadline"}),f("div",null,f("span",{className:"text-danger"},r.deadline))),f("div",{className:"form-group"},f("label",null,"Start Date:"),f("input",{type:"text",name:"startDate",value:t.startDate,onInput:function(e){return l(e)},placeholder:"Start Date"}),f("div",null,f("span",{className:"text-danger"},r.startDate))),Ee.map((function(e){return f("div",{className:"schedule-group"},f("div",{className:"group-item group-name"},f("button",{className:"form-input-btn".concat(""!==t[e.start]||""!==t[e.end]?" active":"")},e.label)),f("div",{className:"group-item"},f("input",{type:"text",name:e.start,value:t[e.start],onInput:function(e){return l(e)},placeholder:"OPTIONAL FROM"})),f("div",{className:"group-item"},f("input",{type:"text",name:e.end,value:t[e.end],onInput:function(e){return l(e)},placeholder:"OPTIONAL TO"})))}))),f("br",null),f("button",{type:"button",className:"submit-btn",onClick:function(e){e.preventDefault();var n={};Object.keys(t).forEach((function(e){var r=i(e,t[e]);r&&r.length>0&&(n[e]=r)})),Object.keys(n).length>0?o(n):alert(JSON.stringify(t))}},"Submit")))}!function(e,t,n,r){function o(){var t=Reflect.construct(HTMLElement,[],o);return t._vdomComponent=e,t._root=t,t}(o.prototype=Object.create(HTMLElement.prototype)).constructor=o,o.prototype.connectedCallback=U,o.prototype.attributeChangedCallback=W,o.prototype.disconnectedCallback=q,n=n||e.observedAttributes||Object.keys(e.propTypes||{}),o.observedAttributes=n,n.forEach((function(e){Object.defineProperty(o.prototype,e,{get:function(){return this._vdom.props[e]},set:function(t){this._vdom?this.attributeChangedCallback(e,null,t):(this._props||(this._props={}),this._props[e]=t,this.connectedCallback());var n=typeof t;null!=t&&"string"!==n&&"boolean"!==n&&"number"!==n||this.setAttribute(e,t)}})})),customElements.define("valentines-day-widget",o)}((function(){return f("div",null,f(Se,null))}))}()}();
