var i = Object.defineProperty, s = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    f.call(o, r) && c(e, r, o[r]);
  if (t)
    for (var r of t(o))
      p.call(o, r) && c(e, r, o[r]);
  return e;
}, a = (e, o) => s(e, l(o));
import k, { forwardRef as w } from "react";
import C from "../lib/IconBase.mjs";
import n from "../defs/ClockClockwise.mjs";
const d = w((e, o) => /* @__PURE__ */ k.createElement(C, a(m({ ref: o }, e), { weights: n })));
d.displayName = "ClockClockwise";
export {
  d as ClockClockwise
};
