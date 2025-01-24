var s = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var a = (o, r, e) => r in o ? s(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, i = (o, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && a(o, e, r[e]);
  if (t)
    for (var e of t(r))
      d.call(r, e) && a(o, e, r[e]);
  return o;
}, m = (o, r) => l(o, f(r));
import n, { forwardRef as S } from "react";
import c from "../lib/SSRBase.mjs";
import R from "../defs/SlidersHorizontal.mjs";
const w = S((o, r) => /* @__PURE__ */ n.createElement(c, m(i({ ref: r }, o), { weights: R })));
w.displayName = "SlidersHorizontal";
export {
  w as SlidersHorizontal
};
