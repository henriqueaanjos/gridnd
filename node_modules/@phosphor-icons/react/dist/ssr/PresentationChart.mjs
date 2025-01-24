var s = Object.defineProperty, n = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    p.call(t, r) && o(e, r, t[r]);
  if (a)
    for (var r of a(t))
      c.call(t, r) && o(e, r, t[r]);
  return e;
}, i = (e, t) => n(e, f(t));
import h, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/PresentationChart.mjs";
const w = R((e, t) => /* @__PURE__ */ h.createElement(d, i(m({ ref: t }, e), { weights: l })));
w.displayName = "PresentationChart";
export {
  w as PresentationChart
};
