var s = Object.defineProperty, n = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (o, r, t) => r in o ? s(o, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[r] = t, i = (o, r) => {
  for (var t in r || (r = {}))
    p.call(r, t) && a(o, t, r[t]);
  if (e)
    for (var t of e(r))
      l.call(r, t) && a(o, t, r[t]);
  return o;
}, m = (o, r) => n(o, f(r));
import w, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/ArrowsOutLineHorizontal.mjs";
const u = c((o, r) => /* @__PURE__ */ w.createElement(R, m(i({ ref: r }, o), { weights: d })));
u.displayName = "ArrowsOutLineHorizontal";
export {
  u as ArrowsOutLineHorizontal
};
