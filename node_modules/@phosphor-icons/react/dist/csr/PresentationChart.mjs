var n = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (e, t, r) => t in e ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    p.call(t, r) && a(e, r, t[r]);
  if (o)
    for (var r of o(t))
      c.call(t, r) && a(e, r, t[r]);
  return e;
}, i = (e, t) => s(e, f(t));
import h, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/PresentationChart.mjs";
const C = d((e, t) => /* @__PURE__ */ h.createElement(l, i(m({ ref: t }, e), { weights: w })));
C.displayName = "PresentationChart";
export {
  C as PresentationChart
};
