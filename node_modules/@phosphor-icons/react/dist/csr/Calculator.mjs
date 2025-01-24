var l = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var e = (r, o, a) => o in r ? l(r, o, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[o] = a, m = (r, o) => {
  for (var a in o || (o = {}))
    p.call(o, a) && e(r, a, o[a]);
  if (t)
    for (var a of t(o))
      s.call(o, a) && e(r, a, o[a]);
  return r;
}, c = (r, o) => f(r, i(o));
import n, { forwardRef as d } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/Calculator.mjs";
const C = d((r, o) => /* @__PURE__ */ n.createElement(u, c(m({ ref: o }, r), { weights: w })));
C.displayName = "Calculator";
export {
  C as Calculator
};
