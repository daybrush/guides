/*
Copyright (c) 2019 Daybrush
name: @scena/guides
license: MIT
author: Daybrush
repository: git+https://github.com/daybrush/guides.git
version: 0.2.9
*/
import { ref, Properties } from 'framework-utils';
import { options, Component, cloneElement, _unmount, h, render, hydrate } from 'preact';
import PreactGuides from 'preact-guides';

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

var PROPERTIES = ["setGuides", "type", "width", "height", "rulerStyle", "unit", "zoom", "style", "backgroundColor", "lineColor", "container"];

var u,r,i=[],o=options.__r,f=options.diffed,c=options.__c,e=options.unmount;function F(){i.some(function(n){n.__P&&(n.__H.u.forEach(_),n.__H.u.forEach(g),n.__H.u=[]);}),i=[];}function _(n){n.m&&n.m();}function g(n){var t=n.i();"function"==typeof t&&(n.m=t);}options.__r=function(n){o&&o(n),(u=n.__c).__H&&(u.__H.u.forEach(_),u.__H.u.forEach(g),u.__H.u=[]);},options.diffed=function(t){f&&f(t);var u=t.__c;if(u){var o=u.__H;o&&o.u.length&&(1!==i.push(u)&&r===options.requestAnimationFrame||((r=options.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),cancelAnimationFrame(t),setTimeout(n);},r=setTimeout(u,100);"undefined"!=typeof window&&(t=requestAnimationFrame(u));})(F));}},options.__c=function(n,t){t.some(function(n){n.__h.forEach(_),n.__h=n.__h.filter(function(n){return !n.i||g(n)});}),c&&c(n,t);},options.unmount=function(n){e&&e(n);var t=n.__c;if(t){var u=t.__H;u&&u.t.forEach(function(n){return n.m&&n.m()});}};

function _$1(n){var t=n.parentNode;t&&t.removeChild(n);}var k=options.__e;function w(n){this.__u=[],this.__f=n.fallback;}options.__e=function(n,t,e){if(n.then&&e)for(var r,o=t;o=o.__;)if((r=o.__c)&&r.o)return e&&(t.__e=e.__e,t.__k=e.__k),void r.o(n);k(n,t,e);},(w.prototype=new Component).o=function(n){var t=this;t.__u.push(n);var e=function(){t.__u[t.__u.indexOf(n)]=t.__u[t.__u.length-1],t.__u.pop(),0==t.__u.length&&(t.__f&&_unmount(t.__f),t.__v.__e=null,t.__v.__k=t.state.u,t.setState({u:null}));};null==t.state.u&&(t.__f=t.__f&&cloneElement(t.__f),t.setState({u:t.__v.__k}),function n(t){for(var e=0;e<t.length;e++){var r=t[e];null!=r&&("function"!=typeof r.type&&r.__e?_$1(r.__e):r.__k&&n(r.__k));}}(t.__v.__k),t.__v.__k=[]),n.then(e,e);},w.prototype.render=function(n,t){return t.u?this.__f:n.children};var F$1="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,R=options.event;options.event=function(n){return R&&(n=R(n)),n.persist=function(){},n.nativeEvent=n};var O=function(){function n(){}var t=n.prototype;return t.getChildContext=function(){return this.props.context},t.render=function(n){return n.children},n}();function j(n){var t=this,e=n.container,r=h(O,{context:t.context},n.vnode);return t.i&&t.i!==e&&(t.l.parentNode&&t.i.removeChild(t.l),_unmount(t.s),t.v=!1),n.vnode?t.v?(e.__k=t.__k,render(r,e),t.__k=e.__k):(t.l=document.createTextNode(""),hydrate("",e),e.appendChild(t.l),t.v=!0,t.i=e,render(r,e,t.l),t.__k=this.l.__k):t.v&&(t.l.parentNode&&t.i.removeChild(t.l),_unmount(t.s)),t.s=r,t.componentWillUnmount=function(){t.l.parentNode&&t.i.removeChild(t.l),_unmount(t.s);},null}function z(n,t){return h(j,{vnode:n,container:t})}function T(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}var q=function(n){var t,e;function r(t){var e;return (e=n.call(this,t)||this).isPureReactComponent=!0,e}return e=n,(t=r).prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e,r.prototype.shouldComponentUpdate=function(n,t){return T(this.props,n)||T(this.state,t)},r}(Component);function J(n,t){n["UNSAFE_"+t]&&!n[t]&&Object.defineProperty(n,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(n){this["UNSAFE_"+t]=n;}});}Component.prototype.isReactComponent={};var K=options.vnode;options.vnode=function(n){n.$$typeof=F$1,function(t){var e=n.type,r=n.props;if(r&&"string"==typeof e){var o={};for(var u in r)/^on(Ani|Tra)/.test(u)&&(r[u.toLowerCase()]=r[u],delete r[u]),o[u.toLowerCase()]=u;if(o.ondoubleclick&&(r.ondblclick=r[o.ondoubleclick],delete r[o.ondoubleclick]),o.onbeforeinput&&(r.onbeforeinput=r[o.onbeforeinput],delete r[o.onbeforeinput]),o.onchange&&("textarea"===e||"input"===e.toLowerCase()&&!/^fil|che|ra/i.test(r.type))){var i=o.oninput||"oninput";r[i]||(r[i]=r[o.onchange],delete r[o.onchange]);}}}();var t=n.type;t&&t.t&&n.ref&&(n.props.ref=n.ref,n.ref=null),"function"==typeof t&&!t.p&&t.prototype&&(J(t.prototype,"componentWillMount"),J(t.prototype,"componentWillReceiveProps"),J(t.prototype,"componentWillUpdate"),t.p=!0),K&&K(n);};

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

    return z(h(PreactGuides, __assign({
      ref: ref(this, "preactGuides")
    }, state)), container);
  };

  return InnerGuides;
}(Component);

var Guides =
/*#__PURE__*/
function () {
  function Guides(container, options) {
    if (options === void 0) {
      options = {};
    }

    this.tempElement = document.createElement("div");
    render(h(InnerGuides, __assign({
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
    render("", this.tempElement);
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

export default Guides;
export { PROPERTIES };
//# sourceMappingURL=guides.esm.js.map
