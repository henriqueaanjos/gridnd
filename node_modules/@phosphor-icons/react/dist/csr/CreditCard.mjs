var d = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (e, r, t) => r in e ? d(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, m = (e, r) => {
  for (var t in r || (r = {}))
    s.call(r, t) && a(e, t, r[t]);
  if (o)
    for (var t of o(r))
      c.call(r, t) && a(e, t, r[t]);
  return e;
}, i = (e, r) => f(e, p(r));
import C, { forwardRef as n } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/CreditCard.mjs";
const I = n((e, r) => /* @__PURE__ */ C.createElement(l, i(m({ ref: r }, e), { weights: w })));
I.displayName = "CreditCard";
export {
  I as CreditCard
};
