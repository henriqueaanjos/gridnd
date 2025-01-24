var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    s.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      n.call(r, o) && m(e, o, r[o]);
  return e;
}, c = (e, r) => i(e, p(r));
import u, { forwardRef as y } from "react";
import E from "../lib/SSRBase.mjs";
import R from "../defs/CurrencyEur.mjs";
const d = y((e, r) => /* @__PURE__ */ u.createElement(E, c(a({ ref: r }, e), { weights: R })));
d.displayName = "CurrencyEur";
export {
  d as CurrencyEur
};
