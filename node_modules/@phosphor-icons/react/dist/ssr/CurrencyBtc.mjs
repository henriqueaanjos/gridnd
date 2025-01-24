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
import y, { forwardRef as B } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/CurrencyBtc.mjs";
const l = B((e, r) => /* @__PURE__ */ y.createElement(R, c(a({ ref: r }, e), { weights: d })));
l.displayName = "CurrencyBtc";
export {
  l as CurrencyBtc
};
