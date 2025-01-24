var m = Object.defineProperty, f = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var i = (r, e, t) => e in r ? m(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, o = (r, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && i(r, t, e[t]);
  if (a)
    for (var t of a(e))
      s.call(e, t) && i(r, t, e[t]);
  return r;
}, l = (r, e) => f(r, c(e));
import R, { forwardRef as d } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/CircleHalfTilt.mjs";
const C = d((r, e) => /* @__PURE__ */ R.createElement(n, l(o({ ref: e }, r), { weights: w })));
C.displayName = "CircleHalfTilt";
export {
  C as CircleHalfTilt
};
