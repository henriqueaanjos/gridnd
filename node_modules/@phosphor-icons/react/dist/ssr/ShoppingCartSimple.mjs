var i = Object.defineProperty, S = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && t(r, o, e[o]);
  if (p)
    for (var o of p(e))
      l.call(e, o) && t(r, o, e[o]);
  return r;
}, a = (r, e) => S(r, f(e));
import n, { forwardRef as c } from "react";
import g from "../lib/SSRBase.mjs";
import h from "../defs/ShoppingCartSimple.mjs";
const R = c((r, e) => /* @__PURE__ */ n.createElement(g, a(m({ ref: e }, r), { weights: h })));
R.displayName = "ShoppingCartSimple";
export {
  R as ShoppingCartSimple
};
