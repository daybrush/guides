/*
Copyright (c) 2019 Daybrush
name: @scena/guides
license: MIT
author: Daybrush
repository: git+https://github.com/daybrush/guides.git
version: 0.9.0
*/
import { ref, Properties } from 'framework-utils';
import { createPortal, createElement, Component, render } from 'react-simple-compat';
import ReactGuides from 'react-compat-guides';
import Component$1 from '@egjs/component';
import { camelize } from '@daybrush/utils';

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

var PROPERTIES = ["setGuides", "type", "width", "height", "rulerStyle", "unit", "zoom", "style", "backgroundColor", "lineColor", "snaps", "snapThreshold", "direction", "container", "className", "textColor", "displayDragPos", "dragPosFormat"];
var METHODS = ["getGuides", "loadGuides", "scroll", "scrollGuides", "resize"];
var EVENTS = ["changeGuides", "dragStart", "drag", "dragEnd"];

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

    return createPortal(createElement(ReactGuides, __assign({
      ref: ref(this, "guides")
    }, state)), container);
  };

  return InnerGuides;
}(Component);

var Guides =
/*#__PURE__*/
function (_super) {
  __extends(Guides, _super);
  /**
   * @sort 1
   */


  function Guides(container, options) {
    if (options === void 0) {
      options = {};
    }

    var _this = _super.call(this) || this;

    _this.tempElement = document.createElement("div");
    var events = {};
    EVENTS.forEach(function (name) {
      events[camelize("on " + name)] = function (e) {
        return _this.trigger(name, e);
      };
    });
    render(createElement(InnerGuides, __assign({}, options, events, {
      container: container,
      ref: ref(_this, "innerGuides")
    })), _this.tempElement);
    return _this;
  }
  /**
   * @param state
   * @param callback
   */


  var __proto = Guides.prototype;

  __proto.setState = function (state, callback) {
    this.innerGuides.setState(state, callback);
  };
  /**
   * destroy guides
   */


  __proto.destroy = function () {
    render(null, this.tempElement);
    this.tempElement = null;
    this.innerGuides = null;
  };

  __proto.getPreactGuides = function () {
    return this.innerGuides.guides;
  };

  Guides = __decorate([Properties(METHODS, function (prototype, property) {
    if (prototype[property]) {
      return;
    }

    prototype[property] = function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      var self = this.getPreactGuides();

      if (!self || !self[property]) {
        return;
      }

      return self[property].apply(self, args);
    };
  }), Properties(PROPERTIES, function (prototype, property) {
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
  })
  /**
   * @sort 1
   * @extends eg.Component
   */
  ], Guides);
  return Guides;
}(Component$1);

export default Guides;
export { EVENTS, METHODS, PROPERTIES };
//# sourceMappingURL=guides.esm.js.map
