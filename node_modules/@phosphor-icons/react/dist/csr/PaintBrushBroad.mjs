var s = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, B = Object.prototype.propertyIsEnumerable;
var e = (o, r, a) => r in o ? s(o, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : o[r] = a, m = (o, r) => {
  for (var a in r || (r = {}))
    p.call(r, a) && e(o, a, r[a]);
  if (t)
    for (var a of t(r))
      B.call(r, a) && e(o, a, r[a]);
  return o;
}, i = (o, r) => f(o, n(r));
import c, { forwardRef as d } from "react";
import h from "../lib/IconBase.mjs";
import l from "../defs/PaintBrushBroad.mjs";
const u = d((o, r) => /* @__PURE__ */ c.createElement(h, i(m({ ref: r }, o), { weights: l })));
u.displayName = "PaintBrushBroad";
export {
  u as PaintBrushBroad
};
