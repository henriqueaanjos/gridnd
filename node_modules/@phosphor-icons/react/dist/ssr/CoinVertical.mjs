var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (r, e, o) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, i = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && a(r, o, e[o]);
  if (t)
    for (var o of t(e))
      l.call(e, o) && a(r, o, e[o]);
  return r;
}, m = (r, e) => f(r, p(e));
import n, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import w from "../defs/CoinVertical.mjs";
const C = R((r, e) => /* @__PURE__ */ n.createElement(d, m(i({ ref: e }, r), { weights: w })));
C.displayName = "CoinVertical";
export {
  C as CoinVertical
};
