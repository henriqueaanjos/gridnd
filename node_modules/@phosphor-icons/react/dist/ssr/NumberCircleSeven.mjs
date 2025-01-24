var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (r, e, m) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, a = (r, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && t(r, m, e[m]);
  if (o)
    for (var m of o(e))
      l.call(e, m) && t(r, m, e[m]);
  return r;
}, i = (r, e) => f(r, p(e));
import n, { forwardRef as S } from "react";
import N from "../lib/SSRBase.mjs";
import R from "../defs/NumberCircleSeven.mjs";
const b = S((r, e) => /* @__PURE__ */ n.createElement(N, i(a({ ref: e }, r), { weights: R })));
b.displayName = "NumberCircleSeven";
export {
  b as NumberCircleSeven
};
