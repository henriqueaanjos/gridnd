var i = Object.defineProperty, p = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (e, r, o) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, t = (e, r) => {
  for (var o in r || (r = {}))
    f.call(r, o) && a(e, o, r[o]);
  if (m)
    for (var o of m(r))
      s.call(r, o) && a(e, o, r[o]);
  return e;
}, l = (e, r) => p(e, c(r));
import n, { forwardRef as S } from "react";
import y from "../lib/SSRBase.mjs";
import R from "../defs/CurrencyDollarSimple.mjs";
const d = S((e, r) => /* @__PURE__ */ n.createElement(y, l(t({ ref: r }, e), { weights: R })));
d.displayName = "CurrencyDollarSimple";
export {
  d as CurrencyDollarSimple
};
