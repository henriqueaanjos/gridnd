var i = Object.defineProperty, l = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    p.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      s.call(e, a) && t(r, a, e[a]);
  return r;
}, f = (r, e) => l(r, c(e));
import R, { forwardRef as d } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/CircleHalf.mjs";
const C = d((r, e) => /* @__PURE__ */ R.createElement(n, f(m({ ref: e }, r), { weights: w })));
C.displayName = "CircleHalf";
export {
  C as CircleHalf
};
