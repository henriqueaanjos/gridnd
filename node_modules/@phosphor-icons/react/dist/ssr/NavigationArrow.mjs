var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var e = (o, r, a) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : o[r] = a, i = (o, r) => {
  for (var a in r || (r = {}))
    n.call(r, a) && e(o, a, r[a]);
  if (t)
    for (var a of t(r))
      w.call(r, a) && e(o, a, r[a]);
  return o;
}, m = (o, r) => p(o, s(r));
import c, { forwardRef as g } from "react";
import N from "../lib/SSRBase.mjs";
import R from "../defs/NavigationArrow.mjs";
const d = g((o, r) => /* @__PURE__ */ c.createElement(N, m(i({ ref: r }, o), { weights: R })));
d.displayName = "NavigationArrow";
export {
  d as NavigationArrow
};
