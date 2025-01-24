var n = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (r, e, t) => e in r ? n(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, a = (r, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && m(r, t, e[t]);
  if (o)
    for (var t of o(e))
      d.call(e, t) && m(r, t, e[t]);
  return r;
}, s = (r, e) => f(r, i(e));
import c, { forwardRef as x } from "react";
import I from "../lib/SSRBase.mjs";
import R from "../defs/GenderIntersex.mjs";
const l = x((r, e) => /* @__PURE__ */ c.createElement(I, s(a({ ref: e }, r), { weights: R })));
l.displayName = "GenderIntersex";
export {
  l as GenderIntersex
};
