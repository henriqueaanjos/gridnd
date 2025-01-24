var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (r, e, t) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, o = (r, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && i(r, t, e[t]);
  if (a)
    for (var t of a(e))
      l.call(e, t) && i(r, t, e[t]);
  return r;
}, m = (r, e) => f(r, p(e));
import S, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/ChartPieSlice.mjs";
const n = h((r, e) => /* @__PURE__ */ S.createElement(R, m(o({ ref: e }, r), { weights: d })));
n.displayName = "ChartPieSlice";
export {
  n as ChartPieSlice
};
