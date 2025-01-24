var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? c(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    p.call(r, o) && t(e, o, r[o]);
  if (a)
    for (var o of a(r))
      s.call(r, o) && t(e, o, r[o]);
  return e;
}, l = (e, r) => f(e, i(r));
import n, { forwardRef as y } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/CurrencyDollar.mjs";
const u = y((e, r) => /* @__PURE__ */ n.createElement(R, l(m({ ref: r }, e), { weights: d })));
u.displayName = "CurrencyDollar";
export {
  u as CurrencyDollar
};
