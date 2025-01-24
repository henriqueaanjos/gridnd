var m = Object.defineProperty, i = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? m(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, c = (e, r) => {
  for (var o in r || (r = {}))
    n.call(r, o) && t(e, o, r[o]);
  if (a)
    for (var o of a(r))
      p.call(r, o) && t(e, o, r[o]);
  return e;
}, l = (e, r) => i(e, f(r));
import s, { forwardRef as C } from "react";
import y from "../lib/IconBase.mjs";
import d from "../defs/CurrencyCircleDollar.mjs";
const u = C((e, r) => /* @__PURE__ */ s.createElement(y, l(c({ ref: r }, e), { weights: d })));
u.displayName = "CurrencyCircleDollar";
export {
  u as CurrencyCircleDollar
};
