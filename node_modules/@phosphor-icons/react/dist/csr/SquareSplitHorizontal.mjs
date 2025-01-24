var p = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (r, o, t) => o in r ? p(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t, i = (r, o) => {
  for (var t in o || (o = {}))
    n.call(o, t) && a(r, t, o[t]);
  if (e)
    for (var t of e(o))
      s.call(o, t) && a(r, t, o[t]);
  return r;
}, m = (r, o) => l(r, f(o));
import c, { forwardRef as S } from "react";
import d from "../lib/IconBase.mjs";
import q from "../defs/SquareSplitHorizontal.mjs";
const u = S((r, o) => /* @__PURE__ */ c.createElement(d, m(i({ ref: o }, r), { weights: q })));
u.displayName = "SquareSplitHorizontal";
export {
  u as SquareSplitHorizontal
};
