var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var u = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, o = (r, e) => {
  for (var t in e || (e = {}))
    u.call(e, t) && a(r, t, e[t]);
  if (m)
    for (var t of m(e))
      S.call(e, t) && a(r, t, e[t]);
  return r;
}, i = (r, e) => p(r, s(e));
import c, { forwardRef as g } from "react";
import h from "../lib/SSRBase.mjs";
import E from "../defs/NumberSquareEight.mjs";
const N = g((r, e) => /* @__PURE__ */ c.createElement(h, i(o({ ref: e }, r), { weights: E })));
N.displayName = "NumberSquareEight";
export {
  N as NumberSquareEight
};
