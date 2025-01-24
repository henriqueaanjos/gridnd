var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var i = (e, t, r) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, o = (e, t) => {
  for (var r in t || (t = {}))
    n.call(t, r) && i(e, r, t[r]);
  if (a)
    for (var r of a(t))
      S.call(t, r) && i(e, r, t[r]);
  return e;
}, m = (e, t) => p(e, s(t));
import c, { forwardRef as g } from "react";
import h from "../lib/SSRBase.mjs";
import N from "../defs/PenNibStraight.mjs";
const R = g((e, t) => /* @__PURE__ */ c.createElement(h, m(o({ ref: t }, e), { weights: N })));
R.displayName = "PenNibStraight";
export {
  R as PenNibStraight
};
