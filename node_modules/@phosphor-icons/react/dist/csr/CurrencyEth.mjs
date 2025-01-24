var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (e, r, t) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, a = (e, r) => {
  for (var t in r || (r = {}))
    p.call(r, t) && m(e, t, r[t]);
  if (o)
    for (var t of o(r))
      s.call(r, t) && m(e, t, r[t]);
  return e;
}, c = (e, r) => i(e, n(r));
import h, { forwardRef as y } from "react";
import E from "../lib/IconBase.mjs";
import d from "../defs/CurrencyEth.mjs";
const l = y((e, r) => /* @__PURE__ */ h.createElement(E, c(a({ ref: r }, e), { weights: d })));
l.displayName = "CurrencyEth";
export {
  l as CurrencyEth
};
