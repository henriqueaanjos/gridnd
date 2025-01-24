var p = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      c.call(e, t) && a(r, t, e[t]);
  return r;
}, i = (r, e) => f(r, n(e));
import h, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/ChartLineUp.mjs";
const C = d((r, e) => /* @__PURE__ */ h.createElement(l, i(m({ ref: e }, r), { weights: w })));
C.displayName = "ChartLineUp";
export {
  C as ChartLineUp
};
