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
import S, { forwardRef as c } from "react";
import h from "../lib/SSRBase.mjs";
import B from "../defs/ShoppingBagOpen.mjs";
const R = c((o, e) => /* @__PURE__ */ S.createElement(h, m(t({ ref: e }, o), { weights: B })));
R.displayName = "ShoppingBagOpen";
export {
  R as ShoppingBagOpen
};
