var n = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (o, r, e) => r in o ? n(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, i = (o, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && a(o, e, r[e]);
  if (t)
    for (var e of t(r))
      l.call(r, e) && a(o, e, r[e]);
  return o;
}, m = (o, r) => s(o, f(r));
import w, { forwardRef as c } from "react";
import I from "../lib/SSRBase.mjs";
import R from "../defs/ArrowsInLineHorizontal.mjs";
const d = c((o, r) => /* @__PURE__ */ w.createElement(I, m(i({ ref: r }, o), { weights: R })));
d.displayName = "ArrowsInLineHorizontal";
export {
  d as ArrowsInLineHorizontal
};
