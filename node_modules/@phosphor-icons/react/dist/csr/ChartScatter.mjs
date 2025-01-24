var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (r, t, e) => t in r ? f(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e, m = (r, t) => {
  for (var e in t || (t = {}))
    s.call(t, e) && o(r, e, t[e]);
  if (a)
    for (var e of a(t))
      h.call(t, e) && o(r, e, t[e]);
  return r;
}, c = (r, t) => i(r, p(t));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/ChartScatter.mjs";
const C = d((r, t) => /* @__PURE__ */ n.createElement(l, c(m({ ref: t }, r), { weights: w })));
C.displayName = "ChartScatter";
export {
  C as ChartScatter
};
