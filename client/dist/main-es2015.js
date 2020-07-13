(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../server/src/types/answer.entity.ts":
/*!********************************************!*\
  !*** ../server/src/types/answer.entity.ts ***!
  \********************************************/
/*! exports provided: Answer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return Answer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../server/node_modules/tslib/tslib.es6.js");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "./node_modules/typeorm/typeorm-model-shim.js");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _entry_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entry.entity */ "../server/src/types/entry.entity.ts");



let Answer = class Answer {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryGeneratedColumn"])()
], Answer.prototype, "ID", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])()
], Answer.prototype, "FieldID", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])()
], Answer.prototype, "Answer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["ManyToOne"])(type => _entry_entity__WEBPACK_IMPORTED_MODULE_2__["Entry"], entry => entry.Answers)
], Answer.prototype, "Entry", void 0);
Answer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])()
], Answer);



/***/ }),

/***/ "../server/src/types/entry.entity.ts":
/*!*******************************************!*\
  !*** ../server/src/types/entry.entity.ts ***!
  \*******************************************/
/*! exports provided: Entry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entry", function() { return Entry; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../server/node_modules/tslib/tslib.es6.js");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "./node_modules/typeorm/typeorm-model-shim.js");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _answer_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./answer.entity */ "../server/src/types/answer.entity.ts");



let Entry = class Entry {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryGeneratedColumn"])()
], Entry.prototype, "ID", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["OneToMany"])(type => _answer_entity__WEBPACK_IMPORTED_MODULE_2__["Answer"], answer => answer.Entry)
], Entry.prototype, "Answers", void 0);
Entry = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])()
], Entry);



/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/hammerjs/hammer.js":
/*!*****************************************!*\
  !*** ./node_modules/hammerjs/hammer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return Hammer;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}

})(window, document, 'Hammer');


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div id=\"main\" class=\"basic-container\">\n<router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fin/fin.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fin/fin.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <mat-label class=\"centerText\">\n    Danke, wir freuen uns auf Euch.\n\n  </mat-label>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wufoo-form/wufoo-form.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wufoo-form/wufoo-form.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAm0AAAFdCAYAAABRmVqOAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AcNDhM1PIlfQgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAgAElEQVR42uy9WXcjSbal9x0zc3cMJGPKzMiqltS60oP0//+NHnotTd01ZEZGkAR8sOEcPZg5CDIip6isUt+7fNfKAgGQmAiGb+xz9t5iZsaGDRs2bNiwYcPvwT/AHkwAFEWvLnUvTn8eDkWYgAQXGiMgAngAVBURwcQhSL3+8p0BSlefg3v68fXUyBTLmBQEh1LaU1aUTGIi8cgjn/jw8cRPP33k/nFinkfUEkhGSkTUuN3f8j9+/2/8T+//d1537xGOuGeP5rcjbO+6DRs2bNiwYcO/EmJg4i4UTS+n7sX5L5/KyvzMVdJmVk/EgIziCKG7sLCX/FJRvGvE85o9iaIUDCWWGRPFUAqFrImsCVUlMzHZR87xxOm0MM8zMc7knFHLIBlvCkWJMbIsC6UUaA9JlXr/G2nbsGHDhg0bNvx3T9wAh2un/K7T+lUP0rGKaAJIU90clZCZ0FS2law93buJVmEOKi0rhaSZQsSs8HB+JGsi5YWYF2JciCVSSkFlZuaRWGbmWJinxBxzI20JIzF4o8QEGc7nM/M8w24jbRs2bNiwYcOG/z9Y1z+yYGXPJpL1VF6cv5zqs/OfUZiXj0P0QtPsiqzZRVozComquRXmOFVFLEeyJgqRH374gZwXxmVmnkfmNFU1zZRiCxISxSlmnmIOLWBmjbQtePGUnFE1Hh8fGceR9LrQAQWj+4oB6UbaNmzYsGHDhg1fT9y+krD9JsJ3Rb6e/4AnRQVxOAfOVcJn7fEUBMGwNlRNFIpmSkmUYigJpJDKTFwWpmVknmemOJNzpBD59OkTsSwsy1JJW5xIeUG17rW5DiSAd3vE9wi+jVMzmJKzUciQM6fxxOP5gZgXuqCIuK962TbStmHDhg0bNmz475AQ6hVZuyZvjbaFDvH1kms7g2JYMw4UMkuemaYz43xmXiaWZSFpQmUmlpm0LIzLWC8viVISZkaxjGoml0TShSSZ4hKKYlZQUygeQ/FecSKICCIOA5ImvNS5bYyR0+nEOE8cb8D7z9fpNtK2YcOGDRs2bPh3imvClttl63nFvEevnKaZTCoLS5ooJbGkmVwqIZumM6fxxDidWJaFWGaiLiRbKDFddtVMDHHWyFe9L3EGveExnHlUBTNQFZwLeOdw3uPEt6U7RQjEJdJ1HlSIJXKez8zzCDeKsCltGzZs2LBhw4Z/L7jeiZMXl0luX+RG0soVkat7aqf8CcOhqheSNs0jU5xIaWKOM0UX5jQzL2emZWRZ6u5a1sQpnijNgGBWwAnee4JzeOdZlhnvPV6EEBxOBFCcGWYe1IF0OAmIF4SqtCEOcQ5dCs51iHeUbMQYiTlRsK8mXxtp27Bhw4YNGzZ8hjXGVeSXhni/Fs7x+alZIzcGKjX+Y3V/GopI2xlrY05B+XT+gBVl2A+kOPPTwyOnuJAxshZyTixxYoln5jRTSiVmaolUIjlHlryQm6JWrDBbRAVc5xARnHMgbbhqSr/3F8XNRBFXv8+7mgPnCKhCyUrOGdOCOUNcwYtyc3NDijPeBcQ7ztOJeR7/If/GRto2bNiwYcOGDV9B6gpmVlUqQEQbwauXuzYBVM2N/DQHqFh1cYqrGWhSR5/SSGCxVM0AGgmdo5TEFGfG6UT6uBBjZEwT5zSRRSmm5ByJcWZeRuY4k/OMimIUlJqdli2jWh+bYvi+Awceh4g1M0MNIRGRuhcn1XEqAmIKCKrrBl1GzdeBrSg0UicimDO4jFmfcuJU/jHD7UbaNmzYsGHDhg1fxC+pbCsh+TWoKmaG976qWSs5I9U9NK3Bs6qFoomUFlJauL+/J3Sevg/kHPn46QM//vh3cs6EnechPqCuEqhSEnOaWeLEtEzkHHFdVc5wlSjiqmomTjAB1zucOBy+Xt6ej2/0sZSmNLbza/HCqkDWlgRrJKyqclyRNecc4puu5gxz9acqkfT4r9hr20jbhg0bNmzYsOF3EbZKagre+1/9WRG5VEqtqBG2I3M5Mc8z8zyTUm0OWJYarfHDDz/Q94G7uxuGYeD+/Im/ffg7qsrNmz0P8yc05OrWtLrXFi2hklFv1aEpgvOA89Vg4B3OOTxgLrTHV5U2sXbaarBEGkGzawJ6rZNVwqhWSRk8ET+cNJLGRWlbFT5tQSRfg420bdiwYcOGDRt+FS+rynPOIHrZ8VLTNhZ1z1oIvK+kpbox622cx3vu04+M+Z7z+cw0Tczz3DLRKoEbx5FhGLCucHRHFo1ES6SckAhzWTAyIr4pXOC6QB88nkoorY1kzclzZdDVUDcDUMHEcAhm9vTItZoLnF3t97XvgUoIm+8ApH6vOau3ZYVSjNJURtWAenv62a8ckm6kbcOGDRs2bNjwmwjb02mh6z3uKiQ254yZEULAO4+aXq5/GovCOI18+PADfzn/n5zSPdM0MU0TKSVijKSUyDlzOBywoCTLzHmBIOxvD+j5zLTMFGcUNcRyHXc6B97hg79kphWeSJLxpJTVp9F27EyvnptgphejhLPaxSBWy+hlbXEQQ8UwaZe3r80UM0VFcc2g4KyZLjQ3tY1NaduwYcOGDRs2/HMJ2/XXXtyFDk3TxDiO5Jzpuo5hGPDes9/tKzGqDe8APDzc89cf/sr/9dN/YSyPLMtyIXz1tus49eD2iIesiZiFftfx3fff8unTwA+ffqTrd5gtaM6kUhCtY0dxHc6Hpu65druGqTwjnSKlWVefj0GtKWtWFNqGm1DJ2cWkIIZJaWNReT4Ctbq3FnOi5IS3gBRBXSV01voaNtK2YcOGDRs2/KvIDPyqaiLPsvq/Bo4nuvNz9/ELD/DnLm8/ZL/CHRTFWsisiTUlyTCfeVjOIJkYI4+Pjzw8nIgxsut2DMPA++++J+BxuPY6OVQz52nk48NH/vbh78w8Xgib6xwhBMR5xAsTEw4HxWEZjscjx+MtXnpO0wnrFStKUoVSUFWcVlrjrDo5tQWHOHPNsVrHmkZGrYBp3WVbS6+svqJ1klufryDgPM7kEvuBlLb7Zk1pEzCtkSFqoEoxKLm+yK44LBiI4ijIJXfu92luG2nbsGHDhg0bvoKwlfaffEax9HKZu/r6iUXprxyw1/CLttx+oX7Pv39dMfMvyZvW61r6BqbWiAdPkWkGFmo+7OX25PmjW52OiYUlnpmWiXmuAbWLTfw4/YVxeaDkug82TZHzw5ne73jz6i2xn/nOf8/r3VvA4fEUp5zzzKfHT9BVDavrO1wQkiamPIFzHIYd9/Ej6jIhnull4NXxlteHO2SBvxB4HD8S9oIfAjkvFDU6D50ZeZ7ai7KaCp5GpoKvrlPffn8tBgRx7XscHmEpa7Cv1HiTFvchBjihOwy1PF611l21Mas4w0mHlY7b2zd4DcRTpvM90/nE4/gj3xzeA7uNtG3YsGHDhg3/CugXxKyfV95eErbffi+K/6J4Ji9Ilmv7Vhf1zIBWy0TrwLxwP6unZb0Nq0RPUZCMkkl5Yskz83LiPD1yOj9wmh6Y55loEz9Mf2HWEdQwdcRxYTxH9mHPlCd2Nzt2t3v2uyOBDsPIZPAFN3jSnFGvuBBwg8ObITFjpmQpmIM5TXj1dEOPFYhzwpJyMxw5l5/AFNWCAE6s7ZwZrj1BQ5vBoCpmdSxZWw1UDSdaX8dL4q3hrNLloesrybM1CqSF7TbSlrRw7c0Q9zQ+xhoBpMPU1Sy7YpQW+Pvld89G2jZs2LBhw4Z/Clbu87nSVuUsB1cdk9qO0VcRGeae/7B8TvSeaEa9jac0ffdZA5TK1WMSq/taLfgWKc8IY8lKNIjFiHEm5kjKSwugTZjLjOMjS5mYpjPn8YFxPDEtIyklEokfzn9FXR17lmLE80KMSvIJTcJf+v/GcX/DzeGWYzgSCBiG74TdvkM/FvDgvafrAmJC1jbmdA6KsYxL3Qnb1Wc5jvX+D4cDMvraQlBAzOGbUmbtV2CmNXrDmlezmQZWKlx3y0BcjQERq5VYlHXHrZIwR92Ls2ZO8Aiq9TbUrI2NK2MWEaQxYefaz6miqsSSSCnVTLpnVHwjbRs2bNiwYcM/FfKcgj0TssAhz6Sx6znklR5nL8S4K+LmpNY6PdHAVVdrdVCN0tmV3lZQRAyl1GtELzfuqPVQMUfmnHiYR5a8MI4j41S7OWOcyZYxCuN8oujC0sJuV/cjvj445xyh73B4YsyEYHgvBBcolvnhpw/c3v6V/bDj7au3vD6+pWegP3h8L0ho1VEoqOCoxCsET9/tiHEhpRlxjmEYCCFU00JMhBDofc/CglntDL1UUQHiXd0to6qJ4mp91tMOXyVT3stTEK41koU9jUG5jjqxC5VWae0GLUgXAW+eIuUSKxKkUqw1XLiUwrIspBK/+j23kbYNGzZs2LDhKwiba4rNEy1zT+Tt+XH+hYD2BcJ2PaKT64vdhbhZS+BfHZuCa3tvK2lby9TraSaSLVE0opoppUZpzHFizguP50/MaWYcR06nR07juZIiTahmlry09P56exI8XefpfY8LHbvhQL8/tMe5sPMDfb9Ds7Kca0juhw8/4hDmZWT3nwOde4XrCoXEsOtIVlCr0RhKQVTo+55Dtwdv5JA59kdu9jeEEChzIaWEdLDbHdBcUArOSa2RaoaCVVjT9loWp2AOu4SArC+z4HGV0CGYuPqMxV1I2/oD63ltFhRt4btPzQeVuF1nsKkqKoZKU9tiJMYIX2lQ2Ujbhg0bNmzY8FXEbR2BvlDL+BnC9kvXXSttdi3ErQraWplULsShEhSltmRmCoVkMzknskUeT/fEvBDjQtSZnGMtVk+RXGZinkgpMi9jjexY5pqTlmtXp0IrUK9jP6cOLYGSMl578DucBEqp7sz94cCrV6+Ic+Tvy98Rg/PyiP6YiWnicBiQ93CeH5jme7rOU7JDrRIaVQMTxBxBArfHWwa/Yx8OdF3XMs5KLZnHOOz2pHGhiEIwvOtImiimzwibOa0xHpSmtLVaLTxmQil2GYeqWhVCTZinpTEveXZaR6FK1/e40DblnODENadt/Z5sGa8BszoCNlNiXhoZrrTt945IN9K2YcOGDRs2/APE7XP8iiPwd+6fG5mnzkq7qGlVm4rkHJljJV1TPLEsE7EsfPz0gSVNTEsdgxYi2nbGSkmIK63+qVBKIVmhuIKGcgnJBV9J0lp8LkIyIxelc3W3y3J1WN7e3PH+u+8ZzyceHu7JkjArPI6fiOnMcPAUFj59+sTj+R4NpYbQiruMNTUpmpQcM9+++x7LhlcHCsuy4MzRdR0qmf3+yJgmUiq4IDgXKNkoNWfjqYbq8su6DtF1YA5RKBiFcgnZdS0CxF3qrFxrSnjKeSvmsFJNH+bskrvmcI1gV5UNy3jpEFf36ZJmUkrPFNqNtG3YsGHDhg3/VKzjyC+RsbZ3Jnw+AoXPL395nXDZU1NKa6vM2OW8YShjeiBpYl5GxvHE4/mRh/MD5/mBmCOfHn9iWSbG5cyS51rp5NY6JruUpHtxrUxdMA9OKlELfV9318RfaqDMGnGxgKfDuVoV1XUdNzc3vPvmLUPf8fe//51T+YQ4q+re+cxffwh4b8zzzLicoC3qe+8JocdyIVpEs5KWzOvb11iGPEfiXOur+m5XFTozXBB63zO7iBfBu45Mi96wSm7XZoOacWJPWSjaSJnaJTTY2VpzVffj3r5+dbnczGrdVfteE+Xh4b6+buZwViNNrslYJW3gBcQLVoximaypEbvfT9w20rZhw4YNGzZ8DexFxoZ8fhA25VKW7vzz6I7rPvbrjDSjkHShaGKKZ6ZpJOaFXCIpLbWnM45kZmKZmZaFJU71ezSjkjFRfnr8wBJHllQJm+8DYVW0rI40vfOI94hrg14n+BAaiavkrZirY8u1G8AJogHB07lqKjAzxAu5VDWwGwLDYai5bnlCc+bh/BH3Q30t/N5zmk5kqWPOfT+wlIVlivS+Z384sHM7DndH0i7y1//6V3746Qf6bsfrV68Y9j3LsvDwcCKEwKvXrxjPMymdKMVY0lzL7F01PHjnMHOkUnfiUGVJGY/Huxrq60NP3/X0YcA5R14yb968YdfviTHSucDt7S2qysPjR/b7PZ8ePzJPM50G3N5dTAwruQshME8TJOFmuMF7z5LjVmO1YcOGDRs2/PN52tN2unxJKbtQsha7662Frbo25lxJmlEIza34ZDCIWnfMYl44n0/M8cy8jMzNwRnjzDzPzOlM1ImskZjTxd1ZKOCrvGOu4DvHEPqadhF83cGyWhXlrI4U19GnNsertRaDYq0gHYdYu14EM2qnqPHUtalKyo08xpmUFrrOAz2qO+Z5JlvhHCecwRhHCqWVqUNKmRyrEaHrew7Dge+/+xM5Fk6x0IUB7zqWZeF0OmFyIEt9Pb2v5ojUFQ7DkayF3vfk1iG61oyW1pzgzINB1oJzgZ2vZG0Y9gzDQOc7vPfcvL3h7du33BwqUetDx+FwQ86ZTw8f+C//z//BssyUWGo3qa4u1Nau0KJEnHO1LN5Vpa1YvrJDbKRtw4YNGzZs+KcQtqf+Ta2htbYmpsmTgnbxdOpFRSukK5+nkjWz5Lo0X0pu7s5Sd9OmE1OcOZ0eiHlppG0mpcSSFpZlIcaRWEYK6aLsIIp4h/eujjO9MAx7XKhJb2a15LxzHu8Dpt1Tz6bZk9znnjqu6vqXbyGy0qaL0hSlTFH39NjnkcfHj7UAfhnxDpx3DPtdzTRTJeWMk+avdLIGo9Tst1QIruN2f8fbu3e82t/xt8cfeLw/kVMCM8bzmVwiBGHJI48PJ+KQ8C4QY6RkJfQ9rgvsJTRSWO/bRLBGaAGkF7quY7fbsd/vOeyO9H1V2kSEXahRJbfHW5xzDHR4OrRXdmHHw+NHUvt9ZMsXMwOAF4/zlbB576thRaTtE5aLoWQjbRs2bNiwYcM/AasiVeFZd87UruumrqM3WjQENBNBIZFYlpp9dppOlYgtE3NcSHlhjqvSFkkpkbXGdOQciSWTUi1XzxYptlAkX3wPIoL3gq0ZaqFjt+/p+56cM+M4IkUJux374YiII2Wt95MzQdyTUdIMUcWc1LoEJ5d9sJW05pJJqaCWyTlzOguhg3memeYzmgv7/Z4QPL4LkDIueDof8H3HaTnX+9JMUUHU2A0H3r56y7vX7wDh8f6Rh5/u645dCBfyPOw6Hn+KzPPcSGwljvv9kW9v31a3qdZsYVWgaKuyCnjv8d4zDDvC0LHfHyppG3Z03YAXh4gnTjPH/o7B7ZotoSqQgrHzO7599y3j/MjDwwMllTYGf3q/1PEsVd301dwQcyTm5fLu2Ejbhg0bNmzY8K9Q3hpVcyLtIFxdnYVMJqIUiiZinutpqRld43wmxoWH8RPjfOZ8Pl+S/osqRTO5tQKYq2pdXtUiV7Cemv5vHZ34Zw5JR91FAzjs99ze3LHb7RjHmXjKzPOMeM9wGPD9ADZXFatpgCJrg4CCWBOO6tjyosJJrYTSvJCtkpWcM5MTRCDGyLLMqCrd0OFXI4P34Dy+63Cuo4wPLcajKn2d7LjZH7k73nHYHSEbJRZKUroh0Pc9wzAw7HsOxyOHZWQ4n8hLdWRagcObI++/fc/d4TWnhzOXfX8LeAn0/cAQOlwXONwcCL2n72vBfS81KHj1geo+08lwaaSo1a2VIZu/5d3rd3y4/zt93zPHuY5IuXao1lORGgeCQs6ZWOJmRNiwYcOGDRv+lYStKmiOqJFiBUTJFpnb8v+8nFny1EwCc935yksNWM0zj+NPjMvI+VxDbUspl9GkNuXMhaoKmdSUNpEaIuuDw0mo8bpmmAq2LsC3vLOb4y3fvv2W29tXnB7OLKdIGjMkjxVH5zyLGFaUkmMjF76VkLZA3fY4VPSiMq75cEaqepEYSCZlZZpq8j8ofd8TQqhq3Up8zEilYGrV5Vlq4bpzjt1u4PWrV9ze3jL4nuk8o7mOEUsxyAatgUBV2e121Riwq5TKCrx9/ZZv37zn9viaYziDekQFZ4HODQzdQNd1+BAIh1BrtJqC9hSO3DotpL+cd809Kq0KqxPlxt2yHw50rqsEew31VaFQLgYUM8P5mkcXcyTn/JU620baNmzYsGHDhl8nafbcFagY6oxxmZnHE7HUFoGkM+fpkXE5Mc0nljzWyI00opbqEnopZIuc53uKLlVhw5AgbfwolDUzjIBJLS4vVdojiFC5lbYOzdqLKS3KwrQqZLeHV3zz9j3vv/kTp5tH5seZ5TFhWSiLIoc6msw5UnKq5LBQXbBakKuIENeYqrm62O8RzBnVjNqiQKSaKsQZXd9Gor72eWoxTBziAyZ1D26325FzhmTs+h1v377l/Xd/4t2bbzgMB86PI8F17PdHtClTx+ORw6GOMxeNvHnzhuPuSNcNaDa+efMd7958Q+d6Dv6Iyw5nAW+BID3BVZOBeDBvzwwB11lr1+Rt7XZfq1xFgA4CgRDCxXywRrWYWW150FzL5lXAc6myqqT267CRtg0bNmzY8NVq02+B/OK1+jO3/euhCPJ7xAr5vc9JrzK3arp9JpFLruNAy8xx5DydOJ/PzGmu1U9p4XG65zzVrLQlnhmXkZRnICNNKTIpnOOp7jz5un8Wuvqcl5QgF8DhA/hgl/4DmvJViWTBpDWQruG3tbAUKZ6+O3B785pbXnO4PfL3Vx/42/CBeY7krGQpFKtdCtkqIQ0rOaPeNm28h9bydWdXhosgENqun6sKnTkDc/huqIPGUpsOLBvBB3rp8M5TzLPrdmSrDtK74Ybv7v4Tf3r7Z97eviO4jnQyXt28IYRdNTGUyBsKt7dH7t69wv7i8UfPt9+85+54h2bjbv+KgQOCQwbBDQ7UtSy17ukX7aphpHpi3TPlayVrVtaaqjr2RUBaVWrdbfN46fDW1XaFyxZjAS3oWhxv0pol9EL85be+ITfStmHDhg0b/gjCpnw5O/Yl3JdYnqxtAoVr5+WXqNxK4K4v8+2/OsZbO5/Wkkh5/oBWc6c8fxym7SD8ZJZsFoJCIjLHM9liC6g9cZ5q/MYUF4pOGDOpVGPBHBfGNBFzplg1KIzjiZwzKS+YKU4KHi4xFIsJzncMfcC8kB2IFPbDDu+F83mic762BRTDSo3HMC2oGpnEum8mEnDS10X7rsf3HS4MOD9ghDri6wdCN+BSQZ3w4XRisYx2HiOwlMJSYnU7BoemjEgjLc7V8NnWCmCiyOBJotWo0FVylNUQUwRXiWFcyNGIS8ZZxN06/vT+T3z35j2y9OQpU5Ky3+95f3zPm/Att+E1HZ4lKLvbW14fyqXDc3Vjijr+7fUdXTewH/bswoG+6wBXyXapJFFw7e3hvvApw7UaMvfF9674J/Xt2c/6+uZKBq8P33K3e81f/vJXxBfCwdE5x/H2jtP4yDzP7IcDvRMep4U8L1gunKYHXu2/20jbhg0bNmz41xI394KTyRe0NPcP3Mc1YVvDNNw1SVuvlfUy9/yRyIsH1YyQpaZkIA5MlFSW6u7TmayRj6cfSbowxXM1DMyPjMvIskzkslB0RC2SixFLJmshakFNajWSJCzUO3EGwfm6x2+gIoh5kICaB1Mka1Pi9OIEda4ZN1VwroXYtsJ51YKI1R03cU0hcpfx6hqO+/Q6NoUwzVWh85CIJM1V8RKrNEYEEcdw6HAt4uNSlq6KUMgipKy1/kmlPpbWG+rxeDWGbg8qBCt0pvS+45tX3/Lnd3/m+3d/5k6+IZ0Ly7LUXLTjDYdwiysBc45v3ry/RGSotnHxGqHhAuN5wfuOvu/x4p9zKv/b1Fb5re/ML/xsLwOD39G5obYhaN3RA8OZ0vlA8XV3UETwtBw3oJTy2+97I20bNmzYsOEfxeeF6e65svbymPfywGeVZDxxK8U+1+euCNxamm5oyw/DrvS3taFA2giqpf8/Ubs620olkXOipOWSc5Y0MaeZOZ5Z0kIsM/enn4hlYc4j4zIxzWemZSTGmVwiJS+VNImnuDVS11pLaK1nEpG694TgxerOPiAm7EOHuFBJWcmoxTaarOPQ4LrLKFQFVBRz9XXIa7ZaG6/SyFbdvSuYKp8ePvDTpzsO3+xYbGFcHollZMln1Ardrkct1/01U5wI3gnBe4K4RsLqC2hFLy5RUyVZxg0eNbBWuF7bBTyd7wgucOiOUCpLld5x2B357tvv+PP7P/P96z9z5A32WliWpbpHu46u6y7kMPhQR8c+PC35X95Ejpubm3/g48Afg9Vs4ZyjtEosJ9IiRQZA6Xw1KlxG2GZ1l+8rsJG2DRs2bNjwlYRNv6CpVfXC0F9REtzncpq4Sy1nWx26Oq/oZa9LKtGhXPa8rJG1lQGqaKNQLcyWTNGq6kzTVOud4kNVynJmjhPTMnGez8xxYskLaolsmagzMUfmNBNjJJWIFcVKqQdjD66pKbXi6cl16ZzDtxBZp3VHzAGejt3uVQ2wRUllJhVFU0K9kjP4voba1uV2rWRUIDV3p2H4dZ/NVfejth0yVfjLX/8biLHMZ0pJfPjpryzxEWNBHAQX1twSBI9rTQe+qY/SdrrQFlCblZJbwbwZ0oidFSOIEHzPLgwc+xt6P9D7Dt/XqI2uG7jb3/DN2294fXzNwKEOJRu5ERG88198e2jbt2N9TeX5++p56PHTzt9aQv/PxNp4sBIyEQihPien1TzRuf7ymHyrMkuXmJWNtG3YsGHDhn8JcbtmXM/Jm1yGp78Ac790wy/IoK7r4e1Wm01A1q+f7s+aiaCQSFoDadcmgdN04nQ6MS8PTMsnis6XgNtpGasbNM6kEtnvB4qrFe3FCsUy5lrRuhNcqGMxCR7xtRcBqdfXBfY2yhNXYzWKIgbBBzq342Z4XUeZJTGbQ8yYs5KTkl3iGDoKimpePaJoi/6oSmI1Hmg1nValUlrcBHCeHvjw0ZPLiGrm/v4jcz5DKPjgMM2gimjdAVM1FFdND+IvI0eHR0wIEnC+x1wlcdKK1MV5Ou/ZDQcOuwM3+0UGX2sAACAASURBVBuGbseu39P7rn49HLjdH7i5uWPf3eLxpNLqnxCc88+YmsjTTNuJ+8J7Yi1v14uz95qoici/5G9gzWFb/3OuKqt93yNaMKu1WWuTxPr4NtK2YcOGDRv+hViX//VnCNfPHTSbK2AlbPb8W6+L058o2mp50GeETcmNoCilpBqloakm9Fvh8fGepDMxzkxxvgTbjuPIvDyyLB9Rm8m5uj6XVFsIlrxQTFnkUKuqpBapm7OabC+CqKenr6+DWylq+38nOGsl5LRGgVLdiH3oOe6P3Oxe8/b2PaYdOc+M85mTu+fEJ6Z4JmlELICm2rjganeoh0stk28KD408qWn1ZbQ8t91+AMnM87lmxC1n1Jb2ujrKUvs4V2UONcwENYdQKOZwrpbMe9fRuYAL4UKIdrtd273r6EPHbnfguD9wGPYM3Y67411V3/o9u92eoevppMPjMBzer2G28uId0lSzy9j88+srMavD+WvS9K8ia5ePEy1jzntPtqq0PRG4ejlFLq7RjbRt2LBhw4Z/PYynnbQvcLJn1EteqmbuN0ZwrIStNHKWV70JxTjHkVQq0ZrnkXmemNJEjCNZE5/uP5LKTM512V4tkzXV2qYykdIjZpXsFU1kLXWs2tXSInUtUNbXGiLnHKwl4Obw9KBSFbi1+F1WtUfrvlsjVKUUnAlDv+f1q294d/ct//bt/4ZYR86R0/jAh8cf+en+A6fxnqmcSRarEQCrvDF4xLnLcr5csVxVbaG67jKm64eAc4Ja7TYVpzhfCV/J64/WHDHfFDXEIeYRWdW1gSHs2O0ODMOevhvouw4ngTdv3hBaLVQfOoZhz67r6fsdwQV2/R7nAp3zBOnxlw3ISi69C5+Re718CBBUV3L2uboFhm8j6S8pa6sC9s/9E7BGWv1lRKpaWu1Yhkbwbf39XD2mr81q20jbhg0bNmz4B4jbl1S2KzVOXhK5K3OAfP6zV8lorINOqBlpxRK5xGocsMyncytUn2fO4yMPp3vO50fGpSpLj+f7SsYs1uiK4FjXpswSxZZL1lmtWQo1SqS5Lr33II0Y+PC0u9TCVEXDyjRQcnVdepoC5jGT1Z0AWpP3h+7Aq5s3fHP3nv/87f+CpyOReJzuufl4y67bc386cI6P/PDphxZYC+IMt0ZxWEZS3SUzpKp4VlUyqd+MR6qao4qFevnauWk5oQohOEQ6xEvNHKMqazXPzLEfjnRh4Li74XC44Xi4Zb8/MnQ9IfS8ffUGJ6EaF0Kgc4FA34qg3EUTdVZ7N6UmzKJKDdvtn78F1t216rCUnyf2sr6PPt9tW52mZtaMAP88SHODXhS11MhYqn2uwfXPFLlr0nZdPbaRtg0bNmzY8A9jreH5koqBNoLwNLl8itZwV6dAKVXV8f65hhZTrs47eYqkiETm+UzMCzHNFEuktDAvI+NYQ2zNalzFDw8/kK3UqI1Yx6BLnJjTQimJ03Rf98ukpvSb2mV8BYqX+iBFBOddVZq8q2O3VpVkzlfSZL5WRYlcoi1iKfh1LIe03tDylCUmnrhESIZT30aSyhD2fP/dn/GEmrBvwqv9G3rf431gvz8Smdgfb/jh09/44f6vpCXS09FJhyFVacvSDBCOnEstb0+ZNfq16zq0D3Sdx0pkiREtsOuPDMMerzv6sKvKmO/rqFJc3V1zgSHsCaFn3x3Z748c9/V0GAaC73m9f/Ms4UyuSPmagVZz6a4iWKSafoPnM9L15d2130GimlP3X43Xr1/zzTffEP82kajNEvM8E6yO7SnuWaVVzplxHPn0+Il3t++BOi5dnbPXX2+kbcOGDRs2/Cb8nPuu9l82BWk9WodnQtqFwFm7Tq6+vSpphu/ASJS2DZaJjMuZaTmx5IVP9x8ollmWifP5zOn8wLiMlFLVsSmPZKmJ+sUKmhOpRIrWuqjQO8zV3iGra2m1Q7P2MYF0OKkK0PUe0irHldW6eXkyvu6vWVVZVGtXqHOtfopK6EyqQhi0Frubs5rJpo7O79j1R479bVWkpLorheoW5Y3j5uYO9Zn97kgIgWVZ+On0A2msFVh1+qo42eHV1QYCHGaOjKdGt3l0UVIxLJYaA1KEzu/Zdz2H/pYh3HLojxwON01B2xF8xxAGfDMQOAl0fqDvd+y6HX3o8YRKdi8RL+5LUtgL/uX+Q/6NBAK73Y7D4cBut0NT7ZAtSx2PlpIR9ZRypSK2D0HXsR+/dZS7kbYNGzZs2PCb8DJS4dkx+gtk7VqEq0Sthm8sJZLyjLiMamTJ1dk5zSPjfGaeR2KJnM4PZK2k7TSeeXys48+cMwXF78KlQFw8OBFMtHZyitL1vkWBuJpxZqWRNDB1BLdrO2DuxTJ7JXEl5cvzrU5VD/rUaGBX4bbiPC4XirX715qb4b2AeiyDM08IPbvhyMChjTafSuAdgUN/Q9/vEIz+z3sU49OnT9zf3zNOD0iErqs7VCa1c9SJx5vgXaAPgqNrY9BSR6IOCBkH7PY9d3c33B5ecRhecxzuuL295bC/YTcMdGGgkw5HuIw018qmJwXNPfvF/ya68SWnsPz7/5vw+AtpG4aBuTiSJoomJPq6S6jaSBsX0pZzJsZIKeUSA/Ly72wjbRs2bNiw4XeRtOs4hZXAPNs5Ci8OwG3UmckIkFEykazVlTnPlYAt8cwSH4g6XbLT5jhdctBq+Xpd8E8amaapNhLkuSptVtjbDmdSd72cx/m1f7OO2aSN4AqlKWBrDZNgOEx8GwnKC8bpLhENTwdnedrfawfVrIoLrXVAqlmBXA0JZiA+4MRjRVoYruDp6P2uVSdd5oTt3uueVqBDMW7lllf7t9zuXnPobpjHiZJncoEQamadd0LoA8HvCCEQQsfQHQi+p+8qeeu9wwchuOooPR73HPoju+41u74WsPeya7to17XpT+Ssvhfa3lh7P4TuV3bGvsQ9Pttx/PeP69DclXB572sQsRUsV9Lm1NN1DjNjWZb64aORtuv32vo39yWleyNtGzZs2LDhi1iXp68PTE8HEgWvV0dnrf5Oy5QWuZF0Zs4LMS3MsQbXns+P3D8+MM0nxuUTRStRW1JqBznDpC7ex5xxvqpaxQrWK51zdDhEAn3nmsEAnHsq9jZXl+qq6lWemSBqNMZK3mo9lLXnZ9Kyvpo26OQlA9HPVBClOknXcyZPZMU5VyuezCjZ6J1vzsruKnh4jUAxYk6IF5zrmhGj47i/5d3rb7l/+EhJkfPs0JIxhWHXM4Q9++HIfnfDrm+7Z0NV6477G0II7LqervN0IeC94L3D+4DnyOD2lwbO5utEcx1k+9BdVLI1k686Jtt42X5FOZMv8zj5D0LYrP0v58yyLBci5jpH6HvmVE0zWqAUxUvNb/Peb+7RDRs2bNjwx+Ll2Ob5AasAC8UiKS3EvLDkRCoL2RQl8dPjR2KZmZaFOZ2ry3OqxG2KZx5OH8had4CSlgvRcS1CQTFCCC28VhBnhO7JsedUa5enpxIJCmaO0mqVrNVZPfVv1m4FkeZm1BbTYa6dNuLVyEgIAdag3KYyCVpdoZdA2La3Z0axGlFybd6oi+f1Nvu+5/ZwS98NGIJqwllgHEd++nRPzInD8cirt2/oQoeSudu/4v03fyLnSNcF7h8+EPMMwNvX37Dv9+x3N+x3t+yHG/a7G272N/Tdnl1fjQR96OguQbnaXgmHsWsxHCulrb2orRHrSll8YmEXReh3Kmb2ha//vXO3lbSt9V4x1naNvqsxKLro5QOPc45dv+Pu7o7D7kDQoeb4tb+x6w8Dzz8cbaRtw4YNGzZ8JWKM9eBUzhR7YCmPjOOJ03RmWmZimSlWd9d+vP9ALDMxJ7JGsilZEzHNxBIZ8yeKpRbuqo1SOcR1NQetC2gAF1yth1ornRBwhmsNA2Ja+zGllqiXNqYS/zwHzF2NQcV5yFZ/Fp5CgsUQa0qT4ynk1dbe01amJa6Stqu+z0tkRTvoXqqfkoIG9rsDr1694ni8RRCyFvI087e//cD//f/+V6Zl5tvvvkdCx5u3rwFHz8C3r78jOOF42PE4vkM1IiK8un1L1w0M/YEu7On9QBf27LobQugJLfzXt+20+sy1vYIeVfdcTdS1WYGXy4hPL+M145KfYWbyOVF72Y3xH8GW4NZxdusehRr5kTOEsgbvriX3tSv13bt3HPdHiP1FdXuJXzIlbKRtw4YNG/67/BT/65AvfaP8+u3KL9y+Xv1/7fas360YscyMy8g4jsT0yFx+ZIr3nM4PPJweOU0nUloollEx7h8/kTWRTcEZ3jsk+KpG+cLtq2P9XoVUypPasDrsXMC3PS2coLlcuJVZbT/1rqpGtRnAsBZoC7Wc3YRLP6fJU8WRx9cxqslFObuoJ43JVPOBIFawS31UJXaFUu/b5arO0SqhzKoiaB4tBUuCZSPg2Q8Hbo53HPsjIPRhB71nSYmPHz9yHmd2w4ESEw5PIeMJ7P0R90oYuoGU3+O90HUe7zu8GwguIOLBQh0bs+7MVVJRtGqMwYEQWAOOrwmbauWl4ipZ/SKzuiZv8jPvNfklknOJVv6DoL/hnq5P+QOpYzWOGEYIteje+XXnL7Hkdb+tw0Tow8DueOB4d+TueAdzaO7pGtFiVvhS9txG2jZs2LDhjyRWXwiXlZdjo4sC8ct6w88pE/biMgOcQvel+7+675zhhdj07BC2ZuOWq0diKFM6c5oeEDHmNDEvJ+aWfxbT3NydJ5Lds5QTy7IwzhPjOLIszUyghZRivc2Wjea9tGX5gAtSx55NhfDDagCo4at1FOmggGrt1/QEnDxFJhRNrWXz6aB8UZSkJuqvLVS1iao8S9BfllLDZF3AOX/ZRzOrGW051WVwcVXpMys1zqEUVDOBgltHqqXUTC61ejB3RpCOtBgDPe/efsefv/0Tt/tjjScRMDzn8cQ4RfphT+j27PfHS9dnL3WnzOPp3cDx5s3Vu+CJ/lwMAxeF5jnrcu5lBId7/n5pquIlX+/n3pS/YWft566+ju77Y8aiyiW1+Jmb9eVf0PWpffbafT1xcyh1N1GLI0jH3d0N0kemPLHEhVxaMDKBqMJSlFQiSz5j6vnbx//Km5u3Va3rHIayxIWh31OKVeexbaRtw4YNG/44XB0n5OeWdZ6RNb36h/iXw0T1qvFJX/K/l+KBfH4aupeETy8kbd1uyqz7X3Vfa9SR+/MHHs/3nJdHpuXMebxnnE8sZSLnSCmZbBPWJbLVwvWUEolE9gXrwZvD/PNDzGVfLXhwrpZ9i1RVqCleZk9sct1Bq6qZa8G2dlniL+KeKx9WSaeYA9FGqOrvRcQqoTPDUQmYF9e6TXPr3KwF5LmNO3f9rjUgWHvtHeIdXnuMhKUFsVJVMVNcMUy1/goKOO/pxXPY3/Hu7h1v7t5w3N/QSS2aB8fxeMt3331P3+9QVe7u7ri5ucG/eG6VvP1z379fdf3vvJt/zR6b/sJ5/cPuxbW/oaHbsd/vGYaeKbsav2Ie5z2h21cF1IRlSfz48SceT0KZ4H9+c2xqtqKE6tdtY1b3BcK2kbYNGzZs+KOPd/KFA4RdM7pV4fh88ef64pWYXXGYzydS8vnR8ImkaSNpRrKFYoZzlQillFhiJOaF3IrWC4VSFs7TmY+PH3g8fyLlyDg/cjrfc57P5BxRCohSyIReUMnPog7WVHqRmsj/8rp1ydpEUG1P4CXbldpcUPs1rcVv+EsMh7EqZnZxfF5ebTGcajUQiD1FMaC4tadTauSH61c3o11Yslmu4bQYOY7Pf7UiOFcfixMw9XjpcDg636NWEIWOQHADQ9jTHw7cHb/hz+//B7775nvuDm8I7OpeHtWc8P79e16/fo1ZNV78s+uX/mP9BbqrPxr3i0p2fYf4P5w9Dm7g9njkuN9zngNBfVNSO4LvwWr8xzRN5DIjlrDF8Z9u/tfL36q7+mDzS9hI24YNGzZ89ad5/Zx1/SK7uyZ0X9ZN1j2sVUiTVR+zWpe+ViYJRpGn4Ahtj0Uv8RsFB8w2M44nsibE1W7GcRybceBEyhPzPLPk6gJd8sg0jcxxwnthSmfmeWJJM2qZYlYLyFFc9iB6IWK+dVCuBdorWbsmbpevL6fXpOj5a1FNAJ9pjJdTk5dkub1qsha2r+evbm89bTt22nRHa7toglbDghrLMj2pdZfn2NN1NdAWP7RIjaGOeMXTOU/nezq/425/R/AH7naveff2e17ffkvPvpoArkhF13XPaot+KadrwxUhs58jZz9H3NyLD1P/WG1WKWs1m7Rqr6cPKb0P2KVyTKtDumSWmPFSCLn/qv7RjbRt2LBhw9f/sw1tkfg523A/E4nwhYOL/Zp0pwiKF/BNc1vpWYG20wVKppDJmhqpqjtlp+nE6fyJmBfMlDlFzudHzuMjKjNzPHM+V2JWd8Ss9XUqotT4jpAIXY268NY6LnPG+Triu24TuCYeq8q1Xr7mvl1Ce3F1dNlqoJByEQ/NqrNzVcGe3I9tWCy+BfmuGWItI63RV1b1QhS9jEntiRgrlJLb61fjP1gfD1VJ61aCLELnuqqCdbvq+nM93gaGYc9hd2C/3zF0A8MwtLqnPa8Pr4HAIHv2uzsO/qY1DIRa9i6KfIGYbaTtN8K+fh/tD/nYpor3LePO6vkYMxQIh56bu3eMU+J8GlGtxG19T4t7CtS9rgFTVbyDnJXOb+G6GzZs2PAHK23r1+7LZMxoyg/PZ58v//mV59+iaMtCu74vvfg6a+tAolDIJTKnmZgWljSTcyQTeXi4Z1pG5uVEjAtZa/n6NE1M6UTSkSWOTNO5BoOa4n1VDbquwwV3EQV98IiAqsekYOIZ+o41sHZVo9YDzxp5cZ1Xtl53Ce118ozgPX89tCpfK2lbJ6frKHNV4J5ZYV8sn1+NTldjw6ruqRXiki4Zbh6PFwiuI7g68vS+9oL2rqcPPcMwNNK2o3MDu/0rhuHA7aG2Cuz6gX2/Z+h2dN3AQSpJMzzOwiWCw7SWxDv/ZZlnzaHb8Cv4JRv0L133ix+SfvtdO1s3FIxSjGVJzPOMeGMYBr777jt+/HDPMkdKUpwzcjOypJK+qLRd/52wkbYNGzZs+KPgXnzSf/m1/Mz3/cyBQ16SwdLiAKwtKtfss2SJmBZiyZzjSCyZGGem6cw0n6thYJnImjid72tDgS6kkii6kHN1dqomTtMnVDM5Z3LJTf3yUAx1hV23e1LFzPDOg3f4vgMX6Lv+4vS8rrpaz69k7JqQXZM4KVVpqlXrbTwpq+1CLuNNEWl7bnI5r2KICZg+vXTtdV4bCuRKYROEtmjUDuYeLzVaVkQILjCEgX79j57upqPzPUO34zDs2Q8H9v1A53uc69jtKmk77PaV6PqAdx0da3env3R4Gp6WG9J25jb840rbLxAw+ZlwkWcfpv7BfwEasVaoRpwlkpbMcOzY7fYcDge6T2ccnq7r8H0gzo5lyqTWAFLXGNxnO21buO6GDRs2/OHwjSjI5+RtdRG8jP64Ov9MeLsoaTXGwNrw0yjUfoHInEZOpwdOpxNjmoiWiSUzL2MdeZ4feZwemOeRVCK5LODBeaVYjaQwKzWY1tfaJukd/TDQWV8bApzU/C/vkVCzxkoGkoLVvTUfAt5VIuScXBS1a+XgpYpwHbVxIXL2fN/tMz4rrQuzJb5enxcczuoKt3tB2uRC3trRvI0+0bpLtzpQd8MOE0dwji7Usea+3zOEPYPr+fbd9wyh59gfOO5v2A8Hdt2OzgfEe+YpE/odu64n0PFEN33NgcNhKq2U/jlpkBfj85dq5YbfKHfxcx96rvchfz3/7Kv++v0q6Bla6kizlIJIbaEQtRYPo/S+p+/qh4QcR1LUStw04/GsHG0la95vpG3Dhg0bvv5D/dUuloi0GInwhaofvhg8Wq6jLNaaoPoZvf14VdKmPBPTTCoz0zRSaAaBODLPI+My1p5DjZyXkVQKKdduz3kemeJEypGsCzHONTLElTpWbIXqztedruG4fyFOuEYk64Nf4tpRUPdvTIVi1bEnYpSSn7021+5QEWnF7p+TMu99LTIPw+VAuxaSrzlpoMRlwfmrcaGs7lEwU0rm2eN1zV0qjQ07qaGzfiV7oTpad/1A1x8w6RFXD7B9v+PQ7do+2kBH4P03f2IIA8fhlsOwp5cBR40qKaYcj+HKWuJanG0lCJe3gPyMyuP4Iqnd8IScc60Suzq/lqurVg4uQiM8T2TNSBgFRyDmiHM9KWY+fXpg6I+8ffv6i+Lc74Vm8B109GgpzOeR28Mtr1+/Is2Jx8cz54cTcYr4vWcYBjzG7DpiHmut2/nMu9t3AKSS6Pyu/ntRFLeNRzds2LDh9xG164PqswOrXfjWU2oozw/G61RUud5VuzooccaINUE9xUrK5pFpfmTJ/x97b97eOHJlff5iA8BNUmaWy11u293f/xvNzPP267ftsis3LdywxDZ/3AAIUlJW1uKZts2oJ4sppgSRIBBx4tx7zunZ7Z4IJduz71sG3wso856YA13oiQRpgI5eSp9xIEZPImEqRdZZsjYVKKOnEqQkDrgZIwWY0tRfXnjKo8eZfJ2ToM2xKBRDntSjl2KEl5ijS2AyDN0zFu70qFku16+ydrp4rOWsJyVqjhBTQqVETopmtcAaS2UqrK0EsNULVsslVb1iuXqHVhXWOmrrBKyZispUOIwEruuaxtVY3JTTqRjb8cKsED5jczIvP/5/a1b2Dz8uS+5n92BhesV3MDAa7SY8EU9KgRgj+/2enA19F3h62rFZ37G8XVEZ94uNfkvVHq3AKlOiwyyVdZjKcf/xgd32wDAMrJcblvUSr0crHIUfIsMwvDrfXJm267iO67iOn7hoPANrs+FDQGsjzuUXWoN4Bs7SBK4m8KY82+1fiKmlD56uO3I47tkfd5IsEHoeHj4T0oAPIjDw3pcSZymaKj+BwMkAVknpUxIIKpIqCkx9Ap4S06RQFCHBaR0smOKk1NTz8l3Wp5Kmkj4ebZgsPsbSzpx5uwRj8/MZfZjSI8YYqrH0KWXNkt+ZsgDEERdrAaFO1SiMCAxK/FTilEP6ZvUbnKtpqgVNI31pq9WG9XpNU6/Z3HyLQhIRnHYYpXE4KVdhCnc2C1KHC9M8XbI8L/oWX4sW+4mJAtfx/F48fR1IWpHIJAYCPSEd8b4jlI1L13Vst3uCh67r2e8GfkPgTfwGY9YTK/pzx0lHogtz7AjUOFfjqpr3H36ga1tUtjSNhMWTVvTHI/3eTyHzLw2tr6DtOq7jOq7jJ40RhFxaWYyPpjIyuZZaWJ7kAmEKR4850PmO3g94P9AHMbPNdDzt/kpMHSGEEgUlYoK26/ChZ7vfE5NnKB5qKSWSEgWllDgFkGldCnPWoLUAKLQ6YyfGKCmlitWGKpmbec4snlCHzhqjSx8Yp8iuqdypMilGUGoqWU1GtjPLivG58e9z0FZXtjB4agb2JH6KrAg+FauETIq5AFGHwmC1ozJLnLbii+Yc1lYSSVVA1Lfvvi2graZpliImaFasVitqt8IWzzTBT4ZLA4aJQC2luBEha8ZoLv1CNNkLwOwss3OuOv779Fr9s4x5mPp8ExBCYNvu6XWPpyfEjmFoGcKeYWjxoSVGTwiJ3W5HipphiLSHSLOpGTiSWEh27c99ceUzzeXRGlEXD4hPobOWpqoIqxVaVdyub3hz+xZjMsF35CFjjSnGz2K1fP5+Xwb1V9B2HddxHdfxpTX3gmU7fZ1QNhXzjVQsOhIDnj50+NTxtN/i48ChO3Bo9/KnOzIMAzG1dO0DOQsD57PsvEMYCEmalwcCMUeC8iQTSSajtYAkbYCYMUAuLJfWCqUVWhvQqiQKuEmxKEDuBEvylBl1ThCpLO/IKMu8xqcY36/0n2nNGRh7tq7NGLex1DX/Xqc1o7lJiqMdiJRhcxYGKyfJGzVWAtKrqqaqKirdsDA1C1uzLEBsuVhT1wsqU6G1YdmsZDF1DcYIm+ZcTW3qApYMavbuxMctzUq7ksKQE6QkC6vWIwDmHLCp88V8Ogfle+XpUBbocAVsPxG0jddNjJHdbsfHpw88Dvf0qsWHI8NwpB/2DP6ADy0pBZQytG2LNQ0xaPo+sR82HMOOm+oGV6LEfhkFKJojZ6UsagfJy40h8/bNO5aLANmwXC6pqoqmqXj79i2pT6i+OVOJGnUOUnnhnrqCtuu4juu4jtc20y/5h5XnUw6gApGBmCI+DrT+KL5ow4E+9Xy8/8gQW47dnt1xx/6449Ad6IeOGD3RH6eF/4yvGQO+jSarTE4ZbaUkKK4bFq0yDKFkVEpkk+SaFoCURtaolEOzlv6vOQzL/hTBoMS/TGdEVZqR3zsRRLEsLALcEpqqqkCfmLZLcDvvSXoGhnMiqnm8lRHRgDEoI2XbFBXKOClfWvFHq+sFlaupdcU3q7csbMVmdcN6vWG1WtE0SyqzQGuDSgqjHRYHJUdCRALzAPVUlCFpxoadgHkml17AKEkJZ+9z7qPHGQDIF+2PkvIaSQR0Afrq1wAN/0KbJ6UUIQR2ux2fPn3kh+6v9OzxoWPwAthC7IhpIGeP1hbvI5VbkJMR0Na/4ej39LTU/MK4sCz5wAaw1uJcRUqJruswKbJa32JMTYrCNrfHDk3GKPFCjMEUm5301YzfFbRdx3Vcx3W8MuY9WimJRH8YBvq+x6eWo//MkDu8L+rN/iCgLbb4PLA/PtDnnm440A4dbb8X89vopUcnp3MGTwt4OaUMFE+BAoq0UqCln0wB2qqTiADIZyIAjbEW0KL4VHpSVWalgYjWYisy+k/oomhVCGhLORQootBqDF4SR1GtMto2JHUeV3XJisxVt2cK3JyIoccZIyCsdtR1Q10tqdxS+vGixui6ALYldbWkrhc456iU4zfrdzS2Fv+0xYLaLKZeNNCgdfFKO/dte0aVgNBpzKjG6XNJ5fNIF+t1nsDfGJ+VeR6LdILkeQbcEiPf1dkOqgAAIABJREFUeW1r+/Km6XLzlHOm6zoed488dQ+0ek8IHSG2xNSSci/+hipgVYVHJMYxavqYGWhJNhRRSfoVXqPA/8pYtNbEmOiOLfiBGA3G1FLqHzzJB46LihQ6DocWGzTDMDAMA4uqfgZSr6DtOq7jOn7dSfW1XfEvPcDXHjT/9F8+Vq/yM34rTdzKOXsiPWqtP3I4HNjv9xyOezq/5+n4gSEf6IeBrhfLjc4fGUJPxINJRDxDFFVnSIGYPEmJBUdVV9NClHMmKV08yfRpkdKilDxr9FcaUkRpsRyRnjWFynpSXmbG79eoLNFXOiuJqSqlF2HpZsBDJTkGCVQihMKqqRl7potgQWmM02KLm/JEOgkgk9IiKVDkfdIPl7J4n+RMTpB9BquwumKhl9w0b1mvblkub3B2yaLZYE1dANuKulrinOR92mxYmIpKGSpTz5rKtYCi4rGiTYFWM8uVyY8jjqCVUSb7MqCb5VDE5InFULhx9VcxZSd4oIveEU6l2Vlm6k9+nF/Y+nT9f9E4Nl28sp92Q58JYV+9/9LEUspX6Yu/ZhSe6NMWQbjJEKb7QEqlctwQO/rhgI8dAbnXkvLCNhstVi/a4KqKhLQLhJinjVjjbBGQ/FL679QHmpVD4YghE3MkRc+h61k0S4ypJfO339L0FTlF+n3Pymk6L6KjplqSZhsMoy9OVNk0XEHbdVzHdfxswJa+sEi9PMel5wfJL/zk16K+wLndxsWxp9+m85RZOV/yxhTPSJSJP4dJremjNDj3oafrD+yPO7aHLYfDjq5rGWJLGw704cjxKH+GoSPkJFYASk1GuUopKbGpjNEVVimwwt6lcVetQKsT6CJDiuDqBmcF3Il6NBb7DkvWrryHEXTNzmRm8lE7sQJlOVQZkiLFC1ajLAzST5awtiIrCDESwiDiAiMB59YZuuOhsIOKHCEHAWwiEjCYZGiqBXVTk4L4ruWccc5Ru4paGZx2VK5huVyzWd1xc3PHenVLXW14+/Y3aFWhlcPappy7avrAFQn9AgjRGKQ9SJ+DicvrypjScPaaoMA8wyNWW+wrbvXqlXtBnbg+wMEZS5d+weOEGM6B2+V99UwEMXbRX7yPOFJHSRoWy3U5ffvsp00GFRjdhAsjLL8jM9AOe5QFj2xWfJR+zSHK31NK9MGzbtbcrO9YmQ22JEmYcv0754heotVyjvS+w1i4e7um+WzJDz3bp3tcbWkWjrb3oByLZSPq0ixstVYVVmVi6tGDgiFhK/3LWM7ipOxqyb+t6xV3b77lT+//Dx8fvkdVim5ocY2jaRqstSL8OUBlLE43VKqlT3uG3BMBe8kIqyQMsIrT9XgFbddxHdfxi8Hba/yEfnF3n56zA/licf3aiBnzyva94B49ATMKgMoT8QOJgY4+tKLY7I/0fcex3xeftJY+tAXEtXTDkda39H2L9z0hBbrY46OUN4Y4EIlk8gS+pNfLnqkmx8Z9gJiHWRvVWBplUjRaW6KWRrZB2YkNUlkTKOxQVig9N5eVvjTG5v88coglFirLOXfGAmOSgSIpUwCbAcrfy/uAShbe6IkpQoiT9UeOieCTBGVri3aWjKbRSxZmybpeYRcOtVI4Y2maBatqyd16g0b8rSpXs1isWC5uWDRrqmqJ0RUKJ+cQJ2Ds7HP+hc38ag52v/Y4+qf/iolH0i/cKemXAbcSyUV+YSP0gjgil88/z0DsdE71SB+Zl++p2VNJCXB7icnrw5Ft+8i+2+FzL/eS7+n8wBB6fEjC+CrF3eaWIXu4zWzUXWHaxGfPajWV+uXeAW0z1imsFSCHaKFRWhi2TCZlRcqmxJxlKZHnhM5afNXir9tJmKRTDZQR4Y8yZCU+icpkAj05B7R24hXYrFhWC2w2uIXGVgYlM8ckfNEj06bi2Yx6BW3XcR3X8bPXu3mx5iVQds6svTDDj1FP56vbDLzNSlbqtd1uLn1CeTqkKjpHiqITwCP2G2NgeVKe7f6ert+z32/ZHnfs91t2h0e2hx3tsKfvDyQVyDkSVZDdO7H4pEn4c1ZMOZuXthbW2mfGs3P1pIkz49mpUX4MRddYK7YbujBhmnhiw5TkgebS0K4KgFPF/FbpTMppBjMKWFPlTKlU/NrO0x5QaRZaLYo2Y4y8tqwklzQGcgSlnBAzEXTSkBSVaViYJQu3FFVns2KzumVVr6irimWzYr26YbVYcLe6OUVOKSsGuKopr9gW8GhnNA4/raT+DzF+LnyY33n65XvpgmWUEnwpTwNGuecbpZ/asnBmLC3xa/v2wKeHT3z4/Ff61NENHYfhSDf09KEnBrnWrK3Y3b6BZFjXa9aL0V4mT71ip9+jip1Lpqpq6rqZrlOt9ZSyEcf7M0asPkGcl4yff5VJcHb/jq9jTO0QoU5J74gRrR1VVbFYLFgv1tBnqkrsaiayMxbD3lcuiytou47ruI6fvWiosse8nPPVFxeai8Xqsmw1+3tM/gTaSm/XvPcs54jSI9gRkBaKU1ok0Q8tMUtZpvc9fS/RTiEEfO5phwf6QXI7d8cdx3bPoT1ICXRoadsD2YgXmjKgjQIzljPNKWeymMteLgxzn7eXbDFeTgIYHzNKSSTP2EOVCwgVYYT0u40AjCyx6xJeoMvPl4D1cVlR+Yx+SQxQRBbTnzj2pQkdo6zkbCoMNiusbUp/XUVKFrTDGSOgSzsa17BsVtSu5u3mDU2zZNOsWSyWLOolq2bBarGmoiph6vMPfWSjDOeWGC8wsf80gO3n9rQhlEy+AGyvAAu5TgRhaZ1KYbmILIgFF42l+QwxSfn4hcPlS9CmxippwhPYdXs+Pnziw8NH+lREOkNL57upNErW5AjEzNu735BSnDYtueiTL21R5H6KIkSpqrN7a7wHY6n5p5ROU4xSZ+2Kozfar7uJlU3a9DqIGGPkHBeGfe5bGEIg+0QI4ey15jwvnV9B23Vcx3X8qiNOnlPnRJn+ClZBvbxrVSMkA2WFMZNJLArLNSsNpbNuaNnlH8Ketj3S+47d/gmfPH3fStmzbcVyo2+JaSCpI0MoWZ0hEKOXnhvVkexAcj1ZZ9n1Gk3W8xzMjM5OemZmgG1Ums7HawkBY6bn9JxKE2CTH4zEmMg5nbMDWVg2jC1KUlk5s1LEcUHKWcxxOTVLT6e4OOWGOJBzPAG2IGCQmKT+hYIQwVRYo6msOLuLH9qSmBrqas1quaSpl9SuwdqK2jqstrxZ32FtRWPEJd5qi7OOirLgliXoVNnLMxsM/UpJkX8yyaX+eY+5nJvXQOwI1qb4tDQxz2nGQFNYaqNOTC/lelPqy0YUSTycJR0jDZgCtnp/5GH7mf1xy5ClhaBPXthuLQBF5UwMkRiFyZ5njM43PKcnNUpJ8oXR7ozFnn/veA9eMmxjn+l4/PRrCBEuhjEGa4uKdP77CwMn6tLI4XCgP3SoAe4WbyUVoRkZxozSV9B2HddxHX8Hpu28x0Z/xcKkzp9TL7AB5bhpanseF5px/x2mfzOnFExaWvb7LU/7R7bbR479QUBbHBgG6Vs7tHva9iCMW2rRLpCynxYJ7QSQZZfRJmOVKNZUsdoQL7HRqTYV5m+2EKR09njJrI3PjYuKuVhs1FkCQyalKH5uMU6LgjaCwkyWXFGJUirMWS4RTnkUFMQZSFOzmCr5/phTYeCELTTljKqs0FmTg4gKaisGtU2z5Ga15ubmjuXiFmU31M0Nt5sNy8WaytYYFEZZlNIs7BJTYqY08xLw+L7NBeA/vz7kfecpyeEaqv4C5ZUvvn4G1uDUJhAn8MZkCl2uEyUiAFQqGbTPjYOnyLHxVxfAlsmE5FFak4kEFTj4PUffEtRA1gl0whqDGsvwaKp88vjTWs/mFI3RZlJGn4QQJ0sZrS3GuDPANt8cXWbe/r1A2zy5YA7ayLLBE6bt9Lu993SDJ/uEGuDd+jcMw0Bu8sR2fukyv4K267iO6/gFDIF+hUW7sJKYm47O1hcuFpaTTUAqk2osqZ0DQ+jovZQ3hyj9ZVknfIz0Q8vxKGXNQ7elbcV249hu8cnjQ0c3iIig70URGlOPjZpcUt+ttVS6wiphr7LOGHd67ZNB7fgelJHQ8nzeF3a+u1dfmOzPd9Snkug4aZ+DQaVz2bHLuY05kUoGJ6nER6XyGsp65IOANgFremo4H8+/rSq01ljtJHrHNFTGUikrAgFd05iKZb2mqRYs6iXrxZLVak1T32DcLVW9ZLlYUKmmQD49wTABaycLh+dRAV9mcrR+PWz+n2H8kgKdulSIXgC2ND0dCmSLJIayAYpkIj54gveQFI1ruKluCvspwO3Z8S9ff/k9kcCQBwxO7ludidkT8wA2o4zCGAHsORnx74sRV9fSe5nC5Ak4ssTP2NQScaa03HPSE2cn0DayxZk8lUu/BNry36HGPvbVaS2pCMaYomKPJTtVNnPeJ2IfSK0Exo8lUVUQ8RW0Xcd1XMffadUxFwCNoug7gbj8Aj93WgcSJxenUTgQytQd8PQMeIah49huOXbSZ9YOHSEMHEoZtOuOtN1RlJ3JCxDTcGy3hByIxSfNpx7PQNRenOltQyzAIRup9UQNZE3KCV2c+WWR1LNFURSaxrizcuil2GBeprn8+xyE6NK4rMuMrYoqU886vlTxVTPGiFouQ9JinCt6jDENIU8gLg4R0CU+NJ8xbklBXa0wylBbSRpYVA2NW7BwDUZZNs2GhVuwbm5Y1gux77ASwG5sjXZrlKmpylIyL41PUetj0LxSX4VSUio/QsLaa1rAq7eemgE39RxInZi1UPhpKU+GOBRBTuSw35J8ECXyYoMzloVZopSbMmdf2qo917BGOWYpkGJKqobVYJP4+VlNyhJXFkmolNCaqTw/ssmRiH4eJzHL6Bw3KOdK7JOQZiY6yM/7Rf+eoO2Z0MgYUkykOLY9xLPvDSE8KwX/2N7kCtqu4zqu4wsLaHqdPcozBi0DMZO1NMKnBEOIJQNTJqJUJiStmBVoPApf2KtET8/gu+J3NnA47DgOe47HA22/ZxgGuv7IoT0IUBt6SSPojrTDkRgDSaViDaAIsYfSk6Y06FpT1xW1svKSo8KdgSxDTgqlNEqLP9nEHOWZMrT8fRjEqOrSzmM8R6/FOE22HCnNLDoEscSYUUn0sKQkZcZqIcwfCt8HVMr4DEMajXZlwTKlR84oKUkaY9HK4owRIJqk9GS1BMvf3f4WbWtWzYL1csPN8o71cs2qXlKZmkrVVLZiVa1Z1ksqU039c+KB5UjzRvHZ/8/WHvUKK/SCauW0fr0E2NILEOIfFHTljA8J406MUEySLTt36vA+UDk7/XvOGWtOofbTeZz2TomQenwayDbRDUcO3YEhCEPtQ8+xbemHAyl6fNdjteO7d79ns1yRTIMhE1OSEiW8qi5SQMBjMayrNZ6OwIAyYOuKfID9ccdyvaCqanbbLYHAarXCNo58hOAH2u5IjB5IWOoz6WRxpSH4hKsdmYDWls1mI76BWhf2yqOUYrFYoI1mt9uxWqwwxgg4CqLmTCnR9/0vj7ACYgBzEn5OfmzDMKDMKRFkTAcJIRd1t6Oua6gzbdsSQpjNuRlr1avn/AraruM6ruPVofUXFsX5QqwAc+rFUAaZ8NXkQTnN/aMfZ0gD2/Y9qIGYEyF4Wi+pAv1wYAhDUXEeJG3AC7vmfU/bd/RDS85JDDv9wBB7Ug4SZK6UCCpHQFiMa1G59EZJyS4rw7zXK40yuDzulBcTO3VaScuCmdOzvfpl7M6XSnoKiCFgUMTyvWlSekp6AarYByQgKXwJVI8xETJoUxNiIoU0sQzWGqyVxcNaizUVTVVhTSUlUFdTWYdzDW/f/g6ja6qqoakWLJsli2pB7Roq5VjUK6yyVLhT4kCW0k/OSXoA52vLa+RFfuHfv9aL75+NIRvtVRQkJRmx89K61nY6MYpL64d0zsSUm2ty5SfS+ZZD98hxONAF2cy0/bEoNwd6P4g5tO/QKjJ0PZVe4pzjze0blrc3YiNT7t+zz+5HPi9VCuKSwymeZDqcqz/1LO3AKMnDzTnOmOjX+mNnDH5WGHMSI0h58Sd+Br8C03Z5e/9YW8Ql6zcyjCPL+DXjCtqu4zqu49dZjPRpyh2B0lyrNv43RE/XdfRxz8f7/03KLT4G+r4VdecoFgjCqoXU40NPjEE6caKf3NVN8UDKZLSJEhKkis+ZzuSsxZeKMa9TesCSKlYdxV1/WjTLAjqWhow1Z+zRZPTJmPMZz1ayL5VAX148IinPJ3szm/xnpZ+pZy2RYpQg9QxWVVLqLMIDqyuaqmFZr8UPql5S12LB0dRLlk3DolmxWCyo3IqbzW9QCJiz2mG0wylXwnT0JCJ4FgOVwWRNcTN4Ds6+hFS/9PWP/pt+hXH7BwFqF6y1tZohjCkX0oeVp4iBwjQZXaxeMlmJ+CUjoN2N16UCRSTEnmP7yMfHH3jc3vPU3jOEjjZ0DEE80oYg+bneD1gifhiwqkEpxdvNO25u3rJUZhIC/LjFyilvSaGwWGrXsGoWbK0YIosqWVgxgyMnRRw8RtXSbRe92PuQzkDN/Lo6bSD15IFY1zW61WeM9lyMMLfPuCyj/hpCBKWeb3JHYcVL9j55vNfLf8K+Bbz3X3n9X0HbdVzHdXxhpJRenIAm89XCSGl96qNpYyvxSUbjQ8+hl2w9ZTQxBQ4l8snHPZ8f/kTKUuJsh562lZ61rj/iS6i6mGXGQn4lEQmMQC2LiazRoLUpUVHqxOoF8WuT1yqGnSkrAW1KYfQoJDj5oo2CAJ0R64tiN6KUEhAz2sBrRc62JC28zrh94eyW5mhOAoJpgjfFWzifABwGawzOjokIiko3KCWAy1pJGlg0Kxb1EmsrNss1VdWwrFeSNlCLAnSxWFCzBupizHsSDlwGmasSp5VzqcBd6gfyjzCxX2Pi90/OuF2qGsV8NaHIGAsxRbQxSN96KNXOE9vU+Y5hGFgulyisMLJKSt6Mthtkkhpohx0Pjx/44dNf2HZbfOrw2eOTJ6Qoj0GEPIRAHDyalvuHBfePH/ntN//OcrUuYpvnn++lqbaaXTcGQyJSVRWrxZqUMsknBqK4/mdJOTBofEpgRDww2u186aJSZ2yfpqrqkusp5U+VT+yVyurVKsHYg/prgraRtTs3+VUvMm0jaNNKT+99BG2ZH9/oXUHbdVzHdXxhUnqZ6h8XHVSceLREoqfj09Mnuu5ItuIv9nl7z/64I6lETJ7dYcfhcCDljt4/knJPjBHvhQGQMmggpGI6qRSy6Z8sYtFGYxWoFLFaocpEaYyZ6km5TKKx7GiJUezHJtMyRdKnQGqt1CkuqjTAh6ElT71qGqOd9MtJUChR6amgecmmAF8se6jSs5ZSJI8CgqyLrUgRFyQkN9FanGuoKvnjbI3TVkQBxcx2uVyyXKzke0yFVpamWuCc2HU4V1OZCmcqTEkayHN4li8UvnnGShTD3awNRv94s/QciOXRIuLicQ5ev8zi/JTn/+dteuYszLPNT/nPVAZbluPWt+Lmby2NbQDYHrbsdju+q79DWzFudWcebSI60Drj88C+feB++5Ft9wg6kkwuhtPC2WHBKsg6oY2BIXPsDzxsH9gdttyt3lHhvuo96qzRarTZFrBZaxGrxCES+ihCmwgqFXVkFoCnM/gUiMmXnNwLSWyes1icbWqqqmK5FNCWZ74bl0xbzrm0RpwuvHEz+MsnyNkmTcl7n4y283O/OEpqgnTJnl5vjDKPavI0B11B23Vcx3X8LNB2uUsdezBC6jELRRcOZemNPDx95vsfvqcd9tja0Cxr/nb/Zz49fCDkgI8D+/2WbugwOmFNIuPPHPkjCUxG60wYBpQxJdi7/H4FThsEyQngkRJhRlKeSnBf1hjjIGZicffPaV5+GSNzYvFeE0bLMO6GMyEHFBmVtcQ0qSj5hSqTs0EZ6fUaF+e5R9vXgDadc0kkOJXNjDEYXclrzxajK+k5q9csl+KH1jQNtanYNBuWrma93LBe39DUS4yxqCwMotMOoy1WuROjlsdkCU2Kp/Lu1I848wURSxJFNuNrjGXx06+TImcO/CfgNj6eOpZS8QJ75QBnOkX9D30PPVMuZrHg8KpniB3OCkCKRPaHR/q+p6oq1O0tla74fP+e+/t77t6sada2KKzN7HRJCogho7QnhJ5+2NMPO5ST1xB1mtwPlZXyp61qrLLEVhH7wNP2kcfHB35z+x1VvfwyWIOJuVZqzFUYbV4MzlWQFFobnDYYZfFRKFul1ZlVRwjhrBn/OT12zsYqpaY4KAlifwGoFYHCq0zbLIXg1xoGM6UiqPjjTNsUeTVTxl7Vo9dxHdfxs0ff92dgbRgG+l7ioHxqiebAtnskRk9Wicf9A58fPpFt4vbNBrtZcRw+8nn73/RhwOeew2FHzJGmdrg4sgSz2VMXxkuBURptNUbb0s9WQt9LT7y1uogIEiplkkZs2vOJl0sRUlJiEVDUldo4tElAV2ZT2eFrInlcJHLCOgn7UbmwBSkTkyr5nQatb0UJO4+BGv2iXkhGuARti+rU4C8u7zV1taJyC6ytWDRrtKpwdimWHM2G5XJF0yypbM2beoMz0sdW2xqDK1yHLvHwAtb0mDJQvK7Gtd5M751ZnFjmXDoiOM0YpnzXAn3RuHO7iZfYprP4pfnRE8KDXjaef6lv7R8LvF0CtpQSwzBIT1ns2HaPKAt3d3dYZ+h9x+PjA23bFkBiCHXNp08f+fDhA7///b9zt74lRE9lqovPKU9nNylPyD3agqoyEsEprG4iY7W49bjKsaoavM48tC2P2wfuHx84fHNgXd1hvoJR1Xn8dDUxR5xSUz9kZWtRHTcO6xxd7wnBY+3JQmdimlJ6WRyQXz6vTtXS03YBzuZ9gy8ebgTNvyJom6xGUC8yqs+uCU7ZxJffr9TLQPUK2q7jOqaF4Ufc/PPPvLPVCzvF/NK/f2VvxY+9DvXa+/u6Re8sHqo8sx8eyTkSUmQYOtq2ZXeUOKg+7Nl2n9gdP4vc3mrJ6xz2rG/X3LgKUzVE1TGEI/3Q4lNgiB3Sm6YIafQOK879RqOxZK3QylBVBmMrtDYi1cejUkJhMUrjnJRYhKErfmC6LJTFBymkYl0CxflfY5zGGOlJE6PONCtvRhEiqExlK8k3zZmYIzlKOH3OmZQjtYvigpUSxDSpwXKc97OdTG1lkRt70gyb1Tt0ZlJ1NvWaxWLNolnh3IK723coHMZUuALommZBXS+orGNjViXFQJ0xVBmFRRclrZnMbXMq3lVjVVTr82ukBMqPI8QwsW9KqVlk1tcCqDGw/tRBpM64tnnv1nnE2Xkc2gvMnvoyKZPPXsNrGZ6nQ+UCQ78+Nz3NTKGfowtdDpxnLzakKJFqx47eH/m0fU+9NNRLS+McfThy6LYc2z1Z9yy9Juma7eETT7sPtN2OwEAOCWUkfUCMl+XzjxgytgAohasrVB1Rtvj6+SQGtRisshganF2SrSelHcfjlsPxM63f4vMbdEm2eHXKyac/WmmUN1CJIlRnsbVoUkW1cKhKzrkANLmukqL0rKZxu/RsTssXYhc1sVq6lPqtsN9ZT/cmWcqMc6JNWjqkgBs5pTL8Ouh83MYYMd3GoLMpr9ZPAHW091EmSz+j0SgDScWTVGsONhXPrtUraLuOf3HAFqFkZz4DNlm98Nwru0D1ZTr/tU2jLGD+dUYhq/ON9GsAbNbkndOoShRzDevcuB3E+0F2eKaS7mVO0VHik+45+iNtf2AILfcP78U2oD/Qh56Qe9q+5XDYsW/33D99QBuZiHcHERAsl0vMze84+CVsA4mIMpphCGgNb27elZJGIgzDlOU5lUviWL6Aul6QMuSgIGdqVYlNApB94hj7M5Ch1LkNhzFuCllPqpRMjEGZhFaOw27AWocxjhQDg/eknItdgeHoA1qLujKlQFSx9N4II7jbPgrAUGrSWpLEx01njdaWytbUpi4RPqo8rzFUvHHfUGlhDFarDTc3d9xs7litNtR1Q10t0NqilcPaovJEFK+nMCj14vWjzib9cn7MxXfnL4Mva36al5V64XVM+PDi+dKFNess0me5CWcZCq8586v5ZuM5RDvfuJzzhFKejbPDCh+ZyuuYF25F9Xf+Wzy+OG5IL9ZABzkUi5ZA9IGHhyecdqzXN9wt32KsBZ3php5jfyTkjuwz7z9+T59arK04xgN//vgnmp0jVr/leDjw4f6/aIeez/c/8Md//0/W9RsoZckYI1o7EhUJi1u8pdn8hqP/v1A6825zw6F95P7xnnqxZrm4IQYgON68+Y6Fbdh19ywXNXHw/PX9/83NuubffvuGhEXTgDqHCiknVJZ82tH1H2BZrSXDZDiwXmyojKWpK959e8P7+/f4uOf27g4/CEhz1k4qc3SeguoyUT4BJaDmfO5LGCWfzs3ilrvlOz4OH2h9x/KmwRlNDFGuMKWLea9YAKEsCk0MimPneet+2QoyXhdOmcnGmKQw1Dg94AdPtqaUQfOkTB98i08Ku1DUa0fQPYe458YsSWhSBKtHNvL8ir6Ctuu4ArdLNiq/srN/CX19aTueX2HbvqbkM18tSoP6i6yZuVgxJ2VfEmXl3IVblR2eUqBj+TWjJUeg8y1Ph0cet595PDzSDlueDveENNCnIz5J/03vO7q+pfcdx7hHJWn071NHwDMkxf74hHvUJO5o+64sLCNYMahSrjTaTuUCAahajHCVwhiKJ5oSJiuPCkY9W9kNp56s0Y4jne3iKbE6Kudp4U0JArE0DFNMMMEYWxSihqwMqtBSKStSNoSYCDGT0KiUCSGTcyrV1YTTDmdEIGCUpTbif7Zp1iyKOa0zFmMslVrwZvlvWF3jnLASy8V6Kn86JxYcIkyQEorOtnymvxZD8JXX46/wK9TF8TW6RJWfQOac836R/84vbZb0KwzY/LZLs83JCBnnhVrh9tIr/LRSEMpcoaZnrOCcAAAgAElEQVReyMRAL6kdsWMYeqIvZs/tAd/1HPctWlve3n6D/U6zru5oVguWPoD1eNPg84Fjf8S1DeuVBQND8vTtDvcpEIaOo39CadlIOCMRYzlrUEF6MctEkFCgazAN2JrEICkEs1irlDJEQ84Gq5ZUbkFVdThnSaEnxJZ2eGLfPVA1KxKmbEfmCR5jfJqf7tupyq40KlsUhrpuCPpIVRtcpaYEhChU2ek+LeXKWKya1ZcqIDlNF1PjGpxxGGWJWfpNIcpr0UXcg6jE0ZoYMjEjfbD6l8Ofy84ChUYrI8cOVj6fVBhqowrjnDFKkUqklTJJWkDMLCJv9C3P1/LodVzHCwvURYam0ufgTekXd/gvgrAf+VpdEnhZ/8gimWeUw/MVdp4xWApaTBa2KkpcDCdGTZiijM4WUyYRT89xOPC4/cyHT+/54dPf+HT/nt1xy5A6sglgIiF7htAzhHYq/YVQFr1iDeKcQynF8XgsMv7IbrebQJtzEvA8Nh87Z85Ul2OqgNbiWSbKRQFG8xB2rTVKl5TSs7D5fI5hSwnQMC/7JWJKsmg5NfXTKKXEl02X85iDqLmmVqGEThGbS/+b0pCc7LazmKLWtmHVrFjX0nPWVAvWizW3mzfcrm5ZNALiKtfgdMW6eovObrIKsFYMSe2UPDBeH5fQ5x+/QV84rbE1Pj1LJz0z7VX6+f1XnnvmlXXRE5dKh186O24+mwEurVkv06E84iGWspccyRzIKvN0fKQNLX7o8L7H9y273ROP9w+0+wPBe5xd0H87sFptWH2zwWjD6qbGVEvM6h27o+Hzw47d9oDRFWRprO+6gU+f7smxp+s6Vs5RVVVJKUjn88j0uvNkbGutZUgiIBGQYgTUxERKaiTaMcZIGbNpCEOH7zy73Y7Pnz/TfPsGZyyoWjZX6ZRq8tqcBEwbtKqqGHAno92p/0xNqs+xn0vseSIOzgDil0Zd13JOjIPQl9LoyZctxgFrK/G2U6q0L8hnqX+NW+clUFVMrRm+bPmjlCpCoJJZOtuBf+m1XUHbdfyLD3V+G+TLfh39FT5UoWQrpjPX/BcoholRmBaE9GXANzaNo+eeQOfx6qn8PyN5mil7YuzJJI7H46SkssYRQqJtW7yPKBV5882KPhzY7Z74+PCR9x/f87cP33N//4lduwWbsJXG1IqYA0PoiMSpB8tkVRaEEyADYa72+z0AwzAQYyygRBpvp8bjrC9A22khUSqLHQaJlONkIKuUAGmlhGnUk3T+dOKmybKIGpTO09Y+T7v6AFqTgscHicBRukLhRCHrAzGmYjwrvSqVsVhblaSBhs5ltHJU1lK5hkW9ZFV80iT+aclyuebt5g3r9UZMbl1FZWoMNQpRek4MxRgafQbY/pnvvlxYr1NuqX7We4awxa+xgvk5KzaWO1Vh1dR03NdYRTULtU9kFDFFQhg4DkdiHKiXlso5QmzZ77fs+yMP+0d635GCB5XwXc/9/WfuP3/kcDjgtGOzCvjYMfiWQ9zhTI2xls36hgUVpql42nZstwe6IbM97AEtYEMnfCHKdSmzjbawzzM1NbqAtkUlYKY7SuuCzifLkRgFyJnK0bY9i6rGGFNAW8O2e+Jx+8Df3v+VN7e/42axRo3uIl/oJ5yXkMeNVc55UoaeexdKE34a/KSeDEHSUZufANqcltYGOUax9tGyCVCKWcqEPm3u5kKFX3FkMho9AWZVhEslSJeiVZj6bedK/BjjV1uQXEHbdfyLs2wXyGli1fTLYCo/ZwvkbizllhGNqdcWmTg7ZFH0pVcohuLcj0rFfT+flX6ktOmluyb3dP2ermtpux1dtydEz3a7nTyfFs2SlODpacfx0JHp+e6Pb+jDnv1+x8P2iYenex53nzn4PT0dZIhZY5MhEolKVKLaabTNpKwx2ZysKoyRUmnf473ncDhMk+QI2E6TfJ7CwVMaQZvsgnOOEyMncvg4q0UItSVRO6PZ7mlBmEfUWK3OFpLxe+TviWHoGHyH9x6DIqWA1SNoSxAzWIt1DbWzVFVFU9UsFivqaonWa5xdsmgalotSAq0aKmPRaJZORAM3i42UPJWblHWUpncmh3TzdytR/k/dLmlOJqcn+PRakfLlI7y2qRpvmenzf+EmzlOpNp/FraUsm5/v3/+F7e6enAPvvr3j9m7J/rjjr3/9bz7ef+YwdPgQMFZTVZYweB52nzl2ByCxudvw9vaOu7cbjEs87T+jlWWzuaFRSwyGdXOLcwvuP7+nD5+JeQA0N7dv2Gwc+90D7e5YAFskpAGj08QoaiVws+iqcdSiNK5qHp7ClH9ZmQqrDTnJRqeyjv7Y0lcNxmaMdbjGoYxm3+55//EH/vOPB1aLeakyn+7DZ3EY50ybMYZhGNjv97hdpu/7M4NhrbVY8YxspvdiMusEtGV+LJpKoui0tjPAPc4BAtpOtiJBjqbGGDCZY34xUMuzfXq5rqqqmioOoyjiEoSO52BUE7dtSzd0LKvTca+JCNdxHS/edeMW8pcskj+2Y0uv/5w6Z+Qm4X6KZCWqsFimg7FBN5ZnEoE27PCho+127HZPbHcPbLeP7A9Pk9qz73uMcdxsblHKsN3uOR46sIHHWDP4A8dOkgjaoSelgK4zy0XNEHqUkd4wERQAypA1L8byvGR7MTJn405/nLiNMWeT2Dj1TeVKPQKscbesph69sS9GTSBwZOvUmWdajHH6bEfl1sSsKI33XqxAlKhRNRK7o42l1gKvGlOzqBcsqgWLxYr1clU80Tas199i7JLVQpIIatdgVVGyZXCmorY1la6xo4ITYf0UipTjZLr5HKxpYoonFk6pf8LgAD2LCUuvK0bPbpt0ul9f6zc9y8zUs59J535f8AI0kPvMp4G//fBnHp4+YmyGqiWqFZ8ePvBff/5/eP/xg7BgyrBcNmw2G2IYGIYW11hu1mt+9913bNZr1jcLunTk06fPpAS/43f89uY7kmggQVmednv2xwP10nH3ZsW7dzfc3FRkPMZaksqE5OlDj3UeU8QBqmwAZK+ncRiaqqZyNTFmok8orUvZrhIRgnI0zRI9aOnv7Ptpc6edpj8MPO6euH/8zGb1Lc3iVj4hlbBKwFtOSdju/BzAjOXRGCOHwwH9FOhiN/0b8ZzxOmPk3IyR+4qs03EusabCGksyfrIGGkuwIQZUMhPbPwa4/3LQdgJkqfTajUzb9B5KEgvzOK3ZHOi9Z7/fczgcuK2iXA9Xpu06ruNHgNvPxmv6XNk5r3nmC/buYp8/qfvMiYVLORRZQJBMvhTw2TPEQQQAvmcIJYszBw6HLSF29H3L4bhnv39kf9jStnsJhNaa7dOenOF2eENdLei6AYxmsTC8f/gbg9/TdpJCgNE0Tc1itaZqHE9PT/gUCcmDsiISMCUtIIuPmtFmVno59YdVVTVNXnPANk5cI2g7Nx6Vn085ksNokjmydCXyqVhsxJQwuhIf8cLWqVRKykkmyhDiFEadc8ZwYgSV0izcukzkwkJYXVMZS+1qaltTuyW1djTVisY1LKolq+WS9WpDU9+wXP9GyqPOYXWFnRZQYQpsCVo/WW6Unff0ZlQxan8O2iTRwZwtUP8cvWznTMlLes/nG518vj9S+sv37Uv9pxOYGym4cadUssRm5zdlT8qBQ/vEEFsqm+njns9PO/764U98+PzfPB12xChAqFkYlE4ok6kax83NDb/77jtWqxU6w77dstvuub+/J2dFyB26VtzUv8XSlOtRAMXNzQ3ffvuGb/7tluB3xaoiTpsQ7z1RR7DFMEWdJBajpYWkZtjJhsZo5Pq2lpwSBsuiatisbyFlnvZ7+qFDm4S20iTfp4EfPr/n7ZvvuF18A2e2Mpy1Mzz7ZNVJET4MA4dDIJb0ESmbyvtgZog79sDOj/9joE1jJS/X1dQqUFWGZAxeZbLKGKMYhoD3PQaH1QZXGZTOXzbz/bkArnivzTekL7PAamLlUkolvq8lvUkTS5wSL/rkXUHbdfxrD/XK7vxrSbV8AcrmajZ1XubJF4YDmoxS/WmhIJJVxOeeqCJJBb7/21/o00A7tBy6I8d2y6E70A0SoJ5yIGfZWYbYn8p9sSPiadySoDuGwVNFi1agG0XT1Nze3rD9y3v6GASYkaiMpVos2Nze0CyX9D6i/EAcpJnfODuVLaMPsnvXdtrRXgoS5uXQS9A2/tvcgDSNge3Fe23eqDwCv1Q81VKUuKmcS4N0El+mHAvYy2PvHOQo/lRJQbYKbQ3aGDartZSSSlZnpSyNa1gt1iybFZtmg1OOyi5wxtGYmqZZsllucPUSy5qIOWuiH8ucY0eVmm0MVCy8ztiPdNYkdKqJjO/RaPNPvmF6gVmb30PPmj8T50kAP3Ls8WdfVHuPyQ7n5atcukYTAWXANZpmZTFVpu23PO3vaf0O4zIxDRjrqGpNs7DEKJFr7755w7//4XfsdhLZ9vj4yKdPn3i4fxIwU0O1qNj84TcCWa0VA9rmhnffvuPdt294+3bN93+5p/cdQwgoKxu6mBMxzwHHSYYpfm0Jqw1Gu3Lty0ZLFe9Do0YjZ8ubu7e0xyP3T4m+73FVuTYtZBV42N6zPe5J7yIKS9FNM6rTfwyYWGtJKeF9JFth5gS0CatmOTceftVg9wtM28ieOVVTVYaghuJVl4oXo8yPShm00xOgiinAr5A/+gxIFrB6Cqx/fTjnSIOUhr8WRF5B23X8y4+UIXopPhoN2pRpKReVlHqeeZ0LuJgS5GZ3Zkqy6MYcqFzFaJt4YktkaRjoMfQkWjo/CIPmew5Dy7E7cPQHHraP7FtpDH48PDEMPSGHKaRcZU0IxWE9dGJaqWSy0loR8axuaypv2R0e6UPPH37/H/zhD//B5nbNU/uZp//+Ez7Acn0jPRYBrFuxXt3xV/+Rw36g856maTDa4ocIWlNXa4hhKkfO2bOT0CA/A2/z0uliscB7PyUviDJfk7MhqYRzrvTIefq+iAKsRitLbTWHfQ/aYJVDaydGsipLqSJD5YwkAhTBg8TrOAlMrxspbS5vuN3csFisWNglq8WKu80d68WGN/Xb0qIufTNmLHFkMRBVyp310+jZ/9Ul65M5bZ1HnYR2F4BET0wFF75glyW8fwS2bQTxrzV9p/SCa8esn2foowBsrc82PkYLII6lvKzPYrWK2XHKU4bstImK6dQxr+cAUZ2f47LhcpVmeXvHcmPx+cjHx/d8fPyBoHpWNxuqXjJh337zhru7Ww6HA5vbNd98+46sEsfuwH/96X9xf38vC7Tq+Xz/AMazub0h/KGjJ9D1BzKBxXLB73//O+7eLLh/+oE///XP/PDX/2bwHQbH999/z2/f/Sffrn9fmNtiN6M1RosmNqLouoHjfk9T1SyXS7p+R39ssTcVySeMTby9e8cf//iffP74iQ+f/0LXDSSV0JXBRUdQkeNw5Pv3f2a9eMsfv/kPrLakHKSt1Oqza3u+v1Aols0SrTW3t7e06QljLYOXcqlzS7quY71aEwa5//f7vajObwIV9auB75d3gbUVt7dvuLERW2exK+p2DGHg7u4GawN97Ggazc3Nhhg9u90W+90vv3+0O13XTjt6euqq5ptvvuFPf/lfdF2HqTROWVAibpF5qLBtKRGGLObko/XRBHqvoO06ruPlzbgCXRzDtZ5nv6XJv2kKIx4ndp3FPX2MbpyvGYaywNtiuBgJ6RSAPgwdfd8z+B0+fCbEAyF6fAj4wqodux1t6Gn7PYfuwHYvDNsQiuVAKmqsZIpqykvzvmHm+G+omsKCqYwLlmZRsdw03NxtuHv7hrpZSMagGjC6IiRPzpoQMn0fpCSqHE5ptHKYXJFVQGEw2ZRF9Dy2aQ7Kxl3nZQPyuAudMgBnu/P5ZK2VJBzkFOR9BjHfHVcLk2uIRYOoFM6I3UFVAtUr68T5XTusdmJv4BqapqGql9xs3rFYbFgtN9PP1K5hs9ywVEtGVaFGAqBVcV4nFwbNXlhT5B8p1+WXizznj1+7+/+fXyp9Hpg964XM+oykThcbn5zBNubi9OlivKqAUAxZmZR30wZKj1b9QEwCbqZdgTmdt1ya66dS3NjSL8eoFg31ErTLDMeetj/KpkklQg5oY3FOetpubzdTDiZA2/f87f177rdPHH3L0kFQYsp78Dse958YNeDKRmylwCRCGmiHRNsdOB63dL6X9280WStilnkppkCtmlPluLwFraBxlWTU1kt01phSMrXKMiSxwVgtN+U8K+5u3zLEPQ+7H4jR4+oKsuLQ7dkfdxzaPX3qMHoFOZFTxnyFz9m4QdIEcJlMLybGs96y+VwQY3xhg/t6cVRjsVYscoLqSbPNIohyfbGQlgeLQ+lMCklUwccj3PwKG5M4xoSdZou57Yqxujwqcix5xJNg6nwTO2cZ1SuVnytou47rmO+uxybbsvMe5emosYQyX30TQckicOkMRekvacMBHwf6vqXz4re0O2zZ7/d03SP79i+EdCCEAR8DKQWGODCEgS72JCJ96MW4MwcBMCXsLydIUQLT0QmlMtoojBUQqo3Cx4GYJahZyq8Qk5RYJBmhwVZLcT63FToqcjJ0bSDFAySD1Q5lx0Z9g1USB6XKWboEa+PC/BrDMrcqGMGmSPQVqsTmiHBB+j20zlhTTSq4nE4lRUNTSqLFb8ouWDc3bJY3LJuGZcnoXFQLatfgbEXjKpqmwbkFVf2Gyi2o6xqDAGCjLLWqSjiUKpYcaownPe+PuhTQ/dTyOl8CcV8CcPlrD/b/63ipt2cSreRzoDY/dVFDPtMPSqenz4EYQ9kMpMlSVhf17ZiqqoslTC4SmhACBoWrmmcgeV62n28WtNY0TcNiqRk4sjvs2R72xJzQxggzb8Ba8TlbLpfErGjblkPbEw5H3n/8wPawl75KrVA2oyvxfdu2W578R3yn2O0/0vaP6Gj58PEvuCf49Pie3fFJWDYlsWsTwCFJJJl56XLQNM2Ct2/esDveMKQ9MUbqyk35wW9uHHc3N6gsQoRvvvkGbMeHx78wxIG3b9f0XeLY7XnaPfC4v6ftv2OxaMTaosS28SPl+6qqWK1W1EaRTCTEjA/pzCJoVJFO6tGfOJytqaqG4D0h9IRwYv9jjLx79w6nHd2hJfSBmDI+SAbyr8Um69m9OIbGO+dK/6wuj6fWjlx690agOn/8sT3YFbRdx7U8moNETU7ALBV4JgaM6mzxPBluRDIDqTTBSzk0xohPXvrNiDw+3QsIG3rJ5ewO7Pd7tttH2u6Rzn9i8Du67ogv8UhZZ3Jxy85aet201tjKUNUWU7lSGlGEPkmp9kzCnkAlUs6Q9MRaaK3JSXE8ttIQnRTHvpOGV+Om/hOlFL7rORwOkAJWF4+rFBlNEpRKxX6ohFDPANso978MQp77scnXkVjYx2LBRkqjTF9YkJRyOZ4VV/MyoxljMMpAdMIkKENVNcXI9o6b9YZlveB2cyeqz3pJUy1wtpJUgpI24KPFmKo4vmdizBCV5Hlqc3I4mGP116LMXgJo+ZXHL/28ugRwLzXq/2MM6SVSLwJ4pc7zSGQbFOU+yoGcE0McQIkh6hAG+r4nRl+MkDPaiLrYlh6t2tZUZkFNXZzZjCiedVGJmpmAIfFqH6tCYXSxsCl+h58fntjuDoQEVV2BtjRVM9033RDouo79sSXGPce+49gPZAXWOZRVGO1YrJc0iwrj4P3nP+MPiY/3H9i19yht0R8TKfc8PL4n+o4h9FTKiRCh3Geq+LjNNxAqnyoHS7fg7ZtveNje8sPnR4bOo7UmBE/XDVhTSb6tqlFRsVivuM238jkoESN0Q0vnYXvY8rR7oh068kJaSETR/f+y9x5PjiRZmudPmTEQJ0Ezi2RX9/SsrOxp97T//20Pe5/tmSmamUGcwgEYU7YHVTMAHu4RkV3VItNVYSIpiHQ4AWBmqu997yNH/MLPFG1VVeF1xEuH2rVYd1gnDk1cnHldXyNAOClispmt7z3t0NP3aU0j0yvOzlcYUTJ2A8PQEmzAmQrrhr/JPfVUYzoVoyGELI6KJzmosxVJfr8nTe+3ou3b8e34/IgpiJADykUeiOYFSUw2G4+LtaTy9DGw7XeM0TKOI33f0Q8tve0Zxx4fHXf317hgE5IWHNYNdENP27YM4xYf9gzjnr7vGZzNBYqYeTxaqLSQ53GCVgVapBGMj54i54pORVu68R3eJzXl1M0KNKJUEA1t2/PxwzXtvmd7v2Hs2gTlS5MC7wDveva7LWWRu2GRRrLenSJok0faMXft2ET38dh0+vdUtPVDNxclcVJ+kjhrSTkpKUyJNhVGl7m4LChMRaELSmoKZShNRV3XLJsVyywiKJRhUS8pTUVTLChUst0QR0hLpdSRmjfHgqknijPxDFImvoyqRXEQLR4/fhUyx1MF3P+a48/PFW1TAX+8wQU8QUzmNSOjtwxDRzemQsX5kX2/Txm1cWAYOsZxxIVctClJDCm7ttCTQGTJannBqlpTyQZNmSxcSoWK+quwylTLaUAjpGK72/Hx5oa7uw3daBFKoHRBoUtevHiF6x3dOLDZbNhstuzalBjSDWkUqE2J0hEbPBGPqUqqRYmpFPebDww7x3Z/h/N7pDDs9hHr9mzbDQKHcyNKwuiGRKsYxyydEIcXPJlvh2lj11ycn7O8XuA/JqWmHiVdZ/E2YJTCO4fUAuc8WI8LoAqD8Q4nIruhRamKfkxZw6PtM6qpk1n1V3DOpnUgSol7VJyEEIgy5gLmYDL7S0xvI+RMXo3NfLne9iACulCs12uqqiKMZD+0PXhJbOJXcea+6q6Up/dl5NCYeu/BR5xLcwkRDwXrxGkTIpw0tenffPNp+3Z8Oz694ZOxp0Q8IhCEeRwzfd/kjm6txbpkHGuxXO8/MISBruto2x1tt6PtW8axxwZL2+7wWLy3BBEQMnXLzjlctHhGvIqI0lAW+oQDFmNEm+KwmXjFOESGfpzl8UWhD9FPSpzwxqaoKJBoleKZnHXsdxt22566fqDve6wbENLjvYboczi6x9kWJUuq0iAk2GgJwabxJRIbIhE1hZ1+EvzOo9HpDP8fnYEUb5W4hMg0LxNComSyUjC6pq6WKUC9WKB1mZIH6praNFw2F5SqpqoqFlVDlcehRTaxlVFiVEEhykOxFo8NWeOTpqsncNCXCrNnkLL4qHCbHo8lBOK5nYjTcdd/RpRtQlqeK/aC8HRhyxBahrGnbZNX1a7bsGvblHM7dATSvdfbgdGmZmhqDMZ+QEpJqUsW9ZLV8pyLs5ecry6oizWvz16n8G7KFB7O81yheFTGpWFrEq083Oz48OGK3b5DIBFKI6ShKCtevHjB5uaBobfYccP9wxZnA6owBAQhJnGOjxY7DsRo0UYglCRGy+3dB/YPHXcPOwYbKERJHCyj7/F+wGiROapm9j3rxxGLQ1N9Oq6PuflA0jQNWhXIyJHNjaOuFhRFwf3dBlcohmGg9S27cZtQQymxNvkzlkWJHzz92GHtcITki6/qOibLn3EcGeN4oDhMaQDidESdUMSDglp9hU/bNIa01tK2LWN01I2irivW6ySuenh4mKP18JIQ/BdtOb4eaTu9hibvOJm98Sa/Sec8ItNS5kmE1njNyVTiS33ct6Lt2/EPX7p50nj04IVkU9GVi7QQks/PaBP03nUt45hC1B/8LWNs6fuefb+n61oGmwohFxNfywWLDzbluyuByiuRV4KIQpUNC1PlDL3D4jN0PVI3GWKPxCAT4T6E5GEWInYIKB0RWudoJ3KYdBqXWJsRMinQGuwIfTdidQpVLkqBVhCDZRxaBAGja6SKaAVCpI1DyvQ9MQxopVMmZwBPPS+6x35Lj8ehx+TgaYGSUrFY1Gg9RfZoiAolS4qcz9k0K5p6zXJxQVFUKFmitaEqG5piycvFBQUpcL0QJQVJzTmJBwighTnd3MJRQRQEYA/5PPMKnAjRwujPVFc5Ak18flIaHo03DzHlEimODOZ/Eb7wnwNpmwnWR+ap0xjMio6r/Z8ZaRPHqN9nPtiWvu8ZXUc7tAThcS6Zyjo3EkWYOUND55BRomWKEVsvztntdmyWGxblGi0Ui+qcVVHmMyDnmkPKR+/jk5xgSb1csW97rm/vscJT1DWBlFhgygpTVLh4T9+mkdx22yGloikKlExjU200kcg4joRoEcbgoqMbe/rBsts+0HYDUhVIWSBkQBGp6pKmNoQ60JRLanVGpRdJ7DAr0sXptX10TLY7WmuWZslisUCLlrpaU5YlV1dXbEgNaBc2bId7hEqIkPWO1WqFCCX9GBhtz+jsgSgf/Sf+k88VbTHGuWib6BfTtTH5sp1YA+UT4b1HfbFCkZRlnZS5ITCOjqgjZVmyWCyo65q23XN3d8c4DjmxJf5iRO/zaHLywZte+xRlZYxhsVgQRB755/crhEDnNVAbg9dTbN8xleQb0vbt+MIWID77GJ59/rkBvPgPep2/ZOz59L/jyWZq6bEhbSbOjziXTWyHPWPu/l2wjFlE0LY7dl3L2LUMcSCWPUPoGcc0uuhtMqlNJrkuRduEAeuSFYdEJjWjkoDCyJK6WrJer1kul0ipM5dM4MbkACZF4uKk/NAikbiLQIiOYdwhVUQqhdQSEcPczYaQFm7nPDKjV1FDYSJl0aRF3AT2/RZv3dxJl3XO1iwMAodQCqkFOIVwR1y1NM8kTrK1LNzwPhLcZLKbQ6FniwuNQc+ctKZuMMYkIYAySFFgdEVVNVTlkuXyjEVzxqJZY0xJDMkUt6oaalOzJEUBHYjocjbcEMhTY9UDiHqQfCr4hJcjAgiNCMfu+Z/LrfzydXgcWC6+1q7j5EaTR75/x9/zxO8RX0Dlnotoe/Z9Pnqv8amvB6LICLU4OJ19uP0wI77jmDhpfd8ni5qw53b8GS96QvbtGv2ItWNSSQfHprvP0U0ui3XGZNwcNZ6SwSbkBKAYC0Y/MPqe3rbUxcCHXtMAACAASURBVAPnF2tQgqZogBKFJoTMAhBPvcdk4zOdoUVV462jbTvMQlCYis57HGk8OIZAZx1t12ND4lQZYyhjDljHIaVGCoGVErxCR43whmAFlSzR0lBq0j25PEMZPRe7RaEhCNbNBYVaosWSul6hJtf8x9F3J+8mv1dV0ZQ1y2aJihXL+oxCNWzud7ihpWkaOtez67p0L3iJj4HzszX9PtDjGP2AjT2egUBJwGEmsiDhgF6LKTFXITAYWSVe7ZjFEzHmdI9Jde6QU/kpRGoGJ0JKCE/fE0cpKIJAJVM2sIpAiOgoMTqlmCilGLqR7a7F+kCla6Lz+HkU+VeOSEUegUrSGp3TdAtVpOzhao1nYHADw+jwURBjwMeIjhFpNEIn7nRUIeVY41PqzBzBdiqc+Va0fSvYPolnDkebjMzFzeHr8eh5+Zn+5yuLuS+QuMMR+PG49DrxTYOsZsyqz0xoTpEr07jTH72qwNZuedg90A0tNg4Imew4bjcfuXu4YbQtQkW6oWXf77FuxHnP6B22TwWasZLt9oGiKCiKgtG3RCJKJ8K/MjVKa7QxuZsPSCExKnHI9nd7Sic5e/Ga333/G0IU/PGPf+TOBhpd0ndj/jyym7mISJneaYgRFPR2wHV7EIFSm9zdJmsAJTTjMCRz2TKpI2WEZd3w9vVbZBnp3MDHd++JMVJVFbv9gJSWslqk7MA25X4KYZCFIWTeWmkirR0QJAPbEJKhrRQCpTUySvpuxEiNkUmFalRBU1UsmhVVsaSIS4wqqeuaxSJZbywWK+p6gVaG5XKdTDGFQUqd0hfQyLx0qZMr6vFVJz/1OtJ8ufiafkYdf1197Rr+5J0gPvkrR7FNx2PQp0QOj42fxaPnTja0kIrpqUoO7jCXFflVPGlee1zRPjXvlU/alsj8dBSS/bhjs79mCHu8tATtuO9uGMeefd+x3+9p20wUtwEbBrpwT5DjESobThBar9MotBAl0guEzRuXMWhjMLrGjunntZYEOXC7f8emu6EuFtRLhQ09VVVwrl4BBqPk4W3mtzb5vMV5PJre5LKoeXF2zsV6zUgLMqKVIkrPtm/5H3/8E86SFKrBomsQ0tENt4lrV3l8VkVqoViYFaWs0VajnKQbWkp1kbwUiwqja0xZolU1Z2oumzOqcolWNav6nMvL1zgEzg2c6QKkA4qMbIHLK/PD/YZ213O+fsn5xYKz9QXBgaDED5KH4Li9/0jv9uhKoGRBv49YLylKjescQzuwWNacn9eMfsfH/TvOF5dUqkHi010h9KF28+lSU0JTqRW1XLM251y1H9nst0QdkaXEeYvSMOz3nC2WOBvYPtxyf3uNDw4heZpzlq/diWcccSwpqaWm3+zQAZb1AhWh27f8/OOQkX9BjIoxCAKKKAsi+q/HrCMUhQEZMv85FYI6albFiuA96AXb9p52t8ONI2VTZs++iI/go2N0HYPdYeMOqBCiyHeXygWxnBvjb0Xbt+OkIPr8Y5wtLcLRT8YTwfPpz8kvoQiPircYM7k9JHaAUqfqMh5tK5PiTM5uanmshcOLRG6OIhD8kIn7yRG8Hzs22weub28YXJcjYAa23QNXNz+z298x0uPcSOc6RtvjYuKHeTwue/0UXUE37IiiAZkLRS0pyoo6uqTwmsrd6IGUSkDUiCgxQqIixNExdmnEYseRmJEqoyUhimS+pGSOcjp8eFVTIq1D9JEQkuO/iyGnA8RkilE12aNMM7aOqCQX52t+86vv8dqy7xOXaBxHdHEQEIwuYH0OZ8+RNUKkWCnpJx6KTuHMUaQYHqkTciANSmhWZaTQJY1pKE1BZZoUuF4tqPWCs+oNWlaUZZnsFaoFdZ1C17XWOBuOEDSJjDqPEX5hh/yLoN+/re/ZpxqG49/vOVXhPZOpGU9RrcMNw6kKMkQQ/vC8kkeFmkjj4HiUoP6covVLd/CjnwkExtCz6x+4az/Q+i1O9ry/+hkXR4aMsg2DZRwTGd5HC9oSpZtH7J8cCqLMYiA5ccGy63WUFEWRUOXoEDIQosXGpN4WLvLh5kfc6MFK4mvFi6b89D0dvZfp45Dzo5rzIxFpjBWlZowe6x3Rj0QnsM4Sgwfh0THgXEQKgXcuKZvLCiULKt2kSLQyjTn92KGExJgkrinLBYUpMXqBFIamWSeVp6kQGKqqZmFW6ZVpAJcyivO5DEfnw3vP0FtGb/FOpNzc4hyi4e56ix+vWa4XrM4XSAPDfZumnlEhMkpXGEOhFajIrt3w/uYd+33H+eolL+vLg7k4R+yCSRgRFU2xoqnOqIuKXWewTOc6IqPARZ/XujjnioTgDqcofm7iInNsnKNQitIYSm3SZCJkLu0QKKqS9fqc3jj6dqQdOqpuoB/d3+bmnhG7kOyBRKSQBaWuaco0FlYxWQYJkcaggUjwHiE9LgZc9Pgw4rHZh9DlDlM9uk7lt6Lt2/HcsiyfWLjDE6iDJDyLq31mrxRPP4onUMDAJBo48AZE7oUFDomfx7hpGbOMLnHL+m6Pjx5nk+dZaTRSC3bbLdc3N7z7cIM2kqIyREau7654f/WefXtPNB4hImMcCMETVUQpmSJnTOIt+NGnsZ7UTIMBY0rqepEFBSKPAZifT0WXxAcQyhCRDHbkfvuA95F92+KcxQePKYsD50lOY6jk9xOEm7k5ykjwB6ftiQjbtm3q4I0hhMjgUnh8vSi5eHnGvt9QFaCEJbiWqGqkNCkbcLTzeRdHv3dCNKXURCdT4gCJ6FyZiqZsWBRJEFCaaTRzxqKqKU1NoVNWYCErFsUKReLyJR5IgdHmEAVV6PzvxxfM31MG5xP3RXzma8cfw9R9n0xPsjAkuAR7zOHT8tNObLqVxeOVwD/d1gn5dIEnEh/U2oGH7T0/f/iR2/0VIy33uzuicEmAEQLBk8fnIY/LbC46ThWmxxzJOQIMcZRQcliDZPZ8E7lySaP79Nz17Q3bmwG/FyzMBWflS7QyX21zJ5EzaV6YxA9DBoYxjXhBpwLUeyQuCWo4mAgLJynKmmW9ojKp+KrMInE1ywqVhT9JEV1SljWFaTCmTKbWJtnUSIqc0KI+K2IJubj0WY3Z9z3duGe1TjSEF5cvUFS4IX1eLy5fcPl6jQsj97vrRGmQWTzhPVKqmWvbdR39/j0PZov4TnFZn59eUJMQQjJT7ZbLJetuzWKx4m5/w5BgyWzfk6+2HDUncxzek2PRZ6CGaR8oTPLJG0KH1AmCnri0xhiqqsHoHjeGOYElnb+/8eQqpmK9KArqusbJAdsfrEwmAcL02iZBmRf+4FP3+bz4b0XbP/rxeS6b/Mz/h/x4GP98zorqSyPaqeiKh8yBXLSlcu3Y2PbwdZ8NOMa8SKWLvuv27NsH+r5NajOfOGkxesoyqbDuN7dcX93z7qdbLi9f8urtJUVpEEJibYpNij5QVjpxUqRE6GxlYfRMHHXDmDrjTIR1NlKYmrpqUFIzDENeCOMJmjCNf6Q2RCno3Mj9wwbvIvu+Y/RpoxNSziMjIZNFAhF88Pgw0A9J7CAEaC1zvFIeFsfIMCR1XTDV/DqUEiAC1g08bG/Z77b0Xcs49KmzNhVBCYgeZ3Mo9ZGVh9aJ8yZFSXQlggIjVRIO1DWrZsWyXlOainWdRp3ni7OEoOky42bp85Mx8UDSJp2TEvLcb0LY/iE5C4+Lt3gYDc15mk/dbMej3SgYB5vGyzInoUpOc7+fKgjnSjB8SqIQT7++ya+v61qur694f/8TQ9zhcQgVUPmekVInyoJUyfJD5pEupxm0x2T1A4oj5vtuen4YBpy1aWypi7lRUkJjTEG76dl3llIs2X63wb2xhymz4CsCyeV8v8KEtCX0zVqHYkwUpHBAP6XUiaYgFbIQrBbnnK9eUFULNCVGpyZmWTdUZc4CVSY76BdoYZIyFIkn5AJV53tfEjOSGlwALT4pGhLQFGYLjWR10aW1KAYaUbJer7m8PKc6Kzk/P6cf27mYUFPGb4hoo6mrhuWyQVjBdpcsji7P98lTj4DOvpCHEd5halLpZK67bBapIOs9QQrEpNyMEmcDMaqZYvIlccvprRLzWFizWCywDARt8dLmXOKY+cPMmchFoWcrkv+oo5AFZVmyHbJyNo/wpTr1rpyKuek8WWu/mL36rWj7dmTaLXOw9SSJ//zjl7/vaypGF3zKu4skS4x502Yu1sQUlUTAMo1ZOgY30PseG/qsShtmL56229P3LSEkUYC1IyE4ijLdrNvthrvrHVdXe+p6RVU2nF8scdFxc3dF1+2xDBAFUhQJHZPJR2z6T0qVx59J2p3yMxPStlisKAqLtXfJDf1I6p2SANKIVUoIUjFYj9+3sxAiipDGxHgiLnv/pJFQAFwcE/cDi1ICo1LGpvcRZx1uTKa1QsnE/AjJoLcoCozRtEPLu3c/s3m4ot1v8W5ERNBSURVl+ltBEN2YNlqtKYoyjTHLJi2wckFTvEHFEqM0RZESCBaLFctqmZIITPr+VdWgmHI6p1IsjbGfQs0i4sQP/7muVoi/3/tysqc48XV79H6dPyghD2K+MFclQkmkVEmlKp4Zu4qncHf/BIr5qHADQh4JIhxSBSKWrt+y32+woiNIh9SgYo71UQVSqlygQ1mWMypy3MykZKmUFRvDUQSaOkSgpZ/JakQxRaCJXHyk4q3vB8Kg2Pcdu3bPvt9SLRu0Nl+1Rk32DY+vuxQh55EybcQoleKMoqAQmrPmjNVinWxI6jVnq5cUpkaGAiUMdbGkqiqaspgnByKLaY7VBRLDiUGMkHNShNYSvlDgFEVBbCO73Y7r62uWxTnmZRIhvX37li7uSMa2AzGGjHbGnHgSWK/OuTi/4GJ9ge8i7c4ytB273QMP+3teLC5IVr/hVE0aD5drXdfU9SIF2OfLZYrCECIha0oaFosVTbPMU4uvO6z3GJWK3uViTVCekZYhdOhSzTYp+/0eOyZUc71es67X1E35Hzi9OuwJwzDM2aLqqGhLr+2gpn2cCPGcyfC3ou0f/nhGofOlx6cI0s/lK35GzSZkxu9EzF1tmBG09C+Lz8qydmhpuz3bffLc6W3LzeYaG9NN4b3NkLNltD3WDoTgUpGUUwqklGgjkzdRawFDYUrOzy958+YFqMjH6/c8bO+xo6UoKqLO7u0yk6RD2iUFinF0IATBS5wLeCfQuqCp1/jScnvzkBIDvETpVABKBcFLiJYoBVEKXPDY3uP8mCKmlCTmfMMQXGIORok//vCFwxiVoquEwruYi1c/CTtRyiBEGnU46+dsvo8fP7J/eEDg6NseFRRCKAwFhioV1DFQLZbZgiMVX03TUNcLqqqiVEteX/4LiiqJDYyhKmoqU1GaFC5PEBRSJ4PTuTF4XIC4k2ItKedSgaDVp4Xa3ztBIR6hWDPGJZ66UwPCBCae5XG5O/9eE48sRjhR7oT4uUnMUxXekfR22qBFmP+mMSrb2STkRRuJ0AVCBaRWaJ2No0XOchUihbuLw7k9tgiZNrZ57JTR3oQCBaLzmKLA5oJOKXlQL3sHYcR6T1MvKeuSdujYbDesmjNULhyfXK8en538dx1ZZS7cjLoJ4SmUzikiAWcdqlBcnF3y3etf8/LiDZVpaIo1WhZIVwAaIwu01BOL6zPXQwoZT+BpOls+JyKkUezpi5/SBWSOglsul9xuBNvtluvra87qF1xevGGhzliv12xvbrm9bdnsbhOnVWuQPgs7NGdnZ6xWK5qmYYypQezcyMPDPVdXH7lcrDOnOJ5cMsd1bqGT0Kg0Kfs0CDWPt6eCRauC1WrFer2evd0+4TieIKPhgMSqhP4vFguicexHCC6kOD8p2bU77u5uCF6yWpzTLCqWTUNd13+zkejE7HucADOOyVNTyqQolVokLmckJ2nYdB1FMSOjE2jxrWj7dnzmqvuMnUH84kzzaRKzeL4wPPzo5IaeirPRWlzO3fR+wEXHaAdG1yXz2m5H2+7oxj4VaXHk3c1PjK7LHkhuXuxDSONS50eMMUBgHAdijJgiL/zS8Ob7X/P27fe8fvWWl+sLbBhZrdYYXcK4QykDOm0YPpN7Q87elFJjTMxIh6Lv+1QoSUNRlISgCSEScjqBDBPqITKvLZP5ZVKC2pBvWiEQWiCFShu4nEisoMRk7CWSolSmjc86yzg4vE3KrbppKMsaEbKpJsmfrbctzjpat8O2PaU2KFFy0bxBKcNqdcb5+gIhFK3pWS7WKFVkQ9sFTbOkrtKCZ1TDi+X3aFFgVIESk/lG9kgjBYJLjrzIcjEp5iShU5QlCTbguQgCcUrw+ztA056HpYM4HU7Gk8IpAo692+GDnb3PpiZlGkUGL1DKJJ6UTj53My8sfonKIJ7pxA7hU1JCFOld6Fy0yexFKIuCelkQpTuUkXn0pjIhe8zIgpj/E58YGodpNIlAiymrEiz+qMJNooGQx+rJfkbw4sUrXl18x+XyNdoItvt72uGCsi6yLcWXt8BD0ZbGWRab1xGNtJHSJBGO6wfcMEIlOF9c8Nvv/okzc4miQpL+ntIloJ/9zB83JUJEfP6MdJme9zYVjfoJ42KZSe4qc0yXyyVAMi3epQzS5LMo8d4lD7PtFfcP94xuwBiFy4WzMdVMF+m6Djckz8cYk2/bbn+PxyJQM6lFnDQeufESmqZsKIoSrQuE1hhdJ//IrO43Jq09q9UKI8xJwf4Uwnx8biZEsa4XeOXofTv3gZPFTNu2xCioijr5PeqMVP4N4PBUtD3eAQ8edFpr6romqKQwduMI8SjuD5BenvjWzQWp/Fa0fTue7Jyfe04+m813qhh4VKSJU3OO+KhwC0fmIR8ePuLC5OHU0fctnU2JAi4OaC3pxp79fks7bDN8HFFGIrRIUHhs05jUDoeIpOwB5JyjFInHNvgBHyxGGIrCoI3m+++/5/Xr11xevMCgWCyWVGUi7QqSW7gICSVzMaRMUcFcWKxXq3lc0/c9Ug4IIU/IpiFM0U1TByln0nQQoIXIv/MQByUyxDTx06bRjxIScvKBJBBcKvTs6BlHh4qaarHg8uwV6/U5Wia+XXSezWbDHdeM45jD1Q3SG1ZN4p2VZc3Z+pyLixdIqem7Ea1LlEzWClWVxhxNvUyEaVlgKFDoWfmVgX+cDxAchSkOC3mA6DKv6si37TBW+c8Rgv4fQVCYRCrHd0r8pOUJkMfleTjET1f/g3FM5s7DkOwNhEyEdaUMdbWiKKqcKnFGXa0pVI2iPDW1f9Kz7Llwznjy0gUHVGxK5Uhu8GnD8gR8jljzNiKEI4jTGKFpXHr8CJFxFsOI2ZBZZCWsiIJxGBJhXh8CyLU2KCXQquDVi7f88N3vWNfntJuBMQyMvsMzMHpBpVafH8FziGcjJNK8x4PIbv9uyPelOBRUQVAWDRfmEknifAoUIhqE0KlxCXkCrU4vgxmpOap+SlPNggwBGK2fRUOPB6tKpSD7idvqnEsecqSxYNd1DGPH7e0Nm909RfZndKOdkbau6/A2YHtLHCfD22y2HT2TvVIygApEKeflf7KMUmiMLqhMhVEFQmq0NoQgGTO3VeuUUVpV1WdkbY/3rZjRx4hWRSoKg56RWLygz9FnUyqL8yPCCry3X9j/vhZlOy20J6RzKtqkzNelqggq0I8RRk5ymmMEGeVXTxK+FW1/72XZkQP1U5Bz8D5xMiYXapcUNSovDN45lCqe7DC8dygtszkPj/w3PWk59xlNCAwxdT2QwpUfdht23SbF04wj3dDy8HDP/fY+eY7VBq0l23bDdrthtC3We6SCs7M155dnDG6LixaUwyiBlCbftI4YFVLWaKNwztGskgpqs9ngo+P7717zX/71n7lcvJgXisno9Tg7U0ZxCIX3npjVVWVZniirAKqqwlrL9fU1xpj569NYZ4p5mkYAu26f/dQ4UdApoVBasNvt5iB4KZPBqucQC1UahRYKpUCpgBCGVXPBd69/4O3b77lYv8Bay3Zzj5FXCCfouj1aa6piwbp4QVOkscTZ2QWr5QVVVWN0iZSawtTZJy1xkZTM8VBokuORz5zIY6vlQKFAqFMFspAgisejdPlo5CG/coz/lQa1/4uPRUNGuSe0KpJ4OkIIhEzWNFVRzsXa3j2w3d7RDj3W7fhw8wf27T2bzYau38/3ewxp45Ky4Gx9yYvLN1xcvGTZXLJcrjhbvqCmJlCihJybhePDB4+S6lFxED4B6cWRG/x6vaYoCoZhQNVFIlZLn9NAVIqAEiLZSgiBH90JPw3yCFXqZAuBwphkP+GtZfDjbDjrnIOsyAPB0I85JiyNDkOAxWLBr3/4NQu94t82/53r2w+8evWKSMAo88Xr6DgmyVvP2PaM9IgCqjJlcG53G4KLeCep65qqbHAusLUd56ZJCBsFQpgZJBXwSLn7xATj+FUcnRspzeFchJDSUI7PGx4bB87OznB/cnOT9vr1a96+fYtEsuk3vH//np/f/ciuvWcce0bfp1g8JfEucHd3j4iKdvcRLTQ6GkQUvDp/zaKp+Hj1jj//fM73r3+L0k1SA3vJtJ1IZMphpuXu5p7z9QWjd3y8uaY2i9RU6z3D2KViUBpKU+eGXmBHR/0JmnjqJaiEwmHR0tDUS97f/IxzSaX8x9//nropCPgUBZaVqW3bstNbdvsHPqqPfH/5QyJpODevy8MwZL7lF9otkdZlay1ROJRWeBzd0KG1Tr/DwHJ1jsXyp7/8EWstRVXinKMoSoacvDMLR+JIIUqMNt+Ktn/EY0J8TiDXuaIPecGLc1c5FWtTALmPnhjCQY5/5M2RyKdpBYrRzca2oxto+47eDhRViVKCfb/n6uYj+/0ekbvx0Y/cPVzngPWRtt3z8HBPP3bUTYmuz1gtl9y3Aw/tDftuh5CRoqoovMRYiY9jIuUzeRXlDj4bBgkFUUaCSB5rSQUq5giRH374gZIzCgyQoH+pUgHl/IgRRUYO1clKGmNSy6WYq8n9P+MfdqRtW6RMC34SISTkIMnbPc55rB1zrEkkKnVA2lKFSPSSYMMcSeWz23wqStPL6Ydk4VHqklW1YLk45/WrX/Hr1//MqxdveLF8gcOxr3cszBmrYk3b7pEKStXw/cW/UJqEnqXYl2UKZhcGEFjnMyk5+R/Jx938PBZ5jpfjny66xLFPhXz0M18v+f/PPioVObf1pCRSch6KFoUiYgmMbIZbbu6u2DzcsO/3uLDn5v4vtP0d222KfnLOzuiu956mXuNkS9A9nd9QV1esugtad8/F4jWvzCsi+pPXQZQzh+oUcXsqBzUFfidLjkNiRowHns888j4y9o3ZBidxs5hhp+MotCRAULlJmVz0s31ISFy/+W8IUFJTmMyhKmuWqxUueHb9lrbfs9k98P7jT6wXDYvinIb6K87RUTOlFFpookxNkxKRKBN3IYmVFD6GxC+1AYzOsht1ygX+HKj83HPx86PC40JzWqtDSGt8kzlcSik8iZjfdrtZrKW1xFQlxiisd/PadHt7y9D1lLqm1hWlSd9T1yX4wHa/ZdftqFYXaXYi4uzdNqGUQ58KkqpqqKsFkjvqsuHsbMUfhm0aKZM4XdZZap3ew3O5tZywNFVWmafrfRhSDrRzyZTZOYfUYm7CjVGEkPKju66D9fPn/Ovv4Sx+EfKTMXff9zjhiNGgtDpkjmYe5mT5QWCOeXuOy/ataPtHGr4cqa1OVVoBqRQhRnywacYu1HxjBDxSp84mCvFpAygP487RJgJ9CJ5u7Lh/uGOz21A1FT5YNg8PvPv4jvvNLYGUDacKSdtv8SF1Gt2QYqKkkby6OOPtb19QFIb3m8i2f+Bhd09ZFqhK4cJIN+xw0WYuW6oDhBTIZNOdFZ75FR4Vq8f2Fef6HEWdkcGQFzF/IFiLOBdcKd4o5AXG4pykCxFtJN7FJKqQAusGdrs0NpBZtieQSJWKvUTwSt+vZeKp6Vlmn0ae0UPwSXU3j1k9EI6thRVuTGinWSy4XL7m+zf/xK++/4Hv3/yWdXU5j0LOV56z8pLXyzcMY4sQES0qLhe/QYuaokiO7PKkiCLnjx6tlY/c8IX4yiLrk0Vomg3JJxGo5xG2L+1s/9kGo4dyN8RELVDZ2jXiEXgGWu5213y4+Zn3V3/m7v6Krmvx9OyHW0ab0IrjBmIq3Fw/4tWApee+vUWrkkVzxkP/ht3ynuatppFLjEoq6DTKB6X0Ed9LPotwCnF8NlKGrM7il4Te5Ud5KPVjmJq/FLt27AEYYxZOTGtVbsQIMaV6INJjCCmySEuEUgipQQqk0BRlyWK5ZtksMcZwf3+PbUdu7m94uN+gtWJ91vDPb5cEAuoLRf8Utj41fFKDJUVtGaMQKuYQCpkQwRAZnKMbLbFJwUwn90H80r3xlc8heU4+PWVgJm6aoShT4RZjZO/2bLfbVNz4tH5qo6mqZJlivZsR2yl6TASFQWaPRcViWVMozd3mmsViyWr5klqUSCkYLSiRTJEnr8i+Hzl/dcaF93y8umXVrPn++1/x87s/Yc2AFJoYYRwdo0qUljkz+IR2E54uUhHJ43Lf8bDdEbXFGMNoO6TWaJOirYw2DEPyadvvdyeUlL9ig0VJlQ3aT1/ffr8nqMByVaCyZdSxmMZ7h/cB/EE9OsdifSvavh3H/kZpJKMY/EjIaIh6HGcj4jzq9HNoVXLnEYjMZEqWEqPr2ew3dENLO3Q8PNyz2W+Qd+CEp7cjm+Gem901D7sNUsq0SGibfl+IDM7icZwtz3n93SX/9C+/4e7+Bl0IovREFdCVTv8vAr3tEyIVp7y6RC2WMj16QITMRRs9QUOhyN+XyPmWEUEBeDp23G9u2e0eiNFjikSsPpBqA0JkvkKwWAfWd6hRzVJ5bRIKMNp25jQIpkISIjbZiCjQQjKOIY8b89ITUyBm4oUIKlVnVELgRVLMzb5pQiJMwOiSs7MXvH3xG37z5l/47uUPnFeXGOqZ3K2B86Jg+WJFiBYpwVAh+q1sMQAAIABJREFU3AJFmTdpTpIpUm7hZ+om8Rgp+xpk7DgwLX5Ckfp0o3ocsPb3czz2z3WZGypnnpAl4rjfX/PTx9/z/uOPfLj+C9f3HxjGDiE8Qkc8FqRAlQajzIlYYxgGvLS0bsd+3BOCoGo3DLHDtj0vi3Ni84qz1QUCg5LiwNMRz6GY4RFiGrLdskqmyUWFFJrgM8Is1GEaHsQRCicOStAYTzzZJr7bFLB9PC2YNtqJJ5oCuBXohA5qXSCEJCDY9wN3dz/RPrTc39+x3+6AwG/2v0IfX4PPnqN4yMYdFMiALgqC9wzjQCyy2EYrfEhrhQ3ZG63v509LHRdsj331PmeW+dx9Fx9VzU8UbAp1ILvn7OJxHLEj88i0KDTeJh7h5BfmvZ/NYaNPwiY8czMglaCqSkpt+PGnP3O3uePyfEfZrPMnmlBRpQRGGNq25eHhgcs3F1xcXHJxlpC2UheUZYUta0pTzshY27ZgJLooP7OOHDcP6dqbeMW73Q7TJHTNZyFWulRzfo63OOLsnfbXIm3Hn3s8+vmJNuOlp20NhSgO9IWMJodwONFTPq/3/rMGu9+Ktr/z45jT9tSFKFVysz+gayFHabjZH60ddljXIyU4nzsvESnLmleL79JwTDtut7e8+/Azu3bLMHTsx4Ra6dqwOms4f7VkjC133TUP+z2lVxRVzKMVcDno3MYCL0aitLT9DhsGpI6UTUlRF0gjGf1IdJlHNTlgxKkcU3OwlveBGCLeZm6aToVciJFgAx/u33G5fEupNbt2w/X1R+7ubxhtN9tpBOln0u3Ep/A+mdoG62bTxsR9mVBNn//LVsQhpniWI+g8jQ5agtJ47ZBCpyI0iMQZE1CZkkJXaF2ghE7vTurst2YoC4ORmkVzwcsX3/H25W85X7yiYEFE4p1HSImSAk1BJcrJKCkhHbqEqD+pInJG/ef3tHm9Uc+UIp/SdEQur+dB6y9y8Pj7K9xOPrUoj0ymA23Ys+tu+fHD7/nx3e+53bznfv+R/XCDdS1CKapijZJVFgGEg2fblCogJVLqlG84OpwD61L0kd9bzuQaf24xhWRRroECrRQ+i2dmsUB8pkjP0TohWEQWrBhdI2VBCAMCw3FCQELa5JxyoJQhBMs4Jj+rqUib0K001krq7MR1k/O41DnHCKhokCUYabIyUON9UjyOveXh7p521zF0I/2wB+HZt/cE3Fecl5THu1gsuN0rXPSz0CiEZE4UZUgpIUYSXVJvjtbTjePR2Dtkm5NHxZc88uOb7hNx9BifeOSQSvbU/SMOoW9ZOZ8KgmRz1CJF+oyXy4aFq3HtntEmA/LgU+G2Wpzz5s0b+nYgehjaAT8mL0zvU9MnjWbft2w2d2w291w0b3KzL4hznqskush+2zK0AxcvX/Dy5WvKqmG37WmaJcE6SpOi65zz7LodlJJFsf5Mq/NpOk+6lgLjOCIKhS6SL6VU02TEgZB5rC1PGoDHe6P4Kw0gJz6blJJ2aNlsNlShmn3YkjmzxZgCpZLKO4SQ0fLPr3HfirZ/oONpGFjOeaIADsdgW4axxdoB55Nrft+3CBmwdqBtdwghknHk/3FGQYUuNG2/5c8//oHbzW3irWnB6AbWes3rsxdcvrpELyV33Q0DHbqQlJVATF1zAOc8o99zu/nAT+8q3n94z7bdILSgVAXKyGTIm8cjRiWUKh55P82OGDFXHZPNREyYkwgOn2+ajx8/Ir2mXlTc3Fzx8eMH7u9vcW7MPj+JJJ6QB5+AhejxPhWZMkq8s4TokSq5skccIXpEzkycFuS0cIRsy5AKy+Ac+a0gRMheaRpjKrQ0LBdnNNWK9WJNUy5TRFZR02SvNKMT2lmYJYvmnHWdYmqm7ECT1XbpM1F5kZuy7XIW5eyIfHKxPN3JP+5Mozw11Ty6lk6zzBPekJmUedt/xvrgE+7O32+xFp7kwafGaddt+MNf/ic/vf8DH2/+zBi3BNEjzIgQFqUFQmqENAiZ44DiSIx+VnLqokxcIevwMYBQuODZ7neMW8vS18TWoo3ku7eKSsuMgCWk7Fjp+xynaormTKKBpOKTQmFdGo8ish2sSEjbwdaFLDhwM3Lmc+M2/btpGsoyKaCPzakn3pKW6QU45zAxNTJKF7gQGYYWESW7rs1E8UAQnt727NotLVtKLr94jpqmYbVaoW4UnbUIr9O4V2bTaiIm+y0KlbwUXUbbTtmwR4r8k88xHD7iqZiYxs6feRRfQH0kcibTT1yvvu/RufhdLBaYvTkq8g/NZNM0vHz5krube7q2JdiAtVmpnmOgZF7T7h7uuLm75vWr37DQFVIpoj+8uqIocC5wfX1Ls1xzeXmJ0TVXd1e8OH+BCB5JOr993zPuA7Ip4PxziP2hGA5RIARzosLUaEzXy5SdnGgvyc8zqjQZOTTWT6lAf2njdfh5owx1XbNer9ld7Xh4eEgOB37M/Ld0vy6XJUYVeCCOInOew/z7xLei7R/vODannODtqbtwRHRZsB337Nttdig3+JAile7urhjGlrv7K/phj1IR65L9hpSS1eqcs7NLfvPrH5BIrO+5fbjh5v6aetWwqpd0fceCiqLWXL4+x2vH+v2aLrQsmgL8nhg8MQp0EIwjhGC5u0uF3/39PW27T+qfPGMcXHKXLnQa0EaRODASmQqzmDkzeSORRJRIQeZGFYykXE83et69/wnXOXSh+Xj1Ix8+vqPr9rkASwHtfuKzxaM45phg9rqosdYxjgGtJ0PFHmt95tPJuTNPxqMSSGaQhTaIpp7D3KXQFKqgNDVVuaQqGppiyXp5wfnZC5b1Gq3K2ayyMmVCQ6NECoNmgaQCNHJGHjlw0eTEg8ntPcmWA3GMeMVDYRYjzMq0/N5lOF0+4invJD4xUgucfu2YRiz59zDT/n4Mdr2DSZw92ZNFwIaB/X7Ln//ye959/CMP+49UK0FRB0pAuowsePChyLzUiHVxPm0ahTIGZwOjAykLijLZT1jrafuODx/eIQefih1pePVSUhXrA5czfuHjny+VdG1rVeTxpEoFWspiy7naU7xaRlyz+aiMkqZsaMrmhMYhhODy8vKERD8pAHe7HZvqjqou2O/3dIP9JN5qt9tBlNhxRAoS99OkZskHy77dc9F8+RzVdc1isZjHi8JGZJkKAuc9SoLMmZOINJ9wIeDCZIWdcDZBQImjKl2EU+PjT1DlL+POX7p3JjL/5OPnvUeKQzSddcMhn7NpcDYy2HEeCV9cXOCdo1AFvd7j7DBnzNo++V7udjtubm7Y7XYszi/n8zwdy+USrTVXV1c0yyW//t3vWNXn3GxuuHjxEud6xj4JN7bdln7rqNXq82N5DtddEluk99rUS4wuDo1APAjEJqrK8X54zPP+q+9lnyg8aWXU1EXNy5cvud5cc3d/xxAGpBaUjUnem0JQ1zWFLrExMGQR0cFrNDdN34q2p9agkMc2v/TxS9mdjx/DI7qCfJrc8gu2rvDsRf3oGZH8hVxwOR3A44i4GHl3/Z77zR1VVfDq1YtkQmlv+bD5kdF23G4+0nU7TKHwrmfX7jBK4tXIv/3436jOSlarM0bV08eWPnYsyiXNecPt7jrFVGlBRUldp/+Wy4b12YIPP90ljpWImS+WFpeHbUINhtFBCJS6IMqEEojg0FpRlxXRJl6AeJS6ELNNxxRrI4VGKoPUCqnT77HR8e72z+yHByBwc/uB2+0NQqSMUq2TYpMYE/E5JrPLGFKHhg8YLRmA4Cze6cShGz1+9EStEDEShULJAqV1ymA0mqaqqYsaEzRKFHPRVuqSplqwWKxZlCuUMqwX55ydXVAXy3mmUlBk0YAHIVFoQBMnlVq2zvMuozmAliBmi6fsN6Aet+jxMwvlvx/tOsbKxCN+zpM2gE8q7MLRVT/53snnDZ5/8Ub4mOicxzsnfT0cK2IP1AL5yd/50q08cQhThNv0pj0wYGPPYB+4ufvA3cNHOvuAWS6QpsDEMhmoyhI3ahA6I2IRFQNSBQqjKYpkaSFCGkYXSrOoG6TU7HcdXRy562+Qe0+xqanPFhSrBlmUGBQ8Eyc0oT3TpSKyz5QkzvfaxNsR4khoMSG+WeQkANsPGGNYVCnCqC4WaGXmz3WxrFkulyybBbowc5D5ptiyULecnS25uf3A9e0NDp/7EEvf7dhu7+cisCoSAqSKpP4UUiY6xidG4NNaLVLzQ6A0FWVRpdQRGwguooqUbxr8AKiU8iBSpq+YoufiFNGmnrkT4hNf/aVWNqd7SCr8s7E1kkKnYjFZIHmCHPEi5ZiO0dL2DuclVVWyaM6TenHXJopJlLy6uEQGwVY/sFOG/XaHJ2WQbrdbogh0w8B9e8Nu2PCKES+m8MFkt1HXCwpTc/vxjvv7Hb8TySuuqWqWyxVls8COLYOzuHZgGDxjtKnUFRPR5SiDNr/nJLSQ+BBBCYwusrrV4EUA73DBJe5vNnOe1M0p2s9m9wN3dAYybeRrkTZxippLIZAyEpEUGM6W51TKYMfkZWeaAikLhEoj/9IUVKZGjiMu01Zi9OmVxHAo0I7EYPpbwRZyH8S/45FMxP+ULn14DEf/H06eT2qtzEX9JIA5jxzk6RhCiNMNxJ3c+qebWsAhkWzHB/b7Lc6NdP2e7fYhOWPXBlc4/vDjn/j55x+p65L/Pf4rr1+/4sH+zIeHP/Dnv/yBpqlQOnL3sMeOPabU6KriwV3x8G7Hg7jjhx9+QF1IXv/zC+7/7QarOpqzkvqhJArPT+9+Yt9t8d5jlOD15QtMWfIHJwlRo6XFmIg0ARktQz8wDh1vX/4aX0iGPtL2HVoY6rrAhpHdw4Z1s0KKQxTOhCb6HJg8QeT1osIFz93mNoUIa8V9f0Nfbbl7+IlxHOmHFkzq2DoxYHuLkImIrAtNkcONdQgIqRClYtztKIVA6gLX++wjp1iZFdIUNMUCoUrqoqKsVyzrJWW9oC5LDBVn+iWVSiOgqqooigqj9LwwXVy8mJV2as4mfHocwiS2F4e1XBU88xPyKxsE9ZlCSD654T2HCMgniqQwX7OnBrPymblpyir1h9cSzRNNz6mX0+kr+xQ9igEQLhOVx/n7rIt59GgYvc1ikoBlz95uOTNLbIBaNoDExTC7uTsfKJR+5nMJ82i5yKlPSpI4YMrj6entNTebn9gPV4gyIWGeyNAHYqwpZIVUDdHUdPuAw1I3JbKUjLZLJq9GUhhNLEzyrPeefr9PCJoHUwtGs+daWvpby5Y9toB6dYaiSuNEF/Kmd8hBnVFSkc2SFRTaEBiRiFkh53ufx1cOGyw+BAhitvFQCOrGgFd8/+a3/NOv/ivYEukNZ8sLmrpGZ4RMS4HUihgF1gfemIh7OSDlwFr+GdX/kQ+bD9jYgQkIOWKqkdG5NEI2EuflPJ5KAgaZfSTDfL9NHD1iJAqRjKNjgfQGFQoKaSiExkSBtYJSLvC9w8WB9cKgKsXt1Qduo+R/++3vULhkl/NYKS3CEa0tx1J9BbYUn7q7Him6Y24nJOCtY9nUIBuubn7k+u4D/9f/+X/z8vU5/8//+//x0FlCKDm/fM352Uv8aDmrHUoI/vxvf+Bf/+W/8KuX3xEu3/Dzzz/zs/uZh+2efTsgtcQZyU13T38d+N3+Pb/ltyhhENrkeCvFOERK1WB7QbcZCENAVfDdm7dIIsvzC66uNvz3//nfcF3g7avfIGuNJSBxWe42FWthXicEAuEVpU7KzeAilakSB28YWF5WRDdkQULI2dAOFzzolJ7RjVuUCoBFqgMM8vmi7QmroQilqfKO7PNoUzDuel6dv2C723B1d029WHJ58RrrR/bblkrV/POv/om//Okn3t2/52LxihAdfeyo1CoJAIU89NLiW9H2yWn49z5+/V84vvVCJms+sQmLIzl95JOYkBwAxIhlxBK8w0WHiCEtkHZg9EPy0uk2DN2e0Y/Yvk9EzxBQVjIqz4fbP/L+5i+s12se+gtWvqDzW3bjPWPscH2PEmlxlqXA49h2e4SSOHZwB6pJ/IkhtsgqggmMsQcZGX1Sk4Y4Qkju3FJKlDFIVeL9iI8eFSNapMUtjfc0IhgqVWNKgQyG0Y8p5/D/Z++9niTJrjS/31UuQ6Uq1d3oAQbL5ZDLtSVf9pFm/OP5SlsazWZ3MBgMWlalCuURLq7iw/WIjMzKrK5uYNYGs8i2trRSmRkeV5zznU/IgDAZMY5ms6MnkBr5Aocp3sG0URlNHFzKB41JlBC8ZdvvQAactXRDRwyQxxKFwLmAUZoYBNGOqjcPkhR8bZQizxRaJXEAyJQpypgxKg1lMcfogiKfpCD1ek5djwkEouQyf0MmiiTLH416DwdGCqV+zLH4JR3gT3bpP7er/5kf4oUfKY6o1cOlGZ/wLJ9+x58zSH2KQ6uXOWXi4DPnjwVhHFHIbnBEPbBvW4JwqCKybK7Z7u9YT6bUckFe5yO0KR/lBn4aMwkPF+74sp3v6d2WNm64X31g8FvQnujD8enEcPDzG3lnLjKZTMiMIOLoBzsiChCcx+IS53LsDpWIxz0itMIbwRA71sMSvS9ZNks2/Zo8nyJwZDo7XhgniVHHkZ86Rd3GfuGQJ3xoOMMBBReROOaxCSlHnqej0gWL6TlfvvkbTJghXMa8OidTEGxCDh+OSUmIEp+DDRZY0+U7MvmB0Ae6roXaE2JHEB6pfOLXykPkVRqHWR8YXHj8XjxamBIZ088rUSiRop9ESBeoiBIVJEoYtNQgHHmWIWNAq9RcHIzKD8iXPPnaaSn7R8hRQqfkiwg1PCMsfcI3PAAAcvxahclGWkaCdL0fWG5uUHlGEIEsrwkCJvWC6eQM4R2+G2j3De22ZbvcUOdVyho2GcZk+JDWXzf6cUotEBq2+zV3wwfOs1fooxQsqVdTBF6NUgo7dDh6vGvRukYZjTRJLLMfTdY71+PwGMTDWnsK9Y73RJqAJL2slBIjDe24t1O+rTw5O2UaTaISny1hbqPo7kHZceR/v+iNFx6h8OK04B8LNomkLmpW0qBlymWWUuOcR2nD2eKKxXSRuMvlhKqc4IaBYRiOzd9p9vCh1v9r0XbscJ4afH7u55MRwQnI8fFnOXZUhx5hPN7HzvUl3ndaoylA/WCvcVg0joFVe0PnO4aup7cddujobcfQt/S2xfZDin/q+xS8bnsG1yMiqNzgNdzc/sj98oaIo2m2tN0uxUg5h1aK3W6HkZKLi4sjh2S73SZ4WUvu4x0iJu7CMPSJDEpgt12T5Rpr+2SlsVulw2T0DtKuS5vYQzgoyqJK3XgEoypUmJAXc1RhEGKL293jXAsqdd6BSBTh0cMXcsztBKKP5GVFkeW0Iimh9Mictj6muCUF0UmilWmGI1OygvIBb8MRAJIy5TjmeU6VlxRZybyYUpgipQiYfDwMBESFEIY8K9E6J89qynHsWRZJRJCJgooK/Ql995/sIfSv+EM8QqSfx+MeOkz5hNEhPoPd8dMChgP9RshE/09tkMM5jw+wbjoQik2zTZYZsme5ec+muaYqKr6++jtm5Tm5fBy/89k8mZMQbGst1/fX3Gx/YNPd0sX+JCQ9HkeOKZ9QIkLy0zq/eMNsXrHe3DHcb8YxpWDwbVJKB584n0ITR1lwkuREClnQdju6rmPpl7x//wNX83eUb2ZMs7NUwJ52+j/5ch5irA5WC4+b0Qe+mkCw2+3I6pI8z5nncwwzJPnxglZanqCnD2ek1iSLEhLZO8+Tw3zTNqlgzOMYj6RBjo2QeLAYcc6lrODxP/Fs4zxe5ccsV/nEMmm8TdWozjYm8da0JoQwpqEcUKGnC08+QYY5+XvyUT0mny0XwqggPaEHPGMVktJdsuNvWmu5vnlPFCnNYTKpiDJllKbcT/DdwNC37Lc7vv3jt1RljdHZMVe5LJM6t9v3DIMjz0u0Ntzd3PJt+S3mq4Lz7PA9A1IGqmnJ+cWcapJh3Z51c8O63/LuIiczgqpI/m8hOga7J3qHepY48diA+1FdNb7fWusxqsp/tB8PiTRPeW2/2PJRfJpiO5lM0PcZSuoU0SUlXdcxmU149eoVZ4tLtCqZTc+Zze5pG0u7t0j0i/OJ/+GLtvTM5S/6/BSvFk8KL3HciOGkowonyEMgRSmrk8WXkKMYHIFIJvUYynuo38Fhafd72rjnu5vf0bndqAza0w/dMcPTuqT0dM7igz3yGpLZJQilMXWNdXuUTrP9fbths1mlat8YyqJm17QIoVksLjg7O+P29pbdpqfrthRVkXx1QqDrOpRIA7xh6Lm9vWE+nyfD3bYdSbAPUU6xkWiTj+dWRASTZlUeMlVQl+fk5ox5fUlmCojJ82dwe4geaSJomYxogx+VauNNPHaDMQryUW0ZvCC69P2992x3G3RMpodCRaRO8TiFqch0Tsxgt9mhhMLEAiMNRV4ynU45m50xKeecVefUxZTpdEpV1ilgfjQQPYoQRIZSBq2Sh5QWGQoz+rI9Vh2dCkZCCI+iVP4tFm/iWK6Jk/31DLUunhZuT26nn+SzyU/XdTJha71v2XVr2m5Lby0BwXqzAym5Xy1ZNUs8LavtNZvtB4pswkSd8+7qa/KqOH5JH/3no+/qgZTeDi039zd8e/MtXdiS1Qe39aQqPNpMeJ8sWULas2fnNReXC5zfsVoHjJKAo+8SnyeK1HAISRp54o+qTqUUxhiccrRtyw/vv2deXjEvL5lcLcYRlzyCG+Fps/vMhXWIadNaHy/EhzSVh6JNCjl6VYUxS3f0ZsMno1oPRqX9fDQNjgLEaN4rE2pYlhVVOUEpg3MBYSHLBEJIlDq8/tQUHgrfYRgeirZnLu1DNvDhlR7sR55GAtoYyGTiyAWRjLKjVDgX2O07TuUC4imV7Zj/JT+JUD/lRn++eCfZvahj2grHlAOlK3RWMpkUI11kJPRnhqKuqfIK7z0/fP+ey8tLMp3T73uIkbqqkFqBgsG2SZCxT+rQaX7LF69+BdnDC40E8kJxfjGlqAxBDNwsN9ysrpleVPhhwGSCqszYGTFOmWKyUfmIdPQxPePQHyXfuaQgpk02J0I/fr8Od4+I4riXDkKGPzcYBJKqqo97ISfHxcB+v6OaFMznc6pqBk5QlXNm03PeL6/pO3ecNshnFsVfkbYTaFOIn/f5o2mneIl4IJ+EqJ/SXT0e94gD14eefr+jd5ZMK2ywlFlOXUyRwP32hpv3H1h1d3y/+Sdavx0Do5MrunVJ4eOcZd82D+TG0WssdY0QnKTUFmkEs1mNMZLNZoUeCyGJwEiDFhmZyplPLnhz+SUyFKyvW7ZNj7ee3ne4LgUSl3mRvHL6hNSZLBkmJjNae+yGRBQ4GygznYgxh1fvBTFIqvqK1xdfcTZ9y9nFZYqDEppNs2I/rFMuoQRUIEgI7gAk+2PuYnQRO4TRJ1hCUKkYrCfJ/LLpiQEKYVBKYkxBjIIyqynzGik0RdijdVJ05nnOpJqymJ9zsbhgUs1YVJdU+ZzJZII58aQ65OedGkA+9rgahyZPpPvHSJRPOHX/qdL0f22778DTO+5DPtW9yof9FOUzG/nzC7bR33Ucvzi2XcOH2++4X97Q9nv8GOMljeZ+ueRudYMXe3btPbv9PYWcsL5cMgwDVIetH3maFflZKJvraZoNzW5L17fpDBDuOPaXYiw4Rv80LdIzkCqgM4/JIlL5kZeTsCMXXUJZpEChCKNy03qHEJ4gAkL4lDNb57TBcb++54/f/4FXF+94dfEOLfXYZurnB9Xi43fzNHHkJaTtoOTLsuwYMfQRPUQ+/OLBLy79gVIP7a/W2RjBVqK3GaiIFCBlijJKdjoPSNvB2PS0aDtELr00iznw9OSJB0oUAh88QqUM2c4OaJEsiYR3x9zhR6sw8rPFz8/fPyeI07MqX3nk+GplRoQ27Y2uSw4A52WNlim2qm13rO4isZ5xvjijqiZURc1utWfXtKzXW7puQEnDdDqnnk6YLubkZZ6ylod7VutNEie4cOSrSiTe9wiZUgGKSuP8ntu7H/n+w/dMznKQkr4bUMJjtEDJQAzDeC/KJ+iafEAqxeP1J4U82n6kiChLZuSjtXdQIEf3uEFG/ZkKiShHH8wR6cxyjBmzrEN6FsNooiuEwNmIDAqjc6pyTpG3SJmR7JGeX49/LdqeK74+9/Nnv5kvMeACETtqqdIyb8aIkabZ0Pc9Xdcepe/v3qZD8Xb5nn/45//G+/tvGPLEgen7VKilA8jjxyiSIXYonWBq59JCUZkBKYnOYd0ebTKMMnjv2WyXOG/RIsP7SNcNyKgp8imTYsHF4jWZqFhd79lsGnq/hhAJ0WP7IXHfpATh8KFn16xQo0FmOsNFkt1LiQgeQodkQMjEt3EuglPMqjO+eve3vLr8mtlsQYyeYei4vf+WXWuSr41w2AAujNLuSFJPjod7DBI3DHgL1kZ8D0VWczl7Tdd1bO8alFBUuiLXBqcDApW4Z9UMrTLEmcaYjDJLQdBVUTOZzJhPZlT5lFlxiRH5RwdmiEl1erAp+dn7X4ifLNj+8kenTw7jKH96rwoeH9r8FMrGx2OGJ01XoiFbmv2GD7c/8u37f2azS8q4ejrD5Dn3zT132x8RasC6hsFvUopH3x7HMAfEVAr1ky/laeG23+9ZbVcMrqeoclzfstpuRlNnTlIORnuNQyEjLG3bsN5A223xvkcqkXit3hPzA7qgETHinCdEiF4gVSC6kBRshSFaR7PvuF/d8f7me15fvuWLq79BkRJH5IuxY59XtB04QqdIm/ce51yypMAd704Bjz3i4JGVxMHfzoWAlhmTyYyqmpBlBV4NKMVoUC2OVj2HYjGMHlnDMHw2geY0fijGE1sGkViZ1ll89BRSHxHB4WQ89yhz9LlG/5P3xklB8NydJV5+N2JMthJaZXRul9bCiDR6b4k+pOiofUcT19jFwNl0zmy64Pz8FdEJFIZ+NNkt85wyL5hNppyZOVVVsN3u6NaVgixsAAAgAElEQVSW9W2D7R+K4cMP6rAIaVEm4mLHZnfP/foDu/093377z2RZRvCKvmsh+IQxBY/13Rivloq/w6TpaaLEwYlJ8YC0HXI98/FsPpyVB6QtCPHIF/BT5+wnkfIDPzE+d95INBl5nlJCdsMuJU5ES9+3bLdb0IZ5dQlaUeQTXr16Q11NiYhTFt9fi7ZPFm6/pLoWv+wbpg5/YGBPa9ObuNmkbmW32zIMA9vtdszpDLxmgUSya1e8v/6WP7z/PbMvM3rfpE0Y3HGcgkyRS6aQZJkGERmGNIbI89SJWOtBBaRMh4u3aRMLoZDR4hwMe4vWBdNywaRccLF4y/n0Dc3Ksd3u2A4ar3pEiMnaY1TYaSkJRqOUpCoLpE6RHs6mgPQD2md9B3RoaRC4MXczZ1ov+OLNr3h18RU5JT17iixPo59o8X6Pi5ZeKWxMF5kWIqnNhEJKBTqidUSrHOUNmchZ1Oe8ffUVXduyud8hZSJyl1mRJNtSM53MmU0W5FlJYSqMyShMPSo704gzMwWZzFFkH11j3qeuT37GxR18fMLXES8WbD//UPlL2Xcn3XR8fgL6FCF7PD592hR9hofO+Nt+/HcuOPbdjrvNLT/cfsemWRJE5MvyV2S6oA1rWrdC4YiiI+oOQT5aO8TjWO+QxiHk5wtGIoF1s+ZudUeIkfnZGW7Ts3m/QWXhmN0phEjNwLEAEcToWd5fs9vds9lsGGyP9BLnBvxg8blPSRsyFUxJ/ekRShEFRB/w0qOkxhiNzjSD67i++8AfvvsnzhaXGFVQyApxdLlK+Ef0p2Kp+Gg8ekA0PslpEw9moge064AORTmOvUKK0TvQOkJMEV9CaEJI41GFGW0l8tG4NKUnKB7oIDHGk4zTRKfwwT5kMvPpBuiBWyg+ei1RCqx1OB8RMuBjMv0WMo24xFjcqRcmMcf1/DRG8MW9crpPwguI8oFLp5hMZmRZxm7bkOWJmO+9pe12OC9w1uOsxbUWHSTha5hOplycX5KrFL3UdwPSaLRKzfwwDFRZzZvzNxRmw3K25q5IqPN6vaZ91VKrKo3XZRo/9n3HurnjbvWB3X5DXih2zYrB5GPR1kMIaDlyCBX8XAuUwygyncP+o/f0WLQRHyNtf/ZmNB6nCAcOs9g92OBY17NarfBKs6jeEoMiMyVfvLvg7Oz8aGj016Lt08S2X/b5k//+pcskHNlrLRsat2G5WnJ/f8/9/T3bbRp3em9p257JpOJ1uDp2HF5ZdnbLdr+iCue46HExGTlKGYkycakEoKXE5DkPHlOg8wyixIWeLEtBvc4NxDhaWYhI8AHXe7wNlEVBXc6oihkzdY5ROV+8bnn//j0Tr4m6IwRHN3QMdk/vekJQ6OiYTWuquh47n4GhTz5siVPjiaFD0qOURApH8DYhe5nhfL6gHAPPDSIlEbgObzuGYUcvBmxW4WLyFJIKhNFomaXXgaLKC8psSiELMJr55JI3F+9od3tup/eUZeKoVXkKU1YyZzZbsJgtyLMaLQ1ZlpNTHg/B00NSPRl3xJD80I5vs3i5YIkxoJRMUPjPMHl8zsH7L754e05iKp/vqcLJ31NPTG8+D9k7+VohIGQ6vHvXs+sadu2GTbciiIDlNVoJguzxMVkGSOWQ0X90sYYQjsiq+KxOLsmKHI6m37Hdb5FZYDqbsu00u7ahzoqx4DixLCFdRlpIog9sNxuEiHRDPxY8yajU2Ui0EGREBY7jwcP/SklcsATrcEohlSHPDbbzbHZLfrz5jt7/h3RmyBShdiTJj9m0Un6MtJ2OQOMz781pU1IUBWVZUpblSC9I30uMaJqWpLPi5PWHKEf7o+SVFglkphz5pA8qaykkPoxFWxBHbh2nxeFn7qGnIoTDR3LcH+kYwWN14tApJZKI4hRoO202Tshpp+tZHtdzeOJnKE/MvZ+XJjyLEUqdCtqsOHIHtZb44LBdSzcEYhS4fqBvLV3XIaOgNBXTao4hY7Va0XUd+cjh6Xb747O4WHyFqyLTekaVV4Qh0Gy2DF1PXSeep9IiJdm0jtXqnpv7G6SMzBdT7ECa1DhPdB4lFLk25CYjHxti8Rmg5NOi7Gle7cdr7898hoqXi7csyxMne/x14g86drsdUtXjz5rW0sXFBZNy+uy++WvR9hEMLV/8HKPDu4jO1OM/B3xIvlzi0MGOW1SIQ+ct8ThEhGa/5f2PPyKV4uryEllGbvcf+N0f/57lcknf92w2G0IIZFnG4AZul3c4ZrjYj97+gV3X4KKlnlZMZ3OUU4i2ZRi61Dn4h8WojaQfQiJCFsll2rkUp+Q94FJobtu1aDKqqqRrLfvtjkk5p5jUZKrEqBwVk3OzFoqLxVv+j//4n2ncD/RuzXJ1x4/X37NrNvR9i5AkbylvqSclSho2mzTGNSb5+Ihgsa7FuT1agMlz6lIjvEbLgHcdQQ8ozDiecdhhT7vf0Ls9QYMPAR81IUaEjCibSK9lXpObCic8uSiZlgvOa83Z5BIZc15fXLD4z69Yr9eJwKoTjF3kE/K8JNMZihw9qnjEuFVOj0bxDD/leU7xk+JdHHhPD5v7c9C1T41N/8XqqSfj2Ke/p/5kBq88ikei9wgjHxU0z7U8Ngxs93uGtsV1O7549watMqyzZLo4jqelOB3nvUD2jundzbVhMq3Iy4wgPdIIqknJ4mqGMYamW6PzpBsQKkWgOT8wmVQp0xDIZEaIgSAegrp+umwLrLb3/OM//Y51s+Z/+Y+/RRaO1XbFZFqxbTZkhcFElXgwUVOYDBEFu+2OYD2ddQiVGjUjMkKATGWYWZnyN4eOsoxU0wlaGna7HS4OKJUjhWboe5yIVIWhnOZoHen8nve33/H//tf/h//zP/1fKCQ7t6PWMwSSYfBkWj0saf0gIqjrmrOzM1Y/3tDbHpGPPFohCX58dqP/2zCkLOPr62vuXt/xqpwgEIQIWj1fj5/aIYmRq2dMzqurd/z+u39gs1uDybAqxS4lI1NJDGNIt/98J3w/YrEHU98QAsWYMTzsB4RQeOeTJYZSBOcpVMGrsyvOLha07MnQyCAQVlCZAxcrWbA4UlapHH0FAwEX0+hSxECMUGX1iByFZKI9VspD25NV8hMKRolSGuIDR7bve2zwIBRlWbJvd2idMfQOP1gkKhVuSH7zN3/L7/7h9zi7Yr/vEvdt6HHBklcFi/2C6OHri6/5+uuv+eYP39DbgdVqxe9//3t++9vfsKjmx3Hldz9+x/36Du8td8t7qknJrF4wqRd8eH/P7XbJ1dkbvnz3FYvFYmyQ5aeBFkgonncIBeezc6bTKTHGIw/SWnvkCfd9n8Q3VXGM43rUwIlwNOD906s4ScBRVRNijGy3W0QuKKsCFwb2+4b5/BVd13F5dsXZ4oJaTJJNj/UYo/9atD17mR7Iy0cvoTCKwB0xJE6SEIeomURY7rv0RmdZhgse51NIrbXDSFavjl/fj5tQC40w4KWntz3323tC2/Hd+hvu1h9Yrpc0TcNut2M+nzOfTilixq7fIjPofMOeDQoDOpDXhlpMKIqCYFPIuEAdu8cQR1XWeLARx//HGYnAjwefRyn5SBklERSmYFJO0ZRUxZyz6UXKvhQVmpxFrVEicJWV9HFLVVRst1uW3I42sIHoA7PZjCLLQSjyvKQo2mPEjXP+wQIlRJwd6DuH8JFhaHB2hywcEsG6XdFstvjBk5uCLJ9BpgnqDE+ORJCpjDKvE++smJHpAnOZc7E4Z1LMkCjmkwWvzt5QyIq+6DmbvU4bf9yoEo3kgCqIxx5LPBnLxU9xHXhGLhaerDvJL/U+++/e1/xLFIunl41IvmgxWJCJ5eliSGrHmEyLrU/cp33X0jQNfduRAVd2ngyJxak5pvzs1yVHPozWEpMpjFHooBBaYMOAiGlclXhN8UEZHCPex0fjlZ/7jGy07Ps9Qgmm8ylFXdC6NcNIWK4mdUKoRzV3PoZi973FDxYtE3cs1zlZUabRkJKjOXdkLdcMzqal6CRai6Sus8nHTSEJckwwGM++IBxCRBw9292SVVhyLi85mmIdEY2Pp3iC5+0xPtUUHLhFjy0a+GyvQYFBCo1SBqUMUuqR//VywX6aY/o5QO0pH+qgxAQwSqOIqJGOIkfEJI3pJDYOZCKgZYQMPG4ck3p61+GUIoqUr2NDR9/t6bo9wQ2pQMxK1BxyVSfBw+huRDw0TCfxJx8h14LMFIkqMvLyyirHBkvXW4ahR2tJrhWYiPNpvJg86XRCEF0yWLa9Oz6HCATr6fueqqqQCHKds5id0fgG5wKbzYabmztmX0/JVMl0PgMk221DFxqsT5nLdTVnUZ/T15Ft0TKpZsxm50yqWfLFG09f8ZkcpF+y/n452vYC8nnk28ZkARVEypcOyW/xgAKGkPKDi1KTZQrrOjoFRP3yzy7CX37R9vSB/9xDMxyN9Z7yDA7F28OHi57dbpdgTSkp6gplJOvdlru7O7quYzab8ebNK+qsJrExPFH4tJgySVCebbNi263Y2zXfLn/Han9N0zTc398zDI7zV2dcvblEa81qu8K51Hnf7G/Is5LBD6hMkVMkSbfQY7ZmwEc/kuATQ1PGZAiZntXR7RIREiE1BIvWBmMMwUtCiMexxXx+xll9xWxyzquzL1ksLsnIEGgyDIvqkkiGZ0K8hH/+wx8INl2AQkms77HW0jQNETl2PBoXIAwe2yd1j4wGQoLou32PihHXd9hhjyTQhR2r+3s2yw14xbw+p6gW6KJEZpdECoxSZCqnKEom5YyqqMl1CR5mkzPKrEh2HnlFKScp4kWqVAQfi7IjTjo+L4EaL38RP0WXci+QtZ4Wb083+8/nbPx3b2vGkcqBi/HnLtx88OPlkwq0ftizH3ZYPxCEIxCwrqcbWvZdR9u2NPsd2+2Ovu14VZ/xxetX1EU9jpo/5vW8tPMFEi0erEa01mRZRp4bTFBorWjbHd5nyaRZKTKjcTaio0GRHTMdf9lUOLLv9+y6HUWdcTZ/SzWpuH3/A027wwVLmVW0fYO37kiyTtSJZNuxqC8p8hRoXs/mlGU5cqkiITg+3H5gtV2y2zX4PqBkKvBEiAnNURI9jvjSU7FEmRo/FzuWmxtul++ZXszQMjtBWF82HtVapyxTpR4Svz5RDB1806y1J+suWS4r8XlXtVYGozOMyVG9SWkHwaYGcRQOyBPTaqmSh9nnckgPNiapaPPH8Ww2KjMRnuiHUXyURoJSgh9TLiIWISQOSx8sziUD2T4KvIDgBtq2odmu6fYNQ9cSAlyeX2FyzXldJKTy5OyRRoPoP/lzF0V1LDSNMcznU1wM3N0nW6eqqlIRHwTSS/QhJxmDQDGdnrHdtgyDw+QpWUaYiDKSoiiYlWl6UxUlX7x5y628Z7tuaNYN1/qa8/MF59MF02KO84HVpkFoT1QaIQ2ZrpiUC7oJbKY95/MrLs9eUckJSdKpH43GH52dz+QcC1JTYoxBennkKx6tXU7Goo982p6tLT6nb/gUpzCMvp3xKHg4Fv54rB2QMlKUBi0j22ZD53cUeU2ZT8Z7RX702v9NIG2/9CKJY6qAxx4P0dOKXojk/h8I9LZnv98f+WZlWaJqDdLQdFt+uP6e1eqe+XwO2vL27VsKkeGwo1NbuhqCtDTdlv1+z3J3w3erbwh6IARHH3oQkXJacfXmHGVy5D/8PV0/sNqsuF7eMilrNu02dWnOJZWpG7Bdn4LUQwpmwQdcDBQmEUlFEDgZkDGpnQ4TXu9SByilTuHT3uO9IM8Mk7Li17/+NRez15xNX1PolH35ECmiCWgiGo0hWoG3IKRCC3DRsrpbsd3uQKhkZDt6l6XDrSC4iJEaFU0SQYQBJXUqlkLSgrrB0u56vIU6X3BWz1mc5WRFTlm+AZFyAY0xR5VnkZUYXdDve6oi+adFH1MnTuK7+eAJ8gUIPn4OZ2Es2JJsdUSOwsfcxo9MXh/HsfylNEaHz6f77U8dI4TR9ib5+TtW+xUfbr+n63egA0IGWpdSPPbdjv1+TzM2Tm7viOe/Yt/+FrgaS+8AP6czDyBUGr4baTBKY0yO7NMqX61WFEVF1w0INEYZpHNYYdAyx/ap2DhE1H02ny0m4c6mWdO7gYurcy5eL+hDw+393bExdOHgI5WI/c45+j5FMc3rM75+8xsm5YKzswvmZwvKsgQlsS5FR1X5gh8+fMd33T/Tdrt0eRcKLc2YtKAQ6sEjMsaIUJFIwAVB0264u//Am4t3zLg8rmP1CCV9fGkebBc+Z3R+QLsOhPCjAlcKPv9YTwi51hlGZyO37cE09ZggIR+KM6UURZF/FnITx3V+sCfxMeUdK5IReAyJ4Be8RRBRBqL3dP2OfbelqCejiEOytyv6bsdgG3rbsex6QozYIdlwNNsVTdNg+5bowfmO2WLOWX2FJ+CFSJy5eErFCC8+FyNzYhR4l8Rfk8mEIALNfsd+11HXJVpmxL5liKkBiS4mbzoMF4sLXJ+sU3QmmExqdJ5QcamTlYxAUlPyxdsvkUERnGBoB9q2Z7drOZ+eI0keeiFIqqIAHSFqvJMYWTObSK7O4eryS87qKxg1y+pZg9n4Yg1wuv7kID9pnHsopp5Dyg9K5c9bg58q3B78Qh++frLg8sHhQ0uIHX0QLFfXhD4wm16i5pKyLHjOcUL/j1qwPbz9LgVB+XHBxpg6RW3QaASCTbfh/v6epkkqTa01pS7QmQQVCcrS+R236xvW+xWqEMhcsjibpQNCCkpKHAOt37OzDU2/YbW/Y9Os0VXK7svLjOhBZYIoY0owiA7rB9qhZdc2xBjZd3vavqd3HaHpsH7AW3csDKVMjFctSBKvGFP0iCDJ/cVDKkNSo4nRIiP9Pe8P8L9kMTvj8uySmgmCbJSxW4w6dOaSiKLdOewAIoz+ZFGglE6oQNsjtcZkBVIYfEjkr8xkiFCSK0mZGWSM5LGlNBPm0wWFKdJhLDJyVTEtr8izivl5yey8JMsy5vUrZEydtZRJOaRVRibyJBPPwoimAebUnVygpX6wCHmy7V5cVuIpSvZkPCHk44tM8AlO1b9+u47Ti/eotDsp4v6Uoi2Rs8VIuQ70oeNmdc0fvvtHmt0SVYDS0PmWtt/TDh390LJv22TWvIeZKhmGPQdIJ7VdT0O6X/4BDs2LEgIRZaIxiHTIOhdo11uGPiVjGKEwIkOIAh3LNGLvB6y1ePzRJPinpueJGJ+4b6vVij52vHp3ySKf8rvbH/jx+kd625EVqfiYzSbkJgkSmuWOptlxvrjg1eVrfvPV/8y0WDCfnTGZTTGiICWopv+0yCEIms2Wvm1xrUeJiFaKIPSYb6zTSDokOgeK8WxwDH7P3fKG7X7LpDp//GTDy0VbnuefVbQZYx77Eh70qfKn/Po+Ltqk1GMwuESINMaWUiQOm4yPLuQUrVQ+Ek781D44FG0uREIYEyqGQPQe53ti9BS5wGiN8x2r9S0frr+jn1um9YKhd+ybFV2/pR+2dLbnvtnhiERvads9+92Wttlie0f0MJlUNP0WjwMMfsyqFeLU4zHwovnsyZpLZsNqVMIKpIKqzBEYetPDyPnz3h/5ZGVRMZ8tQEqkiZRljjICLywxepp2iy8DEybMp3Oa6Z5hCIQhvZ95VgOKAQgY6vqMxcWMtm8YeoEKBZmckE2nZGLOq6u3KPIjL5VP0hyen1Ici7aT5IPnkLbDJOFPU4/+9Bz/oDx+9PPEJEFquw2r9QcakXFz+544JOAkN9mIYqqPmv5/05y2z/GxCkT62LLermmaBu89WZZRVSlvrcorru/f891339H3fSLZ1mfktUFpiSdSzkpmFzPMfSLbf/vhG2Qh2LvzkYQZmU6n9EPHslmyG3ZYLMoognS4kJIP8jLDDZ5d2/D++j0RweAsLlhc8AzWIkVPN/T4mLrvEHoEDik8Ugq0lImUHMHHQPQpsilEnzrCsSKRBy6F0AQOEuiQ/Gt8Up8Ng2MYHJyEbylU4tGg8QQ0ORvXsF02uCGpL0P0KCHIi+T9ZoceXASjiUj63hKBLJtwdXZJoQxlqTAasJ46q3jz5ksm9XwkiZfMZ6+IIcPjmC5KqqlBCck8XzxSdIqjMcFTPot4rjT75Fb8uJMKL9wi8hOFmHzMdfjLq9v+RXltaZSXlJiDG1iu7/j2hz+y2d1STBTSwBDb1FRFhwuWwQ+0sUv5h7YhjObM6Ug+jQySnzjsH2d/puzCNA5XKKJPo1vnPAOJEyZMhhIFPliUzzBZNvojjtme8uPxSnymATjyuPDc3t9ACW/0Kxyem5sPLJd3CJHGPHmhWCxmFFnJ9fUtu901MUbO5wvevf6St5dfUqkFVVUnEcIoVsrG8dbV/M2IyDe07Y7N7g5vA1IkZfngHEKpMTfVJcNeKYlCQvD0rufD7Y/cr+55W339GGN2J0ppEuP3FyFtnHhmjftL/OyrUxwRtRjjMf3gMNo/He8fmo2iKI5F27OFtYhHpO2QHKGUIvpUdCspkSESbCQ6jzaCuqyYTCpwnuXmDmcl08mSwkywtqfrdzjfYt2O3nZsB4fQCikizg10dk/vW4K3BAd7u2dwHQMOQyCKZBbsj+rpnypnFUqmwthbT9d1BBFGBX8ceZqaIsvJsiG9Z/HBsqLKJsgLTV3X2DgQhcPHJMJxznF7e8vZ7IziVZ7ukRBSA1FO6fue6TRx2XyAsphydfWW+cWE26Uges1i/oaqPCMzOfOpYFosAIGPEfWR/+XThlk9HrOPayf5omVjMxA+OR59irR9NGH4rPMuvlg0BxxKafI8TwbxuAeTey3Y7Ve8//AteMlyucHEJA6a1jPCxasRaTycZeLfXtF26rtyeFNOY4CeK9gigXbouFvdc319Tdd1CcGZz6nrmqurK368fs8333+LUopqWlPPJhR1OW5nz7yY8au/+YqmXbP//Zbl+hb9o6AbmkQMFoHJZIJzjpu797R9S57nlKZg2s/Yuw1RBEyR433H3XKZcgKlpNnv2LUteVbStHucC+z7jiggyw2EAR/GMYBMYFKUETHmdwoRcTEQYsSNREikxCiIShBFIu8GYZFSoYQhyNRt9X0aCQ/DwCR72BxKqJPCRrBZ7/jw/o7dLvEwUkGWc3Y+RxlD1rfJr2Yyw1kIsUWqnIvZFV9c/i2FyqlKRZVLMglFlnN5/obKzAhIMlVzeTajKi4IIpKVCqUgBkdG9kIFNKrZvB9d5Tl29CEkL6UoJEKqxwD0oa4dN5YY+VbyKMN/GjKtXygI5U8h+n8RHwfn7kdO9n/Wwi0cR3PWd2z3a+7Xt6zbG2aqIgz9A89KRaKKBG0JfiAqNZINw3HQ+mzT9qlm+MTAVQuNkSbRGMaiKstKtMohRjJZYESGDXoMDtd4G45RTEkI++Bmljr850csB8+x1WpF7GLytpps+HBzjbWWvMhTxmaecX5+jlEZ19e3xBiZz+d89dVXfP31rzmbXJLHGVImu4sDNT1ikWQUwvDm/AuGoWPfbvDfdwx+j3CRqMToUqseIRJSH3g40LUtH27fc3t7Tf+uQ1Ec17P3j4u2A71EC31E0D6XN3kw2U2K+5+/XQIR7+LJ2f/wnr801s/z/NH79fyl/ZjTdoiEOigRjMpA9AQEhTGczebM53PWq4bdbsV+57hbbjDSYK0lMiCVI8SWve3x0iAzQ2ZU8tY0HpEFYkjrOUiHEyk155gbMvYa/iQF7VMY5KGI9nvPZrPBBst+vx+bfkeWFVRVhZsJJlU9FhfiWCYUuiCfGJphR9MuafYNTbdhGDp++PY77BvLfLrADpHNpuHy7JI3r9+w2++IUTDgcS5QV3OyKmO6qHDBo0PO1flbqnyWJiQiIWybbYMfPBcXZz9dLJ2+z+OqOeaP/gIhgvhzddHjzxVGcOVQSPa4o+DGGE3bbXn/4Vv8EPBOMclm7NsNbdscMi1O7pL0RXV8cZb/KTgy8DlhzB+/kF+GNEReJnI/XKEeTyBEO2Z3ps2rH53O4kQHKEc2TZILr/cbrpcfaHYrssywdzOmtiafRu6bH7hf/0BdT1DmV1STkkzk42hNoFG8qt5we3XLdz9+x+39mpvmA870R27FrJsQPKy2S2QU1HWNUjVniwVxNSQzVqXohaDb71nKOwSKptmw7zuyXCfDXdPRjZYfZVYSrRmzE5MSM4qENvmY4pyUNijvicodn8WBHyO0ABnRKuKFT7lmKuIV4P2RZH3aiaSD+EFKrU1kvbnn5vYDzXaHdyBlRmFmnM/fUZeXNO0eqTXVJG3sdbmlKCa8vvyChbkilzlloZhUObkWFJmmruYoSgYvyJQi1xIzLR9R/AMKgnpYBfLkgh7XmhAgQponiDHjFRkQMYJUOJ8QeDGOGtSJlUC6zMKJSEHyfA7e81VBfG6dxzGT/hBU/icWPB+NCaL82EfwE/y8+NEuDo8QxXWbUB8lzaiKS5+VTEjO5+cgvnytiMTCJMZkB9EObVJjR4WzHVE6pEgomFAgo0BaSZQyKSVV4lX6KEabD5263JEL9ti09GTI8IQuI6UEpZK4B8kQAnWRxnxeBIRORqoe6KPEILBxwNPhowUcAXPs/2MQT8/b8XmnRsKT+K3BOparD+SDYNvcI6QjL3Jc6BExFUBaZggn0KLi9dlXfPX23/Nu8WsKpohYPKCGHIS4CoFOFhxScnX+JVdn19zf32GbFCsX8bgQUPj0dyMgVGoYx6/TD3vabmCzvaN3W3JdoSkSMhcfvzYRBFEaNCVSZghh0iOODyvtNFtWjmkCxIALFhtSKoIh4IN8GP/Fx9zPQx0uT76OwEEYCGFI1aQAJUK6O0I8SZZISJtCYKQe1598zEsSiQP8QHRPz1KKDIVGBEGQHiUkWkuCEmif1PGT+oxqMmW7c/TOYV2DGiwhRGxwKO3JC0lkoHM90oiEiiqZ1nc0BOcJ3kM8nLcJXji43qmYnmn04xz5iSv/4dUcGszcFD+qC3QAACAASURBVBhTQFA0+4HBt3TdQFYUOK+Q5BSlwg+GqqjJdD7eISkHWmmDJyUdLJf33G5+ZLO7Z9/vuV+uyCclTb9laB3r7R1nF4tU7FUF9+slxml8iNRZjTITJvUE1wYqPWU2OUeLjEMEYe97bpfvIcDZxZyjkfORR/3CXP6k/9JSoUbknBjH2K94XEMxCKIkMWlPi7YTX9WE2J4stviU6iKfnJXyxaJQCo3RGVobencwVAepNL3vsdstQ2cpspKyqBhCj/XDWPnI8ZRVx3Wqwyca0OcgSfHksnDjaELEEzLgyA9JSEcYN+1okijlw4M4OWiOn8dv7CNpDKFEysg7VsHh2J0HAhZ/fDFrd89+16QCzib/n9lsQaYypvWCnBqBxsaAigYhJR7DWfWG78vvuVm+Z7V6T1GCZYrIL7jd9MwvA9//3//A61dfMVlUvL++xZ5rXtVvkQQ0moE9WhrOL8+RlWPd3vGPP3yDKTMW0xnLDz+wvFkzzef8u7/59yzqMza7FQU5OkiaTUNeFkyygr7v2S7XaK0pco2QGRLP9c33eO9p9rs0up1UBF+yXC7Z7RuklBiTkBBFmqHv2w6lNFJlCHkg+4IPEhUCIva0zX50Fa9QMaCDQgbF0O/o2+1JHI1MPkFIXITMlCztt/R+i8cyOIvRJVdXV7x985ZpPaeVHReTHJNV5HmJMRlKmhHN0rxbfIGOEi0lSgsypUc381QUFEoceWin20IByPHniurFZkCOaqhHIxkhjxeoUuGTBcXDof7Sh31SxIUnxZB8rCUVDyMzOb4O8ScVbZ6PRA3xYew39JDlT/bYIe/SQzSnPmie3bBitbqlHxqkgqbZYq3FmIzZ9JyymCCEIs9qJuWMnCTwiFFwIkJ8pM14yUdKiGSaHJF4JEpoMq0ps5zOpVBwpXM6O+B7TyEyNBlxCEinEaoAnfH+bsPbLwK1nhGiwTuBUSKhEBEQpwa8ieB8+GVvPXkesTiavkUqg1QZg3dIFRByIEpJ0I51v6XzO/KiRM0nXN+vyfJzlrsPtH5LZWpcCAipExMljut0FHP7ZI+FkAqVgYiCrl/Txx3vrx1BdFxf/xMh7FBqSm93dO1A2zTgerqNY1684dfv/nfenv0dijmBZL3zqCmOI1FAGAQGj+KseM1vf/O/0bqBv/9vHevdPaZW6ELipUdIjTYlNkS6fWpklMyBPZNpwc3t93zz7e/5T7++Aixtrykr9ej81rJkoEdTUegFthX4PiBUQCpPJKClApkhoyJ46J3FKMW239LaZlwPkcEPaJPh7clg6OQQEOMla7sOUxoMkRA6tA6Y3OPDQJADXdcm1DDo5OtnbbIM0jlxAJmbsdEJo4jIHxtAhRzfT4MMJZoSRY6IGkJPVJ622yCkJC8LynrGbP6axdkF92vHvo/ozLB3XWox88QFW3epETG6xOgSEXK6ncO5DqMkeV6T6ZKhtensdR7vO7Saoh8q//G5m7SoeIh1E8dewdNheXv2jlxVeKsRRrLfbQjSMFj4cLNnMvmSq4tLFrVlns94c/mKHIN1EINE6cTtvl/e8rs//lfW3Xu83OOiYzu09Lzmw+o91nrEJNK4JSt/w0zN+ebb31OXExaTM/7Db/5XMp0TQuCVfsNu11JSMjhLkUkiLd+8/x3/5f/7L5RVjaocr69+hREFCj0W6XJ0KX5cPyghiWgiFlyKE/Ntj8rjqEIf0zSEQIy2MNrkJ0DEY2BKKXkUDzzbhceRvyyeaeJPCjwtNTb0FEVBURSslndIFSnqCSFGolLshx6VZ6iqYOv32AhORwYiGYaITsPgmPa4fgknCD/BCjn2q2JEJMTzOIPS+kRBB5zKa8UDwhniA/k0ReuNhhuCcQwZsLiD81kag4qAE56IoHVb7pe3NLs1IQw4P9C1A+s2kfnm9RmvL79gnl0mF20RjiheT59sNHKBygJNu8HerYiq5fJqRlUXvHp7TpHnbLcbguvJzJR5bampEEQ626fMtWgR2uFkRx93dPstvdvSrwfaTc/0VZ14D9UU23fUeYkWkmAdVnYoUSEliegvPUYZXIg419F2Eesdg+0wmSDEAZWXmKLE+MRFyVTKvkuJ75KirJBSIA9Za3Y4yo9DCEThxuxQiwsDLgSi1RS6oMjyNItX6hH8HBnPN5XiYLRRTKdTri4uUcpwcX7F2ew1k2rGF5ezUdVVkGVFks2LVPhJD6XK0VF91vjtExF7v4gjJj4qek6/wJPNGD/xzcVzxNSn+JX8qD/5TLr8ZxZuhy8sHv3MWj98w+BJ0TCHfSfTv9y4ATc09L6h26+527yn26+SWs0mvzAjM9b9mkJXqKxgMbkgykiWn39ktXGgghyJ5PHTpMH0dyVKSjJTJHNjl6GNofc2ubhLMyqcI8FHlMjIsxJdlESlsCEQSCR0KZ5SUU5vufTEw/jnQYTx6QmU1uiseMTFUjoidSBIiCFiGSAorIjJJ1B6LJYQB8CBzF7kKR/e7zgqZXu3pyxzRLCE4Nl1G7p+h9AWqQJ5ptg1G+5ubsDlRKe5WLzl3eWvOC/ejQKb+Lg4PnVEGM/UiEESmNRnXJy/Ybb4gabf03ZbMhOPAHUcg8eDEOgQx7zg5H9nXUfbbbB0KMpnR77p/c5ARNTodZhAboFWKSPYe4uMgjQDSfQVKQwocDGNRwXh6LMnnrugjmkzHiEDMOBCQ9tusbYjBI/Ak4DT1O5rmQpMhSTTOVVRUeTVAwPyAP89uflklAj0EWmTMjtyaMUIIwrA5CVlNUOojGY/0HUh+eZlimAjAYsygiDFeNcrlDbHuzFNAcZJgFAIKZHSH/29og+pNjtemKePQz459hKNQ6ZZBBaP7ZKYJpcFZT1H6ohUOfVkgVQFSmaUVUGhqzElBDKTpaIQ8NHiA/R9y93ymo5NuvZNTetbNsOaYCN9OyBUZLFYMJlU9H1LXVbkJqPOKowqiD6SVSXTzCW7KhVIuSA9680Nt8vvMbuCxfsFr1+9I4yv4+EFf7z4RHyo5XKTUeUVVV4QtRuz2/y4IQxIfRQa2eFhXHlavEXSs09K5E8VbvwkDeZILzl5FSmhQyCzEukFSiY36RgEQY7w8djQPhRsh0KQTztFiRcVKfLZC+2B8Peg0nn2gpWPn7+UD0FLcbyIvBxGc1qHtT390NL3bYpLGgZssMhc0Pueptmy3izpugZGUucwOLTUBCuY1XNs78h+XVAxQaCwdIBjP9zRtxtmdUUMc374ccXudodWBcFr5meX/E//7u9oto771ZJ2F7AuUpiM+uJXOCzL1QdW62v27ZYh9ISxOGq7Pc2mYXu3Jw7i/6fuvZvjzLL0zt91r0kPkKAp225aGim0sd//O2zErmK10oxmusuTIGy6116zf5ybiQQJVrGmemYkdFSDVSSBRL7XnPOcx6BeSIGzmC/o+z2dqlFW0Y0dTplMoARlFcooisIyBJ3dmzsGPzL6HhdKurHFjD3jsIPk0cqiVECpKFyVqPLhJxed9x7f+6NKFiPy9BAMKiIebz5hk2VW1symK+azsxyIrh9tnsMjt9qynC748rMveba6wFmJgZrPF+KJVs8xWqKlDujZcWVZjfvgwPk3p9fz22w3MpyT1CP4XB3LPv2oBPxbfdcP9iC56zugbId9ZR6e12HKlPPGGceWN3dvud3fst/f4WPHMGzZ7u9o2zU+jqTgCQl0EgSqsDXT2RJeBSZTRyznjw6jiPA4LBat9MPlnp4+9FLKQEEe25dlSVVVFKMQ2eMozYjJHll+FBNWZxx1WTOZVCgNox+gyCPuX1EJPzQIKps/VzKOVBIo5L2XcQsi8gletlbpKurl7Oiyf/Bqe2wZ9CGyeOQKhoGmaXj5+jOGuMenlpv7kb7zmCIy9DKi6fcj19yg04TCLXj9+jWvXr06Go/+0tJOJ2P4qZ7w6sVrrm8/4359zeb2GjuVHCWjk4iX3hvtOOcgQNu23G/WNENLWSx/Nlf3NDQ+hCDjZgM+yvuktcZq2Q3T6RwVhUuYvBgwiQGplhHg6fv2RN6sddKB3G/X7PabHIQe0Olg7eGOvmNpSKiomUymzOdLZsXsl3eY1vk1qA+4Ukpluw8FriyYzWaEELhbv2O728haKq0UpFFh7EPWrVKJorDEXhrnpIJ0wiabFitQxjDGQO9FiBYPWvdfkXetUPjgj95+k8mEaVlT1hZtHIqaEAaGsaWqJiRG7rdrdO2YFMUJ7xDKsqJwE/ousB9bbG2ZTjT7bo/blKio2G3EIH4xW/Fi9oLJbEI1KalnovbXItXGFnIX9OOAypyULnRst1u22y3G9tze3v6Kffzw67IsmVQ1k2rKrl8TvGfwI0GBsQYVI33o6NuRXo94HwRdU6ciG5/BhV+4Oj7h/T8YOR9qoYe8W3DOEILDHhKExvgev+7D6syeRKA9Gav58YIt76PwsJkSB2NSsZxIKAnRzSG9Sj2kbj4UZw9tw6FoC3iG2DL4XjZiGGmaHfv9lu1uzXa/oW1bej9IWsDY0XUtoxcOmVHypvgxopJErkzKOXVd8+LVBWWdFww7Ah3vrr9nt79lOptg3QXX1+/Y71pSKIjBUVcr/sOf/wvff/eWq6s7rq/uaJoGa+DVszO2+3uu7n7k3fX3XN79SK8avBqwxmRTVnlgxlnKsqaup9SVLGYbDMomkg5EFEkLQqZUJj5p0NaiYpShcFZ3hTDSdQ1h7OnbLuceVkRtc8iyeO30OZpEnlU4kXRLxRyiyaa7QqxWHqyrmU3OeLZ6wWK2wlFlBVASZ28eHMEnbopevWJWrQghYY2jqiY4W2JwjFFyRuXaewicPqi9HvGrnrCUeBjN/nt86E/7M9nC5INIK8X7bJlfu+c/7fsfoPqkHo1JPhgV20NQTqDrGu7aW/6/f/6/uNm8YbdfI7magdE3DGNDjJ7RDw+efMFgTcVFfMX58xWec9p0hwkyyrTGYnDYzMMJMWTu26cdtjLed8fYm0NzYWxuZoyEWx+awbIsqeqClALj2Es49am26hNc9U9zCEtbMq1rnC2FypE0TdNRRIO1xfHPa62ZTqbMygXby+0jY9gPiMwfoMCSqtK2e7bbLV9/9XuiHbm5v+TN9RuMrdB6pGuFd6aUo289pYnMz5a8vLhgWs9RGZsw2J9dq+8XjqvpihfPX/DdTwvSjYIA0US0kpPbIKH0KSNPUlgE+r5lvb5jv99yVrxCm4y2qxNo9eSyOVxSB3NmYzRpSLmIeygE6nJC8godDeM4MjJSnhTTB/f/R7ShU46iFnXxZrdm1+wYw/BwhsSsBlYOFRR+FJ/G+XzBanb+eK38zPo4FG2na/PweyEEogKlBZncNlvevHnLeruTZA1rKYIFPEonVJIECglRNyQdUdoLapjScaauorgAeO8ZxkA/BmJ1sFM6QVZ/8XTQR3GemOsumawqJrMSpS3vLtdsd3ekoSXMVuySwYy3+LPI714vjoW/Vpbn5xe8fv0lV5sfSeseU2qU1pLosdWopNlutqikeH7+ku2XWz7/6nOsksI15dNHZ7cCjZKkj8oeC6VDhGNR1tIwfErPfRx4pOzt5nCuxFpHbDVEQ4qi4jTKSuJAFIDisamzzneTjCGMNY8mgvwM1eOXnsFpSsPRZkQ/7BOjH/iWIQZCGE/Swh9/X3saTHsgfapf88J8LsZyUXYgdYv/0sN+C0eNz0OBFvH0YUcIvTyw5AnB0/uevm/pfcd2K+aTTdOw3t6z2dyz3a1pmobWtygTGeMIUcK3TS6UhNelqYqa0Xv2KfLu9kd+vHyG+kIeynZ3zxB2vH37F9brK1GMTiYUtoZQoGLJMFjG0fDq/CtGb7h8d8tmt2azW1OU8PrFgqbdc3nzHVe3P/Lm+geCGqjnJdWkwMwWVNWEuIA0Gs7OnuVoEXmt7diRdKKclNLFWemMQghopcS1XCdcYeQheyUyfaXo2z1aBRSDPHQGYhgJQ8hhy4ZxDNhDxIvSKOdQRYHLMLEf5TS0tsDiUMlSFzNenH/Oi2efMa/PUAdXtxRPlHHCJXSUOGuYzRIPpqb6iCVZXT769yMZNF8oIYbH0VA85kb+26Ftv6D+/BipP31EYHPy14w6/avxpIj7G6CMKc87k376NatDcyTFWmLkfn/PzfVb7ppr/vrD/8PN7h37ZoN1UJSKGAdiEh+mYfBiTBw145Ao3JR6WdDGNa2/53od8I0n+Mh8vuTi7CU2p0wMIVBqI931CdftYwXVoWg7XPZj36OMOjrsK/0Q3K2U+EzJGurxfvi4MCqpj/o9WSVCCHH6chSuwmU0RStNikGsDk0WOSQp0g+WEZu0k2LjiaLtaaQtEtJI0+xZr9d8+cevqauapCJVOWW5PEfpgaAGyZrUiugVtig5OztnuTjLxYY+UTJ/yuqWJq6iYrU6z7F0E6Lfom1+e56wJjFao62ibwa22y27Zks4ixhxBHkyseCAtB0arsM+fggstxhlCMELSqsUIUSGbsAPI6oQS5LTNfxYWBNy3KDwSXf9ntvtHftsHmyMkfIgPMyNo48kn6hdxWp5zmw2f88a6ONIyeFnOCRSnNqG+BQIwTMMA7u2oesGbm6v6PqR1WqV1azh5H0wGDwqWRm9qojSQWg/0ROVzRY4YmExBk839IzBH+9RlfK4TH/Ks1dHj7nJZCJ33KqmmjiSgsvLG3b7De12je8ajNcob6jcVMzno4hCjDXMqzO++uxrbtdvGENLG3YkLWKcdthJkzOKKfD9bs3N/S1fr/7AZtiw3q2J08TczvLdf/BI8yjljsI2YwzL5ZJ6MmM2m/2qozBEaQg04oKgo8Uki9MKU1Voa7FFQVJi9IuCojhkFXNcc/Ke6Z/fUOnXFW0H5fEjxWriaFckzUHAh4EUXFZSj0+fWZ86l/3o63cnV5x6OCMf4m8f4qA8ni62tENL13X40NPsrxh9S9/3Eh7sB/GzGQQ5i0S8H2iHnqbZyT9dSzc0guKkKIWNEjWQH1IeXxSU1ZRnz1cEHxnHxK7Z8E9//R/crq+wpmAYW8aw4d27t+x3HWXpKNwERYE1NdZM2W89l2/vef2n33Hx/CWL5V/RJnF7e83tfcVffpjgh4ab+3fs+w39sMMz4GqFUiXL5ZKL81fUdgqD5eX5Z0wmE2Igq3HuSCqyPFuILDsEuk3LMI6UuqQbO5QyaGseTPqsJfkcQ6M80YtPVBrFc6breghgTYHVDuUkct2aAmsNzon82JqSws1RlBRFKRwh7ahczbPVCy7OX1IXU8ASSJnfccoR0jmj8/25d44/Tinbg3zc+T8mnTMj/+3D0PlAjfRbiqcn6r/0eIMrFY/fVb2v+vxNr19/WASphyIx4FHCbOFue8V3P37L28sf2PR3rLu37MYbutBgFPQkYhxEt6Q1YxyxqiQGKcKiUXShYdPecrWuqPwdm+sdbdtzdvaMpEdeLT8DCpL2wg05aLafKnjVg7WCRoq2oiiOSFtZSt6ntRZt5OI8FEghBIahYxg6QaWOb3Tm76lfRtu0VicaKHUs2FQCpRVlNSHpIOW11qT8urpuoHPdESEYh/AwLE8iSVbqMQh12DveD7Tdns12y7ZpmVUrlHEobVkunmErxTDuGIaeZrun9x6jS+aTFYvZGS67N7lsGh0franH7+8BkfFJRnIKxWyy5Gx5xnK+4r7dQoioA6qPIikFhKMr/CGSqe9b2nZPxGNJwgvOySWgHtGVjwr1k4LtoOatqgqVCoZuxA8eFQ2xF+GY917G3ErO8WPywnGbBBEL5IizLu25Xl9zc/eOtm9QBqyxBCVoYQyHok0am/l0yYvnr1lMz/g1jleHtXm0MgkCA9qyYBwD3TCwXt/RdQP9MBzPyGGQ5JqkUm5eRHSTRbMoHVH6sFDET9OnCFHL+k6RbvD0o3C3j56aKBmTfcKH047JZMLA7GiB1XUSAN/3e/p+D35ExxHtNS7VeD/muzuc5PgaFvNnvHz+BVe377i/XuMKjdKJoBLBDyQV0dbQDS1vr96ymK24urpm3AdeXUSmZ5NjlmjSD+bKkXgs2s7OzphM50yOGd6f1nNHH9BFwuJE5GFKhi5gnKYsJJtX2wJlNCSDrSwX0wuqcpL53dKkfOLc81dAAo/Ho4e9oJQmZn65uMhknrkfidG/F6J5WrQRHwsFjnmJHx8RfewcFBG7J6aDAUdgjD1j8gxxoBta9u2ezX5D0+wYfctuc8PQN+zbhr5vs83EwBAGQhxxZUFKEskUo8czQhEprBbejImELKFVSeGHiFGK+XzOy+cv+dMf/g6SYrPZ8ObNJd98/z/5/sdvhABrIt7vaPd7UrQsFwsKM2VaLQirgvOz19zftbTNW/78J89crzh7fsZkXvL2uqUbN/z07i+MY0s3tBjrWSwnDMGitWLsRy6ezXm2esZqdoFLJc+XL1hNV9zfb9jtdlxdX6PqyOrsjLquub+/ZxhH+n7E2oKAhNbrTBzX2lAYQ0wRHyJx9KSgSMFkZYBBR4XRhsKKOXDhaupS1JulqyhLUbIUbsazs88gOSFuTiY4U2AwFK5mNpmLWgoDKTwqqIw6sB3NMVRdirB0NLfUSqFOeAEpPtahHC7Nf1tU7ZfGoPrTN+uvgsnjewII+JtEWKWnx3DpiOmNJEY6GnbtPd+9+Sf+6S//wOX1T3Rqx6AalB0paslLTASij2ilcM6ircEal/31NLaQ2KOm23N5/YYyOu6u79ncb7i6W4rlwh8T5/MXWFMf0fWY0Tb9XjEh3aa48BtOOG1FwTia3KHGjNwIYtD3PTFE4be6htF3pOSPgqUQtOhwLO+JStKT40OFZjxUBukBtTRaY7Whj5IqYq3CaYf3QYRDvYxvD5y29IFT3FPrJhKTjBubdsft3R2r83P6fqTrRFE4m1X0g8WXA5WdcuPvUMlSuZr5ZJZL4E9nRWpOLWYsMzdjMTtjOV1xu/9ehJPpgbxwUP6iIjEmSldhnFhydL4nkC8UnX6WC3bqAn8cfblSmlbv2NHQtn3mmynGYcCH8SgOiilhtD0ZgYnAKikvJqV4Lm8v+enqey7vLtn1OzA6j9WScORSymrPhFUVy9k5L569ZG7nv+o9VDzNaZvMpnTtQIiRzW4rfMsiF6wGhr4nxFGaZe1yMZov7WOjmtAxysguNyPJx1yoicGzz7+n8xl7mI+lTzg2LZbJZEIbSnEfuN/Q9jv27Z7tdkc/tJiU6AfAa5Q1+JQTNbQ7ah9AU6ial88+4+3yB95c/UhABDM6j3KdM1RFTVCBd9eXqKjZ3m0p9ESQx6OYLWLQmMKh0YxJuKp1XfOieMFsvmQxf/YLDyVC0DwY+yk0hkhiWk2ZlHN0FBBiMV9STmqUljPN2ZrK1nw2fcVisUJrK/nC+qHJ+K0Rfacfp+PRh/SPgzdiyCKUdJxg8Wgm9fgcsb9cRcYPjrpTlzSj8sKKgTF77QypJ4QRrzy39zd4FRjDQDN2tO2Wbbtl3zSMQ0uzv6VvWxl39h3eDxIgnGRcavNYRGmNdRplDMYZnHVZuRPwXolHUEjoKEqz52fnfPHZ5/z+69+jtebq6orb21vW6zvatqWcVEwqS7u/B6Aq5/gxorVhsVhRVZqXL77gr998w/p+RzN01IVjsZgxmRYoPRJUx2Y/MvqWQMAWmlU1Z/AjXT/ge09hCgpbMaunVG7O2fIZNTX3bNjvW7bbLfOqYjqdM51O2e9bQkh4L8WoQnI6U4SoknSSthAblCRoWkg1KiNoBkMMctDW9ZTS1RSuYlrNqaoJdVlngcCUwtWcrV5DMtRFzbyYHxeMkF7tkRsnxrzv+SU9MU5UOdFJ6Q9FKuqJkVF6j892+PXpYv/XL9h+I+Klfvmifuh24hM76Td+7/S4eDsUbIkAeAIDQ9ix2V/z9vYHfrj6Czd370huxCw12Ih1FucMMRowsq6qqpIRnXGMQwI9UrgJ2haMMbBrdnQR7vfX3K7X3O/vKSrDbCVd8tyURLzEiX1kFCxTgnQ0OT1EIBVFwYDLB106csmOGZxZWDMMDT502dYjZAQuoT7hNjv4fCWVR3c6oXNBqZP4AHof8OOQOUhWwtUxR4I7OVfwKVd19QHSl+2KknBWhqGn6xtGPP040PQd1kUh7tsSlGE+WbHfjBDkezpTojJPyfuesigfN9PqyXP+6FsVCJTUTIoZdTmT/ZqysO5DYWK+vMBYscUQro2gXEapxyK0k5/1VA3+PtJWFMXRKnYYBkGMPIxBRvIpU2ciEsX38CQDUY050snj8dxs3nG9vuZ+f0c/driJRTuLDYGgZDSvkvCaClUwq+cspmdH5e2vaRUPYd+nNI66rjP3UbwFhQjvsIXDWk3T5rSMbMGktcaFREgiPNAHu6yMtKgoapAYFDFokhZeeIxyEp/gjZ9UsB3QmgPtYBxHNrsNd+trNrtNjlTzlNqKZ2XUoAIhedqhZVpMMAqx/0gR6xxnywueLV8yqeY0cY1xWqwt1Ih2mmoi6uLtdkvoIkPneb40j7K8Y0q5qXfH9QEIcFAuWK7OmVZnv/zzJY/KZYxKBydWTV1OmZTSnKzOl5w9u2Aym5K0eE5WkwmzYs6cCVUphtFiXyZNZAjhyGP9mxBw3psiyR0nZ8GpebkSY1G0OfWUfXyfWCFSi+T2IfBNXnjMxrBaW0HRkpdsvowVbNpbrBoYxj1t39H0Dd3Q5uJsT+sb1ts1IwOD7+lCzzgOjEGUnyoFhraVqKMwMqYRrwJRebHOUYmBLsetjIQ+MJ/PmZ6d4b3n7u4WZxRnyxUGw/31mrH3vHj5ij/97s989dXXnNXPsFj6yUgYI5v7NW3fMlUeomV9f09pHcvpc5azJYvFirPlZxTlnPlsxe3dmnfvJMZq9Ye/w5UOU0BRa3zquLy7x+SxDUbT7ge6rsfZktlsgdM133/7E+vLhj//8T9il477cc1f//pXfvzxR0BR2BKNpWsGFYgfBgAAIABJREFUfA+FmTCi2G96rC2E93AIajaGspTcvPn8HBM1TlucsRRFRVlMKYqKwhZobXm2vMjoXE1RVFSuyhl6Dq0Knk0vHo0J1BEI148CsEtjHi0ifSBpJvs08fkXbB6O5NETRu2/H9r280XTwWX9cLBoTc45lMgvrT/ikqsiMQS0UU8gY4kU00Nx+y/9iNn/S50qRRM+DiQtI8P77oa//vCP/PjmG368/Ib7/TWNX+PDSD2Z4hWUZUFRVsIl84lhPHw9y3L5jKqasr7fc3uz5ur6HlTBxdkZcWjZ7K/ZNhtm0yXX95f8t3/8r2hl+M9fS4SNR2xljCo+eKe9T7hKTGD71B8PtKZp6EOPKUsJ3+46+kGMKQ/igb7vaNSW9eaaYeiORVFRWFSEcQBXnBbmH6t7JSzeZ+f24BPOlpSziqbfYW1B1/aUBTy7eEYIif2uP/KnptMpSikGvEh2lMYHcCpbbiTwIaLtw+vTJhFiz+p8QT80NM2OGD3b7Q5tE67IHX8AhaMqBDkQUZBFJUFCf5Fzk+SKd5krlbJ44Xef/4719pIfb/5fNt0NXnsqV9F1koDhrKbt9jir2ew3lLYixcS33/+Fr17/HZ+frxhCoJbN8AFxvygK6lrI5E2zo55qCSsPYqA8qWcsz1Zs7rest1tKXQoyFVoiIwoIRizDD2efp6fpt2z2a3a7De245y8//TO3mxuJBowdKhQkb/E+MPae/WZP8oqL1Wv+09//F/7+j/+ZWTUnYCgoP3GLCZe3rmuMMQIwhJbl+RwfAhcvX5JS5O3bt9zf32OxpDGx3+/oe/HoKmwBURDHMIpxeUgBY0MWdgnSG0JijAPBa1SwbJo9wzLQd4E2tDhTUTj9oLz+JaENii51nJ2dcbV+w7fffosqU6YWDAQ/MJlMcnKOh6C4ubvmbnVLVZTHY81ZQdo1mkpNOZs/5+X5S/7x9pr2tqF0E6blFFtacTrYj6ig2dxsqcspapVHhHkyY7MJ/DCO4CylKTk/P6cf9qzX97ii4qx6ic782I81ycranK09UpSlFPYoFI7fff13FK7GVY7JbM50NqOoKynGlEJHxdwsj1+wcMK/1kpTlsUvc5rVp62dg6PGAaX1o8claV4iTnKUY8QmyRr2PtK2LY3fU9hFbkRzM3lE2vRjom4iiiv0UQU60KWefdvIhe60EC/3d4zjmn7Ysm/37DsZEzZ9Q9vv6MeebbtmxDOGUQLQYySqIJAwiuCHXCUkrAGTxPD2kP1mgaQVZSHwYVE5OXxUpKwLLDk/zCcKU3F2Pud3X/yRrz77PZ8vv8JI5DjOVEzKGZPJDGWERFwWjtXsjMVsyeevvuTi4iUXzz7DlTNcMaEoygxfRrzv6GgZxgafRnwaGUJHORHI2zoLyuBCIgZFWU6ZlAv8kOj3A9tuz/3Nht1qR/LCKWiahjDC0CeGVi7/FAxWV5Q5H8ZpiZkyxh47tcJVVGVF6SbMyhlOy7hzVs+YThdM6hl1OcHagvlE7E2MKjDGyvhTybsiUo2nRwTvc670zxU7nzIm/N80xunQYR+KtYfiUuCtoAYiQlo/DcQ5bFRt3oNbTg+cvwX8rk/I4CqbuBJAyzhwpONmfcW76zdc31/S9BtU4ZkYB64kGUtMmhgUfkSUxKmQg9BryrLGmhqjS7QaUEpEAgfi9cQlVKlQZWJUPbtug92W3G2uWIc7lua5jNe1+YiA/XE3ekDTTrlQhECIAgkdrGtCAGLKIgThxx5GoAdR8ocX2oevIEYpTnNeBoV1VEVB4ZwckPmyjS5irc2cIIuiYFbOqaJnOpVGSR+zMx7U8qcFvAy15IIRS6KOmAbW+xvudzf42INOYm00RJwpqGZTynLCrFxSlWIOrlGkpLHq42m4j39kQeh1/p/QGwoKW1K5imbQ2UI6+5lphckCEK3TSU7jyOgHurGTkc4BBY8P1cOBn3h4ls45uewPKNUJmq6UeOMZJ4BBINCMDT0NGkfT7sW2KOWR8tjRdFs2zZr9fk8z7rneXtEOO6IJYs+hD6ieJDTUxZRyMuXi/BXPVs9ZTFeUTNAUfKpL4gEFfh8tiSlhihLjXFbaFkdfO8n11ITwoBgMIRBCIngFyUoAXpTxaFLieRqVJkVDUpL0UUQoC6Gt6JPXa34lr+rwnnvvUSadqHrNMbfzMGOJShFUzJ6o8SHUIx9jBs3E1czqJUZZfPTH6YhOmhBjHreLuX5VlKyW58znMsmJJAbfopNhUiwOpyVd14krROa3h2z/8vM/lJgiPzwXMYCfljNIij/94T9gnAgQrHbH9zCSwDxOSPpVU5Vfw/tHfYA8f+z5HEu9KOKWA56iHqlH0wPR5JDFmfKFFPH5/wfudjfcru/koEGq9F23ZuhvaIYtTbOj7Tv6Xqw6Oi9RDPtuLwkFKchDsAbtRE3htKHvO6wW8rEtcrDtMVBZFsMYAsZYiqpEKUXXNUcJcxxGmm1H6CO1mXPx8nO+fP1HXi6/YsLq+IZM3YqzxUtePPuCfbfGVJrSOlSx4PMXn/H1V3/HxYvPODt/wcSu0JT4bIHgioSxMLCn6bOsXEkNbZyoKoc4oKJ0eEo5SltTVwssJcmLAmi93nJ/v6EwWR0SEmMPfRNot4Mok4JjWq6YmKym0yJfroqashQPqcJJkVa6CbVbYE1JXddM6xmzmRRtE1Xz4Ob/oOp8vwRTv4g96ff+XPy08WD6hD/zv0pYevqU13N6MMRjYaZNymT7U5BDHYU56Zjr+LAptf6llIV/wYhUHRRUo8R05UHXXXPLu+u3/HD5He9ufqCPO5IacROHKRw+GsIQiWNkJOUIp9xhB41VggKraFBJC2ckRrqmRauIXliSjehSCVLUbvA+8uO7c5ZnF/z9F0vhnqIBL+7e6mE0eSrqPPCGjsHcY+b/JC9cSaKY68Yo3E2VGMeBrt/TD3sCPktgnkB91SnadlK45V9qpSXntqioqwnWOFIaxHVHm9z4WApbZhqCoy5qziY1q7nwUfV7UUvvq8xSNo71Xjwnm2HPtr1lt254d/MDSY8UhZC4+7ajLicspiuWsyUXq5fM50s05hif9ymWJkJ4jyij8zKxImIwJbNqwaSasm4tKnNsDuPoQ0C6yhd3ihI11fQNTbvL1Bj7gUnyaaNzeJY+mFzEyhsixUsgpYh2Gl0aFIk+9tztbqmqAqKm23cMXX8sGIfQse/27JpNdg9ouLp/RzJgjcFoMU0PISMbpmQyKVnNn/PV51/z6uJzZm5xor7Vv3j5Hkb3hynH0QA8qiPvSRkRnWgn1hYxyajdGQNJ+M2kyNgnQkiCnh6i4YjS8GlR+CtTopRG4dDRwdRxtjhjWk2EE3c6pUifXjscCkfJPxW+uSh5JaaNGIg58inlgm3EYw5q9wOyl9+5WT3lxfkF5VWFjyN4SCGBlXxnFRRGW0qnWa3OeXnxkqVbilWNH2h3DUTD7HyBJ9L2Dev1mu12y+AljF4izT7ph0PH9Oj2Km2FnRXZXuTxMX8wuVbZ5OZfRFFR/CoR2ynHU6nTbOJwFOIlxABYKcU4juybLXHiURToTEVIKWLHFLC5nAu5SDvyBwSQ5mZ7y5t3P3J1e0nT7Bi8VMLDuGdIW4Zxn4u1UTZYli+HFPGM+JQr8ezxpXWBtRpnDLtxRDsFWjgAYtkRM6eLvGHDA5fFe7bbPUnBYjYnBs3YDihvWDw744sXv+P1+VdM7IqEy3CsYV5GPr/4mrbtud1eEZRHJZgVU373xR/44ouvmE5mVHaKbCVPZMDYQD0rqKaaIXasd3e07V4q3sKiXWIYPOPgST4QR03hCuazc148e0XyGrMoxTQvKprtHp8NdOfzOddbS+oNY6cwWCa2ZDJf4YyTEU12iF9M50wms4wQ1lRFiXM10RdYZSV1IBd0BQ5OPNFOL5ND1vGBWmXs0+JhOV4/zcDzyZNDPaGg/AQ1379bwfaR4i2EjArrp0ZscrQl/Al/ROVuTz7L74lqTJ/wBVWKItb4jWhbivGI2IV0CNxWuXcNXN9d8u72Lde3V6z3dyg7Ysps/5tEg3jIZ/U+UZiE1k5QHAVhiAy9R2VbDZUkR9EPLXvViUl16DGFgajx7cC22XB59Zbp5C989fnXzJSguhKBnS9BdTD5fVhAp+HWBy7jKeIWoicdY2ZFlj+OLV3X0HUtgVGYSvkx6H/BOWy1oXByOXadmHsnna0PsnO67DWJ5VsuzpjU0/f8BOOJ4u6w7uNxfDtmS6O23fLu6ntu97fc3N1QliXzec3NTUPT7CV1UFnmqzkvXrxiNl0dxRL6CZ6xfnJNJ3HTtzZnagrCW1Axmy2YTufYjWEcPIQgXMAjLy2nJUSVeXgyttns1nR0zHC8n+txVAKfFG1dVJJSkNRxLKfpGYKXF+2Ej9yOe67uL/G+FyJ+O9B3AhIIhaYX54FxL04DsWc77Cgqh7EVKAmNJyUqW1GUNbUVQ+EvXn/N88UFhgKwhBgJwVP/Am8pHqBYHhSkZVnSY4+Ic9u2GKMJ2b5BuKQGYyy4PN7LyQYhRFI0OC2IUKVFbGPzOW8LyQm1pkLhKG3F89ULlvMVZaYXZOeYhwCUXyoYlD6O5sZxJCaPMjHbmJRYYwhpgJwyFJFRqWdE3M/krFLpQaU8rWcSfTVf4ZuROAYIWccTwChLaUsuXp7x6uIVq/nqyDdTUYlHWj/QDz1DEJ7d/f09+/0eZTIqGDzBhJMsmScIsYeLTKW8CR4IPgZzFAfJ5O6hOdTvWVD9a38c/dhOxDmiWNWP9o4gcqI63mw2DOcDlS5Ryh7RNjuGdHQkD5nfIRdNpKHhx7ff8u7+LW8uf+Dm/pqm3RztOHwaiWoghF4uN6OzwkZjrFwGWJ1z4WTkKqHTFmedOI3nH+JoJnFA2bx0JcaIm7bWFpX0kaSvlCIFhe9BU7CcP+N3n/8H/vjl3/Nq9TUVE1IwJB8xpWNmHF+8+AMJzWp7zq7f4YeR37/+I5+9/JLzxTkBufSk7PR0aUOIDdqOxNRxvx64vHzD/eZeOHZJEgFiUowhEEaFSZbCTVitnvPi4nPaTYeaaKKPECL7/Z7oA1VV8fLFa+53a6pJydQtmFbTjKjV1IXEPi2mSwkirudU5YTCSTHnsCgcPm+jY7TKg/HBwyY57SUO3sf64zDvYXGoJ4usJ9TE6iRG5P3PfPzz/y4fH3LtJMdupKNVEu0TfBS7gkBGZbLhrHZC6re1GLbm55Uyb/S3Hhmj7ykKCyhiGnOySCAyso1bvv3hWy6v3rBt10QCzmmMi0QTSHFEU8hYRjsZayCWCUbL9dO3jYRiF46xb0hxxOjs++bhZt2RUsC6CqcLUlIMO896t+bt5U/c3l5jn5X5gj/I2IsPxBgHwctBiGCtffDcShqdDpHZGaVQVpIGe88wtvRDK55HKj7dgXz0QuODMGijJY9yaDtsZY4h6jqTya21jMnjh/HYVI6jhJ3bj4K28XihS+HS0w8NP11+x11zwzgOLFefMT+bsNvfZ+WmxxWGs9UzXpy/YFZOM9KZt3F6goz+AZ9NnYxdhL+scxEyny6ZT2fiF+nFmiJmKV7MjbbSMlJW2uAJtH3DdruhGxomxfQDOfhBFXdA6uT55XFcPNildBBLGYGZRFCepLWMO+/fsW/WEESk0Oz2Ik5I4k0wpJGQhjyJiVBEVKFIFkbviSFIwVCWLOsFs+qMl89fcXH+koIassm3dCT8GtcP4XNVFbPZjB7J0Nzt94xJqC37rsXHIC1TSqQUMSan0kQjimwtZ7UzJYWxLKqZGPBWU+pqSjWZUpUznCvQqqAupiymC1b1+ZF+YU6Q+1PLmo8hhRZ7VGQLj9RjtcIYMXsXbm6Qr5MO47lspWXSsfBR+sG2pioc58sVr5+/or/q2fRb4pCbSJ8ojGNWT/nT13/kbHFGXdSZjGNwuqQwnkB3FPF4749jUVsY+r5ns9lQLGe491XKH3QomYuQ0geejCr7zp4qu9PJnOPX30PxVzaC8nxORVRa65NUhAeO7qkAbxgG7u9v6bqGcjJ7tL8sWh2DrQ9z7UhiF7f89O57/vLNP3K1vuQm82GGICNQH0eSBh86koooZXDKicpI2lBUSjijT1SBD7PdGEQVU7oq58OJz0pQIY8/EsREWRUPXi4xQoSyEHNarQra3ZZ5seTi7DVfvv49L559QcEMhaisko9gRXV6tngJRjOZz9h394xD4s9/+D+YmFnOA2zY7ze0oSExMDLQDzt2/Yar65/oY8flu59ouz1jCPTjwLCXjtz3geQ1Tgm0r4JBRSuh2q4ies9msyGMHkpYrhZMZhMCQlCsqppZPaOuptTlRMQExrFcnFHYksJUOQYq5ePDHCH+9xGxwzZWPBa1PxkPmz4BhfqZiy+dFG6/6vP/YhPSj130gvhETlM8+l5yZru44137HW1sGIdBvLoCaCxGO6wqWC2fURU1s8mCWb3AcnDW1yijfiPwKOqjmMffgYDLn3fDhjdXP/Ltt99wvX7HOA6YylLWBmU9QQ0SLB4UZVlBkej6nuA90UtmsFKJcejpO0X0mnHsII3ZxDoRVaTvWpHQlxIRUwRNHCWxY71d8+bdW+pixnS+QB1Dkvyxyz0eWBmBK5Ci7XDZSwSReQh9iI+LNq9k3OL9kBGOkyb8kT2L/rCgO1mAKatHlVKU1uWi8cDLsqSoHnXLIQS6puNOr+mrwMTOGRYDVfEhGJCI+cLTR15dTB4fOq5vbmjjTqxNbMAVClsabKEwVlOWJYvFgsVC1k7kGJTy6BoxP7NGzINpHylGUjYHnlRTlrM5pXVsU0uMKdd1DyNGMt9K5zez73u2zZa2b6X2fk81eyjatHqcbhFjRCc5w/u+R6WewQ+ys1QCHelCx7qBphXvtxAC+/0ur/H8j0ooG0laHrAr8p1jIsmL64BRNvMPa2bTBbPJnMIWxyYWNM4Wn4ZSaX1CfVBMp1NWqxVNuKYPHcl7xt02I0NZDKPBp4AK4IyspdJNsKbE6VL8MU1NaQrmxYzCFLiypqwm1PWEwk1kBK8LEY9RYrM07BA/qjhQIMwnFZt1LRFtxhiSz/57xlC4ipQSQ2oJpGNqUUyJIXiikcpAaYN9NArXTMqaLz77gnW/Yb9uiWPER49OmrIqWc6WvLp4xSSPdscwoqKkFFVFhYpCxlcWyr6U+DgriFLTNFzFK1bTF5giPrGpTtN0TjZ7PL1fNDnFUcrd7I2XSNmL8KOe2397pE2bo8HuI7NpwxNImyRFbDYSyxZr/2CIqyJWGZvv7gdmTiDy5voN//DP/52fLr/nfveOXXsPLoBJJDeKi7g1xEGclY1xWOfQxpKUxufIpKKoUFrlgyOnaWX5t4+BoiglvgP1gKBlN3LnBGIunHiodF2LHyN1OTnyCqwuWS6e8/mrr/ns5VfM7FI4C4PO+W0PMUOFrlhOzzGFoQ9LQFObFRHFvt9yt7nl8t13XG/eYGykmhckRtaba777Hvo4st9vKcuSwXvGMUjYOgptC5yrKNQEo0uCh64befXsJYUt6ZuW1vZoJWG688WMGCNnZ8/zmMyKIXBZU1rpsoiKuqhxuKyikYUnqKWBjFC+R61+hKz5MMr6ztmCD9ySA+Tlfp2QQP2W3iM+UvLpfwmX4N/xYxgH9vsdm82G7XbNzq+5bL+hjTv6tqPvR6IHrQqcLrCq5PmzDZNyxnJ+xmreMZ8vqaqaUpV/k5LVWpMDv+ORGwGRu/Ud33z/V9bbe3o/oq2ojo1DzBTywecKw6yeYJVmrWC/GfBjh4qGpJNkRKaRFBQxDBg9Yp2lMAavErYwYB68q6y1uFKhvOTlXl6+4fnZBS/nr/O4+PDMJa7FKPN4rJZHUIcRwgHtMUb69ON4FI1KMWdDhuysnh6f2k+ixPHDJWnEJiQp4RfVdc1kMqHsSrEUOCWgB4hjoN03bO/3jPvEfNoxK5Z05x2LJ4o21GPxypHPkgLNsCW6Ea0TnW/p+wZUxDmLzaO4yWRCpesH4cSBL/mpTjXqoXVLUUncnAanHIvFIpsZ58vkPRuPg3L6IBLt40jXSfbzQWzzlILxEN0jWcryl0/HQiGbio7RCycspxh0vmHIFhhGKZQRdDammF0FMoHcKsmGNDr/aDLaOz6roIg+kEJg6D27XcNgwFJRl1MKzYm/188jJacfdV2zWq24a2q6bYspnCQW9ANKBxmta0ghZkRLRsSLxYLV7IxptaKqago3oTIVVaywZIsQJ3xJpQ45ze5EKnbSmOeEhU8J2T1YftR1fVTzqqBOhCJlpoAYSJ6UslI+eWL0x02keUj0kIiQgNOGzy++4KebN1yaS/p+wESD1obKyZSosAW1nVBQSNxk02O1OB1MJ5LSgxHz39lsJtzUjPI2TXNcf6d0m0Nj8AHsdohkSupDy59TOivqOFUoSv0r7q7fohd7EOM8Rtay5056HOk5jiP7vdAAjuIejWSDm2Me3khMPahIy47b9U98f/nPrPfXbJpbxtBRlpayyIUZCuMsg1WiNlKCLmhtEcGXFDXOBVl4WouSLh7cfyNEjy0lFyzGQDwgcTp7EmlNSvK1fQiMTUdKkaKY4Yyi6wZen33GVy//wB++/DOfL794UNgcYCbzePThqJg5mLppFpOP3O3uuL6/4vbuku9/+ifeXP1AUSqev1hiLPRtw/X1NYEEybCcLUlRCslpVefufEbpakwqqUzFzM0pKVnW52iliB040zIpC56fvWBZL4VouRC0LQ/V8mY98KFkRJy0yeRUkzmB9ni2PuWGro4Ghpm7pOMx2usUhlUH37B/xXZDP/lv+hc2g/4Ix+5fQcuQPiT0P8RN5X1BYPQ9Tbdlvbvj5v6Ku7tbNt0Nm3RDE7b0rVi9BJ+wqsCZEqMdbdhKPFFzxna45zw8Y7U6Z1pPqaiB4iRV4j0O4c/Iyw/viTEHvynJ3IVAYmDTXHN584Nw2AgkpTClJuAZfWQIsi8XpVgzWGtp+obESBgHiAalwRUaZ/LFjSceFFDGoFOirgt8FCRLFGkJY6UFDEnsQNpuQ6DPKMfJAPEw50OfaOIMRhdoXcgeOPj3KcnLVUaTohDII+LGnoT1lGVUkjyhDukdv7BAQv6uB8WbUQW2mFKVC6pyxqa7RccgKtWg6END6hO7dsvd5o6uEAXovjuX38MD9ii0iO8RjyT1TArEpATBPXTfwyDqOcnn1McRY1EUmAMfMnqUKo7CuSe13+qJGfChT0tKUEWMjM3KOc5O0WqH1ha0JsYHC56YzYZTNrmNMTKGgSGKgjSqIw766NtLlJARKyJt8CiMXBX4KHFqGolj0iicyu1njNkKR7h39UzGkGMcCYf0FKPRRlJihB/3QGPQWjKbBwZa37Dt1kyaa7FK0jWVm6NNxBYLuSs+yAz+2FxCkODSVczKGbWZs45bpkUtpPmYMDorbhXyeoMgys5UzMslz5cvOVtcMKmX1GpGRXUcX4rA5HDu65NTXeUWR6ZPMb9fj0aAH4w9DnPMAxIXKRC6jdMGm+Gng3r06DF4aPpUfFRUqOOJKMrRGEGnhNKOGc+ZuWfYWNDHjqga0A7jeqqJ8F0VloQmJEPbb4U3WiqKuiIgNj/Gyeh5Opnnos0wDtmEOMYjoJgURBWl2FMpb2D1+Nmp92D2XAfI+cF71rWRD/0y9RMrQH/SXfVh9LDOlr8lNhfjBkdiOP5ACk088l416EQMnm7sJE5QhTz/lO9lHWKWCCOFGniz+57//tf/yj9//w/s/Du2/RXF3OISEnfRambTKUbXjL5F24Zu7KmrJcY6dtuGFMW1fxhH+n2Pt4n5oialxK7fU5UTyrLi7mYjpEWr0KqQM1xZUQFFw5gUBYZ210IaWU4qVBoJw4ZxHLB+wsXygv/05f/JH179Wd7+MGCMJTnJAyxcdbKe5U23VJlE3hPYc+e/47/95f/m+x++Ybu/l5+rSdzv36Cd2B6MfcS6kvlkIbD78+eEIXI+O8ORhQC2oC5qZtMVy/mKup7x+eozxuiZmgXPZheyQIMjhILSzHEU7z149Vi5ad77r+r9w/HDRaQeMyB/vktI+hMUMr+mMHviS/xcN6tivjr18Wh8/6vGX9gy6rcUbBEYE8F7zNSJgSienk4OKAZ+vP+Wn959jw8dbbfh7dsfWN/dMNKz82tUodDaMCRPNw5En3CuoCon9N0aPViu2oJqM2Fxt+L168/54osveOm+pGRBwTR3fx6nXRYJnEwRT3lXJ8W6QcOYb0IzolIk6YF9vOFm/R0/Xf8PbptbPAPVfIKbzwnJ0N11+NEyqWZsu8jLl3Nm84rtfsMQBlIccE7WTd+PxOggqyvryYJ6OmMcPOvNWnhXzqELQb58GIgKTGGwquT6/jvW+69o2WAlTE2K1Gx5cHSNSTpz/sCZOZqacYjCfzIdSYujfooGoytKO6UoHENrGHxgP3Rsuj1VJcIRZXKU1bEYjzxlOGJcJEWPKy0RSwcoNaUsV4T0Fh8VOgxM5iKeevPuW4Y+4AdIDtp4DV3Lulsxpi0wAAUhBvlJM0SRZMhEJNKHAa88qjCY4FBE6qJGRcPt1Q1tOxJ9oo8d6/Wan/QPuJcVL2dfHgUPwefXf8JrU+/z2g4FsXuA/8r6FAo01JPnzOevCfGa+03DYjXFOCPrICs9J+WEGDTdMBLRdH0j3ngXDaUtpIAOgag0pbVifhsTL5Yv+AZLv+vo45bV+YyysDBIrFphHKWWv6+9PCMZhXqiDwwHLlxuWI2x0hwERYgGryLWFRgl3C5tFN4lQhjY+w0hdbip4a/v1vxw9S3TcsGiXvJ8/5zPX3/FqjjHUMraS+kkQuOBoK4UEEdszrRUfaK5HSn9gt+/mjMaT982NCEQg5egqTwNUckQeyjmEy6Wn/PViz8w1UtCMBSqpNT1k2dnfHQDnBRn+mfEU+9PQzKXy1DgSeKLGqFtGsah4/xsRVla0tHXAAAgAElEQVRXoDzWiSCta1vC6NHRSpEQxg9en4A+BVjDIUn1YvIHvn51w4/v/oHN/gc672mTZusXvNtWmGLOwr1EV5bdeMn2/pJmLHj1+SsKNeduf8+22TGdTpnPl+x2O8ZB9sSsnoiJM17i8LJKNyQvz0MfFMwHh+JATA/emCGNJ1YpMupWKMYYGcaWfbemLB1VNZHCOWpIGmvKk2b6fSP5+Av3WX7/AZWRRwhYNaHUM1xyxDRK2koIjEH+jnirKjwjIUa0GbndXLJczqkrTZR8N6xiQOHxNNw2l3z35n/y/Y//yJurb2jGNa42mCKQQsSEJEG1kP1zwBpwXjYpPhDHCEmQIaskZgpGvM9S4yhhvwfPI5MGrNLiyWYdKEtSikAihkCfg+SdTjirhfDddDidmJdTfv/ZH3g2e0GtJdMsmJiLUI1y6SR0Vb8HeIvJ354N13c/cbt+y669YRi7B4uBFFjVK6wqUFjqas5icU5dzSBZko98tvqM2ko0VFEUot4sCqpKeAkOMbm1k/JI/9BayM7CUzC/yf5B/day6jdDVfFnupOfUZimT6nonsbj/uYCVC38oewzTmDIVjcjt8MlP958xw9Xf2UYd7Tdhtv7K9pmDSYRnXR9SjmU9WjnJZLJRXQ5sh9u0VrTeovuLdvxltHsoOqJ557Py/+YLTbErsB7T2Hde2RyHo0H4gkv8EEkIRL7kYZtc8e6vWGgQ9kRaxXKJYnCieBsJU1qNGhTMMbEOAZSkpimmB7IsZUrJes2KcakCQHGITJ4IBXozFVSURFzR4jyJAwBxTgO3G+v2Wxvmc6XuMzF/MBg7Bh4b9GqRGuTo2VGUDnaSKWTWDQto0etSEoc5mPGrAUhNT+zSPSjliCplAsqUdNqVaF0RcIcidJjEHGHmJ8qYpIzSylPVAafGnwajiKuY+t04NFodYyIFR+9JE7yMcd75RgdPyZBj1KBNe4YRj+OIyM9llK+vtHHkHf1G/a1NTWFm2FNRYr9hwIjZXJ2rJUpipJ318cRz5CTEWJ2EX78Dlut0Un4aTpkgQIJrZLQNZAECp20FGsqopKMuc0h78xkIYg2KJxYlijxfoNE12/QURHtAzUg6URUml5FbjdXRB+xqWRv1+ybe4ZxR1Eq6leGmjOUzgrPdFKwpcdt8JGP6UEnKwWXBm17qqKkLiTBwloraGgShEWrQrIwcZRqQsmMiPr/uXuvJrmuM13zWWbbtOVhaCS1pOk+PR3nYiZi/v8/mIuJORp165AUCQIolz63W+ZcrLV3ZhYKJCiie1pdDEQRBFhVmXuZ73u/15D4AvURRZb6JYe+/8jnWOXJ+PSEkIMh+Ingjz6eMMY2RV9J7xxd1z4/mBBycBdQwPnoFS/OX7Pb/8C+6mjcls32ntv7N7huzKh8ySSRwY/BdGybDWrvSdeO+ew1692K/X6PUoLZuCSZnIcRvk5pqpok8cELDxuFMg4v1Okb0avfRK8MjaInEcSFxgc0NESJSequYblZsq8WjMYlQntyPUZJGTHVPnxPftLdpI7ERodnJI/AS4UmC+EEXsYEOIdSGZ23COcDRUHJILwEEqVwosP5MO1RGLzQaE/Hrttyv7rlx7vv+Ob7v/DmzfesqyVoyzgrCfm4Fq0d0qoYwutwTqJ9incdziZ4ozBtQBmydISSCUIamnYTsgudx5sE5UeU6Tl6mrPb3IPvwjaXEpVoTFSuWHzwbOtadJohdYJpW7oGRtMJL26+4o9//EfOJudDNS1Q7JsaohJNio/B3eHEe3xcsHhYsd82eKMpsglKHVb++ew6fK2kZDKZM5teUBQjpEgQRnI9vWCUFjEyKhtMaw+DyhBgq584h/d/9vf90Sc1+E+Y+T8DI4sj7Hoo+uQH59FP2Rv86uItClXQCm9rOu9wsfDf2i3f/vUbfnjzV3549wNNG+xt9tUKZ1pUKklUFiwRhEAIhVLhnulJp7tdFbk8JkTIrNc0TQgatzvJ7KtXyDQlI4+5dCGWTUv9aXylHkgVYTjYYrh9uOfxcRmtclJUppAk1PsWKVLKbIpPFbYJF9F+v8d1LU1tUDInUTlFppASUp3g8NRdi206usbgfBPHkD4KjhjU4c5FB/DIQ6qalru799zd3XI5eUUWzWXpIoH8aLTV74deoSllyDOUMoadH0UkDTw4DrZA1tq+XDugJJ+wxcQJei2GZ3f8tYUJNkTOgTUK4QPBHs9BPWqehDxHCptzh9FTH4xtjDmYm+pw9llraZqOtm0ps5yiKOi68Pu2bePkwAYKxWfqWvqs1zzPsXV3ekFHBKAfkymlcLpX+7UYaw6TgCdcuP61HXMTvYvsLKEDH41gE2N95Kx5GwQP0SdOiOCuP6gxRcxl9CaMbKNQRUqBkCLyoR1djFS01lLvGoQTKJ+yF3s2Yst+v48uBxlfX44OjcRHjM/EMSfQe5IkCekIpWDZ1sNrJVoDef+EhhIpBTo2HIlKkP4/VoIlhTyJ4eoVm5b2RPQjVFAnd11HVVX4sw+jvp6uvel0yo294WF7zv2qoK0Dv3fxsET7NZdne+y0o2latvsN6/Ua5wxKCZzPuH+8p65b0jzjMs1IyGL0neDH929DspAuDvxX/EAXGARHA83CRq/ZIGzpTMO+qqiqCpRkPpmT5BnLzZK3795Q1WvmzRytEpJpgY7ccf+zKr1PBFXEobk+FiL0jXHguLmBa96Hy2spSXU6PKfjtagtHYv1Hf/zuz/z13ff8Pbhe9q2DqhRLkmkiv2rD7mWSIwJmWkO8C2YViG9CN2YUJTFnKuLFyjt2e4eWCw9XVdjPUibkOoZZ5Nr/Njy192WpnFY78gKTyIJppnO4LForXAmdNLB/Fij9Ij52Zd8/Zt/4urmJYkvhhdVNzV3d3eAZDabMZ+c/2QhYSuHNAmjdEJ+ljOZjMjydFA83dzcIIUiy0ZBiTSekaWjAH9aT6lKsiQllfmTMuLgySWjM8wptyXw+4SUf+eF29OCTT4ZaPZjXfvM/yoCx+kjIeziSRPVf5ai5+N9hp/edQiRxbGoAxW6q12z4ce77/nr99/x9v4tq9UCYyt85GAEtd8To8S4Efsu1hhzOAxF8Bhsm5bVakWavsc1CTP9iqux4eLsklyVQdxjLc6pwM95psuWRz2dEsGfrTfB3DV73r5/x8PjYzDxVApNQtd5mqqlyHPmswsSnVPXNZvNis1yxcZ5TNeRqhHjomQ6mYQMRRnMXtfbDaZdsmtDKohOYyMSe+6+aDvhi3mDMS33jw/c3t/xD1+0+DQcqNbZ0NVGTU1wZXcHMUNUktXWgnMBcBFi2C+DjYQIpOI+tP24aPt0tPq0aDtWPfbE4cD7CapKUAc+kDWD91jbtsNrOC5ijnnULW1w89/vads2FhsM6yaQwgVZljEen0r9e4uAz9nspSJwGossp+720cn+UAz39gRIgUokrvUYFxATY1v60UsQABxhU+KgthUiIJZBVKJiAa4GhwbnPc57rA/GrlKKgAop0N7jRVTJ+17EZgcENM/DSEkogZcOZcH4sB461wUxp1dIIekQdG2HXVmyLCMRGWeja2ZFElmI8fw6DlE9+deA/ozHY2QCMnf88PgtdV2HBklzujYjz3Mg0/9HfIgPu1kRdbNKqVgsB16aMQZrwtSr9yAM5vZhPe/3+4DEHa2340ZIEDJJlRbMJjMm4zPybExjalS0/+n3UEvHZrdkuXxkvV0htKRsavxywWq1om1b5vN5LMbCHmpsG2LBdMq4DP4sH6z9Z/yRHbCtdyzXD9TNnsfVgu12S1GWCOUZywnr3QO3929p6gohBJPxlNFoRhotTpwLU0Gl1a8u2jgq2pIk+aDhDA1N5O/F9AQlA5/VRkHn0NAKiXa03K9u+cu3f+L7d9/R+AqRCco0RaYS74IKx0VTQO8EnYtUSSnprKDtYp6YUmiVBjXnq98wGmd8//2/Uu1qusaAEygSynTG+ewVeZ7y/sc31FWw1pBakSQmEO9Ei1RRguxamsahXAJWMRm94MX173j96vcklIPrv8OxXC55//79EOj8YdF2yhdIVMGsuMBeeLIs4exsRlEUw2U8n8+DKCLJyNJRGHeSRuq3I/EijIGHIq2X7soTlzT/ZKgnY7TP3/+HOy3aenHDyeefgol+BqQTR/zYJ58/y4eKVhDCIZIArbc03C9u+cs3f+bN27+yrVcYEy6oJElJRDCAFiqOvfDxUgrpGMFnMCAjQ5etD8HIxrasVktco8i6P7E7rxDCc3PxCi0kUkuEs3DsOP8xyxUBXvUe54771YL3d/estluEiv5tRmA7h/QJ42zK5fSacTmnaiq+b2q22w1t3ZInJfPpJZfnl1yeXzEej/HGstmvSZNbnFW03T1Vt0UIQ1oUIMNoKxiL+kMBQhQDCMF+v+Vh+cB2v2GW3iAkyJgE7qxDqbh3vIvRUXqIBMIeCOZKSXB9SHsI0e4LKmMCkul+hcqrtx3pC8b+EusVid7HSDMfUBOlFG30qOw9po6LNj+otQ+ZnL3/1Hq9pqoqdHlAMg6xQoosCyknWHnipi6PEYbPUbShKbPgDal2Am8dXnFysRxfOk6F1I22rWm69tRy78kAWqvA81VKRWQsqPqC8bDE2biHotFyQG8lTojBhlmnIR80JGEQjXbD83bOD2M9oWUo/qVHCo2Ihshh/iqQSpOgaX3Hvt1xt3iPs4Kr89fIi4RpfhaDgXol5aHg9n0sGYK8KJhOp4jK0lCz2+1omiYk9MhDKLzWgX7uzGFtGm/IemcK5wNX69c+ROF+kpc8XPbooYiGgA5bJ2iahjRNMV033OlCuGFN93Ksj377uA5znTMbT5mUZ+ybfVC+qoTZbEZZBg75vtpRVbvg6q8DR7RqKpqupu3akARCTU7Jpttxd/fAer1mOp0fXTfBXux5ukjYSx2G1WbJm3dv2FcbVpsl+/2Ws4tzLs2MUmR42WF8HU0YDh5qIpa4XorPnoV93Ax6d9rge2ux8azpC+y+mD54QIbNpvesWKzf8/7+HY/re9JckuXhgjFtCBoO6QQuzsSj8YkXaJ3TWhOLprAxldKUxZjLy0suLmeslnfcJu9C5loHMlFkyZj55JL5fMr52UuqqmK322Fag80UVnTgDUopuqYO3UrbUZuOWXHBi+vf8vL6j0zKF1gESezS15s1t7e3LJdLJpPZJ3G9JvmUbn7DKJtSljmz2WxA2oQQlMloiD05sMIlfdKAEKdTLN+HiovkAxWJH/zTBP91Po65IO5U3ODlR0hoEYETP1+w/SzI9yvfSpFIEHYI9u1oud2857sfvuHNj39lsX4MHDdp0VqgtQpojwtlEv0F86ST7rvrIOEXw4WcpmkwkmwrXLvku/03dHtDXgRkJcvOoyeZ+GnZbI9mAVYG36aN3XB7/57H5QJjDFme4W2N6Txa5pyNZ3zx4je8uvyKPB2Fi7deB8d8ozibXvHV63/g+uIFF7MbppMJTdOwq9aMRxfk2RgpNe8Xb0KR5jw61UHhbEW8dAUyjlu8dwgdrHw22y0Pq0eu54aMDJnIqEY0KCKybR1SnUZZ9QdqMOyWwTDbSbw9FG19pqIxBtdLKn9RofZh0dYfrsfjrXhnxMzeg3zf2IMx6DEScFy0SSnDs7KWqqoO6IwPF7hzB+NxF73orLV4w6Du64s2QSgIvfOh+P2bQZngyp9oTapS8BJrHcoLlBDBD18c1rbWmk57rHc0poveeP4jX1sNxXdQOMtDoek1zgZkTSLxIvAS5RD95TFBMBxyTr1HOBFRhzhe7hzOBeSr31tJrknzZIhJ7EfOENW6yiO1D5GCe4fpHD+8/548GTPOpwNnQx2dL6dGLZI8SclHOesaNutNMAiOiT1h5Br8DYN7oqLrDubLXdedFLmfq/AOCPfzkVzHVjpapQPqb03kJho7eKAGUbhC60PeckDE/U8UIuHbahLO5lecza95XD7QtBanRTD1zXQsCB1JoZnoMeNJQVbkYXSdKlznqKodi9Uj47Lj/m7Bux/v2O/DPulpTv0+4UCtH152CMkD4w2b/Ya7hzv21Zp9vcF5i2GCVw6RetJSUU5yCl1yNj+jLEuSo9AsGVNsPh8AKo7WhzhMZZwfCjfnAh9zWM9JchhjD6oq0G8Xb3jc3tFSoRJBkoUD0wszoAbOWJwP+W5CJ+AdUiYkaYL0eXgjI5nRO4dUkGeKsSopiwwlBbaLUKx0aKkY5SPOphe8vPoyjGg2mxgV47EiyPel8PiYOypkgpIFZ7NX/O43/43XL/9IpucINIpwKGw2Ox4eFjRNx9VlyXQy/2BceZq76ZiUZ2ihcVM3cDv6w1odca0+LNqe51tJ+XFP9P9axVosyrw8Mow6qsCke47C+gTxlIcIRf8ReN//zJf5NcQ2EUPIvcMLg8XwsL7lL9/+me9++IbF9hGURaoonZeWXiqPEDHeh6F4EEKilQyE6uh8n+d5PGwCEpUkgStmrcWalsX6AUXC/G7O5eU546wkIRtgcrx+duTRvxXmKEJrsVnx/uGeXbUD0cPrHThPWYz5zZe/4zdf/pFpeYYzglbt+e0Xv0M52Octr1/8lj98/U/MJ9cUSbCwMblhPq64mN8wm80DutTWLLd3eGtJdUIbX59ERKSBQCyPhrTeeapmz+PygfX1iouiQEXrB3fUyHh/MP3s+R/hs0NrhdISh8J6EUdqDnk0VrQ2GnOrX8ZpG74/7gNOWxhzHXOTIix0lCV7zGlzg5Hax/lzfUEfDnAbRzFu6Pa9dwMip0VO0zTD+OqDC/lXnikeETlmKkIWDn+85mSPCoBUIiRuOENnO1rbcawo6Y1Z+/ezn1AMhqIRbQu/wHSOVIfvIXpyu/dBWGJCc9fV9mTk6IwPNmXBlRctsoEvZ01v4B7SB5AWlShMa2h9oDXIJFjfOGNpbMWb2zdczl9wdX1NQTBZVz16FRnmPWdTyHAnaK3Z7/e8f/82xkIFtLi/N0JxGeKXgnUNw5irL9oCf+k/7kMMe1MP69oeBa2LGAuXpinSO9I0HYoGJ55phGKElETS4QDNxfiGm8vXfP/mB7b7JTYVNG3gFupEMBrnXF2d4V1BUYLUitlozL6u2Nd71rs1tw+3VFXFYrlhsXoEG/l2TzZVv7XdSSpI9CwVCuMs+zoUgYaOLEtAWhwNlgaVOEbjnMvpJeNyPpzTPZftcz4b/wxX9rgZPPaBlFIGq5xo9TMUbfaoaHv3+CPbZo1MBaNJTlpm6DSQwzUO67oIa4eCRMrQ6SoVuihHhzFhjBOKuxbr6qiiatFJvFpsHaKcdIpykChNLnIu5jdMy3fcybvw/1k/XOZSa4QLth2CnExNuTx7xRcvf891+QWCEJE18NnqAFcDjEYjZj+LtklG6YhMZ/HCUU9iMgXWGkSM0HI9FisEOrrZWxOUXPKo+HBH5EhrHAiBil5JfUSat8EjRuu/c06bP0LU+lUlOfIKOkbX+s89oVQO3VL/d09Ngt2RwrR/g/XHi7e/cSRmRVD8dbQ8bh75/u233D++xfiapAidqYeQGxidvfqNZp09CCbkk1GWlJRlOZDIgaEQCSRgQeWC7Hy5fWCzX1Lbc4QSDP+IgEw8RRYD5dZhfIcUEo9j1+zYbNc0XRd/jiTaaBjGxZgXV6/58sVXCJcEB3NpeXX1inq3Z58avnj5G764+R05EyBFIkgleDlinEwoypz9dsW79z+w3a0wbYsWCoOJh46IqFLkgEkfXosVdKZhvVuzq7ecF8HHrbXmWUL28WF2PLrox6P2CM2UitNO9Vdwh3rU7dgE01qLcA4ZI4NABEHVEaduUOJFw9jje+2DE0fKk07aRx5gj6b1RV1d13izIU88TdOE4uBnCsK/7TL3MeNURJ6YH5CyQ2/mgo2LDEa21gY1nvXuI9tQDutX62Dh1I9ED4R+cRKmEJCd6MtnI7/HQ5aOB49J7330+YwjJa8okjKgb64DHQjqQgQTZ+cso1HB3oUpjsOikwTtNV4FjvZy+8i2XdFiSCNyPrxuy5Bk0SNRfQG5q3fcPz7QWoP1FqTA2kPig2ktwkvGeXHCXTq83s9xhj2hpogP0bZjY9qhOPAHfmC40yXOH5ol4fyQAfzcfjpuhqz1VPWefOTQ5MynN2TpDFyNFBm7XUXTNZBbymnOWTfDmiBQNLZhNB2RrjJQUDUVq80S5xy7uqGNI1snPj5U6X3mPYfIqN4X1jnHZr9BJ4IkCzSO1nZ0JmQKSx0SLrI4gu/owBi8NyQyI1HZ551JHZ0r/fs6iEPkQSjSpydorfHGf3Cu6ffL9+ztHqE9tnM0XY1D4ZyhMUHya1xEu3x/oAaDu8Y0yKRDZZ52X2NMR5FNaOoV3377JzYXM/6/P/3f4Cum44zVYk3XVlS7FfV+TcbXfPHyS3abDfv1hrd337G+X2JoSDOBGGVMR1eU2YR5ccPN5df89tU/czV7gSSlNR1CQiqDAmk6mfPb3/xD5KKdPUHF5LO8C4EjkcnJ3xERahYiZIseE8CHsyzuBa3kye/hyOvPH/35UaEhB9Pf//wFW9u2w2I6UYJ5H4OB5emOOnYA8ceO8Mdu+MRxZPizYzVo4E+EVlpG2fZgMSmORrGf4b3zwL7bh5giPN+9+Yb/8ef/J1h6dHvuV++5fnlOWWaAZLttqJsqhEbrBC8F9b5FJTqO04IMPSAvNsbwbAYkpkdL+iJEJwU66XCy437xlv/xZ4X2gj98/d+AhM5VpHIEwhwKt2dQRh/f9O1ux2K55MWLF5SThH/79l/ZbFbc3Lzkn/7pn/mXP/wLJVN+eHzHcrkJ6MAo4Q+//UeUz0nlGOUTpAhecdYFyl/dBr7fSEz5x9//71TVhq6puV/e0XWWtu2w3ofxpTfs6hohPJnO6LqGVGcYb7h/vOPu4Zabs69ICQVLnh9ERJnOcHQopZhMJuR5Tm0V0EUOjglIi4/8nESxXi0oioK2bVksFvzD67Au2s6RJz+/RgI6Z1FJhkbj8GRkQ7Fd1zVlehhXEvkm2BC+jXeUZYn3ns1mE/5bLCSVFsM50hdcQghmsxnj8ZhFdTsUpmGt7MArkiQjzwrypKTZd2w2G4QQjPRoKC6D/9uv3wMWz2w8I01y2qoGbVAtGDqkDqkWZVliOkPbNagkAxW82qpqdzQ9cANaNjxPcqQM9Jqm7sitJ1Ea78KYs207vPSU44I0CmPqukH6cNZ4F1JfUp1Q5CGGKY8JC8FEXpDKEU3TYXxHJ1q29ZrVaonXjtG0GNTbaZ5hO8O22SJ9SN3QSrN8XPLdj98xnZzz9avfMhXzgb4hkkOPmcjoP0dQWz8+PtLaNozylcB6N6hS0zRFYtlvK1wa/jtAnucBGfchm/jzdc1PD95jym4Sba9kTL1QdF2HTxRS60GF23Ou5vM5icwokzPG4zHjZIxHh/2NCMiWc0jhkEqhlSBLVEAbRcL57AW//ep/Y7uz3N09MD/bslw+MipKBI6sTEj1HO9rdpXg9v6WfbNlW63YbvaUkzFfX56RZx2rx2Xwlqt21Kam0CMSnUTD6vj6VLTadCBkyP61BKHJzc0N98t33D+8pzUNr1+/pGka/vSnPwWBg0goxJhRYfAO2tYxG815dfMVEk3VVIyy0a9nfbtAdymSkLTSq+LbtqX1HikVWVGAD3Y/SMjmGVdXV3T7wC3sC0tjDXrfVnRYvPaIRIaRZHyIKkZKKc8JhGeJ8U3eoISPsKpESYnAUtUb7u7esq8WbDYLrOkwXQ3O4F2H6Tq6psXQUqZTbs6/YPfFHqUUt3c/sKmWpFIxSibcnN1wOX/B9cVXXExeMB9fk4sSRcJIJwgMRK+Z8Xg8EIhHo/HfPvJ7Cg79stb10/fZZzcc+/wffcjwUySEnnfleBrHcDLO85HTY0+Ol4guYIe/HP7dDs9TDgTY3h88iQgX0TogWrxI/Wu2EzJReCw1O+5Xd9yv7llXa6w05KMUnUocFtM2dKaK3Wm8uAkdqdSHIOB+nwxZuUfI0VMLACEs+ShFYWnNntX2gbvVe653V1yPXgUFFgaBPiEcH0/9NBpDQ8OetqtJUkVWSJSO1lk+/IxFlgKOhVlwe3tLve2YzaZkugwXmChIRIkS6SCfkTY0IEroYLqZKsbMeHH1Fe/evWO93YEVR6kF4oTT11qD1ALnLa1pabqG1rY4uiDLl89vgeP38BgxeI4X3H/vfvxkrcVJh/efVtBopXFPQrcFYggGv1uKn7TXUEohnPhk6kP/uvpfg9feMSk5PrOyKKl36w9Qms+LtAXaS5okpDrDqTBF8ThQh9iw4KMWnPCddxhrsd797CEZuG0hQ1NJHYuHMELXOnDBRLRNwTq00KRJSpaUCBTjMqzPIi0py5JRUZCmGi2T6B6XY62jti3L3YI3t9+ztlusbehqS5KmID3emoNiTwZLEZlIvGzZ1FsW20duuldM0jh2d0dnWQy+7fl7rWloupA/rMtoonr0XJVS+Gj7c4gtYiCZH2IEP9f5746CeeVHEbwevUmSIA6RuhdteBwh53YymZCqnFyNKctyUI8+Z+kyfF2pcCLYR0tRMC4vmE4u2Gwb1qsti8UDk3FJnqcILAaPMwbjHA+Lex6WCx7XS2xrEAqK8Ygil+x2FffvFid5nSd3tOAJTSlgbQrNdDLh4uKCq/MrTBzj13XLerFiuVmzW29RImUz2lDtzMDRnxTT6M/GUEt81v0mxJGwyZ+4D4hn/o6LKP/Jc1zu1tRtBTp4pHlnwgTQg4rQaYuJPgvRsTpmgwknsXUVH3oSoeGW7W7Dw/37YKzruuC44i2J0mgRbAQkColmJCZ8efM1eZIzLsfkuuD+8ZY0C5YdX15/xetXX/HF9W8pmSHIYuzHqfWB9zAqxoyK8fAYA0ojP7GKEj/PnXquOPtbztKfUfz8XX6Iwy9/iGk8jCCjvtE6i3FmGLG0tsLiojyfL2QAACAASURBVFrSILAoYZGR5JYlKYlMSFROShFKNSnjiIqjlfC3DRdCm+G4W93x490bbu/fsG2XiMxTjlOU9nSuoen2dLY7Lc58kM47E7iYwU+sL8j8Ud5k4AOJqBYOZP1oXjvSdK1lV21wK8Obd2MuZxeMyxkjcQgYP7ioyidvebCE3Vd76n0VBlNCYG03ZHFqLZEKdt2Kd28e+fa7b0LcWp6hRcE4HVOIMUR+qOJgWSWAVEha13MyE75+8Tsebu+4vb1l61ZhNOljRkPMBLbeI5wJCqjW0rQV22pL1exp6dC4j9rdSHFQT52OG/2TX5wWiXEM7ZNfVuRIISO2O+C/g+VGz9EToo/f88MBe1B7imAwfDxa834o5Lw/qEePQ+eVUnTRVgOphhFv//2n0ymPd+vD+DdeJp+PDRWsNLI0Z5SPSJKEjhihhQxWpr1fXRxaOB/WemfbyNM8pTw8vUallCQ6ZGpKGZAdFTMvQ1h4h5QE37c2ZNFORnPOJhdkScF0NEWrlDzNGZUl46KkKHLyNEerFGHCxVrbhtvF+0Bo31asmyV0oDKN8xbvxKBmDns4ikQSwWK74PbhHV+9/BqXXgeRUWfRiTrNYe2D7bpePRvMjoNFQxjdn3CToiCnF8kMRVvfqDr/vK3PLz7FPgU4CP54Sh5UpMFaRYYUE+dIkoTRaEQiM6QNe6/zHYnIh1PHnwA4B4seFy36FTkX5694cblisw3Tt/VmycMiYzqdoKTD2Y6mqWm6mrvHOx6XC1bbJYlMkVqQ65xCF7QvOrbLHWl6lEV8tPpFnORICYkMLX9fE8xHM9RLWK8WeG9Zb1ZUuxbcjroxCB+ywpumY11VOOuZzS5i7mqg5SQq+cxXpPhgYiXkqefkMTjmvafrumDAfVy0PW4WeGNDuG5Mq8S7yEMIF492LpqHghcW5zocPkaUmQhlMzir11WD6TqEN+SZosyyEIY+Tin0nPPpFdPRGSVTNAlznVNchwDdQo1ZXDwiFZRlydXFJa/mXzDhjBBqlQR+XfQO8s4GTkEkMJ+M9rqWLCk+oWB7xlfsU9G0Y9hDfEKxNnRG7oTj8Z+WsnbUDZwSoIOnkjjm5A0RSy7kdYaeCouhtS11W1PXNfsmeFR1tmW1XeBcC97iMUhhEcKhpUQJOJ+ckWUl8/Kc8eicXAoECVKGnupzcNoqdtwt73lc3bOqVnS+oixTkkJhfEfb1bS2DWazSYLUvWIx+EWF/GaPk+bkUujRNSHEkckzcV9FOxs6jLc0tqVrWu4f3vLu7prr8xvKyehn12ePOXZNy36zDaMEZxG6Q0hPkkqsa1isHhAofnxzy5u331NmU87OzsAotCiR5AeLmiiXi24mKAW5yrC+CXYUjLg6/4L55BvWDwuMNQfhgRboqPIMxarGdJamq9lVW3bVjtpU5Ho2xMcfP4uetvDU0+hjSFvgTB0uR2ttOByV+kVrAHq0zJ9cuqEoc89+7568Hbb26eH7MXT6GGU7RmDEwHUJhX+SJMPYtUcRn1ov9B53f3vJFvg/RVJQ5iMSldB0dTQpDt6YIUw+tF1CaLzzNKYZ9sRPI22H5xhGQmGkluUF48kZQnjqdkHT7qmqhrpqmRRzzkbnfPniaybljCwp0SIga3kSjIDLrCAlDepXrfHASFv0ucZG7t8P939lUy+wlQUVrIcCyTu8HucCFUiliu1mzd3inm21xU+j2/7T5xg5ugKBiDYiJ4iwDHSCUHgzcAONMZjWUVVVECIk/x6CtP4ZqJ+8ww5rsx+V+qEwcPZgT9R1HfWmhS6jfHmFzscfruUw8jji2AbPQqUK5pMrrq82PK43ON/gvWG5esC6Grxls1mz3+5CDlO3Y1fvgh1KHL332SZSK0ajEWmeDca6A6fuMN+PvMOgpkb6eI4lzPIZL29eBfUpQZzgO5gWc8bjMZPJBNs5TLuia5uBo/rvh2scOLqD92OkUvhnELZ+hHpIgYlnXt2ERe6sRVqLEoJEhJw3LQXOG6yUuNi1h28Q0DbjdYiFkGmQBCiBSBzC5/g0jE6taUh0zqScMcqnTEbXvLj6ivn4Gk3I9xJAwYir+ReU6XmMkgoLrMhzRuk0IgBB0SNEsGnwncFLgoBgcFSXQQ3oXDQS/LkPc7TQ9VEx9XMF2zNomX/u7x6PEPxHNpv8T120HRdux51AQHK6GPhh4qvxdBjqLvjvGB+UZlW3Y1dt2ey2rHfrYC5qWhaLh2DxYkOItMCQqAC5KyG5nF8wKudczW64OG84m14z0lMgI5gt/poJQ/jJl/sVD4tbNvsNTgTbCZRHKB8QNtMgpCdLMlKdQTTpbDsbeDxHh7eQvZLUH2wvxMGxXYhTAuC+qTAmqigF7Kot9493PC4fuJxco9A8F2wjDrTBUNZ1hs1qzWa9xso9SQFlliHlhK6r+eHdX1ku1yzuN2yrJUJJttUe0wl8lyGTJBx81sakgxBB59sOkYYDXnoRseuEcXHB5cUX/PX+LzhLQDN8iBsKJtx+ILr3xrl117LerdnuN8yn13GYYT9AwxVqsN04Hg0+h7QlSRKjacSg3lQohBK/6DAdDlUC6nZKFD7gxscd8dN98ilCiAP6djDLBXFyYD/de73IwWKfcGUOHnd/e+GmycjIsoAYuc7gOoGVwQYnoCg27O0YJN6ajjpaXfw8vSJD6zQ09a0lK1LG4ykXF1co5bm/rzBdjWlbXGNIy4Sz8RkvL7/gYnYTEmZcIC5JFIlUJK4fjxKoA4CkY5ye8eUNeCGou5rNdkXbtaAcOhEoHRJLvPeYztDYijSf0Nqabb1hX1fBe1MqhP5Q/KMJBr1pmoa8yiIdBDLWu6HADm1HQIq7uqPbW7bbbeArJcfE9M+Bsh1l6j6T6ODjGRcMY4OfpBRxRJqE86jt6kg5CUXmZrXj8f2Oddrw8vz3lJmPvOQosjsSZAhvo9+oBK+RMc/gbH7Nzc0a53fcPb7hcfVIY/bgHLe3t+y3O3SqcKmnNQ06VaRFiveWXbvBqI66rhmPx+R5/nycVGwsjyNZvbNxv4bS7ebyBd4LlEhZbzaRt3fG9fU1s9mMzXpFluQsHpfRbsediDc+98fTlBDiOeZjNdqPTbuuY7/f0zQNOjkVROi8LKjrOkrWLZnUiCSiBQKcCYtB4iKHKdgjOAzCC6zJQCmUz9BKk+UJspRkSpJoibctRZYyGU2ZlhecTV9yef414/wCQQY+QOIeQaEU5eRsWI6ds2gRgqEEHtu16OG2CiOKROmTo6yz4eDWKkUr/QnjMRe5VET+kIj7VH7gxN9HxfljZaOTP13Y4Y78LNzJd/7PjrL1l9ZP0ZirbkVttjRNHfIIvaOzNfu6YtfuYtEWjBO31Y5ttWGz31BVFa1p2O33IevVGDwdUjgSJch1KNqqek2ZTVitVqzWW67Od1yevWI6uaSQzxc0v4TC29KxXC+4e7xnX+9QSqByjdIC59sQh4Ml0QqdpkghaGtDZwzOSYw1UYig0dE927qOrguXWrD4CCOhMJIJKibvPcY7GlMhUaRZgugkbVvzuHjg/v6Oq/k1V5M8Ro3zZO0c3ymCar8Pl1Rb41RHNsq4vDrH+JDA8PBwyybZ0VYWJwxC911pgrBJ4LMCzpuwA0TggXj6Tu94/JdSJBNeXn1B/l1JQ0LdtfEA8oPLPwTvNZREaoFxHbtqy2q74XJaUTAeXs2x31dvLtkXbYdi6cOiTWsduvAYvdNHvvyt92EY47vBV+swSnPPomfBGNNDtBz5oJDxz4A2R4WYEwGZIXb5fRfeti3b7fb07z5Rj34unptAkeh0QCsTsvC+JgKVaFxnYzpCOBu7LijwOtv97Nc+GBUHT8ssDea0k/EUZ9tw6ZsOYUKxNC4nzKcXnM8umahZmKwoPSQiCBeaB+XjfNP1iidHqlLm6QXNecPb2zf8KHK6rok2IiKgYzI2/LHA8t4Gw2Dv2FVbKluTq1EQqTtOOLu9olb2iR0RhRzWTnxGaapDpGGm2JmWyjRBUXoUR/TJ/OdfSPZ4tukW/iRKqSxLJvMxaR6zSIVjvwvrtqoqHh8feXjY0hVyMA5GfTh5Of730ED0Xg6aIh9zc/2CTXXP29vvWK8XSDVGeslut2G/qyhUSdc0IAk8xSShaipuH24p9RhTWcbjc7IsGwbwA+3AH+AO4Q/D/vCnYdJTtw1Kas6nFyivGY82aKGZX5xzfnZJJhPyizQ0LEjW631IgYj2Gp+aPfpL79MTpM25ILXrEduo6q3rmu12Gxodcbpu9PnlFavViq7paL0J5YrUA1T/lFOCMDGSyCJEilYZqZ6QJ1PSpKTQwV17lKVkqWJcpighyZKcSXHObPSSSXFJrqdAgjcOdPDpUU4jenscD8IrtOinigJJGr0yYgqz8EetkIyV7MHr5NOWenTVjtR32QfFChk9Xzj9jInRVC6Wd/LZUO/DCPSZ35+MFP4+UhH6A8kd6/RVy/vHMIbYRm6kMYbW1GzqPbt6M4xJjQsj0qYLXIa2bemcoXMW58PI3dOhBDghQ8CuTPCNY7vfs3hcc3+35OFszZevOl69hMuZZKQnv6r4tQR13uPjI5v9FpRHpRqpHSaGV4s46hQyduhNgzOeNCkR0pPmwb0+y8LF17QVu92BGA9Ea4snKAo2ErIVqUxxQtDWLY+rR+4ebrk6f8nV5PXRiFQ9A+Q6hHSslyv2my15kpKOU2YXI7744hWdCy7993cLqnqLMQKZCPJRSlnm5NkILfu0hv65+ogsWYLNVDTG8iBFikVRpBOuLm6Yjqe0YonxzaHA8EdrxYfg9yRRuC5cCtvtltrsyXXxkx1pTwT+qfHosTfWcdH2yc8/xtV4pdg2obFwOhS62+32AwTsaaFkrcVbj+9FEM797Ci2H3caY/A6ojNSnYxb67pm5Vf/QUUbIYnDy2GkmY8SZB6KGS8PpOnAaTtd2x8fvsqB/K61RmUqKBKjYGy9W1Pt9ti2QwlJUZaczebMJzNKVaDQKHSgQ/TZMvIJq6W/G2QSlbqecTbmcnbO9cUN5r6ho8EaAxgUCVJJUhVI8a3pgsoXx36/Y7/fMptchJ3mn6+wTsnk7oTrKGXwOptOpmRJDmZNvW7/XcUkP1W8DWP5+CzKcozXnosXc0aTItjJmIqm3tA0DcvlksfHR7bbllF6HjiiP/VzC49tapA5OoEunhZSai7Or2jvN6GR7wJ3MVV6EEgJEVBLksChRDhW6wUSzSSboUTK5dmrgSZxMh59xr8z4AtBP9p1Nc2+Yb1eko9KpuMZeT4mkQnj6YRMFjFlIGE6nrIq17x//8DSL0P2bxL29s8BP39L0XYSfehcaMmjz5+QAtvZULSxRbkEl7iTplZfTV5Bo6hEHVx3VZzPC4ejw0qLcRaEC6Rvr5E+RXmNdiVX068Z6TNGoxnjYkpRjBjlI8oiI0s05/MJ3jmUl+TZlFKcB4SNJPjgxBBhfOTFtaCT8ACsAStgEHEoEVZFf/+FJObQDDmLlwKNDCongpxd9YZ7zzCDeiK6+8A096eKAD20Xz52jx9F2OBJ5tJzvKTnFFifWIR8TMwgfpqwemq0L08D2E9ldHgP1ho6W9OYNhQBzuCEw8uG9+s3rHb3LNcL9vs9xrbUXc12v2Vf7/DSxscbXMkdEWXCBshdeYRzoCzYGIMkfYgRCXnS1PWeZrfmfrliW9eIVJHPU/JRQq7LITz48NLlh9PoZ3UmAUmqmw2b7YKm2pGOFIlM8KJDWEGiwnWhhEA4H1I7aoMUGXleMp6chc/jMXme4vDsqy1rtWBbbVlvlkH/KkUIpu9zHQldfpJKkkSQCklnYeca3H7Dcrtjs69ie6DipfUUnQ3PztiO7W5B21UUZcr0bMT87ILL8y9pTMNy2bBeVbR1F5oNlZInJeNyRpGVpCquzCPOC7gwC5FhJmKNRehkIFMXacHITyhHI1KboxoFwmKiT6ExociQIoy0lFLQhTgtUzfYLqB9YnBsZ2ifBIF7pEiRXiGcDoiM7ykaNnBrvUS6wMxyXeQPmXawOPDIUHAP698PKuX++VduSWMaTONZ7jZsdmtIHIvNLdvdauD1iqMYpjAjYvDps86ifBpMciMjR4ij1A/xlG4gooDFg5ZH4gaJUiIibXXkSsbXe3CUHc6Qz1EEHNCEfrylyfSIMi9ICsVmv0E6h/QW6UNj663B2wa8/ejJFdppifQhADzRBVmqKUc5WZbgfMO+ClFepg0oTZFPmI5mlPkorvee8CJOFffHn008kpEhKUMlJLJkPrnh5dWaxfoR0Xlq2wWDdyGRMkWrBKmh2q3RQg5jwn27C19UJINPG0eB5AIJVuKthA58KvBe4r0L758UpEnJaDRhlE+oNoZNWh3FkPm4a49SDJ6iuE/PdfHThfHhXhLP3h0BITQkKg3PNRNcn10xOZ9w/3hHmmqsd2yrLc62rNdLmtYjpMW6BiL15bCPojglio8Cj9QgSZGAaTqk8uQyJ9dZkBwKRZrmpKlGJB4jGrzIGU8m4ctZaOuW1XaFbR3duKPQY5K0L9ddvM35GYP1eEYIjzEt3735jhcvXnB5cc14NCFLchJVEqyZOryyJATBZVVVeBP+v5CnbCCmeXz4vh/eEfmxMc4zzyqkqQRrKOEIaTTBtTlqAwJNqDVQNVsyNcL4NqjtcTgh0P/95f/Jd+Z/0r13dNbgVYuTnlq2NGaLUCJkiXlNgcK3AtOknM+v+OrmD1ykr5llF0wmM/I8R8kkSIdHI4oiI1PZSeIm8QLqQSah0qGKUDr86l/widtEX2Wk+rBworpDx8P5GHMLBG1x8vvnP2dB3QpDsPtgecBpQPnh/5PD+PQUQHmKpPlnjjP1ZJ3Zny7a+mA1dwTnyaOYqP5Fu6MvGu8Vaw3I4MJvXAfCo4SK45+GJCmwkcMTdIFxOZr4OlXoapSWoBXfL77nX//6J1QhKKYpm/2KNz9+w3a7iQoww2L5QOc6hIDtdh0EK8KHr6UESokjRV7wK9IqQaZZPDzDixGA8Z5qt8Maj5UOa1vMrsPf1lTJI7frH/iXr/8vLkevwxgFcNaSxEieeLIc8oSkCOMQAjHDYVisf+Tt+3+jM1smk1EYjxlBlmZ40WFNTZFqtNSYtqPddUirmY3OuRq9Zppe8fL6C87OzrDe4IXDYnlY3PHD+++ZZxVv739gsXokKxWjSYpX4QgSytN1OzrjMapDiRKvoOkc27pm03Y0keOlUXFtMjjHW28QUrFYLdjUj9RuSeoTZvOv+cPv/g9+d/WPfL/+nvnIcaeWyGRLMS5p956UMRfTV4zSbFiRSgmCZXucCfX+hRJUeliXgtDbzYoxF9dXvN19y2q7Q+eSaTHG4an3O5qmI5UCJzXaa0bpmElWkKFILeQEzy6Uw7QGlaYIFB7Pi/lr/l+TomxG5zo8Fp0r0D4Q4J0lVwWpGGFqT1sZTOeQaeDJOTocKo5LPLtuzXr9SJJKppMxram5fXjL++V3OBm8kDb7XVAxuo7HxR2dX+N8h7c6XPRC0NmWznQhwF4BiWC3b0icoOp2PG4euJq9RoksMImcj+hZtLkxnkRoMl2gVUbdtaSpBh/isEJupcOYhs16jXQZ2iuadovzPY6hBzTy134kaGq/p6kMeVpSpDOm5RUvr1+RjVLevv+BlX9kv2yp9y1popiNSvJEUW2WLHYrLvISrQ59tJLECzYhcTmz/IqXly0khqaqePPjtySZpOka9q3F1J6rsxt+89XveX39FWfjc3Iy6rpinOecmGs/nWrkDPtbiYTaWJQecTl9yWazIRf/StWuKPOMNC/ZNzUSxcX8Bp0q2rZhtV+TjgRdV9G2+3hpGtJsEmGjA0oqkEzzOdezL/jxzVseFveMZiVJohEESs50csHLF19xNjuHNsFsBc549rsNYhp0lt6YcPchTo9/wRMzA/kTzafkhCRHAD56c/f+jO2nR6lK+fLFF3jZUo4KCjLeGYMXIWJqu92wx6BzQZ7mrPcPLLd3fKV/B3RYT3CYwOG8QepQfKRlPlxCGsk0SwiZMB3TdMI4GXPbwXqxJp8mqFJSigRZONpuj+hUsAsTUNVbqvUW07Zcn73E+pbaboOliLPkqhzoStaGl9+aUBaEV9kisRjZsNw/sqs2/PnfVjw8PvL7P/4z4/wci6SzHq1KJNCyi3nAS0xWst2tuJxdoBNxdD8/aZiP7Jc+nLJxYkuSCOiibUyRjUjTAmcEaZZilSJPMsDRVMGPMc0ShLdU3Y71bst0PmPXbUiTHCc8+qZ8TT1peJgvqOoNO7ugswaUgUTSdg1GOLQneB95TaZzzsoXvJh/ze8v/5lJMmc0Gg25Wn3G4i/C5z+lsxDPI1HiV32Wz//+iIv4QWD50X/v004+rqISHynIZByx2uf//NiLxj+zOvwpiObdIYXhgBd7lArxPEoSa/WWlpbKVIwSjUdhfAhKP44xlAOJIHSCta9Y7Re8X3xPt64pmpRds2FTb6jNPqRjSEtLh/FtMBXWoPuImmD6PNhhyGgJnohTEnYo2tQAg0+m85DV2QReiKVm1dwjFwFCvhp/iRYlZ+V5zIvzWNehZHJkpX062nDR+81jadot1u9BGKSKNhIR9RUuJIHgfCjsjSNVCXlyxouL17w8/w1fn/+B68tXjMdjOh/Usk55LuePzKaXfPPmL+zrJo4ZWkwsiIVUIWcTie1M5EaF0V6S5uTliDQrcCRBmXXEruiTN/oUgsa1bOsljd1TJvPgc1ScIRlRZJdoNUJHblASi6hMjxmX049stU/nW16enTO5m5GmGcZ2NE2LcxZrFCLmFWe6YKSnlHrG2fiMSTEmV6FYdEd7Sw7lokCLlESmAWWTYiBKhxFDGNtJSUxQiXxW31C1ayo2eC+xXoINWYTr5QN3i/co4Si2Ca7ruF+/44f7bxDaY2xLVVXDGHK/39GZOhSyA8qmIifxiOwUmdDehe/TOROdqGImswQvPOKpUjaibSpJhqQF7w3WGaxT0d9MISyDzZLz7UlT+DmUbjL+LFomFMkIW0ou5jdcXbwkHaXUdcNuV+FMGOPnaUZT78A0eNdHqB3WS89YESI0v+N8xtnsAq8se7Nks1qy360RytJ0LcZYdFJQjueMyglSROQmgVTHgsS7I1Ptp4e4w1qDDF1FiONCkekxZTpCi4QsyclSF8b+NmRqgyJNC1Klwzo0HV3bhOQeDEgdqUDHRt6hZVciJSFBy4w8K4ec2sDDLMjzMZPxGWf5FQ/jRTBU7VQcJ7uB3zeI2bw4PevhIwaGzyCl7lQc1jsDCXFkbB5vmzzNmI1n1GZLV3fU3Y7NZsOuDjwuEQVggVAeUHDrA23FY3AinEQuCmdCEeueoE8HRTtIUpkyyaeUSRlUqvsu5BanHi8NUqfIiGALGaLCLBZjWhqzx7oGL0uUCJnPvZtZb0HjI65hj4Rl9B6QMiidm6ZDbdZst1vOJh6BCubUPWKNP0lAadsW49toln5q/f7Rc/E5xPToOQbwJ1BFerRNxoQfKXoL+Sg8imeH8QYvZZh4xrvFC4U+K8/obl6xrdY0bs2bx5pdtwhcnSKhrWq0CPwibBgTjPIRN5c3fPX6K16cvaCUkxMjuv+Y2f3/Dx8fyTKUTxbtTz/k0/EW/meiMtzHFkIsSGJh5cPdEi6yKK7oDTFDedJiMEgky81jIFwKxzi/DpEmXkaY87DZw7f3IENnVVU7bu/esW4WlJssWHlUgajaP/+eyyRErwBUw608jJqOZrAqkkdE/Dl7JWF/CKWpjghQvJi7brhc99JylX1DzoTpV2NkhLlN2+EFaJXGN0eevO1hSBHUeOvdkqbZgbBolQTkR/SyfTecDtZ4rBWkquD87IqvvvwtX9/8kReTL5mNL1BShZFvHDkVRU4+KgIqJC3Od6yqB2zbhEikRIWDSOXUXR2MJZ1F64JJPuNsfsF8evZ0uvbsaWGMYbfb0rY1SnuyXJFmYZQ1zcZkWRJsCtxBEZnnOWfT2a++8M9ml0yKKZqctunohMMrRypSdF6SpwXT0TnnxSXz4oKbs1eczy7J09GJavRpARIQp0O4snfBMFdIcYg8kh7nG1DgpKExKxabd6TLFNM4nFcooWlNx+Lxltv7t1jTkJUKZzs21YJv33yLzoLBaB/+LWPXHy5hNXDX+p/rMM4UB0WYkwOvrrfm8NHt/LniqifC60IjRGDW9mpj5xyZzkKu697inR9irDz+Mx9oEoEm0TllOSEpc168eMWrV69IZMK+WvHm7Xe0bc04y8iLlM02oOqfcs4rFWwbWsY0myBAWmwXIA1N15KKCXmZMpuHBIy2bdlsNszyOZkueN4D7rSosdYij/JmPSFdoyxLhBAURcF4qjCiY7neDDytPqqpd6ivqiooPH9CgNXbNvTq5lzpcJq4cN72dj5SQoIiK/JApI/PsKMbpjkfZFk/ax3lnqV2+H68Ig9Unb4Y7Au2nvrtZJhcZDLDFQXVesNyuWRVL3hYPbDdbuMZnpIqsMbgTBARDdzUv5E2nKcpZ2dnTBdT7jZvMabCa4eOKPEQVj+cAx4hPdZ2tG1L09SM8uBq0ecDO9RxZfhMhRsmYVJq2tbQ1C11EpsybNDjixhTGdXrvW+gN34QjWTJ5/Np67fKcczhsSGzde6Ev8sRB7Lnv5LGhlYimU8ueP3yCyq7Ytct2D0sMI1BZwlKKJRO0C5FGoX0ijIfcXF2ycubFyRWn3hQ9bL749zA/0oF2lNfttOsUnmkLpUHFerJ758sMc/Hfd4EGBu7qMFK4qgZEy6o5ISLAo4wGPKx27DCsDcVXji221U0xHQ8Lu4DaZuOIp+BkFEhqA/j1ZhPG4pAj45E/Kras1jf06mC/0XeezbJkWVpes9VLkJlpIKoqq7uniHHbMn//09oRnJnd4zTJQEkUoR0cQU/nOseHolEVXcDHO70hhkKVQUgEenhck5TXQAAIABJREFUfu4573mFLS3H/TE3bGkk6+t0OnCHQy/xkggj5gbulNmYGPyqBNo/NgcZtNPJh28gQu/Cjr/89BfWsxtev7llVVxKD6smqt2gnimf5PvqU6SNR56eHkYei7E2h06H8RAVx3ZFCJHgNbWbcXv5mm/f/olvXn9PFRaC6sHJmFoZLBXz2YrvvvsT2irhTb3r2R7v8W3EIrxR4woInujBKcdiseb19Te8ffOG6+vrMcNRP0eIByJ0nkp97Amxpe87jscDTbuHMlBgKKsCkqc97NFlwiTDrCqY2dkX4zSlqylUjQqa2ELUirKeUdUFs2rOcrbk6uIVt6s3XMyuuFq8kqbN1BPE4dS0jUkPxlKWpRye8aS41MbmxikrVI1HO0i249g98O7+Lxy6Lc0xoJTDaEdMnt1uw8PjHb3fY3eKRM+xa3naPODKEuv0SK4Xj7SaxWKB990YQTYU2KnYYJqT2vf9SSVoX25Gn4saztzytSZmMru4/6/46B8JR2kon4ssvo6nlJHVry0oi5rS1VxeXrLWawI9RVHQ+5amOTJfFKKQVnG0svm9l/d+vC77/V54QymJGS2grcJVEo7d9Q2bpw39wXNRrSmW9XlJ/ExNntbF8WfUqD4uq5LVakaXWpy759B0J3uYfIAOTVvTNIIgnW7MZ0I8RmVzVRXsDgkfWkKKhBjo+gPb7RN3H9/DtaZpGuGEo/B9pOsD1smqTA+5wi8iajHX4TDW/uH7Gto00R0m0gTvTEpnFF4ahRhC9liVIaPrOj4+3PPzu1/YHh/Y+D1N0wIa5wxWSzyhj+FcXKNPnCyhrzzfB760UUoUuuT68pqr9TV3m19p9i1mDjbn7o4+hLlxM84So6BkfejZ7DcsFhcknRE0IjFpzLPtyXQIkUQdPfrHVlXFaiV8e31GTxqySsVUeLm8oG/6rFRW+XudVt4vV5IOvoWiIE3obHIcJ6p4aWJPNWJ4hhi3EGgslpvLa47dN9w9/Mi7jz/St0dSB6UuJFTWW8SizjEv5qznF8yZCx9p8s0MLuYvmbL+j/3Sf1vj9vw/00nVopT+zM/nv+9MBTV9C2dDQ+4ytHqBMScE0EgrXKzk868HvO/pQ8fj0z2tb3l6eqDpGmKM3D3cyWHoErevv4FgcKbKo4vNhU8I0yo/LDY/1GQ+nA+GwticjjFESqVRzjzcmOPAqgbitMmk6uF7yD5vcZgssooGuambJmefqvOv630k9pH7xzvef3zHw9NHlrdLUr4HddRZSJFeNLNMKdG2Rzbbj7SdIG1aC/lWvHoGpMBBCvRdInmoFwuuLl9zefGKmV7hdDl+YAo7riIAZix4dSHfT9M144F+7HekLtCFSBEN9MJaW9Rio/HHb//MN2++ZV2uB+rtqb+fpEWpfPMEerSJKKM4tgc+3P3Cavkji+U1F+oCpaSx22wfCX3kcrmirmu+xnJtZufM7IKZW+JNoLQl86LmYrVktVzz5vYNV6tbrlevmLslc3fBzK0kliyBTuervgHlNQjFwlqL9pItPHwmapi6dZQ1pIbkWg5+w68P/87d5j37XYdWcgBYq4nJ07YHfGhQfRRydQRb2hFVmdarIZFgv9+OqtSiEF+uaTi8UjKgpF6Na/xp0/aSemw6aQ9T9ZACobKNyWw24+b6hu3Dgf2+HZu2KdL25dGjmsFTzGjJzlWaM7Xe4bCjbY/ZNd+PdjXybPz+Gxj883a73ZjNWpQFRSXeZmVRYqxY3dwdO+5/fuJqeeT15bdczC8ptPvdNeEUGIgTYG5okI0xVFWVyfAFx/bURE7j0rpO0BhRFfJizSDnUYtXW4lqxBRchtZECJ6HxzsSgceHDbFN7HY7HBU+BnyKExcR9buUoZgjGtXYpk0HYAYHvbHG6eHGmGTemnRqZp+envj555/55f1PtLSkIqsktcYYaSRjzPeaPw0yn7uff8tXPvs5sFzK5mD2YcW22ZJCRCdDSoo+eHrfkyI4a9FWYZNUvUDg/vEjy+Way4vXGfYQQZuayM90er6/kp7Gacu8mrNarfjmm+95fXObE3Sejy2OxWLFzfUrmsOBuq6/Ktg00qoBo8wk3iyeK0mfKYyHX5MEju7UtMUgB+3CLLi8uGQ5X2OVJfpE7JMYEirZw5K0wM7VnKqoJjR/PjtN/sO/0gv//rf+/JmHNilQ9pTbmbJJYkeHD56YWnq/IXhJGOiCrHf60NF1rTRrmwea7shm85TtGDwPDw8UhWVxUXP/9Cs2zpjXS+qqkFve6OysksQp2wYSYlDpCoXSAfAoJZ5EIDm0OtkRjbDWZmTgHJWQg86cLoCSAGIxbJYypFI2NE0DOX7qJm8y90AuXtPt+fj4K7+8/4n1es2luxLybT5QBA6fxIYozWAS3bYN28MjTbcjJEVUlaQ5JOG8DE2n7xJyDjsW80uu129Z1leZBGwmh9+0eIm3VMmM69Urjm8O41r3afdA2+7p+wNJ9VhqymLO7dU3/PG7P/PHb//MzeoGk+etAYMaXfcnf0+LONMnnTA20cWG+8c77E//jnEzXr16RXvcE6Nnv98Kx2Q+ZzlffPHkqICVXXO1vOHm4i2VranrmvlyxuXFBev1Jd9/+z2rxSVLe4GjxFBjxuuWPuFnjWhGbtqcc5hk6OOnB2iMHq+D+EHaSBcbHvcPBP/IftdgjON4bClLJ/epCvjQAHKtjC65vr6i7yK9b8f1/vB+nHMjN3e6Hn1e24wxxEkI9PB7XzLptNqOqzWJOerFczJ7aPkghXto3IqiYJeaF5G2r/MSwYCo6QIqCDrW0bJnw/3DHTGGfP1kdRRCT5F5XL/3ms/nzHJ+6HAoWSN8PbHHsPjY87R9pNv33N89oYPm2OzpgqfQz9ajv2H7MjRtetK0lWVJ0pLykEwaG+a+F6sf7/1oERU6EaR0fUdpn312k8N0uDerqsLsZMVmFCijiTFwOOzo+5799oChYL8/sigQz8ehq9TqZc7yVGmcY8RiNi9PowL6NLT3dHS+w7cJqxyVW1C7uaxJOXGIByFF0zRsNhu22y3BZtHW5MwWC5O8NleGECIxvEDreZH+o5/lgsqvV7bmcnXN9eUN++aJg38idpFiVtDGnj7KfWeMwRqLSZoURPRz//iR1fKaq+WOhV5n0aBcw5cZZjojgQatCm5uXnFzc8PbN99Qu0/D32MWCMzqBbe3r+iODavVOlNrvg7KNm3aLNn+xhgYct7Tp02bpGyAT/FTpM1ql4lvhrqoxRQQA1F62TRwFwKoJDl1i3pB5SoUmhg8fVRn+9lTUY3/Cdaj+m8TSaQXYOyBJJv+htOOSbjvFGHLzVocaZViIuDxdKnl0O05NHsxRPYH2vaBrt/RNILkdN0QF3Wg8zL197Gn7Y4YJyja/e4jtrTc7m/5+f0PzPUFae1ZlDVGZV5ERvhiGgB4adCqqsA5izaCShWFpe9DlkkLKjfcA2Fw1//cSkcNU7KfeB1N4mGUFpQkCy2GPy8eXtIzxRh42H3kl/c/cHt7y+rVUu7bjHp9rtCnlOh9S9seJAheFUTVC4k+N20CrydCSMQerK24XN5wffWWSi3lqUkaFXLygTnl4w1LcUWiZsGbq+9oDi2hFzRqs3lkc9CQWpxVrBfXvLn6ju9e/5FvVt9imREJWMrTHZoza9UZ5zDSdQ2db4RIbBVdf+DDh19ROJ4e7kiqyWimcA+vr6+5zHy5L/XT11iWsyteX74VkcFyyXI553p9yXq9Zr26ZKaWYuKLE4d73MTW4NQkpWd82KG50V6jkvrEMzKESIoeY0qUyZZBoafrQuZLQUgdPiZB9FKk8x0p9VRWfCRfv3nD7kmMidu2PTPzHfIYh3t58OEaeXYpoXPdS5nEPKxSP98indIerLV4+sl6VBH7eOY3NzQ7A6fta9c+oUAL6uG9IJdd13FMRzaHDU9PD1inWa0WGKPocsyVKoq/itNW6IL1es1Nd8PD/h0ftpaUhrg3RVKJrmvYxQ3Nvhd+J4Go0gSRTy9vPSbPwAD6xShUlKFhWSwW7PvMZ9KyEh1W3E3TEGI3NuihE7St6zqijme94pBeocaD0+IKAymIMh+wypISIt7zHiI4U9GHHh/FE64PXpq8nOYyRgpz0iMMwjapu0N8WcqGNT1dzGb40bNvtjRNh28DpZ6zXl6j55qqEA9EZww+dCgrT2tRV7iyFFuvEDDi70pSSiL5cv211oon48R7MCX1NxoCy+RtsSxmC15d3/K4/cDxfk/sI0ZZjE4kTjxQrTVRRUL0xCDI4NPFI7v9hmJZUWGAYkQddTbtUhNle5bVYZTl7etvWC0vqIvZi0e57+Vcc6rg4uKSNA/MZouJb+tXiEpM5xVzGBziUO8mTdsZ5cIIb3H0dBysiwffpcEQz6BEzaGUuL/7BNGjosEAzhSUrpC10dARJvWZN/sPKEj45FudFFKl/8qg+YnfkrYnZG3gomVX9kSgpaHH04aWfXtgv3/iaffE7rCn7/b4fkvb7Tke9yMn49A2HA572r6hrmvxVEuJmanRWtPGA32vOfgdH+9/wRcdVVHiL1qwtUyChuzSbDJXT4wQq7qkrBzWKrQBXVi8j+MhMxTFgasw5fOqT3gIGq2HlWk6NW1DsK7SY6xIjAMaMbjGGwyJPniO3ZaH7Uc2+wc6Gkociigk3LPE5yHzJKKivL8+dvjUg5IDJCQ/qgO1MqQYiCEr/XTBbLbiYrFGUYBPgugNLixD051nPY2mjZ0YOpoLrla3bC+2hD4SelGx9WFHoQsW5RXr5SuuLm5zo6Zpuo6qGELhjWTrpXRm9580gqz6nqTBlWJeuT888eHOcthuuLysMZnzUhcl69Ul83pO/OIjX6GwlLpmVV+hZonrK2nWrq+vWblFLqwuFz9LDPqvjl6arhKfi6xTEnJAjAgxWRckNWSVaPH5s5pyVsvax2pC7PMTpkALZ+7q6gqClui8TLqe1q2p8OBzPLKpK/zQ3P1mm2tPod3+7GucjHQHZG34+8f3xtetqeKYLxzWEMT/TppP4bE1jSjDF4sFPrT0fXbIR/HXlve6rkcyuvvg6PFjo5QIdN5DVAQvJH5XWKzVoFMefT5PWwl5fTd4oE6vvTGG2WzGYfNA2zb0nKOVIYjH3jAIRsWYavF7Z9f4+fmevm+kxUoFCS1WSyZ72o25tYk+9nShybU9Egbm0jN0jSwkE3ytE09HAn1q6TrJbm6ahj527JsdTdPim8jMLWQlWMwoXd6EqaxUzhzE+XwuofDOCV1mwqMSvYFsQqzVOFuPjdznXRAiJ+ThuauDtD4B8WhbztYsqxUfwq8SF4iReu47QlTjBkZixgLJR47hmM+1A37egZ4zKLdjph6dnsnz96DQrC+uxdkgSdurlTojnCSfiIVEpNXVHJUSha4yH7PLKTf6qzxn05qiJpFV06btzElBn+rKdGCzUvzE6HQgeLetWBQoVcvUqBJ14aDXHA4HUkrUtXTyRk1y2p4VMmvtf/oeLaVPA7sFPZL/Dr4XHzMSKXr6LlEU5ck7TZ2KTAg+W8sNJqEeH3ckFehDoOmOHJs9hy5HQmkhYvahlcin7kDTHDl2EgEVQ89+e0/wXUbY5KHucpRXJBK6XuKKtMbvj2A05VICnH/46f/BLxL74sCsmmPtP0H24KE36MLkaTxL3Y2hLMuc0ZbRAE/mnh3GtajOhrgheFKyp9B0LT+E5yIcvLY7itRbSRKHcNey4i6pM6LxFAEBJfybAprDjvvH93x8es++3VGU82xzYlC5mreNp6xO92NZlOx2G/b7LW3foJVw3EKImKLEFI7k5XmYlRW6tcyqOZerawo1Q2Eo7aToTnm5k/pW61lGsgtuLm5JIeKQnbeJisOx5Pb2mj99/8989+0fmZllxucStSvOSLPamE+GghAinQ/jKq/3LcEY2u7A48OBypUcjysOhx1WW0pXobOFhf0KU6TGcHv1BkNBjJHLiyXr1QU2h8+p0VTS5pXzs8HGGPquw7lq5ElFIg0ts9mMi4sL7vc/5lWaoek6YlKU1UzQoVaz34vooCgLlHZUM4V1FSEE6llN37eEFFDaYlxJ8grraur5ihgj//zP/0z4V1El/8u//AshBH766UcOhwNNcxgbj2HlP0ZljcOJKFtNjjEb+Ccm7+lizGkoijE/dAyFTh5jUybG+9Elvu97fv31Vx4fn0auVdM0ecAOEML49b/kJeIOzXw+pyxL9l3DZvNIr/Z8ePqF4/HI93/+hs2m5Icf/0IM4GyNVgUpStMcQsAZPuEx+yh8w4Vb8HPXcX9/j7WWkDT7/Z6icjR9g+8jMUVKN+Pi8oKkIpvd0xkiMm1upgjVCTmTmbmqTLZPDuN6vW1b9sd7ejqapkUZqX8hCE9xaNS8l/VpXde4wW4kM/qV1lhlJV2BU+RTTJ6ycidhkNJoN0Mp2UKJQasimUDnjwT6ka/FaBcr93wbmuwjGTg2eza7R7quISgvakrf0vUNXSdIWx87nponaTI7zdys0NGyWlyyQtJIAJx1eAIRUdJqLXzCi4sLehVZLG44bO55enzgYj6X31M65sUVi8VC1vijVYG8xKtQTQLjn7V1+UMLMWG0ZVVcEG/f8P7uJ0pXc+wDoYsEG6nLGabMIrPey2YjQgyJQ3vg3bt3XC1uuLl8M7q+RAJGSX10Wp3Vo6HAvL15y6FpREyJ0Lym79KnRFlWhBSliVQWq07fieRMf42GDZwTq6k+i3sWiwUfHn7BzDJNAjDejEPj0LQNqPzhcGDf71m5mSBtAB7hvBy7Fu0MNlh8RkrSZH8dksfHIDfjP/wrjhmKJ5lnym72Pk9PDYYiXxvECyjzsYb4q+GuFpd0lSFvz+Zwz9HvCUrWmrvDjs3uid1xJ2HrytN0R1rf0vRHjl1DHzrxuck4Sd81pNDjg8++LhGTFZzkJmmI6VNaoYzKLt/Sih2OG+ZqxlkyQ3pmIphvZKXMKAhIuWBaTebmpHFymMbuTO06hl8bFXNojKlGfxuVkRv52YwZlnpITph8/eHQDCYQVUMX9hyaHftux0V5jcFJz/xCCKUalg0x4lMU7qARV+ohTkR8tAZBgsjHxx9DQsFnhvHBkDlO0JVIwumSmZuzrJYcZpfooHh99YbLy0teX37LenZDzQyxizaZf6dOET4vdk1qMHiR4hMCVvVAibUnVWOMMUdtVYQu4tsEc/vFLRtYqnLJ5Upas9lsRkExoUVPbQ30aE8zXKfPfWMKdabM/Nzv0qqUoSIpUtSZ0JTvGz00/UYsA3RuoCwoJaifVmYkqg9NojGG/X43DrHTKff5NCw10qCMGX//5yw+Bq5eVVWj1QTh/LnQ6vSZ7ff7zCELp0D6wewhxq/StA0IX1Falss5/W5P0+4JO0XbHlmuFqP4QmuNsgVK+RxPVvwury1lc52h6fTej2e/xNf5DIBnQkj0YxPVZ2RU/waFWGk9mk0/FxxNEdCu60akzZm8drcq81f5hAw+RTTP8jY5/ZpSSvheRmOsxTibm9VICEka8hRISotSUgcCfUbO5PkIeUDbd1s2u40kYaRs9nzciBCkb+j6A13o5Xohlhh96GiUXFPVG3Qtf480U+qzSlsxTZd3Mazeh0FEeGUOaypBnjJnV30SoWc4d3R/wVouIVGEeJLkIjAvF6zmK8IuSA3KTgHjkRMUKSjh74a8HYmJ6BOhCyh7Vk2etVTPuXY6AwBmkiajP7keo13KV1aK/tYz91yA8NxpQ3JJOTvzhjpkh3iEXbPjw/0HtvstxmkKHH30EiUUY45/UaQovIMudKOVnfkHbdg+/fehYRsIVh60J5BQOJKOKCX7dtQkMWFsABWJjkjg/vE9v97/yDE80asjbduy2T3x9PTEZr+h6Rq61BKSpwuidup8K2oiKyhmYSzJTxQnKmFdbtaUlfVCSqcHYjzEEM6Iimw2j1yWV+Lj9fxGHo3I1di4GOPGtU6MEW21EHxzrM6gBJ2umk7RPeGTghpaf5adpTInTuswck/OcyjjuCpVOqFsJOiefb/lYfOex+0Dt8s3mfA+VeyqTw+TCV9DUMJCuHM5a3G6JjFK47SjMAUmz8ejn536fOMmn7yYUpZULMoF7eKK6BOzYsb19TWLxYKLi0vmZjmmcjB6OT2zh/nkVBTULIZTll2IYKylsDU6Gdq2x3eB9fKKq9UNKVp8m75SXrXC6ZJiWeTSrs6VcUkzDY1M02b2BYrMyRD0xJGdcsgGJR1AigprClLQEsEXVY4eUiKeUlGUahml1FrMkr1XqKjxmb/kvR9XaRcXFyyXS7bbDb/++uvY8GqjxtD6aTPpvaeuSpI1hCaMK83feg0Cg6k4ZwhkNxkZbpqG9ug5Hjr63o9k5JiV3DElMYA2X1bjlJImxFrhrW3bjzw9PaDbSE/D9fUlxhj6PkCSA53UiXkyFq3s2fd7pm7OBqxtaNlutxKAHXuJqcvPlzycOYxeZ9ZW7MXCJpx8D59zi4Zj2RiThUxZOaonyHSuSYNApKcjxoRzYvGATjxtjmefwUsZodIg67FuTGtYjCnzlBwuN23JS9ZyTIK0SSB4oAsNx27PjkdKanwKhE7e2+PjI3cPH2nbIyqjlk3f0LQHNjtx6+98i7WyzYgp0MaG6IRHabwVGx0dR5X/SxmkA2KvrJFamhK+l+G0LGvm8wWFdZhUjqicnibwTCnJyox858/yvpEVZkIauMuLK26uXtM0DQ/bRywFyYpVlNEakxxaW5KVKCrlNbWtcchZN3xxlTRGfY6yfPJMNWoYsPUn2cVGKUIyouLM0VKnH/orNmnnw+hA+Ri9GjHjiv5sdd8HNMX4+4bnwUYCbWq539zz7sM7NrsHtNM4bWniAWdEURIzvErspfP33csf2D9Y4yach0mHzGRVR8JZM05OUansXgxaSYBqGm8gUVxCYNs+8OO7v/BvP/5XOvOEVwJ3H5o9+/2eXbOn9148uJInxIgPHSGKH5v0zwFiECL8QNzXCp1VWVoyTKQxUWKXkPLPMUqGWQiB/tidgnsHplKW/g8PX0oatMVkPyejHR4h23q6FzkP00NtaNoGJEII3FLs27Y/mz60Bm1i5q3FbIKpsLZAa85QvESUqdEmmnbPx8c77h/ec3z1Jyp7MSYfPOcixZRXxyEQkyIqMRbWxqFtlLVPgBCSZE1ySnE4O5DHiSW+OJ2plNke6kTKrYqai8Uai2I5W3JzeYMrK2pXobOufliPymHhPt+wofEJfMi6MqUlaUFrZuWMWX2NTZqH+3ekBOv1Fbe3byhURXf06ARfKvKOIxY42RCnnCQxdBRpyvU7/9n+BvfrtG7/lFcmXFywxuCjyP4jCZXNoDWQdCD2sp7SSdYmRiWSVRA9TdNwf3+PxnA8Hsf7djabMZ/PxxQOuZf1WdM2/AghyL3qHH3DGSoXU8SowTxzQs5XJ0NXbU+EZJV/74B+9G2L70QIE0LI4d49pRVLAgm0/sKRWSX61BJih7HgQ8Pj9g5dQrUqWC6vRkFTCAljHCnKijMGizH2s2jbgMh3Xcdut2O/39ObjjKvwnyMoBXGCCqqs9hmQNsiJ2Txc+O0DG8aHyY3mTpvuMa6Y04N28XFBcZpNtv3n2wCRl5jnsyeC2CG3FmtLMKsFVREOHkDB0xO66hkgO9jy77Z8v7uJ/q+RWOJvdyDfd/z9PTE4+ODIOILUWErC7V17NuITw3H7ohDjO5TiDThQFQ9Xd9hfYmPLUoHtBtWPUGQ58TIbxtEFEpr4fKiRoHScrXg6uoK3wW6QyBG+bzViw3M5ICYIljPnRGGzNakqOyMq8tXvNre8+7dL+yfdpTMwRlU4dCFpbQltjLYSqOixeG4urhhtVhRmAKxKMt0ixfr13DeStyl0WU2PDafnFFq2B6NSJt60R7qazRt0/I9cFrFnUHOMjuqyYXXGbw045Urz+7hEWnb7rf8+uEd7+7fs+8OJCMOyKH3OFdI05ANS0Ns2Xd7jr4ZFR//yK+BT6VGktq0UY2j8qWnp+08XQspWqpqzqxcjLEaQ+MWaNkdt/x69zP//Yf/Sms2RCuNU595YiEGOWi0FrK7VqMaaJAJj/J5K+KRpCfq3cwbG5o2UWYqQWESo6w7hJgPqVqiVqYP51nIddbkKIuzJcYUECUloMvqq5GHlg9blZu2/f44vi9ZYciEJxwQi9H5wRlRFXHEHmXqScL/zg41It4HgvfYSmPKROgSm90THx8+sj8eWC+fQ/Xna9oUTybQKIPSVtZcQ+YILyt7iGEsUeI6MjTkL8Pq0UeUyRFeKJx21GWFU9D5yKJeo4wd+WUxnWBw4WA8P6r0WSPUtZ6+l0bTGJcVpI7ZbM711TVzN8f3DY1quL16zavrtzTbkq59mYP3N/M1RotKeV8+CKncafMJcXxIFQvPelA1OIEqdda0DQjrmR0ITBTqIZspJ/FrS/mrR53X/4HgW4ySoSNFQSK1EpFKc+x43waaQ4sPHcYYnp6eRmf+gds7mvxybgkyVZpaY9ClHdWeL9WR+Ayl+YR4PCEnD1+jKAp0ZqIcj4LIL2y2GflioZfUJR9a2nZP0+7Y73c8bR4p5gZTL8YNQYzg+4TTBmdrCl1iBg/PM6TtfE2pclMwcAGjOt/NyLOuccZg0fg+EZIMq6NqMavoP3m2Jl9paBCZkFhSTgsZBkVrLWUtpsmz2QxlJlYX8UTIH6//hEdLSqRcFwa0xForA2xK+F7MtWXtGHOWdrYuIuJjx9PugRQiH+7eg0+j/1ZKkeNRCPdlWVIsbqjmc6pZjVKKjgOHriaa7NlmczSaSqhCZWl9IpmYRWfhxFfEZGrOsPw7eV22vkVpUQ5XZc319Q3X15fc3z2wafaYuONyoX8zHeJ3hTEZHNPK4HCsqhVX61uW9QqdLF3j0VG4gK4omRdz6lKC5q12rGdrVotrblavWBQLHIP9mHrBqf743VKYAAAgAElEQVT5mnRypnxmsNBKP3O64z+kaRv8bIV+4Sa8bz16IQ7/L8ZzRbn1eO4fP/DLu5953DyIc7sVfhQ6yfqri5k4qWijEOY7356Z+f+jrkb1yGUIhAzZx3zgR9Xx1H2giy19B8dD4LDvMbrg9vYtZVllWH9A2aRsd7Fhc3ji48MHNvoe5SLW6jNViTVWULPkzlR0KYUJYhVF7Ts0a+bE/4lJTskYB35dzChbfo4iBB9ZL9ei7FqtMvdKklHO7vFkgYAxTpA2YyBkX6eYRiXVc6RtKGxiRCkFKPih2RTexGHf57Vr5sqlMKrUQuxZrRaE4PO1P+cLBQKaSFEYoos07YGnpwf2hy1hGU7SETUc+OqT9YfOzdrwoEelcyESxJE08IkYjSZFD0X2CxrSF/TJl+T5ZBoTSUkjoVESUaQNZYTCVNI0jn8ykVT43RXbSAjuPZ2PEsZi3NjsWisy+5v1K/ruSH8sefv2W1arNd2mp2sDXQtl+aXL0YwK5gNUa5vvHf3ZJytNNDq/9XVfQtrOM2olZzbFgCKg1SD9T8QQM/ezQ2tJhAghyNraKskK7SNtHzkeOqwThO39+/d0XcfDw8O4Oq2qauR1DdwuJiT4EAKFUsxzMxCj1MtClWeHQ5hUy8GctVU9yhgRmUyawqIoKKxhNbuk2XgKClGGHw5czz9Fj//+zy+gtVgsHA4b9ocn2vZIcprdLrLbbyirGS6Tsq0puFyvWFYLLi9vpS6p3zrUT0pLsXM4eS5iIiGFLFCS5IsYIz76U5P3GduF8zhmdUpFmGxBYopn/nZDLRpQzr7tnnm8xbPGbfq1z3iWWQEsA4VBJz2mDUYldJTESXwVSaQQOTQ7uuZA8hCaSPCdNBTmJAJUdkZUS0wRcbUkGJgCypmljXZ8XwGFNYZYRKJ2klNrICRP37dg83WL52pzhcY4qbehE9uNEDy6tKOn3l2UaKtgLeYbWVd+ygWbkoZ+4yXuSZIpi8diuViueX37hvvNA00KmMJR1zXL2ZzFfM68njErSpwquFm/YjW/YFFcYCjl+U76VER+B2iWR1X9Zp35/9RRNp1MsEfLjgnSNqw9zeSem9IvhiFu+jzYQODj40d+/fAru+OOVKTs3NyjrJCzoxKuAUrhY0/rWzFyJfA/wyvEQNMcOBwF4j8csi9a2vNwfCcE117RHD2HvURDaVdwe/M6H8Mi2da5cdOFIulAl3q5tiaitCaqNHb8CQnD1raYfHhAKlBEnCmE2Br8iEZpBGQYEJABYcu6b3Fez/8/Kglyv7y85vr6hlW9RmHwfcDpCUk8cUbGN0amy2HdWRQWbcQEVwpeIEZhlCglxPTFYsFqtaYsarQeTDUrymJOc0xo5fLBHOn6hv3+if1hS9s2fP/Hb7i/v+Pu4zsOh700g3mCVYg/WlEWxCpx3HRs9zt2xx2e/mz19qnTdHZL107QP2UIaZi4QVl15h0WQhRlk/dCXp5GZU29+p7xOkZzy0lwvVUGjMIZKwqvNN1W5RDZZz5mL/NFZC0kjbk0mTFC23n6PpCiYrFY8P23f8DoG755/QYbCppmh/Hhq4w2Cc7i2Qafv0/etjr93gGb1L9T8KectpcI5sJvbEkxopKgG5peciCD+Fg5ozBaYZTChx494Y50BIwpOR6OVJk78vHjRx4fH/G+P0XK5AHkDIXJdcE4I4dtoVgulywWCyG+9x1FDskevN6Gom048ec+bPfCtzPCQwpBOHFVWVIVc7578wc2dwe6rURZ7fd74m0UhPEzaR9/W9MGhRbfQx968VtUnq6D4/2B5WrOm7ezrKgsmc2WXF+95ubihm+/+YNwZ3/jQARy5JOIL5Lqxi2AtZauEW88rz0miektydB2DV3fvNisvaDyQKnz7WiMOVZq0rQNzX/TNIT7e3aH7SeE8DMe7uDLNgR6Tr4nGUiLzKMzGCMiL4xkGoeU+bJuQLiEX9l3kb71xDbifUdVO6zO43LyYvLk9xKt18DT05Z9c8SnIKv0AYXXBqcdvQ04rTFJEmT6vqP3bfaNFFuioTVJGRcfBiH5WoHWt5Q2jok0g1pZuep3hEC/37BMtzaDGf+iXvD999+jCk1HRFtDYR11VVEXJVVRUpkSoyzzYsHCLUf1OX5SbKb0lPQ3ctBU/Mza96//83/r3zlc/zNOWwzjMBhTHLmtwm81Y9M2WtGQsB7ZtW/29/SpRatIiD0+5ZDWaU7egBr4cBby+h/6Si9tvOJLW73PQKYv3k+fJTL20dO2ezbHJx6f7vj48IHHx3uedk8c/Y7H9o6gegiOrg20x8Dl8pZvv3uLGsQb2W5VY4kkClfmbltRz0piEbHZk0zinORDDKrHudmz6e+UgagxHLeH8QbQzoqdgxKSdsqecFHJxRrQiaQUKitWFrMLlrMrHNkseeDNPTOz1IBBYyiwqUBHhw5iYGg1mBx6K+895PQ3w2K54mK+5vriLavZBUVRUZiaqpIUgKpcoq0gRCH0HI57Hh/vuN/cczhs+e7NG1QwPN4/4LuEUh6jHUZrnDaEFKR4ukiTDnT9gdA3RDppkpPJWXLnujOlg/A/TEbbkkJFmX50EjF+UmZESAMtPh3pkxCaHZFkhouUFbbPIXv1PK4mpzFgTkoldQ47xdw0aqSR/62Iv4jPxrld/j2G5A0hQGg8sespjWVxdcty5lgXSzablubYUeoW9YXiUY0mpI6QhOxf6uKMkO59xBX67NmcUnzVIDwZoqwmX1mOGYdRDrC5R85SYgleImTUWfweRBEXczM9OIkXRTVOtUOlKLQTCxAVKcqS5hiwFGhVcNy2tP5AYTQ6CYpilAgsQhJ/P4U0CSkknDNEn8Al5tWcuhg4KIno8jVwg7mD8J80JXW1YDlbc7f7BWU0xij6mAj5fbrSUs8qrl9do5Lhsd/Tx5am39LHBqttvu7lFzfeCiVGscQc5wZd6NjuDuy2DbxxlMUKazZU5YpXV295dfOa24tXI+dz+ERFpHVu72+yWtM5Rx8yF0krtJI4OmtFRRtCzOi9p/fy46Um86yiB515htNf9ETV4ulpgtgn9SpRaOiTZ9/uSceG+6d7rm9Wo0o7obLSU1Sdw6GslJlYW1gSHqM1VoNPXTYZL7GFAQx9CMS+IWVOrBo8J1PA65AFVAGjFW4mUW0+BlST8Cpx6Hqe9ju6GPj48CD0pMm1GEjr2kETjiRlSNlnrgueznvxh9MinBt84uQulAwMrRIqBqKK9P5I0/X0vaTotL3k7XrjSSaQjBcFqNIjS/gEcmkUk+dXfe5w1fggUXsFc95e/4GyWKJLsUsxyuCMJFNYDEIY0fjgc2KHhSC5qMp9vRXfc8mB+mzH8PIfPn2rcUJkVmNTN6V7pzyqam3F5zMVpNQSothsBRIqDdBkQtuTb13gpB63PXsO/pFt80CbdizqEmUV9NB3so5a1itUcOx3e2Ib8Mcef2iyOcMX9mDhWYZeIpuiZpsK9ezMUucFpws9zqizQyCGgBVd88Rf4PQxvBj3+YnbtnCntAZda9798iP/17/9H+zaRw7tA0+7B4L2/OXdD2hrKU0BPaQjON3h23tUbLBqiVN1RiUCEY1NZSaKl2zjFpcC1liUNvhsNSHTY6Tt9jjnxLuqbbJB4gxtFaHvaPpWpj4s5OzR0dHaGrQRLkfXdaAVzloeHx9p25ZXq29Yz264nL/GUJKSprClNOgpJyJEKBxiiBkUf7j9A81hh/7RctdC6o/00ZNsxDiLNYo+SDQVSqE6zVX1hn++/d+4XL6i0itKM6M0s9MOf/AANxEWicNiy93DBx63H1iWMz5yTxHn1PpI0+3YHB7RhWK2qFE4uiOEXtzrterY7z9w2H1gsajl0I+aqpbDIiaPNglPQ1Ubou9RPkJSBK2IHWhTZF+9gPdHjPPoKrLtH/jXH/5v3n7zT3y7vkJrS5Dj/JTkkFdCXZ6MqrKY1Bdhw03ZOYbz+19b9VeXDjFTeCDpRw7HHc2ho7Al4dDQmpalLbldrimKigUzAond9oApSpYXJUG1JFX+3c+wAmpVnDyLp8e1AWf0J8VRnz17kRQDurAjFGcVdEnRxcSiXlOaOSpYojcYSoxWeD80N6JKE59E8L7n2PWE0GdEtiZg2Oxb+pCycCByv93inGNRLYkBLleXWFURO0ehK6raUTiNdZHlfMFu/0CrPM4ZfPKoYKjrBUZ5IYQ3HUFlLp9xGKXFMBZNVZf0XvJPNTU+V4HaXLCoLimqGe83P1GWjtV6RcDLNiO1pOaJoDu86tj7DU3Xsm0fCLqlx+BVFOUZX9J9GyKGoiy5uLqgfO/YPHhsYXnz5hsKe8Fi9ppSKz7+6ml30HcKZ2t6AvPJClhNPovTsl8oEaR8WEVp7IKPaAJOl1SmIiWFwVDP57TbyNPuiT729HRIMq9Ye5g0gXfHeV3cgbtwwM2s2Gqohl8e/sK2fySUibYN6NTjNHTNAe89tnQcj0esdgQ0N6/fcPPqG6JyWDvDJ5Ndvwa+nCXEBqsFJV/MK+wscn94z8wsWM+uCGEAOBzNrqE0mhQiMfaQAkYlXKlRpZNrYwqSdbL6cgpbFLhqRusju/tHHh4fsdqM61hjBuTf0zU9FJa299Ta0UbFw35Lk8QqJYQGVxYjPUcW9C21VsyN5afdE2blaPonlC358PiBze6Rdx/f41WkCUf+27//n1TVjH9+U2DUnGP0OF2gzdRYQ5+nzzxPr8hnb2FmYxSXoebNcj1ZdetzWlKuKKJZydXDiMXLWDjNpEaqv33k/L3GTP3On08MtLGTAbRBn7YvGSzJ2ubs16ko3JKquMa6Cwq2Qq86dhinx5qZkAE1JsY0DZ8HIqsBWyiMVeCloBhjsMniU0QnWa3pJET0AVUxX2kXPB5Y6XxfPtT7EE6bpRf4ykQlqWzinTXlGE3m+jNETv/2Lv4ZsVGCRFqasOfQb9j29+zDA3seRSywEJd+S64oCcpKURaGUiMITsqWf0r8bVQSFMoqjdMapSM2iwdUHG4B+e+2DzmQXWBTTCLpSKAj4Ckqd8YpG3g/xmmMEQ7E8uJiVHB1TSsGr66gsCWzYo5Vwr2LSmdpuxq59RLYINy50pasZmtuL16z3x5Iqeeh+QXrNMoO66PcPGExyeBUQWXnzN0FF+UNFStKNRsflpBxrGFmg8AchS8jOmg2T3eYWLGeX5NCTwgtfafH66qVE4QpyZo4hp6uO0g8zRD/Mr1nhrUmCWNkbabyOtIqS1A6r3AFttdIgHJIEas1XdjzcXPH+mLHXEkUlPz9E7dtBdZKvuJL+uqpXfPf1CF98vIkGpyJlNpy9BrfR0KrKI1lPqtYFnNBkbC0qedwbDg2DfPFjp4DFY4vkbcr/nrLHzVpVM9Gr7P18ClpweDQ2qGTy0ahGhU1OnmZYmOUa56fHaMSKuUYo2GlGUAsJRNKWREhkLA4jKooXEGla8pihbMLrKmxRUFVGFwZeXwqSaGj9zt8EjKwywptZww+JWy2grGTdcaUGH/aBWgUDgcUtqYo6tEPMGbPrJQVhz55VFS8u/uF7ebA7rihVHPa/kibjhSqGM18vwQr9SmKEMCVo4FwiD3OzLhcrVlf3hKDIUXDxeqG/WbLj3/5GXxg9i81V/Ob82I63ZUPysFsnD0Ilk53f8JghDMVz7mqIUVCipgxji6ei3CeN29mCOXqSHQ8HN7x7v5nPAFdWmnMFBiC+Bcam1FCeY+lLVnMVyxXa8q6JqEF8X7uGps0ioTTEkNWzwpskHfd+5aujTI7JyscYS8IcYrCa4u5+S9Li61mbJpA1EZYEpn72sVEaHu6LnuwOUVpjMQHaiPcXhI+nrzHhvvIx0CfQ+lFC5TGM1FnlM0oS6EszkiUVlUVlEVB07R0qaXr/LiSe3j4yOPmI83rHbUyKF2OH6/voC4+U5rUy/fbdCVp/t6C8zVFAl+MUw+8S53DC6dL9JibVD22/mpAEdUMoyuIsqJX2TtPLJGC+JUOKUmjcXMWMjgKqqKmtI59J+sZawwFDhXyGiDv+IfMx7+WJP13X73Jv4fRtDU3PcOPgUOjFSn7PSeieNsaddrRfOGHHAijz8/xeGR/3LPv9/Shx1qRjxvjcFGRlHx4gzpJ5OCf5+oY48RPyqgsnTeya1dmVL503QGiKBBdYTIRVkFelxpnR3sP4XHIetUkaXzn8zmvrl/TdR2Hbctxt0fjWMxWXK5uWM5XWFuccBClPqsoLGzBen3Fsd+yOTxxDE98PPyCtRXKGI79nhATVVVgdYFvUhYPQFFaKltQ4IYkqdPCME8jg5GxxrKYrTCl5t2HXyjLiuvrG5T1eNoM1XuxDTGnZjGlIGhLVtmdHq3BeZy88hDJuDXVaKmRkLWQdaC1+N25ZDCmJPpm5LEc2wPv3v/Cev4ts+sFMWl0jpdKSRGVkiSG38DKIl/LBUiaf5OtB2ySidzNi5FfdSofge1+w+PmkUO7JXKJNopIlOnw/6/Xb9hFTIUIZxSNgYOUA9+0tmij0dFSRIkHMsZQ2JKu67DaUGBwOWEiWqiKglm9yGq1BfP6ill9QVWuKKqaqlTYMvLjz4nN9o7d42NOMOmxuhDOIwbftnmgkqvc53QSCXiOZxN9HNlFhqqcsZjNpdBHde6EjiH5QEfihx9+oNsHjtuW6ODQHoTrVaw+MTz9+/i6J+PqIe0keKFOLJdLLi/XGK2wVcHbt6/5yXf893/9bxx2D7y5ecv38z/9/l061juDCs+i7HIzNxxMccLf6UKX78/0KVdj2MI2ASoFWmpkj2cXt7z/+J4PH97T+1bsjPSMNjSEHsrS4ZQSj8s+4kOkLBzr5ZrryyvmejYeH597Oe2oXcW8mlE1c/H9az3NvkUj/Kx5vcBql7lqhqQk9q4qCpZ1jZlXbNsNScsQqYWUKarOmOi6NtOUrABNTtaHqCAWJzG3QUmUqxGP73qxucnilynCPwwNRheUxZxZeUGne+rZAmcs4Rg5ti3KG2pTYFTBYdNweNpz3DfMFusRrElAiF+vkv3nfOkJJvi8fck1K6YRlTR5rHBaUNPSOg69GQUr09SfgUuplZYc3AkgZTWKupxR13P0/oHYR1TM00/oUMi0qmLIRXR4uAJnLvpfgauWnklzZfWRiCqc9a9p3CIPgSWe3ndoFLUtMOSld0wInnzu4qn5ffXalEw7OGofmz1Ne6APYvOhVMrKMofuI8F7XOGYzWaUL8ry9FjEBribMKyG7IiuTc+xgQhqtSZle4+oGPwmqKpqVD7FCDH2xJCIQcwqy/WMq9UNTdOSuh/p9onVasU319/yh9d/ZrFYCyJBxPuIse4TxDFKKB0Gw9zNqes5Shm6ztMce8raopXC9ylfV5Flh9COru4phcEUIs9YU5uAbBoxulODpWBmFlRVjUVjC41SEWNgsZhxbHYcfQMqeyv5gAL64NkfdqKAgzEofUAilXIZx3SUrpIIlRwMr7Tw2SRWa2jgCppDC9lKo+ta3n34havlT9yub5mbReYUksPmszrW2E9mkDRZE36tgbEyFcorYpeoyxlv376lqgsuFkuUUTx2DxRFRYzw/uEd7x/ecTy2BB2wvysF+A9q2tKn/0sr4a0VRTEScnkmLAkhZC+/iYUEGmcsVTWjLme0qkElsaqZVzOhTaDFSLSesZqvqco5i/k1s2qNq8T41hYaa3qeNu/BDPSCKJOQMwQFXgWpO+rksdR1HYe0ZzlrPmmIp1d7VlUs5iusEmVe9IIIGwxRxaxW7jg8HkjBEnvo6TkcdxwOB66KOCLJX/KyxrL3B/bNga7zY/7jaOYbI2XpWM4viSvYPT4SU89ut+GwffrrjjZ1ylsdGrORI6a1wFl5cPMx5Z97UYwj5rSBhCGSktQWnZ15unSk0FZ8K4GOhqfdAx8f7njY3NM0DUVlsdrQtaI2VqbIjRwc+iOh66iVRDNeLFbPxEunjNU08SXTaJxzWF3icJKC0CVSr7Cl43IhtIS+lQY+9h7rNHVdUhbC4e3IBrzZxFtrhTaJEDuSl3tLXAXyQBrEmD2E7GKQxGsxK8tEZd/1eWBgYhg7ZSU7SjdjPltzubqhUR2LywXOGB4fH0mNZjFbU5c1KlraXY/VJSqj1dPcgKD4n/6lzp5vPYotRj5kOi3XM5EGh6Ew+fzv81CjDEqF0QtSuIhm4pV6EsdYhWY5W3GxuOT9wzv6tsGWCpVhT6OloMQYMdaCJSMa/uv5tKlIzD4USk04TmQjw/G/yUrMlJkhYvm7b7e0hxZnLHZxkT2i9BnX5u/DS7M1bm7auq7L7uicGqzRcPWERpZlmRVjYsr5vK5KdI7FmoLYCXyuohodtmMKo2K0sEbWxUqiUlSCzvdi5IjClfUoCVaxR/Upv2+LxlKZGbNiieoLXKqZqQWvlm/405v/lX/6w//CUq/RuQELHsrca8QgRSSGlGX5aYS3Q0gcDw2PD1t8D75XFNbi7JykZPrq+0DfB3x/lDDuFDjTDk6ui9bqZE+iTy2OwnJ785aj3xAfe6pqzm35DVfqhvuH9/z87i90Q4h18mitspjhyLE9jANFTGpckaqReWApiprFYol9KOj6JP44pOywntfWowO5BJ13fcPj0wfuPv7C/fVb5je1TLQZYdMxSPJD4hNl3XmC7ZfD8wpNaWpMlFXi5dUl//t/+S/M5zVPuy2b/QZ9r5nVC2JMvLv7lXcffyYGReMPRPz/oIVQCmDKB+N09T8gNHGIM9NRTEJ9FnFEKF3Fen7FxXKNr4Mgy+Wc5XxFZcXlvSpqZjNBxAtXU1drXLFAqSK/gx5Fi1JOIomCoK+2MGC0kBOCJ+Xg87J02MKI5ULOnDwZO58moIG/U5iS2WxBUVQ5p1LEC/KsZ5l/L/5Mzji0MzkOas92+0S3bvJq+0tfhq71fPz4wN3HB9q+GzNWP378SFGuePP6D7yeXbNPLcvVnNurS6yRBuivGdoHi4xp8z34Lr5EsokxUx2yAyYMOblhsq+Uc8LMIamOQKSj4fH4wK8ff+XD/Tuenh5o/AGlKrRV6GhJ3hOaiLMlZVUSGtgfjvi2R6MprBs5WuOg8LlVnzLEoCBm130cViUW1ZJXN6+5uLjk6f5BhtYQJflkvUSTuH+4Y/twJ0bKWdXsrAOdYwCTJ+lEUUqD18ce33ZiQxg90Sf6/PzqkNB5/Rq8KNynDaYUP5M/7URZLFgvb2n7QJMarm6usMZQccfB7kXtP19ilKXdel5dvaZ2FYLnn1rAutSo/6kbtnNm3POGbcqc03mJqvI/jdajndgYYaXSmbGzUkNGecxWX56QeqzCsJyvuLm65acPP/B0bARxcQLTG2PwXYdOUkajQcJru4aOhuIrNGzyEAeJ78g+2BFP6xsqWyDOWD199PS+lfzNEPAp0HYdm82G5nhkUc8pjaWal5gXsbS/D8oNwdNmfoExBltW9OFkrBljJIWA7yM44YdY6z5fwgbfNVcQ9wqiJkaxhsgaBFH/KGmGxg8yKkIUyXjoPWjF4XCU6+UTfReIfVYsGYdRBaWdY2NFqQzXi1cszZrv3nzPH978me9f/RPhKNFU3dETwykETg4dNxo1nq2Le0HlYoT5bI2zjlk9Z31h8bHncDhwbA7CJ+r7jIhMzR5ygPYkpmnkrybxSpPGU3O1vObpmPgYPtC1kaquuLy4IPaedx9+pTtu6ZoWHZMICCI07YGma8c7IMZ4IkmO94GlsjMuFlfURUXXHgm+J8ZEwGO8kYisbMFgnBHfp/6A7wx3j7/wwy//xnq2Yu6WlE6QVaP15K86Xx9MlxUqfQ1ShcYky6JY8erylqvbK7779g9ok3jcPnJ3f/f/sveezXEkWZru4ypkCiQEVbFazM7aXNv9cP//H9lrdmfGuquLRQUSQMoQru4H90gkQLCK1dU71rd7UcaiBJAZ4eF+znteweg6FssVILnZXvPp7iNSavbDho6OgvbvdENMeusJaTst2k6fO6mS/6ALkTBGRCwo65qLs2e8unqNH8FgmFcLlvMllWkQUVJqQ121SKPRskRRESnwqNwKprxYKVRq3aTGFAZZqiRYDJ4xepRWmMpQtQldT8+wO1HsPdqHsoJOoamLmqqoMdLg3Eh0SYgihT7GyqnCUJmC6BRhCBz6A+vdLXu7pzDN3yBGMIWH3222XF9fJ2SqrnDBsl7f0bTrbGIsEDgKJTlfzVFaUhXmG7+DPPJuTxHTlN2ZjL6JMc9tktp9itmbsHeRC5SQczQckRAdiI5AEm6sd7e8+/SOv7z9M+8/v2N7SJGM1lpKmcRfNg5ECwUFV8srZsWCn+w7hEtRRxOzVk6csJDEWE8FT3gfwUl0Tr9RQoOStEXDarHicnVBGDxt6THGsFqtWC3ndF3Hbr3DjwGjJDbbMYlsmJt8QF3Oz017og+W4MLRuYEwTZokwmVtcpBEn9wdHhbT6oQsH2jKGednlyhjsNEzP1tilKA1S4aup61qFrMlWhvs4GirOXXRTra2/+fjCZTnOBKNTydDnOKdjqTcJcRjbGGiOMlj2o+U8Wj6nGhPUyavS0Xb2eycZxfPWTRLtocb8DlL8sRPJAbHFDrjgk+5aOPArPjtbzs9fDFDjT5zQzr6YcfmMOLCyOgGurFjGDuGoWN0FhtS0bZer7EHx+X5FbOqYd7OU2bXr2EbPrZW4J6wbq3NYccjupTosiQMY1JNZpHIFDUjitR5p6xM+eQyF0Jl2wqTxqIxe77khzamOL6EdAqN9yPOeURGOPtDn8bYRjP6pAoVMZG0tdQYVdEUbRr/qQUyJN+b18/+gJGG51cveLb4jpoF1AZJyRB2PJVVN8VJTZL4RFxWtM2c89UzglkhtGOxWnB+saIbDvzlL39mt0meaoMdTnLTwpG8eeRZpCQbMth2csSpTBgvIWr6znF3u2XmSuq2QmXOhe1TEWuUyJl7EWsHrE3ZuNlhkCn+V+sAACAASURBVJB79eksFUJT6IrF/IKiaBChJziPDSM2DChjMFLQ2xGTDxs7Wqx1hCi53XzghzeaRtVcLp9zeXlJW84e9FankgPxVMzLb2xTJRCd4GJ5xb/83tIuapSU3Gxu+HRzzWa3ZtNteBZHTFmy6W7ZDxsKU+OFzRL0v++PxwjNw6LNUWidDjofcC5iBDTljKvVC16//ANyVGgMs3LOolliREl0MaUkaH1yqBli3t/C8d5ZqmpGWVYUVY0pJUFFrPd44VPCQ87TFSqFdY9+JIQ91nVMplIp1FzkoG+fmgtAS01TNhhVYK3F+4hUqQtPnfaYTHbLkjBGhsElpO2wpe8PBOP/JvSUKRJrvdvS9z1VUxFFwWZ/IMaYiozlln7oUvEQPaVUNG31i99/igZ6qmi7p3WEZCV1FAaEnJQwBaxHoEAQCYwM48jQjYy+w/qOIabx7np7w/XNBz7cvGff75FaUBQmxQQpxaKd08uBbr+nNhUvL18htcF2gf16wEiTJh7qHkVxgUSzmd7JlJlMYBxcFqFk/8ko8TIb0giZvDR9ZFa3nJ2dcXZ2RqFNSgGgwKiCqqiwo8uimrTLBu+ILtGR3JjWV7KdUUSRxFrep9xQESPSJwFZsi2KRB8JOdZNTby2kCpAiaYyDeeLK6pyRpCkyZDSLMtL3JiU101VUU5OAiGJF+5Njk88ysT/Kdl4qmCLj3kxMVuAZdLOSe71vYuC+KI5DSH5gnqf6QLeojWGWrcs2hVN1Sa1TsxqzJMbFWNEyLRgQvA4N+K8/Zu9+ZC3yglnS55EB65vPmB9T297DsOOrttzGA4MQ4/1ie9wd7fBDxFEYPfiJWMcj93PFxdUPOS1fRtZNyGL3ntMNqIUNhJcOGbTTfmaU0GWXKSfOqBPs0IVUcjkmSNk5udMGaf3hVPyfQrImFGuLo1OZIjM6xZkUj4m77KSppwxq5c0ZYsRJTKUlKrg+aqmrVvO5mfMzRmKEiiOQK848Z6Qk0eYiEdwN5DQNa0N8/mSq8sXhMLiYs9yteTF8+ds92s+fPiQUCClsHZ3jOCwDJl4PZmwKmK4D/KVx7Dwe7VdJIWAu8Gy23QEPzJftAQrkEERXSTYZN4jpUqoS0w+Xfe6qfjwXuSvrSloyhlG1ogoMlekJ4QR5yMqJC6TrNIIyzqH9SnP7zCsub4VNKqmHzqk8YjzQKErOPZPpwOFR0iv+NtsGd6GZFmhJRhP1/d8+PCO688fsXFk3A2oSjKbLehdhwsDlakpCk2J4e89O/jnzD0nOkKMKZmDEBFKUeqaeXvG5fw5OIkJBa1ZJCQkJjTkmKclc5pFyEkO2SZJZa5ZU86oyiYporXAhxEXPFJIpBL0tqd2VfJzdCNyFDhP5lR6pgzE/CBDEEcsR4oCo6vEwfUqKWODSv55GWlPJpsCoSSBgdENDLbDhuGouv7r99ysVNMKqSXWpq/flguUkfR2pCg1/WHHZrsmuoAderr9gUJG6uLbPeIex3SlolQdI3uI08OfgmSjcATpGTigKHB5TDqOlv2+47A90I177g43DL6j7w9suw3r7R3bwxpkoGlLlDSMw4CRmraaYYLBd55aV1wsz2mXSz6+uyH2NyhRZAT8hG/rJ39M9WALsdHjfUTrEqOrxDkOAhEThcbbnBc5jKh2xqyZ0+oZFss4BGTQlLrBmZT97UeLiolbG20guJSUYJ1NyQt6cggQiJz0EX3MFiqg8l4jQuZIhrRf3yOEInt1gqGkLsVRQAZghEIqSagSMKBVgSFVr0IlC6eURpDXcfSZfKr/yQu3R5VE/PqTxhFLzuP/4B48G48x8/SshHvz3ZA4kFqgMFScLy+5XF7xw5v/5PbmmjoUtKua29tb2qomxMg49nmTEfRjx2E4QP3bNv2+7ykrkwm5qVjTUhKE4z/+9P/y4foNNo5EDbvDhs32hrJO4eHvrz8SPHSdpTENt5uSt+9/5PV3v6MuW4K3CKkgm3+euJ2eHKFPRA+Jhxc55YMFvLcMw4jPI+Ki1Nxsd7TNguhJWYWFPUbUTGiSs3lt53tSUHF2dk5ZlinvcL9mVje0s4pu3xPxNFWVAqGlRAuV+DpIKlMzu0jpBVFKokqxJFVR01YtbbVIiqaixaiSUlQU1CzqM5ZXK9qqxZgydW3ZRR9gkT1zjnCumdQviTc0javSBiu5vHjOxYtL3lz/wGZ/S1nUnJ2dY0pNYSrG0YEfaduWvu8ZxxGTjUBFTmOIJ5FAX1vvkRR5dTj0bDYbFsvntM0c7x1NM0NExYtn32FtEj3gBbJu2B329IzUBKqq5cGtzt9oVi+5XL1i2Z7zw/ADHkszLxmCYxgOSFknQ1CbHO6JMgk/vGDXr9ltttSmZH/YcnP3gZcvv+O7l685X15SUAKOzvWUukUSGcYh+aj5xEGs6/JBAfK4ODl10//66N6jCs3Z2Rmb7pY//eU/+Y8//zuft58IyhNF5PrmA3ebW5yLLJYzDvsDt7c3f/cFG5BU2BnxN0YTYkx+hapkNpthbUdRaKIAawdKIVi0C86Xz2hZILXBUCSDzqhSZEiUGdINPLbX1EfHm+ypF6CtZyipGYYOXRcpN9YmflVZV0QB19cfiFamQhFFN+4zF9cdM2SlTOsnZkX6anlOaSradk7f98moWmv2hx2ekdmsxQ4jh8MOJSratiWOlrdv3/Di2Qt+t/zDV4vZU7T8a38/7YWtaSDvT4vFjGHoGHYjq/NLpJSs12ui04zdwPuf3iJCZLVMqNG3ntfz+Zzlcsn7259wwVHU+phJGiIUxiQ0MkaapkYayY8//ZmiKKiLmuAjh13H2KekirEb2ew3HMYdu3HHdrtme9gyuiEZuBYJcJg1M9Z3NzRlxdXFBV3RcfPhMxLF92ffA4Znq2doV/L65XfMi0VC2OxIaSqKQp5sGSGFtWdfxtXqHPOmpCzrZPTtI8YMhBDS9MfaFAflPednF8Qm8vbte3744UdkhIuLSzaf1+ASADBaS3AOP6QIKqMKYkj2NKWoknJUSSotkJU4GrJHD5KCWbHgcvGSupgxdCPNiajiAWgAFKKk0OWxOZ4+DAajp393Ylqfz9H7fy5Ozsp/XAXp13KEj3t0TiRK9lMJDSW7OaQNJR592yZh3L7bst7e0g97gkjG+qdZwiEEgnS56YtHOlpKuvCpaFNAU7QsZmfMmgUHt0FGkSDa+PjFpriNCbL7rR/GlBmIikdUJAD92HPotymfbNwSVGBwB7aHDQ1F7gQ3SF0l9+sgGdyBgz0wjB2UgSjFCcglHqzf+OAU/4WONDicSzw64SPCZz5NjBRFgTEGb0GppFLTujhaSXwJrIjjtZzIh6eVhJDxQfXivc8PpaGQJbNmxaxZUpgKoTRV06CMptAFTdlQlzPKoqLWTeLqRE2hUxBvU82pdEo+uPeUkT9zFZIrv/P2WHBWumGxOMOMJV5ZVu4CFwe8j2w2G7b7DX0/JJRAaYws0KpAKZPf/b2iSYT4oLkQPCTqT4NF2w8QIqvFipfPXrBcLNht10QPLy5fMV/UDOOBz3ym2x/wEaz3uJz2KJ6+EQgkbbmgKZc0xYygUgZl9ColP2hN1/UQNZoSZcpkYuwD0Q0E77jbf6KTBzq/ZeSAiz2d3bOYLSlMgxGGSJGc7jTZk08iTziPp5mWp0WsUr/MIKnrmsNwx2a75tPmPZ9uP7Eb9ozBIlWyoDj0EqNrCCkqjOBxY///i6LtYe7uw/zR5LWnkvpXTrmnihBk9pnWSArAQEwmyw/e8pRheCoWEqccy2SiakyJVipZiSDwUifTbSkILuKiQ/qRYezouj0mpgIyTrAdD4tDERN/SgnJvF3QlDM28i4JkqJEy0SrmNZDDFk9GF1GkgesH7IQLK0dcZqR+Q2xQ9P1S1hbstAROhJiSpKNMglzDocdOMVwCAgnUjRaM2PRLk4a029HTB9kfZIyVsmH1rT/+RDox55dt+P99Y9oVeBGz253SMiVUkQP/dgxuIHO9SkSUIbUHGuQRiKNJOCR2fHAufS5bduitebgD9TqjFm9RK5KSlPlkuZkrHiyJvyT1zB5pEWp0CKNyZ1zbPcbhrFjd0hGvrfrG6RWrNdruq7D6ALjFaUs6WKJHVMh720yHlZKo7Q5Bq2XsqEwBTqnS5SmwmiNkSmnxoiCulwwb1ZcLC+op0Y1ftEF5/eTdliVBT+Cp/6dfKKTfuT8/48+/vyFZ0krmV3aTuuMHPI9GexmS+2YHF/ZH9b07pBGSyJbRYV4FI+cItLp1zFzXNOUUwefio22mnN59oyL8yt2ds0Ydoz9eERi7r1D4rH6s2747Zuyup+TxxPi9ugs3Thws7lls78hypEgLdb3BF1i0FgGCinwcsQKRTckxdy+2xHmAS3Kn1HEh6d/LeBhrHU4yt99sMnCN9wfHmVRYkxKkTAmc1CKInPaxFchVaXMMbx48raHcO9DJ2NSCvl0U2VQlLrlYvmc589eMZ9doJRmvlhkC5ECozSlThmBhSiyMWUy85MURwPAX5u5FnLqvFQJbWvKBl0WBBx93HO3veZuuyZiGfOaqMoaESMF5QmZPHEqpLiH8KX6OY5XIiKP44iUkmfPnvHdd99RtykTT6uCVy9+x3I1Y3/YMA6e7jDirMe5pO4ji1siKVJEPLJ8aqszFu0lbXNG72+TJ5RJCjIpJc6nuJ0oDVqVaCWJ3iX1ovZs+xt2Yctdd8NmWLMbdmz7Oy5WL2jqOZfLK4YwYlRFIct7vpQQJ07gfBFkfxxR/xISNWu53V/z7sNbfvz0A5/u3rE7bLBiRInI6AfoodSByqQxn9ee4CJ9HGj+zvfd5A2pj9m003OXioCA0enAjwqMyqN8l4QyMdscHC1mpmos/MyIOj5uKpMQoFAF1vWIKBJfKS9cGyM+BkZv2XU7TCwpgmdcHYi4VDBO+1q8LxZVDoW7OLtkOTvjpvhEzMV7EoBlC4GslI0hQLbzGceert+zi1u0WKImJe2RgyqeRG+nf3O/rtKo5sAG5weUiozOJvVz5vIO445BBjrjqVRNqUuWixmrs0vaevGr7uPj1waJ/xsRyZkAECpFQHVDElyMvkdEydj1SXTlfGqUpcITsd7hcsi8UqCNznuxQimJ9zbnInv2/YFSlsxmDUJE3r17x3Lhaas5y2ZFW8/uQ+a0+Fk3lWR2qijKGjmaxCsWEqEFdhjZ7NbEELCj56B21B8a9n3H5+tbtrsds9kcYQValhSxxHpLdBC9pKCkVhVtMafQyYmgqVqqqqYuapqmoalnVEVJaZLXp1FFUkGbGYWuKeUvFNQn+634WnEXv0Tp7s9HnogR+uf5SEbY6dwWJ8CHnAQfIimAFYKAw2Pp6bnbXPPx7j37fo1QIaGn+dmMhJO9LYszpcr8zlQlOD+i4wiiVhQUXKwueXb5ktv9NZ+3B2w/oCtx5BvFabGGiHMjw9Dzt/B5SlYPib8kpMnxURJdGBCBQ7/HxgNlIwkqEJVHGo1pFUpElIvEYBl8x25/x/awPRaB4slu4WvF29eRtiRvn8KDfRq5Zi7ZscPNBp7GFMdi98nuJROsy7LMSGri4wURsoIod6XZs0VGCSRPoLPZBa9f/JHz1QsEirqo8ugy2Vho9NFJR2Q/IY5Zl/LeMDI3Sr/YLMVEiJ0sY5Kq1+JCQBYJCdxut7x9+4Z2VrNcLTg7O8NbR7/vkT4bBz8weFRfzO9PNxB55DhOvm+RpiowVUVbN2kjRnC2WHF5ecXqYsV6c82n61sEt7gQc9HfsahjVhI/4pNlqL9ULfPZJfP2jHG3T5w2AlFEnPMUpoGYxBo+iiPvLkqQBuzYpRBsLwidgzuHlwP7/kBTL5MdidesZivOlpcMWKTUVLJKkWboIwpxiiR949ZBoQoGN/Dh5iMfrt+zGW8YQkfQDh8FqpA5vNpRlQVl1dLRU5sixXeZv+/NUWt9FPYExuxnlQu1nN6iEDm0GwgSO3rGIWRvL5mfjkc0lGM+7KRk1se1keRQqbwusp+iliojrD75aUWZELZ870JwDEPPzu0oBFg7Zn+mU33n9H3SPdZCs1qcs1qc87FacHBbvL8v3qf14KJPe0FU+OA5DB13m1uuP39kcfkSPRnThod7mXMu8aEm423vHzQCDsc+bPm8fc++uyNIhwsjPgxEIv1wII4FdVFhSkVZ1MzrhovlOWeLCyrR/CLSNqEHky/l1xqR6b5qrbFK4YPl0G8Zhj0hhGQfNKY92MXUpEop6cdwtF7SOnm+ZccnAhEbXOLrBct2tyaYligj+8OWP/35P5m3e16//Bcun11QyAJ8QKmcRRodQui8VkJ22TqaNiClpJ61cJCMzqJ0UnQOsccNKajeDY4YBNoYdoc9d7dbvA0UdYVyGh0KSlEjCo0oEydaCEFTzWjblracY0yZR7XpXjRNQ9vMqcoSLVUy1pYGiclWTwqOSRJfa0zC8X19QQ/6Zdb9P1Vx9nMfY7TJ0zM7Mh4T2UUyO7bOMcYBG0cO44YPtx+ysvkOdGoQ4jRRw99P4LKFmBQxG+/GTCcY0UkClZx3F7MFL66e82l9wab/RN9vMaLILz7lGiV1Y6r4Tl3nf2vRJmQqetIwYaRuZ5ydn9POZnALbrQUukIbkQJjVaCoktWwKiTSC5x17Ls9u8P2uOn+0vqLx/9/bfGGe3sBmRWKKuLjPdQfctjxfWpE3ihPtuvJQzTm08LoMlkEKIjSEaMk4pgiU6frDInrQVCoWFCVS1aLF6yK57lMlA8cmOWxOOJYuB3Ze5nvK6dYp29QME5GsTEbIXTjwM3tLTZ4dAMfPn7g3bu3vHnzhsurc84vV1xdXSEifLQf8X2S9Ht/kqKOyqOp0wBB+SRxM+KpqoLZbIZnZLvd0o1bnLecn5/z+rs/cLZYYYyhrX9EqSJ5FYXAYEdinWKLAqDEaZcwGTZrFs2K1eKK7eGart/gVU+QkYBiPl/hRoG3Euci0TukcGmzU4GofW5AJUH2HJzE3wUOhwOFadju1jgr+ON3/4JpSqKF0jSUtXkwlHg8OvpWInkkMIaefb9jN+wYGQkqpBzX6GlmM2xvkSLxii6bK7aqY1HOKaR5ws/776xoE/qIXA8x8YVSgojCB4eKKge4i4R+BZlMn0eHJWImGoB49HhPnDaZh14nnnqnrpApriqbWluXRkpGI4PMbucJXYk+8Vx72+FFErWIE7T+WLxFcqeUDMzbdslyuWKxWBK2FhsOiduSiyw/Ga8KgVQCT6AfDny6/cSbd294Pf+/KIvFsUOfRqWnRd/puOX0EOr7nuvNO95c/8B6c0OIFh8GXLRIqRiGnkJqmqZhtbpgVp7RFjXL5YqmXjwuhX+xaPvCcy+mn51PCGNRJNqL9oqQLZ2sHbNwIWCqLEqJHs9IiIlqIaVBqiSmSF1wwAef+D8yFUE+jGz3d1g1pBGk9WzWHa12XCxeUcpEfXhwRPvAaaxrCCFxu0iGwUJqdGEY7Mh+v8UYlRwO3IiRySKot8kqar0tGZ1lv+8pdJ0MhH3AqIpFqTGNSb59Jk0RKtNQ13VKhpEmFWVSYWQaj1ZVg5EmDzenPT4Lyh4r1R8Xa+IxUuYfNi6PoxzzhGKaDMSTrM1/5vHopM4NR6OydPF8GHB2xPqRrtunbFF/YG/3fLz9wKe7Dwx2jyoLlNS46JLPajZ1l1JmFXFAa3PS1HusHdBalUTnwCjqquXZ5RVX6ys+bd5ysOsHRnHTw+8FWOfox79B0ZYD4sURhUoLqpENV1dXnJ+f8+OHgr3NHkZG5ZjW9CBLIzFeIKzEjuki7fc7htBjZApql19F277NUdyH5Aw+bTxeujRyy2n3KVjcpdBjZTC6RAlzVEl9bRObfJ0mB2RyyoKUCXAVMVlhxCgJUQAaLUqqYokkcQEV6tG3kF/tnKT4IhziSbj8wXjyCauFvh9Z79b4teWn9z/y+eaa3X5DOyuJ0VPXNXWdTEyHHOsz9Bab6d3qwWs8zYu9/zN5ZARF6qakrWs+3d7x7n3uvoXjvJlxtrigYUZdbVGyRKsCWRVoXaRiG3JvfIJ5iHBE2hQly8UVl5fP+bT5ge3te4ZxBJ0eSn1WEKTAx4h3yZomKJ88gKUnaIvUAaUKRAgMrmM4pJxXiWa93uKGZKx5cXXJYTdQm4amblF5w308rv4lIvnD2xawOGwckhGpjKgiIaMIQVGZY3M1qxsuzy8p3YG6bJINwN+58ZLBHMfr0abmyeTotuiTUMaTVH5CKEIU2djZEUI8Pgb+tGhP+T8JMReT/UyyNIoPHojko1XkYiP6nNqiEydNuEBUE/oOPgZ61xOCwPqRU9ugpzpGhaIqas4WK67Or/AMrPeWYeyQPplqTqPFUiekPXpBt+u4u7vlrXnLzeUN1fnymMByWpRNCNupAnf62TnHodvx7v0bfnz3J7bdJ6J0adwjI0pJuoOlqpPvZFU21HXDrJ4nk2JTfRM6c9zv1NNImw8B53xWpSd7F21UDscOhJwprJWmKNNeN44W5y0Sg9Ztsk/SSc2LjOlzYzheiyDSXtrbgbG3jN2IiJJZYagF4MS90Eqe8B0fqAKzO8D9wBcpUwT7ttux2dzSNBU+umQZYiQ6QiUr/OjRtUEVhqKGpmlpZzOUUMzKORpBW884W55T1wm9VCIJupqyTjFt0aQeN6/z6T/xxb7P1xRdj6g/j6dM98/AU19mmsg8zk3+ZxSOTs1Psv3xuByj6a1l7IckvBs6nBvphz39uGcIydf2dn3NZn9HlJ5WG5QQOJeQNhHDcawfvCPGqR6QCJksjpwfk2gzBon3jlKVnJ9fcrl+xvLTkvXwKTvcnxzjOYvUB8c49r+5YMvPwxGJmmbEEcnibMX55QXNrGVrb1KnZsDT4/JMGZGk0SKAi45uOLA97Dn0HU2z+iti7U/5bOkF2qNBbOrwXU4gkM4ldUi854scO0rUk8XiVMgppZKNgBIImZz4ES7fJI6dcTLWzWTXIFJunKoQGHzwKPklDB5/YQj8q3xdhTgmVJD5bHVdc33zmdv9J25ubpKSttCZuHxgv98xjqlDHgZL3430/Yh1Hi0jRqbrIlNFygO1y6NNRQBV7j43mw2HcQ9ixJSKvm/ZbQ6IRclmvac7jAhhqJqSdjGnbptHX1c+ur/JU2l1dsnzZy95d33GxzuRFJlSphzAweKtxgeFwOR7E4CRIBLxWRUycd2y1YizI9GNiKgZh4AbAod+x/aw5e1P78FLRu/QseDl6jW1/lrs2S+v1cmI2kWPxaXXpEAXCpntMKy1qJgI+01ZYQuP9AI/+IRa/z1z2lDHwzyO8QGnLQiRNzsQ/p4b4pzLTVR8cMh4QIoc/yRiPqQm76ST8O3TolGnotEonZZpiEntJRQWhQ9jai1ELiDtAF5g3UDAoSb78cnWYtrs8keBZrlccnV1Re/2dOOezt7bYyAFRmqauqE0FQTBcEhK6c/ymvfv37Moro7r57RIM8ak+K0TjuRUNDnnOBx2fPz4nnfv34AemC0LlErjRW0KxC597jiO7Pd7jGg4azVts8RQ8y2BbOl+pfv4Bd8u+555IsElVFHp/BplwvalScT+KAPoiIhJOuHjmJAnkQUbSiFVzn+O6f4Imc8Gm4K6hZIMfc/usGdWz2jmDa/OXzGbzZBkX81T89/JXVfkMPcYj3iKQByFbtY7Rj/S6pqmbJAEiiKl1zTNDG8DbbOgMg3jEJi1S1bLS6KDZbFAR01TtSyXSwpVpfUaBVoUORJQ5hzR1Ix5l308vz2L8Ss87tMYSn2/9h95loYnzpfTudQ/Q+GWRvT2nt/uPZaRtV8z0ichyTAy9D1u6LHjiAuWECy7/g4XRzCBfb9mcB3SpDWupAJnM5c1IERuSEPisj62yvHep7I6IPEhkePnYsnZbElbz6h0xegPSD9hFRKEwouAjZExxL9JcmE84Xw6FzA69T2NTF1oW8+o9i1VUYPxRO+YXG1TMyoJIsUtDb6jH/d07sBAT4lOHARxb1h7WhyIB0wqeZzzTwvT4rDe4kJPFC55CDmB8wHpAoUWxMw7i1KgRYnWFRJFRD0IHb6f0OTsOplGZAlsk8evAZIo0gbk85wbMYJwyXwzwyPCK56KjzyNcwxhynJ86M1+HJX+bLOcihzvfaLyqxTXMps1SAn7/TahAkbStjVSS/b7HdoIur7HB4u1HdalH873BFkSyVwRYh5PPR6PilyMTOC/wgnPtt/R9RtkESmlYttvefPxLyz7HR8/v2e9vcN7z7KqOGuXLPQMRUBlf/ujUj1m98woEEIzEzOu5s+ZlxcUcUHvR4RK6r6hSxFZAo0yCp0RrOBF8purDLowKGXwLiQitUp6IhljohGEkSF07Mc73lz/QLcf6OlQXtP8j5ZQejAxZSieboPx65ySePpDZAZnSOtFBdDSYIzAW4ftByQC70LynpESZz3dOLD6WV7nN4xOf+E1ip/9HDnxIr6MestP5xSlp6Zg7GmsLWPK4HWZD4XPz5rDhYEQh5xH+TgzQN6PhL5y7Ijj95cYSgpZomWFEiYVxTKJWqSE0UWUT3uLDw4f0v5gg8eSkgTUMd5GPLpOMRv/zli2S+6aOZ9MmfYOIVOqSYwoPWWpzvC9YMOBYCP9vuf69j0vn7/mjGxVEYYUkarME/1XMqxNvLCe3u3ZHD5zt/9M2UpmqkDqJAowRoHM49h+z52/RnsNZ1dJQJV5snLaKcVTxqL3IztJGieKPJJLiS9klb3NCrpwdJUAiEFQVcXxtct4qiBWmdcYky95djaQOSOZ4JAno3MlFVoZekasCwhVsFyc8+rV9yzn5yjMcRnGkArN+0i900Y3ja4ioKOmioqKAidaVtWKtq0RImKUJuJ59fwVzgbadkmpa6yNzNo5i8UZ7hBp9QwZBIUqaFRz3ziIRH1xPmRO8P0LUfLefcPnZC8hHxfLX09ySG9UfuUvNZp1dgAAIABJREFUTvbiJ/K6p2sw/e63F2y/RsH+66gc8avfIzx9Sb74zMSL9dEz2p5hGOj7lLYzjiNjHHlz+2OipNjULHrnCC57sIlUY2z3dwThMJVi9AMuhsQ4FCI1FjmCTBDzdC09Mz6QeYr+3tQ5BLRP/FaULACHwPDq6ntuX76l293w5sNfsONAPZ/RDyO980SluBstsq2xRx9xjjFPx2/g/c/aFsRcSOiTVIVa14AloGhpaFTL66vv+Hz9jvWnNatnS6KTdEPP+fk567s9RVEiVEDqVOh82r3jx+s/08zOMHJ2zJwUInlpJqHDSQ8eH5rvpiMgjV0GOvZ+i6gT/fQwHLDRolWDGyVNFTFK4YTGDgFiSV2eESkZvKdW6Zw8IgcBpJIYKkwowAawESU1kpphHBiCo6oUpqlw4wB4nLPs+s9sd9f0fkurymx2/PSTM/3RaXqTfDQqRZws3yfhurSBaJWGlQMjEmibCqXh7fs3fNpfc/ZsxotXz4ki0vVbtm/vKI1msWqT7xADn+9+woY/ouUcT4d3ntLUj76lyIXa1AOKnD4Y6bxl0++53V1zfjWjqCuud28YteNu/Mx2s6Yf9oz9QKsrVu0STaAgEYjVka8h7zet7DgiouKsuOSPz/4HN9cb6u4a00IXeqzv2ey3lHVF1VT0uzXOW4yGcXS0swXOeWyfkh+CTyR5oZND+jhayqVm4254u1bcuQ/8+OEn1uET//L6X/n39/+LV5e/43n5jNLUlKJCC5MideITE4w84nYRxtxqN/UMJQxYwXy5wJQRa3uM1uwPe7ARVBobHvqOzg1oKQgGeren0vOTUZY4otMPRRHy6V3x9JAO+TBWMqPm8cEAR8RHnyMnJDc+6O5ljjJLJAHPslnQVDW325DSKSSMY0cInn601GWZkF0BdasIasfm8J7Rb0DOMy/0qLC/P+EEJ+MgxeRhpY4Fo0IwZ15e4AfF5m5gdl6hlOJgdwjtMcFgD6lTnlUtUQUOdyO9GxGUODSRAiUM4lQAgQMcGjhX5wyLA3958wNuCChZgooM1rPZ7DlfnlOYlqY8Q9YFQy0Y/IBwkt3wmZv+Jy6YUdIgC3GsNbwNFKbA25Qwo4zIxGfPp7uf+NNf/h/+/cf/hdcDQRbshz26KLF2YBgPtG2NtwOb3UecHrmYp8zRMFoo6mwCfsLXQz84/QLgYxKLSQxVUycy/uaWxWWDEQXd0KOUSfYcIj1TEFDCoBQM+xGlTOLVuow0iCrfJEW7mNENPfthi5QxeX5msz3rxpRaoAwyavbbnn5vaZtzXr36b7x+/a/82+//J4b6uPyOteajokZKSSH10SpKARfmjHmY8a+LP7CJaxZ6wVl9lka8qqBpGp5fvcxFY4GRJttBqVQkziSC4gnDjft4P6P0lxu7uF/CXzteU0H8RKH24I2qL7jcTzkLSB67GcqTI0P+9VpEcRJr+JXCzDqX7aPUF1cpBJkoDxGcv49Yna5J9n7IRfbUAk4Gt/fvKxIZhj2DtUw2ax6PD2OylbF9MvUf9wxDRzek33euZ91vcCJlgR/TPU64o33fU9bJUeLgB/pxQBpDVaexd3CewiiUrFNq0BjwDnQenWPB9YFBewYb6b1FZy5n3kc1Ak0rZizaC1azc96+/YkYUj6mlBqhCqyHwTt6Oz4IjT/1FvmriX/HpZOwkVnZ0hYzjKwY7ZCRo4RKeRfRqkx0fKUoao/rA/thx2Z/x+AO+CIcl6aaZvPxiYPn5PcpTmk6eBxBWFLfbI9deyAVp9PIRMTkE6VENvH8GfWOyJmRiiIpQ4PInyNTQHUes8nMjyB6vLB4BnwYCXHMHaT8K67tw7f+RTJE/PpnKxQRx+j6o+P74bBnGWuqJkXa9MOGceyQoqQqSzwjMgp8cDg/MMVY3WeRflFOPhpQawbCMTrNBYvQSRUpouBmc01V7LCDRxUKo9MIZNgdklbguE89RFyO9h8BZJTMqyVXy+94cf47mnGOmUHHntvdR3bdlsN+jbM73Ninde4VXTfQLAQhJORNIdFKHaF0O/YQBFVVowpB1BEXevpw4DDcse4+M+uXFDtDUSkuFpdZAi4w0TwkkogvN2WNwdFlgrJKyjMXslN6JLpIIRVVUaKjYhgGRmeRhUGh6ccOXyexhzietidsFfENyZb+YZs6IR7h+NcnWLY48a2eqBFysrvRR9nM6fYtEXkcqdOIM943W+nyZAtQKcAHghyJJKTNh+HBgn5oiSiPCNGp9cr9+5AZR9KIqJGxyMR7mV7vA6W3QovMO0mzwIySh7yPqWMx+NhSSGSFq5El3gaGw4gjovQkEDPooqSu5pRFhZcBIwuEkhRF8kpc99d82i45n19SiXkeywqUScpHpSXKlAnRwrId17y//gs/Xf+QzKRxCJ0sNKKPjC4gYkSpnAsqIkYLykpTlUUm96sn1If5KBSPidyTmj2PSJUgikgQWchxRAGnAPkszxYZZRKC4NL1TGKvgtIUmLKgrCu8mARjIXv6qXSvVZHoCqNnGDq8TxY/r15+z3/7w7/x/Oo18qi2/4XN8sEfy4nVxnerV6jRs28OzGYzZtnQVuuCpp6xKBfHNTIpTsWDEkjxX2ZOK55qvuQ3nxtPcqd/66gtiieRvek399ZZ8hFOJo9TplPgXsrp6crj9SwSyKm2mQXsEg/Np0pv7Hp2uw3d2OFy6kDKNx/oXYf1I73tcH7Ex+TZOjrL6AeG2OGiPyYGxYwQHXnJFUQd8dKnpyOLFIXSJzq8eE/pnppLqRBR4v39ZfLRMQafKwuRYNYx7qg0KExyvL97hf7P/6D3qZJEpJGRxeG8Yxz63xyl8vPPiGQ+XzKfL6mqht24Jrjsoh9lGqUac5S2z2Yz9mHPdrvm5uYzfd8Ti/irFCFfnkn+GOJ6ShBPCs/MO4v3fLZJOfpzHA8ylyP9W/UkmhF8mqMXZloESe5r7YBzDnQaG/1XzfMDHpE5HF3X0XUdQkR8sAgZqOo0+lhvRFrcXiafJBdRApz1WJsDjlGJz/YwQp17Bew9SG8z50hEcjZhkvsXRYl1ns+fb+h0T2lq5vM5cfB0Xcdms0kP5S9coqwlQSvN1dUVv+/+yN6vkHVkb9eEdyPX1+/pDwdsSK+/KEwy3wyKQtV41yceWwRjNFoW+GghhHwgG4xSyJg4dKUu0FLjvefQbXg/WggRJQWzwhIGaFTLvF09nGmfGNkrcb95aa2Pnn8xpvXqvEPYiJKSuq4JQxpn9/2BujxDBcPhcMDPPFFl7gT3PIpf9TF5yMoEk6Vh+sSE9PlVpuS9xOFMjUoULvE4EPgQiDHhoVI+bBWOzxWKmFxzHyCBR/7Xg9i3xOWj/O3rf+KCPaXATPYj4ijamdRfeVD7i44qPnO+Cm2ILjJ2A6MaqcqKycFDkfivdV0jWkHb7hliNpmVng8371Jh8yrwfGmOeceSeEKVcAQ82/GON+9+4M37v/D58zXloiCEMb32kDznQoipGZX3CShGpwSK+XyeOKZM8XPhFziJ4nioKqUoigqjzDFdRR5zVrOX6xRxldFXVaTkhOA8Pti0eyhN1ZRUdYsLiRrgAjjvUtxf5soG5ylUiQtkjq3i6sUL/ue//d/87vUfqZn9xoJJcHF+hTGCcXTUdY0xZQITtE5in5P24zEF5B/i47e8jUcTriepFicNa3iMs8SMm8VwLNgS1Wpi+lr00Tgq5uTanm7Y55SedJb2fc9ut+Nw2NGNHdYNKb/aW5zvscHivSOKgNIiF4ap2Qy5HlAolFQn+bn5zht5fPFaKEypj2bhiQ4gjtOT6UGIQiQahpAZNEp2YNaPDK67h4NGe2C9v8MtFI3RLJoLLi9eMV+s6G5GrE2djpHJUT14S/DpTQcZnswI/G2IW3qzs2bGarViMZtzs/uQDuLcMjvnKIxJxZuK1E2N7S2bbTq0h6HDJ7rwETEQ4td1BxOp+UHhJh66FoeYNmxtTg1zn37/U9E2WYMYk6TcR8j55OAJzlEWxf2iPZIh7X/pY584bT6RJrMwYxqFV1WKHxvHPvkb5c57ElGEkBac955x8Nm8UiJF9mo7kkVkxlcfcyfSxq9UMjkdbZlcvF0K3ZWZjF60mvniHGEjtx/W7PcHggfMl+D+g3UmOVqPNFXDy5cvGcKCnj32picMaVQza+bM5y1aS+qqQinBYrtl1i4J9pbdfodzgbZO/L66bQl1Qiq0LoguhT/XZc2rFy+5PL9guVwx9CPbuzVdv8eHgWVxRhgFz85eMJ/NQKqHo5pHhZsDSlMlCwClk+LQZzWSS0pHYwzdaNnud3Rdx6K9QERF3yc7gmjiV0bs37DC1MnzJAUej40Wx5gPdXEs2kQuQIQAodQx0RYkSgqsi0eWKccRpaAoSoqiygTdh83E9MykgvX+z8cxWxLN/gbn0tHw8gkrDcTR12sq2lIeamQIA/UvNQ3560zFTIyR6AGf330Qxz2orWsWL5YYDJ/ff2LXHUA5Pt3cstvtjq9rUa2oyzm1qI8I6hB77rY3XH96y7uPP7Lr1xRtwShcRoIy2zZzoWKIeBHxo0/RcFJSV0n1LJ5y0H+M1k8KWaHwuBSdZAx1WSUzciGOQO4kSBAyIGJO7Thy1JI5cVQQ4n1o+9HJwEe8EzgXGAbPEIaMoKci9OzsgqatmBUSGTWvX/ye1y9+z5xV7od+2y6qpWE+X6XCVpkkTFA2cwrlg8Y0nqwdMj9Pa/2PUbzFR0XWt/xMpqY/tp86GTA4n0HXE+eDI+tORCIWVOKeTWFRAccYEsAx2JGIxXqPdSODTVOicRxxfmR0jnEc6YcDXdcxDCly0XtLiI7RDXjvCCGNaU2Rzm1E2utUlXjoE/jyIF837x0pBnN6zovj/uC9J+bs2JiRQxETCh1FUj17AqiUxTuGgW7co0NIZpHDuOPj9Vuqveb3v/seTc3y7IKLq++422/Z9ztsHBFaEPwIwSGixbsxbfrwpMHjtxbr8gmaoERSUnG2XLFanfPuU4mzNhEvs/w5qFREFFl1pJRKGaE5Uia9bfcouPvXFW2TX9Ljou0YrZO9kaY0hMdFWzxZkNPNTFmKhrJMjteIpA6NQeRO2T+JePmQCqb/6giixwWo1jr5p80bhvHA+w8/UZaGvu9zRmtgv98nlEKkDEdrk1WLQSUhQhA8NtAS4l5bEXLB5q1DxFTAO39II6Tsmj6bNTgXkpfUcondWbaf90+vw/iI9J5nVna0yGwPsZgt8aLmeufodwMf333G95HV+RWvv3/BbNYyqxuKUnM4HHj/7iN7OkIX6Q8DJhSsZgWrxQVVVeF9SnTQSLz1zJs5V1fPefX8BaYy/OmHP7MePnGz/sgw7pibs0R+15LveYVIpoSJL5QvysTdkCqN8IqiyF2+wYbxBEUMjNFTFZoYY0ZIU6yOBPZ2f8zVVfKv9/6IOXggZIRt063pxj1RepSRmV+Tnk8jFUoolEjeZ9FDqRogWeoIf7oPJPtho1OqxrS/TNYLD+KbTpC2CWX7W/lInkZpnT7DIsNYMquhUwEmj6+z73tofolanUanBSWLxRnL+TnhcENw6TQzOcJp7C1lWfLi/CWLZoF3jt3bXVKwdbd8uv2UDH7dwOXiGefLS5bzMwpd0nUdt+sbPly/5dPnd2wOd4hS8PLskh8/v8E4DdlqyPs0VnfWEZwgjICNBOuzKlN8sXN/TXAiTxhEkYhWyV+sNA0iumSPkdXpU6zWESnJvlQiZiIy2brJB1yw9P0B5yNRVMkjM8j0w6s8bkoFr/IV52cvWM4vqHTDy2ffc6afodEM3j4ifv3qlUFEoWV9LP6OBW1MYa7+uA+F/KCk5ASOhfI/QLH2+Nff+nOeDD7SfOTiFnxMfPD4BJMp5zJl5qzDYXE+FWr9cGDfHxiGjn13wPmebhgYxo7RjcToUwEoIoOzyXc2q0KdT8gWOh5rkJBfTyTiXczUpJSKJya6Vv5xPCfziFSK1JrG6BNKnKeVztsMhuTxbwailMyVqYyEmMASoQEVGV3HYVBoH3dICka74/3HtwgFs4uW8/aMplmyOr+iePeWzWFP8DE5c3tHtAMhd4BBhSfjU34JaRNPcaqYDGJj5sMozuZnXK4uqcqG3XiH1/6LbWJyC47Ro3Qyt9ztt/hov7At+bVF23SwTUWb4CHSFkMqL4xJxoennkhfq2GlSP5HTT3DmBLnH45ekuw9ecDJeF/BT8H1UwSN4n9/p6aUSptofmTKsmQ+n9NsGsqhYNN9Yru/o65TBz2OAw6FZIdSRSLdCpXImnFC1dTX8+3EPQ9NkA4/heDq8hKpLbfra/af77Bi5LvlArApYktOBUxLWdRoXZx0uz8/snbOIQuZCNCADgacxvcRETTzcsnV6iWr1ZL5oqU0BV3X8fndmkbPOWsuqGTPrJ1x1qxYzVY0TYO1ltEFyrJMG0UBZ/MF83aGVx4XD/Rhx3a3oR92NHJGWyxZzme8OrxiWZ9jRJ2vUSZ6+xRnkUI3IoUuaaqWUpf4sQORNoc0vk7oZogxR/l0bHZrRDQYX+G9fTDum+JZvhmByB1wyKOyQ9jzafORm7trHANlrRGStFkpkRTTMlky6KgQTvP88vuU0PAVCrQx5TFl5PFrvUdp7uPl/ncWbfEkMmpKh5GZNnCKwHmfxvQ/X7RJlNS5OFW8uHrBdy9fM/zUc3A7lE6qQj+mrxVCoJU1YiWp2xovHftxxNKztz0/Xf+F0Vm2F2t23Ybl/oxKl+z2Wz7f3XJzd816c8Poe5arGc1yhV5rfDRpT8lNI1Fm4nxB1AJrY8pzjQLvYuJmZkrK/U372noJx0G5USkfudQFLuQIIB0ykCwyUpqaY/K9tHFIjR/TXktCPlxEqtTE+iAJHmTUgEHKpBYVUTGrz7k4e8nrF39g3i5Z1KkpEmhqVfxmNpnICRcPBvpK3Gcsx3ten5DiN02f/iE/TsRVp2wLH5LvYSHl0ew65uL/vu4b6dkzuF0SWHV7Dt2O/X7P9rBlGHq6oU+xb8OBcexxMSVemLJAG0ln+xwTlUGT7OGoVOIJoyTYIrk6+NTcTrWOkpreDok7rQRKxbxH3QM8xpgHTd6DCVRIyTuRqeCLU11/bGCkTNMiCYxhQPYSLdSYyHlx4PbumsM48Pz3zzlrVxS0zNozjCkT3Cs8hS7xrsfbkbE/EIL7xaiHb7lvD8fYMh/YCUmo5Zzl4oKqatgOa6KLSAUyX0CtE5IwwZpaK0IcWa8/E+JIEO6pk/qb5osTyjY5kx85bYgvooee4rQ9/jbHr5FHpHVdUxQFvnf50JlQPIFQihBc6sazPHiKt4jkYvF/M60tZrVrBCyWQKCuaxaLBc1tg95KQhyxdqQo870g4DOvqCxytNaEkgSZ5T3JHPWptK97y4VMOPeWqjR8//1rqlay3n6m63pkIei6LiOte0pR4lzilsxmCwpdPsEl4QsOxTTajggkI2Boyhnn83P+5fV/59PmA5VqYZTEUWD7SOgH1usteM1qfsnZ7OJomFxVVUaYBHZwLNoFy+WSbhz43H3gsNtzKz/TuT3b7g4bdljRse0tPUmt9O52yfzHBf/6/b8xK5ZUOs/5pL4vqPLcoBCJmF1ow+AVUYZUKCt/RIGlAhEk4zhyc/uJGAyNXOCC/+L5nby1vpVHbGMiBwoROfR7Pn56x5uPf2b0B+pZmZ2+45H7MQVL6agpQkuhK+qrxT0qfYJCxcxhNLpM/o3T7i7Cg6KNqUmM915t1tq/Gcp8Px69f/7kyRhkahxj4Fg4fkvROPHPFIoXz1/zu80NH28+crg9II1iHA9Yb9luNtze3nCzusF1ln2/ZbAHbDdCEdCVYLtfM16PON/Tjwc+3TYoJMPY048jNvSMcc8YRrZDRHWScewZ+h7rx+P+NWtmNFVL2y4Zd47DumfeLqjLBqOK0wvzqO2WT9ZvIjcChc7ZyLIi+pB4QpM3xdTwB5HWbEj30lmPENkcOwSCy4e2jCitCMEjtaH+/8h7r+24kixN8zNxpGsIggxGREbmZE5P9ayZfv+XmJu5aVVVGVkhqCBcHGlqLsz8uAMERWRmV3XXYC2uIIMA4ThuYu9//6Ko0bOMXMac2EJGxe73r37H1eYFr66+Y5mvUejJRuhv9xiTz/6/c9RISvE8VSbw74LW9rdmxh+LlHMUzUS5GzYMGCew3sRRpx2wNmaAR8+8kX13z2iiL+swRC7aOEbVp7Ejh7ZNY9ABa8foJ64UWchQTmKFRalk+iyiWl34ACJDyoDK1YkHkmUUOiPPyxhrJwP93jz6QWLhF8Ea7+OteV6wHalNJ+oQhCkUXkXETfqYiiJ8UsNGzz8XLJ1p0VF75fDS0XUHts2efbPD4VFoZJYjVQz5lllGrjNGoQnGM/YDOD5x6H/tu3nyhXk80pZEh3KHIqMu63gJ+xiirlTsvjIZES58PKSjuWQk7rfdIbmK+8ffZ2LnfnnbHivm819Pv+YcHTtHHL9UG8YRaR69isLjojB29RJn/QTlTkhmdI+JqBWa/5GVm/d+klBbb0F6CllQ1zVFmU+8PKEEZVkiJRgTfdCOsTXRaDiZNx7XynGc9MmIhqPCzqKUoK5L5psLZGb55x+raRx9OETBgSRuRD8SHdzLGk3+eYQtGaIiA0JkCBwiaITwzIo5l6sb/uGPgn/8SxGdrQ+GHR1DaxlMz/t379ChYLGcc3FxwXy5QGvNOEZia9M3jL1hvS64vLhgd9jy7o2jvb+nb1v2wz0Hc4+lR2hH8I7Re5QX3B9u+endn3n54lXkDuriJNtXpzFvEAGFJleRGylQKOEIyUVbiWxaTwgwbmS73+OcQBT6kcDm0XoWX39gW+8JwqGUo0vc2A/3b2jtjoUt8FMkW7yMRZAIH5A+Yyku+Ob6W15du2jw4mXsLkUsaELiP0qpH3FFjvvgmPE7Id+pqJrk93+nou1Tk4Pj9wjJOHdy4U/806/bYwEhNTM543J9RZXVSCdRTjN2lsH27PM9t7e3zOsZbrQ87G5phgNWjOSznIKMtjtw6AeKJppA72U2WWjkuSYvc1SlMIcR2w4YRto2cnmsG8mLIgm/Nry4uuFqfc3utuFBH1hXG+azJbksUWREw8LPFS9nzVcq2mRQ5DIjQ2NCXAdRkHJ2X6SxZkgWDsGGlM3o4+jWRf50lktE0CznG/JizryeMavm1PmMOq8odE2mCl5evqLKahb5OnmxabxxsWbSf4/CKUUEpmL9YwuOE0UmRUmfGhMRkojl/58fPj0eh3905nvG6JQgRm7vIjI8JLRsGDp606esTsuuucU4Ew1vky/ikQnllaM3+ygmDNE/E8DLRJryEl0pRJZ8TL1PEWkg0qwoAkLR1UEJSZXPKMuSIosK7m17ICgZFdVSpuIqUTWkxdtUeCWnh+AjoEEy/g7TWCkBVUJMKncZYkF39KyMUZmgj+oKIQLVrOTN/Rv+2z/9Z4p5zovXL/hw9xYhwdiBqsxQSNzoWNQrJJr379/z4g8/TKjUeQae/KK60Z/5/DxRkkzTZIVFkumK1fKCt/c/4cJAmRdkRcnh0KLyDKUCY98zDj1aZglpu+Onn//Mf/j+PyV49ez1uAD6yxvmPM8vz/PIG3IjxrnIs5ECYwzCy0nh9ZRcqtRpIJ/nOeAZzECWRQXfOB7RSon3JgXHK3SW0RwekHkRLy0fFYC3t++5Xn3PPNv8dd3N8VIj5op+djSqZYrrIo4cEHgimrXb7Xj79i1W9ZR1DDQOKWDeWkvXdWR1iS6iUnIcx8m3bxw9uZaPk1NSgPcxya0PLU23JSjPrK7xwdK2bcwhzLIYpbbtyPOcnd2xv20oqPj25gcWi0VaPc8ot84tCaREy2z6i1zkeCwlM353/QculhvyrOTPP/53dnc7usNAkIF9s2O/3bGerfju5nf86fd/QmjFbv9AkZd03cA///OPLJdz6rqmqgr6PsMYwz/903/HeEe9zvFlh1SBeqaxWhBMHBA87N/TtS11NuM//un/Yl2sEEjMYMjy+dEFlAzN3o3U9ZzlfMW7258otWa+mHP38A7rI1SflwUy5OzbPYqBQtc0fVQBj1VUK05j+d88Pow+Sg7Ddn/Hz7/+mZ/f/IWgevaDwgeTiraInjnncKMldJLL4ob/+Kf/G49BEUcWwYO1ce2BpKpmAPT9GL3TUvFWVRVDGw/soz3IkdIQ467+PnEPx0QGay3BWLRXyXDTIHUVBVFaEzwcDh3Kx4D7YRgYGKjOZqThzIf2SE7UMk9+UppZueD1zXc0zYH7/Xuqoma1WpAXmnfv3tHsD+hMRiWw66IP4uApVc7maoPrLV3f8Mu7JprRekHf91xebfjfbv7EulhhfhnZ7XYoaxmGge9ev6ZtW/7l558xg2ezuuLm8iV/+t0/8Hb2HuV/ZZmtuL68QSIYxoEwBsrZgiCOUpLnxQkBRyE1jgIcKKGxo+ewayH3ZCpDaJXMYD2kDGctY8NnkuG0FDEaahJwKY2SBZcX31CWc1aLFavlhtV8w6yYU6gKiWKpl4gUon4UOqljwfn3QLuOF+zRCPT5xLLHwCRfGin/KyJlnwFYJrJ8Uvmee64ez/OirD6Ltlnn0Yk3aGz0bZWT0MDjiPFOwzBgvYl8aDvQ9S3dcODQ7OhNR9PsaboDPthIRwgB682k+BRCROPa0bDarKmqig/3tyxWi/hd+p5+7CiKgrwsMcPA3e6eVbXBjD2ZiuBDcIGxHxBZSVEXOBPPraNLRT+OXN/csJovub29RaucwRqMN6g8InGBEIu/pMIWKEQImNHizIgjkCuJykvyvKAfRsbRorM4DpU4lBLoIo9NCoK+T9GIQaJtqiiVEsgcnDDs9w/88vbPNO6BfbMF6SiKLJGbJdrnBG8ZW/9RaPDTjLuvZzL6R6an6UYFNArHvJqzWqyZlTNMH/3ajkXiue2GUtE7zTlDP7SMpsevZ7yVAAAgAElEQVSGkVyEv2qXfjQWFc+HfB8X9nMq2s918FrnCZ498gCjHcbRz2cKn0+cJCFDQiL8X7VBz3lqfw0+5xLTcBxHzJgiPYKdfn98BlmWkcnstOkVaC1jbhqkUS+QnXGjQsp0FYGAxTPS9DsG38HoCHJkd9jS9j2DHfEqKoJ0FsUnbrDkeUlVVczqxRRNM/k+fbrfe0Sdjl8Xx/O5qrlcvSB8K7jf3rLvtuwOW4bWY3uoNjMylbPbtXRdw/awZRg7mrZls1yRlRnj2PPhwwcedvcY04MSeGdomhEpRtAOLTQ6E1jAG0PnGoxx3O7e8XC44+byFQWJY3FMZfUeVJKSyxytImp7tJ2QUiJCRFpCCLhklyElSK2iDcmT9Xpa61+xfsMJbYuEgZCsGzxSebz2GDvgwjiRzUUQeAejs0iv0rp3U5ctBE/k/8c9oSdU7TQadp+9cP5eSNvxwtJa41Xa52k0HZ5B5M7HH59FLUP8YeOoVRMIzMsF69mKeVHTtDnL9ZxyURAw7A47trt7iiJjMNFTSqccVi8gOBf9o8aRYD14EQs3PKMb2Tc75iI2EVIp8iyjLmpevHjBw8MD24c9DoE1AWtjd1/mMy42VyyyJZmKdAMlBEG6Z09y8eR/HI3NAyCCRIWo4sQrvAHTOYQWZFpHvmN6zsVxJF7H9amFjmPyLCPPCjKtUTLjYnNDntfU1Zx5vWBWLCl0iSZLhVqWvNie1Ev/FuPJ/wlBtSMg8bRZO67dT6lblVLkZYHFpIL9+R8u1sfpbtYhGf8IRjuyPdyyNx/oTROLNhc56dZbjI3j0GhmG7lq1pt4v8vYQA3jgC41wkZD7yovGaTAe8fohpjjmcnIOcsk2uuIXCnQeTQ/1krhRocLFq0UudLIKvpCTiPMKTnoNCnKyhiVeGEs+/2epmmwg5nQOa8BC/3Yk0uJLuI9PnqH8D4ZMGuCj7ZM0kuEd3jnIi0oxMFqmRdoIaMLQiWQQaFDWs55WVDXJVIGHg7vCT8PlA8lTbvHB0uWabxzaJWznF1gjSEMkYx3fjj+dUTLMxPPs8107Iwcivl8yWZzyXy25DDscMbENyR17jFYOC4y6SXGjuyHLYfDjr5vqatNOkDP1IpfMZA/5ow9/dnORybeRzNKKeMbJqdxr3h0+Z1PVo+X6lE9Ooz2kRLuyJvL8xwZAiZY4ko4vxy+wvz0jCD9tQKRTw8CJDYZgh5HP1JqPBkhCMwYyclSxJw/rTR921OpccqC5Kj4CWGydEgOxVH5KKMmy2Kwoefd7a/0viUIixED7+/fsh/2DH5ECM9oByoKnHP0w8g8W7FcrFguV2eF2KcLtiPJVX7kCB7Ncis1o7go2CwvuX14z09v/oWuHZBBIWVGVc5RSvP+7Ttu7z/QjR0fbt/hvOeH33+HyqO1xr7Zsm22dK4lKyXGh5hBN1h0kMhcIpSKKJNxjLZDGMuvd2+4un/Li+tv2dTR+uJoUBTz6iSZzCmKgros42UmToWGC/I0xgsimaYK8iqnzmd/MzH6WJPIlMoosAgsUjlkJhidAZFUUCIqR+NIWhBkQGcSpUUqXRyQPSkYJRKNVnEUL8NJwRk4reeQeFHiiVfb36toOyrDjYo+YAqFEoLR8mzTehyP+lRYf7opTIh38qFbFmsuN9dcrq/pho7Xr25YXcw4DHsOzZbb3T11XaB0JLxrlUclm4ujl3M6hyBMrx0ku+0BrXJWyw1rJfHWsVosuNxcUFdz7m537LYNYzfS7FqarqPIS169eM0iX5KTxzNZBoR+6i35HG/UpwQKpjgyLQsylZNRRKPSfkTnEk0RUZC8pCxLZuWMIi+pyxlKZRRZSVEUVHm0DInnjGZWLVFSx68TJYoyKTgVU3zWM7Xyv5oeQHyeEvQ/A9J2Xrw9vS8+dZdEVwAmWcBzgZanFIJHg2IGN/Dh9gNvb3/ivv+Zwe6j3YYd4veUx7M53utHUUFWaObFHJTDmoHBtswXVzRtoCgylsslTdPEcb8VyU4r5fDqYqKWRKqXZFYFVOKxeecRTqJ1RqYTEJTycI+ZtEFEP8nRmsjRLAvW6wuEUFjr6fs2JnboSAeSMnJriyKb0Pojj3NCLoUiy3KCjwbQ1iVPOSsJ3jPYAa8yCDKO/GWGVpSJ81BS1SUqh127xdwfUJ3Ee0eWZXhhUEpxub5iVizo9z0MeVLo/a2T7SeLOJxvsFi6VVnFcraYDAuPCI4QAu8iUUAKj5KxULK9ZWj3bLcPNO2edWWTXP106H+NQi6KG9xnkTbvPTIVjDGXTz6GxD+BsimVkeli4nt5Fw/fiDoJfIg2CKSCJxIwo0/dcdz0pQ9rT8XgR6gKX/cMvPfRFHXCU2KnUNc1l5dXDCF2QRFOP7nqW2sZR8OQdTGzbWgZfU8mixg5qcCYES1l3PQqLliLpXF7Htpb/vLmz5jQ4aXDY9g2Dwymjzw0FQmcUp4u6SzLWK02zPIZU+bLswek/wTSxhnfMaJY4Mh0hrpUCckwgKatdtT1nBACd3f3bHdbVJ5xd39P0x54+e0NdVHQ9ge2zZZDu6c3PbKQ5CJHOo/1AR0SInJe4AuPl54P21ve3r7lw+4983pFRhmLI3FaXBkZs3JGVc4iOiHN6VCwx4PWQQCtC/IyGqUu6wU22I8Vmb/hRhMBVHJXE/jYPGFRIoAOFFonzookiMhv9DoprRCxG1Yfa8hPLyEVbTpDqxzp4hjS4wkyPLbhEM8UTanJ+OtPJz+Fr2utceLoI3auID/K+4/cQfGoaPPKo84sbc4rXiXiSOZoDwCSq9Ulr26+wfuRzXLN5eWaotX8qHU0/fSSLCspqpwg4mhR+gAoyryiymp0iAhlobOoTreWoYtjmBfzNUVRcDjsWC3WLBYr+s4yny9oDiNtM/Lhwz23b+/55sV3LNdrFixPbGOp4xTEx3i0Lw5R0ruYSU1RVMzLBX3dpzUe0LmiLiNXqKpmVNWMeT2nyCvWizVa55R55KmWWYGWefT7S9QejU4qepm4FlG56c9G0fKjl+afNGn/GgWbf+bO+7ct3p7zFP3ctOxc+Sj10QXQxYyBZI/19K6UUk6GygCj6dju7vhw946duaVzW/quiwktziXyvUrNTuDQNlFgWC2RWfRFcyFgvZ9U3fN6wc3NDdvtnjdvfiF4QVYWUbiSrHOUikVckFHdnckMHFRZOYn9sMn0NkRSmbcR/Ze5RmtPb0f2bUP18IC1DkFGXc8RQrHbPcTCy7pUo4Q0JZBolUcj+mRl4318Glpn1PUMGQLb4GmtQcoMLWOyztgNBC3ivq5mlHmNlmTx+vZtcuN1DO6AHSGTEh8sPhSMxrKsLrl58ZpvLl/T3A80DyNlVj/7Jvv0QL+uYDvb5E/M96QQSRCfURQVRRG5Ct6LRGIVEwlYyAh9EgLeW4yFh+0HmuaA2QzxUBT6o3HY5z6GISUQpMV3jrAd/xwRj1PRNgW6fyRYOHMlOxsjymTtIdKiFzJyCfA2FqEyvs4pHumI/n2F28dTYcTjM+Vr2ObHou2kcgtAXddcXFwxqu9pTBwZtm0zLUzvPM4MKJVNC9U5E4N05TGT1qGz5GMz+ecbWhcD4H+9/Zlf3/6EUwahPCFzjHbAK4csokQ6z9N4KPEOYpTMHIl+ZNT65dHopLR+LGWaPJUEmYDL9Q1SaObLNW23Bz9GfoVzzGYzlps17z78yu32Ax/u3jMPM5puz/awpen3MYZLBHQuyGSFGWNihEThLOCSiWOmEVlO3/R8uP/A29t3XF18Q5Ev0hjRJx5ZVBdXRU1VluRZRhAuhhMkiwqXOmGZ1lJWREf52WwWo63G8a9DypO9kBQhXZ8OnE02Ig5NQGk5XYxRKFEQVAoa9yGZTYqzqLHTugsTC06f0BUrH40/pdCfbDRORVtMW/hrPhxu2qdaa/qUf+mwKK0R4hRHMwmIkuXHseHz2j+LuIQQECoSTJyzSB0b1MVszasXr1FK0NpdzNw0x8sy2QkIj8ozrDt6XUVR02wW0ak6L6KKMstBKO7u7nh/d4ezMWdaigwzeg6HQ0T6hwHho6py7Ed29zvev//Aq+vvySf0KgaYa6lOZlqfRfpPeWUCyHXBYrbk6uI68odkoJ7PIhe4qCOamcXCbVbOyPNoZaNkRq6LSAE4E14JIASDFMec2KPYKYZt48OUruE/unPCdAP83Qs38ak7Lnzi/JH/5kXbc6DC1LCffc65m388y6Pxxv4QR4THCcwkQkvj7rquKVXkzXZjE9XPY4NhiLHsIiombfJDVd4jg0qRUh6lcrK8ApEzmpHRBKTM8Q40mnk1Y7O6AC+5u7vDOU+eFfR9j08ekEVRTNxUN1rs6Mmloq4XlHnBaA2HwwFrTGwQc4XwsTk8ukOEEC2TvPcMw8i8XHN9ec1mtaEqSt6+/ZW2OyRRAdFMWuloYeNisgfJNgzvyQQsqxlKSYaux4qBTCsyrSffOCEUparZzC9Z1Cu0sxKlJdamUYN0+GDAG5SMkupoCyCoy5z1csPF5oaZDox1oCyqZ6v1L4XFf+7yfBrdI5KSrCpKZrMZRVFgExQZ1NFiQ0yS/OM/IqVku72nbQ9YO5LrMnHBvn6TnCNt50jV0/GoFCFKibPsMSQsPj1qPH6+lBqCxLl0EaXOPfh44aj0vV0IUT3Tt5NX25eg9qd8pd88Iv3Ep1VVxeXlJaHs2HZ5FA4kh32hTt5nq9mSqqooy5K8UMgU+eO8Ryp51C7jGOnsgX5sud/d8uOv/8zPv/6F++YWqQOqEmgZ7SzyUoOMHk1aZGk0LpnP51xeXjKbzYh0zoD+JMrmzyMwHw+an7o4Jt0KUjAvl+RlwXK9oh8O3N69wdqe1WrFfD1juV5wf7jj/nDP7rClDx1Nv2ffbunHjiAdOo/FfY6IhOuECqQQzagokzlKlrhx4KHZ8ebdG7652bK+ekFMvlUTggVQ5MV0KJl0mU5clWd4lse10DQNfdVjnUUr/duKtvSc1ORT7nDW4MZouq28IHjLZJr6kZWIjEibFs8ibUc6gUw8kSzLkaOcOHrH8ehjLt7JYNdaGzmY3j+PtX2lSjbGL8XxqHAiFW1uamTOkUqReG5Hr7hJxaqeEcGEJJ+QIKzEmhGtBbksuL64Rhfw539p2e/3fLj7QNd10drIDmiT8gu9Si6fkkJVLGYrrjYXrOcLiryiyHO6tmfoBu7FjuDA9A43Dhy2B7r9nqHt2Dcdfd+nNaPxDqL3bDaVNuFp1tCkZv/MmX72hud5zma5Yrj5hs1mg84zNuvLJCyI3N54yeeU2YxM5hNRQaWMUHmGTonE/Ynvo068VZlyecFL8Yh3GTgPKD+uN/U/qFj7uEB8jLT926Nsv6WoO0fg45RIpQHmwGBa+qGhaXex+D9DpvM8Jw85ZciADIejaXd0/QHrLVInFE5qRKZjUoFPUyQl8VZSVhHNmi+WMfqv6TBWUGQzxsEhRKIlheilpqUmV5qqrMFBNw44A0WekauC4Ee8G+P61pp5NmdWz2jaliGMeCIyl2cF3pymelprpI5F37450B5asnVNWdRcbK7w3nN3d4foOqRSKAVZXiJEvAtHM0wFbVHEhJ9caVbzBUWe0R8a3NBTJxuwsesZG0NGRq4r5vmSZX2BDikxXskswdMFeSvxuUNnkdOFEBSJ4C2lxPQeRcX1xZI8L6fi7K/jk6RFHXwKTf/4XCV1UvPZks3mgvl8QTduo2pTZFHZqFQ0pwtxI0sFea7jpTS0U17noy73K17dxEv5zHj0eIEcu4qPxjyfmM5IIaPnyzFEVojHuaZpxHich48hej/Fmb396o1nrY3Poe8nVV1VVWRFTqZ/m8LuWOpoqZnNFjRuxuBblCwIPo1qRFzcTgWyXJHnmqLMyfOYT2oY2D8cEELTe8sYDH3f0PRRKbRv7/jp7V/45e1PWDGgpSLTGTKLJFSvNGMw2N6Syeg9hstYXiy5urqiruupMP5y1fHktA3PH8YKjZQiITcCXSiqosB7Q9Pes1gsuLy5QACvX3/Dw+GWu90HjBlouwP7ZofxhqLKEFpEH6IhUIZ0Gak4IlYCgoj8NiUj2bftG968f8Pt/Qe+ufqOCjXJ25M1IxnxoJIpMfmoRo75lInw7gOjs7R9T9M17NghbUU/j8W2VicPuEBISQnyyxdVCnH3eJwdsWbAGUOwCqnPyrGQCMtBTtmSWuuYcPKFIaZW+YQaT5wbYuB4CP4jsdCxafisGOAr/CUVilzmsenIc+QQm6en/94xDSGivn7yinvOUuXR1ySerdIaZ2zaP1DrClYX7A+X/Hr7Lzw8PMR1rmRKRZHkOpuCyOPPHrM963rOYr6iKiryLCJq3kuCVzgraA4d3gf2+w5rDgxdQ9cOdE3cx1mdsVgs479R1VOBcfSW/O3T5lh9FxSsFiuCFATh431TRlT8aBIejh5+CTU756aFs2ZKTKK17CTJDY994uQnm7XYSMjHoUh/b4r/k0bEf4KSof6nKM7OOWxP77lxjNYwQgjqun6kyg5Ei60sU1RVgVLiTJQXczqVEmgdm63etOx2DzTNHmtHVKnRxQytcmYhxs/FOzcQpGAcoxXNZnNJUZXc3t4ymh1S1qyWa7rdXZxSGM9ud2C73eMdzBYz6jryIc3DPV07YAtPWaY0FqHRQpPrgkLmaJmRq5x5NWcGqEwTpMAa6FxMjjma54ej0Esp5rMZs6qiyGLzrYWkKorIY8vizz8MHe044oxBS0lVFcxmFUU+o9Bzrq+uqMuSoeuRIsQirijomh5cfJ2r5SWXmxcsFxu0ktGCotI183rJYrakPtRY6cm1xhnQsiTLU/VnBx7aOyq1YDNbIIUhMJzBvGLyLv4ysnZ2aT5NRzlHONJHXaTDqJwhhMaaAZ2lsaiUiBBJzoGoJpGZpDcNo+8IjCBMhNCDjDEj0yY/KVbDRK5Ml5CLcStH85QgoiHeyek6wvBCCFTQaHJkIuyKJzYTIViEmIIaozpRZ+RKR1GgCAQFWhy5WhpjR/wRywge43yUGAebCgj9mcMiXmz7fs/twy3b/R7vPVU5Y7XaMPczlovsjHr/PLI2IamAdw6UQAZBnjzAhDiNq0KIgc6CgNUO63306dIWlzlGGjrT8Hb/HmstD+2B0cbCpumbmBtnO27379m2d8xWNSqLh4LOFMgYpitCLEYLnTEMI5nQzMqK1XxFSZmyNORp5Pno/vBnaRzi+QP+PA8vfbIQCpno8jK904vZiuBguZozY47DsZ6/4Obq9wy9j9Fv7oAdQEhFkRVURYExHb0ZUCEQRaEiIo/h+JocPgxkuaTZN+zaD+zbW3rfUsgqok2J2UO66KSIOaUxzy5MKJGXPmZJeocPMZPz0LUU4UApV3S+w6Rw8+mdDrHIm+ZL6bk9QgomY0XH0bHc+2PsWywUsoTUBAFCZlGIIFRMEhASKXNE+s7yCXHBTcKdqDqWIkch8Sm38dyNP656F3NppSMEgxMjIRi8sBGQOaXFnJTqn5HdxBWk0BRpPFuiVIYN8TlPBdMxvTqcJg6R33k0AXU81q4ntFBAsBapY+OpVTLXTJ+VM+Pq8iXv7t8x9g7hBLnSuBA97YpME5zCuqiYF2lMKmIAKkJF4rVx0VfQBovzUVVvTSROj+MOQkfbDAy9Z1bHlJbVYs16eUHNIpkcq7N3SHJeQYmn50c4e4aTx0n8n2W+ZC2ypCQvE0v2dFb6s7NRTrs0/i740+Tl0ft0fC+P3ztNas6X7/lLkyn1Nspn5BcHlOJTE6FnzYT9J+64k2n8U1/ST16V4m8tGj/15/AELD8mpgT8MUWJ1FjhacyO+8N9zLUNFyyXK5QscD7mUVdqhppllFkdbS1cnNmH5BCQ5zkZGQFPbxt2wz17c8fgOxZZTVFk5FWJFHEkOI4mom1BMljHfD7n6uoKqTK6w0gm78l1xnp5SXf/AF5gR8fuYc/+oSV4QaELyrwi1wX7fUPr2tgUucjJVCrDKofOC4JQcZwuFFU9R2URROlHQ5Y52raLWdc+pnqoLIW+jzGtqcyriGAPFjxURU1dl2gdaU9mcLhR4owiq3KqfMG8WlLmM2b5Bdf1N9FncWXQNme1WlGXNU3WMdNXiCBZzNe8fPktMzVDewNZCjxWXrMqN7zafMtD+4Hdw54iv2JoDNcvX7G5vOandz/St/+Zq82G++6K1+sfMNywLC8Q5IBGyJyyqh/L4aezyE+jlMddjnw0Ej1elkrCEGw0a6Vkvb6iKlcEl+OspdYFHhMPkaNJqvNY53DCkOcZf/6X/8z1+pLL368BR7Agvf4IITc2gX0qkit7Duy7e+62t4y2Y6YrBmtivEZeYIxBSU0mJPNizmp2SZmtERRIYjF0uiQ8KguPR0NUzIqSOs/wYwcS5qvqNPrTmraN/mhNZ8jLFWOQbNsdsgw82C1zPUOlJ2msodACMIz0SDzvd7dIKXnfv+Uvb34meMlstuI6GH6Y/e7js+EZiF/IMB2fGTkZisPYsnv/wM/v/8Jd/4b9fk+WRzPUtm1RSlFUJT44jDSECu7tLf/vT/8PZnS0h6jy2R4eUsD3wL5tOBx20TpEC8qlpKwV82XkvYymp+8ST2hw+NZw1x+QTrC5uuabF9/wYnOdiMnp0A/yacrMoyQENWUnnh3A4tMHqECSUXBMVJypC6rNCil1shaQXM017mbJqviGf/75H8kuFpR6RTPcIYKBweGGgaE5kNUrcGAJyJAhtUIriRAehEG6QD2zwI67+z9zd/sdq+sliiJhbPH1O8Zoivrihn/6l1uah4Z6ldF3Du8D1nqsPXLFWob3nlu75aEe2Fy/wBdgsXGgHCSZ0Gj9FFU57duQSkufihKVeG0uePrB4Dzk5ZzDfsdiM8dYS9f05BrGoaPvDUu1ItiMTMyRZPjg8b5Hq2jSLFNgsidQl3Mu1tfc7t5gzEhVZwQp8EFhTTzkcyVRGrwwmHCgNw+8uf2RP7z4PwGLDZosKS1ljLFEqU8JUZj4ryMDq8UVlxcv+aef/zsjA+vLGuMso/HU1RxvB7ouosJeeNq+oR063rx/w9Ufvp2MRAVgR0+R6+jqj4A03hckvzLAC0FAUuYbVosXLOsN9/fv0UGS5xnKOdqHB3S+ochKvHX0Q8uhPdCbBYehZd/H7N8ff/2RX+7eMLgBN1i6t4fYYDHi/J7dwZDJiuViQa4yNosVf/rhf+cffvef0MSiWj16Nj4JEMR0Lnx0hjxCvfKpPcooyLL6kwfOIxHXk3Lqo3jcs6L++UnG6d85lWYy0QuiZtw9k50qn7wyedYWfB584DGvJyGHx0vGP0HWJCBsugelfu7LcfbUICn12PDAe5KR/Nm0X4ap2Ho8lo2/bDB0XVwXVVnQjB0+BA7tSNM06DxjvV5S5BpHT+9a/ttP/5W3v/zKcrHhD/U/UMkayBGyBCwKmKk5s0oiqsfvTT826FxHs1wMd/0dv+z/wq/Nz3hvUd0FWi1QZY4UFuss0nsqnVMUFSEIdJ7zDy/+DzyBP/+Xf2ae1Xz3+nvM0DA0Iy8uL8hlxe7DnqHpKarIe1fEaYUMCu9i9rW1YwIaAkLBXbMn5JpKRJQvy3I283mkLTU99w87irzCGIe0ms1qRdM0eOP5w3d/ZDVbo2XG2Buc8dTlIlpOzSpCCOz3e7AjwcY4x3m54WJ5xXK5pJQ1ry//gOor0JpXsz+yUd9GBSqa9UWOXXq0kEipo2UJGj0RNW00NFxUS0Z3wWgNbWMQpqDUNevVNfVsyX6/5755T1AHhBqRJvqMlGVJlvqjkJaqC0/A33DO9j7xscJTnxfx8RjRp9s0zwqqak5RzOjd8Eg1JtJBF8TRUsDhwogJHaNtsfQoijhSnVpfeabYe6wuCtOVYVLcxLHdi1mLR+6ZDCS4VaGCRpB9jPBMReqx44pHiZZZJHJ7jxcOSZ5sgCPxsapmBC/xThG0wovocWWDpdaSzg7MdIEBgvaJ5zTwy92f2R/uaYeWsizpGanXOdZBO+y5PWg27Yqr+foLnZqfrFIEMexWIBEWzJDMDYcDw9BNcuYQPN4LnLOAiDy1/S0m9GRZjjEjfT8wjsM0uu66jt1uF81zk9BB5RVBuuj15c0jfqFKiqAgHHVZc7G8YrO8jHE26LSi5Mdrb2oITke1+ITx7qcQGDER5D1K1hFJCQpEvADm+RV+mVPqGdYI9v2aWVVzvy+5P7yh3d+BEKznC6TOI1ojNEJF9CYk+wsZbEIFezyS0TSMQ1zHmsfqWIEi00XiSKrEqSLZyYwY7wgi5umFEOj6DtO2rKprOtsw0JNRREFBCCdh4KP7SJ6t4+ToLSLJPg6dIlcxyuMl1gVQOhnihkdCHp2IvZkukaI4iRXiQJ+TO4+feE1yGpeRYJQ0Kp32vovIibA4DD4YvBghvrIYYSS+MN376C81BJUSM9QUHRbC4wNDpHzgI14UcDHiT5ye1ZE3mRKaTmHpSa0cUrETkfwcxIgUBZvlFd9983t8GHh7K2jHO/xg8dISGBAy7VEHXb/n7iHn0O4xJjZ+dw/v6ccGHzw2JA+2EBAYnB0IzqCySPq/3rzixcV3XC4vY/xceu7yWRTaJ8TxcyjRY0uQv6vThvitn/r4tRxX83PygC8OTANHaPPLlAvkJ3Au8N4gjxxuKR7xaTyRb46I144Lj4PVvZi2wWmaE3EzPAYfLNaOOG/jHeYtXdfSdocUoVjQW4NxnrYZ6AcTFZfKEKShGx7oxgN/efNfubu9wwrDS/MdBpMwyohDPwInwuNHkOsZHkNAMjDSjA1D6BhFTxCGfmzRnZiqbDNYrAsURQUhUOQVZZ5PeKsSAawj2BjAXmYldVWxmM8f0Zm6rou2U1qjM8lisYi0FBs94EYTPR7LOicITzO2jONIpaJN0WANh/2OruvQSkV/SWsZ+x47juS6oMoL1os1i2oR77DZBh3iCFXLyEigICMAACAASURBVM/LRcWyglxUKKVYrVZcrC5YLBaUsmZZXlCqJObUkDMk25Bo9muk+Uj8OBVtx09cr9eI0tC7lu1hy6HpqOeLGEidlYzdyPs379nfa7r7kTvVoNyc9eqaLJvDGScmhGfGnjy/mT/6/SO/NjFdT1VRs14smdczDt0uSYQDx7CHkCwMhAigJMGEaSY/2IFCx9iijxCV434RJ8j4yOv5Ii8lETOPyprf8lEU0fIjCmCjfUkQJ38lpTL2u1jYzEodiZQhxMUUDrjBk6+uQTgUBjC0YctPP/8jP//yI0EGNpsNy9WGV6/X9IPlLz/+wv22Y3+xAr7/4hE1kb45mTAeC63t9p693TL0Jil3Y3xSCMn+wQva7sA4jjxsb+OlFGwKj4/JCsMw0LbtZM5bFFHZWFXV9H2O3/M4ro2+QopMVqxXL3j18nuuL15Rq1W6GlNXHT7RCH92LvEbyboInI+ZcUJIMgGbxZLZvEAXiqa/YNuueXc7I/x55LC9Q2rJfLnChSNLUBHEmX1FiMTv44VozEjT7DkcdgxmoMyOPLBTlm1RFNT1PKqchsDQjZSLglGYGBuVOEnOBsw40PdR0dv1DW3XMKuiMjXIkNy8xeM88CDPwmJ9UkjpqUgZ/MhgY4NzDE2X8uiLdVRbx0w9qaAok8HlGQ9UiHOCtp9+tuP++pKw5rhPj5y2c+7n8UuPW1nKL6vHz4nX0/4OT4Q+4qh+PintvLeTWSiTh92TskD4qVkVZxQRMZ170e/pcnODyiGvJEIHfn470rQ2+mZmHu+HiXfbd3D7YZwurrIsads2CkOUmrzconeVxHuJCCVltuTq8hU/fPcnXl79wGZ+878MWf5v27t8EmnjEYp4xpmbBBCnKcqni9UTfug/BvuRWfG4zjsz8xRnv/fBxbh0L6aZbxBhWlun88xjGZPnl6Fpthg7YMw48Wu7rolF2zzGAbadoTkMOC+oF3OMGejNgd3+lqa955eff2G3O1Dkc+xoJtQ1fMqhWDy5U6NEiW2/ZbeLYgXnYmxf13UE7+mHARfAjiaOKaue2s9BQu4LHIaBAeNHRtdx6LdoCbqQFFXBbDEjKEHTtzRdBBEiWySiK7N5hUvJCN0QR6h5ockLSfA9fd8zjiNSOLom2nXstg8Y01BmM1SWITAM/R4zDszKjNWi5nJzQSVqTGHwG8e8it6X4zjiRosWiuVsweX6YrrX5vN5UtPOKUXxCLAqiuKRYjd6LD5pI2Wy2/E+ymIXixWy9JEHtXtgu+uSqhFkkHgn6BvDfvtA+9BT2C2b2St+9/0fWaxPTKp4wX/5XgxfYBQ8jfrMVR6TEeoF8v5tgogff1IQ0SpEKoUfA13fsz3s2TUHFqsrhEwH5JOW6jyFJM75Py7YHokPjuq2ZKobSdW/tWgrkVKfGRrGjLFoM1Awn5X0XfTIWy6XLOoL6rrmcDiwvW2QfkaZC8q6wDOisNw9/MqHu595++4vCC2QyrC5WvDiZkHTGn78MRLR++Gb1Gt+uWiLpHQ1LTDvPcPY03YHWnPAOUcuomO58DJdIgLnLab3OLefnuV515BlGX3fY4yhqqqowpxH7zNjzESAffp6jDGY0bGo1lxfvObbl7/ncvMSmUb0oD/NWfq7tvs+8ih9gKBQWk7LKhcFN+sXNK5kY+aslzXeGbqm5dA9IH2Bo598+cKZVeVT9OIoJtntdvR9xzILE4p93G9VVbGcRXGQ3wfsaCipYiSazpHiKDSIEVDzMgdhObRbHnb3bKqLFOiuUnElHlugiIg8BU6ImzjuFSRd19H341QQORc9BSPPzRKCIwQZRxTJo225XE4HU1wX5z6Kpwiy86Jt4k8mS5PovSTTvx+mzzHGPC7aztbPSW3+NRf7k/3tHp9gMd/YxtGUCAjpcdYyjv3ZVOHsMhYxU/eRSEl4RPLqkyEh+RMlv+LF7BXyWx992ozhnVO0w44iizzjaKfj6Zxh6JrEDRoxdT0lx4gAPokj8jyPAfA+o8zmXF99w3ev/sDrl7/jsnyFTDYf5+a04ll1qP9furATT6QATy2DRXjuwnry84an1B5/xm88K9CekSaoj0C5s7tmEk6EyNNMTU1IWZrGm4R0H4UvhnHsGcYu+YUZ9octY0KRjB3oupjfWRQFczMnK0p22z373UCeV2RlgbU5dnSMo6HZt/T9yDhGjz/nwlSyyafTscAnpR+7Ycft7Xu2u3uGYUjTmMjPjnu5x7ko3lEyi0i1iMVekIGf939JFhgdAUPbPSAJCBUiqi4sQntkFmCIVCmZwWgtWkuCVAQbrUWEiJssBEef7DnsYBn6Hm8NwcQRqhkGikwwn8VoSjNE5DJ4i84EVVGyEHNElIEhFgpXR8uSw+GAGwJ+jFOjxWIxiTi01uQ6pyCfppI8Ops+/6GfEs6zLKPSFYv5ktVyw4cPO9wYaLYdXW1QIqfQJX17YNceyC0cDm0KJj5V4PKr+5zPX6zOeWJuQzxAcnKWyzWr+ZpMFgymBRnQQiX7jVP3raQiyMAw9mx39+x2D9ysHBn+xFAV50Hyj5G2owr2U0jbpGA7L9qmS+frDo08z2PR5iOBLwSBtW4aJV1cXGCMA5Px8uVLLlY3lHqGc5aff36D8BmrZc5KLxnGPaNp+PXNX9ju3jLaPdZYmi5jNC8IoieIAeN2jLbBhfarkIbPfbjkyxXHlhqlEprjTuMt7y3WmkdIWZZFEUPftzRNg3OOi4sLfvjhB2azGR8+fOCXX35hGIZJlXssBI7eeSJkbNY33Lz4geurb5mxQVBEYnuQ/4OKtKenUkAEoneV1MkC4zQ5k2RUqqZSGfOyihfn4Pjxp3/k0D/gFFhhjk5qiUQuECr5rHmb1rWjbVuads8wDPiFRZFP61AKQZXNkmqwRoiIqLnRIUJELwkSOzqkkKwu1ry4fMnufZTqv//wK5ebK67zMik7xcdg5KN4uaO/np066d1hz6Ft8EGkPMloW2NtRJ188FgXMGYkU4pMy1i0ZSVT1Jh4XFgdC9m4v3KkjCjquWu7moo2+yjA/ehpOCFZH0NoX120HZVjSqkYaB5CiuZKV/FR3JIMn32wGNsTMJFHi0ncrtOZc3rOJ5hfiPMlK86ERoFl+YJvX/U4F9Ai53b7FvQYL+quT2r6U1MVQmBM43AhBF66yb6gzAvKrGQ2e8Xl6oZXL7/n5uo18/IKQQHoFOT27/dDPFNIPVushS+A8x8VLPLzf/2IuhamZmMq3qVIGc9+ouoc0TyPZQwjTbun63usMIx2pOs6uj7yhMexj/stNUujaZOSOdpOOGeoVY30gtI5mqGlN4a8qqnrOvKtTEaWC9zQ0cyX+BSL1nUdQxioxOwMCX/+rI1UBEvnWh4e7nh/+47tdhvtwIQkiIBXAYsj+IB1HucdQRDTEcbITx1dFxNihMCLgbySjK7FjgO5lrT9HrkLGGcxricoR1YpZsuapcywwTIMhhAMWaaAPHqdGsv+sCUvNCJInB0Zhw7bDTGpSGXM5nPWywUArWvBWZCCTIpkKi6SUCdQqmpyARBOEgzkMhmZL5fxDD6e16kli8eVnzw1j78+l92uvY98W5VYjtZaggxU1YyrzTU/Ze9pu5Hdw4HFrI0vRFXkqsYMI+vlJXW1RMmc8BwtVTy32B9vF3+mFfp4PyTEJi1hTcZqvmE535CrknY8fNwNAajIvwraM/Q9D7sHtvsHBtejVYXIAPvMGS7OkLYz9+enPlCPxoaJn3MeYfW1H1rlE6IgiG+YGWNnbK1ltVqhVEGld1xcXLCar6iyOaWuYud02NN2W/I+sN3dcWjuubt/R9s2WDsyupGuO3B3/45ffinpBxe7FCXIsq8fD01+PWdj0qKIcTrC+eTw6aZLi3SZCQlKR1J3zKaXSQauJ/Tk+Gu1WvHixQuqquJwOEzP/nw0dTQW1lozL9a8vvmBl9ffczF7SQwyVdN6+tc5+cVj4vUxtielsdgg0CJHCE2G5tvrPxD+CMFI/unn/0ITxpizGjjlc8qTH5I/Q47GcUyo5EC0zHXxwIgMZDIy5vU8JiOoHOtHrImdqhYKoTTOGKSE2bzi5uaacT/wsL/lp18zri6uuX51CclM5GwznHFmzunXchrO9G7g7uGB/X5PIL4/KEsQMcnD+8R3BIIzCBm9z5bL5WQh8FwG6lFNqFT2seWHj0pZGRcU3n88Hj0a7KqPutmvK9iO6/28cXjUEQsPIio8hHRImYHwODcwjn3SGvszxC2NiM+J7UI+2876iTlJIvHXXK1fE3ykBaweLviw/zmmHQhDECLGm+HJyFC5Ihd59JRLDYESAZlJ5sWSRX3Jdy/+yIvLb3lx/Q21XkTzY5Iay8vppYlHj8z/uyvcPqnkDJ/473MVmXi+Mgufe2oiouo+jUATu3FaLwNjal0SBcEN7HY77u9v2TW7REnoaJqGptknO6gRn3KG67qK6BAuNhPJEDIXCidHOhuwfkAXitVqwdXVFavVhuAGxnGFTKk8mpwA7HY7ttst+XqRzgjNUzV5mFjcniH0HLodD7s77u9vadtDNN7OotH9UakpfEArn+7kgPUWxrhv+r5jv9+dTK6zwDBENbQiZ9/s6YYORzgZhcu4Z5frZWrytxMf+njeeOsIDpSLfnKZyBj7ESklpa6oqoqbyxuWy2VUhhpBkdUIH1iUyyQ2jMkchEAmTpZJi3JJRo6tbbS2KaqzYjZMEp7AaXJ3omycgyKPEyaEEGjr41WntU48iAGvDbku2Kwvef3yNffbA6vZhlmxwM4Ml5sbZtUcrOdm/R0vb14zny8nR+rfxigQnyF6MjnnH01YFZplsWRRr6jyivsuMTJ5GsURkFohlMBaw+5wYHfY0o0dVbWKJGvFR16R4VEHFB5l+X0Vpw357Fj3U0eGInktCZWU8TIWzjjMGN2QLy4uUD6HAPv9nnxVUS8j5Io7kOf5dKkbY6bXa21U3Y6j4f27W8YhqgOttSyXa5ar+VfWJeLRWFRJlUQSRTRHtQJjEvE6uIQWhMR5ClHer2XiPx3HWGJCGsuynBbsES04onLnrtrH7w+wXC755vp7Xr/8HTcX35IxT8WvQvjEfQpf5pv/XUC48Hw3LgHpBCrLkoGMp2LB9y//SLcb2B922KYB6bEu8eKejKTPMwGdNxgzJuVfmBBt4Y+FnqSqZhRFjVYFmTBIBMZaBIE8j5YRNnhwDmdHdKnYv/3A2A28vvmW71/9jjkZHosM+RfBKJdeQz8M7A579k2TjJMVSE848187f0+OnM26nk9B5Cce4olXcTTklVKiZJYSEE7RUefj9mMTdV60Oec+Ktp+21ubrFOEejZdJBZgIa17P/05KnbTSDgV2JwNtM+LuM9TEyAINRUXJUuu1opC11xf3/DTuwWzes48f8C4EW8Dxo2IINF5HHW7YNEyQ+cqmjlnks3qgs36hm+ufs/l6iULvSEaUotEMVCfnxYI/l0Vbl9E0/4uz+EovPNTWe4SHGHcgLVRMBTVpHFt3T68IwSfhDWWfuzY72M8467Z0Yce4wzDMDCMXRJrnZokq+d47xKwENEtIQNGjVg5MrYNhsBsdsnl9QXX19dUYhajqaqOTEvqKlpa3N0/0Dcth8OBzXokI/toDZ/IANF699Bt2TUPPBwe2B12DEOPLCVKR0Wx1hohJTLtX2WTeMI5rBnpTSyixq4nhBAFBUJMExhRZLRDi21t4ptKhJIMQ0/bNnHMaQz7fcN2u8c5R1VVFFlJLjLW5YpM6xgnKSXBxbOjzKJZ+etX31JVFe2+JRNpvCkVVTVjUW9Q5HgfizahTvShXCnyWflsVORjpbV6zI99WiFJ+dHfa+/TY08w+jhGWDUrM2bVnD/94T/wsG1YrS64urhmXi4oZEHAkouMTCy4unpJXS45eerIzyzuc5JxeK5Oe+ZQjB2nTJKEgpq6mFNk9dQ1H3G6x/yzgNIiwqOmpzN9zMg8WhZImVIH5LOH9aeCc88r43MkSkr5ddFQT8q2Y3h9HLUInDsVXeM4Mp8vKQrD9u5Ad9hRqJpX169ZLBZkMmc+W6JygdY5RV5TFku0LvBOofJoens49IyjJ8sLhFAs5iuWi/VXF23TsZOKtuOlexzjHiF+72OheeIXncbHU6ySExNidjQg9d6z3+95+/YtWZbx8PDAMAwTghlHrm7iMC0WC25evGSzvmE5u0gXzTHS7Bn7mOMafIIWyb/1/kkRaoQALgXHCjndzyqhbkpIht6TF4qZWv1/7L3pcyRJeub38yuuvBNAVXV1N9k8lqRWMlut2ZpJ//9nmUzalUiRM8OZvuoCCkeecfihD+4RGUABXcdwhxzuZBssuwplSGSkh/v7Pu9z8Hz5LevFj7xvfybItFGLfhTv7xUlffEbfGoiBtsNlzpdOeDVmcrIdIww6jBRCNAecd5Clg/eQU17ZLu7RanAsd1yaHbcba4iDytzOC/wXpBrMyDZQTxmJOAQOBrbcGgOHLs9NsRUDKHSJR91icrLkwpKpZSBRz6BkFIdQmBw6X8yju0JIcKAkj/cZ8LnC1Ak8oPs3ns5GqJHSUMy+Y73whhjCfdWnn+Kxn3PxV8EiNnsKtk6SwqpyOYVK84wRjEtZ6wmG5zrhuBq70FrmdBHl0x3C7KswBjFbLZgOVtTmTMqE+2aHB4RFCodJO5Jk9p/R4/wkT9/SnH2JMLWT5LGn78bAvsA7o7XWNemOLkmxvR5ixdxP3h7+SYKt4jjTZt89vb7PcdmzzG0BJH2UOnAuNgspbizxh8ThUDEkVqKZLLCYkXHrtkhgyYrFJP5hEKUaeolkcJzMX2BwHN3c8t+F0fzznUjVz31oGBLfo0EPJZDd6BuD9TtnqY9YkNHITVaaZxSiJSRPE5VCsFFhwTnaY4HCpNFBLHrBt6Rc46qqpBSYjtP03SpwdcQAs2xYaf33FzdgRQcDjW3t7cRaZOGaTkny3MuFufgoiF8lmUYZZIjRLzXX6z/jCzLuPMbDDEiMcsyMpUxz9YIdAydT7FpoNIoWw08VYTHJ+GdQCEVCcBgMAY/GRLLJ8/eYTqnIw0H6zzr8wucPPAPv/lvODx/83d/x3xW8ld/OeWwt8ynM5bVikk2ZVpldI3lYv0tRhdYF2L8DidUxvmYd/hLq90/qiIdLfwuLmClBYIMi0WhOF+cM62mFFnJsdmQF5oiNzTNAR8cWgp2ux1FViG1wOM4NocIo06S8i14lBB4d4qk6TqQBjIydrsdx+MxuiCbgq7rYuC3Nhij8LajblsmpmKavF386B2F8HHajKKv8jVt06abKkZghCDY74+URUPTNPzDP/wDd9cHfBt4tn7G3/zN37C9rZHSoKTh5Ys/p252CKGoikukuMV2jq7VYOPC0dqQZwVaF3SdxRUB6WOB+9gC6Q0Uez1tn6DgvWe5XLJer3l1+xusjTBwCDHOasw/61HcPvlhPGqOCsNY1Dnn+PHHH4e4njzPo11JHdU9PU8phEikf/nyG/58+edIylS+iOHAsTa1EOrDUYXn08bCvQDgYcrFgALK8U2VTAUfJv0APjqfUBWTdO0si9kZ/+U//+/U/3DFf/v1/8luf2C+XCGEpXU2jg9wSZ0Ynci7veDy8i3X11f85dcpB9bHLMhoxytRMufi/Ct+fvsDVz9fIRqHKXOk9By2OzJjmE1mSAI//vg9rvNI5XFa8PPrH/nx1e9YfbdGScOhPpJrc88KZ3wd4xYladhzs79he7jD4dG5QmSRj+I7jzE5u1RIzMsZQiisjYXEujrnZFtyUuhlRhPSBttySIV69MNzNpAVGUFDYUqOzZHgWqQUuMQHzXUMSd/tdh90u2IsIxUfa6r6QbEYGo8ocIhIVlN3CAG51ljbcnNzg2shz+enmDs8GkXd1RQq2gFAi8Ml5/+nC4PxHn6KcFIoDJCxLF8yfbmmu7A0TU3TtDRNHe9tZ9HaYIymKErKsiDPC7RWSKmQwTDRK3q1dZZGXP2voeUTptN/RI9ehPGwuD81od2JmCPEPeQDwLswcA3FQ0WGiOcm+Hj2CXGvRPNp3fnU3vRFXEfH/rCnbmv29T465tfHwTbJ+Y7ON/hgefXmVTSKTgbvQcaiqesi10tmmiBiHFSmVDSdty1N42hbS1FlsaALFuujAEhJxbE50F43HHcNlZkRdECN6DIChSbD0/Js+gL3F47DvuX2bs/d3R27w5asKkY4uqezHVKr1E52vNu85Xc//IZtc8f+uMUUCnyOdW3kriVgpLFR3R6nmrFBy3RChX3ii0uDbVqCjeeCNArXOa4ubzAmJnjECMkYM9UdLW+3V7E2VpFGoUVBpjSFrFhNzjhfP+ds9hwZ9EC/yPooNRk510UynpuszmE15u/1RjhqoPyc9n51EqyEEyUomp9zz3rqc4WLkVKl4seklUaFOAIIQVAfjty8v+W7756x0s9ock9Jichgmk+ZZgWH5oAUJVoVGJXfU3uFj2LMctSBPg0nCxGSQ4cc3LMhkOmcaTGnMBlNE/1ZsvyEdkkpaWmj55QI2GA5tEd2xx2WdiD4qidS13tO24B2iKfRp3sB8p+QOzq+BoIYPVMWM4Tfo5RA2gaZZvJN03B3d8f2bkfTxOLl5uaG6+trpuWCIo/uypnK4hgmCDI9I8+mFNkCh+NsvaYoS3ywNK3l7nZHnlXURwuz34fOJUaHix4hIvH3iJFZMdrkhJScxqPenwiXSim6rouE2uMxqtvK8gNks+9GpOzHyL0dzMhCUwqkeIQBfI9z8USz8FhX8+Tf+eT4Lu6NPx5aychkmDqY+gaNVhWFqCjMJEZz+T6cWScWUySN90hVfyDEz7gftyXlZDI8lUQn8ElRRb86beicAy8SgT9yvA7H3VB8ZDoHFQjCc2x23Nxcsf36lrnJmFQFNniEj15cYZDv92/R4uk4cmB3uKFu99jQEKQH6YZ7IaKyBV3rcC6qbEszoSjKT+AentD7viM/IZDiURR8LGZ4DGn7PCRcDFv0GBFwzhG6eIAYo9EiIlpOaFzyNnQuRKsh16FVn12sRpt+eID13l8/8v7fjtDheD0Cknn+LIpBCkE3a3GdH8akLtj42WtBbgpMpjFkyRhZ9u8KHuETP12s+Ufo+/+GR59CPIlYDHtLj24SotHxaOuQD+7/8PB80v0w0A3uahZP62qarqVtG1yIYq3OR6Vk2zXUx4a6ralttJo4NofkMRZH6i75qu3bO3yIPoNx+heRKEtHR0cmk8KyH+NLiTQKIzKElnjh4xcx+LznYA/XQ3mctNjQ0Llu+LADcX/uz7T5dMHZ2QV14zjut+z2G9bV2b1EHi98WtWWYziwqe+43W84tluO7REXXARglBwKNGvt8BkEB52LqQJSSrQwTOdTiqKKSSDWElxcf20bxRcqUyO+qY7ItMqxmcMoh7MhTWti3GZucpbLJc/WzzhbPOfZ7JvkRaiHbI5Tg3T//j+d2U9QYz73+Qsf2ovTRmCEwZgcIQTb7Z5XP7/h5Yu/gqmKBRsKBSyyNeCY5DmSfASRynubnRD+I63ZL/kAJS8cKRF+rFKJC6PKZ6yXZ0xuZmyaG9q2I+8SWVmCGIjzHqkVwXl2hy23mxt2z3YsTZHGkWGwGRgXWoEwjOMeFmcf8lrEF3m0xdcRZFkeTXQ7jxc2BiYXhrKcRF+ZQ8PmejuQLHe7HZeXl1T5jG+/WpGrMo1ZPUpmZFnFfHbOenXk0Bx4dvE1q7MVdV3z488/cHu7QSnDZrODZ/KTC7OHs3YpUz6giBYRSpl0KHWpKOsLrjHdN/773iPLOYdSZkCwovqpPSn10rXtD8r+OjdNw/XlFd15g6ZKR084FTlPTEJ6YvvnGhX0Hfv9z1jeN+x9YnQSxjd3mp5mOsfLislkMiCR/fvreZwxDzSywoQMTxYio9KZjILZbMFsuqTMpvi6QwqFUhIdLLbtaOt6+FlKKaTySBWomx1vrl7x05sf+Otvp5SoaKqs5D3OtRiQgw5Py93ukuu7d2wON3ShRkiLFJHJFRLSnpmC4DvaxkHQTKo5k2pxn8v2C59IJCFnaa3EcUSPqt7jtkkZDyd/Un877754xheGEl+moOc8KZ9jkS1S8+EgjY4in80Fh8Wy3e45Hhsm0zEnzw0ig7Ff/1M8K9kLW8TDskmmSKaUvkKBNODNqazqG06VPjX5gIUknijSRPgYuvZpTc+/pcLt0e/JUwM29tE7sSu60YDbf1C0JUOOyEsLDZ1tqJvkh9ZE3mrT1dT1gbqLqs7OdTHuyccCseu6aCDuXIp+6n+uo3Z1bNKERwmJFCqN4AVKxqIsENcbIRrRK61RRmJ85C8HASHIoWALqeAPgmhAT6Q23O3u2C0PLChRKBwm0ewD02zBty+/Zb8/crvdcnd3h7+wREY8sbD0Dq/imbs7bLm5ex+Nnf0B6w7Y0CHVqZnDR3W5UpFm0zmL62I4X5lVTMspZ6tzZrM5k3Ia17AN1HXL9vaOm81dVN4naoJMmaLxjNBIqWK+aJZRZnESFhXTUxaLBZNiQRaTRh+g2R+xfnl4b/yB0Wc9Jswr1EDSa5qOy8v33Nzc8Wz6NS5Rip3zMS4GRWtbMq3gCbRKCvlRlO1h/zaEzIUP4SoRkm+QUEyKKevVBbPLBW9vJU0XF73KZBqJpWw/IcgyTWgEh+Oe67trDvWehVk/ymUb4kTxg7ty9JGJxd1jRVuPFKkREfFzDgUlDUppXB0RwV4x2QsMbm5uubveYEzGxcWK6WRK0zS8f/+eZ+s/o8kbjDIcugOHQ43RGc8uXmCM4ermiovz56zOlhyOe97fXGGtZbPZcHt7/Vkdc08Kv8fjExopYqqDSN0KQeGdw7vEdfMqtlGhDwfXKBmQIrDbHdDaD4a5SqkhnNt7P4xDB05UKuQ2mw2/637Hf/puR1HMkUIiSMgU/r4i70HUzVjL96kE9YcF+eBds1XvhQAAIABJREFUp9R9c82HBM1w39S1z2dUGnKRM51Gy4torBzHEkqBSxmeaqQkFTLap/gQRR8xkiO+hk+CXQHMqnn0MpzMqLsdSkqMivFy+BiRBqCUpG2PUdlqDCF4rq8v+fnVD6wm57xcF6nnflj0+oQt1Ny6d1xdv+bd9Wu2h2usbzCZSLTCSNC3AYzJkE3gcDwg0cznaxbT1SfseMmnDRM5J8akax81jg+DrpWSeBeJuj1n0rnHi7boBfcR6njwp/1RqcFnSQiHdfHgdVYRVMB7idYZWkiMmGKY0NRdskMSSGGGvj0aj6tfLnrG9h/iQaxSKuKa7sQ3jGjHSQV/Hys4rXXhY4RXCJCb0aEkPncM+sdVsP1SMzfOIfCjkV8YnMZO5PqB84yPQgAbOWl1e6RpGvb1nsNhR90e2WzvODYH9vstdX2g83bYL0IImKyIa3S4JxPNIr1WnKjFeULQkbojtY76Xh+nDaQzajyJEEImVNpx8iTsKTCxkQ7BR6Geb9kdNlxevWWRPyc/mzCVMzJp0hnZIZFcrC54f3HD3W7Hfr+l6WpyadASvHfpfUUqUm2jye223tGFGufrqK5OIqgQEuqOROfp90ah8BhZsJisWS/PePHsK1bzNbPJHC10LNqOLbfFLdPyisvbd0PRppSiyErKYkJZTjAmTh0yU1BkJVpnqAQYGGVSHOEJaQ79Ht2bIYSUZPdLCJm4P+787OcvKdqciwdI31GWpmQ6naOk4bg/IpyI0U/kkRd2bOhEYDGZIUNAou8lsH3y75LI4r+MFPrTlewrKheDtXNZsV7E8FpjDMduPxzup80rfgImL3FBxm5ie0tdH/Gzx73keoGbC24o2saHwjiKZ3yg94T5z30oDFJqvIO6bmm6I1a2GKM47GtmsxmHQzQtPVue881Xf8G8WiC8oGmOHOsdRgms97H7CY7ZbMLzFxes1jPmtxWr1ZKsMAhpmc1K8lzR2QOb7fUXd6l9oaq1QSmDlEkZlZId+oNJazNsIv0IcCzwOB4bhGiHa9j7YQkhopN7svfoi7U8z1Eq8hbevnvN5u6WqVqSZ7MHTBLVh/GNVpP8YmR6THTvFZ1SykfMof1oHcmTjUz/ngcUOv68yWQSORoPfHpOCFJad6OR3wkB9kMlFfAJ1ZIUWZWI5ktubt/GBATZIWQcd/ggYgetJfvjgcwoslyCCxyaLW/e/cxqtiY3OavZ2cBbCQQsFknM49w1G95c/8Try594f/uGQ7MlyC6RcAUipSF0XYfJshgA3Vhm1ZTV8hnTyRhpGyFOj2wiCkWe52iVDaP1e8KCkTdjVOAHrLMnBan5MgXpMLoZqcm7rqOxNXXTYPLIdRNaYDJFXuRkuqRQCwwzMlPFJubeIHiIiXik8HngGhZ4srEUQPYAoPwU6zl5iuD8eECIeOR3+iN6PLZ/jacnzsexnhIpDo1TrgD4IVKu5UhrG45Jodm5Fuc7DnVNazua5kibjI/HyFrd7KnbYyziuhpEiPwmrRBS4H0by8RkZi2URuo4NfHBJ9ufZPugFEGD0Kn0D5ERKSzRIsODt1GROoyFg0jNSfovRGBBeBFfU8XrsT/uePvuHZV4xVStma4XJ6yxixYdiuhkUL19i7WW7XbDbB5TkLTSaUScUhpENAS2dLjQxu/5Dhli4xlch+181G5ZQZ6XeBugE5jcUJoZi2rFs+VL5tWSgiqKI7RiNvNM1Ir5ZE1eTHDYxBuTlFlBVU6piglZVkQTW5WjMQOxoKdvRX/LB1OXMa3xYyKV8XYlPv/5i5G2/kU7HIoY6DubzSiKgv2+jujSwCjLqPc31Icj02/LqFD8F2A3PIp4iBHa5sPI/+rEbJuUU2aTaTz0ajkQ5AkJZlaRDF8WCmEVzbFlu9tw7I64JGh4CmvxyRT0qUSEhwVMX1h83kMi0UnRFcUEWuthNLvf78nzfCC+V1XFy5cvebZ+Tr2vub3a4EPN/uC43ex49+5NdFvOv2EyL9Am48KcI6Sj7Q4435LliqJU1HXMZvzYpzdGDsNIWRFRtph3qZSJ1zwIgk/j0KCR0jOpFpGH5cUQX2VdO8RYndSnJ36b1noYlXrvB4FDzMsrmUzi2Hi7bXj79jUzs2J+lnxwgkuFWiA4j9D6A0bQ51ILxmvhnhKWh173D+9ne8oLFBIp+qI1qoc8gaIqyfMSo6OqN6YI+MG0OSTO3Mk01Q6SfhSJdyLSmC4moRcUzOcLztbnfP/Tb+iaI23XkeXjzcIPG52UILRCCYmta65vLvnxx+/BK/7j3xbMTDzlXWTr4IlB0He7K356/Ttev/uR2+17Ot+gtRj0cVreV/2CxDsoiynnq+fMpqtPRqMl8h7S1vsXhSBGRVtsJILsx5Xunu3HlzwkcghAGBfUffEmtUcIT1AZShqKoqTK55RmTiYWrFbrGHyNiOKyofhWn1AA2cHv8MN/Gwu6DxgZ4WGB8nTRd8pwOsVqfchb+/elHR3v5Z6AUD2vL17vMNI+BgJHv6X1Dcfjnu3hlu32jk1CzVrbYH2g811Sw3eEEEPZe49MIT1taHCqQQgbucpagIwiuODbWDz5+LsIDUH5wZiaJGTx3keakE1tadozTTKWFr1qMcR7DMKgwP7w7JIJbXOgAsIEbGe529zwlrecFS84Ky+YlVVa68RMYSnJs4KiyKnbju12i5/6k1IeRUz9bbG+i6kEMnLXggsD0hf3NYlSMe7J22iyK0Ok3BTZhCqfUJgZs2pJwRSFSvw5hUGyrGZkZkI5meJES6prUcpEFE2XGGGwnUViUCq7hyylS06QEfmMtjqj027su/khHHv6O9mvJPkFz18GtmmlxwcyQ3GQ5wUCFX1/cORIfIDtds/7yyuW8ynnZ8+wD8a64tGS7PeB1EMKaRejCJH4M4yJXLAsKwauk/cdzncxvklKurpDlAKkoOka9ocDdV1jsan6fhxp6w/qh+OXxzq3seXHvc3yEz8RozNmswVeeaRxOBkd1KUW8cbwfuB4ZVnGarXCTRxa6Ej6rI9cXr3mx5+/j75nlcITXeg739G2R+r2iJCButkglaOcSObz6otL7v79ah0PK2jwLl63WDuk0amMwpbQnwGqVwkFQtDM5/MBOavr+gPRwWw2wxgzHL5aayaTCVJK9rLj9eufOZ9+xfOzFHA9jJE8Qo4jutQXb/Q3Nze8f/8egNVqxXq9/oAn9yFeEss5GxxaKE6a1SjFj0LrqKjti5FecRtwSBVG441RfJofCWRGO4iUJnW60WlrNl2wXp8zmczY7Btaa1FaUSTvLoJD4inLnD7TLRrhWna7Da/lG/CKSTllvTqjKPOUGRg3483uhrc3r3n1+gfe377lWO8RKhaQUSwRi3FjDO3R0ZvKSmmYTuecnT1jNtgEfQTtGe6TPAml7tvw9GPO8X3oRokmfapJ/1Jj1PRTN80+23U+n3NmzwhyyrGuKSdRaVtoRVllzKsJVT6l0Au0n3F+/oyymMR7wI2YJEHeayAe3zdHbUHwj/Mlvf8IuhQ+KFZ69DaO7uXpZ/fPIjx4/Q/37X9Rn8N/reJNRFGNDZZgHa2vsbajczU2RHXvZnNN62r2zR27w47t9obdYcuxjlnWCIXz0b7Ii+RiL2MGtguWotQE7ZACMqGQ+pR64b1DBIUMAeHjGSUUBOFjQLyI+z42Iu4+RMeD4OwwSdBKQZCJ3O8Tr1iMLG8e4WKH5HOYwBFtNMEq2sZye3vL++kNN7M7cpWRGR3pO9INPNvejupwiO4KuTSgJXVXs+u27O2e29trNodt3O9InDypMFrF1BwRc1TnE0mZlWRZlWQxGfPJgov1C86W5+RMopcpOtpiBT3EvxVygikNjnZUePeIdsockFl8v/YBuhWTriKvUHYQ1FCXxci3frNQ94u4D9If/Kgh/Lxn+YXItR6artT9BxxGFxhZnJROwSISEdJ1lsN2h63tkxy8UwEXBvHAY5Ye4Ska7hBOHdE2L8ToDfrhnyihKFSJERmZyFForHe4zqOFQklB3XOigqfrjjTtntYecTR0SArye79BGDphN3ydyKn+VKT1Ut4gkSFDEb8GL/4n3QQkvdVJ/D9NxoTpZEU1nVAtCoRxNO6AdS3/9b/+XwlliiNU31mM1kz1FL+MGWdHe+Bu956r69cxP3aZ04RttMpoU6yJbSmqEmtjUVtVFcvV4hN5K35Umg+GJimw3aCEiuqrcXqEcEgFbdvE64VEisSt0jFmSQZYr9fxYG87rq+v2R33CAtGgcgVL569IATHbrdjvz8ivEJRooNE+CPvb67ZHm6p3ZGJmowWkIyxUqPRW4+ajCkF4pFxXEhddxw0NFxufsdvf/ptjBszf8V0VZFRYp2PvkCjFS5GB27kHvm0odwvMjrfEVS8p4xUcfMljrkjUuxSE3Ii8/er0CEG+rNQJ7TkpK2WTPMJi8mK5WQVY2y6Bi0URhss0YMNESjLiqa1UckbLB0Ba2vk4T06E7T/dODi4jmTSRnRhGARIrDZ3vH66hW3+2v2+y3OWTKjkEok3k9E8IzJ6epj5KMKERVheeygc6qkeZUfJqKEfgM9rTqlxcBX9YNXXQPCEUIcy0rEPZ/A+OxBtJDimWKKgXqaRxbGh3uMqlIYptmSi9k3GDJMAY3tWK+/RgmJNpIyM0yqiiIryeQEFSZM8jWFLmI9FJ5i9D7F9x0nbz/W8fvBC3FIWkgNwuDd1yeToH4BQZNP7ODjF/wl9M1/Et/t0Sin/w4GvuGD5mn0J5GaHRHlIG+vX2ODjR5pXZ14aUcaFz09m2aP9TEK6tgeONb7YU/tfFxj1rvkT5lG5eqk9PYipWhIjVQRGfUCfNfhfaDIzCkWrUeh0oXRISRPrlGTEVJ2TirsQhAEIROqZVBax+8nNNr7bkD2h4JegEjimeAVWhXIPMftPLXdc3e85Pb4huIQuFieIU1cvA4/jICDi/Shbb1JJs6Su8Mdt7trds2O69trdjcbhI0CQhkylJQUOqPI4kRJoZjkS3JVRpGR0BiRM50uOF89Z7VYo1PBJonRiCGcbJxCAGs9UseJ1XgyJJEELyM98KnRigIl9eMLTTxA2mSfJ+sfXZ/ykTvkY89fPB5VAayzFDqjpUaQk8s5+12LbTzBxu5bqA6Fpsg0RqqYC+Y6vLJsuxuMyillleQKIrkly/sBu/csF/y9uvj+NZD3SH4yP1W70Uk5Pub5nPP5M56vvub2/S2HTY3JBcIpnLdkZU6mNFIEutCRZwohLT/+9M+s5wv+5sX/EssRedp6nAOhLM63Ee0SjtxInCKGydoOLTRSCUIL9caiJwWzYsUkmyEw9yNRBPcLieE5jZxczvPVd9hOcXu4YvmsYvlsyvu7t/zqt/8fUmfU9Q7XWA7ZntvrO96/uWZRLlBCk5UZb25ec3B7JuuKtjvwqx/+HvUqBnL3Sszlco0NGbvjEZNXLFfPEbJInDqeHPDdW+MjJFFJxao8w6iMTBqUlIjgIXRI2ZHlOVIq6sM+IbYC6STzasX5+jmTYo4MivPFBWfrZ9St5R+bf+KH2x9QBUyqAmFavvv6G/b1DukE3cHh9hJXGCZyyYvVgrev3/Dz1U98vX1JsZxEgQwCE7LUjY4I3aK3KPUDubc7thhTDR9NIJqKRiuLG67vvuef3v0f/MMP/y/GlBRnjuf6DElGKwL5+KYNHb6zCDxGKYRSZMqkYjZEVZc0CGmSzaaja2uEa8lkiJt9l1IGQm96ndoVZZCZwDVwaBuOnWWWSRBuOP16Nz0BLOSc//jy7/jN5O85bO7YtXc0RARaKHAyoizaSwQa6z22q7ECRAUHcUt32HJjS37a/pqiiCN8IU/xUF3XcXn9NnJJyoqs0JhCgPJ0Lo63N5sDZ7MzbOuotx0vL77mL7/9SwpVAIqASsQMeSp6/akwUbJD+RahIietyjNmswmdqhE64NwBo+N4pOsajtYjXVKYumhwu9m+46vFC6Dm2FiKrEws4zg+Eo/sOdy7Uw0eyYxn/Ifz/8Su3CKNpCxL5rPlvUSULNEklNRIDLmuhgJ2/BJGyy8j+D8wKZfqqePg057dvW1KfoAIPAjVufcsPqGysv7Er4qcMXW/ffUfKdT8g2b6YX2d4uIGfpEYY4SnMWfA0dBwbKMx7fawo7E7Nu0VrT/QNDXH43GIibPWjkQHLqG2yRAci9ceEaBrO4Q6efjFSDWSoj7DdklUpmPkH4B1UZSlcNDK06hMRl8dARgRUFrhGosIAYNEqoheO+vo2pbGdlD1BXvkqRIsCjFQA0KwcT0m+WMY/NAkWikcFd3eI7xF5wIvt7zb/4biziNne6ooPyRL57nznuZY07Ydft5yW79n090iFRybhrvNLbebG/b1EeMNUzMbBBa9jdNsOmEymVCaKWfVc1TIkjeaikKepCaVjULnGb3lzz3KeIhc/ILi0aZBcIpgezxKc7wK5Sc2DvJxL8X0ep/7/Htx2qQYB59GH6k+XikGc5+QpqrIOV8vmU+m6Z5q2TcbqryklCZ5nqSuLkRPpg/fvB9UaOoXA+PlRzovyaScM8kXFLLCW4smgM4Gkq8SEikFmZY0RuK9pW521PWeQcKdTPTHBMEQ3EgR45Fpkxc9MTzIFPxq0CLHiCxlkcn7nXR45IMfva9MFWSqYFrNkRlUE4NOJP+qmg5wdFEUMadRaXabLaKRZEVOMa1YzJdsFptoCSIixwbhCcFRFAVaZxidMymmZHLCtLCcry5Yzc8/seZ/+t8UWYFROsqxvSf4lMMoQgqPj9EgvrO4RuEMlGrC8/VXzIsly8kZi+kZh7phs6rpagGZZ7rIkIXFKEOkJ0om5ZRSL5nkC3K9pDCWw+FA7Y6837xnvTynSBJu1zvJP5jj9DTU3gRZ9JEFiXMUZDySGo5smit+8/rveX3zWzbNazI/5XL3M1ebN1zMZ0hZYHHodNJrIUFHfp8MieUso2heifAouuG9jQdLcImcHr3felK9EHrkNaUQOok/dDZkf6oHm5VMBg8CxWq25ub2kjvzHisbMpVBfhodegTWepqmiYiuUWlM23Kwlv1hE1WT7cmCZUiysIEs0wM5yrkOOkFwDusd1jpyk0VOTGcRQjIpZ0yrBZWZpcB7nSwIHkG7xLD9RvNg2w5jcpdGND50BG/xXiI82KDBOlwt6NrIO2u7hoCNzDjlH+j3P7L+fYynUUgmZsGzuWRZtEP8WlVVwyj/KfrElz3kx+a1n12gPXx+OkxLDgYh/oNxzhPChCAeByxGBdv4dU//IEBSEX4IgZ/+XzzyEuEBp88FG+00XEfrWlywHLpjpIoET+uO1E3Dvj5QNwdqv+N2/5ouHGjbPpWgvcdlHo/SPxAKEVDZKdpsvAZO60AN9kfY9LO8JHiFCpHbNVwnFw+gIOJ1EYD0IjZxIiQ0OgpYtHInSyUREuIW2eEuqbbBJ5GTQAuF946Q3peUyTLEBryT4Lu4T7uWXWu52uSYq4AuBCoYFrMVlawGXq9M+/1md4spog2OdVG4J1EUKgeVU+pqUF33fOTZbBaLNjVhWVygQ/akyO9jxZT4nBGj+IL77BOQXzHw0z7v+fcq2u4pITn5jkVXcX/v+9NZhREvmK7ndO7A+8MlN7c3hJlnsVzdgyg/hzPypY/5fM58PqcoCg67HYTYoYRkTgonKwCtJT7Y2Gnt7oZO6rGHS/DvxzhtY9XjfXn5p5Lck19PiJyB/eHIzeHA+81rNpvbyM8Tgem0YrVaIaXk/ftLmrzhbP2c2eqci3WGaw24jLatKavoI3U8HqmqGPVVVROmk2Uku1uYz5esZl/93gsoz/NBNRuvlbjHtdLa4IOgI5Lmg1cUxZRnF1/x4uwrSllRmhkT17FvalSR4XVLNdOo0rHdv6PrLJ21MauyqMjznMV0zmQywfkDXRcFCRfr5zyfTlDIxH9TvwgEBAJCy6FoCz3SRsPt7oq3d6/41W/+icubNxybIz4orm/f8+byDWX5gpUpT++7L6r6tt/6GIyOJvmcxOIl+Ig4pMveHxLje2XYwGSy/3Au2lggyHQ+WKJ8iHTI4RiOiIbj5fOX3O7exzGQj7muWiks0DQWp9yAmvUmlUqpe3ywPk5tPN713oMXLOcrcB4b4jr2XXRttz5K+qt8gms93d5RqhnrxTnr1QWlng496qfuEQqFEjoZEDuEDzR1Gn+6gPMCEVz0O6wlrgHbOppDRxM6SpF/ti3PmKeaZRnL5TKta/1Fvoz/1h4fBKbfYwbd57OJ4c/qkVmkvN+gjqLkRFJl+tGKDeONUoVfOBQ/jJUZSkZhcZGVRuc7ju0x2m2kEWbnLZvdHTa0tN7S2DoW8TblfIaWu8MlNnT3RSsjhfs4b7YvKsZxZo9lQz51nvTn0YnrriJBP5xM2YUI0W5igGUlIvTseZVyOkM0whctQskUj3RK03v4e4QQ04nGsYFKyKj614pgbdxfQlT8t63l+v0ttnb4RlCYgvbCcrY8S8k2BqdCzCO9umY6nzGdTpFCkOsMUU1j/ZDnw8i4R9n6r1zmGEoM+T2D3j89PqtoCwPErkT0O5lMZmkTPwXBl2VJmVegYlHw7t07Lm8vwQWeL78aEQL/EBuOpBITFrMFVTXlZhs9yIxReCHpbENIggKBQRlN6AL7/Y7tYUtLTUa4l2Yj5MlYt23bxM/yHxRtUd0TEaAsixmKT/vS/cJBJAUhdDTtgbv9DXf1FXf1JXf7aw7NLu5pSlIUBXlh6GzD5nqHqzzr1Qu0qDibrtAXFdpXhGA5v1ijtWSzvWU+W0aVm9QUeYUQMQbImJwqm/1eBP3HCtm4QctkMmoJNpoeZsZAkEyqOdPJgvlszTxfp95RUSjN8+cvUIXmaPeozCJyy27/nqZpOB6PaJ0TZEAbyXI556uvX+LY89vf/Yarmyvutnc8n75I7t9gfUBL8aECiN7iJiQTZj+gPQ7LrrvlzfUrfnz7PW8vX3HodgQNXgU2uzteX75itfqa5foMjYlobu9n1tMBZER+gvUIY5LyORoASaMGltDxeKROIfCqv5YhHRBSImXAtjbZz2i0yShMgREZ901pex23Go1/JS9evODtzc+UPxdsbq9pjh4S+hWcpz3WcXQ7mPoyeD71nnm9V+FYSa0Td8YYhU1oiccnricJ4VZkKmfbHLFNYL2acX72nNXsItkIqU9S8Hrv0UpgdEZRVOS6wHUW3zmEM4PgRSmD9CZyfJAEbVAqx3uJbwPkvVda+r73H13+/druFbB9FFtP9h6v/cfQmC+xAfpDF2xPU/seJiXIx3ls4REOUE/27g1jgkAJHjDMQAYb/4XwH8BoURjjkj7C40W6xmk/9sLh7I7GxrHm7rBlu9+xO+6ouwOta9lsbumCpXUtrW2GVAKfBsOt7WKiwOgz6+13xsbeDwu2p/JuH4pkxqKAD62j0gBajNC2hLL3xVd/NoeErMaxazwT4rTVJWK+Pymph31ZRTU/kuADXRewNnocehnwLpCLGMcYnEgIvsJ1nvbYcNcGtHvLtJpS6glVFu09ynKCJI4yu8aDlRgRA9ZLM0Gk2L3JZDLsIzGKSicVqBjw3If3zsP//7d8//zrFW33rDWirNeYPOYTSsW0mqLRA3qiTTJQxVO3DXebDbe3txQmp7ENZsQ5E1L+AdJOJNPpnOl0jrzUdLZBJQ8Rb6NypWmOKOFjlI8IMest+eZMTQzoPkGXkeBtXUvb1bGL574CZ3yzynHRhvxspE3gMZnEuYabm0vebX5m197S+iNdqFMBGseN1nZ0dcex3jMrpmitycWEgjnZYoK0BVLBxTJ6a62nB0pZRQ4GvVhaj/zY9SfECH2E9NujLqQoq2Ta6F3AOUtztBRmSqErJuWCZxdfc7b+ikm1RJAREzPjMlkU80j6vTmy2exw6jhsmrFDDHRdA8ozXZTM5ZT1syXf/wybzR3XmyvcV3+FQiGVIbgk13swng645CLj08YniBppz85vubx7zat3P/LD69+ya2Psmcw0aMHmuOHV2x9Zzp8zq9Y8L75K24/4EH1QOrqfmlMxp9T9UeBmFwUjvfdbX7T1yFvw6b13EukNmc7JszI1RyqOSPuYNzEW6ggUjmWxYr06ZzqZ8/b2DYdDjVcWdCywmraJfkZZNrrOPvHUyiETtv/qD7MTf8dBcElwQRqJq3RgSPAK14ERJav5My7WL5lUS+JF0R9Hev1peJfJgkwXCK+pD1HlN5tPMSruWbkuoiAo9F85Z4tnFPkkvZZOhOWouBPi00xf/Mi8dFyw9WrmpxqYPxak7fFxJ4NK7xfHt0+RvB+gbOGR2yMQEvpLMsfu2c5ucPn3wuGCHyw0IiocjdSjk/8tjYuOAMfjnkMdU2BaG+OjDoc9HbFo61wbkwMgehYKjQunhJbHPr+xjdPDSKyHCuaHxVkIYbCoub9PjsLRBwPu3rdPDYdHDASK+cIRRpNp3abQPqlwoSUES/AprUX0xro9qqlGxZxKnLmAFDF/1lsITiBDFPVplRGkjxxkVExS8ArvJMFFpH8+XWBNiTE58lwxn89ZLBbkeT6gk1VVkcns6XsKjwsR8ftjvXf+VZG23uneu1iElKZkvVgznU5ZzhcoZLqRYm/mg0dHVvdgU9C2bYR//8CFsUQyrWYsZssI4x52hDCiF0tJazskgUxNkFrStjW7w47DcQcm5TmOira+s+55PvEA9ff4RdE89lS05Xn+YdH2sRSvYcP01M2Rd5dveHf3FlU5hHHYrk2GqGBdy26/QdsYAF2WJVoacj1BIskpWc2eJZ5gCXhKGYs0nQxn5YBrffY0/8ktv898G3d5UpzQWe8cQQuMKZnP15yfv+Bs/YxKLRGJBTj+bbQy7PdH3l5dUvsNX309H6KD6rqhbvaRmxFi7qULHTa0bPe3vL9+y21zw1n+HInA9d37ByaJAREiRdkLEFgsgZv6hrc3r3h88g6WAAAgAElEQVR1+T0/X37P5c0bnLT44CPhW8KhOdBdv6b8+VdkumT9N+vEAFKnMdPoIBsTr0MISCUG8vddc8tmc8uh3uOCj+hckODlEPKsVcB2nuAiWzTPC6pigsFE0c/otUJv4dD7bhEjk1aLNS8uXnB594ab7Tu6ukUXcdToxCl9oy/Y+jit/u9O9gEPG5iQBO+WIDxSnOLNlNAENK4F7TPmkzUvn33LxflLCqaI9PuLsQDhIXek97dLa0ORoclQ3kArcV2gWE7JTBybZ6Yg1yVaFOSywMiSr599y3p5Qa7LZB1w8kcTQn1SwTYuVMcHdx8/9sd96PinC7Nfqmk/RfX5QDzg4R51IuDQunf/79MHomjACofzXcyKds1gULs/HjgcdpF/5o80dksX6sHUtnPRx9DhorEzFu8tNnR4YaN6VMTP0wsHLjsVQqOvceE1XgsP/64v6h7lvD1BrRk8F0MAJQaEPAiXvENPCK5MiQjB3Tf2DmkPCyFZTvhAQEc0uKdWCMHx2CB9zDa2VhCciOeYMjESXmqU0RhpqMoJRVYSQizYMpUzq+YUpmBaTTEmx6iM5UITnEMrw/PzryizkqIo7hmEa6lTxJofjH3vUx2iipZwykP90+NzizYE3jmkMWgUi9kSqQXL2RKJpHMdWmkCntZFFVo+LViu5lxvynuzfzd4U/1hAP5pMWc5W1NmEzb76+Rbk2TFRqZZfkeuA1J5uq5hf9yx2d3CPOUoBj9CKjzeO6xtR2OnR8ajqWjr0xAeLswQPo64WVqEdDjXcHv7nrvtexb5BKkC290NVVXFIJGu5XDYMTNLZrPIIQDIRkXBNMtHvPvoedPZkMLaU2kkHt9fv/RRVdXQTVprkRKUiSajAFW+jCo6WZFnJUVeURTVMKICj/M2ZsWlMs61UB9bmtBRH9s49jKSetsgdndsD7dc3b7DiY43719xt7ths7/j3dUbrq4vWX91EQ+BwXfqdHKMN1YfPFqaNBLd8urt9/zu1a95/f573t3+xL6+w1QGb22MltEK11qawy1vrn6kzCe8XHzDenLBcjCKldHgV6qRZX3itQQ78M4OzYF3796w3d5FxZp3UbYfJL5PPcCjky+ZCLHLnaSIlrHcdRyPFd9kjy5GF8XlbMWfffMd77fvaO2BJhyRXiK0RBUClYqP/kB4OCp9WLT0aRhCRMJzH0qtOGUp+QDYAJ0i1xPOVs/5+sWfcz5/DhhCGpR8SlvWeyQpDJNswnrxHK01netYrc8oioJpOaHMK4wqyHVBruMY9auLr1lOV2SqoI/vEZ+Bhvf3+FOHyrhoe4zb9G+a9xaeGnU+gqQ9bH6eQuHEw4b0ocFJT0yIrYulI5pveFzoaGxD3URfSWtbbjc3WBeTCCKSto8eaU1D5xv2zQZLm9ZvzNmUMgIKQsnke+ZilRAkMgR8L1kV0X9DCvmIz+b9MedTvLWHo9DxSPThOvggvF7EZjCIxPYbS2n7f5syvAWe4MNA4wghujoE7yK5I4mhpYpThphzK7AiIKQmiERGkAKlYoZuYTJmZaQ/GJXFdBZToIUiywomxZyyjBzhXFdU+ZRMa0oTxTdamjgOfaQoc95h035CygR+rHBznrSPhEfRzD89fqFog1PchUQyKSaYwlBm1WlzSvVBl4xpC50xWyyGg7tf9CEkfov4779hCQS5ypmWU/K8TF1+vHG11phMU9f1iQsho+Hpodmxr/eR/RPcqOtOYvGU/fhwMQ0dergPoX9+GkL/AUim2YSyMiBiV6i1xIuO4/GIMRojNc5FsrjIBJPJhKIowMWRlHOg+2SccNoqgwCDiDz4kEYUvfl5SJOn37O2rqoKo/M0WovkfyMjB0/JqDrq6oCt5Sn9wAscDh8smciwrUNIi85ylNBobchNgRKO/fEw3PxNc8R2sZh9d/WG2+0Vu+aW3fGWfX3L7eY9d7sbfDJbDCmC6OHtH1Mb4sHU2wPs6y2XN2949fZ3sWDrbnChZlJOCU0c9ymjkcbh245ju2Gzv+Lt+1coFNNpmfht0QtKInuPkWGDdrZNYzrY1Xdcby45NjVN18VjLUn+h5FccAndVYjEIcnzksLkKcb55HgfxuOsnv+CJtBS6hnnZ8+4WL/g+vqSu2MMbVZCooucbhT31JtU9wi61vpeodsXdX2SwqHdxkNHhhiP5RPBoAsEF5AuRs4tqzPOlhcYqpRR+wvcqgffjJ1/FCJMyxUvzl6wXqwIElZna8qiYlrNyPOSTGUYlVGaKha52QRDkRS18n4R8kmRT/cLth6J7IvXP2rOTVIqPxrXM6Qk/EKHJx75eaMiMM0sRjGHKdy8jzrCcXX3JhrROkfb1RxSbue+3tN2Rw71Hu8tXWjpumYQEVhrccFxe7jBhegxCFENboxBJ8GJEoIg1amwCKkxIrrLRjsMde9z7tf5eM0/9vVY0f5YUffU93xwMf5PeITobVROZ5H0Ik5afCw0ZQiQLFSC9wgXFefSR4QLrVBeo9CY5P5wtljEVCOnUlKNiKb0eUGZ5+RGQwjk2lBVU4zM0DqjqqYsZ3O0zHHWI4JEa4MRJhrXJ2qDJI5vXd+niuiDqFB436BNMSQ1fPAMKPWnIuyLijaVNp6qnA48q2+++iZxDixeBsqklNs0G243tyilmM4ndLbl66+/psrLoXAZ4GXxh3kLkoyz9XPOVhf88POvOR46iskUIVRycXdkRY6QgcPhiM4UeWG4ev+Gm+eXPJu8HAKBexD/WO8T9+2AMikLLiUTuMT9yfMS5aJKJs/zYVYvvIyo9yc1ux5BoKoqptMpr6995AjODIvFAgi8f/+e1eyClxdL5pMlZZnQKhEDyIKXdDZg8j6qw+O9QGpx76YQDzZa+S9ww+z3xyiSyErqrk4GrJ7Fasl3333HbLLg5mrL3fUeZzsur96ivOHPvv4Lvpq/AKAwBagMB7Rtx8uX3zA7m/DT219xufmBf/7+n2naHevzFc4JbjbXHOrYXd8drmjbGic8m8MdP7/5kW9f/Blfzf4cIzW9yOCU1xiLeY1M+QGw7/b89vt/5v/5+/+bNze/RZUOUwiaOiYWeFHStY7D4UCwCp0rGrvlx59+TRkWaCFZrqdMTXT4lyqOJZ21w70VCJhMErDc1Df87qdf8dsf/olf/fbXeBPQ2rDdbhNPTBJEHJR0nSPYgG8dxbzk5YuvmU0XMVgeBnNd8cFoNvFb0AQ65tM1f/3d33Ks9/z9rw7st1vKecn25o5yEhNF2rYdYsOisa8fGpfxAea9H+KiTJ7hbcDWFtf5GHfjA9IFsILQdvzn//k/8F/+1/+NZ+cvUiTVL9RMD0ZrbdOQ5TmBjmPbUhVTvnv5VwgFpsiZL+O10FJHaxtpMDJDoWJCxhBVJ+8XIZ+YWPKYWvzfg2p02H+6LnKP+81AJP6UT8I0JQfqg3jkfVtXo2REq8KIr8RoP/XJYqd2MQ7qeIzB6q07cmwPtN2B/TGGqh8Oe+rmQGOPeO9obQPCJvFBIKikjhYpZUUblEj52CIWOUEIXAgEGwgovAyp+QkxUkkSRT9BErr7MXXjz/gxkcnDx3jCNAAWI9GOHqHYD/mgUoG1dTTSTnnEIvmcxsxRyfHQxfeXqDkiSdxlGinWBxeLMiFjVCACZXKWszMm1QyJScw2FQVhOifPy0g5UZppVSDp0XVDpiK1pUfqcqqUdSrvOfj3ZJs4WpYkb/B7vqzGFKc/P/b8JzDty4u2R0cSnHz7fRIoWDrutnf8+PMPAKwvlizXS2ZKUWUlOXmcv/vwexPcP5XPJggoNFVRMZ8tKcsJLbtBui1kvJF73oTH4YSjcw11W0f0pmyRskiKOz+YKVrXpWOdJ+Or/iW5LL0kOydmbOaViYTb1rNYLFktz8hlLCCsdUyrHIFFSRXz67BJpcjIcXKcDO1PJ7sYg9Rf/lkZnQ+h8cI2CKnuBbxnWTQidq6jPrQEq6j0hP1qjZ2vMMEQbBwTSGBWzihUjmoFm+OS79/8E3Vd07oWYyXOCrxraTtH09U0boc0Al1IvGg4Njvqbo+ni93eg6ju8fqWeDo8x7ajaWqa9kDT7jAmoE1A6ZDyBCO6qlQkCkd/vkAQltvtG16/X1DOMtaLMyb5jEk2iQWDFjiahC44aldzqLdc3V1xefeam917VAbo2LUGKaJCzvc8S0eZl3TKEpQiy2JzoKVJjt9JeJY2yw/3QZHEJlGgcr5+wTfP/4Kb2w2vLn+kbdrIo0txU0OeYRp390Vbf8g8LN600ey7LS44glRIETt5GRSaHKVyzp4953z1jGm5IKNERSfFx5NUHsvJTFClII5l1otzJsUEaSQmj/6DQcg0WlfpS6bhqxwfL0+PCP8HOzyG6QEPCrHeN8L3ZZZDYQgiYAdu0titzaFUv7p77MzS+oiEWR9FA9ZHy5hjG1WeTXOk6zps6Njs7+Le0DbU9YGmPdI0dQpkj2rPaPEW4j4e4hRFiFjcKK3xQt4zU5VC0MuYfZ9LmFwCGL6nhr9/CDWOuWOPoWSPFXPjs2Ccp9w3P2NF6kAvUCKGw4v0ej5GWwVL5Kv5SDEISWUtVWxOYsEnEcKgfYWQWZwqKUNRVCymC+azJZNyFqkUPhZXWkS0PjNReKSVYl5U6ZzXg1fraY98WKw9ZJ8+IUb51Oc/PX7Poi3IR7teIfzgouzxXF1f8o+//kes7/j2+A3/0/RvmSzOyJM3vMMhgkzuzn+ITycWbZNqxtnyjNlkxvVud/K+Ev1cPRmYivj3x/bIdnvH/rCjndQUuU6bVMzt7MeRcWQchtl8CAIfkrXCvVHR71ekRgQDnIsctOlkTjHNYvfnZPxzUdLtHPv9lnlxzvTZFHCpSRYw8p0b+HmDxfw4R9BzP3jpS393GUdSpojKXKJFRe9h5YPlWB84HrfsD3fUW0etGqosp2mfQ2gRZDGTMWXvGRWtIPKsQassdeUdjpZAAdIlM1jL7rhD6I7pZIZShvbYcru94W53S7s+IlAYNE8Hh0RRTbAhCiZ8S3BN5HYKQ1Fk0acQEzmaOsbFiOCSiXDL5d3PCBlo3I6L9TOerZ5zvnrOtJoihaZpG6SEpmu42V1zfXfJu/dv+fnyBy7vfkaalDmIwvcjGRGdy33wwwGglWZSTJgWEzKdIwDrHgSGiwcbo5BpHOuRZKzyZ/z5ty3bw5HDvuHV9Y+0MqYN9KqvPtuzbduBVtB78XnvBxuc/jMOSJQu0ELggsd3MQ8lNxWVnvPX3/0tXz/7M1az5amQSgVmCPGS3ivYHhRQOjPD2lUiZ1Wd4SoXi1ZOI+5TG9dfhjCgeYKH3C35P2yXf6/wxiPViBYyJNXJ9L8BRxevvvCMyQYne1mLx9LRxcLseODYxOKrdS3X11f3irbONlgXqREhBHb7fSwQU+JA62z0UHMtPkRBgeiNZkVsCCS92lQjTZZ4X2pA4MaF1Xh86ftRg0urY+B9cm9C9JAK8LBJH//8flT+8Hv9z+iR6jHSNhTNIQbS+RBBAt8FvLV465PRLdEMW0SFvTAabQyFymPets6R1QSjq2j2nAQBs2rG/8/eez1HkmVpfr8rXIUCAiKRlaW6prt3bde4tB1b/ul84SMfaXwmx3Z2d3a6u0QqiEAIV1fw4Vz3iACQqqq6ZpqTXpaGykwkgPDwe+853/nEbLagyqdMJjPJNQVU1BhjsSZHZg2Rh+7j+gkj5mM/yAcG4Z/Rsn8tSNse5lQHxVwkstvteP32FZ3vmSwqvv/+e1TUlKeF8KhSiK15wPv6a2FtEt4RKZkwn8+pyinhXvxolN0bFu43bUFIur7hbn3NdrvGLXsokiDhsI/0vfDdhoXI3p8tBjUepkPh9rgQ+6hyjcF/Z9hUtbZU1YT5XEa89zdbtM7xTrHZ7Nje1jxfeibV/EHrcpARqt5VjIUniriff+V5gbUSGRVCSBm2gqzV9Za7m1tWt2tWq3t8EwlZoOu3RNo0Qo4C7XsvhNn0vrquF3sKL++KIDvDqMvTxSBFqvUUlUV7Q72pub1/y/XtW3bPd1T5jEGZ9S40OVc5RVZSliVVVZJnhkCPQtz8m1Z+LqsyjLFoHYmhwytBI3b9La9Wnl1/z932mk2zYtttOF0sKWxB0zQoq2i6mtc3P4lYYvWKm9Vb7psbqjzfO70PnTrikaWjpe893gVyY5lUM+GdIGNwHd/DL0qNWAiSHiCZhHA2f8FXz7e8eX3D7WaFj316r+q9oEap0R1++P1guOuc8N+UUpApUIaoTOLZSNOQmwmn83OWs0u+/fI7np0/o1AVg2Vo+ISN/tBDUoY/YtsRCfgQUdqMSFpM/5EyIQNgTf7g2dcHB7UG9L+pDf84ONwc7AfqaB+JBxFQfhxw7vcLMVNyNP0a57vRJ23wwKybLZ1rubm5xgUp6PpekLOIH5uR3oWjcaSyklhhrIZoMEqI+lpromYfyK4MQ7yROo7QeDD5SD6MMbFA42EZn6yeVHiEng0F31Nc5aeKtKeKvqEROjTrPfx/pSKqT1FZUQLgDRlGiyUHOlLoUg5qbSlsQZVPmEwmTKoZmZ0wnz4jz4TjXJYTyiwnz0sR5ehMSBRGJysrldwD7IOzQO5T0nEe+6RpxeNEjSeOsPgzP36+foWi7QGEGUJIc/Z0n60irwoICpNpXr19Q5GVVHnJ6eSMTOWJbfPbXBpDQDrvMq8o80oiplyPztLPrRVRR4KWgG1tFb3vBWnbrpNKlHHz1wfjyj2krVLY8GH3JvEcYjT68zb/QQJvjJEOyOZotY8+kRy8gCktZTHDlYbWRGLUdJ2jzR252VsZhJiKwKO39jD0fb/t/hoH1sCFIBnqai2Lvm1b7u5uuL2+o607urZHB4MPFudrfNwRaIBpyggVBEaoNIMfkcEYm/gdaaMzBpNHrILMabJpji0kBxY8692KN9eiyjw7vzjgKT42/xzCyMu85GQ2Z3lywu06Z+PW+C6K+ixY4WwonXghURAxlZ6nwlP7Ff22xsWOEDq29Zr59IQ8K3HOYTNN29e8vn3Fzeo1m+aO2m+JtsNFOTy1kmdYp5BKpRUaR9M0OBfIJgWz2YJpNRuj0p4Cxx9mfasgwg8XAybLyNA8O3/B775a04aWN23GunnLbrdLxtTZ0UjnoWJ6SApRShGMYuMblLZCgHaawpScLM756uprnp99xfnpOdNqsX/SYlIwx3ePRJ9a5dELajyM86JTBOfQuUqsRUZO0ACoHHmQxeGbpRireEgX0P82d/+hdhuUw0Ylw9eQMLYejaJB7DU6145eaU1X43yfRp0tTbtjt9ux3W7Y1hvaVpC2utngQi++l74jxiDCKDNYw2REZUEbtJXm10bxBxv21L2ZbrLJOHj/rPKPFkI8UOhoZWSPjalRfTj9GUaqD8b/D9Wfh8Xc4e8fNuuHnLYQwpgKcGiyOxaEiNmz1loENDansAW5zchNKXtOkIZI7J0KqmLCtBIFeZ5NWMyuyLJSOGq2wGqd6AH2iOgk4+EB4YvDix4FTUcbh2JvlvygWAtPtEDDXho/8ePn69cu2oZDGYO2KnVbkdlizje/+5beNyzPTlhdr3j79i25yci/LDkti7EYUb9RKR1STH1VTZnNZkksIBmYMai0GSVkzBqCV7jOsel2bHbSKe65Dfs4oYfqUTU4cg+ThOTVZIx5umj7GEuB1HJktqCqplTlFK0t9a6l7Xs2mw2b9Y7zRc58vmCiTynUnMwW3N2uidPIbLqgsFpSKKWylgKIvYp0WJyPm5xfdmBpZceA3xj2m1bTNDjfstmuCSkKTRSGLb1b03YbOl9TmSR71PqovJwVC87OzphMJliTs+vu6boGndkxlizLNUVlCUHG2KZQ+J3j7bWMIJ+ff8WEgg+JZHOds5jNuThbcn03ZXf3hq6t8USybJ6805KZrZLxoAqRGHvyCpquw/tAEzZcr+F+d0dpZxI1pQzGRDrfcbe7oe7WBFpU4ck04hk1PF9aom2UiqkEj9ROFJ2z2YzT09O93UcU5dVeQPP0e6mMJTcGF9uEK2iW1RXffRPIppp/fOn5/m3DZrMZI7UO+TeDevQhSXuweNluW7QJlEZT5lPOFud8c/UNv/vyD3xx9oJptqCwkkIQolAtjE6RYR+pVdpzsMwI02kNeW4IcUwJ2x8ESj+gAhxGnhwgzEp/PgFAim4dkq24oGoORxdbNu2Gptuy3q3ZNmt2u01C1LbUXU1eGBln9lLAdX1D57q9VxqOoD0Bh9JOxAAaMMkZM1qi8tIEDXmnqSMZ3s+Q0J8h+j2GmCKbItYOOcsPfNWG58QOe55MAfafN2SicsRFOxwhH369p3zbhqb1obr4sPDb7XZjs3MIAkjAu2GSz8ljSWFKpuWEyWTGrJoxySfkJmNazTAxw6jEWctKyqKgtCXWFmgzJbMVJglJHmakHzWpo8AkyAsPQQCNIwRWv6sU+MAJrH/Gx89g288s2p7g+xyNXcyYgBBiYLFY8Ic//B2Nr1FKsbpe8fLlS5ptzbSYs/jqRAK5vcca85uQDqOTvNHFdM5yKaqZddfIGMfEPaqiJEXcRCsO213LdrcecxVDUnIGwlH26HHRFkZ7hUNO288tUIfS1tqcqppQVROUCtzfb9i14kfU7jo2ix27XcPUnnK2PGeaz2nbnvvYYLMZuTWEoQZPB2LvITeHbkk6GR7uuQu/dNHYZNFhbZ5QN0Z7jl3dEZwX2D91vCEafOgAhxkzB/cunGMTiGYxP+FsecH09ZTG3dB5h0FsKKwpU1h5YNs02FhSljl9r7m7u+Ply5d8fXXD5GTxvpuPBjKdczI/4erykrd3Z6yal+zaNfiAycVBX0VN9HF0MCeKUCCaQMy8ZPjZntpvud/eo+MdZS78PGUjfehp3RZle2ylsBboLaGXmK+oUvTVcMQEQQiNMZR5wXK55Ox0SaXLkS++Pyv805yTMXxbYXUp7vMptuvi9AvMFPrqFmdF0bfdbseC7BBpG8aiMg7P9x5uyjCZztFZxml5wsX8nC8vvuZ3V7/jxcULzvNLGLv+IR1lX0KHkGr1o3ixRxWbHCb64BPiYdPwrn3rwT0YCrjBzuJIiPNv43o4npOiR4+GtFFLv9f0O9Zb8UO8295Rd1s29T3b+p5NvWbbbNhuRV1flCbtiREXpShDi4k0OiYLi4hRCqvsaA9DGpbr5LhPkDGsDyFxPEUFGkJImcDqgIcmlApNQOmAiqmcSybxg3XV4WqIaXNRQ+GVijYVLKSm/rAAG+7P8Nwf+TsemOwOVIGjEe/B7/fcajWi2AN3NFMl0/yMQldU5ZT5ZM58umA+XTApKnJbcDJZiEG6slidYZUdbUoUBtenOKvDCdm7vPUG2kwcfpHMbdOZMfxjfegvl/Zldby7HJu7hCf/9EMf9a8AGvwbRtoeFG5HjuTsCb8eJuWUclrSuYZNvaLzG366/jO39xXPn19ydXVJYSbYJEx4OK5hfPMDT37vT0T3dYL3wVCpOSezU8pizqa7w7s28QP2RZfIkwcTYMeu39GGmkiX8uhkti8HVcCj8Aq82Y/EpN/r0RTYkJPFKkVE6QPU42HLc2wyOf7OWxkVqAybZRSlpTc76mbD7eqGTGe0u47V9VvevnpNmCtOphfkk4oYDbuuZxECHjveYn14lps990mr/XIJSbSgP4mWEB4hdRkZmc6wSjYUrVPosfO0XSsh02l8EUIStiiDzTNyJumb7wFf1znyyhLRZDrj4uSSk8mSzfYGHTxRe/EuysSe1QdHX3dYk1HlBWSB7WbN29Vr7ta3PD/5UgLkQRRSDza4ofBZVAvOTp5xurhicvMK5zXRiJxdoYipSFOhg+iISnpFl7gp1oK1Gh8cTV8TncJFsclRnQybfGzIrBafNTHbwcUMRSYcFkBHTwgOQk+IgdJaZvlUNvPJIkn4xeF8oNscuWQoHnKLD1AAxFA4IcMn2Tl/fPG/0AePqzM2m82ICjjXoZTi7u4u0R9NyhAU2wUxJzacLc7I7JSTyZxnZ8/46uIrXpy/4DQ/k0gpsjSqP5yJptvv0wGh3o1MP1JmewhBrBswT/ybQREYhUYvYNpBtrIKjzg6H+4rw89obvSHhhjHFi0fMcb8+EYwHPzk+/93scfFfWh4iB2b+7V4n/mOmDwGd7sNN6s33K1v8dHRuZpdW9O6HV3XUHc1bdfQuobdvU9pGAptxbcutxaTZRij6INQGcTKZiDi+xHtsipDBSUoVAgjAqZ02q+UGEsrzYgEjYatA4oa4ujBJgXZUIBogtqPBONo4hpTYyv+Z0ppjLYpfWavkJS1sP83KoYkmtoXvs7vDdaVUWhjUu6u7Gnnp/MRJTbGUFhJd8nzHKtKKnNCZiqmxZTpdMpsMmc+mVHmJRk5onO1SRV9ECR/QGOO/iD6NbFBHlGaj5qXtOaiRhn1tD2Vev/zp8eTOxxZKH/Kx8/XrzUePWzUFXRdQCVX99xO8DGw2txxc7viev0Dr1f/k2wp/KX/+x/+T6bLkv/41X+GRGA1Sj+xMQV+LQhOTBgGmmXG1fm3XCz/mevVW7yr0cajYkRpD0o4Yn2r0CqnmmW8uX/JP/7wDyzO55wWlwQiu7bGOfBRo4sJ1bKiiffcb+4p8gxTKFy9JXSaxemS0/IKE7KEuIn03HsZA+0f+r39hkobqUETfIU2Qt4+OV1g38Lq/i0q7zi/MKxe31AaS0bHyx/+wn215b/8lxdcfvmcV2/est00XCiLS/HOWkN00HZQlo8PcD16J4Wj42i/mPQ7FllI9hmH4LaINCZmgnaRbttSakMXOtrQMJ1O8NGhoqZrI1leURYnrBvHj6/X/PtvAzmZpA2kn29S2vTjKi7MGeHq97z84Xt++sufWW+3LJ9NKcqcLtT40EITqHxFYQoMBmMjOvOs6mv+61/+H1589SWGgpwJJRPMYOzq0wvLoHM7vFG8uPh31L7n5W7RALQAACAASURBVM2O2/t/JOAw0aC1A+UgerROZb2XsZACCpvLeMJLskM1lSDlzu1kRKrBqIDVFqU8bd2Q5Yo8m4CZ4p1GqUBmwLsa322IMVDmOW4X+fa7b/lf/8N/5nz6haCpQRiMMQz2WuYYV3iHCWpuszHdEaBggo1n/P7yf+M8+wO3d9esVis2m3vatsYHRz65E6Pp0BN9INOGalJRTQoKO2eeXzEtTjldnLJcLjmZnzLJJuRkB+HQqac2+uhHynL18fWJ2u9Y+iH/5tHnDXo3y2OxjXlQA2qe1nMcs3ceD43Cgf2Feh+Y++Ar6qOtVvHEjxg/4VQb0dS9oW0YBQSSOtDTUXc72pTH2TQNq82K9e6WurtmXd/IeNz14nMWI13XUnftyPcNyQZJmpeItoEys7jeJ1PvCDoQlcMFRegk2zPGxOfSQog3RvzCtNYYpXBdi48e78NRbidaLHC0ElV8CPsArDAIBZTGWEnXGCgGw33QRryPulaaD6OEJ6rUnkfpCaAbgvZ4JY2iJnmUodHKoNouUUviQR6ww/uI6G7Ss+al8c5UzqSQEWeZT+majsXklMX8jDIvZY8yGVUxkUi6bJpi/4Qfnds8+UjaceIwPC1PRb0lX/ODUfenHK3qo5sC9Y62ZB9D9+kfP1+/qGg73uwPdYUq16lrEeJknuWSabbZcnP7hk13h846euVowoZdt6anIycfD/mn9tV9N/hLxxNh5JR5IpmdUOULMjsBd3eQiRn30OHQoivFpl2z6de0sQWcvFLn8E5sQH1U+CjlSUjz/6giRCHp5pTYUI4O0Wq8e1GcT+PDLmcflQV7aFurLHVrgWgcWjuMjlycn7J+07C6vWW7cpxfGLrYolDki5Lbt5vkMP6QSBr3MKl6eO+fuouf+nE4ggy5zZmWggYVVaQD+qaVMYLa80Yimhg0QRlc0IQUeK6eGHEZJRvW+eyCy9NLzubP8Nue4CO7tsHFGtf3VFSQHMANiUitAr1v2LVr7ttbFsV5SuGUAtJEPY6QlQKrNFaVeCzz6XOeXX7Lzeqe2+0bdrsak4E1qbZMJqNaS0i58y3KS5hzSA2sMQZyK4pNI8ijOIV7UJIZiEdQj17MMa3SkoHaNdS7DTp4VDfl6uwFp/Mlk3yBpZDAc2VGqw8V38HNUu/bfIfReMZCXTIpTpldXLCsrtjM16w3K+p6Tde3XNs3hODEcV55skw8BKuqoDJzvn32nyj1LKnXysTj+ysyVT75S+v31jvxQef/DpAyfU58YjUczI/U+3ap/c8SDqjfKh5UafFgtjU8o054R/oAkTwMX1dKuLs+9Ljg6UMv/mjBEVSPV4Fds2PTbGj7Bhd6ml44jNvmltvdj+zaO7bb7chnBDEP77qOPM+PUU+FiGSM/Nw2y0ZUSiUVsdYWrUTAI+NFEUapYFJTK8HlQYH3qaiPyU/xYL9QMYkkxkI87O+bUkcNQYh79bIgbh4VEaPYlFiv0teJClSIoLygfsHhlcd7jYo9SnXoKBEz0cv+pNEobSXlx1QH3GbxqMxthjU5ZVZRFTOm5ZxJMeP0+Smz6oTZZEGZTVBBjzFRZV6MyOIRqhylqVQp/umvv0Z+2VJUB4a7n/Lx8/Wzizb9gS0vSEGjApZIBkTds9q+5aeXf2G7XVNONSGIt9N2u6X2NZmZ/mZCBGPUuJ2WZSnWH1XFfWtGwupwQBsUQcnIUxnY7LZst1u6riGWjBvW4QYWgqBMJnEVovPERHQ9tEn4WQ++7F8YM4gaMsmOjBGjSi7OnxF319y9aWh9zcVlJMsVkZZIR9ttCbE7OnoGvt3HHGL6k2wPDhkNe+PaoihYLBac9WdklWfdRpp+lxRpjJFHWgv+Ohgf++j3/KJ3dIeGjLOzC87OztmEOzq/hlZSOqyyKCOjA2OStF3J5t52NffrO968fcXsy5OxUO77FpNVMlUJoL1k6A0E7LPZOd99+3dstrfUf7pn2zV7GlY6UIR3IwcCvsdHRfBysGplxGA4l2fChz5xcGJCMQS1c0GSDvpuR2ZL4mipEfA9GFWS2RnffP1Hri6+ZlqeohBrlV9rWemxhTHMzIzpomIxnbGdz9lu17RtzXJxKkKPxE2yVt7vsioo9IwXp1+gY/mkiu4pdd2/tkvBk42lPqIz7M3GHzWa8eBuHjZI8djDSh/OF6JK8XmBXKs003p4Gsqfee3SHmEfJXhGHMSaLjQ0zY66bWSM2Ys5rYsdTdewa6Voa/oG7x2db2mahrrbsmtvaHrhzg7v1xBh9tCDbOBjHfK3jDm0uVDjKHAYM45qaKnAEidsX6Q4H9PnZVKYkrxgE5rmvGP0X9PmOEoKcGHfAKuDog6VMKoBoYuKMI5lY4r1k8Y9KJOERQdK2ihJEGU2QZuM3BbkeUFuipG/q5QhzyrJ8rTyOVlWUOXTEWlbVAuqYsIkn2IpRN0chcf6rqZiQBwHXunn6/N1VLRFv++gnuJGNKFms1sR6TidzWWj0DW75pbru59o+h15NRm7qqZpxICz+i2MdcM4ShuLtqxksThhPpnz6jYRWUOyPlB7UYHWEhbcdS2b3Zq6bdIYxBCCmD8ao1IGqUnmkgatDSHERKLW5Hkplh8/S4kWRqWb0oIYKizeaZnbZSWL+SXhrCS2dwRvOL9YkmWaW/ea129uaNod3neAT4io2YsunmJ3P7I40EcI3Ls/6sRp0wdnk4jLi6JiPj+hdltM7ulp0fp2//4ky5RB9u6jWAD0wX8U0DopJpycnDDZTOiaHdE7bFZQZBmxFiUpafQ2+j/1Hav1HT/99ANfXHzFSSGFm/cBUiQbw1RJG0QmIYPUr59/zd3dW25Wr9FbSTVQymNsGo3QQwjYzGKzAh9Vag4kKN1og05WJd77ERJTKIw1xGhS4epxfS0mp9qiIwQXyHXF6eKc52cv+ObFHzlffkXJApCDW33In+0TGVCHyuepmWKnmsLk9K5J6Qh9OvBCQhgl9SKjhKiPCNvD+/23EPj8Pltple6MemfD8zBk/bGlzMCZjA8KN9luB0NYKUokNFyN+y5pRWNFG+9TqHok0sdesjdDR9Pe0nYiDLjfrNjs1uy6Hb3vcdFR11saJ4Vb5zr5OiHggvjzDc3FkKE6qOEPrStGteNBwTbGPCV/sXjA8xrW2fBvjnhkMHLaCJo++MTnNBij0/gsEHxM+41NqR/HaQNaCz+x77bCd0vPnU1jUK2SYbVziVMrk5Nh7SidmjvnhRQW9cgxNFEEEqCpzJwsK5gUE6bTObPJTNJqcinWJpMZ1mRkRgq5TGfy+dmE3BS43lPYQnKJUTLmDZGoJWVoEDU8XDufA9M/X+8s2lRIsR4PPWnoCQTuVm+5vn2Fiw3eLjktp7T+ntat6Po1MToxENRqjGGSmJ/fpkMI3otaSVk8Hqsti8WC2XRBpjM6L4hKjAoTdfL/EdhZwog8TdOw3W6Jl6lfS+kJ2sh4wvueoEPiYVjp/rxIrfI8lwigg8Jx6OY+pmiLMQhMT59GXpq+gxA0lCWL2RXTF5fY+Jb1ekuWGVb3b3lz/wNvXt+RtQvhduESAiCjOK3V+zkwB+7xhwfM+z/qo49aSWyQtXafv2q6fUKETlL7lKep0NLJJqK79z2Y8B4cSEQAVTnl8uyKN7cvua/v6Noam2dYndETiGqveIwqiA+f69ntNrx69RO339xw+ey5MFMeBl+OTi8GH1q0zVlwwhdXX3F7f43/wbHe3dG6bZqoJy88FTFobF5CEHuYkEjywuaUg8VH0qhGYVXyZTJaLBCCFOvR7+gaQ/SK0EYKO+fy9Eu+/OKPXCy/Y1ZdoiiJiP2GYZ8oYH7R3q7HWKnDMqbSU6rJlL0J7T6kaLhpMpzKxsN0/IoPMhv/Fgq3Y1KZfrQe3os6vyua5wOUhOH7eiJBiehEXP5lzfSxp3WSphGIhODoXJeSBVq6rsH5Hdv6mq6Xom2zuWezE9V57x0+Ovq+pQ09ne/w0cleqXXyOlPkZiZCogMT5cMYpr7v31lMxKBS8SOLalCRxujHfz8oMmU/9EfWGUGlcYeWX5GD4jdNnbU1iV5wXLTJL0OmjQAJSR0qKNUgvtJYnUnRFvao8lHx6aUo1Fq4dpnOkn+c+EROygl5XjKrZsxnJyxmC2azBWVZYk1OUc4wWEzaqwb72izFqZFxEKmmpbccKscIvneilj24t5/Rtc/X+8ej6nF0s8eLKk91vH77Iz+8/BN1v6KJlzTPz7i5f8m2e0tQDTYphpzaGwr+lg+dJBaIBxQqYsk4nZ9yMj+hKCraWiVXRlGbjYtDScixtpZdu2O1WdHTUiQoPwSXFHKCIgQb0FogcRUMeI+xZkTa+OSCbTgZHOBRKkh+J5kgbdFArJhPnzFbTlG+pG3/xGaz5k9//m/s3I6u9SwznSw0fOrQ84TcqSMrjQ/9GD/r4zBajRJW7FwgBjeiLtZaet8dxMEoopc8Txm/9OOglScFK/L1T+anPH/2Ba9ufuDV7U/s6ntU7THJkHb0QUqHhrFixtq6lje3r3l7/Ypvn30rMoTMjuaO+iCaVeJtNMoGNBlnswv+7pvfs1rd0jQ1m/aeEJSMpqMMYnwMaGPRBGLUBC8jVnl9ffJoE2TW+x6wGCspI8MGXeZayNidA2cwTJlXZ5wtvuJy+Q3z6hkVJxL3NYCzJiZF66+BNOl34kwcRYAFOHBSjyP+amTM9GAs+reDFoR3r4/4EWvm3ZXgI6A7PDHJCHRp/ZMU3SlpINbs3I7V6hYXxQNt19bUdS0ZnW2LDw29v8d5+X3TNTSd5Hr2oZevFIcUmAA6SAC88Ymcb8fn8qEB7PDeZYmz9q69zehCVOE6opA9k6SEVmoYm4Y9rK0S0qbk+LGZlqdJSxGn40FjoPY8tMfPk4boKW1GiCn0vQ945/AuEJyMawtbQBTLHq0TxzTFQZloWZwuRf1pcvI8T2PQktxYtDbktsAa4exOJrNkbFuRm0EZnR05kqrU0uiRcacfmI8cPiCBrLB81lJ+vj6xaHtYswXJfAstjoY3b3/kx5/+iVV9TcsNdThnvbtl3bzFqwabD3mFHj+gbINJ4W9g0qZS8eV9xCuJR5lXJywWp0zKKfcbcYQXKfQ+bkQhzto2MzRdy3q9Yhdqcl2IzD309H1HVJ4QpAjQ2mDJaUNDjAal7DhO2G/E8ROKtmSBkULfsyzD6BxiDjHDqAmKkmeXX6JDJsq+5pafXkoEUpHPmCyWhOR7JlTpPm1ymo90930iUiQ8Lp7iE/WmkaonBMasyqBquq6XLvegaFNGOvMQI947vE/kdsLjWewQoaZkNFQy4eL8iuXygiqfcr+7ITqIvXhFyhjSjeRdbRU6gPeO9fqWN9cvudveUk1nWG2I9KiYie2G38/JiqzEIyOkWTbnm+e/Y71ejzFPQXUYLaPNzjl8bCgmkkUrYdQiNBiiYAiaajKjbaUJ8iHgHBirRs5QruPoG5XlUxbVJc8vf8c3z//A11e/p9Qn6CS2iMGhlUqazJAmwr9swx/OU3lmD6N5YnIGOOQxhqOjKXJMon7oKB9jPCKy/6u74rtGnU8gaeoJmkF8T8E2ft09N058CoOke+DxOKyONGzpfCdWLwRa1whqVm+5vn5D2zfUjZja1rWY2jrnCLFHGVn7Aw/KJzsar5MVRxIxqGzv/bNn5ml8HwUBPuDvHr6nT8U4Hb7YYyL9gPTr5MU2+PtFKdhi2D9bgFIelUkGqliQ7OVpKpnFqjBYdiR+8vg+OTSePFOoaJItiMZqg9dxmNqSqUyaJS1+knlWUlVTyhS/d3n2DKvEgiPPSyZFKXnKNsXWJbVnbizW5hINlaLTZFJjjoj1ydFURBCDlDMEDoh8HIoqMJ8Lts/XzynaHmxOEY+Pcqhudytu7q+52bzETDpM1bLrVuy6FZ6GwsxGA07vOerSXHBY/dfdtPWwMFQQvx6tySmYVjOKvJJNJWhUPMwAUAkdEF+d1rVs60GM4BNZvhe5ezYYNwocr6KSaCMfUcFiknz9F78OxCvImAylLAqL0RVd65lVp9irnFevXuKvd9xcb1ndXzOdePy0TeOBY5ryJ6Ech+ajo1v8AOEPsnD95ChIYr2g7x1t2xFUP47IZcPXo9Jr2JJjOrTkgDjUKutHd8V3niy3zMyCaXlKmU3I9QSjI1Zn6XtJ0RTwafSRrE+Uo+0D2909u90apj7hyJoQHFbbB8Q9cSn3HnJTkmH447f/nvV6xWq1ovZblIn0vce1LZ1ymFxi1EQ6GtFKhogqCiMns+Ll5HqHD5HgBYnwfRC+jYkoH8iZMK8WXC6f8+Lqd3z5/DsuJl8CEoit03K16qnCWv+C9cPBYfJ49Nf3fRKRiHpu/8gEWVNKP8pg/NuZjaZCIj5FIUgF1/v8qtQTX+/gvYlpbjH8qaPDByn4Q3T42LNub9n1a2l4oiMET9PV3N/fsd6tiNGLYKDesN5K0da6QZntMUaSRsaxplFj7FpAGgRtE7dMDzw1J1Y/UWPjMBLUj3hswD5nlncHpscgNJPRz2z0VkuonQ4HnogpTk/t/Q39sB+MiQFGJg9R41P2c4hi3TR4PsbRFNaioxazWWNkxJwL1xY0ZTZFKU2mJeapLCsmkxmTsiLPJsyqOVYV5HlOURTJiqOg0HlCyTRwaEa+9/GMkaSUPV5/Znw2wp7HEMO+YBvWiVLCBTwokj9z2T5fHy7aeiA73HQCVlk6FdnVGza7FZvdit43rDbX3P+PV2BatIlM5hVZnrNer+m6wKQ8xXvPdrtleQqZzn6DjVdOXaMNViu6KLmIp6dnnM6X5KZiV99gbEZeFDRNh0FR5CVN54ROgebm5i1vb97w7MUlIfTcr2+YzgqCbwmhpyhyjDKsbtbsVi3L4pTF9ITLy8uDmJ19Rqa1H/fahdMmJrXW5mRZQZFP8T6y29VobXn99i3fXXzN3//93/O//x//naZpWC4XrO42rFarkXcSR/OxkNRaH/bh6fpOUBtjxNtoLKIODp6oxbICUVQdE6y1RE3ZnLvbe7zaks+E4zb+XDESvMP1Ct9H2s6nEU8Ds/ehIDqhowpLzrPzK54/e8H99o717pa2bbG5xWQaY2SbDiHQB4/RiumsZLdquL57w/cv/8zl2RecmgKdDpbR/SUeF4q5qYh0eKA0U7754jvatuX7l39itb1F9QZNTt/1tPUWk2tya3Eh4ENPCJHcWExeEEONwmNUIARPWzt8jODlnigVqYoJy+UXPLv4li+f/ZEXz/7AyfQMRXZQsB3Z2f2VEKeHa8uQZYaj/M6xKDF/E7md+5zg9xWWgz2O2EAcPPipidX7/mW0jmAsxQY2634MGsbxJwQcnrqr2TU1u92G3W4nlhv9mo4tPrYSA9U3tF1D0zf0fYunY7vdSKZtdLjgcKoj6l5GqyGQ5dOR7oHWYhGhNVoPOcAeFyIu7OUQMa1lovhJ4h/z1ob79JD68fDq+z7xNAfRQUjiLU9IHm/DBMZaTZ6ED5Jb2kCmiSnwQlvAyzoJTvihrheUKvpB9Zm4bcpitYYoxtTCLS4ospIsE+K/1pbFbIlWYmpbFJJNXeSVTDVMznyyHC1KrLVkxmCTfdPQ4A/FGsNeiHBJjfrQqHzg59kHjfF+U1Zaf7bA+Hz9TKTtEawvmW5YhTYRnKfzDTG2qMyRG43JxRNrdBYf3dTdbzzmiCNKYpKwvjCS5ZnnBV1jk+9OCv0eLSgUeWnpak/bN2x39/Q09K6VjSM4lI4S+msVfe8IHhbTUy4WVywXl0lFZI5GCmOo9UdkKyqVJ9GHSxJy8brqOrEc6fteiuKLjiIveP78OffdNdv+FqXM6G4uW4R9fF+SZCsCg5AxJi8zTUidepLkj8Wa3zupK/YFGxCjOWoWBxNK8WUyMgJN/myD/cYoyVd7Dzvp6h17I4SnfbJtyq1UeKblguXsjGm+YLfbCdITYVAXRD34oCf1mAroTNG0W+7vb6mbNafTcylvo8OQHUj6GDdllKjWDDAzC56dvqB/4TAm49WbH7i+f4upM1GLmeTv5wM6RlAam5ANA3RNjXcB7zwqKLEHMFYc0iPkaE4mCy6XX3J19hXPTp+zmCzJ7XQ0ooR/oYy+h6PCp0bm/8qBgQ+i4PEdmVjpWXVeXBBFSKN4bCoodighBnwMhCheaWIT5CVMvWukUKs31HVNXW/Z7XY0/VaSW6JwPFvX0vctnW/xvsNFaSpj+lmi8mgb0ZkEqgcUxmZpfXJA0t+/Fj9G2oSHWFASEw0Gtk8jaQ/Vjcf3TqXJAAl1Szzg4EfkrSgKQjBEkjG1TjzJKCNZ1zV7nD0pkSUJSyYbWie0/kCvLtYjGSZmlHZKYSvKsmRSTZlWMxl/ZiVG5zy7uEIpIxFQJiM3+WjZoVVGDFlKPTEpD1QfNUrqQ4KTD43Oh/Wjwr4RVQeThag/B3B+vj61aDvceQ+SCox0bcZaCel24t3T+Q6Nw1Ylxli61o+8hhCCkGD7HofDUPwGB8t+AQwdWMBTFBNOZkum5ZS6uxOYPhxsSlE2OZPntE3Nttlye3/L1q3pfUeMXmwOlGw86MBuXaOi5tmzK3539QcuJpdMp7NHZN19ft0jUe4Tqz3lMNKRZyXz+YLT01PatmVRzXGu4/b2DW/PFlydnPHdd79n1d7wT9+v6LqePvP0vU8bm2Eg74fo0CofD1alxCBWvldM6MCg9JLd6BCpGyxEfIxo5SV1QlliIhlHNTwtGptcvEcis4doIuaJA3Mo5EISLMR3bXzDA2pyhgyGk8kJz86fs5j9mbv7W9ooju9BkYo0lQ65FE2joCgNm3rFq7c/strc8nz6NYO9aRzGyOZgQ46yLIaklwy4qJ5RflUwLadUeYW1BXd3txQup+5eS8pGv/e5klGUx9ERoxKj5iBk5yqbMp3MKYoJucoolGE5W/Ls4huunn3D+ekXTKxEQB0WbDqOU6UHhdSv0KX/ioa1fyuXuNsfhN0e+qikZ1TSu9zeEZ9wdHYHPH3cibKz6yQnuE1iANfSh15in9p6LNrarqbtOtquxrmebXOHZ4iVcklQ4wStIlCWecryRCKHtIIx79gkVbF5suBWKqKDGQu1oI5fqiaiddynCXwQkXyqqg8HXph+XINaD3Frg0AtErQIcoa1770Hs7+rorDWqcDK0cqSFxkSGW3RWvI3M5PyjsmZlksKM6GqqmTJMU2ctQqjc5azJYMcQCWzRZUioUATTMbDlIqjJRE/hKbxtCOzemLNqAc0kM/F2ufr5xVtBwXbCA0FZG8w2Exjswwbcmzu6L0eD2z1YPwwSMTbtsUFR/Fb7O1KpVDLY4fmSTYdw+PvNpbgGuFfRJGme+/BK1x0uOhonWLXbKm7hhhDcrIXwrjI7hV93zPLT/jy+Tf8/ts/MLMnVFUl3Cgk11GpT0l4kE4rpJFFWU45OTnh5GRO21kW1ZSur9lsdvz4Y875yYIvLr7gL2eX/Pc//Tf6TsHE4N2BsS7qqDhK9uJHKKoijMkNHd0YNuRogFSg4XE4NpsdRTGhzOWIiFpBtOMzAGC1TSranKYXUYAUTuaAoO5TkoAaOZBd3xBwYtz6RKKaHDyG3vcooyiouDy74mxxwas3L2nrdkTvRvVbEpmolDlbVBnb1T3X12+4vn5Df9XK2NHkoqhLB96j3M7UAQ9l9dwsieeDzUDBS/OS1a7gdt1Rd2Ku670XEQSG6IT3YnSGiYpcF0zKOSfzc5bLM2bTUyngbMG8OuFsecXpyQWVXqDJx9G5HkxCH2Vs/kob/8Ng9U/9+DdQnL2731OJp/eAx4mgZEOii0/WJzFFuTkcPQ4fHOv7G5wXEc623rDdbsbirEuIfdOJ6rPrGjrf7Q2mY0+IbvQtk2c2poxgi8UTtRP7njQdMMagbLK+wBKiqJGH17r3SoMQ/HFB8kScYEyv+9CK46kG9F0Pj/ftmDqjlNBUxCjcYEwuVkqpNhZFZyrggiKEZDuUuGoDglbYijIryUzOvJyitSUzOWUmKQJ5LtOITJWczp9hVZnyPEvKTJA0qzOUksSaQd05/Jwxgg+iqLVWE/5aDc+j9aL5tbion69/y0Xbo913b1irtUbbHJtnZDEnK3OC93iliUrjQ8BHyHQKYXfCcei6Toqif4FnUkVNVJ6MguXJGSfzU17d5DTdluBiIrvK1uuDxnWi2oqIOXDf93g8yohy3XWddIVRzHVnswXPnj3n8uILjJPu713JDx9uVvWBUjLHmlIsIqKj7xtcblnd92xv10Tf8sWLS56fXHGyOKMsZkwnLbPZKdaW+FHLd1y8ua4RkrFWSYkvm5WYdfo0JtX0dGx2K7puhzYB53qapmG93nGyOOdsqZgUieCr9pis2PlmFHklEUZNMpTVYoPx8AAYTDF9kOckJG6OUYPCTD/qXIOLQrBGs5guuTy/4vufvmez24gLekoqGMm/SmxIvdLkxhLp2ezuefX2FTfra67mFVaphJ24sdAXD0+dOpI0ujgIsD6xS4rLUsKdyzlvbqeczKZsmls22/vE4Qtjse+9x+hCCj07YT5bcn7+jPOzKxbzJVVeMc/nlKakLCcUukqj4GRkHD1aFZ/W9f+sKaggk48/7rmLT338W0HUHo7+9lNCxUOldETWhqdP+s4ehxRYnWtp+kYQtb7B+Z77+zuc62jaHbvdju12w7be0LY1rRORUOdaur7BRSepLCaRuPAU1u4n9KNfpjQ7QVlccPvRZwpN18mtf0DKB7pBjFF0FalKijFIasf79sswZJQ+fX1I/dv3/igz1HuFMTY1u3q898J3Sz6Dg/USJgkG1Oj3WGalJAgUE3KbczJZYG1OYStBugv5+zzPMaZgXp2JAW+asqiHo1bsQSM7FFAJnEjP+FP9x6M/e0gfSjSK43jCJ77Gg3Xz8PM+g22fr59RtA0P4TAuGh5BGfOUpSAotBplRFXntBz857IBcwAAIABJREFUfbJ2kA5JEx0jp+29XIhff2feL6cQUEZW52w24/T0jMnLCU27GrtB8c2STtq5MEattH3DdrumaWXkodMm2bYtgUiR5ZydnnMyO0Gj6RpPyNwo5NBKE2I8FAd9lEea1mCQw73rOlarO9aba/A1WcioN1va3ZY///mKk/+0oCgqFvMlwVW8ePYVs+lCul5iAv5VSmxIRGIVQSspkGKH8z2dl4xClVmcjezqLa/f/sj9/Q0h9tT1lvV6jXOB51dfY/KCvJiQpZF3PCg8DWY01zXG4EIgujjG4BwWbSrxbrwXvo+PPSYEtH4CpUxwrtYWgkNpQ2FKLi+uuFhe8ur6p6Ow7D1XLo18Q0QrhbUa13a8fPkTP/74PSd/uGBqSkCP2j6VtmkzKAbHF2jEySPZlE2Uojj5ksKWLGZz3t6f0PQbmp3EB3nX4ZOBsA+BSTkFZSmyGdPZCWcnV8wXS6blgsLmTO18HNYIRjg4waeJSrJy4eHP9SshXQNZPh79/vCjfrJejH8jh87HKbulbHIx8cp8QxckXP12c0vvRRywazdiudHu6LqOPvT0rsH7Pk0YatqupukaMb+NDufbMX0AHclyK2bQSmEij+MtIqDV6N5vtUkFXkjefILgEjRB+YQKqgOkbbCbefgO6SeQtsEbjkdI27uQt8dVn/B+Jf4Jgg+jAAn20XzjOFeBMRlZlpGZgsX0HBPlc4ospygmTIqSST4jNzmTckqmLWUuIoIqryiynFxniCel2R9jh+NNxbttWeJ+MuGDgBAa9agR2TcnB0XaET8wHI2J9/9OH/3/sfHL8dLVfC7cPl+fPB59kLuyX+JorZlMpmitaXtHaCMqi2hjCUqMGzNlRh5P0Huj0xjjb/gywlHRZpL3TWErlsszGWHuUq5ncOAHhaVNEVQK1UNd19ze3gofJaEmWW7o+44AzKolpydLMpuz2ey4f7Nhkc8os2nqGNO4WH2kwXDc/1JKYU1GCIGm2dH1NZEKlMJa2G7u+fGnH3jx9VcErynLGacnU7777g+cnV1iyKQr10MH3JNZi4qeGCLeh9Tx76jbLbtuR+daTFWgrGa9XvH9D//E7d1bfGjZ7bbc3d2lYlCxPL9kefYsCT1kcCTBT7Ilic+REHxJxbuEQfPkuCWEfXH/zmcl5WhnNsOrQE+HJePq4oqLs0sJbFc1MVkExBhxMeCDS7FUAecdOrP4Ft68fcX33/+Zr5//HdOT01SshDFaNB5EdXGQ3S3p2Aaig5Rfu5xeUOQVZTnBa0foHU3f4LqW1rWSZagNi8mcqDJyU5GXM6bFgqyYkVEkfEEdUOriWKTtw8n9/lCI9nHlpH7pugkDe+vjR/p/w8OdAZEamsoQJAe26yS3s+lrdu2Gtq9xseVmfUPrarbNmm19z6Ze0/R1sprxKJ14lSEkAYIkEQTl5VfsJLLIRoxR6CyibCqzXEBZg05jwqDiOBYfPC6VMQwRTAIQqVHYGtSBae0Qw5Qab21IyTT7d0u9o6gdmtmn1uH7RWXCTR0ySGXfFV5tDGL+bIwZ/dGG4i3PC6qqoszmXC6+wqhS/NMKye2sypLCVGQmwwRJoclNTm7z5Lu2fy0+DFnLDybc73I0HvfdCDqgrT7Q/g7ppeHBsx0OUPyDIm0QiDxYDeERekvaL/c/0ufB6OfrFyBtB0T+aA5LNhQ5k2KCQsaIUUfxf7ZpHhUlfkQZK+iWjgQ6gmqJyknI+nsx51/jSt9BDUavYcwUzMmZVjPKbEamSozOCEoRfUfQkkWaZYZgFN717Notd7trnOupXU1QkGcljZPQ8HJRMS3nxKhY7zbc3N7x1bMoY8BBRs8Q9PshKEIfgpxoDSUFpSopdUHMJsyqBRaFUxm7Xcft/S139zf0BFSIZNrw/NkVU1sx8HAcHZ5IE2o6B03TEHH0rqXpajb1mvX2ju1uTdt1VMs5Ns9Yr2/54fpPrFa3oJwUsKtbglMszs6pu83o2L7v+mUT0yisMWTGildk9MmUeEilkYNBK0MYMgEHr6OwN2VVD+/XUeC2IbiItZaT7IzTyTm5LnG6IZpAUMmcMzjwMckoAr4JlLrAE7m/v+fNzTV124w5jnt68oNv+DDmKr2O4D0+Roy1TLMT8rNZ8qeWr9i4LZ3rBKnOhDgdsRiVYSjR2DHT8ki0GoeCdrDYeKKQGsbHH4PgfhTKpsfD5Ocvy0PTXf3OAu+pqa764F+8u5Z/3y0ITyAhgYBLmZ3OdaNfWeNqei8igl2zZVNvJa+z30qwelfT9jvWuw2bepX+riFEMa+1JgoIGgE9uPhHlBF5gMmLUeCjrfC9tBahUFCRIqskISOK6CemMPmhwHQ+jLdSCquhcNOIJjMmg9fjpkgdiaD0cW9+cP+MlnXzCKlLD/2YnRufTs4ITiXuc0GWiULTKItS2aguzfOSKpuSZSJYKlOO56RYMLGnZKakykvKUkaflapQI9NWpRiohEoN9pF+n+P6wePhES4xrKFjpShPFmxPwosPxqLh0cOrD76SenDP/0UV4Z+v/z8UbX1akHqs4YR4n1EpzcXyCyblnK5pya1iXkxp2y2t65lUM3w0dAry0hKCY9PfUPs7om3o2GDIxPDwCBsWC4dfYfhBVBqsHZdNWZREHAEoyViWS76++o7Xr19yd3vHbDnDaRlrLM/PubtbozCi0so73mxeymZpW7roUkOWoULG5ekL/vD7/8A0W/BPr/+Zm/sVm3XN2UxjkoI0eP8RLvAH24KXrjhHCLrzMOXLxbfoPPLlt1/gfcd//cd/oPYtd7s7/sc//yOL5YLnF0vwBfOpvF4PbLo77u5uaFohQfeuBjyN2+FCR8BTN2uu767Z7bZEPJN2TlUV1F3NdfuKOu4w2uBMh7MtWV6xrVeE4KnIMET60FKoSoQGKNrQkKOZZYZ6fYuyNctlwa6raZtIVRXEmOP69JwZiyeyrbfsdg2Lk0tA0XY1RV7JlCiE8aBCyfad6SKxYDIuZi/4d7/7j/y/1/8XrzY/Yq2mKnO6rgMfsMbQ1A4TLW0MtI2nbwNv7m745x//wnx5wWl2mqJo1JF55tM2OKmZMRmabOywCwZtq2zdhZ1J5NnRWESNm/jhnx9u8+pJbox5/NyoX3fHjx/o/NV7y7ABCXQHf3t8JMUjBOLx13pYTOD32IW894kPpI7LxOF+u/D41oge0dHTYYA61jTNhqZrqPvtOPrfNis6v2HX3Yu5LdIUxBhoGglZ73sZbXauF5Vw7CUGaiiitag9Y1JIai1JIFZLUkrfp8gok8s+6yWhRWHJUKw3QTz1lZJINMM+r1MpSEhXOOCtScEoRV7vBNE1Awf5IPdXKUXoxbB3UIgatUfXQpRUBZNDZgvJ1R3M+5PlRl239J2nbWu6Lplm62G8mTOpTihsTmFLMispA4UpKfMpmS2ZTxcYU1DaiqKoqPIZRVGS5yWZzjhfnB/RA/RYnu3hg6NncUDULJgP1FUf/nP14Lu9G5F8HzamHvwkw8hTf1z59/n6fH1q0fagk4oH1jJkTCcLFrM507LCx4a+7Wj75HqvOvJqlrpDj48dLlhcrIm4AXcijMPDhwsg/CoHzkOLnGHBBDSzyQnTakGezdB9IxWSNfjY0sWePLcpYcTR+pptL51m3Tf0vmNRLfBG4Z1GR4vrPK3q8TGAVmhTpLHVz7RgyAe4LVDonPP5Od9c/g5TKZ49u8DFntdv33B3f0tZFUQd6bqWzChyk7He3LKJNW3bsNquaJodPnY0/Y66XrNp1mgrpqG7dsN6e896c09db+n7lqurL2hjQed66v6eLrZkKsPrCGYIPxffJZ3YM5YoBn+DIiqIVN8kDlaMDshSlM1+GiEdvyaqILFn0eEPcJ69r9tg26FGNCySjDXTk1TZKSeTE3gr6JrvNc5YQi+oXGYrlAkUuqKwM7wF12rmsxOsFaK0z+R1mKeUqx9CSA82d/MzP35UUf+bzQ2PX7d6An7TT96iAI9YO/o9BIY93SoC9jB9IN0ceWwUaHAuiOpYHTOJfEKS1BCojktIsKenpetrOlfT+oam21I3G5puy67dsavXrNdrdu2KVf2WptvS92LKPdj3DIIqKeIkfirqgMkjOu4rZ2M1JkIIekz4EC5sGpppkg+YTp6Gx8+Pi7ICopI2VgWNS4XVoHiU16UPAtnVOD6dTCaEA0d+M2LGcrfk59cj71cfUmCUqOeVU/ShS01nwrV1jtKK3BYYAkYVFDbxPo0ZFZrTfEKZlZLJWU6pihmTyZRpcUKZTTg9vcAqi1U5ua2wNiOzBZkuUtEeEir4V0zVUL+0cPq0vf1X7qs+X5+vB0XbQyPAeLzVVnnByXzOdDplVdc0TZMOWuEtaK1xLgj5OgRc8iwSbpn5zV7Iu7qjeXXCbCbkfXYKFRWZzuiUxXvJRux7T/COtm2T6iqOCtj5fE4MhqYWNeD9/T2uEs6WtXb0Jxu/4ydHWoWjvm95ekavenQJi9Mp1/fXIpcPjGkTdb2jKjKWi4KbmzdsNx13d3fU/ZayLCgqS9PuuF/fcn33hsVyjlKBt9dvubm7xqWIrqZpKIo72rbAJ3QhRD+Gu1trUV7teYqHCMjhea8Qbo6VEzcmZEQUb6kpUJ6gwGCIyuFjt48Ke+d7+jiIfLim0ynn55eYPxeoIAetcgYbcoqsZFGdoAqozIz5dEmmK0JnWEzPmVZzdNQjMvJv+RrHTg8LNPUxaywIRULpJ74iPOS/haF4j/vRsAsOrbyIUEbbFinpPJFoB0e0Y2sGh8OFDq09na/HTM7edZLV2W3pQ0vbbul8Q9PsqLutqDwbUXrW3Zb77Q2970a1Y57naK1HQVWe56PqeeDuqgObJGMhRE3wjKPEwepm/+/UaHyr9UGKfJTXFpQaxScumcuGIKkdPvqxNQ34pFWI460OtEfE+kFDPiCY3ocx4m/wqtzzSANRK4KCGF1C2AQpNIXFmjLdE820TNmbWSq6soJMGyorAgExtZ0wLadMywWTyYwqRc5JuZphRiLCMZr1Obrp8/X5+iSkjfeaAiqlmE0XzGYLVvU1fe/JCkuW55AZtLbE2I4mikPR5r3fx2P9ixxGY1ojk8mEqijTJuYxKeQeH1AppmUwe4yJoDwoH6fTabJt2FLXNS9f/sh0sqVvHWVZ8f+x96bNjSRptt7jW6wAl1xq6enue83mzujK9Fn//yfIJJNJJjOZzdVMd1dXbkwSWyy+6MPrEQiQYFZmbd3TBS9jIQmCIBCIcD9+3vecU5T2yfH64lVz7MX/zMnO+Sbdsg87Doeet2/fs9ls6PseYxL7/V6yRmPLejXy13d/4sP7B969ewc68c23X9Fcv6JAgRG/uaoqCYz4MDCMfc7ZE0f/vu+ZmtFDEDPhGKV3yhgjRrnpqLY1i/eZUrbgVWo2YU56sShM6RBKbAVUdr1CBWKS8u2y0flTx+6xYKFpGl6//IpVcc1VcQNJ05Q1uMS6aXn14jVWOUrbcHv9mnV5TYqOQlXcrF9R6gar7AWwPcN2z7Yjz240FsBs2Zz32NJALfQc5IhWdWTEg5qEFn5WD6fcbzgSsItXOClaA4HOd3R+x7Z7x6F7YLPZ8LB7yOrOA30vvWpKZ9sOPzCGAe9H+lzq9FGsfY4pKXrO8Jy+vPcn9y03opPnF8mKka0+skXHdAL15Ht5L2l2TU54yaGcjkpS6BRyvJPKiQhJ/MzmZBGNVgHvD5z4FGpRcyutUAn60B/rHFHU8lPfr8JAMMR49DDT2lLYhtatqauWEBTOljRNy2q1om3X1HWOgtIOpwoKIxsla21OHHByfVFwzCjJyugkn6DO3mxGqwt4u4zL+DLQttgZZ6Zt2T/ilOP29paXty94e/cnDsOAsyV1WRO0FFdjboSYFvche5v92mzBY+5qKpGWRUVdNxIG7hO60CKlz2UQ78PM5Ew7bqUy06SgaSu8j3x4v+HPf/4Tq9WGq+aGq6ubeSf+45m2ZUSootBiFNltOu7f37F72KIxNPUKraOwmGnEOcfhsOftwwfev7vj7u6Oqil5+XWLsdc4FK7QFKXB2ETwssgYpamKkqqpqeuW7fYhhy9n1kkdRQFai5HydFwCAfdocg1JyleuLLDOkdCMMYjtRza5ParcvPig4YkJRi8ZizGbyP7QpL08tkVRcHt1y7ev/gllI1pbVk2LQXG9vuHly1c4U1CamuvVS66bG0gO5aV0WhUtVrnf+OUfc29pPMtSqx9kiPXRVy89v/k7JxpQGYRJ2TPN/BkzYBvpfYcxijEGSSjJnn6HoWe333Do7nl//+/sujs2mw2bzb3ERA09w9AxhhHrNEkLa5Wmc1tlwYA1NGWVQUs6OcfET8zM901zwukmAuI0z6kkZdAFKzcpMmdxwtSfl47SZGWnCTcRlbQCTIxkBJw28twklH5slgelzvmoORkmJT+XOIlixWGMFj9JbQhZZe20w+iSMBhUNJkdNDjnaJs1V1fXNM0KawrKsqZtV6xXUrWoqorCVFgsGi05n3NqhHy6dhazHfscxVYjm1mr5+fJ5ebsAuQu4zJ+iGk7vXwwKF69esXr16/5H39p6IaOwpZURUsfenwQc0W1kI1PUVa/Flh72uCsc3lFvP9X9Yqb9Q2Fq/ChyxOpNOP6Mc47zMlxfGIIlIrsdjtub19xdXXFh/f3vP/wlv3+gPvGUbwqnoC25UT9uW9COTfLx2WRsPT9yP2He7Q1vLx5SUqB9x+/5377ACpkb6ie/WbP5mHHvt+SihX9sOUwbsUHLXYc+i36PjEEiY6ZmpBB+l2cc3nnnnDOzWwGyLGIShbKCbRN4HKq8ISsY7NlIUybAh/k8VFH0FO8VUSpKAahBEIMeN8xZiWfNvrJcXwOsEn5TtOUDf/8T//Ken2NM5bVaoVOilXTcnPzApMchS2py5aKNp/ussyop3rR3yxwOwoJlkzZIzbtOSr+uQtzcZtmI4WlGknuCTkRI+bOyUSgT52Y1PY7druNiGrGfo6RGsaO3W7Hrv/IfnhD19+z20uu59Rv673Hh4HUg8lZsNKCKWDMOYdVBeCOLFW2AlmW4idR0TKLc+lhFsIEynT2IMxgN6mzh+qYWpCvJZvVminbfkxpBtNmKfeOasLk658zUPNrCCK6kID2Kfs5iKAjQOkqYllQOAlFdzqhVPZVtC31zQusEjsOay3OFjSNqDvrqqVt1xLEntWdhRawNjkMCECzixUjkpLCKHViXPNYYPCcZHkJ2L5oHr2My/jNgDalec7Nebp8Gltxvb6hKRv2dktdr2ibK/R4YL+7y87vk9u9+tVD4/WTHfxRs2cwrJobbm9eU9ctm34ghZSZwWzXozVOm+zZllklJaHP7z+85Q9/+CPX12uatuLjh3v8GOlvD+jsIaaiOjv5fOmEM1lB5OhPfB95+eIlNzdXmMLw4e4tD9sNRWEwTtPfd3g/EnSHLhLaRjq/42H7Ee892+09Dw/3bPbbubemrmsAhq6fyz5TZqASy/XjIqItI8O8mMVJ0ckjkIrCKoexBWITkBg9KKNR1oi0PobMFmTn9xQJfiR5Af0/1J2v1dKwUs5MQ8l/+y//nZv7V5TW0bYtIUScKWjdikTCUcz7fmnTfuzBdpkEThdT/bTUmdT58ufSBkI9BwiP9iUCznzm0qbkgcA+SsqADwPeD+y7Hff3dzxsH/hw945u7BiGgwgBjCJGz77v6PoN2B2j3x1bMgBMQumIiaeKSp8iIUSJdwpWiEIvvnhL0LY8t6dN3Hz+LwDcFLu0LINOGxRpGYtoo06YNcnqPCpBjTXHXj8gTSqN7HEYskAiplxmPUl2SAQvoDdFJb8TNTq6LChTlKalMi1tucK5EqMkt7NpGtrymq+u/4AzDYUTht9aJwrQssTZMvf4WQwWg3sy26o0JRHkjVyMcwavUooYxkU1IZ70A37qAvx1fT4v4zL+UzFtj3yfHsV1TLvkSeLtXMmqXnG9usX0BW83d/kCy/5DHBf4xK9x4S1zN5dvQSxMFJGKhnW7pi4bdv09MXiJTJ9KIsrinIgKSGF+/SGObDaSRdquatq2QSklTv5hFBPdT1D8PwjaVF7UUiJE6WEJKYliLkm54uuXX2MbRdKBf/u3/xetLGVTUbetlBfTHlMpbGFxtSLSsx8e8L1n2z2wH7akTlGWJW27FqPkvsd7f8ou5HgdlXvSlNY5U3U4YQiekiqGRMQgkV4kQwyaGGVxKZJFJzFLUik7jyeNDlL/+aS57llge0xa0Fpz7W4pXtQ4Xcje3x2tO45WHppxTFm9twhQUIuv3+qYVeOnLRInnu3qMZg7z6g9Pq9TBmsSFZbwdIQYGMJATAGfPPvYsx9EGDAMHeM48LATsHa/ueP+4Y7DsGMYOpRRuMKgNfTjwDDusG5kTP18TjhtwIrSW6VE0zSyMYlqVoTGiFgFJZ09FfWTmKvZOoOnmZ6nJVCy0//EPgdSko1QWihcJ/UnqHmzGEDMyRULr0IjZc28xRi8n/vPji7/02tVWFULkDMGUzgJVlcme6UZrC5o6hVX7Q1lKTnJZVGzWl2xqtbcrr6hcivKQkDb5I+mM3vm8WjsQv9/Ctp0VEfRSj5P0gKPGe2embM/cUp+bhrDZVzGb5ZpS6ezbjzpR1Fsxy3brZTcLAWvbr/md9/+gb/eveHjcM/4riMFj7WO5JjLaeoXXw1j7gBZ9NfMi4h0tI1iLMDN9Sturl/y3ft/x4eOunVihlm4efLu+54YxswUyg7RWstuv+FmvEWpJOWawWOdYrVq5ozWkzXrXM7hpyYplQReKAmtv3t3h8bwr//833lx8xLPQPSJcfSUZcmLF68oKsWHu5307VhNURVYp9l1e3bDIWPBxHb7IDFkUy+LE1dy59w8KRpjcu9aIIbMKITEGGKW91v2+z3b7Zar66/nOB2ljkXGvR9IQfHi5jXb7p6HuwPKwKp1HA4bClvy6sUVVWkpdUFlNW21ZtWsGIaBsigx2hBiwGhztPl4dA4pFHaRp2goWOnJckUtALw+oYydOcOu/dYrL2nqSZuun7Q4Jjm7NgSUEbArvVOPlKbq1B+NXOqMeAIjo+/p/YFDt2d3eJASZn+Q1BECH/cP7EdRpY9hIEaJkur6Pf245+PDHWOUqChjNCYZtCGX/wf6YcwiAIM2BpRFG7NQcJbCrvlIDAajK2xmmEUh/ciMaHEtP2bdlvfPrB4aGJ8KDfK1NY6LnkF1uvGJwNB7lNGYqV3DB5IPef4y4o0WIEb5G6V11HVFU0rWr44WpTTO2FzGbCmKitKJZ1pTrDDGUtqGqhJ1Z1mWFEWJ0xUv61czQDu9KHS+vtyzbJh67HKcTx9jFuWacyB/eW2eEb5dSqKXcRmfZNo4keynMzui/tDR73tSSDRVw4vrl3z96ltwhn9/9//JRBcn1ib9yjukRTjIxAjMrKFG4YCRuqhpqpbSlvggu21jDCnKxO2MlSiadCztaq0kcDxbgMTk0UbiaJSSjMufY4zBy97WWFKCwpTYouD6ZkVBRYnj5YtXfPvtt7hKcX27xpaJqAaGsEfrSNJJ4nNyj97UXN00DcYYjHGY3D8jETxS/q2aOjdpZ9CWxNpE3Nk1fVbVLstDj5lEjcZqh1MlRleUZoXRJbYw1NUVLg2UruG6uqGpHcH3VKXitnklu397XsX5OaA/2+4eF4PnQjLPneC/0bVhZoxmRk3PmZcnx0mB0may4ssbjMfHf2QqfQY8Po6McSSEnpACD5sPDL4Xb7T9hu32gUO3Yxh6hhh46LfZuHbMPZPS3Tb6TmLWikiMGhWN9KY5iUsyUWFiYgw6m8aqY75lboCXc8MI26pAmZSD1rMXXJJXrtTzje+PM5SXZdAJ5C2/P8ZBHSP9wCyYunSSABJSRCeJAFQpoYJGYTFKFO6VXuUsUfkbpZU+2sqWWF1xc/0Ka6TfbFWvaNsrmnpFXTYC2kpJFzCqwBhJ6NBa+jpFSGCfZAI8e72c+1k6c039UMTG5zzmMi7jMp4DbeqT16fHs9vteHh4oO9G6rZhvbrmpn3JqKVR1zmHD54YpGfkb5M9ap7s3hQaFTVJG+q6Zb2+piobdpsNYfQYVxBCoCxLqkr+HcO4UHwpnHX0/YHN5oFh6LBT+U2nbB4bf+Irl/ZsrZXkOIQokvm64rq6YaBDobhaXfP1q68ZVU9RaNAj2lmqphFn8xgZQyAtQFZKibIWryWj7MwixJggiFXH3G+zaLT23uPHSBih60Z60z9RBKeU0JJDLwpdXVEXa9blDTfta4xTVE1LXa0Yx0Bpa17c3tDWDpKnKuC6ecWqWs2GpsfzMH0BS6tPe6vSDyw0v/GFYlnqU0mfj1ubUuryDLEMqpo60cbgialH0eNDR9939IOwaIPvxfBYRR4eBLQdui0Puwd2uw27w1ZK9NGzHwcxmM2qTmut2GCkQEgBV5iMFA3KKKzTuQ3DYKJB+zR//krlyCMldhckSF7PiQOzMCIlUshBZilmkYw6y/YsS6JL+47pvhg9j6e6tEC24xhmJn/5JSXSLP7RmqQFOFsMxjoqV1JY2QgppbDaUThH5SoKV1IWBUbXrNevKVxN0zSs2yuJh6pXVJQzgGUGsHrWcU4fufocYPZTxhlF8TGI/TIu4zJ+FNM2bbiX2q5j20/kcDiwuX+g3/dUVYPG4SioXEXlKowxBKXmBX8CDb8eYHsUxJOWO2XZDVem4vbqhlWz5t3DXyVQPdiMV8ThW2tPp458/9SE/PDwEe8j+30nC4vTGKOw9qd1sWf3JZyRQHKxNBDfKGeKWZ0FmtLVrNdrym1JN27ouwP77oBxDhU1cRwhJXz0hAmUpYQq1NlFRxsku9AHKRMvHNdntWhgVgKPWZUXCBL9NC1qAZQBR8W6ueblzdc45yibmtVqTV2tCV5R2oqrVUtTWhSe0kFTrWjq9Yn31RcRfNEkAAAgAElEQVSrb9MXLC7qAuBOyk+PrTpObuPsl+Zz4oBnZAievj9w6DtGv6fv7+iHrZTP9xsOhx29F1FA0p4YPWMYGEYBdPt+T9/3jH7IyvOUvdsURos9hzDZCqM0MY5Hiw7DiX2GUSYnZCxMfCcAl0BFOb+jUpisYlaIQjMCpJjj0s6bRk9M2uOfHXuuhJlOKcxJBUc6MmchBxbXlZJ+t6jnx6tYoJXFJjf7nNVlxaq+oipKCltRGCsGtlVLXTXUlQSsG12jTYM1JVXVSNnTVtiZbZT5ZZpHlu2b+sdeP49Lourzr6/HGe76soe6jMv4ctCWOK8eXQaDj+NI38vCLVhMoSlwVgKAlwqrSTnqvf8VhAjxlOlKZyaVKBOowXF1dcN6fY353jIMXS4DcsJMnS5uCR9G7u/v6bqBOQZYO4zRlGX587Afi8nLGENZ1lSuymHmAnJCtiUB2O/3bLoH9sOesnTEqIgY6Y0zYLQBI+8lRFApkVSfmYgjgxBzM/aUfany4mmtRRWGqBW+SHPqQ4xxDlrX0yIWpIclYVjXN/zu9e95dfuKZi1GnG39ghgVloKqLCkNkAaciRSmQFOdTN0TaPsitu1zF5wZlEhs2JzX9luVkCoWqowJqAlAS/mT3ocdXTjQD1Ku7EZJF9gd9nT9jt3+HcMo/Y673YZDt89MWyQqUXsmJVYePgmIizoSXZRWA5XjwI0+xj9pMEaDsuwPvZwJSkFMErs0l0LBaZfBUpwQlbDA+aONwyiAxcT5d4gRFbzYB2t1xC1n7Cam0v3SDmSqJKQUMDarYmevN50zeafNYE4BSDZ7lKlZuKCSxplCyqCuorAFdVGzalrW7Q1NWbFur2fQ1lQtTdnM/WpKFYQkoG/Zl6YyW52SqK7VmYzNJwyb+szz5fFj06fBWnpEBjyevS/A7TIu40cwbcvdzzl9oIqTKaVBJy3sCgrHU9AysW3DMNCnHqvWvxLb9ujbuURqUHgUhqvVmtvbW6qqYtht53DkcRzpug6yeecyAxOg6w+EECiKJoOKkJMGip/8yvuxRzuVncMEsBUZKIHiYbOlj1veb77j3bt3fLx74P3H92yHB/o4cMXNcXZUDqOtvHahGsRSg0T0PgsM4nHxIWWRgkJbUeXpzHI451DWsqquad01q9VKPOk45h6S5M/onEG6Lq/4+tXvwQSapqFwDY29JWFnm01ZtkYmI1WwxCw3mxaYmJkJo83nf/5KPw/eTgCbzy/805YDv40hwoFEICbpRxvCiI+9ACzleXP3PYd+x/awpRt3kigwduz3e/EGVB3D0HHo9rPIwMfcm6ayIMkoAWSGOcw8KTlvCmOxSkqegaPlRkpqtnmxWoPJhrPTz6NC64hSfiFAytmf00edJAtXLBBDNg5X6Jhm1JL0KWh/rJKeskeX5ttHdbxn8B0JTwwC2CRJpEQrg9aSJqCzka3kbtZYW2C0wyjDTXuNszaXPSuqoqIuG1a5L+31zSuMMjjtsMrhcAufRItXljhvxY5ndMqlX63UWd3NXPb9Et+954DbLLTgRGX8OBs6PsJ5F7edy7iMHwHafqiIqfPENWXuDf3I5mEnDcSqn+NPlrvREMIsr2/LX/ot5Gkh5RzER8M5JQaVaNp6zc3NLavVmn3/cfZUGoYBlQJaQ8yJCHNPWOEYhuHoPaTBDyE/90931E/62I+nUBROgOA4BobxwPs3b/mwf8v3d//B9/d/4e7+jof9li52oBNd18/qM2Mkv1EjWYYpLsqMU1lM52icHOCeFqbISomqVIw3a6wueXH1GpdqXr18RdM0s5FmjBGjDFYf874rV/Ji/QJbarR22ZrZCVBLeVedQIQDBnQAFCFk4Yc9Ve59HmiL56f/c2uRmpYQz2nI+W9j+XhsHpsYGf2eMYiac9/vOfQHDsOO3u/xceDd/Vu23YbN7iOD7wgqEJJnGDqG8UBdO0L0DOPAkEailTK90gKewhiIJqGMCBrkEhXPixiFjRL7DCBK1ubRrNviXI6c0yIUYtp8GIXWhuhHlobABpVBQYIExpI9AoOEk6PmLFCrDAOGkNXQ576MMWfvn9n4qclBC8unjcIajTUFxpS0zRVGlxRFTVWuqKu1xN8VFVY7vr55TWHEBNoZizFOSqS2whnHSq9zgVMt0gX0PF/EFIkZAE+bzQkkGSUxZWq6TlJahM4LE2dd/QX1kNNrRj2udCyuu/QoIG0J3pYgzlzW4Mu4jC9l2k4Zh2XPQ+Y/ZGdoDDFGdv2WD/dveHf3F0YzkNIIKWQPoii5kjHgY8/gO2KZMBMRlB5T6j/HYqmPTMu5hUpNe29FRUPbrKnKBmtLtDakJJ5lhIixKifEKNCGmBKmLNDdgDa5DKysGEiGAq2qn/geNIVZn+x2Y54ID+OGh90de/+R+907Pm7fcThsiMlTmALjQBeGQ7/HJIOyFpP9GFLMytYoMUEqiRed0kgz9xRerQpUqsTF3Qpgq5uSpl7RVjVFUXPVvkR5w237kqa8yrt46edBG9Ri1jXKUhctRpscZ+XnsqtG+t/EzDifaV5WlhACes4B1SgVSVHleCt7BmA9uj3xiXqmXKMenzMZtD5nZ/CDCIin+UyfqYr7OYVz6VneOT7hN8Zsw+GDAJ+Yerbde4awo+s6tvujWGDf7RjCyL7fsN3f87C/ZwydlC0N+CBZntgVIUozf1IRZcBmk2alFNrZYx+dVjObHScDWjQq6dmiY3q90/EpbIlxIqIZQ0BFGAloJRuVPgQgCKOulZxSU+KlQmxAtBbBQNQiHjIarQ1KW1LMReFJnJCEpYopoqJ4Jk6ijTkXFCMvMAZeXF1Jb1uUc9HoAmdrnKswuuT66gXWNFRlS9NcsWolHqoqG5wpuKoaSj0xaCbPVFp8D2enQbk3poRKGbxlYYVV+kljv16cj+qECVPHxIbPO8vPVDPiU3btMzZRj5NrLkzbZVzGjwRtOocRTQkC0+WV8vc9CoOjLBqKumJMe/7Hd/8XvfvIq69e8ObNv0MccRaM06S2YEwHPjx8z66/41X7OxKGqLI9488O2OzTaeBJA6zKX4ar9Utub77h7ft37PYb2qtKGquHkdSDdQ5XODCg0ojXGlOXGDRDAD8YnLmiLr6l4NXi7//Id5AUgwfnYAygTWQ/fuD//rf/nWZtKG4Saxt5s99z/+YNGM3vf/dPdEPPX978O/24IcQDxjiaskJj8P0AUWG1lF2M0hS6onQFTVVJJE1Z4liRxhVOr6iqirquqeta4mqKAp3LMmVZ09YryiT5raBRVgljpez8mTpXnu70F0yZghOAx2TVoaAqmxMQppUVhezZKKXnbnne7PXJcmby65Rs2k898jEqUsv705LBW/zmmV6hmBau9/rIMIRRGBGlPvc9nD53BEICn8GwgOpIYGSIHe/fv+XV65c4FH/dfMeb92/xYSCEkcOw4X77HVGLyOTQ93SHYWbJu3Fgu90K0FKeGBNhlHKg1hptDZvtgaQky0MZsdhRcx+VwSklPWcJwlxCnLZRAY0TAOfl+nXK4HUUAUMf0DoRQu5H0xqbGX/vPZ0fcq+YFN5Tbm3wkx9aihRFRYgjAZN75RRYmxWbsN1tSSoSAwTv8YNkdzpjsMrRHXZYXYiljTY4K0KBum5oXIlJZJbbHX3SXE1RiECgrtYUrqWu1jSN3DpXYozIBWpdnGWbTqHVJIbgWIJ8evaf+c3PG+qz59rPn5fPgTJzBtZd+tku4zJ+JNMmE0NY7HRlYi0ocE76MCDSh55Nf0e9MSS7Y3/Y4P2AitInpLR8xWyymfBEQt5DPqLA1E8XKqTZ3lWfT6Ym93dkgFeWLW1zTV1dM4QBk5MAjFHEHN2UMruTtCFphbIyUaqkUKbEqQZrWjTlT5529ISZ3bRwJ3q/52H3lo0P/Mv//F8ZlKWsNE1bUjdrvvrqG/pe/NTe3A2MUUqihS3RSaOtxkRNYUtW1RqrHbWbemVa2rqhKhsqfcV19XucWov3U1Vl400RmGit8d7PWY3OusUxDce+oxOW85lFQ33OgvAjbr9YEfoU7J1jvr6o4y339H2qzjQxjlO75ePSkZ7DxBdvQz3Hdhz/rEcTlDBDkt7p6X3PodvQDXs+7N4R6w5tIt99+DPfvfszXben7zt23Ue6+EDSgRhgHD3eC4DxOccy6kjbitff/vDA4eCFTcrJBN4PolTUWkyR1dE5X7x67Xxc9MK/bHo7k3JUrMii9MxmZaVYcZhZIKOVmhk0pZQApqKYg9pV/nlMYe6P2/fd4jNQhKgYRy/9rDlLN6JFkaoN2sjfMcrilMUVBqsdpakkc9kVNFXLqm2pi5paS5mzLGqqqqau2wzUaowpRR2tS5yrcLbOm57jZ2x/zAyifknA9WM2zl8GBi8l0cu4jJ8E2jhDWp8uDpMX27SIHw4jHz584NCL1D+lgNMGM0e7qIWx5N9wLHyZpgm/KVtu1jes2zW7/g6tI9YZCqWJyUg5TkPK7ptiL5DEGkAljNWUtqAs3ex69FPG0hlF1v3A4XDg/fs7urjlf/pf/lWyM5WwnevVLa9efUOK0r82jj2jP6ASlKVkC6YyUShH6Uqu1y8oTEFV1KzqllWzZtVIGHRpG1buFYZyDo+XKJsfXgomI2X9n3gGVvxwV9sPOo+kR+zaF67AIVe64lQ9VMuNRsjn2DK/U9SdMUZC8my6/dwHNsaRcTywO+x42H9k323YH3bcH1q0Sbx5/4a3b79n3+3YH7Zs9g9gPElF2ZTkHOIUsy+aUjRNw9dff01Zlnz310jfH3DOUlUFMXq8H6Q/bO57NYusWkDHhSPvtEOZkKkIICZ1aCIewaeSIzDZcZD1rMIuBin1E4mpQ2U7j+m8DDnVRERRMWeE5pQNL4pw7yM+RqqqEtZLaazJdrxKrDcKU1DoEmdE1VlmoUDTrFg3LXXZcFVf4YxseKpSUgcKW2MpsrG3WUAzc3raXAxmL+MyLuPHgbbHwuvlUqZzNmc5W07EgJitxinzL80Td8o4zXtP3/e/4lv5PABVUHC9vqaqGlk/iGgtKraQhO6IWuwmokrZuNajAoQYsEpTlhO4ST95zg1xeejFPsB7z2az4373nrffvWPXH4ijQccCFS2FrqmbFvVas7nf4/2A1VqYMlvhtKV0FU3Vct1cY4yjMiVlOdkGVNRljdUVYWA23n0cxzWBh2kxXPqnKaWw5j//nlkRc7O2nlsC0twq8AOIL/3wORejWFScor84L9zGWEI+yumkRXuy3kA80tIofWTjKCKAYWDwHR827xmjfH8YxI7jMGzpOjG57bo9zX2FtYbtfsNuv6EfR3p/wKeOFCIhjChlcLY8ilm0xrmCr776ij/+8Y9Yq9nuPvLx4wdJJjCKEI4m1JK6IaDtaCArQpPTZtbjbUKEB4JVp2Mk7nAkKfLGGEArYpR+rrTMBiZBCqgwnoI2nwUXIaISmAhGCUQPIaCDKLCMsphQ4nRJ4cR30lon146rKWxJW64obEnppGWgtvWcPlC6ilWzltKoKXBz5NOkk9b4+fyyF3x2GZdxGT8HaDstbYlk+0j/hFxCMDmvT0plMknHFPL9wsZZYwhjJIW0sNH42w+j9NQthcPRNCtq1xLGiB9HsAGtZbGKaVo0I5pE8iMhjuCjeJIpQ1FaXGF/Nh86PfU1pwFUxChRi4U+8pc/fY8rLc7UlLZFxxJCQVvdUrkrtnfiN+dMwWq1oqlaClfRVg1tvaK2IpawSfpurDZYU8wq0KJ4jkA6KsxkMTzmTorf1T+Cw9LkRZjO3p6h1B4BtwjJPiN+kN8PYUTrqQH8sfkBGbBNOavH1zS1KvT0dOOe3W7L4bCj6/cCzA4HDuOWu/07hrATC479jn44MEbZSCkDfd9xPxYCsnJyRtIBZT0mRpxzDIMAmqqsMKYg+IQxjrqu+d3vvuX169d4Pwi7nKOuRCHeo7WVpn41faXFe4hHllAlzmWMxeRz/5tsgYxWiyOS8HF88lHM9hsEFJqYj7VB+uckxzdJBmkSk16lDIiPNFpbXFnibEXSNWXR0jRis9E0rZQ/Myhr6zazbgJoCyWsdFkUOFNgKZ5EQSUUPkViCBS25JhI8IUs7mVcxmVcxnmm7VHb6Oy1I0uKMQajrZg4Kou1RnrAQsjGq+mEqYkxzs3Mv+SYlH/PmjRmOyYpveR+GDTr9oa2blHK0Pc9JgWctcIvxmwXoAJRBWJWlaUQISgcisoVFNYsFuEfy/IIYJsImxQCzmqapuFqdc0wdPgusGqvKa9XGF1hbMVVdctN+xKtDcM3wiyUtmS9XlOX9WzG6ShP7AImZdrp8GcByWx58Kj++csbJv/aY9kO8JwK4DlbUD5hLSJgRYirBIyzRCPln8k9BT2efjyQUsRaizifRAIDdx/fZ4brjt1+Q9ftxRctg7ZebRnCnv1eWhV6P2KMknJdUUHhGeNI76O0kWbWK6QAKlCWq9zGoHCFyZ93wGbz6JubG1IK7A9bxlFCy1PyEsKeQd/UDiEeh0dbETFKm0qiy+N4/D7pNKt7VY7P0kw+bjpHp2npmWWZRqCICobhILNUjlUzFBTW4owTNXNZCwumbFaASrh606yoqxXKrCiLlrZd0dYNdd0uTGwr6qLCaovN+baTmtNmx0H/pDNtKrFG8Tx8lNgwx3WmJKpufUFul3EZl/FFoE19ckGziG/XcnKe+pnGMRDVcaIOeQeugs4xSL9GT5v+rEeo3A2ksVwX11yvX9CUDR/232EQywltCnlveEhhtssQGxAp91hnqKqCorRfkI/5CRbQTDDAE5MHLOv2mlevvkIZze31a15cv6QoCtpqj3UV37z4PSt9QyLyh69LkhemrSorHAWBmA0DzJw4ODugL/FJtjdR6inDFuME2tQjoPkPtMgk/fw5pB5LBU43C+pcN/gCrM0KbBVmGxc5s0b62BOGkT5EDkS2h47t9oEQffbJMyidSMnz/Zs/8/DwkbuP79jtNoQ4kpKU0Id4INqOkEaGMDDSE/Fi7+JAF4p1u8qmt73oZfXxPU/O/BMY0nNPasyMujBnHz584M3bv7LZPIjYKP/OJFY57WE9Ajb1nLxDLWxWkxIwqRVKL+OopDfOkEUJ+bycnmJ2+o8OlaLYNCbQuqQwNXVZU9uKdX1NXda09RWllZ7PyhWsmhVVvUbZlsI1VFVN6USA47TD2gLHkZHWsyWSXnyvsM8kaphHgD5x6pE3Q1jtLqvQZVzGZXwp03Zu8dLzjrgoyqweld6SECIMSUxprcQ9hRCyYWZEPZqcfskRH/Eh6oyCVACLiBGmJIdVdUVdtPiPAeUCyYnPlHhQChBNOuWwdTWjHKcNhXMU1v2M7yD3MEUxwiwouFndEkPi9uol1+uXOOewpqUqW26Ll7l4G7gpblHFUbOpMhjxIeAkF2jRD7RYTPJxUvr0gKncFK6NJpEYxmFezPUTL7x/gAiox/mb0/E5cXbXJ2dbXPjEGeUf8ZAR8JlV84TMZHo8gZ5+HDh0O/q+o/Oe+77j43bDw8MD3g8UpaOqpJyZ8Lx5+5cZtHXdHqUT1gpQGuNAYiCqSDIJnJQCsYqkhYmq2gafIoOPWJhNskNKuDl94Ci6MUZydY1VuXQ68OHuHW/e/DXbf5DFOeLrN+VtHrOGFyzbD535auplM1kBquew95QURk0ahrSIiUo5ek147hdXLxhDInnh0Stbsm7WrNsrGldjdcH16poX65e0dYszBaUtxcKmalC2xpoKl6fCSdkr4VpqAdKODpYiSpLj+Fi2NbUQPGXV1RPW+hLhdBmXcRk/ArR9gm3IfSZKKdq2Zb1ec3coUCrgnMUUK7QT48qx64lKURQFfR/YbDbnmbaEpBf8kmv9SfYohDTgrCWiCHgMlhfrF3zz8lu+f/h/2HXvsSZQt5p+8KA1VV3iw4E4eqxxJB3oBk+XxLlOa/tzaEcJcRTVLbAqGxKBbuz4r3/8Z37n/yjlZ2Ow1nGzLrEUiyXFoOdeqHSEUUrh7IIJ1Or0+D9miD5hMFu4f3CB/uM2q4VB7nSXn8SOC9A6gWYWIM0zEoIIBQ7DgWE80A0HfOjox56u23IYeoaxIwTPmBLvNxtJ+oxR+rt22W/NgNaRP/35PxjHnmHcM45DzrsUQKWtYt8N2NJIWVVpCWsfI64AbQo+3u+JEayphQ33U8auASVZnkXpiCGx3++xJlIUJVpr9octb999z/39PYfDQV6fknYJpcnMUS5VLkCb2HPo+TETGDuyciG/BoU1BYMfGTuPUhGtLSomhsEzdJK4YrVBaxE6FMZSNy2rpqWsVli3Jqbs/aYstW1O+jkLW9OUNVfNDVftFU3ZUFiLRgyglXJPLgmzAGj6ken4yXmQPpfr51nW9mIxexmXcRk/gWk7v0NUylAWNev1NdV9w94/4H3ElZYYH4WsLyJhfi3Lj0/u6TVoz1wmFEPVSOka2nrNdXtFOhxw2oqBpsmeU2iGmPvhAiSfSAG0M2IJoIufbZ+8DEdXGConJrbOikeaMharnPhhnUTZRExm6dTZI7IoR82g5LJIPAGtZ7zeJtNaIVklp/VoXBEz3+bxHBijlB+HDMgO/Z7DYcNh7NjtNvTjnv1B8jslm3OEmEhGsQ8jKQNAUecKmySkTMTHgwgHTMIqBTmuzFoxtzXJoYzNPaeJUGhUCASv2O8GUXxHZnCVothjzGrKdBAQlWmimDwhGLyXftTNZsN+v2UYJATeGJXzabPnWr7IjDEnoG2aD85drFKWlTO46z0xKEiFnKZBEj2Ut1glBtHGiH2Nc2Ig3bZrrlZr6uqasnmRfdBK6qKmKiqqoqY0JYV2GETZWbmK0pWUuhBbkiCpHsoaInFhraLPniJnJ5m5deIyLuMyLuNXZ9qeQTxIaWy1WvH111/zfvtXdm/vGYaBqmkJYXyaQJABWwjhfOP6rymbSsfFQ/5v0GjqsuXl9WtWzZqPh7d03QDaM/oEOhAiHA4dziqUTvg+MI6QSoXWFmvdD9tCfMaQQOdTtlOjKZ2ldPKqJ+VrfASw1Vwkip/4/B6vPvHsZ/xbHSH3wWt9tBOLgM/qRIPGM+BjwCdh1kLyhBDw4cC+e8/o93RdR9fv6fueXbdjv9/SDQLaunHHbrdhe9gxDIOYTWuNtgqsyQIBdcyOXGREukKkxdqK4auUrkW9nZQWJtRYkpK+r7Io5t4vP0SsOVYqFQqV9BwBhVbElLWbCmJM2dvMI5mwgYeHSNd1xCjWONbqWXyUUuJw6CGpxevX8/OkpLJwQcQyS9sYYd00MZjs8eYwWkvNNClsKd5pU39ZXTbSm1bJ5vF6fUXdXNNUr7GupaoqYdEosQt7DeGk9SL3Vj5gBahcrpx7Ps9dB+mHQb967nfUp67JeFl9LuMyLuPHMm2LyWaZqZgnHaMc19e3fOv/iTf33/HXD39h8OOib+3o1yQWSwnvPeM4Egjzfvz5ieynj5M9cjoziWYrE5USKE1brnn58iuav1yh31n23YjSXtgIBd4H+j4w9KNEI48JBkuKBoOFaH4GwKMXmZtPD5F8BHrufXlcqExzE9+XvIb0y34Qf2+gLIT53DzH/GTrwcm6lURkxDOGnjFJ0//B9+z7jm44MI49/Si+aKPfc+g/4MOBcegYxlGsbsZO+tZG8TEcwkA/HujTQNCj/D0jNiBGZXuOXDoESDES41RCLLM6WwLS5aNLxJCIKmFtQURinVJKVK6grmsU4HsvACwuABNqFnWmmAQozfLlSUARiFHPv+P9KFY02sw9cdOhVEpJX2RSjzZsiRQnMBgJQYDbFBAvIgaJSatzTFpRFFhlcbqgKWuqop6NbsuJSasq2nrFarWiKtdYvcboCqfdogdN7FVClOOqpwlCnZ8b1I/JfXqcPXtpTruMy7iMXxW0peeW+ITB0LqW6+trViuZXIfDXiJvUpQQ5jyBk6ZJOjCOIzH/9wsSaecn1OUPZ0GEzmpQTWUbbtYvuWpvcK5EdQmti6xmSyhrqMqGw/4BnctRVlc0VUPhKkj6Z7DWPd3dT30+armDT+fFFRNzQnosAI5nj5HKrfFqAQZ5jl34BxqfAmxTxFpklLTOFBh8BmVjxxA9h27Dbtiz2T2w2W/FWqPbcTgc6PyBkLaE0EOMiyhtOffHbPqatIJC2gkKtRCwKDFetfr4OkW5qwhBTGqVFqPfpcozBkkbCHiqukSFRPKiKFWuyBFLJeM4cvf+wywQijFC8NOfFiDmNKQcFZWVmtPrgEjf581ZfnfjGAnRI8HvPufNynkUgwgGtLaTMBStLTGIb5ozOrPUBc6WWGNwxtE0Ddft9RwN1VQtq2ZFW7U4XeC0wxlRfjptRExQljhVEWdDW0hRrJFTFkLNnFZKOeUh57xOuyB1ZhI5G4t2WjY9CWhX8bOv78+7/zIu4zIu43OZttNVXiZiyOaRStiFMRvqKsM4jmDS7IU2Z//lEss4jpIioH/Zro/Ip/LsYk7rPgK4ib2S3X1FoUuM8hTGSYO5ipRlAU3F1XpNYQ0Oh6Xm1dUfub15TWkrApHy50SfWeGZyKWcR4znfJ/+FHI9ZrCmE/2Bnh/6WwpsfpzyMJ2b3nt86ujiR8bUMQwd/dhx6Ds6L2kCYxwlRWDYZdC2Yd/t6LoDh75j9AcSAykJe2atxVoLRueYqZzjq6QEqI3Jal1m1//Cgk5xAdyPSEJeu5pBe8y9aTHK8+egzblN0YeREDxWKcrK4qziXkUR/hAhjrLJyrElSaXMssXMmMnzTVdUSklSTWZg4vNJGOfNwaTqlKzQJM7/yqCUMGmFa+b7pgzOsqhFDa0dbVlRFSVX7Zq2XdPWK2HSqhWFLViZFoMIByatppR4sxVH0vK3QySlmJXOGZmpBfIyeVMUl1Jh9Rkzy/E2LTZER4ItPUPFTcDsi1JsL+MyLuMyfgRoe8TmJKBLHW/fvuXu7o4YxdBlQxgAACAASURBVAQ0Rn/S167U0U8pBNn5x5iZtidAI/16iCEHVU//jlHm9KIoub6+5fr6FnTF+uqWgCKpyNXViqo21FVBUTgKVeBSzar6hm9e/o62XaOxP30yXlaO1ZlDsrDneMIgnnu6M0xjVE//5HIp+UcGblPZcDJ87rqOrhNz2iE8sBn/ShcfJGWgP4i60x8Y0khSkW7spSet29GNAuRCHPEqEPSAVoFEQGFIToHTsoOIEaKoIZOSUmbKQeYTa2Y0GKNQmTmLcfIby+CHDOJjru0labzTaLQ2kuQZAkVhSc4y9Ikw9vTDjqJP+GGkH7aobBCtJtXmBCa1IgQIeSeQ8qYBpKfu6WU03S+WONrAOPYzaNPa4qymLBrKssGagvX6BqNLCtdSljVVuaIsKwonQeutK7FK40xBU9c09YraiN+gygkmKtvZqnnHkiCZeSOjiEKhLaKwnhr65h+ZoxchgFbuk6AtLa6Y+OjC0wvw+tQu6Tzr/ST67FJWvYzLuIyfE7RpHIFIdxh59+GOu7v3Es3jPD4FDIYUjSxKE3BTYkTrGUQVl3fqaY4hzJPvzwDcznZ0PXrOOYw7vyMpnSgMhj+++mfuv7rnoTlwtb4hokAnbm+vWV81OGcoXYEzJSo4KnfDdfuKCmEAfg48ebanRj3zRie3X+IXLQDnfP8fE6tfevvTuFH9PAB9VjQRn7xe6UNLZ9gR+ffWPwhg8wNdJ8KAzWbDbrfjMD6w6b+jixsOhwO7bk8/Dvg4iveZiigFve8ZfE9IHoxCW02pNVDgrD4CAK0xVlilEAJjSBRFQYzgc4JACgmlFdYWGJ3QWhizFL2QQCkncSrpefM+zkCKlHIfnAAktGIMA8YI32uMIUbJ/NUqMQz9zJSpOEV0iehCKbkofAx4JYBwYq1IEZUyx24USlnpgUMRo8co5qxRq4rMDmqscVTVilV7TdusKcuWly++wpqKqmpp6itJIihbHJLVGfEQAykpnHFUVCf+aDEprDJzskAKERX1093GdBGlBNHnmKtEjEFED2aKXxPol1T6AiHRkZnTmW/Tz7Jn5zjsC8t2GZdxGT8TaFOfaKQ9JnA6NtuOd+8/8PHhjuh2FG1AkTjsIoVrMFZjCoM/9PS+x5k9kYG7h3f84cVLErDvAm1pMmuUb38C1fMYsC2rIcsSry6r4/Rpj3+sUg3hoeFfvvpfGa5HQggSrt5WtG1LWRa8vnm9cGqaLDdkAfk5WKonDhzqE2ycWj5An7Jw+Ufnyqr6OXArXJQ45S+gVMzv9PR7/ej7fI4EdTT2VTypPIUwHgH71F+WX/Cs2JtZxAncZ9uIRV5lWpbkMssxEvk47khKPM68HxjHgX44SARY6Lh/+EAIPaMf6Ptjduc4jgxp4OPujjGM9H1P78ejcGFa5CdfMQVGO7QW1GOMmQt2SqvTGLeQ0FF+Pu5ydm8ymBx9NF1do0pEm+Y+tpRMBmQ6+5zpLEDQ2assiwN8IISOMCaMKzhsD/gwzEBis9kwDCXWajZ9R1WVlHVFTJ5D1zH2EkdlHKBiVqrK7kZHLaXIJLY3zhZYLWIAjZj3OmMoioLCNLhUY1VFUVQSnVWuqKqaoqgwuuTr229xtqKuW6qywVEsOKpIQfHoGljqOOUcX96jjD5zIj9SSVs1h0t9ahPzOYDqMfRST6asz/Ex1Bdm7TIu4zJ+IaZNndL9kw9TUdRUVYN1mgMjPo2gNZGSgEJlmT9aSU+JyQuCnjR5ce55UwoIJ6bzP4lp+7IfLB9i+S/f/stRNBGlJ6YsS+q6XnhP/Y2H+oKfn2nXeb6DJ2aW6lyJ5zGaj484u7yIZvHJeQWexCGlk9+fgJg4n6m0UF2oJWlyDByXsyfkgPA0B0INKfDm418JKuC9gLWu29P1O7puiw89D5sPxDgSYo8PPd4P+DDg/UAg0aWIJxBsmEt+SnFMgdB6XphPxAwRklLCfmm1IPg0xIiKFhVjjkFa1L3TsqFdhDxJmcyuiWMYgE6iyAwhSEJHBnZqEhWEQIgBh0WrOLNnKoPjQIAEdV3jSoexFoJCm4BJCmUVxlqiH4A0q6oFVGtMEvC2Kq4obEllSwpbUtqCqiipyobarvj69p8wiE9aURQURUVZVMIkGofRclu4CoN7tH3Qv8z18LMxW/oZvu0yLuMyLuPvBbQ9nh9zQ3td11xf3VJXLYf9O8IYsc7MtgBTXqVS4tZurZEFN4V5wV4ueilm9uVvfADats2MUJg9pP5uwNqvggfV7FOlF11Dx1v9zPfH8qZSzy+oR8CWzqqIlYpozCNWLasTSYxJSpP9sGcIA3EqfcURnyJ/+u4/GPEMwyACgcOO/eGBrpMkgt3+HlQQsUBuok8pyIYCwLqZBRT/sdM3MN13qu6M85fRai6PxkUsVJo9Jh4ZtqpwukGaGvv1MdFCzQpHsfqYX5OSYzKVbjHQjzviwtAawIcePWbFaYykMRGCeMul0QuYVBanDKg1YNBG5cg2i8Fgk/gZfvXyW0pbUpfNbMPRVK30nhUVr2++wigrqlDjxHNtVnQeWenTs+pSLryMy7iMy/gZQNvTxtqULTKasuXFzUuu1zfc7f+CHw8Ye3Q+j9ETgsJpibIyyszWH1PP0bIM8vfiIn6M3zmCyqlEBk/Vh/9YQ59hEPQTRuHp7cLg92zrzlJtdwRr6eT8mp7AkvCkKZ8zjIwxM2KMHA47Dv2e/eGBfbeX+zNbNqbI93d3+CRK5WHoGQZh3MbxQIgj/bDPPmgxZ2aKKlPpNFeQJ6B+YquRbSOkZG5Oyp8TeFs+fnk7/1ulHHV1PhkkpePjlJogNCfPO4FGrY71bpXr0IpEP3b5Pj0b8oYQ5LyOAkRTEDPdGCM6KQrlKEyBMy3GrjG6pnSOoigobUXlSqx2GGX5+sXXWFvQuJqyrCldRV2UNFVDWZYU2maSdMrqnDY8S7Cm5/S6pa+jXF+XSfgyLuMyLuOzQVt6ztV7sTdOQEHF7e1Lbq5fUbyv2PsHUlDYqe8nZqbNWFxhMNGceLUZImphJDuzCX9r2HJm1Vgu2voffVVJP/H9nakZxYXaTmU4trxf/u2zz91AJDKMA30vTNlh2NH3B8bQsT9s2Pd7trt7doctw7in9z3jODD6QB8iKRu4iims9GihI0oHnNIZEBmUnmKi8kYjN9QrcwRkE+hZ3k7nwpKJmx8f0ykAYzxh62L0z25TkkKC3QEzs3kZ3qY0M6ET4Jn+kDB5AjpdURC1iFKkRQGiDyJgIFEoi1YWqw3OOunZLErxObMrCvcaZxuaqqVtW8nsrFoqJ75o62qFtYU8j5aUAmMclavy/DBy3kTGLsCayvmk+ZpT6ingv4zLuIzLuIwfw7QtcytFXj9pua7X17y8eUVTrDh0d6QxYbTDGIUPotRSWjyp1Kgy+zHg8bjpOZU+ltT+Tift58xYL+PTwC3lHrmTbIE45L7GSMBnVeWI9z6LFDTjKIzaw+6B3X7D7rARc9vQ0Q97umHHodvSdXsGf2D0g4Soh4ixUooTFi2X+IzBZCBWlMUJE3YMK5dXrKUZ7NnzYFkKDSGcsG1aa1JOLjiWJ+OinDqd5+dVsBJKr1E6l6X14qLIr3EcRzG8TUufsSM4VkaAn0JjlRGjXqcpjEInjdUWh6Wwx0SBiSWzZsV69XusW9NWLavVirZuacqKwpbo7I9ms+RCIfm7AoHNgjX1PO1Tyx5zyPGVXjmOx+QyLuMyLuMyfgpoi88uXClbBbSu5Xr9gqZa8fHBkoLCOJH+e47lIWMUySdZWIdeFmeTntJ4f2+k08ni/huKgf6k7cZnMm2PgH9iBALv79+RlMdHL3FOwy6XPDu897iyph8O7HZbttsH9oct/XggxJ7IyOg7xtgz+g4fR0kx0J7BSESaGDdnIKWz4tKAsQqtkwgh5p7LeBLPpJBS+JSduRxTSXTqb1z2s03fPz53ptLfkUWS8uQRtMUnTNsQE1qZHGOl0cnk1zb5HebnzlFUagHa0AalHCoZrHUU1lG6itKWFLbCKktV1BTKURU1bdUIk1Y2OOdQFKzW32KN9KqVZUmpK45puFOvo57TOWY8GQGl88xgzyD4/Jt6UW7Xj6+3C4C7jMu4jMv4CUzbUkkoO2OjFEOMKK0pKGmLmkq36FQQg8dqaSJXOpFimJmGmBe4ub/GLNm7v0+WbQ6W/62tJOoT959YiMQfwH25UT4DtsDIh49viXj6cKAbDuwPG2HUdhv6ceDm+gX9OLDbbdjtt/T9jjGO0rBvAjGOeAYggA0YkzmfqIijpnRWmKiYpNxJQtmI1gl0QjLIFSpInJQJCp8iOkqB0WfQBkeLj+n2XI9bjPFZwLYEbQJIsqhFne8OTEqjg4coVjJaGfRkcJuQTZFyOVpKDGxZlHcTiqZ+gTYFpRPLjXW1YlWvqIuWwpbctDc4nUFbvWJdrSiKEqcl/cMHjTIlRebCT4LT55670w9aLf6tcbOI4mRHps5vCFKCEKYkhUhZXZraLuMyLuMyPhu0PXXGP7V28F4WKltIUPrt1Su+fv0t7+7+woftG3wtWYTSG+QYhgEdNc4VdP2Bt+++p/v9nisnPW3zGvDp7KnL+JkZxMnOZAlEVI5gmHDZ6CNGZ8aKSD8OGA0hRqwRUAGJbjigEpRliVqkQvg40vueqnDc9xv+j//zf+Nh9wGfBrogMVFdv+PQb8VLzXvKlSOpxPv7N7x59z1lZVFWMYx7tIWYBtBiaWFI/P/tvWlzG0marfn460tsWAguIrXkWtXTfXtsbOb//4ixGbPbc2933apKKbVSFBfsiAh3nw8eAEGKUiors6vUZvGkMUlAAImNjIN3OadBoY1CmYixBrxPrTsBLclCJKpAExpigJYWRKGV7nxrUwPXx4jvoqZUUHfanvsfdV0/UE27rcqabsB/O/+4reylyLca59zu/G3eu/dtlxYCq3WDNg6rHUq1uxir5Mumia0iz0tyV6Tnq01VwKIoKIoBq7VgbJFC18sh42rEoBxSZQOcyTgcTtDKYJTFaodTFiNm99vudNyzLN4+k9tqYtc6jnf12L13Op9W/Q/l5Sow5lPfrKenp6fnCyttYdcGvd0i1VhtUMp3XuBC4SpG1QFVMWS6vO7eid9G2yRP1NtWUppdSoMwSvYi1uW3++r3fHkF8SHBdju92Al10xKRbuMRom7TjKJWNGFN8L6LgFqglCKrSybDk10mpIggRtFQcz39wPsP77i4fktQLQ01Pm6ofb1rdXrvcYWkWTEbiLpN1TIRxIC2Kb4oik+vHQGks8dQnW++FVTYWl6kybnUSkwu/8qkjcbQzWZuY7626R1GmzvV1e0Cwva0tfaOSLvfOreid9XkJM5uLUCUUknY7lXtQgjpdquUQ6rRSNAQJC0fxFSdszbHiqMaFRRFWhCwJkOLYE1GWZYUxQCjDzA6ZXkmW46S3OXkNscqi0SNkIx9hWTeu9+lVdIixHu/iftzrV2FdWfbJx9X1b5QsPX09PT0/G6ibV+s3f7lVSiMmM51ylDlQ44OTpgMjvlw9T5t2Ol46wrfJVuH2BLatBHYts3HpTWluoNB/2777yXcdqJB3RrmevxOtKWNzq15bsTLhhbPcrlksZix3qxS/NNqgYhQ5QNCEEpXURYFEDAirMOKy+tLXr59wfnVW9AepVN7E4lE7VNYuQZXGNoWtFOIDoiOaJPEgXWGEFVqb3btTtBdDFFqI27nwUKXz5lsL0K3sbj1TetE6G4mKyTtESPSibb9FudDFbVPiTbRt4sKMSq8TzNzbetpm5Qvmm7TvphLNhgaYZgNkpFuF6+mlUmiLK/IsozD8YSyHDAajCnLAZl2OOcoigKXj7B6hMIloScWrTQGkwxyt556+1m0+xm2kv6XNkAf4iEn//Blok19gZDr37P19PT0/BbRdv9dtuz01XaP1FFyfHDGwfAYZ3IWYZ4OgtsqW2dXEEMges9ms6Ft2+5vdP9X+u/Nvp/Y9vQubolAzZqtl1oTNoiAw+DxbPySl69esFzOWS7nbOoUtL7ZrLDWUuUTDAMOBkdkRb47EvvYslotuJlds1jOULZFHGgVUTotCGwd/LVJRiCiI1qnmDHd5V0aY/BhT3DuxFfocjohxDToHoPuwtC7fEm5384Mu2WC3RuSvdMPea3dF2kff/YEdbvokCxCUopB6Oa2VquuvRolGdAah7Wui4GylDLAiMUYi3RxUc7mFHlKFhgUA4qiYliNKIsBzrhkweEcRuVEzK5FLbH7OaTN0e3vLvGXql+/5o1T/NsVV//r39PT0/PbRNvDTcpw99zYVSkktaSG1ZiDwYQ8G7D0i+7gt+cGHwMheIi+q7TVpLDqvmfyjxRt2xbe9vz5asZ1fUE0qb3X+hoRsC4ZI6/XC/7Xi//JapV801rf0DRpGzjPc9q25dIdI9EwWg8p84wUXWUwuWAyjRiIJqC0IpqIaE8URdQpCWFTL8ALMXpEgzX7G5ua5DGx3aiUzustvSAD0Pjt/UuflQiy147ctuZvX8TdvFZnr9E2dao23VtC2T5OzrnPijZ8at1u9yy9j4gyKK0wRmibgFIWrQ3O5ZTlgKocUlVDCpMxMiNK22Vz5slqwxiHMxlaDEal6+W2xNoMK5pddkVMCQb7b66+qPp1Z7FA7rU8w4MyTXWP/O1uypcIvftpteE3Csaenp6evtK2Cw/6+I92AN+QkqWh9S1Gp3bYeHjIoBxyvXi/u0YIARXDbjBbwS7T8+O/523qHfX8p/KpKltd11xfX/PTh78QszR32LY1ohXWakJoWW+WPH/952TDsVklo1gVMUYY6zFFMdw52u8/xw7LcDjk6HjCdHlO0AacBx0IKoKqk59bFG5urjHKEto6BaMbg9bdnFjrAYPErmEb454w6SKbQpu8+DvBplTyExMloG4Ncm8raOGjZINbmw71UWVyu4jwsHAL+LpGNEhnHC2iEW0wJsNoR9NERFmszSjyIYNqzHA4pqoqSltyWh0zcAOqqiLPCqykipvuWpwqKkQZZG/hgyjEkIx7lXlIDO2d3orWrUHa/uZr16a9+15Kdsos3nnfdptF/JCV7id//p2Ri3BHBvbCraenp+dvEG0P/7GNu5V/lYps0ILSgsFRVUMGgyGykt3BzgePimkQfBvHsxVw+z8jhHQwkV60/d1E23YxZFvFapqGy5sP/PXFnwk2Ceum7dqjzuBDmkecLq6Yz6es1nOUiuS5oxpNOD494OnJKYflIWM3xlq7Fz4fGIwqDo8nvDq3BK2IVpI+6JYNggKC5/LqgsKW1PUaTeyMcXVy9g8BbdzufqT2u94ViCDgY3LdR8UugzNdLrVPIz7utTjVdk8ypvcLKnaPh3w0s7Y9/ZBo2xeAzihENFlmMdphbU7mKspiSJ6XxCCIOKwpU8h6MaQsKoqiopSCs+ExhRQ4cbsoqOSMJl0FUN8VVt1nFUBHA02yV9n5IO5yStX2QrdXuO/dgYWY3RFt8YF2anggT/bu1vlnROOda3w8etHT09PT8ytFW9cY6loe2z+septavftjHlSgxQMNWSEUpUMrQ4xCjJoQPeKThxYoEJXG3KUlcptBGqMiRI0E+c1zLl/acFUPHkw+9S7/3uU+tyzxGe8yvriF9JmfszcAfpvleXs9fSeUm08Oe3vf7EVHCY2vmS1nvL14ScgafGiou/aocUKILev1Elc4YhPBK4y2jEYHPD37hn/+47/yx8f/B34xxqkxxhadS5sQgDxLbcAss0QdCcYTpXsdSbcpqYTZfE4oFE2IBJXMcenmxLz3GJsl09mdAN3bghWB2IWn716noYuWCh+pnBj3MmWjTj5uVqcIqhDBh661D2zNbLvnRHYxVbIzuI0RDgdH5HlJVZRkeUmZDyirYTKhrgYYyVBisDrD2GRia11GRo7DkmF3CwN0e5yR2IlT2VXVvI9IVB9ndWrdBaiGT6n2z9bEHn6tPfxKDl/+nT5xja0ilF/1nXp6enp6OtGmPiq6ya1oQ1BGiAoW9RrrhIYFV5vX1G5OkA1WCbNpjdaKLM/xwWOdRaJldrlgMmoxGUQaWhQh5jixaGt+842///79c4cBeSisnC9p7zwgwu7MYn/5LXgYf/d694Tb1eU1k6MDIp5ZPSV3lkDL+9lbtDKMzJDSjREKmjrNahmTbpEPIBqUCmgTaXzTmboIm3ZDG9Z4lrx4/SeW6wWDyYhs4NjMV9TtJtldLITJ+JB8kLO63hBrx6R4yrPRPzHklKYaozG0QO0VmbZENOs6krsCURDVhhiWxFgTO2803ypCFFaryGod02B+UdKGCKHBOIuEZDcCe9Wv0C26xEhUAS9pieI2t5NkREuXG+qb3fO/dfX33hO69t+63bZGNVoJRhlECdoYNBrfxs5Cw0FQ+CZtyOZZSZkdYMMBmRlSuYJqMOZgOKIajhmUJdo6TkZHhE6U3f+cfsvU3rMv91496U2N0qTHIX7idaW2v69f+jq+f93bl6C6O7i2V017+BWsPvna/tJKWl9x6+np6flVlbaH//gK+1abyqQ4q2WcczW/pIkzlPWE0KKD6g5ySVAQk0t9IOJjSxtrAi0Kmyodkd+0hPaQcBMe0FP3Dl/yt/6A7bXjvfMftEHYryJ86U+9d7m9O5EGz0Oy5dCRQMtle85P7/5CrD3fHX2PPjAUmcNmJm0t7re7YhJtofPRCyTPvWo44PT0lPGrIdXSsapntHGFE4VyASWBIGk5wEuLbzTeB4IXYqOJtUYqTRs2LH1gvd4AET2sUMB6vWI6v8H7DUiTWmgxoiJIMKioaaNGbACtiUrj43aQKuy85dKs3FZwxa4WHFEq4FXXyu0WAXbLBKFrhYbIoqnTTFzXLt36ucHWoiMQokJFT9CCGI1zBaVNSwG5zSmykkE2wOr0GjeiKfKKgZswME8xakCWZZ3hbfpwzv3+yRrq1wof+fXf94HCnPrVv6rSC7Kenp6e/0zR9imaJiJOdbE3G66vr3n9+jUm3+z8qZRKeaPGCn53QNxmPbY7y4//jA1SxX6aw+cOV7K38RY+ccnw8Xm7OJ7bAe3fQ2zeVVUPCEUPPgaMMcn3i7QEUrPh9evX/PWvf6VerTFBMMZylpWpnW2Etrm9jTE02O7uiEjXnBIKV/L49Ck/PPuBeXPJfLWCNqKDYFyJMa7LvOyMa0NydPOxZVUvmC6ucWXBdLlhulwzm64QEU5OjnCF8Ob9X3n97kXKC/VdzJkySdCjUcqglMLJdh4rEpQH31UHSQHqMfiduWuMyfY3ElO7EgitJ+x19WMnDCG1NCVYtp79avuY7FqmAl4R0IjSGDFUWcWoGjEuR+SuYFiNqPKSYXVAlRdYneGMTdueZoANB2iyXeqBMab/q9LT09PT848RbWmO51ZVXF1d8eLFC4phYFF3Hm0S0Vt/LYnd/FCycUipCA0Rf+u8/uvfun9WsD34b13RRj044/VLlYk9i4IoD1ciPiqL7Z8Tf7k4svf4KiV3V/UCeB9oQ4tYk6w4TNrgu7y+4Oefn/Phw3tQgfPLNynouyoZ5acIBdqmylKMEHy7uy8ajUd1FSvNIBvxxx//G9P1JVeXN0zXVynPM3c4k4NElstlqnZFEBMJ2jNdTXnx7jnXqyvaWHOzWDC7XhJQXC/GZIXj/P3PTJcfaGkgtikvFI1SDqUcRIcGlKkJatOJ/E6S+YiIBQKiVZduEO8Fv6es0Rg0PirabS7o1sB2O4uGRURjRaONxZjk/6aVoMRBzIjK4LQhcwVVWTIshwyKEZnNqVxJUVRJxOUFziTbDUdGam46VLw16L2/eLNd/Ojp6enp6flPF21yb/J5sVjw9u1bymUk6A2oFqW6IG9JpajQDQwplYxGm6ZJlaJdy3Dbtvt9Km2f0lDqIVPR++Nn6tPiLSK76MWHb2t4QKz9ukpiVLcVoN08m7rVcFp3iQAIDTU/v/6Z8/N3GCsMhwNmmytenHtqAt88DRyXT1HY7nsEoKWOHqs0CsGiAU0MoLXlyeEzzk+/482rt9TnDe26odURVwlaBBU0SgNacLkgKnCzfM9fX23Q7yJ5pWh8zWbp2dSBDze6E5ob0DVRmu52bDchMxQ5SjICHm1Dyhdt0xJAG0N6HYX02rNKd9uhaRUjhrsJBNrZVIgLQFDEcGuLoZTGGosWQ26LlOGZ5xRFQW5ztDjK4gijc3KXkeclRVbgXI4ThxFLpm1KKHAZVmdoUm7nbRPc7F5DD5n19vT09PT0/N1EmzHsWlLbg9FqtcKrBmyTgrxNlyu9qzSk/Mit31bTNHi2UVZpiy9Ejf49WowP6ST12ULYF33L/a8/tgYNnbTrTIQJe+as2+SHL7tzD849CWgtRDEo3bUJ8cwXU16/fs1iveDk7JCj4xGvXv/E9MMVV4sZG98iP2rG7rjbKo1s2iXrZbLrmIyPcRiU0ikxAENGxenkKd+e/ch603AxfUezTMsRpkgh4zFGRKcQc2JkXk+5mU/xzQKT1RgDonLWtWe9bvEh4DKDzQVlUmtURHWB8zptREa9U8IpBzXuJQukHVmlBKVvtzhTFJRCKZ1avUERWwVRo3zo5s0kmfsqi4hjVI2wxpG7grIcUJYlZTkgdznWFBxOHifRZjOyLMOKQ5MEbgxgxWG61vquDb+tYsaU4vDQ8/m7z7P19PT09PSi7Usu1HpoaDAa8jzvQrSbtIRgBfEpDD7iPxJtIYS0rbdnsJk2+wJgf7tg+zXnf/LiDy8MhHvCrbNz3X0VCLShScP1XSD7rz9WS2fxwJ22sRKwJOsNHyOoyOX1JRdX71ESOTgYkpeWWq35sPhAuLoGpcmKkqdPPCM7xGK4nJ3z9vVrQt3w9PE3fHP2I0bsrlakcZwePuNffmzTuP9z4cP8PaH2BAnkZU7TpvnFKOmR2NQNq82SZrNgc31FNcipygOIlratWdcbWq/IlKGsYA4JOgAAIABJREFUXErSUCFVZWNLDIaoAip6fAh7+5PJYC2ErW2HELrtWq1MMt+VJNhEBIXB6BJit/lpHM7lZK6gcDnWFhyMJmgxZLYkz0tKV6Z2ss3QOuNgcESKbTedWKOrpAmI3M5M3vdJAySqZA/ymS3NXrz19PT09PxdRVsIAR89Rgt5npNlGUFqWiW7DEmlbueNYFsN6bZIuwPxrS6K/G7do/uVts8dI+9V4KK6L9HkI7F295DcdjXHlu1GYwgtgr5jXPu38QmPNqXwvsHrDfP5lOVyRjY0ZIXDq5ZWtazaBcvFjPy6YvLhhLzM0MeBoRpwcf2Gl2/+zGq+AgLDwYTRwGBV0QkSTSUjvvvmj6w2NdfTKet6wyoukRBxJsd7j48bonRCVTV41dAqD0pjdEGRj8hcRe4a5ss5qBZtQ1cxbJN4UTElYVAjXvBqu9apUDFVspJnmiL65JfWtC0iGiQgViPKpWB0nb4+O36KUharLVmWURYjqmpIVVQpw9NViDIYcVibkZkMoy1WHIKgcbevSbrZPWV2lbXt09CltN2K8mQzl06rfkuyp6enp+crEW3WCpqCwIayLPnuu+/46eW/pYM59S6rcitcNuuW1fyGUAvDwxOur6fc3MwYTY531QfrfqcBbd+kdUOANpnHKptmukLtUUbfzqTtiTQfwNct1sVu0k7tVb5uxZrvbEtM58m28jMuPrznZn4FTaSZt5wePuL09BRnHRFo2gYRjZYvu493YoG2EUJADAEkYLVh1U6Zr+a4wlGWFh8afLNh0yy5ml/ja2G2nvLnn/9E41uC8mzGQ1Z+xvubN5y/ekfjN2iX8eRkxeH4jKoYkuLFLQUD/vjDP1PHhnW94fXFC/Ce+fUSceB0RogtTaiJyqOd4MgwZkihK45H33H29Cmr5Ya/PP9fzOYfcFZomjnotIji2yVto4hYtBpgdM56tUrB8UonsaQsxghKJxNmk6egddeFpJdZnjI6XY6VnPEwzaSVWUFZlgzLg9QGzUqsdmSUpM3hrQHxdkFhW1Pbb4CrlPxBBNo7NjhKemHW09PT0/NfQLTdr7ptcyZvA7qFKKprhQa8j8SQDsIh0H3t0oA80m35pfif31xoCwG1/T7WdG3GbubM3Qq1+9UzNGkzEY/qmrcxKkQ5QnegbmiZTqe4XKNdhqfhavGBV+fPubi+SKLtsqVdNckc1jmsyTrbh19ui+3Fl39cZOsqONu2sjGG0XjA0fEEcZ51s+b65oLpYk7jW7TJaUPL9fQK5xzjgwrRDYv1Fet2xirccDk/5+Xbv9C0LQ2BJ/k35Kp7TgCtHZPRMU/OnrHaLLmanafb2QImgAKtVHrsrEIFR2UPORk/4enpHzk9OWOz2dA2wpt3f2FZX9I2nqg9kTrlmzaRiCMoRZCIk6yr9yWRa0yqmDndBadrswtQz/OiWxjIu/B0y9HBKVqSn5pzjiIryKToFgZSLe3W7kXthJvsyfL0DIRPVD79R/XWTsV9ukLa09PT09PzjxBtIbAzW4+kaKFtCLeIINqilKeN4Fvw3WB45koyU5G5AaIygld3Kh0xqN/leKe06Q6gYW8mbBv0lMxkb2fSfOeJq7rPAUWgpiX4iNGuO0ina3nfcjO7JPOORjk2fsnLdy/4y8s/8eHyHPFC/QFMtBweHnJ4eIg12W4RYTer9lmEuBWNpKiiu2NQ6V8FxeTogNP1I5aba+arG969e8tisULEUBUDbJ6xnq84v3jHcFSArLheXtAwx+sVN6v3/PQGbpYzWoG8dByOTnA4kjlGwdHhI/7w3T+x2qxYrmbUYUVsW6ICbRRIilZCFNoVHOaP+f7Z/84fv/9vHB4e4kNDmY2QEPnz8zl+pcCkSpUiYpQmKoNWFicOpwfomELSrbVUxYDBYMCgHJBlBcNyiNEupRLkJbl1WGvR2qLQlPmgSzNIxreyWxqQO2Lt9vS+ehdQnl9ODnhIV3t6E9menp6enq+u0nbPqu02VLsL+A4h0jYtdd0Sg1AWQw5Gx4zKCaUZ4WzJatWw9g0DnaNFiFHupQr8jezNkcXY5Utq1UkyTx3SLJYgeDybuKFpGpq2hegJyyXOWAaDEVbbXT5nGwJKQ1CR6eKK99Mls8UVb85f8P7mDat6Tq4KsmyY5qtEPho6DyF8cYv04wijbQ5CoI4bjNKMRyOG0wHT9QU3s2suLy8hQuEGnBw/Zjg44ANXrFYrLi7f0foZbbPA6w1uILR+xYfFW5btmmyQMzgYkGcVNstSWxnNwI44O3vC9fyS2eyKd1dvaMIC3zRJ7koy2tVKkdmc44Mzvj37kWfH32OxRIHsSc7V5SUvnv8V/BVWa4yJGCuIyTG6IHNDMhmAz5OAs6ntOapGVNWAQTnEmoyjgyOMcWQ2w5kci9m1OmMyZdl77KTbcu5Ox9R2TS+OB7JZFb9SdO3vEfdCraenp6fnKxNt6k6cjcKYVBFRStG2gQxD2wY2m5bghaoac3z0mMePvuVwdEqhK/xGWK8alsuawbCreAj85nCEvYSCGEPKpOwc77uoepR0QeI0NGy4WV1xdXXFbDHFr2s2N3OOD4745tvvKcYlkNqiUTQGw2BU8PLtOc9f/pmLqzfM11dEaZiclEyKE47VN5yOnzGZTLqt2tuq5BcJYvYnqj72g1N7Ui4nBwKz2ZTr60uWyyWuKBjkA85OHnN89AgrBa9ePefq5orr6VvyItLGFaYM+NazXKxZrdcUVyXZm5KD6hTnSjKVpbgyNKWpeHzylKZZs/y3GbNlTbNZE5q0gOBjQ5ZrrNGcHB5zPD4i66p1AEN1wPHolMPBIzarGc5GirLzRysGFPmIvJiQ2wHSaDKTUeQVRVFQ5hVZlmHEIWIYd9mm2zbn/npAiGHXppR74usj77tPPfhK80seMXfjOGX3uaenp6en56sTbfuVtq05qVKKuq4pgqNtPMFDnhc8Ojnju2//wNOzHxhXx2RScv1+QdxsHWOFv8GD9rPCLc3ZgZgkgJpQE1SLUYbYWYw0NFxvPvDu/Wtev33N1fUH6uUaP10zPzwlKxzj8RhDwXYQPSIMBhWemvOLN/z85i8o4zk+G/H42RnfPfqBU/sHxuaYqqow2tx77H65jNj4hqgjphMkWwEXu/8gsqlXNM6zjlNm8xtuplcsFnPa4MmioapGnJ0+4/T0Met1y9u3L7mZXbOpp4wOLKIbjJUkYOuWel1zMX+DvC05GX1P8Jqz0xOyzoJF0IzHE360f+Diw1veXUTayw3rtqYNLZ6GIneUecnJZMKgqhCgpUWhERQH1SFPHn1HbBtcpRgMSspqSFUekJcHFPkBhS0ptMVqk1qfWZl85HaVNIXpzGzVtrUe0yanb1Ml0mXysBiL8SNh/5EBn3Si7qPtz/DAxdOcQBLZek869uKtp6enp+crEW10x7/YHci2gdgiwmazoWky2jYgYjgYH/LNN9/z/fd/5Lh6QkaJpSCOLDSashzcfs/w+zkl+JgqahGo24aL6/dM59cEPMPDAUE8q82Ui8sLXr59wbv3b1ks5qjGo5ae2LQUVcnk4IjT42fo7RAfEYtC6+SXtqlX4GtEDzk8GvH942eMOCVneKcitq2QfYlou7y8RGea3CT/sNSi3dWKmK1mPH/5gmU7JZg15+/fs1guaYJHa42WtDzw7Ml3nGQnvCvPIabZQwj4UBN0m26P1ugsICGyDnOuZu95/vNPLKYe7xu+efIUg0bQFKagGGn+5V/+ley5BdUwncOqEQKGyWjC2aMTJuMRpTNIF1OWbrlhNBjz7PF3lHmGK4SqqsiKAZkb4tyIzB3gjKPUEbMTZezE2d0FAsB3KRrdR7LpFXzNRy12iSlKSgHK6o9FW5fQcKeEtr3IAzFn4V4V73aB5OHc256enp6env9U0fbgeNle8LYPaZg8MzmZzRGEton4VmiDxpqC8eCQs8kZT6pTSoYoHJqMg0whmaEyJQJsNsnt3un7XmnbQ2Tg4ZgD4eNZohTVJJKqIKvVirfv3vH63QsWmylPvz8jqJr5ZsqH6wvevn/LzeyaEAJOabQErpYNxWXBs9kzJsdHSWju/URjDJl1aLF471HekLkhOSN0knX3bid7h/TPM51OsYUllAFtIlqnOa1AINLw+uIn/uOn/8718oK8EqabC+qwQkzEOUeuCyaDI86yMwRDZjMIKtld5EOM3hCVAokoEYxTWBWJoaWOMy4uX9EuAlVhOD07xkoJGCwFiow/nP0roYZ6UWNUzmJ9A7Qcj454PHlGmQ+wOKRLEQid5CrdkJODx4wGB7hMk2cFNkvzbFoVGJJPnO6SMlJ1Ue3eJOzMduPWuy29DrcP8XZUTd8Pn4ipeqbuiLT9F3i4FW6/4l3DfiJGL9J6enp6er6uStve4LbV0DQKXERHjQ6asIkYHMtVJJDxaHLGH7/5V/756b8wYty1tVKkdukqiHrnP2YzISioYzoYth58aNA6YiS1JhvWrNdLRATvI8GrzkS1xLkS07nVazaEsEKJQymLNoqb6RVv378lyJL18w80asF8M2W6uGa+XtP6SAiw8IGjQcHF+3NW5wuOzg85eXbCxD7qTFeTbMt1zsn4MYuTDTfTD4zzx4zcYxQDpAsO//Sh/mGapqFuN4TY8vr1OYNBif7mCdoFhIin5sP6nFc3f+Lny/9gsblGli3X8wuywlKNCtbna1QrfHPyPQ7HkgVOWR5NTri5es9iuWZ8VCI6UK9XrNYzfIzYzCDSUG8Ur97+O3IY8E8fEdZrdFkBltBtYmoG/Pj4/8Q0I/6q/sTl1Vusg7PxMZP8KaeDHxCKvQZmus+FaL45+ZH9qb1wR3yzy2SgSyJQd3TvbQ6rohNpD7XU1QOnP3s5+ez11SeeRfWJZ7MXcD09PT09/xDRFvcsZvcrbQB2uwWpXPLEMilAOyuGtCFS5AOG1QEVJYZkvwAGvKRyWvQQA1GnNl36XkKDZ+031JsFPm4QaanbJavVNYvVHEGxqVuiNxTFmKPJKWMnCCVCIEKXRJAkQ56VHE6OeXPxivObCxZ+QauXrMOUeT1jVdcEpdC6xGYGbEAq8NRczS64uDlneDzG7kmQYT5gPDygMAULVZCZIbkZosi6h/DX93lTioRK3mVtTRssKI/g09YrC26WH/jp5Z949+ElbVziSqFu1yjfYtskGIwYnMqwWEoqDqoxg2KAREu9DKxci7IBryJNI2BiErcajBai8jiryDOHs7qTXuk+bSuIuTng6OAZoRUmw0O0CUwOh0yGJwhZ5793X8B8/JjoXyls/2aF9DsrKdULtJ6enp6er7rSdv/QKuwGw/M82TMYI4gGFSPOWYbDIbI10I2xCwg3Sf0pRVSeqFIVKXb+ZPP1lOV6yWo5ZbVZ0NRzlpsp89kVi9WCtm5YbTbgNZPDU1r/T2kuq5ygsWgcCsF7QYxFi+Xs8bdc3Fxws3rP5fw9tZqy8TPauAQ8Sgza1lgroAJZlhE38OHDB96+fcvZ0TOsKnZyYjQacXR0gnvxnBjBOUeWZb9pBP1WtLW0bfq4FTGeZbPk8sMH3r5+x3y+AN0SxRCCwrfpI3MFA1eRievG/y0nB8ccH5xQuQEf2vfEJtmRaKXSfqfSFNphjUZChhmMORgfMhqOcTalB6Q5frVTKUY5DifHlGXGenMMqiYvbKqg9oP4PT09PT09X5doU+q28Oac61z/YbmcdYHmAefSeS2BUEeKzHR9pW5iSUGINfPNDbPVgnW9Yr6as6mTketqNWO9mbFcTVksp6zXS1ar1c7/bba5QtkWUwVM4RmqYzZRcKpASZq7Q+B4fMa333/POl7T/HzF1XJGW9eIjVRFDpJ82HyzYo1Hi6EhcH19zcXFBavVilF5e99LUzIeDBE0vm7QyuBM9qsES4zxzmKCUgoRSe7/mSFzyTRWdfW91WLN7HqWbC8GY9rYgGrw0dPWntZGqqxiMjqmcMXOPnYkIx4dPubs6Amr1ZpqWKCdQplIG1u0haIqkmdabRmNz3j66DsmkxPMVnDvLQA0PlnhWcmwhVAWjkiL4LvL9/T09PT09HwVoi34ZKURI0SVZNvWTNaHltV6jRhNG2va0BDSODxRwzbZUXUD4JGGeX3J6/PnvDp/zuXNFV5B42s29YK6WdE0K+pmQd0s8b7FB0+LJ0TBL2rkImKHkI2EYpAjKk9rC+puwPvj06cEu6DmAv9mzqK+QIyhrHJCjMznK5bLDbkuKGzaat1sNkynU5bLJZRpkkl1AsaZDKMEFQXTOfDfn4H/W0Tb8eERUXuqqqKyFdBSU7NZN/g2Mh5OGAxKlpsZs+UU3wSW8zk61IwPMh4fPabKBghCRCMYHh085sdn/xuZKwkq4nKLsen5s7mlGpZYa5FGM9JHPBo9ZTI8RDCECCoqTKdHNWkBINndaYSM7aqE6ncne3p6enp6vh7RFvfm2kIMKLWdIYOm2SB5xBhF6zdcTW94MmgRwJkCjyAiRFpaambrD7x5/5y/vPwf/PTyT5xfvcNkOW0MhFATYkOINeBBtUAgyzNMgKb2rP2UDzPILyzlQY7WjtOiRJOn2wq0Xa3IYDg7PGP+w4/MmwsuZ28IbNDREGNA48isxohFqeSH5r1ntVpxc3PD+nhNtVdJMsYwrEYcDA/IXdFZY/y61mAIAemCx7ei7WhyhMkUWZmhgJqay8tLlrMl0SvGgzF55Zgvp5hLh1Gazdrja0VhB5w9espBNUHQbHyD05ZJecj3T//A4fiEm9mUrMxwziBW4fKcwagicw7lNbbNGORjMl2lAK8Aei8c3ewNosVd+oDdPdI9PT09PT09X4lo2xaHZC/BYBvZ5L2nKBxiNKvNklevXjIuTvl+MthVoSKBJtRczs55+/4vvHz37zx/8++8uXjBdH6DLQZpNVC1KYJKAqJDmpcThc0sdd0QVEMbIut6wfXsgp9f/ZXFrKY+FTJ9SOYqtHUYbdFW0DQYNM9On3Fx/YJ3H14zX07xtaCUYTJIhrjz+Qd809Ks1rS0LJdLLi8vWTxaUA3Hu2pS7nIePTqlrmsOhgddnNKXVZq2sV/3fduUSoH1RVFg0bR4Xr58zeu3r1isZiwWKwblAWdnj2jaFePhhPl8RuFeEmLLN49/5PTwlCqr6FQ0SmsqM+Ts6ClHB6fMZjNcnqNtygu11pLbEoMQDeDAqbQBG71PGZ7dzfT+NiUshPRiUEr2POmkF249PT09PT1fi2jbK7ogKg2pb0VbjJ4st0RguZzz+t0rjsaPOZk8ZYDD0+CwrOOSy+l7Xr3/mZfvfuL91WtWzRWt1GhdgOpirbb2rEahrEZbTdSaJm7Y+BYfFVoiy2bF+dV7ZrMlsRYcFUU14XBywnB0iBOD1hFNoKTicHLMeHRMU0fqukGkYHL4lKfPTnn+8/9gvrgmyoYYI3VdM5/PWa/XqOGtOUVuc44mx9TrDYNyiL5jCftlxHjXi2IbXB9CIGjFfD7j9au3/PzyJW3Y0IaWR0ePODl8jOjAaHjIar0gtxXrZs0PT/+JYTHeiSfBItGglDBwIxDFKD/AmJwIeDwBtTMPDrFFdVFOEQVR0PpWWDbNbSJG6GzNtL7Na1AxovruaE9PT09Pz9ch2mKEzTqSFSnrMarAYDDYLSOEtqUYVtSrlucv/0qmhzx5/D3FsKLp5tim60tevf+Jf/vT/8vr8//A5A2DyYCJcyzWguisa7kGvG8I0YNKXmqt12hTkhcZbeOJCKt1S+unLGTFuzevmYyOOD35lvnmBHmXE0UYjSoOT8YMigxrM6pszPP5G9arwHffPOWffvi/ePrtKWJq/vu//d+pIqVylFJcX19zfXXFdydbaSVYcTw9e8rRwRFBBbyPZPrLJFuK2Qp3skkXiwU3s2vERSaTlKhwdXXFxfk579+/J8syjk4OGQ8nOJ3zaPyIJ+PAh8V7xtUJ1lrG5QFVNuw89YQ8r3Zy0HQ2KGlfJIlhfX9xQJk7hUJ9txdKme2+3Z5fx7aGKrfJAj09PT09PT3/eNH2ENt5LK013ns2mxVNrfBBuJ5d8Ofn/5PlyZy2BWc01zcXvP7wM/P1NV48WkNUgdq3RNydbcWgJA3Dd+GQdZs+izE4w06g+AjRr1n7K2S9Qk096zBHkRO8cHmTczktOT45YDabUtcNTgq0M1TlIaPyhJE7pCwqiiLHOYdq1a6V2bYtHo8mYxtU7nRGNBCUx4q9zcP8BUTuXmY7O7dYzKhUjvcebQyj0YjT01PatkVEKIsBB6MjBvkYjSMSGFXHWKmw1jIwFXd84nZJAh/fLnU39fz2s/pEDKy6FW+f7gD3gq2np6enp+erEW1K3QafxxhBsRNs1loiLXVdE4NGacPN4j3/3//6f3j15gXGOLLMMl/ccP7+Jctmic4NWakRI8miYzcXtg2TNymziAhRaNuUsWmM2y1AeB9o25Y61HhWTDdzmquG+WqOijn1Js2PZVnG8btxV9la7c4rXEFmczJSFc51dhvbIXytDDEomqbBWXapmLnJkKjwBIxKiwhf0h3cerJtWa/XLJdLFosF2sB67cgGGQejMT98+wOjaoT3HuMsh6MTSld1/ndQkgyN1c76Vu6prD0hdV+NRR7I4fx0fNlHp/tWaE9PT09Pz9cr2j6O+VGIEqy1OOfwBlpSpcg5R9useX3+Fy7sG6oqVYSWywWL5Q3RespiQFE6oCW2AZok0CRGQorITKFHXUUN7wkKVIhEiUiEGEM6P3okUzRtYFkv8VgINfW6TSH2RG6u31KWBSKaEEErQ1MvmM0vuRwG5vMpm82GGD1aOzJXUFUVeZ4jYroN0dvpNasdElt0VL9qnmtbbdtW8mKMiAhNs2G9XlOWJVYsZ2dnHBwcpoxTpdPtwHQSTXVP2nbSrhO3n4pu+hTx3tfq8895T09PT09Pz38F0cbHok2ju1SAgnVsERURo5L1R9iwXM9ZhyleD1EbxWazofUtWW6xeQZi8F4IfhsW3u5kUSAgBNR2R1EgRk/bBGKb2nxRAdFjBKItaL3CR00b0nUCkRBagvIsNku0bVL7UwExsFy+4vzcstyUvHr/E1c317Rty6gYMZlMOD4+ZnJwQKYzAmE3uA8gShFRqKiI6tfrG6XSBmdZlgQaXKawzhBCAAGLxebJ5HY/9TLEQIwKUXq3HBCjoKS9VWG7QHRJ1UolH4s09YBw27GdUQufk5/9b01PT09PT8/XKtq2FaXt9qNGY4whyzLm8xnBBJQIrd/QskFsi1KRRiA0gU3waNGIcYSo2NQB3yQRorZ5p6oTacqjYgA0Kqbt1RACPrZJ2AAiaaZORAg4EEXUGpQFLFEFxAS0gHMKk4HRNbVvCLFhuVG8O99wfmU4n75mOp2itWY8HnP2+BGPHz9mPB53zU9Jm5PxVvWkeK6txvm8iNk+ZvvtUeccg8EAmwlFaYg6IEp3O5mxq6rtx5QLWgldd3qXwR7i9uf7e+rxnvhSD7RMP7r8/tdh78LqnmALvXjr6enp6en5WkXbx7UWwRiDMY4YQYsFIk2zAdVSVhZ0INDiQ4uKAa0N2hmCgrpuoTU4awhhhaLuFg/SAsJWyKluCEtUUilKus9KISrJG0WO1jlaLFpy8ApRAWUizgp5HhDT4Ns1jV+jgoLVktXigk3rWeFp28igHHB0dMTp6SknJyeUpuwEqtDlb916re0+vvwx2/dpU0pRFAUu14hKAfGC2om2ED1ayd1Fh7An2DopdXd59V7pTN2rlt0Xa1G6UcLwgHiL98TfQ+KOXrz19PT09PT8PUWb7BVTFObugXk3K5UupAi7aSpLhlMOrS3GCoGGugmIhbLMQadYqGgEJQqnC5zLiCEZ6YppsHnGcpH835Tabo96gpKdLgoxokQh6E4wha56FYgxJRUEUYiyaKUJdRJsogSXa5Ca4KHetGw2DSqAb4W2XrJYtuTFmExljM0hh+UJh4NjRmbU5WpuHxiFj+lx0UrdbTv+gnBLfnZ359i2aGXweKRrv27NepVSu2pb2iQ1KUYqPiC+vqiduW2Vhm779gFRd/dWdz9I7p3XC7Wenp6enp5/mGhTHxVp7h6QQwRjIwqP04rG14iGb06+58WLF7SbV7TSIDrZVIQY2Kw82jiMGuJDIAbBt5F5uwbVpjksE2nVGjeoiFHTtJ62bWma1J4zRpMZS9M0aVtVaVAKIRI737M2tmyW16BBa0sUi2ghLxXRB1ofWM5WaCWIDBE9ACJtUIgzHNqC0o84Hj/mm2++5YezHzjOz7Dk6DtFyJASBZCPLTO+gPvbo/uPdbIUuW05qnvPgzHmY930oHD7nGh76PNvoRdtPT09PT09f3fR9suKg05U3LYtBcHEDI1DoQmx3YkToqSQeQQlBo0ihC53sxM/yoCYtvMI69SPllQFCpJEGZHGe/KyTPUnFXctyuhbJKY2qPcBQsCHFh83qCjEqMCnWfzcDtDaYrVFoZEoKKXRWpPFkrPsCUeDE07HZxzkJ5RmhCXv1iC2VSzZibc782G/C39DFJT6tSJqT7CpXoz19PT09PT81xRtn90mfEgvaBQRURqtTTdnRtf6A2IkhpZIQ0ATgiJ6CD6C9lirsMagJNCElhCWiMoRURiTxGH0ChEwKqJiSwxJ2hEC3nvatia0ER9blBI8ChVSgkJKuFeoTpw5XWJtRpmVOJeRmRzncvI8p5CSb8ffM7QjhsMxo9GIzGV72Zo9PT09PT09PV+LaPslkdbZS+xzu4iQrh5iiyKgJVXLmqaB6HHd9qj3itC0tG2LMzrNcEUhtjU+bEAiWicxaFUgCLsN0mbV0P2QVEELkRgixIhEjeq81BSC0goRjTUZTqd5O6dzsqxgWA6pqiGDckBVVVTlkIEbcFKc4EiJCNZkCIa7qQL7ofB9Jaqnp6enp6fnHy3aPltxu20TpoUBlRYQjEGFQGgbRCnEahRC01XGlBFUjGSd0k8uAAAENUlEQVTG4qNQt53VR2NAFGHjEa2AlDcaQqCtG9o2oHy6QVa7tC2KRkQwkoLkRQwKi+AQZdDaYE2qqBVFRZHlGOMwYsiygkExoMgryjz9e1mWlFLgyNBshZ++c6/TfmpPT09PT09Pz9ck2j7B/UpbGqiXLloqmcI2oUGJQinTibpUkdLaMhqWZLagbQPT6SVtWBDqCCrS1pG8NKhuDi40nnbtaWoPQaGUYDNQotFisTojNxlZluFcjpaMQXGI1g5nc4qioCoGlOWAMsux1lFkJUa7XeVNK40WjcUiaMxe2kG8o2DVnRSCvsrW09PT09PT8w8WbV9qlrrfLkyCTGubZsxiizamq4gJKnaSR2menD1hUBzQ1J43Yrm6fktsaqIS4kahXKqk6SiAxVrAClY7jLZkpkCUwWpLlhXkeUlRFJ0YyzgcnWIlT5miRUWZpXZoZh2CxnbLElurEtX5oam90qL6SJh9gUDrS3A9PT09PT09/xjR1omVB3IsU3XtrrO/QiPKEEIkxEAIKeBdCSilUdFicJwcnjIeHLFZe1bTFavplMYHfBBUa4kbi4hBa0tmNC5z5FlJVQzJsgKnU25oZjKyrKDIK4qipMwrrMnIbbUTbVmWkZHv5BmkSCtB9qKokm+a7LZA23vC9CHR1lfZenp6enp6ev7hom1rOBYeFG7eR7ROZ7StxxoDtCilODo6oiwHrNazNHOGJraBZtViDWS24HhyxsnkMUYcTjli63l/8ZIWISsGWFthdE6el1TVgNFgzHAwZlAMcC7rRJshM3kSaa7AWou1GSKaUld3hJXspFkX8I66c5oot8kCO4PZ+9XG3ki2p6enp6en56sTbfDp2KJtdmaaY7s1iBWMsZTlgOOjR7SzDb7dABoFFNmA4eCYk8ljTo+eMi5OUGiOR2tmJ1MyMTTtkhACRXGEMRmZK6iqitFgzGAwYlCkSlqRDRDRaGXQYtNsGoY73ml74kp9JL/uhabfNxJW2/t8v9/Zi7Wenp6enp6er0q0fX6mLe5tIaTEg9RatDZjPDrk229/JJ57ri/Pu06jUBYlZ8dP+ebJDxwVZ2SUgOXRkcJEw/z4jKZe4L1nMHiElrTpmWUZRVaQZyW5KzDKdTJQ3c3hvCPZ5EGptZNgD4q1+9cI9C3Rnp6enp6env8iou2egHlotm2bfqAEazLG4wnPHn/Lwk9ZzuYsV3MExWQ44uTwCU/OvsVRoMgAyzA7pDjL8f4MH5aEAIPyGGKqnCmVrHu3rdZ0i24raDGkTdbtRwC0/Xzy5i+yDU7vRVpPT09PT0/P1y/aPiFYFLcB42xjqrb/pMhUwXg8obwcoSWnqecYEawpqMoDBtUhYPEYNAZL2gIVXQKjbovTgdJ3fuStVAO1vX2RXYh8Elsg6jZD/X5z86Pz7pwId+5XL9h6enp6enp6vnb+fwVVUPNqSVrjAAAAAElFTkSuQmCC\"/>  \n\n<mat-label class=\"centerText\" style=\"color:red;text-align: center\">\n    Durch die aktuelle Situation hängt über unserem\ngroßen Tag ein Schatten, den wir da nicht haben\nwollen. Deswegen haben wir uns entschieden,\nunsere Hochzeitsfeier auf den<br>\n11.09.2021 11.09.2021 11.09.2021<br>\nzu verschieben und dieses Jahr nur im engsten\nFamilienkreis die standesamtliche Trauung zu\nbegehen.<br>\nDie Feier inklusive einer kurzen Trauzeremonie\nfindet am 11.09.2021 ab 14:00 Uhr im Sportheim\nSackenbach e.V. (Pfingstgrundstraße) statt.<br>\nAnsonsten ändert sich nichts, außer dass ihr uns\nbitte bis zum 01.05.2021 Bescheid gebt, ob ihr\ndabei seid.<br>\nWir freuen uns weiterhin sehr auf ein großes Fest\nmit euch allen gemeinsam! <br>\n<br>\nPass gut auf euch auf!\n\n  </mat-label>\n  <mat-label class=\"centerText\">\n    Ihr wollt mit Magdalena und Daniel ihre Hochzeit feiern? Ihr habt uns noch keine Rückmeldung geben?\n    Dann seid ihr hier genau richtig!\n\n  </mat-label>\n<form\n  #Formular=\"ngForm\"\n  class=\"example-container\"\n  (ngSubmit)=\"Submit(Formular.value)\"\n>\n  <div *ngFor=\"let field of fields | entryIDFilter\"\n  class=\"formspace\">\n    <mat-form-field *ngIf=\"field.Type == 'text'\">\n      <input\n        matInput\n        placeholder=\"{{ field.Title }}\"\n        id=\"{{ field.ID }}\"\n        name=\"{{ field.ID }}\"\n        [(ngModel)]=\"answer[field.ID]\"\n      />\n    </mat-form-field>\n    <mat-form-field *ngIf=\"field.Type == 'number'\">\n      <input\n        matInput\n        type=\"number\"\n        placeholder=\"{{ field.Title }}\"\n        id=\"{{ field.ID }}\"\n        name=\"{{ field.ID }}\"\n        [(ngModel)]=\"answer[field.ID]\"\n      />\n    </mat-form-field>\n    <mat-label *ngIf=\"field.Type == 'checkbox'\">{{ field.Title }}</mat-label>\n    <section *ngIf=\"field.Type == 'checkbox'\" multiple>\n      <div class=\"grid\">\n        <mat-checkbox\n          *ngFor=\"let subField of field.SubFields\"\n          id=\"{{ subField.ID }}\"\n          name=\"{{ subField.ID }}\"\n          [(ngModel)]=\"answer[subField.ID]\"\n          >{{ subField.Title }}</mat-checkbox>\n        </div>\n    </section>\n    <mat-form-field\n      *ngIf=\"\n        field.Type != 'checkbox' &&\n        field.Type != 'text' &&\n        field.Type != 'number'\n      \"\n    >\n      <input\n        *ngFor=\"let subField of field.SubFields\"\n        matInput\n        placeholder=\"{{ subField.Title }}\"\n        id=\"{{ subField.ID }}\"\n        name=\"{{ subField.ID }}\"\n        [(ngModel)]=\"answer[subField.ID]\"\n      />\n    </mat-form-field>\n    <label *ngIf=\"(fieldErrors | errorFilter:field.ID) !== undefined\">{{ (fieldErrors | errorFilter:field.ID).ErrorText }}</label>\n  </div>\n  <button mat-button type=\"submit\" class=\"btn btn-success\">Abschicken</button>\n</form>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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
    }
    return __assign.apply(this, arguments);
}

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

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _wufoo_form_wufoo_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wufoo-form/wufoo-form.component */ "./src/app/wufoo-form/wufoo-form.component.ts");
/* harmony import */ var _fin_fin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fin/fin.component */ "./src/app/fin/fin.component.ts");





const routes = [
    { path: '', component: _wufoo_form_wufoo_form_component__WEBPACK_IMPORTED_MODULE_3__["WufooFormComponent"] },
    { path: 'fin', component: _fin_fin_component__WEBPACK_IMPORTED_MODULE_4__["FinComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n#main {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: auto;\n  background-color: rgb(0, 0,0, 0.6);\n  color: rgba(255,255,255,.7);\n}\n#main::after {\n  content: \"\";\n  background: url('bg.png');\n  opacity: 0.5;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  position: absolute;\n  z-index: -1;\n  background-size: cover;\n  background-position: center;\n  background-color: grey;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtDQUFrQztFQUNsQywyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBaUM7RUFDakMsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNtYWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsMCwgMC42KTtcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjcpO1xufVxuI21haW46OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9iZy5wbmcpO1xuICBvcGFjaXR5OiAwLjU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'wufooApp';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _wufoo_form_wufoo_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wufoo-form/wufoo-form.component */ "./src/app/wufoo-form/wufoo-form.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _filter_EntryIDFilter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filter/EntryIDFilter */ "./src/app/filter/EntryIDFilter.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _pipes_errorFilter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/errorFilter.pipe */ "./src/app/pipes/errorFilter.pipe.ts");
/* harmony import */ var _fin_fin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fin/fin.component */ "./src/app/fin/fin.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _wufoo_form_wufoo_form_component__WEBPACK_IMPORTED_MODULE_5__["WufooFormComponent"],
            _filter_EntryIDFilter__WEBPACK_IMPORTED_MODULE_9__["EntryIDFilter"],
            _pipes_errorFilter_pipe__WEBPACK_IMPORTED_MODULE_11__["ErrorFilterPipe"],
            _fin_fin_component__WEBPACK_IMPORTED_MODULE_12__["FinComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/filter/EntryIDFilter.ts":
/*!*****************************************!*\
  !*** ./src/app/filter/EntryIDFilter.ts ***!
  \*****************************************/
/*! exports provided: EntryIDFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryIDFilter", function() { return EntryIDFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EntryIDFilter = class EntryIDFilter {
    transform(items) {
        if (!items) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => item.ID !== -1 && item.Type !== '');
    }
};
EntryIDFilter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'entryIDFilter',
        pure: false
    })
], EntryIDFilter);



/***/ }),

/***/ "./src/app/fin/fin.component.css":
/*!***************************************!*\
  !*** ./src/app/fin/fin.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.centerText{\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  margin: auto;\n  width: 80%;\n  padding-top: 10px;\n  color: #33FF57;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluL2Zpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9maW4vZmluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jZW50ZXJUZXh0e1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgY29sb3I6ICMzM0ZGNTc7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/fin/fin.component.ts":
/*!**************************************!*\
  !*** ./src/app/fin/fin.component.ts ***!
  \**************************************/
/*! exports provided: FinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinComponent", function() { return FinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FinComponent = class FinComponent {
    constructor() { }
    ngOnInit() {
    }
};
FinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fin/fin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fin.component.css */ "./src/app/fin/fin.component.css")).default]
    })
], FinComponent);



/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");











































let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/pipes/errorFilter.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/errorFilter.pipe.ts ***!
  \*******************************************/
/*! exports provided: ErrorFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorFilterPipe", function() { return ErrorFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ErrorFilterPipe = class ErrorFilterPipe {
    transform(fieldErrors, id) {
        return fieldErrors.find(fieldError => fieldError.ID === id);
    }
};
ErrorFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'errorFilter' })
], ErrorFilterPipe);



/***/ }),

/***/ "./src/app/wufoo-form/wufoo-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/wufoo-form/wufoo-form.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: auto;\n  width: 80%;\n\n}\n\n.example-container > * {\n  width: 100%;\n}\n\n.grid{\n  display: grid\n}\n\n.mat-form-field{\n  display: unset !important;\n}\n\n::ng-deep .mat-focused .mat-form-field-label {\n  /*change color of label*/\n  color: rgba(255,255,255,.7) !important;\n }\n\n::ng-deep.mat-form-field-underline {\n  /*change color of underline*/\n  background-color: rgba(255,255,255,.7) !important;\n}\n\n::ng-deep.mat-form-field-ripple {\n /*change color of underline when focused*/\n background-color: rgba(255,255,255,.7) !important;;\n}\n\n.formspace{\n  margin-top: 1% !important;\n}\n\n.btn{\n  background-color: green;\n  margin-top: 3%;\n}\n\n.centerText{\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  margin: auto;\n  width: 80%;\n  padding-top: 10px;\n  color: #33FF57;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd3Vmb28tZm9ybS93dWZvby1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osVUFBVTs7QUFFWjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsc0NBQXNDO0NBQ3ZDOztBQUVBO0VBQ0MsNEJBQTRCO0VBQzVCLGlEQUFpRDtBQUNuRDs7QUFFQTtDQUNDLHlDQUF5QztDQUN6QyxpREFBaUQ7QUFDbEQ7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC93dWZvby1mb3JtL3d1Zm9vLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDgwJTtcblxufVxuXG4uZXhhbXBsZS1jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZ3JpZHtcbiAgZGlzcGxheTogZ3JpZFxufVxuXG4ubWF0LWZvcm0tZmllbGR7XG4gIGRpc3BsYXk6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwqL1xuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNykgIWltcG9ydGFudDtcbiB9XG5cbiA6Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNykgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lIHdoZW4gZm9jdXNlZCovXG4gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNykgIWltcG9ydGFudDs7XG59XG4uZm9ybXNwYWNle1xuICBtYXJnaW4tdG9wOiAxJSAhaW1wb3J0YW50O1xufVxuLmJ0bntcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIG1hcmdpbi10b3A6IDMlO1xufVxuXG4uY2VudGVyVGV4dHtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGNvbG9yOiAjMzNGRjU3O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/wufoo-form/wufoo-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/wufoo-form/wufoo-form.component.ts ***!
  \****************************************************/
/*! exports provided: WufooFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WufooFormComponent", function() { return WufooFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _server_src_types_entry_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../:./../../../server/src/types/entry.entity */ "../server/src/types/entry.entity.ts");
/* harmony import */ var _server_src_types_answer_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../server/src/types/answer.entity */ "../server/src/types/answer.entity.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let WufooFormComponent = class WufooFormComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.fieldErrors = [];
    }
    ngOnInit() {
        this.answer = {};
        this.http.get('/api/fields/filtered').subscribe((resp) => {
            // tslint:disable-next-line: no-string-literal
            this.fields = resp;
        }, err => {
            console.log(err);
        });
    }
    Submit(value) {
        const body = new _server_src_types_entry_entity__WEBPACK_IMPORTED_MODULE_3__["Entry"]();
        body.Answers = [];
        for (const field in value) {
            if (value.hasOwnProperty(field)) {
                const answer = new _server_src_types_answer_entity__WEBPACK_IMPORTED_MODULE_4__["Answer"]();
                answer.FieldID = Number(field);
                answer.Answer = value[field];
                body.Answers.push(answer);
            }
        }
        this.http
            .post('/api/entries/create', body)
            .subscribe((resp) => {
            if (resp.Success === 1) {
                this.router.navigate(['fin']);
            }
            else {
                this.fieldErrors = resp.FieldErrors;
            }
        }, err => {
            console.log(err);
        });
    }
};
WufooFormComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
WufooFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wufoo-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wufoo-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wufoo-form/wufoo-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wufoo-form.component.css */ "./src/app/wufoo-form/wufoo-form.component.css")).default]
    })
], WufooFormComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/daniel/Dokumente/Hochzeit/source/FormApp/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map