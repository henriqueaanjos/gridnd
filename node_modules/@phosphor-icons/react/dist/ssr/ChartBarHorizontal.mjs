var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var e = (a, r, o) => r in a ? f(a, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[r] = o, m = (a, r) => {
  for (var o in r || (r = {}))
    l.call(r, o) && e(a, o, r[o]);
  if (t)
    for (var o of t(r))
      n.call(r, o) && e(a, o, r[o]);
  return a;
}, i = (a, r) => p(a, s(r));
import c, { forwardRef as h } from "react";
import B from "../lib/SSRBase.mjs";
import R from "../defs/ChartBarHorizontal.mjs";
const d = h((a, r) => /* @__PURE__ */ c.createElement(B, i(m({ ref: r }, a), { weights: R })));
d.displayName = "ChartBarHorizontal";
export {
  d as ChartBarHorizontal
};
