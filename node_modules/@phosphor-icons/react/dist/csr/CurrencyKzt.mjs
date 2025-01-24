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
import y, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import u from "../defs/CurrencyKzt.mjs";
const w = d((e, r) => /* @__PURE__ */ y.createElement(l, c(a({ ref: r }, e), { weights: u })));
w.displayName = "CurrencyKzt";
export {
  w as CurrencyKzt
};
