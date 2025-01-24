var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, u = Object.prototype.propertyIsEnumerable;
var o = (r, e, m) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, t = (r, e) => {
  for (var m in e || (e = {}))
    n.call(e, m) && o(r, m, e[m]);
  if (a)
    for (var m of a(e))
      u.call(e, m) && o(r, m, e[m]);
  return r;
}, f = (r, e) => p(r, s(e));
import S, { forwardRef as c } from "react";
import N from "../lib/SSRBase.mjs";
import R from "../defs/NumberSquareOne.mjs";
const b = c((r, e) => /* @__PURE__ */ S.createElement(N, f(t({ ref: e }, r), { weights: R })));
b.displayName = "NumberSquareOne";
export {
  b as NumberSquareOne
};
