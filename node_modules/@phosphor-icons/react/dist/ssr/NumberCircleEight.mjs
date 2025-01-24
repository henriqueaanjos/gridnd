var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (r, e, t) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, o = (r, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && i(r, t, e[t]);
  if (m)
    for (var t of m(e))
      l.call(e, t) && i(r, t, e[t]);
  return r;
}, a = (r, e) => f(r, p(e));
import g, { forwardRef as h } from "react";
import E from "../lib/SSRBase.mjs";
import N from "../defs/NumberCircleEight.mjs";
const R = h((r, e) => /* @__PURE__ */ g.createElement(E, a(o({ ref: e }, r), { weights: N })));
R.displayName = "NumberCircleEight";
export {
  R as NumberCircleEight
};
