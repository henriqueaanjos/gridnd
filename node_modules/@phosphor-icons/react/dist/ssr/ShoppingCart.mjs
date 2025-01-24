var i = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var a = (o, r, t) => r in o ? i(o, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[r] = t, p = (o, r) => {
  for (var t in r || (r = {}))
    n.call(r, t) && a(o, t, r[t]);
  if (e)
    for (var t of e(r))
      S.call(r, t) && a(o, t, r[t]);
  return o;
}, m = (o, r) => f(o, s(r));
import c, { forwardRef as g } from "react";
import h from "../lib/SSRBase.mjs";
import R from "../defs/ShoppingCart.mjs";
const d = g((o, r) => /* @__PURE__ */ c.createElement(h, m(p({ ref: r }, o), { weights: R })));
d.displayName = "ShoppingCart";
export {
  d as ShoppingCart
};
