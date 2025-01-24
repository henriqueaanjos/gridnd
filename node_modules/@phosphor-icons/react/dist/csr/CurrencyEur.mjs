var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    p.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      s.call(r, o) && m(e, o, r[o]);
  return e;
}, c = (e, r) => i(e, n(r));
import u, { forwardRef as y } from "react";
import E from "../lib/IconBase.mjs";
import d from "../defs/CurrencyEur.mjs";
const l = y((e, r) => /* @__PURE__ */ u.createElement(E, c(a({ ref: r }, e), { weights: d })));
l.displayName = "CurrencyEur";
export {
  l as CurrencyEur
};
