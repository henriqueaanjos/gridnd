var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var o = (r, e, m) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, t = (r, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && o(r, m, e[m]);
  if (a)
    for (var m of a(e))
      n.call(e, m) && o(r, m, e[m]);
  return r;
}, S = (r, e) => i(r, p(e));
import u, { forwardRef as c } from "react";
import N from "../lib/SSRBase.mjs";
import R from "../defs/NumberSquareSeven.mjs";
const b = c((r, e) => /* @__PURE__ */ u.createElement(N, S(t({ ref: e }, r), { weights: R })));
b.displayName = "NumberSquareSeven";
export {
  b as NumberSquareSeven
};
