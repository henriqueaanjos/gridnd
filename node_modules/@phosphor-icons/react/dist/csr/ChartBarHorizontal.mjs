var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var e = (o, r, a) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : o[r] = a, m = (o, r) => {
  for (var a in r || (r = {}))
    s.call(r, a) && e(o, a, r[a]);
  if (t)
    for (var a of t(r))
      c.call(r, a) && e(o, a, r[a]);
  return o;
}, i = (o, r) => n(o, p(r));
import l, { forwardRef as h } from "react";
import B from "../lib/IconBase.mjs";
import d from "../defs/ChartBarHorizontal.mjs";
const w = h((o, r) => /* @__PURE__ */ l.createElement(B, i(m({ ref: r }, o), { weights: d })));
w.displayName = "ChartBarHorizontal";
export {
  w as ChartBarHorizontal
};
