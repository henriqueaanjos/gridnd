var i = Object.defineProperty, s = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    f.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      p.call(o, r) && m(e, r, o[r]);
  return e;
}, c = (e, o) => s(e, l(o));
import k, { forwardRef as w } from "react";
import C from "../lib/SSRBase.mjs";
import R from "../defs/ClockClockwise.mjs";
const d = w((e, o) => /* @__PURE__ */ k.createElement(C, c(a({ ref: o }, e), { weights: R })));
d.displayName = "ClockClockwise";
export {
  d as ClockClockwise
};
