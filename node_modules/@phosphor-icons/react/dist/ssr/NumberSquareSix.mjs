var S = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, u = Object.prototype.propertyIsEnumerable;
var o = (r, e, m) => e in r ? S(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, t = (r, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && o(r, m, e[m]);
  if (a)
    for (var m of a(e))
      u.call(e, m) && o(r, m, e[m]);
  return r;
}, i = (r, e) => f(r, p(e));
import c, { forwardRef as x } from "react";
import N from "../lib/SSRBase.mjs";
import R from "../defs/NumberSquareSix.mjs";
const b = x((r, e) => /* @__PURE__ */ c.createElement(N, i(t({ ref: e }, r), { weights: R })));
b.displayName = "NumberSquareSix";
export {
  b as NumberSquareSix
};
