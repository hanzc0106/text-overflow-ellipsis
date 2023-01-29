"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleLineEllipsis = exports.SingleLineCSSEllipsis = exports.MultiLinesCSSEllipsis = void 0;
var _react = _interopRequireWildcard(require("react"));
var _utils = require("./utils");
var _excluded = ["height", "minHeight", "maxHeight"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var SingleLineCSSEllipsis = /*#__PURE__*/(0, _react.forwardRef)(function (_ref) {
  var children = _ref.children,
    ref = _ref.ref,
    className = _ref.className,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style;
  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: ref,
    className: 'single-line-ellipsis ' + className,
    style: style
  }, children);
});
exports.SingleLineCSSEllipsis = SingleLineCSSEllipsis;
var MultiLinesCSSEllipsis = /*#__PURE__*/(0, _react.forwardRef)(function (_ref2) {
  var children = _ref2.children,
    ref = _ref2.ref,
    _ref2$lines = _ref2.lines,
    lines = _ref2$lines === void 0 ? 2 : _ref2$lines,
    _ref2$className = _ref2.className,
    className = _ref2$className === void 0 ? '' : _ref2$className,
    _ref2$style = _ref2.style,
    style = _ref2$style === void 0 ? {} : _ref2$style;
  // height will be ignored, because it's not supported by WebkitLineClamp
  var height = style.height,
    minHeight = style.minHeight,
    maxHeight = style.maxHeight,
    restStyle = _objectWithoutProperties(style, _excluded);
  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: ref,
    className: 'multi-line-ellipsis ' + className,
    style: _objectSpread({
      WebkitLineClamp: lines
    }, restStyle)
  }, children);
});
exports.MultiLinesCSSEllipsis = MultiLinesCSSEllipsis;
var SingleLineEllipsis = function SingleLineEllipsis(_ref3) {
  var children = _ref3.children,
    className = _ref3.className,
    overFlowCallback = _ref3.overFlowCallback,
    tooltipWrapper = _ref3.tooltipWrapper,
    _ref3$tooltipPropName = _ref3.tooltipPropName,
    tooltipPropName = _ref3$tooltipPropName === void 0 ? 'title' : _ref3$tooltipPropName;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOverflow = _useState2[0],
    setIsOverflow = _useState2[1];
  var ref = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    var timer = null;
    var initIsOverFlow = function initIsOverFlow() {
      timer = setTimeout(function () {
        if (ref.current) {
          setIsOverflow((0, _utils.isSingleLineOverflow)(ref.current));
          clearTimeout(timer);
        } else {
          initIsOverFlow();
        }
      }, 100);
    };
    initIsOverFlow();
  }, [children]);
  (0, _react.useEffect)(function () {
    typeof overFlowCallback === 'function' && overFlowCallback();
  }, [isOverflow]);
  var render = function render() {
    if ((typeof tooltipWrapper === 'function' || typeof (tooltipWrapper === null || tooltipWrapper === void 0 ? void 0 : tooltipWrapper.render) === 'function') && isOverflow) {
      var TootipWrapper = tooltipWrapper;
      var tooltipProps = _defineProperty({}, tooltipPropName, children);
      return /*#__PURE__*/_react["default"].createElement(TootipWrapper, tooltipProps, /*#__PURE__*/_react["default"].createElement("div", {
        ref: ref,
        className: 'single-line-ellipsis ' + className
      }, children));
    } else {
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: ref,
        className: 'single-line-ellipsis ' + className
      }, children);
    }
  };
  return render();
};
exports.SingleLineEllipsis = SingleLineEllipsis;