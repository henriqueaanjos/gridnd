var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (e, t, r) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, i = (e, t) => {
  for (var r in t || (t = {}))
    s.call(t, r) && a(e, r, t[r]);
  if (o)
    for (var r of o(t))
      c.call(t, r) && a(e, r, t[r]);
  return e;
}, m = (e, t) => n(e, p(t));
import g, { forwardRef as h } from "react";
import N from "../lib/IconBase.mjs";
import b from "../defs/PenNibStraight.mjs";
const d = h((e, t) => /* @__PURE__ */ g.createElement(N, m(i({ ref: t }, e), { weights: b })));
d.displayName = "PenNibStraight";
export {
  d as PenNibStraight
};
