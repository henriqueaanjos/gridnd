var n = Object.defineProperty, c = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? n(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    p.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      s.call(o, r) && m(e, r, o[r]);
  return e;
}, f = (e, o) => c(e, i(o));
import l, { forwardRef as d } from "react";
import k from "../lib/IconBase.mjs";
import w from "../defs/ClockAfternoon.mjs";
const A = d((e, o) => /* @__PURE__ */ l.createElement(k, f(a({ ref: o }, e), { weights: w })));
A.displayName = "ClockAfternoon";
export {
  A as ClockAfternoon
};
