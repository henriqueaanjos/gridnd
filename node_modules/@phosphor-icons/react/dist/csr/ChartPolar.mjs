var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var e = (o, r, a) => r in o ? i(o, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : o[r] = a, m = (o, r) => {
  for (var a in r || (r = {}))
    c.call(r, a) && e(o, a, r[a]);
  if (t)
    for (var a of t(r))
      l.call(r, a) && e(o, a, r[a]);
  return o;
}, f = (o, r) => p(o, s(r));
import h, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/ChartPolar.mjs";
const C = n((o, r) => /* @__PURE__ */ h.createElement(d, f(m({ ref: r }, o), { weights: w })));
C.displayName = "ChartPolar";
export {
  C as ChartPolar
};
