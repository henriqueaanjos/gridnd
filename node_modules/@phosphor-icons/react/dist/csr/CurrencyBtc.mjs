var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var c = (e, r, t) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, m = (e, r) => {
  for (var t in r || (r = {}))
    p.call(r, t) && c(e, t, r[t]);
  if (o)
    for (var t of o(r))
      s.call(r, t) && c(e, t, r[t]);
  return e;
}, a = (e, r) => i(e, n(r));
import y, { forwardRef as B } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/CurrencyBtc.mjs";
const u = B((e, r) => /* @__PURE__ */ y.createElement(d, a(m({ ref: r }, e), { weights: l })));
u.displayName = "CurrencyBtc";
export {
  u as CurrencyBtc
};
