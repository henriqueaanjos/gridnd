var d = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, C = Object.prototype.propertyIsEnumerable;
var o = (e, r, t) => r in e ? d(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, m = (e, r) => {
  for (var t in r || (r = {}))
    s.call(r, t) && o(e, t, r[t]);
  if (a)
    for (var t of a(r))
      C.call(r, t) && o(e, t, r[t]);
  return e;
}, i = (e, r) => f(e, p(r));
import c, { forwardRef as R } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/CreditCard.mjs";
const w = R((e, r) => /* @__PURE__ */ c.createElement(l, i(m({ ref: r }, e), { weights: n })));
w.displayName = "CreditCard";
export {
  w as CreditCard
};
