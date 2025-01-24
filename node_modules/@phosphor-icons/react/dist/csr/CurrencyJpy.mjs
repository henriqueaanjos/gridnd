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
import y, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import u from "../defs/CurrencyJpy.mjs";
const w = d((e, r) => /* @__PURE__ */ y.createElement(l, p(a({ ref: r }, e), { weights: u })));
w.displayName = "CurrencyJpy";
export {
  w as CurrencyJpy
};
