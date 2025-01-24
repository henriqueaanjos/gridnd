var s = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var a = (r, o, e) => o in r ? s(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, i = (r, o) => {
  for (var e in o || (o = {}))
    n.call(o, e) && a(r, e, o[e]);
  if (t)
    for (var e of t(o))
      p.call(o, e) && a(r, e, o[e]);
  return r;
}, m = (r, o) => l(r, f(o));
import c, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import z from "../defs/SlidersHorizontal.mjs";
const H = d((r, o) => /* @__PURE__ */ c.createElement(w, m(i({ ref: o }, r), { weights: z })));
H.displayName = "SlidersHorizontal";
export {
  H as SlidersHorizontal
};
