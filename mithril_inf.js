/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./src/event.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.fire = exports.on = undefined;\n\nvar _util = __webpack_require__(/*! ./util.js */ 1);\n\nvar _queue = {};\n\nvar on = exports.on = function on(event, callback) {\n  _queue[event] = _queue[event] || [];\n  _queue[event].push(callback);\n};\n\nvar fire = exports.fire = function fire() {\n  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  (0, _util.raf)(function () {\n    var event = args[0];\n    var events = _queue[event] = _queue[event] || [];\n    for (var i = 0; i < events.length; i++) {\n      events[i].apply(undefined, args.slice(1));\n    }\n  });\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZXZlbnQuanM/MDMxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3JhZn0gZnJvbSAnLi91dGlsLmpzJ1xyXG5cclxuY29uc3QgX3F1ZXVlID0ge31cclxuXHJcbmV4cG9ydCBjb25zdCBvbiA9IChldmVudCwgY2FsbGJhY2spID0+IHtcclxuICBfcXVldWVbZXZlbnRdID0gX3F1ZXVlW2V2ZW50XSB8fCBbXVxyXG4gIF9xdWV1ZVtldmVudF0ucHVzaChjYWxsYmFjaylcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZpcmUgPSAoLi4uYXJncykgPT4ge1xyXG4gIHJhZigoKSA9PiB7XHJcbiAgICBjb25zdCBldmVudCA9IGFyZ3NbMF1cclxuICAgIGNvbnN0IGV2ZW50cyA9IF9xdWV1ZVtldmVudF0gPSBfcXVldWVbZXZlbnRdIHx8IFtdXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBldmVudHNbaV0uYXBwbHkodGhpcywgYXJncy5zbGljZSgxKSlcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZXZlbnQuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar isFn = exports.isFn = function isFn(obj) {\n  return Object.prototype.toString.call(obj) === '[object Function]';\n};\n\nvar hasOwnProperty = exports.hasOwnProperty = function hasOwnProperty(obj, key) {\n  return Object.prototype.hasOwnProperty.call(obj, key);\n};\n\nvar extend = exports.extend = function extend() {\n  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  var target = args[0];\n  var sources = args.slice(1);\n\n  for (var i = 0; i < sources.length; i++) {\n    var source = sources[i];\n\n    for (var k in source) {\n      target[k] = source[k];\n    }\n  }\n\n  return target;\n};\n\nvar raf = exports.raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdXRpbC5qcz8zNGE2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpc0ZuID0gb2JqID0+IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBGdW5jdGlvbl0nXHJcblxyXG5leHBvcnQgY29uc3QgaGFzT3duUHJvcGVydHkgPSAob2JqLCBrZXkpID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSlcclxuXHJcbmV4cG9ydCBjb25zdCBleHRlbmQgPSAoLi4uYXJncykgPT4ge1xyXG4gIGNvbnN0IHRhcmdldCA9IGFyZ3NbMF1cclxuICBjb25zdCBzb3VyY2VzID0gYXJncy5zbGljZSgxKVxyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNvdXJjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBzb3VyY2UgPSBzb3VyY2VzW2ldXHJcblxyXG4gICAgZm9yICh2YXIgayBpbiBzb3VyY2UpIHtcclxuICAgICAgdGFyZ2V0W2tdID0gc291cmNlW2tdXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGFyZ2V0XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmFmID1cclxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICB3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3V0aWwuanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _util = __webpack_require__(/*! ./util.js */ 1);\n\nvar _event = __webpack_require__(/*! ./event.js */ 0);\n\nvar fetch = function fetch(vnode) {\n  var options = vnode.attrs.options;\n  (0, _event.fire)('fetch:before');\n  var promise = options.fetch(options.cursor);\n  options.afterFetch(promise, options.list);\n  promise.then(function () {\n    options.cursor += options.step;\n  }).then(function () {\n    (0, _event.fire)('fetch:after');\n  });\n\n  return promise;\n};\n\nvar checkBoundAndFetch = function checkBoundAndFetch(vnode) {\n  var bound = vnode.dom.getBoundingClientRect();\n  var winHeight = window.innerHeight;\n\n  if (bound.bottom - winHeight < vnode.attrs.options.triggerDistance) {\n    vnode.state.isLoading = true;\n    fetch(vnode).then(function () {\n      return vnode.state.isLoading = false;\n    });\n  }\n};\n\nvar fetchEnoughData = function fetchEnoughData(vnode) {\n  fetch(vnode).then(function () {\n    setTimeout(function () {\n      if (vnode.dom.getBoundingClientRect().bottom - window.innerHeight < vnode.attrs.options.triggerDistance) {\n        fetchEnoughData(vnode);\n      }\n    }, 0);\n  });\n};\n\nvar _ontouchstart = function _ontouchstart(e, vnode) {\n  if (document.body.scrollTop > 0) return;\n\n  vnode.state.touchStatus = 'start';\n  vnode.state.mouseY = e.pageY;\n  (0, _event.fire)('pull:start');\n};\n\nvar _ontouchend = function _ontouchend(e, vnode) {\n  if (vnode.state.touchStatus === 'end') return;\n\n  vnode.state.touchStatus = 'end';\n  (0, _event.fire)('pull:end');\n};\n\nvar _ontouchmove = function _ontouchmove(e, vnode) {\n  (0, _util.raf)(function () {\n    if (vnode.state.touchStatus === 'end') return;\n    if (e.pageY <= vnode.state.mouseY) return;\n    (0, _event.fire)('pull:move', e.pageY - vnode.state.mouseY);\n  });\n};\n\nvar initMouseMove = function initMouseMove(vnode) {\n  vnode.state.touchStatus = 'end';\n  vnode.state.touchEvents = {\n    ontouchstart: function ontouchstart(e) {\n      return _ontouchstart(e, vnode);\n    },\n    ontouchend: function ontouchend(e) {\n      return _ontouchend(e, vnode);\n    },\n    ontouchmove: function ontouchmove(e) {\n      return _ontouchmove(e, vnode);\n    }\n  };\n};\n\nvar oninit = function oninit(vnode) {\n  vnode.state.isLoading = false;\n  initMouseMove(vnode);\n};\n\nvar oncreate = function oncreate(vnode) {\n  fetchEnoughData(vnode);\n\n  (0, _event.on)('onscroll', function () {\n    if (vnode.state.isLoading) return;\n    checkBoundAndFetch(vnode);\n  });\n\n  (0, _event.on)('pull:refresh', function () {\n    vnode.attrs.options.cursor = 1;\n    vnode.attrs.options.list = [];\n    fetchEnoughData(vnode);\n  });\n};\n\nvar view = function view(vnode) {\n  var state = vnode.state;\n  var options = vnode.attrs.options;\n\n  return m(options.rootTag, state.touchEvents, options.list.map(function (data, index) {\n    return options.item(data, index);\n  }));\n};\n\nexports.default = {\n  oninit: oninit,\n  oncreate: oncreate,\n  view: view\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbGlzdC5qcz9jNmYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZXh0ZW5kLCByYWZ9IGZyb20gJy4vdXRpbC5qcydcclxuaW1wb3J0IHtvbiwgZmlyZX0gZnJvbSAnLi9ldmVudC5qcydcclxuXHJcbmNvbnN0IGZldGNoID0gdm5vZGUgPT4ge1xyXG4gIGNvbnN0IG9wdGlvbnMgPSB2bm9kZS5hdHRycy5vcHRpb25zXHJcbiAgZmlyZSgnZmV0Y2g6YmVmb3JlJylcclxuICBjb25zdCBwcm9taXNlID0gb3B0aW9ucy5mZXRjaChvcHRpb25zLmN1cnNvcilcclxuICBvcHRpb25zLmFmdGVyRmV0Y2gocHJvbWlzZSwgb3B0aW9ucy5saXN0KVxyXG4gIHByb21pc2VcclxuICAudGhlbigoKSA9PiB7XHJcbiAgICBvcHRpb25zLmN1cnNvciArPSBvcHRpb25zLnN0ZXBcclxuICB9KVxyXG4gIC50aGVuKCgpID0+IHtcclxuICAgIGZpcmUoJ2ZldGNoOmFmdGVyJylcclxuICB9KVxyXG5cclxuICByZXR1cm4gcHJvbWlzZVxyXG59XHJcblxyXG5jb25zdCBjaGVja0JvdW5kQW5kRmV0Y2ggPSB2bm9kZSA9PiB7XHJcbiAgY29uc3QgYm91bmQgPSB2bm9kZS5kb20uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICBjb25zdCB3aW5IZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcclxuICBcclxuICBpZiAoYm91bmQuYm90dG9tIC0gd2luSGVpZ2h0IDwgdm5vZGUuYXR0cnMub3B0aW9ucy50cmlnZ2VyRGlzdGFuY2UpIHtcclxuICAgIHZub2RlLnN0YXRlLmlzTG9hZGluZyA9IHRydWVcclxuICAgIGZldGNoKHZub2RlKS50aGVuKCgpID0+IHZub2RlLnN0YXRlLmlzTG9hZGluZyA9IGZhbHNlKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZmV0Y2hFbm91Z2hEYXRhID0gdm5vZGUgPT4ge1xyXG4gIGZldGNoKHZub2RlKS5cclxuICB0aGVuKCgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodm5vZGUuZG9tLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSAtIHdpbmRvdy5pbm5lckhlaWdodCA8IHZub2RlLmF0dHJzLm9wdGlvbnMudHJpZ2dlckRpc3RhbmNlKSB7XHJcbiAgICAgICAgZmV0Y2hFbm91Z2hEYXRhKHZub2RlKVxyXG4gICAgICB9XHJcbiAgICB9LCAwKVxyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IG9udG91Y2hzdGFydCA9IChlLCB2bm9kZSkgPT4ge1xyXG4gIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA+IDApIHJldHVyblxyXG5cclxuICB2bm9kZS5zdGF0ZS50b3VjaFN0YXR1cyA9ICdzdGFydCdcclxuICB2bm9kZS5zdGF0ZS5tb3VzZVkgPSBlLnBhZ2VZXHJcbiAgZmlyZSgncHVsbDpzdGFydCcpXHJcbn1cclxuXHJcbmNvbnN0IG9udG91Y2hlbmQgPSAoZSwgdm5vZGUpID0+IHtcclxuICBpZiAodm5vZGUuc3RhdGUudG91Y2hTdGF0dXMgPT09ICdlbmQnKSByZXR1cm5cclxuXHJcbiAgdm5vZGUuc3RhdGUudG91Y2hTdGF0dXMgPSAnZW5kJ1xyXG4gIGZpcmUoJ3B1bGw6ZW5kJylcclxufVxyXG5cclxuY29uc3Qgb250b3VjaG1vdmUgPSAoZSwgdm5vZGUpID0+IHtcclxuICByYWYoKCkgPT4ge1xyXG4gICAgaWYgKHZub2RlLnN0YXRlLnRvdWNoU3RhdHVzID09PSAnZW5kJykgcmV0dXJuXHJcbiAgICBpZiAoZS5wYWdlWSA8PSB2bm9kZS5zdGF0ZS5tb3VzZVkpIHJldHVyblxyXG4gICAgZmlyZSgncHVsbDptb3ZlJywgZS5wYWdlWSAtIHZub2RlLnN0YXRlLm1vdXNlWSlcclxuICB9KVxyXG59XHJcblxyXG5jb25zdCBpbml0TW91c2VNb3ZlID0gdm5vZGUgPT4ge1xyXG4gIHZub2RlLnN0YXRlLnRvdWNoU3RhdHVzID0gJ2VuZCdcclxuICB2bm9kZS5zdGF0ZS50b3VjaEV2ZW50cyA9IHtcclxuICAgIG9udG91Y2hzdGFydDogZSA9PiBvbnRvdWNoc3RhcnQoZSwgdm5vZGUpLFxyXG4gICAgb250b3VjaGVuZDogZSA9PiBvbnRvdWNoZW5kKGUsIHZub2RlKSxcclxuICAgIG9udG91Y2htb3ZlOiBlID0+IG9udG91Y2htb3ZlKGUsIHZub2RlKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgb25pbml0ID0gdm5vZGUgPT4ge1xyXG4gIHZub2RlLnN0YXRlLmlzTG9hZGluZyA9IGZhbHNlXHJcbiAgaW5pdE1vdXNlTW92ZSh2bm9kZSlcclxufVxyXG5cclxuY29uc3Qgb25jcmVhdGUgPSB2bm9kZSA9PiB7XHJcbiAgZmV0Y2hFbm91Z2hEYXRhKHZub2RlKVxyXG5cclxuICBvbignb25zY3JvbGwnLCAoKSA9PiB7XHJcbiAgICBpZiAodm5vZGUuc3RhdGUuaXNMb2FkaW5nKSByZXR1cm5cclxuICAgIGNoZWNrQm91bmRBbmRGZXRjaCh2bm9kZSlcclxuICB9KVxyXG5cclxuICBvbigncHVsbDpyZWZyZXNoJywgKCkgPT4ge1xyXG4gICAgdm5vZGUuYXR0cnMub3B0aW9ucy5jdXJzb3IgPSAxXHJcbiAgICB2bm9kZS5hdHRycy5vcHRpb25zLmxpc3QgPSBbXVxyXG4gICAgZmV0Y2hFbm91Z2hEYXRhKHZub2RlKVxyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IHZpZXcgPSB2bm9kZSA9PiB7XHJcbiAgY29uc3Qgc3RhdGUgPSB2bm9kZS5zdGF0ZVxyXG4gIGNvbnN0IG9wdGlvbnMgPSB2bm9kZS5hdHRycy5vcHRpb25zXHJcblxyXG4gIHJldHVybihcclxuICAgIG0ob3B0aW9ucy5yb290VGFnLFxyXG4gICAgICBzdGF0ZS50b3VjaEV2ZW50cyxcclxuICAgICAgb3B0aW9ucy5saXN0Lm1hcCgoZGF0YSwgaW5kZXgpID0+IG9wdGlvbnMuaXRlbShkYXRhLCBpbmRleCkpXHJcbiAgICApXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgb25pbml0LFxyXG4gIG9uY3JlYXRlLFxyXG4gIHZpZXdcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2xpc3QuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!************************!*\
  !*** ./src/loading.js ***!
  \************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _event = __webpack_require__(/*! ./event.js */ 0);\n\nvar oninit = function oninit(vnode) {\n  var state = vnode.state;\n  var attrs = vnode.attrs;\n\n  state.style = {\n    height: 0,\n    visibility: 'hidden',\n    textAlign: 'center'\n  };\n};\n\nvar oncreate = function oncreate(vnode) {\n  var state = vnode.state;\n  var style = state.style;\n\n  (0, _event.on)('fetch:before', function () {\n    style.visibility = 'visible';\n    style.height = 'inherit';\n    m.redraw();\n  });\n\n  (0, _event.on)('fetch:after', function () {\n    style.visibility = 'hidden';\n    style.height = 0;\n    m.redraw();\n  });\n};\n\nvar view = function view(vnode) {\n  var options = vnode.attrs.options;\n\n  return m('div', { style: vnode.state.style }, options.loadingText);\n};\n\nexports.default = {\n  oninit: oninit,\n  oncreate: oncreate,\n  view: view\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbG9hZGluZy5qcz82YzI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7b24sIGZpcmV9IGZyb20gJy4vZXZlbnQuanMnXHJcblxyXG5jb25zdCBvbmluaXQgPSB2bm9kZSA9PiB7XHJcbiAgY29uc3Qgc3RhdGUgPSB2bm9kZS5zdGF0ZVxyXG4gIGNvbnN0IGF0dHJzID0gdm5vZGUuYXR0cnNcclxuXHJcbiAgc3RhdGUuc3R5bGUgPSB7XHJcbiAgICBoZWlnaHQ6IDAsXHJcbiAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG9uY3JlYXRlID0gdm5vZGUgPT4ge1xyXG4gIGNvbnN0IHN0YXRlID0gdm5vZGUuc3RhdGVcclxuICBjb25zdCBzdHlsZSA9IHN0YXRlLnN0eWxlXHJcblxyXG4gIG9uKCdmZXRjaDpiZWZvcmUnLCAoKSA9PiB7XHJcbiAgICBzdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXHJcbiAgICBzdHlsZS5oZWlnaHQgPSAnaW5oZXJpdCdcclxuICAgIG0ucmVkcmF3KClcclxuICB9KVxyXG5cclxuICBvbignZmV0Y2g6YWZ0ZXInLCAoKSA9PiB7XHJcbiAgICBzdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcclxuICAgIHN0eWxlLmhlaWdodCA9IDBcclxuICAgIG0ucmVkcmF3KClcclxuICB9KVxyXG59XHJcblxyXG5jb25zdCB2aWV3ID0gdm5vZGUgPT4ge1xyXG4gIGNvbnN0IG9wdGlvbnMgPSB2bm9kZS5hdHRycy5vcHRpb25zXHJcblxyXG4gIHJldHVybiBtKCdkaXYnLCB7c3R5bGU6IHZub2RlLnN0YXRlLnN0eWxlfSwgb3B0aW9ucy5sb2FkaW5nVGV4dClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG9uaW5pdCxcclxuICBvbmNyZWF0ZSxcclxuICB2aWV3XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2xvYWRpbmcuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** ./src/pull_refresh.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _event = __webpack_require__(/*! ./event.js */ 0);\n\nvar _util = __webpack_require__(/*! ./util.js */ 1);\n\nvar oninit = function oninit(vnode) {\n  vnode.state.style = {\n    height: '0px',\n    overflow: 'hidden',\n    textAlign: 'center'\n  };\n\n  vnode.state.isReadyRefresh = false;\n};\n\nvar oncreate = function oncreate(vnode) {\n  var options = vnode.attrs.options;\n  var dom = vnode.dom;\n\n  (0, _event.on)('pull:start', function () {\n    vnode.state.isReadyRefresh = false;\n    vnode.state.height = 0;\n    vnode.state.style.height = '0px';\n    m.redraw();\n  });\n\n  (0, _event.on)('pull:end', function () {\n    var step = vnode.state.height / 10;\n    var height = vnode.state.height;\n\n    var a = function a() {\n      (0, _util.raf)(function () {\n        height -= step;\n        vnode.state.style.height = height + 'px';\n        m.redraw();\n\n        if (height > 0) {\n          a();\n        } else {\n          vnode.state.style.height = '0px';\n          if (options.pullLimitHeight < vnode.state.height) {\n            (0, _event.fire)('pull:refresh');\n          }\n        }\n      });\n    };\n    a();\n  });\n\n  (0, _event.on)('pull:move', function (height) {\n    (0, _util.raf)(function () {\n      if (options.pullLimitHeight <= vnode.state.height) {\n        vnode.state.isReadyRefresh = true;\n      }\n\n      vnode.state.height += (options.pullLimitHeight - vnode.state.height) / options.pullLimitHeight + 1;\n      vnode.state.style.height = vnode.state.height + 'px';\n      m.redraw();\n    });\n  });\n};\n\nvar view = function view(vnode) {\n  var options = vnode.attrs.options;\n  var state = vnode.state;\n\n  return m('div', { style: vnode.state.style }, state.isReadyRefresh ? options.refreshText : options.pullDownText);\n};\n\nexports.default = {\n  oninit: oninit,\n  oncreate: oncreate,\n  view: view\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcHVsbF9yZWZyZXNoLmpzP2M1NGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtvbiwgZmlyZX0gZnJvbSAnLi9ldmVudC5qcydcclxuaW1wb3J0IHtyYWZ9IGZyb20gJy4vdXRpbC5qcydcclxuXHJcbmNvbnN0IG9uaW5pdCA9IHZub2RlID0+IHtcclxuICB2bm9kZS5zdGF0ZS5zdHlsZSA9IHtcclxuICAgIGhlaWdodDogJzBweCcsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgfVxyXG5cclxuXHJcbiAgdm5vZGUuc3RhdGUuaXNSZWFkeVJlZnJlc2ggPSBmYWxzZVxyXG59XHJcblxyXG5jb25zdCBvbmNyZWF0ZSA9IHZub2RlID0+IHtcclxuICBjb25zdCBvcHRpb25zID0gdm5vZGUuYXR0cnMub3B0aW9uc1xyXG4gIGNvbnN0IGRvbSA9IHZub2RlLmRvbVxyXG5cclxuICBvbigncHVsbDpzdGFydCcsICgpID0+IHtcclxuICAgIHZub2RlLnN0YXRlLmlzUmVhZHlSZWZyZXNoID0gZmFsc2VcclxuICAgIHZub2RlLnN0YXRlLmhlaWdodCA9IDBcclxuICAgIHZub2RlLnN0YXRlLnN0eWxlLmhlaWdodCA9ICcwcHgnXHJcbiAgICBtLnJlZHJhdygpXHJcbiAgfSlcclxuXHJcbiAgb24oJ3B1bGw6ZW5kJywgKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RlcCA9IHZub2RlLnN0YXRlLmhlaWdodCAvIDEwXHJcbiAgICB2YXIgaGVpZ2h0ID0gdm5vZGUuc3RhdGUuaGVpZ2h0XHJcblxyXG4gICAgY29uc3QgYSA9ICgpID0+IHtcclxuICAgICAgcmFmKCgpID0+IHtcclxuICAgICAgICBoZWlnaHQgLT0gc3RlcFxyXG4gICAgICAgIHZub2RlLnN0YXRlLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCdcclxuICAgICAgICBtLnJlZHJhdygpXHJcblxyXG4gICAgICAgIGlmIChoZWlnaHQgPiAwKSB7XHJcbiAgICAgICAgICBhKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdm5vZGUuc3RhdGUuc3R5bGUuaGVpZ2h0ID0gJzBweCdcclxuICAgICAgICAgIGlmIChvcHRpb25zLnB1bGxMaW1pdEhlaWdodCA8IHZub2RlLnN0YXRlLmhlaWdodCkge1xyXG4gICAgICAgICAgICBmaXJlKCdwdWxsOnJlZnJlc2gnKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGEoKVxyXG4gIH0pXHJcblxyXG4gIG9uKCdwdWxsOm1vdmUnLCBoZWlnaHQgPT4ge1xyXG4gICAgcmFmKCgpID0+IHtcclxuICAgICAgaWYgKG9wdGlvbnMucHVsbExpbWl0SGVpZ2h0IDw9IHZub2RlLnN0YXRlLmhlaWdodCkge1xyXG4gICAgICAgIHZub2RlLnN0YXRlLmlzUmVhZHlSZWZyZXNoID0gdHJ1ZVxyXG4gICAgICB9XHJcblxyXG4gICAgICB2bm9kZS5zdGF0ZS5oZWlnaHQgKz0gKChvcHRpb25zLnB1bGxMaW1pdEhlaWdodCAtIHZub2RlLnN0YXRlLmhlaWdodCkgLyBvcHRpb25zLnB1bGxMaW1pdEhlaWdodCArIDEpXHJcbiAgICAgIHZub2RlLnN0YXRlLnN0eWxlLmhlaWdodCA9IHZub2RlLnN0YXRlLmhlaWdodCArICdweCdcclxuICAgICAgbS5yZWRyYXcoKVxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG5jb25zdCB2aWV3ID0gdm5vZGUgPT4ge1xyXG4gIGNvbnN0IG9wdGlvbnMgPSB2bm9kZS5hdHRycy5vcHRpb25zXHJcbiAgY29uc3Qgc3RhdGUgPSB2bm9kZS5zdGF0ZVxyXG5cclxuICByZXR1cm4oXHJcbiAgICBtKCdkaXYnLCB7c3R5bGU6IHZub2RlLnN0YXRlLnN0eWxlfSwgc3RhdGUuaXNSZWFkeVJlZnJlc2ggPyBvcHRpb25zLnJlZnJlc2hUZXh0IDogb3B0aW9ucy5wdWxsRG93blRleHQpXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgb25pbml0LFxyXG4gIG9uY3JlYXRlLFxyXG4gIHZpZXdcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcHVsbF9yZWZyZXNoLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 5 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _loading = __webpack_require__(/*! ./loading.js */ 3);\n\nvar _loading2 = _interopRequireDefault(_loading);\n\nvar _util = __webpack_require__(/*! ./util.js */ 1);\n\nvar _event = __webpack_require__(/*! ./event.js */ 0);\n\nvar _list = __webpack_require__(/*! ./list.js */ 2);\n\nvar _list2 = _interopRequireDefault(_list);\n\nvar _pull_refresh = __webpack_require__(/*! ./pull_refresh.js */ 4);\n\nvar _pull_refresh2 = _interopRequireDefault(_pull_refresh);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar DEFAULT = {\n  rootTag: 'ul',\n  list: [],\n  cursor: 1,\n  step: 1,\n  triggerDistance: 200,\n  loadingText: '正在加载',\n  pullDownText: '下拉刷新',\n  refreshText: '松开刷新',\n  pullLimitHeight: 100,\n  item: function item() {\n    throw new Error('You must declare `item` function.');\n  },\n  fetch: function fetch() {\n    throw new Error('You must declare `fetch` function.');\n  },\n  afterFetch: function afterFetch(promose, list) {\n    promose.then(function (data) {\n      for (var i = 0; i < data.length; i++) {\n        list.push(data[i]);\n      }\n    });\n  }\n};\n\nvar oninit = function oninit(vnode) {\n  (0, _util.extend)(vnode.state, DEFAULT, vnode.attrs);\n};\n\nvar oncreate = function oncreate(vnode) {\n  var state = vnode.state;\n  state.onscroll = function () {\n    (0, _util.raf)(function () {\n      (0, _event.fire)('onscroll');\n    });\n  };\n  window.addEventListener('scroll', state.onscroll);\n};\n\nvar view = function view(vnode) {\n  var state = vnode.state;\n\n  return m('div', [m(_pull_refresh2.default, { options: state }), m(_list2.default, { options: state }), m(_loading2.default, { options: state })]);\n};\n\nvar onremove = function onremove(vnode) {\n  window.removeEventListener('scroll', vnode.state.onscroll);\n};\n\nvar infList = {\n  oninit: oninit,\n  oncreate: oncreate,\n  view: view,\n  onremove: onremove\n};\n\nwindow.infList = infList;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9hZGluZyBmcm9tICcuL2xvYWRpbmcuanMnXHJcbmltcG9ydCB7ZXh0ZW5kLCByYWZ9IGZyb20gJy4vdXRpbC5qcydcclxuaW1wb3J0IHtvbiwgZmlyZX0gZnJvbSAnLi9ldmVudC5qcydcclxuaW1wb3J0IGxpc3QgZnJvbSAnLi9saXN0LmpzJ1xyXG5pbXBvcnQgcHVsbFJlZnJlc2ggZnJvbSAnLi9wdWxsX3JlZnJlc2guanMnXHJcblxyXG5jb25zdCBERUZBVUxUID0ge1xyXG4gIHJvb3RUYWc6ICd1bCcsXHJcbiAgbGlzdDogW10sXHJcbiAgY3Vyc29yOiAxLFxyXG4gIHN0ZXA6IDEsXHJcbiAgdHJpZ2dlckRpc3RhbmNlOiAyMDAsXHJcbiAgbG9hZGluZ1RleHQ6ICfmraPlnKjliqDovb0nLFxyXG4gIHB1bGxEb3duVGV4dDogJ+S4i+aLieWIt+aWsCcsXHJcbiAgcmVmcmVzaFRleHQ6ICfmnb7lvIDliLfmlrAnLFxyXG4gIHB1bGxMaW1pdEhlaWdodDogMTAwLFxyXG4gIGl0ZW06ICgpID0+IHsgdGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBkZWNsYXJlIGBpdGVtYCBmdW5jdGlvbi4nKSB9LFxyXG4gIGZldGNoOiAoKSA9PiB7IHRocm93IG5ldyBFcnJvcignWW91IG11c3QgZGVjbGFyZSBgZmV0Y2hgIGZ1bmN0aW9uLicpIH0sXHJcbiAgYWZ0ZXJGZXRjaDogKHByb21vc2UsIGxpc3QpID0+IHtcclxuICAgIHByb21vc2UudGhlbihkYXRhID0+IHtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGlzdC5wdXNoKGRhdGFbaV0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBvbmluaXQgPSB2bm9kZSA9PiB7XHJcbiAgZXh0ZW5kKHZub2RlLnN0YXRlLCBERUZBVUxULCB2bm9kZS5hdHRycylcclxufVxyXG5cclxuY29uc3Qgb25jcmVhdGUgPSB2bm9kZSA9PiB7XHJcbiAgY29uc3Qgc3RhdGUgPSB2bm9kZS5zdGF0ZVxyXG4gIHN0YXRlLm9uc2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgcmFmKCgpID0+IHtcclxuICAgICAgZmlyZSgnb25zY3JvbGwnKVxyXG4gICAgfSlcclxuICB9XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHN0YXRlLm9uc2Nyb2xsKVxyXG59XHJcblxyXG5jb25zdCB2aWV3ID0gdm5vZGUgPT4ge1xyXG4gIGNvbnN0IHN0YXRlID0gdm5vZGUuc3RhdGVcclxuXHJcbiAgcmV0dXJuIG0oJ2RpdicsIFtcclxuICAgIG0ocHVsbFJlZnJlc2gsIHtvcHRpb25zOiBzdGF0ZX0pLFxyXG4gICAgbShsaXN0LCB7b3B0aW9uczogc3RhdGV9KSxcclxuICAgIG0obG9hZGluZywge29wdGlvbnM6IHN0YXRlfSlcclxuICBdKVxyXG59XHJcblxyXG5jb25zdCBvbnJlbW92ZSA9IHZub2RlID0+IHtcclxuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdm5vZGUuc3RhdGUub25zY3JvbGwpXHJcbn1cclxuXHJcbmNvbnN0IGluZkxpc3QgPSB7XHJcbiAgb25pbml0LFxyXG4gIG9uY3JlYXRlLFxyXG4gIHZpZXcsXHJcbiAgb25yZW1vdmVcclxufVxyXG5cclxud2luZG93LmluZkxpc3QgPSBpbmZMaXN0XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFDQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BIiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);