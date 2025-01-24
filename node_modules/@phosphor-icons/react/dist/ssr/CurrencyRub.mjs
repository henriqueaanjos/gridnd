var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    s.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      R.call(r, o) && m(e, o, r[o]);
  return e;
}, c = (e, r) => i(e, p(r));
import n, { forwardRef as u } from "react";
import y from "../lib/SSRBase.mjs";
import b from "../defs/CurrencyRub.mjs";
const d = u((e, r) => /* @__PURE__ */ n.createElement(y, c(a({ ref: r }, e), { weights: b })));
d.displayName = "CurrencyRub";
export {
  d as CurrencyRub
};
