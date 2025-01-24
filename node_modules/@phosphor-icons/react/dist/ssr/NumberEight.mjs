var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var o = (r, e, t) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, a = (r, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && o(r, t, e[t]);
  if (m)
    for (var t of m(e))
      g.call(e, t) && o(r, t, e[t]);
  return r;
}, i = (r, e) => p(r, s(e));
import h, { forwardRef as E } from "react";
import N from "../lib/SSRBase.mjs";
import R from "../defs/NumberEight.mjs";
const b = E((r, e) => /* @__PURE__ */ h.createElement(N, i(a({ ref: e }, r), { weights: R })));
b.displayName = "NumberEight";
export {
  b as NumberEight
};
