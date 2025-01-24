var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (r, e, t) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && o(r, t, e[t]);
  if (a)
    for (var t of a(e))
      l.call(e, t) && o(r, t, e[t]);
  return r;
}, c = (r, e) => i(r, p(e));
import n, { forwardRef as S } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/SealPercent.mjs";
const w = S((r, e) => /* @__PURE__ */ n.createElement(R, c(m({ ref: e }, r), { weights: d })));
w.displayName = "SealPercent";
export {
  w as SealPercent
};
