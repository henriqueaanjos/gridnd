var p = Object.defineProperty, l = Object.defineProperties;
var S = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (o, r, t) => r in o ? p(o, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[r] = t, i = (o, r) => {
  for (var t in r || (r = {}))
    f.call(r, t) && a(o, t, r[t]);
  if (e)
    for (var t of e(r))
      s.call(r, t) && a(o, t, r[t]);
  return o;
}, m = (o, r) => l(o, S(r));
import n, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/SquareSplitHorizontal.mjs";
const q = c((o, r) => /* @__PURE__ */ n.createElement(R, m(i({ ref: r }, o), { weights: d })));
q.displayName = "SquareSplitHorizontal";
export {
  q as SquareSplitHorizontal
};
