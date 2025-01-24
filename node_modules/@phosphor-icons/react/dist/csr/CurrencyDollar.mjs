var l = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? l(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    n.call(r, o) && t(e, o, r[o]);
  if (a)
    for (var o of a(r))
      p.call(r, o) && t(e, o, r[o]);
  return e;
}, c = (e, r) => f(e, i(r));
import s, { forwardRef as y } from "react";
import d from "../lib/IconBase.mjs";
import u from "../defs/CurrencyDollar.mjs";
const w = y((e, r) => /* @__PURE__ */ s.createElement(d, c(m({ ref: r }, e), { weights: u })));
w.displayName = "CurrencyDollar";
export {
  w as CurrencyDollar
};
