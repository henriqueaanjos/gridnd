var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var u = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var o = (r, e, m) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, t = (r, e) => {
  for (var m in e || (e = {}))
    u.call(e, m) && o(r, m, e[m]);
  if (a)
    for (var m of a(e))
      S.call(e, m) && o(r, m, e[m]);
  return r;
}, f = (r, e) => p(r, s(e));
import c, { forwardRef as h } from "react";
import N from "../lib/SSRBase.mjs";
import R from "../defs/NumberSquareThree.mjs";
const b = h((r, e) => /* @__PURE__ */ c.createElement(N, f(t({ ref: e }, r), { weights: R })));
b.displayName = "NumberSquareThree";
export {
  b as NumberSquareThree
};
