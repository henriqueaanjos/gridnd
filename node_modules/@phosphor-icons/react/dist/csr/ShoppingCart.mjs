var i = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (r, o, t) => o in r ? i(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t, p = (r, o) => {
  for (var t in o || (o = {}))
    s.call(o, t) && a(r, t, o[t]);
  if (e)
    for (var t of e(o))
      c.call(o, t) && a(r, t, o[t]);
  return r;
}, m = (r, o) => f(r, n(o));
import g, { forwardRef as h } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/ShoppingCart.mjs";
const w = h((r, o) => /* @__PURE__ */ g.createElement(d, m(p({ ref: o }, r), { weights: l })));
w.displayName = "ShoppingCart";
export {
  w as ShoppingCart
};
