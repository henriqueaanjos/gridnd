var p = Object.defineProperty, m = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && t(o, r, e[r]);
  if (i)
    for (var r of i(e))
      c.call(e, r) && t(o, r, e[r]);
  return o;
}, n = (o, e) => m(o, f(e));
import g, { forwardRef as h } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/ShippingContainer.mjs";
const w = h((o, e) => /* @__PURE__ */ g.createElement(d, n(a({ ref: e }, o), { weights: l })));
w.displayName = "ShippingContainer";
export {
  w as ShippingContainer
};
