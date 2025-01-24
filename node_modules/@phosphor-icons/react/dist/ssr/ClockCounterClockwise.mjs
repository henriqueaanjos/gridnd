var i = Object.defineProperty, s = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var C = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    C.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      f.call(o, r) && m(e, r, o[r]);
  return e;
}, c = (e, o) => s(e, l(o));
import p, { forwardRef as k } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/ClockCounterClockwise.mjs";
const R = k((e, o) => /* @__PURE__ */ p.createElement(n, c(a({ ref: o }, e), { weights: w })));
R.displayName = "ClockCounterClockwise";
export {
  R as ClockCounterClockwise
};
