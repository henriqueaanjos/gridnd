var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      h.call(e, t) && a(r, t, e[t]);
  return r;
}, i = (r, e) => p(r, s(e));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/ChartPie.mjs";
const C = d((r, e) => /* @__PURE__ */ n.createElement(l, i(m({ ref: e }, r), { weights: w })));
C.displayName = "ChartPie";
export {
  C as ChartPie
};
