var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? c(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    p.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      s.call(r, o) && m(e, o, r[o]);
  return e;
}, n = (e, r) => f(e, i(r));
import y, { forwardRef as C } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/CurrencyCny.mjs";
const l = C((e, r) => /* @__PURE__ */ y.createElement(R, n(a({ ref: r }, e), { weights: d })));
l.displayName = "CurrencyCny";
export {
  l as CurrencyCny
};
