var i = Object.defineProperty, s = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var C = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var c = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    C.call(o, r) && c(e, r, o[r]);
  if (t)
    for (var r of t(o))
      f.call(o, r) && c(e, r, o[r]);
  return e;
}, a = (e, o) => s(e, l(o));
import n, { forwardRef as p } from "react";
import k from "../lib/IconBase.mjs";
import w from "../defs/ClockCounterClockwise.mjs";
const d = p((e, o) => /* @__PURE__ */ n.createElement(k, a(m({ ref: o }, e), { weights: w })));
d.displayName = "ClockCounterClockwise";
export {
  d as ClockCounterClockwise
};
