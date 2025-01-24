var i = Object.defineProperty, n = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (o, e, p) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: p }) : o[e] = p, t = (o, e) => {
  for (var p in e || (e = {}))
    g.call(e, p) && a(o, p, e[p]);
  if (r)
    for (var p of r(e))
      s.call(e, p) && a(o, p, e[p]);
  return o;
}, m = (o, e) => n(o, f(e));
import c, { forwardRef as h } from "react";
import B from "../lib/IconBase.mjs";
import d from "../defs/ShoppingBagOpen.mjs";
const l = h((o, e) => /* @__PURE__ */ c.createElement(B, m(t({ ref: e }, o), { weights: d })));
l.displayName = "ShoppingBagOpen";
export {
  l as ShoppingBagOpen
};
