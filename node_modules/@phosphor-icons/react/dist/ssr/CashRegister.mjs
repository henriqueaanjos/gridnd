var i = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (r, e, t) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, s = (r, e) => {
  for (var t in e || (e = {}))
    R.call(e, t) && o(r, t, e[t]);
  if (a)
    for (var t of a(e))
      c.call(e, t) && o(r, t, e[t]);
  return r;
}, m = (r, e) => f(r, p(e));
import g, { forwardRef as h } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/CashRegister.mjs";
const n = h((r, e) => /* @__PURE__ */ g.createElement(d, m(s({ ref: e }, r), { weights: l })));
n.displayName = "CashRegister";
export {
  n as CashRegister
};
