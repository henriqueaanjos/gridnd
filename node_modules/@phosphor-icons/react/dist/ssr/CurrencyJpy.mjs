var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, y = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? c(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    s.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      y.call(r, o) && m(e, o, r[o]);
  return e;
}, p = (e, r) => f(e, i(r));
import n, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/CurrencyJpy.mjs";
const u = R((e, r) => /* @__PURE__ */ n.createElement(d, p(a({ ref: r }, e), { weights: l })));
u.displayName = "CurrencyJpy";
export {
  u as CurrencyJpy
};
