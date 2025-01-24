var c = Object.defineProperty, p = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, k = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, t = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && o(r, a, e[a]);
  if (i)
    for (var a of i(e))
      k.call(e, a) && o(r, a, e[a]);
  return r;
}, m = (r, e) => p(r, f(e));
import l, { forwardRef as S } from "react";
import B from "../lib/SSRBase.mjs";
import R from "../defs/SkipBackCircle.mjs";
const d = S((r, e) => /* @__PURE__ */ l.createElement(B, m(t({ ref: e }, r), { weights: R })));
d.displayName = "SkipBackCircle";
export {
  d as SkipBackCircle
};
