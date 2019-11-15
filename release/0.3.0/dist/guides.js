/*
Copyright (c) 2019 Daybrush
name: @scena/guides
license: MIT
author: Daybrush
repository: git+https://github.com/daybrush/guides.git
version: 0.3.0
*/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.Guides = factory());
}(this, (function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    /*
    Copyright (c) 2019 Daybrush
    name: framework-utils
    license: MIT
    author: Daybrush
    repository: git+https://github.com/daybrush/framework-utils.git
    version: 0.2.1
    */
    function prefixNames(prefix) {
      var classNames = [];

      for (var _i = 1; _i < arguments.length; _i++) {
        classNames[_i - 1] = arguments[_i];
      }

      return classNames.map(function (className) {
        return className.split(" ").map(function (name) {
          return name ? "" + prefix + name : "";
        }).join(" ");
      }).join(" ");
    }
    function prefixCSS(prefix, css) {
      return css.replace(/\.([^{,\s\d.]+)/g, "." + prefix + "$1");
    }
    /* react */

    function ref(target, name) {
      return function (e) {
        e && (target[name] = e);
      };
    }
    function refs(target, name, i) {
      return function (e) {
        e && (target[name][i] = e);
      };
    }
    /* Class Decorator */

    function Properties(properties, action) {
      return function (component) {
        var prototype = component.prototype;
        properties.forEach(function (property) {
          action(prototype, property);
        });
      };
    }

    var n,u,t,i,o,r,f={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n);}function h(n,l,u){var t,i,o,r,f=arguments;if(l=s({},l),arguments.length>3)for(u=[u],t=3;t<arguments.length;t++)u.push(f[t]);if(null!=u&&(l.children=u),null!=n&&null!=n.defaultProps)for(i in n.defaultProps)void 0===l[i]&&(l[i]=n.defaultProps[i]);return r=l.key,null!=(o=l.ref)&&delete l.ref,null!=r&&delete l.key,v(n,l,r,o)}function v(l,u,t,i){var o={type:l,props:u,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:null,__c:null,constructor:void 0};return n.vnode&&n.vnode(o),o}function p(){return {}}function d(n){return n.children}function y(n,l){this.props=n,this.context=l;}function m(n,l){if(null==l)return n.__?m(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?m(n):null}function w(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return w(n)}}function g(l){(!l.__d&&(l.__d=!0)&&1===u.push(l)||i!==n.debounceRendering)&&((i=n.debounceRendering)||t)(k);}function k(){var n,l,t,i,o,r,f;for(u.sort(function(n,l){return l.__v.__b-n.__v.__b});n=u.pop();)n.__d&&(t=void 0,i=void 0,r=(o=(l=n).__v).__e,(f=l.__P)&&(t=[],i=T(f,o,s({},o),l.__n,void 0!==f.ownerSVGElement,null,t,null==r?m(o):r),$(t,o),i!=r&&w(o)));}function _(n,l,u,t,i,o,r,c,s){var h,v,p,d,y,w,g,k=u&&u.__k||e,_=k.length;if(c==f&&(c=null!=o?o[0]:_?m(u,0):null),h=0,l.__k=b(l.__k,function(u){if(null!=u){if(u.__=l,u.__b=l.__b+1,null===(p=k[h])||p&&u.key==p.key&&u.type===p.type)k[h]=void 0;else for(v=0;v<_;v++){if((p=k[v])&&u.key==p.key&&u.type===p.type){k[v]=void 0;break}p=null;}if(d=T(n,u,p=p||f,t,i,o,r,c,s),(v=u.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,u),g.push(v,u.__c||d,u)),null!=d){if(null==w&&(w=d),null!=u.__d)d=u.__d,u.__d=null;else if(o==p||d!=c||null==d.parentNode){n:if(null==c||c.parentNode!==n)n.appendChild(d);else{for(y=c,v=0;(y=y.nextSibling)&&v<_;v+=2)if(y==d)break n;n.insertBefore(d,c);}"option"==l.type&&(n.value="");}c=d.nextSibling,"function"==typeof l.type&&(l.__d=d);}}return h++,u}),l.__e=w,null!=o&&"function"!=typeof l.type)for(h=o.length;h--;)null!=o[h]&&a(o[h]);for(h=_;h--;)null!=k[h]&&A(k[h],k[h]);if(g)for(h=0;h<g.length;h++)z(g[h],g[++h],g[++h]);}function b(n,l,u){if(null==u&&(u=[]),null==n||"boolean"==typeof n)l&&u.push(l(null));else if(Array.isArray(n))for(var t=0;t<n.length;t++)b(n[t],l,u);else u.push(l?l("string"==typeof n||"number"==typeof n?v(null,n,null,null):null!=n.__e||null!=n.__c?v(n.type,n.props,n.key,null):n):n);return u}function x(n,l,u,t,i){var o;for(o in u)o in l||P(n,o,null,u[o],t);for(o in l)i&&"function"!=typeof l[o]||"value"===o||"checked"===o||u[o]===l[o]||P(n,o,l[o],u[o],t);}function C(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]="number"==typeof u&&!1===c.test(l)?u+"px":null==u?"":u;}function P(n,l,u,t,i){var o,r,f,e,c;if(i?"className"===l&&(l="class"):"class"===l&&(l="className"),"key"===l||"children"===l);else if("style"===l)if(o=n.style,"string"==typeof u)o.cssText=u;else{if("string"==typeof t&&(o.cssText="",t=null),t)for(r in t)u&&r in u||C(o,r,"");if(u)for(f in u)t&&u[f]===t[f]||C(o,f,u[f]);}else"o"===l[0]&&"n"===l[1]?(e=l!==(l=l.replace(/Capture$/,"")),c=l.toLowerCase(),l=(c in n?c:l).slice(2),u?(t||n.addEventListener(l,N,e),(n.l||(n.l={}))[l]=u):n.removeEventListener(l,N,e)):"list"!==l&&"tagName"!==l&&"form"!==l&&!i&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/^xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u?n.removeAttribute(l):n.setAttribute(l,u));}function N(l){this.l[l.type](n.event?n.event(l):l);}function T(l,u,t,i,o,r,f,e,c){var a,h,v,p,m,w,g,k,x,C,P=u.type;if(void 0!==u.constructor)return null;(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(k=u.props,x=(a=P.contextType)&&i[a.__c],C=a?x?x.props.value:a.__:i,t.__c?g=(h=u.__c=t.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(k,C):(u.__c=h=new y(k,C),h.constructor=P,h.render=D),x&&x.sub(h),h.props=k,h.state||(h.state={}),h.context=C,h.__n=i,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=s({},h.__s)),s(h.__s,P.getDerivedStateFromProps(k,h.__s))),p=h.props,m=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==P.getDerivedStateFromProps&&null==h.__e&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(k,C),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(k,h.__s,C)){for(h.props=k,h.state=h.__s,h.__d=!1,h.__v=u,u.__e=t.__e,u.__k=t.__k,h.__h.length&&f.push(h),a=0;a<u.__k.length;a++)u.__k[a]&&(u.__k[a].__=u);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(k,h.__s,C),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(p,m,w);});}h.context=C,h.props=k,h.state=h.__s,(a=n.__r)&&a(u),h.__d=!1,h.__v=u,h.__P=l,a=h.render(h.props,h.state,h.context),u.__k=b(null!=a&&a.type==d&&null==a.key?a.props.children:a),null!=h.getChildContext&&(i=s(s({},i),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(w=h.getSnapshotBeforeUpdate(p,m)),_(l,u,t,i,o,r,f,e,c),h.base=u.__e,h.__h.length&&f.push(h),g&&(h.__E=h.__=null),h.__e=null;}else u.__e=j(t.__e,u,t,i,o,r,f,c);(a=n.diffed)&&a(u);}catch(l){n.__e(l,u,t);}return u.__e}function $(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u);});}catch(l){n.__e(l,u.__v);}});}function j(n,l,u,t,i,o,r,c){var s,a,h,v,p,d=u.props,y=l.props;if(i="svg"===l.type||i,null==n&&null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&(null===l.type?3===a.nodeType:a.localName===l.type)){n=a,o[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(y);n=i?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type),o=null;}if(null===l.type)null!=o&&(o[o.indexOf(n)]=null),d!==y&&(n.data=y);else if(l!==u){if(null!=o&&(o=e.slice.call(n.childNodes)),h=(d=u.props||f).dangerouslySetInnerHTML,v=y.dangerouslySetInnerHTML,!c){if(d===f)for(d={},p=0;p<n.attributes.length;p++)d[n.attributes[p].name]=n.attributes[p].value;(v||h)&&(v&&h&&v.__html==h.__html||(n.innerHTML=v&&v.__html||""));}x(n,y,d,i,c),l.__k=l.props.children,v||_(n,l,u,t,"foreignObject"!==l.type&&i,o,r,f,c),c||("value"in y&&void 0!==y.value&&y.value!==n.value&&(n.value=null==y.value?"":y.value),"checked"in y&&void 0!==y.checked&&y.checked!==n.checked&&(n.checked=y.checked));}return n}function z(l,u,t){try{"function"==typeof l?l(u):l.current=u;}catch(l){n.__e(l,t);}}function A(l,u,t){var i,o,r;if(n.unmount&&n.unmount(l),(i=l.ref)&&z(i,null,u),t||"function"==typeof l.type||(t=null!=(o=l.__e)),l.__e=l.__d=null,null!=(i=l.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(l){n.__e(l,u);}i.base=i.__P=null;}if(i=l.__k)for(r=0;r<i.length;r++)i[r]&&A(i[r],u,t);null!=o&&a(o);}function D(n,l,u){return this.constructor(n,u)}function E(l,u,t){var i,r,c;n.__&&n.__(l,u),r=(i=t===o)?null:t&&t.__k||u.__k,l=h(d,null,[l]),c=[],T(u,(i?u:t||u).__k=l,r||f,f,void 0!==u.ownerSVGElement,t&&!i?[t]:r?null:e.slice.call(u.childNodes),c,t||f,i),$(c,l);}function H(n,l){E(n,l,o);}function I(n,l){return l=s(s({},n.props),l),arguments.length>2&&(l.children=e.slice.call(arguments,2)),v(n.type,l,l.key||n.key,l.ref||n.ref)}function L(n){var l={},u={__c:"__cC"+r++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var t,i=this;return this.getChildContext||(t=[],this.getChildContext=function(){return l[u.__c]=i,l},this.shouldComponentUpdate=function(l){n.value!==l.value&&t.some(function(n){n.context=l.value,g(n);});},this.sub=function(n){t.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){t.splice(t.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Consumer.contextType=u,u}n={__e:function(n,l){for(var u;l=l.__;)if((u=l.__c)&&!u.__)try{if(u.constructor&&null!=u.constructor.getDerivedStateFromError)u.setState(u.constructor.getDerivedStateFromError(n));else{if(null==u.componentDidCatch)continue;u.componentDidCatch(n);}return g(u.__E=u)}catch(l){n=l;}throw n}},y.prototype.setState=function(n,l){var u;u=this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(u,this.props)),n&&s(u,n),null!=n&&this.__v&&(this.__e=!1,l&&this.__h.push(l),g(this));},y.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),g(this));},y.prototype.render=d,u=[],t="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,o=f,r=0;

    var PROPERTIES = ["setGuides", "type", "width", "height", "rulerStyle", "unit", "zoom", "style", "backgroundColor", "lineColor", "container", "className"];

    var u$1,r$1,i$1=[],o$1=n.__r,f$1=n.diffed,c$1=n.__c,e$1=n.unmount;function F(){i$1.some(function(n){n.__P&&(n.__H.u.forEach(_$1),n.__H.u.forEach(g$1),n.__H.u=[]);}),i$1=[];}function _$1(n){n.m&&n.m();}function g$1(n){var t=n.i();"function"==typeof t&&(n.m=t);}n.__r=function(n){o$1&&o$1(n),(u$1=n.__c).__H&&(u$1.__H.u.forEach(_$1),u$1.__H.u.forEach(g$1),u$1.__H.u=[]);},n.diffed=function(t){f$1&&f$1(t);var u=t.__c;if(u){var o=u.__H;o&&o.u.length&&(1!==i$1.push(u)&&r$1===n.requestAnimationFrame||((r$1=n.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),cancelAnimationFrame(t),setTimeout(n);},r=setTimeout(u,100);"undefined"!=typeof window&&(t=requestAnimationFrame(u));})(F));}},n.__c=function(n,t){t.some(function(n){n.__h.forEach(_$1),n.__h=n.__h.filter(function(n){return !n.i||g$1(n)});}),c$1&&c$1(n,t);},n.unmount=function(n){e$1&&e$1(n);var t=n.__c;if(t){var u=t.__H;u&&u.t.forEach(function(n){return n.m&&n.m()});}};

    function _$2(n){var t=n.parentNode;t&&t.removeChild(n);}var k$1=n.__e;function w$1(n){this.__u=[],this.__f=n.fallback;}n.__e=function(n,t,e){if(n.then&&e)for(var r,o=t;o=o.__;)if((r=o.__c)&&r.o)return e&&(t.__e=e.__e,t.__k=e.__k),void r.o(n);k$1(n,t,e);},(w$1.prototype=new y).o=function(n){var t=this;t.__u.push(n);var e=function(){t.__u[t.__u.indexOf(n)]=t.__u[t.__u.length-1],t.__u.pop(),0==t.__u.length&&(t.__f&&A(t.__f),t.__v.__e=null,t.__v.__k=t.state.u,t.setState({u:null}));};null==t.state.u&&(t.__f=t.__f&&I(t.__f),t.setState({u:t.__v.__k}),function n(t){for(var e=0;e<t.length;e++){var r=t[e];null!=r&&("function"!=typeof r.type&&r.__e?_$2(r.__e):r.__k&&n(r.__k));}}(t.__v.__k),t.__v.__k=[]),n.then(e,e);},w$1.prototype.render=function(n,t){return t.u?this.__f:n.children};var F$1="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,R=n.event;n.event=function(n){return R&&(n=R(n)),n.persist=function(){},n.nativeEvent=n};var O=function(){function n(){}var t=n.prototype;return t.getChildContext=function(){return this.props.context},t.render=function(n){return n.children},n}();function j$1(n){var t=this,e=n.container,r=h(O,{context:t.context},n.vnode);return t.i&&t.i!==e&&(t.l.parentNode&&t.i.removeChild(t.l),A(t.s),t.v=!1),n.vnode?t.v?(e.__k=t.__k,E(r,e),t.__k=e.__k):(t.l=document.createTextNode(""),H("",e),e.appendChild(t.l),t.v=!0,t.i=e,E(r,e,t.l),t.__k=this.l.__k):t.v&&(t.l.parentNode&&t.i.removeChild(t.l),A(t.s)),t.s=r,t.componentWillUnmount=function(){t.l.parentNode&&t.i.removeChild(t.l),A(t.s);},null}function z$1(n,t){return h(j$1,{vnode:n,container:t})}function T$1(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}var q=function(n){var t,e;function r(t){var e;return (e=n.call(this,t)||this).isPureReactComponent=!0,e}return e=n,(t=r).prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e,r.prototype.shouldComponentUpdate=function(n,t){return T$1(this.props,n)||T$1(this.state,t)},r}(y);function J(n,t){n["UNSAFE_"+t]&&!n[t]&&Object.defineProperty(n,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(n){this["UNSAFE_"+t]=n;}});}y.prototype.isReactComponent={};var K=n.vnode;n.vnode=function(n){n.$$typeof=F$1,function(t){var e=n.type,r=n.props;if(r&&"string"==typeof e){var o={};for(var u in r)/^on(Ani|Tra)/.test(u)&&(r[u.toLowerCase()]=r[u],delete r[u]),o[u.toLowerCase()]=u;if(o.ondoubleclick&&(r.ondblclick=r[o.ondoubleclick],delete r[o.ondoubleclick]),o.onbeforeinput&&(r.onbeforeinput=r[o.onbeforeinput],delete r[o.onbeforeinput]),o.onchange&&("textarea"===e||"input"===e.toLowerCase()&&!/^fil|che|ra/i.test(r.type))){var i=o.oninput||"oninput";r[i]||(r[i]=r[o.onchange],delete r[o.onchange]);}}}();var t=n.type;t&&t.t&&n.ref&&(n.props.ref=n.ref,n.ref=null),"function"==typeof t&&!t.p&&t.prototype&&(J(t.prototype,"componentWillMount"),J(t.prototype,"componentWillReceiveProps"),J(t.prototype,"componentWillUpdate"),t.p=!0),K&&K(n);};

    /*
    Copyright (c) 2019 Daybrush
    name: preact-ruler
    license: MIT
    author: Daybrush
    repository: https://github.com/daybrush/ruler/blob/master/packages/preact-ruler
    version: 0.1.6
    */

    var t$1,r$2,u$2=[],i$2=n.__r;n.__r=function(n){i$2&&i$2(n),t$1=0,(r$2=n.__c).__H&&(r$2.__H.t=A$1(r$2.__H.t));};var f$2=n.diffed;n.diffed=function(n){f$2&&f$2(n);var t=n.__c;if(t){var r=t.__H;r&&(r.u=(r.u.some(function(n){n.ref&&(n.ref.current=n.createHandle());}),[]),r.i=A$1(r.i));}};var o$2=n.unmount;function e$2(t){n.__h&&n.__h(r$2);var u=r$2.__H||(r$2.__H={o:[],t:[],i:[],u:[]});return t>=u.o.length&&u.o.push({}),u.o[t]}function c$2(n){return a$1(q$1,n)}function a$1(n,u,i){var f=e$2(t$1++);return f.__c||(f.__c=r$2,f.v=[i?i(u):q$1(void 0,u),function(t){var r=n(f.v[0],t);f.v[0]!==r&&(f.v[0]=r,f.__c.setState({}));}]),f.v}function v$1(n,u){var i=e$2(t$1++);h$1(i.m,u)&&(i.v=n,i.m=u,r$2.__H.t.push(i),T$2(r$2));}function m$1(n,u){var i=e$2(t$1++);h$1(i.m,u)&&(i.v=n,i.m=u,r$2.__H.i.push(i));}function d$1(n){return l(function(){return {current:n}},[])}function p$1(n,u,i){var f=e$2(t$1++);h$1(f.m,i)&&(f.m=i,r$2.__H.u.push({ref:n,createHandle:u}));}function l(n,r){var u=e$2(t$1++);return h$1(u.m,r)?(u.m=r,u.p=n,u.v=n()):u.v}function s$1(n,t){return l(function(){return n},t)}function y$1(n){var u=r$2.context[n.__c];if(!u)return n.__p;var i=e$2(t$1++);return null==i.v&&(i.v=!0,u.sub(r$2)),u.props.value}function _$3(t,r){n.useDebugValue&&n.useDebugValue(r?r(t):t);}n.unmount=function(n){o$2&&o$2(n);var t=n.__c;if(t){var r=t.__H;r&&r.o.forEach(function(n){return n.l&&n.l()});}};var T$2=function(){};function g$2(){u$2.some(function(n){n.s=!1,n.__P&&(n.__H.t=A$1(n.__H.t));}),u$2=[];}if("undefined"!=typeof window){var w$2=n.requestAnimationFrame;T$2=function(t){(!t.s&&(t.s=!0)&&1===u$2.push(t)||w$2!==n.requestAnimationFrame)&&(w$2=n.requestAnimationFrame,(n.requestAnimationFrame||function(n){var t=function(){clearTimeout(r),cancelAnimationFrame(u),setTimeout(n);},r=setTimeout(t,100),u=requestAnimationFrame(t);})(g$2));};}function A$1(n){return n.forEach(E$1),n.forEach(F$2),[]}function E$1(n){n.l&&n.l();}function F$2(n){var t=n.v();"function"==typeof t&&(n.l=t);}function h$1(n,t){return !n||t.some(function(t,r){return t!==n[r]})}function q$1(n,t){return "function"==typeof t?t(n):t}

    var n$1 = ({
      useState: c$2,
      useReducer: a$1,
      useEffect: v$1,
      useLayoutEffect: m$1,
      useRef: d$1,
      useImperativeHandle: p$1,
      useMemo: l,
      useCallback: s$1,
      useContext: y$1,
      useDebugValue: _$3
    });

    function d$1$1(n,t){for(var r in t)n[r]=t[r];return n}function p$1$1(n){var t=n.parentNode;t&&t.removeChild(n);}var h$1$1=n.__e;function m$1$1(){this.t=[];}function y$1$1(n){var t,e,o;function i(i){if(t||(t=n()).then(function(n){e=n.default;},function(n){o=n;}),o)throw o;if(!e)throw t;return h(e,i)}return i.displayName="Lazy",i.o=!0,i}n.__e=function(n,t,r){if(n.then&&r)for(var e,o=t;o=o.__p;)if((e=o.__c)&&e.i)return r&&(t.__e=r.__e,t.__k=r.__k),void e.i(n);h$1$1(n,t,r);},(m$1$1.prototype=new y).i=function(n){var t=this;t.t.push(n);var r=function(){t.t[t.t.indexOf(n)]=t.t[t.t.length-1],t.t.pop(),0==t.t.length&&(A(t.props.fallback),t.__v.__e=null,t.__v.__k=t.state.u,t.setState({u:null}));};null==t.state.u&&(t.setState({u:t.__v.__k}),function n(t){for(var r=0;r<t.length;r++){var e=t[r];null!=e&&("function"!=typeof e.type&&e.__e?p$1$1(e.__e):e.__k&&n(e.__k));}}(t.__v.__k),t.__v.__k=[]),n.then(r,r);},m$1$1.prototype.render=function(n,t){return t.u?n.fallback:n.children};var g$1$1="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,x$1=/^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/,C$1=n.event;function E$1$1(n){return S.bind(null,n)}function _$1$1(n,t,r){if(null==t.__k)for(;t.firstChild;)p$1$1(t.firstChild);return E(n,t),"function"==typeof r&&r(),n?n.__c:null}n.event=function(n){return C$1&&(n=C$1(n)),n.persist=function(){},n.nativeEvent=n};var w$1$1=function(){};function A$1$1(n){var t=this,r=n.container,o=h(w$1$1,{context:t.context},n.vnode);return t.l&&t.l!==r&&(t.s.parentNode&&t.l.removeChild(t.s),A(t.v),t.p=!1),n.vnode?t.p?(r.__k=t.__k,E(o,r),t.__k=r.__k):(t.s=document.createTextNode(""),H("",r),r.insertBefore(t.s,r.firstChild),t.p=!0,t.l=r,E(o,r,t.s),t.__k=this.s.__k):t.p&&(t.s.parentNode&&t.l.removeChild(t.s),A(t.v)),t.v=o,t.componentWillUnmount=function(){t.s.parentNode&&t.l.removeChild(t.s),A(t.v);},null}function k$2(n,t){return h(A$1$1,{vnode:n,container:t})}w$1$1.prototype.getChildContext=function(){return this.props.context},w$1$1.prototype.render=function(n){return n.children};var F$1$1=function(n,t){return n?b(n).map(t):null},N$1={map:F$1$1,forEach:F$1$1,count:function(n){return n?b(n).length:0},only:function(n){if(1!==(n=b(n)).length)throw new Error("Children.only() expects only one child.");return n[0]},toArray:b};function S(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];var r=h.apply(void 0,n),e=r.type,o=r.props;return "function"!=typeof e&&(o.defaultValue&&(o.value||0===o.value||(o.value=o.defaultValue),delete o.defaultValue),Array.isArray(o.value)&&o.multiple&&"select"===e&&(b(o.children).forEach(function(n){-1!=o.value.indexOf(n.props.value)&&(n.props.selected=!0);}),delete o.value),function(n,t){var r,e,o;for(o in t)if(r=x$1.test(o))break;if(r)for(o in e=n.props={},t)e[x$1.test(o)?o.replace(/([A-Z0-9])/,"-$1").toLowerCase():o]=t[o];}(r,o)),r.preactCompatNormalized=!1,R$1(r)}function R$1(n){return n.preactCompatNormalized=!0,function(n){var t=n.props;(t.class||t.className)&&(z$2.enumerable="className"in t,t.className&&(t.class=t.className),Object.defineProperty(t,"className",z$2));}(n),n}function U(n){return O$1(n)?R$1(I.apply(null,arguments)):n}function O$1(n){return !!n&&n.$$typeof===g$1$1}function j$2(n){return !!n.__k&&(E(null,n),!0)}var z$2={configurable:!0,get:function(){return this.class}};function M(n,t){for(var r in n)if("__source"!==r&&!(r in t))return !0;for(var e in t)if("__source"!==e&&n[e]!==t[e])return !0;return !1}function P$1(n){return n&&(n.base||1===n.nodeType&&n)||null}var W=function(n){function t(t){n.call(this,t),this.isPureReactComponent=!0;}return n&&(t.__proto__=n),(t.prototype=Object.create(n&&n.prototype)).constructor=t,t.prototype.shouldComponentUpdate=function(n,t){return M(this.props,n)||M(this.state,t)},t}(y);function Z(n,t){function r(n){var r=this.props.ref,e=r==n.ref;return !e&&r&&(r.call?r(null):r.current=null),(t?!t(this.props,n):M(this.props,n))||!e}function e(t){return this.shouldComponentUpdate=r,h(n,d$1$1({},t))}return e.prototype.isReactComponent=!0,e.displayName="Memo("+(n.displayName||n.name)+")",e.o=!0,e}function D$1(n){function t(t){var r=t.ref;return delete t.ref,n(t,r)}return t.prototype.isReactComponent=!0,t.o=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}function L$1(n,t){n["UNSAFE_"+t]&&!n[t]&&Object.defineProperty(n,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(n){this["UNSAFE_"+t]=n;}});}y.prototype.isReactComponent={};var T$1$1=n.vnode;n.vnode=function(n){n.$$typeof=g$1$1,function(t){var r=n.type,e=n.props;if(e&&"string"==typeof r){var o={};for(var i in e)/^on(Ani|Tra)/.test(i)&&(e[i.toLowerCase()]=e[i],delete e[i]),o[i.toLowerCase()]=i;if(o.ondoubleclick&&(e.ondblclick=e[o.ondoubleclick],delete e[o.ondoubleclick]),o.onbeforeinput&&(e.onbeforeinput=e[o.onbeforeinput],delete e[o.onbeforeinput]),o.onchange&&("textarea"===r||"input"===r.toLowerCase()&&!/^fil|che|ra/i.test(e.type))){var u=o.oninput||"oninput";e[u]||(e[u]=e[o.onchange],delete e[o.onchange]);}}}();var t=n.type;t&&t.o&&n.ref&&(n.props.ref=n.ref,n.ref=null),"function"==typeof t&&!t.h&&t.prototype&&(L$1(t.prototype,"componentWillMount"),L$1(t.prototype,"componentWillReceiveProps"),L$1(t.prototype,"componentWillUpdate"),t.h=!0),T$1$1&&T$1$1(n);};var V=function(n,t){return n(t)};d$1$1({version:"16.8.0",Children:N$1,render:_$1$1,hydrate:_$1$1,unmountComponentAtNode:j$2,createPortal:k$2,createElement:S,createContext:L,createFactory:E$1$1,cloneElement:U,createRef:p,Fragment:d,isValidElement:O$1,findDOMNode:P$1,Component:y,PureComponent:W,memo:Z,forwardRef:D$1,unstable_batchedUpdates:V,Suspense:m$1$1,lazy:y$1$1},n$1);

    /*
    Copyright (c) 2019 Daybrush
    name: @scena/react-ruler
    license: MIT
    author: Daybrush
    repository: https://github.com/daybrush/ruler/blob/master/packages/react-ruler
    version: 0.1.4
    */

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */
    var extendStatics$1 = function (d, b) {
      extendStatics$1 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return extendStatics$1(d, b);
    };

    function __extends$1(d, b) {
      extendStatics$1(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var Ruler =
    /*#__PURE__*/
    function (_super) {
      __extends$1(Ruler, _super);

      function Ruler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.state = {
          scrollPos: 0
        };
        _this.width = 0;
        _this.height = 0;
        return _this;
      }

      var __proto = Ruler.prototype;

      __proto.render = function () {
        return S("canvas", {
          ref: ref(this, "canvasElement"),
          style: this.props.style
        });
      };

      __proto.componentDidMount = function () {
        var canvas = this.canvasElement;
        var context = canvas.getContext("2d");
        this.canvasContext = context;
        this.resize();
      };

      __proto.componentDidUpdate = function () {
        this.resize();
      };

      __proto.scroll = function (scrollPos) {
        this.draw(scrollPos);
      };

      __proto.resize = function () {
        var canvas = this.canvasElement;
        var _a = this.props,
            width = _a.width,
            height = _a.height;
        this.width = width || canvas.offsetWidth;
        this.height = height || canvas.offsetHeight;
        canvas.width = this.width * 2;
        canvas.height = this.height * 2;
        this.draw();
      };

      __proto.draw = function (scrollPos) {
        if (scrollPos === void 0) {
          scrollPos = this.state.scrollPos;
        }

        var _a = this.props,
            unit = _a.unit,
            zoom = _a.zoom,
            type = _a.type,
            backgroundColor = _a.backgroundColor,
            lineColor = _a.lineColor;
        var width = this.width;
        var height = this.height;
        var state = this.state;
        state.scrollPos = scrollPos;
        var context = this.canvasContext;
        var isHorizontal = type === "horizontal";
        context.rect(0, 0, width * 2, height * 2);
        context.fillStyle = backgroundColor;
        context.fill();
        context.save();
        context.scale(2, 2);
        context.strokeStyle = lineColor;
        context.lineWidth = 1;
        context.font = "10px sans-serif";
        context.fillStyle = "#ffffff";
        context.translate(0.5, 0);
        context.beginPath();
        var size = isHorizontal ? width : height;
        var zoomUnit = zoom * unit;
        var minRange = Math.floor(scrollPos * zoom / zoomUnit);
        var maxRange = Math.ceil((scrollPos * zoom + size) / zoomUnit);
        var length = maxRange - minRange;

        for (var i = 0; i < length; ++i) {
          var startPos = ((i + minRange) * unit - scrollPos) * zoom;

          if (startPos >= -zoomUnit && startPos < size) {
            var startX = isHorizontal ? startPos + 3 : width - 18;
            var startY = isHorizontal ? height - 18 : startPos - 4;

            if (isHorizontal) {
              context.fillText("" + (i + minRange) * unit, startX, startY);
            } else {
              context.save();
              context.translate(startX, startY);
              context.rotate(-Math.PI / 2);
              context.fillText("" + (i + minRange) * unit, 0, 0);
              context.restore();
            }
          }

          for (var j = 0; j < 10; ++j) {
            var pos = startPos + j / 10 * zoomUnit;

            if (pos < 0 || pos >= size) {
              continue;
            }

            var lineSize = j === 0 ? isHorizontal ? height : width : j % 2 === 0 ? 10 : 7;
            var x1 = isHorizontal ? pos : width - lineSize;
            var x2 = isHorizontal ? pos : width;
            var y1 = isHorizontal ? height - lineSize : pos;
            var y2 = isHorizontal ? height : pos;
            context.moveTo(x1, y1);
            context.lineTo(x2, y2);
          }
        }

        context.stroke();
        context.restore();
      };

      Ruler.defaultProps = {
        type: "horizontal",
        zoom: 1,
        width: 0,
        height: 0,
        unit: 50,
        style: {
          width: "100%",
          height: "100%"
        },
        backgroundColor: "#333333",
        lineColor: "#777777"
      };
      return Ruler;
    }(W);

    /*
    Copyright (c) 2018 Daybrush
    @name: @daybrush/utils
    license: MIT
    author: Daybrush
    repository: https://github.com/daybrush/utils
    @version 0.10.1
    */
    /**
    * Checks if the specified class value exists in the element's class attribute.
    * @memberof DOM
    * @param element - target
    * @param className - the class name to search
    * @return {boolean} return false if the class is not found.
    * @example
    import {hasClass} from "@daybrush/utils";

    console.log(hasClass(element, "start")); // true or false
    */

    function hasClass(element, className) {
      if (element.classList) {
        return element.classList.contains(className);
      }

      return !!element.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
    }
    /**
    * Add the specified class value. If these classe already exist in the element's class attribute they are ignored.
    * @memberof DOM
    * @param element - target
    * @param className - the class name to add
    * @example
    import {addClass} from "@daybrush/utils";

    addClass(element, "start");
    */

    function addClass(element, className) {
      if (element.classList) {
        element.classList.add(className);
      } else {
        element.className += " " + className;
      }
    }
    /**
    * Removes the specified class value.
    * @memberof DOM
    * @param element - target
    * @param className - the class name to remove
    * @example
    import {removeClass} from "@daybrush/utils";

    removeClass(element, "start");
    */

    function removeClass(element, className) {
      if (element.classList) {
        element.classList.remove(className);
      } else {
        var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
        element.className = element.className.replace(reg, " ");
      }
    }
    /**
    * Sets up a function that will be called whenever the specified event is delivered to the target
    * @memberof DOM
    * @param - event target
    * @param - A case-sensitive string representing the event type to listen for.
    * @param - The object which receives a notification (an object that implements the Event interface) when an event of the specified type occurs
    * @param - An options object that specifies characteristics about the event listener. The available options are:
    * @example
    import {addEvent} from "@daybrush/utils";

    addEvent(el, "click", e => {
      console.log(e);
    });
    */

    function addEvent(el, type, listener, options) {
      el.addEventListener(type, listener, options);
    }
    /**
    * removes from the EventTarget an event listener previously registered with EventTarget.addEventListener()
    * @memberof DOM
    * @param - event target
    * @param - A case-sensitive string representing the event type to listen for.
    * @param - The EventListener function of the event handler to remove from the event target.
    * @example
    import {addEvent, removeEvent} from "@daybrush/utils";
    const listener = e => {
      console.log(e);
    };
    addEvent(el, "click", listener);
    removeEvent(el, "click", listener);
    */

    function removeEvent(el, type, listener) {
      el.removeEventListener(type, listener);
    }

    /*
    Copyright (c) 2019 Daybrush
    name: @daybrush/drag
    license: MIT
    author: Daybrush
    repository: git+https://github.com/daybrush/drag.git
    version: 0.11.1
    */

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign$1 = function () {
      __assign$1 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return __assign$1.apply(this, arguments);
    };

    function getPinchDragPosition(clients, prevClients, startClients, startPinchClients) {
      var nowCenter = getAverageClient(clients);
      var prevCenter = getAverageClient(prevClients);
      var startCenter = getAverageClient(startPinchClients);
      var pinchClient = getAddClient(startPinchClients[0], getMinusClient(nowCenter, startCenter));
      var pinchPrevClient = getAddClient(startPinchClients[0], getMinusClient(prevCenter, startCenter));
      return getPosition(pinchClient, pinchPrevClient, startClients[0]);
    }
    function isMultiTouch(e) {
      return e.touches && e.touches.length >= 2;
    }
    function getPositionEvent(e) {
      if (e.touches) {
        return getClients(e.touches);
      } else {
        return [getClient(e)];
      }
    }
    function getPosition(client, prevClient, startClient) {
      var clientX = client.clientX,
          clientY = client.clientY;
      var prevX = prevClient.clientX,
          prevY = prevClient.clientY;
      var startX = startClient.clientX,
          startY = startClient.clientY;
      var deltaX = clientX - prevX;
      var deltaY = clientY - prevY;
      var distX = clientX - startX;
      var distY = clientY - startY;
      return {
        clientX: clientX,
        clientY: clientY,
        deltaX: deltaX,
        deltaY: deltaY,
        distX: distX,
        distY: distY
      };
    }
    function getDist(clients) {
      return Math.sqrt(Math.pow(clients[0].clientX - clients[1].clientX, 2) + Math.pow(clients[0].clientY - clients[1].clientY, 2));
    }
    function getPositions(clients, prevClients, startClients) {
      return clients.map(function (client, i) {
        return getPosition(client, prevClients[i], startClients[i]);
      });
    }
    function getClients(touches) {
      var length = Math.min(touches.length, 2);
      var clients = [];

      for (var i = 0; i < length; ++i) {
        clients.push(getClient(touches[i]));
      }

      return clients;
    }
    function getClient(e) {
      return {
        clientX: e.clientX,
        clientY: e.clientY
      };
    }
    function getAverageClient(clients) {
      return {
        clientX: (clients[0].clientX + clients[1].clientX) / 2,
        clientY: (clients[0].clientY + clients[1].clientY) / 2
      };
    }
    function getAddClient(client1, client2) {
      return {
        clientX: client1.clientX + client2.clientX,
        clientY: client1.clientY + client2.clientY
      };
    }
    function getMinusClient(client1, client2) {
      return {
        clientX: client1.clientX - client2.clientX,
        clientY: client1.clientY - client2.clientY
      };
    }

    var Dragger =
    /*#__PURE__*/
    function () {
      function Dragger(el, options) {
        var _this = this;

        if (options === void 0) {
          options = {};
        }

        this.el = el;
        this.options = {};
        this.flag = false;
        this.pinchFlag = false;
        this.datas = {};
        this.isDrag = false;
        this.isPinch = false;
        this.isMouse = false;
        this.isTouch = false;
        this.prevClients = [];
        this.startClients = [];
        this.movement = 0;
        this.startPinchClients = [];
        this.startDistance = 0;
        this.customDist = [0, 0];

        this.onDragStart = function (e) {
          if (!_this.flag && e.cancelable === false) {
            return;
          }

          if (isMultiTouch(e)) {
            if (!_this.flag && e.touches.length !== e.changedTouches.length) {
              return;
            }

            if (!_this.pinchFlag) {
              _this.onPinchStart(e);
            }
          }

          if (_this.flag) {
            return;
          }

          var clients = _this.startClients[0] ? _this.startClients : getPositionEvent(e);
          _this.customDist = [0, 0];
          _this.flag = true;
          _this.isDrag = false;
          _this.startClients = clients;
          _this.prevClients = clients;
          _this.datas = {};
          _this.movement = 0;
          var position = getPosition(clients[0], _this.prevClients[0], _this.startClients[0]);
          var _a = _this.options,
              dragstart = _a.dragstart,
              preventRightClick = _a.preventRightClick;

          if (preventRightClick && e.which === 3 || (dragstart && dragstart(__assign$1({
            datas: _this.datas,
            inputEvent: e
          }, position))) === false) {
            _this.startClients = [];
            _this.prevClients = [];
            _this.flag = false;
          }

          _this.flag && e.preventDefault();
        };

        this.onDrag = function (e, isScroll) {
          if (!_this.flag) {
            return;
          }

          var clients = getPositionEvent(e);

          if (_this.pinchFlag) {
            _this.onPinch(e, clients);
          }

          var result = _this.move([0, 0], e, clients);

          if (!result || !result.deltaX && !result.deltaY) {
            return;
          }

          var drag = _this.options.drag;
          drag && drag(__assign$1({}, result, {
            isScroll: !!isScroll,
            inputEvent: e
          }));
        };

        this.onDragEnd = function (e) {
          if (!_this.flag) {
            return;
          }

          if (_this.pinchFlag) {
            _this.onPinchEnd(e);
          }

          _this.flag = false;
          var dragend = _this.options.dragend;
          var prevClients = _this.prevClients;
          var startClients = _this.startClients;
          var position = _this.pinchFlag ? getPinchDragPosition(prevClients, prevClients, startClients, _this.startPinchClients) : getPosition(prevClients[0], prevClients[0], startClients[0]);
          _this.startClients = [];
          _this.prevClients = [];
          dragend && dragend(__assign$1({
            datas: _this.datas,
            isDrag: _this.isDrag,
            inputEvent: e
          }, position));
        };

        this.options = __assign$1({
          container: el,
          preventRightClick: true,
          pinchThreshold: 0,
          events: ["touch", "mouse"]
        }, options);
        var _a = this.options,
            container = _a.container,
            events = _a.events;
        this.isTouch = events.indexOf("touch") > -1;
        this.isMouse = events.indexOf("mouse") > -1;
        this.customDist = [0, 0];

        if (this.isMouse) {
          addEvent(el, "mousedown", this.onDragStart);
          addEvent(container, "mousemove", this.onDrag);
          addEvent(container, "mouseup", this.onDragEnd);
        }

        if (this.isTouch) {
          var passive = {
            passive: false
          };
          addEvent(el, "touchstart", this.onDragStart, passive);
          addEvent(container, "touchmove", this.onDrag, passive);
          addEvent(container, "touchend", this.onDragEnd, passive);
        }
      }

      var __proto = Dragger.prototype;

      __proto.isDragging = function () {
        return this.isDrag;
      };

      __proto.isPinching = function () {
        return this.isPinch;
      };

      __proto.scrollBy = function (deltaX, deltaY, e, isCallDrag) {
        if (isCallDrag === void 0) {
          isCallDrag = true;
        }

        if (!this.flag) {
          return;
        }

        this.startClients.forEach(function (client) {
          client.clientX -= deltaX;
          client.clientY -= deltaY;
        });
        this.prevClients.forEach(function (client) {
          client.clientX -= deltaX;
          client.clientY -= deltaY;
        });
        isCallDrag && this.onDrag(e, true);
      };

      __proto.move = function (_a, inputEvent, clients) {
        var deltaX = _a[0],
            deltaY = _a[1];

        if (clients === void 0) {
          clients = this.prevClients;
        }

        var customDist = this.customDist;
        var prevClients = this.prevClients;
        var startClients = this.startClients;
        var position = this.pinchFlag ? getPinchDragPosition(clients, prevClients, startClients, this.startPinchClients) : getPosition(clients[0], prevClients[0], startClients[0]);
        customDist[0] += deltaX;
        customDist[1] += deltaY;
        position.deltaX += deltaX;
        position.deltaY += deltaY;
        var positionDeltaX = position.deltaX,
            positionDeltaY = position.deltaY;
        position.distX += customDist[0];
        position.distY += customDist[1];
        this.movement += Math.sqrt(positionDeltaX * positionDeltaX + positionDeltaY * positionDeltaY);
        this.prevClients = clients;
        this.isDrag = true;
        return __assign$1({
          datas: this.datas
        }, position, {
          isScroll: false,
          inputEvent: inputEvent
        });
      };

      __proto.onPinchStart = function (e) {
        var _a, _b;

        var _c = this.options,
            pinchstart = _c.pinchstart,
            pinchThreshold = _c.pinchThreshold;

        if (this.isDrag && this.movement > pinchThreshold) {
          return;
        }

        var pinchClients = getClients(e.changedTouches);
        this.pinchFlag = true;

        (_a = this.startClients).push.apply(_a, pinchClients);

        (_b = this.prevClients).push.apply(_b, pinchClients);

        this.startDistance = getDist(this.prevClients);
        this.startPinchClients = this.prevClients.slice();

        if (!pinchstart) {
          return;
        }

        var startClients = this.prevClients;
        var startAverageClient = getAverageClient(startClients);
        var centerPosition = getPosition(startAverageClient, startAverageClient, startAverageClient);
        pinchstart(__assign$1({
          datas: this.datas,
          touches: getPositions(startClients, startClients, startClients)
        }, centerPosition, {
          inputEvent: e
        }));
      };

      __proto.onPinch = function (e, clients) {
        if (!this.flag || !this.pinchFlag) {
          return;
        }

        this.isPinch = true;
        var pinch = this.options.pinch;

        if (!pinch) {
          return;
        }

        var prevClients = this.prevClients;
        var startClients = this.startClients;
        var centerPosition = getPosition(getAverageClient(clients), getAverageClient(prevClients), getAverageClient(startClients));
        var distance = getDist(clients);
        pinch(__assign$1({
          datas: this.datas,
          touches: getPositions(clients, prevClients, startClients),
          scale: distance / this.startDistance,
          distance: distance
        }, centerPosition, {
          inputEvent: e
        }));
      };

      __proto.onPinchEnd = function (e) {
        if (!this.flag || !this.pinchFlag) {
          return;
        }

        var isPinch = this.isPinch;
        this.isPinch = false;
        this.pinchFlag = false;
        var pinchend = this.options.pinchend;

        if (!pinchend) {
          return;
        }

        var prevClients = this.prevClients;
        var startClients = this.startClients;
        var centerPosition = getPosition(getAverageClient(prevClients), getAverageClient(prevClients), getAverageClient(startClients));
        pinchend(__assign$1({
          datas: this.datas,
          isPinch: isPinch,
          touches: getPositions(prevClients, prevClients, startClients)
        }, centerPosition, {
          inputEvent: e
        }));
        this.isPinch = false;
        this.pinchFlag = false;
      };

      __proto.unset = function () {
        var el = this.el;
        var container = this.options.container;

        if (this.isMouse) {
          removeEvent(el, "mousedown", this.onDragStart);
          removeEvent(container, "mousemove", this.onDrag);
          removeEvent(container, "mouseup", this.onDragEnd);
        }

        if (this.isTouch) {
          removeEvent(el, "touchstart", this.onDragStart);
          removeEvent(container, "touchmove", this.onDrag);
          removeEvent(container, "touchend", this.onDragEnd);
        }
      };

      return Dragger;
    }();

    /*
    Copyright (c) 2019 Daybrush
    name: preact-css-styler
    license: MIT
    author: Daybrush
    repository: https://github.com/daybrush/css-styler/tree/master/preact-css-styler
    version: 1.0.0
    */

    var t$2,r$3,u$3=[],i$3=n.__r;n.__r=function(n){i$3&&i$3(n),t$2=0,(r$3=n.__c).__H&&(r$3.__H.t=A$2(r$3.__H.t));};var f$3=n.diffed;n.diffed=function(n){f$3&&f$3(n);var t=n.__c;if(t){var r=t.__H;r&&(r.u=(r.u.some(function(n){n.ref&&(n.ref.current=n.createHandle());}),[]),r.i=A$2(r.i));}};var o$3=n.unmount;function e$3(t){n.__h&&n.__h(r$3);var u=r$3.__H||(r$3.__H={o:[],t:[],i:[],u:[]});return t>=u.o.length&&u.o.push({}),u.o[t]}function c$3(n){return a$2(q$2,n)}function a$2(n,u,i){var f=e$3(t$2++);return f.__c||(f.__c=r$3,f.v=[i?i(u):q$2(void 0,u),function(t){var r=n(f.v[0],t);f.v[0]!==r&&(f.v[0]=r,f.__c.setState({}));}]),f.v}function v$2(n,u){var i=e$3(t$2++);h$2(i.m,u)&&(i.v=n,i.m=u,r$3.__H.t.push(i),T$3(r$3));}function m$2(n,u){var i=e$3(t$2++);h$2(i.m,u)&&(i.v=n,i.m=u,r$3.__H.i.push(i));}function d$2(n){return l$1(function(){return {current:n}},[])}function p$2(n,u,i){var f=e$3(t$2++);h$2(f.m,i)&&(f.m=i,r$3.__H.u.push({ref:n,createHandle:u}));}function l$1(n,r){var u=e$3(t$2++);return h$2(u.m,r)?(u.m=r,u.p=n,u.v=n()):u.v}function s$2(n,t){return l$1(function(){return n},t)}function y$2(n){var u=r$3.context[n.__c];if(!u)return n.__p;var i=e$3(t$2++);return null==i.v&&(i.v=!0,u.sub(r$3)),u.props.value}function _$4(t,r){n.useDebugValue&&n.useDebugValue(r?r(t):t);}n.unmount=function(n){o$3&&o$3(n);var t=n.__c;if(t){var r=t.__H;r&&r.o.forEach(function(n){return n.l&&n.l()});}};var T$3=function(){};function g$3(){u$3.some(function(n){n.s=!1,n.__P&&(n.__H.t=A$2(n.__H.t));}),u$3=[];}if("undefined"!=typeof window){var w$3=n.requestAnimationFrame;T$3=function(t){(!t.s&&(t.s=!0)&&1===u$3.push(t)||w$3!==n.requestAnimationFrame)&&(w$3=n.requestAnimationFrame,(n.requestAnimationFrame||function(n){var t=function(){clearTimeout(r),cancelAnimationFrame(u),setTimeout(n);},r=setTimeout(t,100),u=requestAnimationFrame(t);})(g$3));};}function A$2(n){return n.forEach(E$2),n.forEach(F$3),[]}function E$2(n){n.l&&n.l();}function F$3(n){var t=n.v();"function"==typeof t&&(n.l=t);}function h$2(n,t){return !n||t.some(function(t,r){return t!==n[r]})}function q$2(n,t){return "function"==typeof t?t(n):t}

    var n$2 = ({
      __proto__: null,
      useState: c$3,
      useReducer: a$2,
      useEffect: v$2,
      useLayoutEffect: m$2,
      useRef: d$2,
      useImperativeHandle: p$2,
      useMemo: l$1,
      useCallback: s$2,
      useContext: y$2,
      useDebugValue: _$4
    });

    function d$1$2(n,t){for(var r in t)n[r]=t[r];return n}function p$1$2(n){var t=n.parentNode;t&&t.removeChild(n);}var h$1$2=n.__e;function m$1$2(){this.t=[];}function y$1$2(n){var t,e,o;function i(i){if(t||(t=n()).then(function(n){e=n.default;},function(n){o=n;}),o)throw o;if(!e)throw t;return h(e,i)}return i.displayName="Lazy",i.o=!0,i}n.__e=function(n,t,r){if(n.then&&r)for(var e,o=t;o=o.__p;)if((e=o.__c)&&e.i)return r&&(t.__e=r.__e,t.__k=r.__k),void e.i(n);h$1$2(n,t,r);},(m$1$2.prototype=new y).i=function(n){var t=this;t.t.push(n);var r=function(){t.t[t.t.indexOf(n)]=t.t[t.t.length-1],t.t.pop(),0==t.t.length&&(A(t.props.fallback),t.__v.__e=null,t.__v.__k=t.state.u,t.setState({u:null}));};null==t.state.u&&(t.setState({u:t.__v.__k}),function n(t){for(var r=0;r<t.length;r++){var e=t[r];null!=e&&("function"!=typeof e.type&&e.__e?p$1$2(e.__e):e.__k&&n(e.__k));}}(t.__v.__k),t.__v.__k=[]),n.then(r,r);},m$1$2.prototype.render=function(n,t){return t.u?n.fallback:n.children};var g$1$2="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,x$2=/^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/,C$2=n.event;function E$1$2(n){return S$1.bind(null,n)}function _$1$2(n,t,r){if(null==t.__k)for(;t.firstChild;)p$1$2(t.firstChild);return E(n,t),"function"==typeof r&&r(),n?n.__c:null}n.event=function(n){return C$2&&(n=C$2(n)),n.persist=function(){},n.nativeEvent=n};var w$1$2=function(){};function A$1$2(n){var t=this,r=n.container,o=h(w$1$2,{context:t.context},n.vnode);return t.l&&t.l!==r&&(t.s.parentNode&&t.l.removeChild(t.s),A(t.v),t.p=!1),n.vnode?t.p?(r.__k=t.__k,E(o,r),t.__k=r.__k):(t.s=document.createTextNode(""),H("",r),r.insertBefore(t.s,r.firstChild),t.p=!0,t.l=r,E(o,r,t.s),t.__k=this.s.__k):t.p&&(t.s.parentNode&&t.l.removeChild(t.s),A(t.v)),t.v=o,t.componentWillUnmount=function(){t.s.parentNode&&t.l.removeChild(t.s),A(t.v);},null}function k$3(n,t){return h(A$1$2,{vnode:n,container:t})}w$1$2.prototype.getChildContext=function(){return this.props.context},w$1$2.prototype.render=function(n){return n.children};var F$1$2=function(n,t){return n?b(n).map(t):null},N$2={map:F$1$2,forEach:F$1$2,count:function(n){return n?b(n).length:0},only:function(n){if(1!==(n=b(n)).length)throw new Error("Children.only() expects only one child.");return n[0]},toArray:b};function S$1(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];var r=h.apply(void 0,n),e=r.type,o=r.props;return "function"!=typeof e&&(o.defaultValue&&(o.value||0===o.value||(o.value=o.defaultValue),delete o.defaultValue),Array.isArray(o.value)&&o.multiple&&"select"===e&&(b(o.children).forEach(function(n){-1!=o.value.indexOf(n.props.value)&&(n.props.selected=!0);}),delete o.value),function(n,t){var r,e,o;for(o in t)if(r=x$2.test(o))break;if(r)for(o in e=n.props={},t)e[x$2.test(o)?o.replace(/([A-Z0-9])/,"-$1").toLowerCase():o]=t[o];}(r,o)),r.preactCompatNormalized=!1,R$2(r)}function R$2(n){return n.preactCompatNormalized=!0,function(n){var t=n.props;(t.class||t.className)&&(z$3.enumerable="className"in t,t.className&&(t.class=t.className),Object.defineProperty(t,"className",z$3));}(n),n}function U$1(n){return O$2(n)?R$2(I.apply(null,arguments)):n}function O$2(n){return !!n&&n.$$typeof===g$1$2}function j$3(n){return !!n.__k&&(E(null,n),!0)}var z$3={configurable:!0,get:function(){return this.class}};function M$1(n,t){for(var r in n)if("__source"!==r&&!(r in t))return !0;for(var e in t)if("__source"!==e&&n[e]!==t[e])return !0;return !1}function P$2(n){return n&&(n.base||1===n.nodeType&&n)||null}var W$1=function(n){function t(t){n.call(this,t),this.isPureReactComponent=!0;}return n&&(t.__proto__=n),(t.prototype=Object.create(n&&n.prototype)).constructor=t,t.prototype.shouldComponentUpdate=function(n,t){return M$1(this.props,n)||M$1(this.state,t)},t}(y);function Z$1(n,t){function r(n){var r=this.props.ref,e=r==n.ref;return !e&&r&&(r.call?r(null):r.current=null),(t?!t(this.props,n):M$1(this.props,n))||!e}function e(t){return this.shouldComponentUpdate=r,h(n,d$1$2({},t))}return e.prototype.isReactComponent=!0,e.displayName="Memo("+(n.displayName||n.name)+")",e.o=!0,e}function D$2(n){function t(t){var r=t.ref;return delete t.ref,n(t,r)}return t.prototype.isReactComponent=!0,t.o=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}function L$2(n,t){n["UNSAFE_"+t]&&!n[t]&&Object.defineProperty(n,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(n){this["UNSAFE_"+t]=n;}});}y.prototype.isReactComponent={};var T$1$2=n.vnode;n.vnode=function(n){n.$$typeof=g$1$2,function(t){var r=n.type,e=n.props;if(e&&"string"==typeof r){var o={};for(var i in e)/^on(Ani|Tra)/.test(i)&&(e[i.toLowerCase()]=e[i],delete e[i]),o[i.toLowerCase()]=i;if(o.ondoubleclick&&(e.ondblclick=e[o.ondoubleclick],delete e[o.ondoubleclick]),o.onbeforeinput&&(e.onbeforeinput=e[o.onbeforeinput],delete e[o.onbeforeinput]),o.onchange&&("textarea"===r||"input"===r.toLowerCase()&&!/^fil|che|ra/i.test(e.type))){var u=o.oninput||"oninput";e[u]||(e[u]=e[o.onchange],delete e[o.onchange]);}}}();var t=n.type;t&&t.o&&n.ref&&(n.props.ref=n.ref,n.ref=null),"function"==typeof t&&!t.h&&t.prototype&&(L$2(t.prototype,"componentWillMount"),L$2(t.prototype,"componentWillReceiveProps"),L$2(t.prototype,"componentWillUpdate"),t.h=!0),T$1$2&&T$1$2(n);};var V$1=function(n,t){return n(t)};d$1$2({version:"16.8.0",Children:N$2,render:_$1$2,hydrate:_$1$2,unmountComponentAtNode:j$3,createPortal:k$3,createElement:S$1,createContext:L,createFactory:E$1$2,cloneElement:U$1,createRef:p,Fragment:d,isValidElement:O$2,findDOMNode:P$2,Component:y,PureComponent:W$1,memo:Z$1,forwardRef:D$2,unstable_batchedUpdates:V$1,Suspense:m$1$2,lazy:y$1$2},n$2);

    /*
    Copyright (c) 2018 Daybrush
    @name: @daybrush/utils
    license: MIT
    author: Daybrush
    repository: https://github.com/daybrush/utils
    @version 0.10.1
    */
    /**
    * divide text by comma.
    * @memberof Utils
    * @param {string} text - text to divide
    * @return {Array} divided texts
    * @example
    import {splitComma} from "@daybrush/utils";

    console.log(splitComma("a,b,c,d,e,f,g"));
    // ["a", "b", "c", "d", "e", "f", "g"]
    console.log(splitComma("'a,b',c,'d,e',f,g"));
    // ["'a,b'", "c", "'d,e'", "f", "g"]
    */

    function splitComma(text) {
      // divide comma(,)
      // "[^"]*"|'[^']*'
      var matches = text.match(/("[^"]*"|'[^']*'|[^,\s()]*\((?:[^()]*|\([^()]*\))*\)[^,\s()]*|[^,])+/g);
      return matches ? matches.map(function (str) {
        return str.trim();
      }) : [];
    }

    /*
    Copyright (c) 2019 Daybrush
    name: react-css-styler
    license: MIT
    author: Daybrush
    repository: https://github.com/daybrush/css-styler/tree/master/react-css-styler
    version: 0.4.0
    */

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */
    var extendStatics$2 = function (d, b) {
      extendStatics$2 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return extendStatics$2(d, b);
    };

    function __extends$2(d, b) {
      extendStatics$2(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign$2 = function () {
      __assign$2 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return __assign$2.apply(this, arguments);
    };
    function __rest$1(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function hash(str) {
      var hash = 5381,
          i    = str.length;

      while(i) {
        hash = (hash * 33) ^ str.charCodeAt(--i);
      }

      /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
       * integers. Since we want the results to be always positive, convert the
       * signed int to an unsigned by doing an unsigned bitshift. */
      return hash >>> 0;
    }

    var stringHash = hash;

    function getHash(str) {
      return stringHash(str).toString(36);
    }
    function injectStyle(className, css) {
      var style = document.createElement("style");
      style.setAttribute("type", "text/css");
      style.innerHTML = css.replace(/([^}{]*){/mg, function (all, selector) {
        return splitComma(selector).map(function (subSelector) {
          if (subSelector.indexOf(":global") > -1) {
            return subSelector.replace(/\:global/g, "");
          } else if (subSelector.indexOf(":host") > -1) {
            return "" + subSelector.replace(/\:host/g, "." + className);
          }

          return "." + className + " " + subSelector;
        }).join(", ") + "{";
      });
      (document.head || document.body).appendChild(style);
      return style;
    }

    function styled(Tag, css) {
      var injectClassName = "rCS" + getHash(css);
      var injectCount = 0;
      var injectElement;
      return (
        /*#__PURE__*/
        function (_super) {
          __extends$2(Styler, _super);

          function Styler(props) {
            return _super.call(this, props) || this;
          }

          Styler.prototype.render = function () {
            var _a = this.props,
                className = _a.className,
                attributes = __rest$1(_a, ["className"]);

            return S$1(Tag, __assign$2({
              className: className + " " + injectClassName
            }, attributes));
          };

          Styler.prototype.componentDidMount = function () {
            if (injectCount === 0) {
              injectElement = injectStyle(injectClassName, css);
            }

            ++injectCount;
          };

          Styler.prototype.componentWillUnmount = function () {
            --injectCount;

            if (injectCount === 0 && injectElement) {
              injectElement.parentNode.removeChild(injectElement);
            }
          };

          Styler.prototype.getElement = function () {
            return this.element || (this.element = P$2(this));
          };

          return Styler;
        }(y)
      );
    }

    /*
    Copyright (c) 2019 Daybrush
    name: preact-guides
    license: MIT
    author: Daybrush
    repository: https://github.com/daybrush/guides/blob/master/packages/preact-guides
    version: 0.2.0
    */

    var t$3,r$4,u$4=[],i$4=n.__r;n.__r=function(n){i$4&&i$4(n),t$3=0,(r$4=n.__c).__H&&(r$4.__H.t=A$3(r$4.__H.t));};var f$4=n.diffed;n.diffed=function(n){f$4&&f$4(n);var t=n.__c;if(t){var r=t.__H;r&&(r.u=(r.u.some(function(n){n.ref&&(n.ref.current=n.createHandle());}),[]),r.i=A$3(r.i));}};var o$4=n.unmount;function e$4(t){n.__h&&n.__h(r$4);var u=r$4.__H||(r$4.__H={o:[],t:[],i:[],u:[]});return t>=u.o.length&&u.o.push({}),u.o[t]}function c$4(n){return a$3(q$3,n)}function a$3(n,u,i){var f=e$4(t$3++);return f.__c||(f.__c=r$4,f.v=[i?i(u):q$3(void 0,u),function(t){var r=n(f.v[0],t);f.v[0]!==r&&(f.v[0]=r,f.__c.setState({}));}]),f.v}function v$3(n,u){var i=e$4(t$3++);h$3(i.m,u)&&(i.v=n,i.m=u,r$4.__H.t.push(i),T$4(r$4));}function m$3(n,u){var i=e$4(t$3++);h$3(i.m,u)&&(i.v=n,i.m=u,r$4.__H.i.push(i));}function d$3(n){return l$2(function(){return {current:n}},[])}function p$3(n,u,i){var f=e$4(t$3++);h$3(f.m,i)&&(f.m=i,r$4.__H.u.push({ref:n,createHandle:u}));}function l$2(n,r){var u=e$4(t$3++);return h$3(u.m,r)?(u.m=r,u.p=n,u.v=n()):u.v}function s$3(n,t){return l$2(function(){return n},t)}function y$3(n){var u=r$4.context[n.__c];if(!u)return n.__p;var i=e$4(t$3++);return null==i.v&&(i.v=!0,u.sub(r$4)),u.props.value}function _$5(t,r){n.useDebugValue&&n.useDebugValue(r?r(t):t);}n.unmount=function(n){o$4&&o$4(n);var t=n.__c;if(t){var r=t.__H;r&&r.o.forEach(function(n){return n.l&&n.l()});}};var T$4=function(){};function g$4(){u$4.some(function(n){n.s=!1,n.__P&&(n.__H.t=A$3(n.__H.t));}),u$4=[];}if("undefined"!=typeof window){var w$4=n.requestAnimationFrame;T$4=function(t){(!t.s&&(t.s=!0)&&1===u$4.push(t)||w$4!==n.requestAnimationFrame)&&(w$4=n.requestAnimationFrame,(n.requestAnimationFrame||function(n){var t=function(){clearTimeout(r),cancelAnimationFrame(u),setTimeout(n);},r=setTimeout(t,100),u=requestAnimationFrame(t);})(g$4));};}function A$3(n){return n.forEach(E$3),n.forEach(F$4),[]}function E$3(n){n.l&&n.l();}function F$4(n){var t=n.v();"function"==typeof t&&(n.l=t);}function h$3(n,t){return !n||t.some(function(t,r){return t!==n[r]})}function q$3(n,t){return "function"==typeof t?t(n):t}

    var n$3 = ({
      useState: c$4,
      useReducer: a$3,
      useEffect: v$3,
      useLayoutEffect: m$3,
      useRef: d$3,
      useImperativeHandle: p$3,
      useMemo: l$2,
      useCallback: s$3,
      useContext: y$3,
      useDebugValue: _$5
    });

    function d$1$3(n,t){for(var r in t)n[r]=t[r];return n}function p$1$3(n){var t=n.parentNode;t&&t.removeChild(n);}var h$1$3=n.__e;function m$1$3(){this.t=[];}function y$1$3(n){var t,e,o;function i(i){if(t||(t=n()).then(function(n){e=n.default;},function(n){o=n;}),o)throw o;if(!e)throw t;return h(e,i)}return i.displayName="Lazy",i.o=!0,i}n.__e=function(n,t,r){if(n.then&&r)for(var e,o=t;o=o.__p;)if((e=o.__c)&&e.i)return r&&(t.__e=r.__e,t.__k=r.__k),void e.i(n);h$1$3(n,t,r);},(m$1$3.prototype=new y).i=function(n){var t=this;t.t.push(n);var r=function(){t.t[t.t.indexOf(n)]=t.t[t.t.length-1],t.t.pop(),0==t.t.length&&(A(t.props.fallback),t.__v.__e=null,t.__v.__k=t.state.u,t.setState({u:null}));};null==t.state.u&&(t.setState({u:t.__v.__k}),function n(t){for(var r=0;r<t.length;r++){var e=t[r];null!=e&&("function"!=typeof e.type&&e.__e?p$1$3(e.__e):e.__k&&n(e.__k));}}(t.__v.__k),t.__v.__k=[]),n.then(r,r);},m$1$3.prototype.render=function(n,t){return t.u?n.fallback:n.children};var g$1$3="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,x$3=/^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/,C$3=n.event;function E$1$3(n){return S$2.bind(null,n)}function _$1$3(n,t,r){if(null==t.__k)for(;t.firstChild;)p$1$3(t.firstChild);return E(n,t),"function"==typeof r&&r(),n?n.__c:null}n.event=function(n){return C$3&&(n=C$3(n)),n.persist=function(){},n.nativeEvent=n};var w$1$3=function(){};function A$1$3(n){var t=this,r=n.container,o=h(w$1$3,{context:t.context},n.vnode);return t.l&&t.l!==r&&(t.s.parentNode&&t.l.removeChild(t.s),A(t.v),t.p=!1),n.vnode?t.p?(r.__k=t.__k,E(o,r),t.__k=r.__k):(t.s=document.createTextNode(""),H("",r),r.insertBefore(t.s,r.firstChild),t.p=!0,t.l=r,E(o,r,t.s),t.__k=this.s.__k):t.p&&(t.s.parentNode&&t.l.removeChild(t.s),A(t.v)),t.v=o,t.componentWillUnmount=function(){t.s.parentNode&&t.l.removeChild(t.s),A(t.v);},null}function k$4(n,t){return h(A$1$3,{vnode:n,container:t})}w$1$3.prototype.getChildContext=function(){return this.props.context},w$1$3.prototype.render=function(n){return n.children};var F$1$3=function(n,t){return n?b(n).map(t):null},N$3={map:F$1$3,forEach:F$1$3,count:function(n){return n?b(n).length:0},only:function(n){if(1!==(n=b(n)).length)throw new Error("Children.only() expects only one child.");return n[0]},toArray:b};function S$2(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];var r=h.apply(void 0,n),e=r.type,o=r.props;return "function"!=typeof e&&(o.defaultValue&&(o.value||0===o.value||(o.value=o.defaultValue),delete o.defaultValue),Array.isArray(o.value)&&o.multiple&&"select"===e&&(b(o.children).forEach(function(n){-1!=o.value.indexOf(n.props.value)&&(n.props.selected=!0);}),delete o.value),function(n,t){var r,e,o;for(o in t)if(r=x$3.test(o))break;if(r)for(o in e=n.props={},t)e[x$3.test(o)?o.replace(/([A-Z0-9])/,"-$1").toLowerCase():o]=t[o];}(r,o)),r.preactCompatNormalized=!1,R$3(r)}function R$3(n){return n.preactCompatNormalized=!0,function(n){var t=n.props;(t.class||t.className)&&(z$4.enumerable="className"in t,t.className&&(t.class=t.className),Object.defineProperty(t,"className",z$4));}(n),n}function U$2(n){return O$3(n)?R$3(I.apply(null,arguments)):n}function O$3(n){return !!n&&n.$$typeof===g$1$3}function j$4(n){return !!n.__k&&(E(null,n),!0)}var z$4={configurable:!0,get:function(){return this.class}};function M$2(n,t){for(var r in n)if("__source"!==r&&!(r in t))return !0;for(var e in t)if("__source"!==e&&n[e]!==t[e])return !0;return !1}function P$3(n){return n&&(n.base||1===n.nodeType&&n)||null}var W$2=function(n){function t(t){n.call(this,t),this.isPureReactComponent=!0;}return n&&(t.__proto__=n),(t.prototype=Object.create(n&&n.prototype)).constructor=t,t.prototype.shouldComponentUpdate=function(n,t){return M$2(this.props,n)||M$2(this.state,t)},t}(y);function Z$2(n,t){function r(n){var r=this.props.ref,e=r==n.ref;return !e&&r&&(r.call?r(null):r.current=null),(t?!t(this.props,n):M$2(this.props,n))||!e}function e(t){return this.shouldComponentUpdate=r,h(n,d$1$3({},t))}return e.prototype.isReactComponent=!0,e.displayName="Memo("+(n.displayName||n.name)+")",e.o=!0,e}function D$3(n){function t(t){var r=t.ref;return delete t.ref,n(t,r)}return t.prototype.isReactComponent=!0,t.o=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}function L$3(n,t){n["UNSAFE_"+t]&&!n[t]&&Object.defineProperty(n,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(n){this["UNSAFE_"+t]=n;}});}y.prototype.isReactComponent={};var T$1$3=n.vnode;n.vnode=function(n){n.$$typeof=g$1$3,function(t){var r=n.type,e=n.props;if(e&&"string"==typeof r){var o={};for(var i in e)/^on(Ani|Tra)/.test(i)&&(e[i.toLowerCase()]=e[i],delete e[i]),o[i.toLowerCase()]=i;if(o.ondoubleclick&&(e.ondblclick=e[o.ondoubleclick],delete e[o.ondoubleclick]),o.onbeforeinput&&(e.onbeforeinput=e[o.onbeforeinput],delete e[o.onbeforeinput]),o.onchange&&("textarea"===r||"input"===r.toLowerCase()&&!/^fil|che|ra/i.test(e.type))){var u=o.oninput||"oninput";e[u]||(e[u]=e[o.onchange],delete e[o.onchange]);}}}();var t=n.type;t&&t.o&&n.ref&&(n.props.ref=n.ref,n.ref=null),"function"==typeof t&&!t.h&&t.prototype&&(L$3(t.prototype,"componentWillMount"),L$3(t.prototype,"componentWillReceiveProps"),L$3(t.prototype,"componentWillUpdate"),t.h=!0),T$1$3&&T$1$3(n);};var V$2=function(n,t){return n(t)};d$1$3({version:"16.8.0",Children:N$3,render:_$1$3,hydrate:_$1$3,unmountComponentAtNode:j$4,createPortal:k$4,createElement:S$2,createContext:L,createFactory:E$1$3,cloneElement:U$2,createRef:p,Fragment:d,isValidElement:O$3,findDOMNode:P$3,Component:y,PureComponent:W$2,memo:Z$2,forwardRef:D$3,unstable_batchedUpdates:V$2,Suspense:m$1$3,lazy:y$1$3},n$3);

    /*
    Copyright (c) 2019 Daybrush
    name: @scena/react-guides
    license: MIT
    author: Daybrush
    repository: https://github.com/daybrush/guides/blob/master/packages/react-guides
    version: 0.2.2
    */

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */
    var extendStatics$3 = function (d, b) {
      extendStatics$3 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return extendStatics$3(d, b);
    };

    function __extends$3(d, b) {
      extendStatics$3(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function prefix() {
      var classNames = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        classNames[_i] = arguments[_i];
      }

      return prefixNames.apply(void 0, ["scena-"].concat(classNames));
    }

    var RULER = prefix("ruler");
    var ADDER = prefix("guide", "adder");
    var GUIDES = prefix("guides");
    var GUIDE = prefix("guide");
    var DRAGGING = prefix("dragging");

    var GuidesElement = styled("div", prefixCSS("scena-", "\n{\n    position: relative;\n}\ncanvas {\n    position: relative;\n}\n.guides {\n    position: absolute;\n    top: 0;\n    left: 0;\n    will-change: transform;\n    z-index: 2000;\n}\n:host.horizontal .guides {\n    width: 100%;\n    height: 0;\n    top: 30px;\n}\n:host.vertical .guides {\n    height: 100%;\n    width: 0;\n    left: 30px;\n}\n.guide {\n    position: absolute;\n    background: #f33;\n    z-index: 2;\n}\n.guide.dragging:before {\n    position: absolute;\n    content: \"\";\n    width: 100%;\n    height: 100%;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n:host.horizontal .guide {\n    width: 100%;\n    height: 1px;\n    cursor: row-resize;\n}\n:host.vertical .guide {\n    width: 1px;\n    height: 100%;\n    cursor: col-resize;\n}\n.mobile :host.horizontal .guide {\n    transform: scale(1, 2);\n}\n.mobile :host.vertical .guide {\n    transform: scale(2, 1);\n}\n:host.horizontal .guide:before {\n    height: 20px;\n}\n:host.vertical .guide:before {\n    width: 20px;\n}\n.adder {\n    display: none;\n}\n.adder.dragging {\n    display: block;\n}\n"));

    var Guides =
    /*#__PURE__*/
    function (_super) {
      __extends$3(Guides, _super);

      function Guides() {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.state = {
          guides: []
        };
        _this.scrollPos = 0;
        _this.guideElements = [];

        _this.onDragStart = function (_a) {
          var datas = _a.datas,
              clientX = _a.clientX,
              clientY = _a.clientY,
              inputEvent = _a.inputEvent;
          var isHorizontal = _this.props.type === "horizontal";

          var rect = _this.guidesElement.getBoundingClientRect();

          datas.offset = isHorizontal ? rect.top : rect.left;
          addClass(datas.target, DRAGGING);

          _this.onDrag({
            datas: datas,
            clientX: clientX,
            clientY: clientY
          });

          inputEvent.stopPropagation();
          inputEvent.preventDefault();
        };

        _this.onDrag = function (_a) {
          var datas = _a.datas,
              clientX = _a.clientX,
              clientY = _a.clientY;
          var type = _this.props.type;
          var isHorizontal = type === "horizontal";
          var nextPos = Math.round((isHorizontal ? clientY : clientX) - datas.offset);
          datas.target.style.transform = _this.getTranslateName() + "(" + nextPos + "px)";
          return nextPos;
        };

        _this.onDragEnd = function (_a) {
          var datas = _a.datas,
              clientX = _a.clientX,
              clientY = _a.clientY;

          var pos = _this.onDrag({
            datas: datas,
            clientX: clientX,
            clientY: clientY
          });

          var guides = _this.state.guides;
          var setGuides = _this.props.setGuides;
          var guidePos = Math.round(pos / _this.props.zoom);
          removeClass(datas.target, DRAGGING);

          if (datas.fromRuler) {
            if (pos >= _this.scrollPos && guides.indexOf(guidePos) < 0) {
              _this.setState({
                guides: guides.concat([guidePos])
              }, function () {
                setGuides(_this.state.guides);
              });
            }
          } else {
            var index = datas.target.getAttribute("data-index");

            if (pos < _this.scrollPos || guides.indexOf(guidePos) > -1) {
              guides.splice(index, 1);
            } else {
              guides[index] = guidePos;
            }

            _this.setState({
              guides: guides.slice()
            }, function () {
              setGuides(_this.state.guides);
            });
          }
        };

        return _this;
      }

      var __proto = Guides.prototype;

      __proto.render = function () {
        var _a = this.props,
            className = _a.className,
            type = _a.type,
            width = _a.width,
            height = _a.height,
            unit = _a.unit,
            zoom = _a.zoom,
            style = _a.style,
            rulerStyle = _a.rulerStyle,
            backgroundColor = _a.backgroundColor,
            lineColor = _a.lineColor;
        return S$2(GuidesElement, {
          ref: ref(this, "manager"),
          className: prefix("manager", type) + " " + className,
          style: style
        }, S$2(Ruler, {
          ref: ref(this, "ruler"),
          type: type,
          width: width,
          height: height,
          unit: unit,
          zoom: zoom,
          backgroundColor: backgroundColor,
          lineColor: lineColor,
          style: rulerStyle
        }), S$2("div", {
          className: GUIDES,
          ref: ref(this, "guidesElement")
        }, S$2("div", {
          className: ADDER,
          ref: ref(this, "adderElement")
        }), this.renderGuides()));
      };

      __proto.renderGuides = function () {
        var _this = this;

        var _a = this.props,
            type = _a.type,
            zoom = _a.zoom;
        var translateName = type === "horizontal" ? "translateY" : "translateX";
        var guides = this.state.guides;
        this.guideElements = [];
        return guides.map(function (pos, i) {
          return S$2("div", {
            className: prefix("guide", type),
            ref: refs(_this, "guideElements", i),
            key: i,
            "data-index": i,
            style: {
              transform: translateName + "(" + pos * zoom + "px)"
            }
          });
        });
      };

      __proto.componentDidMount = function () {
        var _this = this;

        this.dragger = new Dragger(this.manager.getElement(), {
          container: document.body,
          dragstart: function (e) {
            var target = e.inputEvent.target;
            var datas = e.datas;

            if (target === _this.ruler.canvasElement) {
              e.datas.fromRuler = true;
              datas.target = _this.adderElement;
            } else if (!hasClass(target, GUIDE)) {
              return false;
            } else {
              datas.target = target;
            }

            _this.onDragStart(e);
          },
          drag: this.onDrag,
          dragend: this.onDragEnd
        });
      };

      __proto.componentWillUnmount = function () {
        this.dragger.unset();
      };

      __proto.getGuides = function () {
        return this.state.guides;
      };

      __proto.scrollGuides = function (pos) {
        var zoom = this.props.zoom;
        var guidesElement = this.guidesElement;
        this.scrollPos = pos;
        guidesElement.style.transform = this.getTranslateName() + "(" + -pos * zoom + "px)";
        var guides = this.state.guides;
        this.guideElements.forEach(function (el, i) {
          if (!el) {
            return;
          }

          el.style.display = -pos + guides[i] < 0 ? "none" : "block";
        });
      };

      __proto.resize = function () {
        this.ruler.resize();
      };

      __proto.scroll = function (pos) {
        this.ruler.scroll(pos);
      };

      __proto.getTranslateName = function () {
        return this.props.type === "horizontal" ? "translateY" : "translateX";
      };

      Guides.defaultProps = {
        className: "",
        type: "horizontal",
        setGuides: function () {},
        zoom: 1,
        style: {
          width: "100%",
          height: "100%"
        }
      };
      return Guides;
    }(W$2);

    var InnerGuides =
    /*#__PURE__*/
    function (_super) {
      __extends(InnerGuides, _super);

      function InnerGuides(props) {
        var _this = _super.call(this, props) || this;

        _this.state = {};
        _this.state = _this.props;
        return _this;
      }

      var __proto = InnerGuides.prototype;

      __proto.render = function () {
        var _a = this.state,
            container = _a.container,
            state = __rest(_a, ["container"]);

        return z$1(h(Guides, __assign({
          ref: ref(this, "preactGuides")
        }, state)), container);
      };

      return InnerGuides;
    }(y);

    var Guides$1 =
    /*#__PURE__*/
    function () {
      function Guides(container, options) {
        if (options === void 0) {
          options = {};
        }

        this.tempElement = document.createElement("div");
        E(h(InnerGuides, __assign({
          ref: ref(this, "innerGuides")
        }, options, {
          container: container
        })), this.tempElement);
      }

      var __proto = Guides.prototype;

      __proto.scroll = function (scrollPos) {
        this.getPreactGuides().scroll(scrollPos);
      };

      __proto.scrollGuides = function (scrollPos) {
        this.getPreactGuides().scrollGuides(scrollPos);
      };

      __proto.resize = function () {
        this.getPreactGuides().resize();
      };

      __proto.getGuides = function () {
        return this.getPreactGuides().getGuides();
      };

      __proto.setState = function (state, callback) {
        this.innerGuides.setState(state, callback);
      };

      __proto.destroy = function () {
        E("", this.tempElement);
        this.tempElement = null;
        this.innerGuides = null;
      };

      __proto.getPreactGuides = function () {
        return this.innerGuides.preactGuides;
      };

      Guides = __decorate([Properties(PROPERTIES, function (prototype, property) {
        Object.defineProperty(prototype, property, {
          get: function () {
            return this.getPreactGuides().props[property];
          },
          set: function (value) {
            var _a;

            this.innerGuides.setState((_a = {}, _a[property] = value, _a));
          },
          enumerable: true,
          configurable: true
        });
      })], Guides);
      return Guides;
    }();

    Guides$1.PROPERTIES = PROPERTIES;

    return Guides$1;

})));
//# sourceMappingURL=guides.js.map
