var c = Object.defineProperty, i = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? c(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, l = (e, r) => {
  for (var o in r || (r = {}))
    p.call(r, o) && t(e, o, r[o]);
  if (a)
    for (var o of a(r))
      s.call(r, o) && t(e, o, r[o]);
  return e;
}, m = (e, r) => i(e, f(r));
import n, { forwardRef as C } from "react";
import y from "../lib/SSRBase.mjs";
import R from "../defs/CurrencyCircleDollar.mjs";
const d = C((e, r) => /* @__PURE__ */ n.createElement(y, m(l({ ref: r }, e), { weights: R })));
d.displayName = "CurrencyCircleDollar";
export {
  d as CurrencyCircleDollar
};
