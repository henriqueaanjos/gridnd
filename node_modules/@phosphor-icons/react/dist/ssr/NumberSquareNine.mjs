var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var N = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var o = (r, e, m) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, t = (r, e) => {
  for (var m in e || (e = {}))
    N.call(e, m) && o(r, m, e[m]);
  if (a)
    for (var m of a(e))
      n.call(e, m) && o(r, m, e[m]);
  return r;
}, i = (r, e) => p(r, s(e));
import u, { forwardRef as S } from "react";
import c from "../lib/SSRBase.mjs";
import R from "../defs/NumberSquareNine.mjs";
const b = S((r, e) => /* @__PURE__ */ u.createElement(c, i(t({ ref: e }, r), { weights: R })));
b.displayName = "NumberSquareNine";
export {
  b as NumberSquareNine
};
