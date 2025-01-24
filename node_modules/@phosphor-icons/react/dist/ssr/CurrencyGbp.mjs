var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? c(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    s.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      n.call(r, o) && m(e, o, r[o]);
  return e;
}, p = (e, r) => f(e, i(r));
import y, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import d from "../defs/CurrencyGbp.mjs";
const l = R((e, r) => /* @__PURE__ */ y.createElement(b, p(a({ ref: r }, e), { weights: d })));
l.displayName = "CurrencyGbp";
export {
  l as CurrencyGbp
};
