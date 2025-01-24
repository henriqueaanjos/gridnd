var i = Object.defineProperty, f = Object.defineProperties;
var g = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var p = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, t = (e, o) => {
  for (var r in o || (o = {}))
    n.call(o, r) && p(e, r, o[r]);
  if (a)
    for (var r of a(o))
      s.call(o, r) && p(e, r, o[r]);
  return e;
}, m = (e, o) => f(e, g(o));
import c, { forwardRef as h } from "react";
import B from "../lib/IconBase.mjs";
import d from "../defs/ShoppingBag.mjs";
const l = h((e, o) => /* @__PURE__ */ c.createElement(B, m(t({ ref: o }, e), { weights: d })));
l.displayName = "ShoppingBag";
export {
  l as ShoppingBag
};
