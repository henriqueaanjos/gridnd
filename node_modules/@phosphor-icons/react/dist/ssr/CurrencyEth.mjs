var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (e, r, t) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, a = (e, r) => {
  for (var t in r || (r = {}))
    s.call(r, t) && m(e, t, r[t]);
  if (o)
    for (var t of o(r))
      n.call(r, t) && m(e, t, r[t]);
  return e;
}, c = (e, r) => i(e, p(r));
import h, { forwardRef as y } from "react";
import E from "../lib/SSRBase.mjs";
import R from "../defs/CurrencyEth.mjs";
const d = y((e, r) => /* @__PURE__ */ h.createElement(E, c(a({ ref: r }, e), { weights: R })));
d.displayName = "CurrencyEth";
export {
  d as CurrencyEth
};
