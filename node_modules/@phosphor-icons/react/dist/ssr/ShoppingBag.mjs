var i = Object.defineProperty, f = Object.defineProperties;
var g = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, t = (e, o) => {
  for (var r in o || (o = {}))
    s.call(o, r) && p(e, r, o[r]);
  if (a)
    for (var r of a(o))
      n.call(o, r) && p(e, r, o[r]);
  return e;
}, m = (e, o) => f(e, g(o));
import S, { forwardRef as c } from "react";
import h from "../lib/SSRBase.mjs";
import B from "../defs/ShoppingBag.mjs";
const R = c((e, o) => /* @__PURE__ */ S.createElement(h, m(t({ ref: o }, e), { weights: B })));
R.displayName = "ShoppingBag";
export {
  R as ShoppingBag
};
