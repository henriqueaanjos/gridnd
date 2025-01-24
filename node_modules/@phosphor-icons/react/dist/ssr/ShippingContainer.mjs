var m = Object.defineProperty, n = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var t = (r, e, i) => e in r ? m(r, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[e] = i, a = (r, e) => {
  for (var i in e || (e = {}))
    s.call(e, i) && t(r, i, e[i]);
  if (o)
    for (var i of o(e))
      S.call(e, i) && t(r, i, e[i]);
  return r;
}, p = (r, e) => n(r, f(e));
import c, { forwardRef as g } from "react";
import h from "../lib/SSRBase.mjs";
import R from "../defs/ShippingContainer.mjs";
const d = g((r, e) => /* @__PURE__ */ c.createElement(h, p(a({ ref: e }, r), { weights: R })));
d.displayName = "ShippingContainer";
export {
  d as ShippingContainer
};
