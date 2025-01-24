var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var B = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var e = (a, r, o) => r in a ? s(a, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[r] = o, m = (a, r) => {
  for (var o in r || (r = {}))
    B.call(r, o) && e(a, o, r[o]);
  if (t)
    for (var o of t(r))
      d.call(r, o) && e(a, o, r[o]);
  return a;
}, i = (a, r) => f(a, p(r));
import n, { forwardRef as c } from "react";
import h from "../lib/SSRBase.mjs";
import R from "../defs/PaintBrushBroad.mjs";
const l = c((a, r) => /* @__PURE__ */ n.createElement(h, i(m({ ref: r }, a), { weights: R })));
l.displayName = "PaintBrushBroad";
export {
  l as PaintBrushBroad
};
