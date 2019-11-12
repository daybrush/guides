/*
Copyright (c) 2019 Daybrush
name: @scena/guides
license: MIT
author: Daybrush
repository: git+https://github.com/daybrush/guides.git
version: 0.2.3
*/
'use strict';

var frameworkUtils = require('framework-utils');
var preact = require('preact');
var Dragger = require('@daybrush/drag');
var utils = require('@daybrush/utils');

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

var r,u=[],i=preact.options.__r;preact.options.__r=function(n){i&&i(n),(r=n.__c).__H&&(r.__H.t.forEach(g),r.__H.t.forEach(q),r.__H.t=[]);};var o=preact.options.diffed;preact.options.diffed=function(n){o&&o(n);var t=n.__c;if(t){var r=t.__H;r&&r.t.length&&A(u.push(t));}};var f=preact.options.__c;preact.options.__c=function(n,t){t.some(function(n){n.__h.forEach(g),n.__h=n.__h.filter(function(n){return !n.u||q(n)});}),f&&f(n,t);};var c=preact.options.unmount;preact.options.unmount=function(n){c&&c(n);var t=n.__c;if(t){var r=t.__H;r&&r.i.forEach(function(n){return n.m&&n.m()});}};var A=function(){};function F(){u.some(function(n){n.__P&&(n.__H.t.forEach(g),n.__H.t.forEach(q),n.__H.t=[]);}),u=[];}if("undefined"!=typeof window){var _=preact.options.requestAnimationFrame;A=function(t){1!==t&&_===preact.options.requestAnimationFrame||((_=preact.options.requestAnimationFrame)||function(n){var t=function(){clearTimeout(r),cancelAnimationFrame(u),setTimeout(n);},r=setTimeout(t,100),u=requestAnimationFrame(t);})(F);};}function g(n){n.m&&n.m();}function q(n){var t=n.u();"function"==typeof t&&(n.m=t);}

function E(n){var t=n.parentNode;t&&t.removeChild(n);}var _$1=preact.options.__e;function k(n){this.__u=[],this.__f=n.fallback;}preact.options.__e=function(n,t,e){if(n.then&&e)for(var r,o=t;o=o.__p;)if((r=o.__c)&&r.o)return e&&(t.__e=e.__e,t.__k=e.__k),void r.o(n);_$1(n,t,e);},(k.prototype=new preact.Component).o=function(n){var t=this;t.__u.push(n);var e=function(){t.__u[t.__u.indexOf(n)]=t.__u[t.__u.length-1],t.__u.pop(),0==t.__u.length&&(t.__f&&preact._unmount(t.__f),t.__v.__e=null,t.__v.__k=t.state.u,t.setState({u:null}));};null==t.state.u&&(t.__f=t.__f&&preact.cloneElement(t.__f),t.setState({u:t.__v.__k}),function n(t){for(var e=0;e<t.length;e++){var r=t[e];null!=r&&("function"!=typeof r.type&&r.__e?E(r.__e):r.__k&&n(r.__k));}}(t.__v.__k),t.__v.__k=[]),n.then(e,e);},k.prototype.render=function(n,t){return t.u?this.__f:n.children};var S="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,F$1=/^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/,N=preact.options.event;preact.options.event=function(n){return N&&(n=N(n)),n.persist=function(){},n.nativeEvent=n};var M=function(){};function O(n){var t=this,e=n.container,r=preact.h(M,{context:t.context},n.vnode);return t.i&&t.i!==e&&(t.l.parentNode&&t.i.removeChild(t.l),preact._unmount(t.s),t.v=!1),n.vnode?t.v?(e.__k=t.__k,preact.render(r,e),t.__k=e.__k):(t.l=document.createTextNode(""),preact.hydrate("",e),e.appendChild(t.l),t.v=!0,t.i=e,preact.render(r,e,t.l),t.__k=this.l.__k):t.v&&(t.l.parentNode&&t.i.removeChild(t.l),preact._unmount(t.s)),t.s=r,t.componentWillUnmount=function(){t.l.parentNode&&t.i.removeChild(t.l),preact._unmount(t.s);},null}function j(n,t){return preact.h(O,{vnode:n,container:t})}M.prototype.getChildContext=function(){return this.props.context},M.prototype.render=function(n){return n.children};function W(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];var e=preact.h.apply(void 0,n),r=e.type,o=e.props;return "function"!=typeof r&&(o.defaultValue&&(o.value||0===o.value||(o.value=o.defaultValue),delete o.defaultValue),Array.isArray(o.value)&&o.multiple&&"select"===r&&(preact.toChildArray(o.children).forEach(function(n){-1!=o.value.indexOf(n.props.value)&&(n.props.selected=!0);}),delete o.value),function(n,t){var e,r,o;for(o in t)if(e=F$1.test(o))break;if(e)for(o in r=n.props={},t)r[F$1.test(o)?o.replace(/([A-Z0-9])/,"-$1").toLowerCase():o]=t[o];}(e,o)),e.preactCompatNormalized=!1,D(e)}function D(n){return n.preactCompatNormalized=!0,function(n){var t=n.props;(t.class||t.className)&&(H.enumerable="className"in t,t.className&&(t.class=t.className),Object.defineProperty(t,"className",H));}(n),n}var H={configurable:!0,get:function(){return this.class}};function I(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}function T(n){return n&&(n.base||1===n.nodeType&&n)||null}var $=function(n){function t(t){n.call(this,t),this.isPureReactComponent=!0;}return n&&(t.__proto__=n),(t.prototype=Object.create(n&&n.prototype)).constructor=t,t.prototype.shouldComponentUpdate=function(n,t){return I(this.props,n)||I(this.state,t)},t}(preact.Component);function G(n,t){n["UNSAFE_"+t]&&!n[t]&&Object.defineProperty(n,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(n){this["UNSAFE_"+t]=n;}});}preact.Component.prototype.isReactComponent={};var J=preact.options.vnode;preact.options.vnode=function(n){n.$$typeof=S,function(t){var e=n.type,r=n.props;if(r&&"string"==typeof e){var o={};for(var u in r)/^on(Ani|Tra)/.test(u)&&(r[u.toLowerCase()]=r[u],delete r[u]),o[u.toLowerCase()]=u;if(o.ondoubleclick&&(r.ondblclick=r[o.ondoubleclick],delete r[o.ondoubleclick]),o.onbeforeinput&&(r.onbeforeinput=r[o.onbeforeinput],delete r[o.onbeforeinput]),o.onchange&&("textarea"===e||"input"===e.toLowerCase()&&!/^fil|che|ra/i.test(r.type))){var i=o.oninput||"oninput";r[i]||(r[i]=r[o.onchange],delete r[o.onchange]);}}}();var t=n.type;t&&t.t&&n.ref&&(n.props.ref=n.ref,n.ref=null),"function"==typeof t&&!t.p&&t.prototype&&(G(t.prototype,"componentWillMount"),G(t.prototype,"componentWillReceiveProps"),G(t.prototype,"componentWillUpdate"),t.p=!0),J&&J(n);};

/*
Copyright (c) 2019 Daybrush
name: preact-css-styler
license: MIT
author: Daybrush
repository: https://github.com/daybrush/css-styler/tree/master/preact-css-styler
version: 0.4.1
*/

/*
Copyright (c) 2018 Daybrush
@name: @daybrush/utils
license: MIT
author: Daybrush
repository: https://github.com/daybrush/utils
@version 0.10.0
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
      __extends$1(Styler, _super);

      function Styler(props) {
        return _super.call(this, props) || this;
      }

      Styler.prototype.render = function () {
        var _a = this.props,
            className = _a.className,
            attributes = __rest$1(_a, ["className"]);

        return W(Tag, __assign$1({
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
        return this.element || (this.element = T(this));
      };

      return Styler;
    }(preact.Component)
  );
}

/*
Copyright (c) 2019 Daybrush
name: preact-guides
license: MIT
author: Daybrush
repository: https://github.com/daybrush/guides/blob/master/packages/preact-guides
version: 0.1.5
*/

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

var Ruler =
/*#__PURE__*/
function (_super) {
  __extends$2(Ruler, _super);

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
    return W("canvas", {
      ref: frameworkUtils.ref(this, "canvasElement"),
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
}($);

/*
Copyright (c) 2019 Daybrush
name: @scena/react-guides
license: MIT
author: Daybrush
repository: https://github.com/daybrush/guides/blob/master/packages/react-guides
version: 0.1.3
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
var extendStatics$1$1 = function (d, b) {
  extendStatics$1$1 = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return extendStatics$1$1(d, b);
};

function __extends$1$1(d, b) {
  extendStatics$1$1(d, b);

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

  return frameworkUtils.prefixNames.apply(void 0, ["scena-"].concat(classNames));
}

var RULER = prefix("ruler");
var ADDER = prefix("guide", "adder");
var GUIDES = prefix("guides");
var GUIDE = prefix("guide");
var DRAGGING = prefix("dragging");

var GuidesElement = styled("div", frameworkUtils.prefixCSS("scena-", "\n{\n    position: relative;\n}\ncanvas {\n    position: relative;\n}\n.guides {\n    position: absolute;\n    top: 0;\n    left: 0;\n    will-change: transform;\n    z-index: 2000;\n}\n:host.horizontal .guides {\n    width: 100%;\n    height: 0;\n    top: 30px;\n}\n:host.vertical .guides {\n    height: 100%;\n    width: 0;\n    left: 30px;\n}\n.guide {\n    position: absolute;\n    background: #f33;\n    z-index: 2;\n}\n.guide.dragging:before {\n    position: absolute;\n    content: \"\";\n    width: 100%;\n    height: 100%;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n:host.horizontal .guide {\n    width: 100%;\n    height: 1px;\n    cursor: row-resize;\n}\n:host.vertical .guide {\n    width: 1px;\n    height: 100%;\n    cursor: col-resize;\n}\n.mobile :host.horizontal .guide {\n    transform: scale(1, 2);\n}\n.mobile :host.vertical .guide {\n    transform: scale(2, 1);\n}\n:host.horizontal .guide:before {\n    height: 20px;\n}\n:host.vertical .guide:before {\n    width: 20px;\n}\n.adder {\n    display: none;\n}\n.adder.dragging {\n    display: block;\n}\n"));

var Guides =
/*#__PURE__*/
function (_super) {
  __extends$1$1(Guides, _super);

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
      utils.addClass(datas.target, DRAGGING);

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
      utils.removeClass(datas.target, DRAGGING);

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
        type = _a.type,
        width = _a.width,
        height = _a.height,
        unit = _a.unit,
        zoom = _a.zoom,
        style = _a.style,
        rulerStyle = _a.rulerStyle,
        backgroundColor = _a.backgroundColor,
        lineColor = _a.lineColor;
    return W(GuidesElement, {
      ref: frameworkUtils.ref(this, "manager"),
      className: prefix("manager", type),
      style: style
    }, W(Ruler, {
      ref: frameworkUtils.ref(this, "ruler"),
      type: type,
      width: width,
      height: height,
      unit: unit,
      zoom: zoom,
      backgroundColor: backgroundColor,
      lineColor: lineColor,
      style: rulerStyle
    }), W("div", {
      className: GUIDES,
      ref: frameworkUtils.ref(this, "guidesElement")
    }, W("div", {
      className: ADDER,
      ref: frameworkUtils.ref(this, "adderElement")
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
      return W("div", {
        className: prefix("guide", type),
        ref: frameworkUtils.refs(_this, "guideElements", i),
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
        } else if (!utils.hasClass(target, GUIDE)) {
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
    setGuides: function () {},
    zoom: 1,
    style: {
      width: "100%",
      height: "100%"
    }
  };
  return Guides;
}($);

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

    return j(preact.h(Guides, __assign({
      ref: frameworkUtils.ref(this, "preactGuides")
    }, state)), container);
  };

  return InnerGuides;
}(preact.Component);

var Guides$1 =
/*#__PURE__*/
function () {
  function Guides(container, options) {
    if (options === void 0) {
      options = {};
    }

    this.tempElement = document.createElement("div");
    preact.render(preact.h(InnerGuides, __assign({
      ref: frameworkUtils.ref(this, "innerGuides")
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
    preact.render("", this.tempElement);
    this.tempElement = null;
    this.innerGuides = null;
  };

  __proto.getPreactGuides = function () {
    return this.innerGuides.preactGuides;
  };

  Guides = __decorate([frameworkUtils.Properties(PROPERTIES, function (prototype, property) {
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

module.exports = Guides$1;
//# sourceMappingURL=guides.cjs.js.map
