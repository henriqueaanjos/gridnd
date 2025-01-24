var i = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, s = (r, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      R.call(e, t) && a(r, t, e[t]);
  return r;
}, m = (r, e) => f(r, p(e));
import g, { forwardRef as h } from "react";
import n from "../lib/IconBase.mjs";
import d from "../defs/CashRegister.mjs";
const l = h((r, e) => /* @__PURE__ */ g.createElement(n, m(s({ ref: e }, r), { weights: d })));
l.displayName = "CashRegister";
export {
  l as CashRegister
};
