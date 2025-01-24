var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? c(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    n.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      s.call(r, o) && m(e, o, r[o]);
  return e;
}, p = (e, r) => f(e, i(r));
import y, { forwardRef as b } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/CurrencyGbp.mjs";
const u = b((e, r) => /* @__PURE__ */ y.createElement(d, p(a({ ref: r }, e), { weights: l })));
u.displayName = "CurrencyGbp";
export {
  u as CurrencyGbp
};
