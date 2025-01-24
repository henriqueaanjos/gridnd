var i = Object.defineProperty, p = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (e, r, o) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, t = (e, r) => {
  for (var o in r || (r = {}))
    f.call(r, o) && a(e, o, r[o]);
  if (m)
    for (var o of m(r))
      n.call(r, o) && a(e, o, r[o]);
  return e;
}, l = (e, r) => p(e, c(r));
import s, { forwardRef as y } from "react";
import d from "../lib/IconBase.mjs";
import u from "../defs/CurrencyDollarSimple.mjs";
const w = y((e, r) => /* @__PURE__ */ s.createElement(d, l(t({ ref: r }, e), { weights: u })));
w.displayName = "CurrencyDollarSimple";
export {
  w as CurrencyDollarSimple
};
