var p = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (t, o, r) => o in t ? p(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, i = (t, o) => {
  for (var r in o || (o = {}))
    n.call(o, r) && a(t, r, o[r]);
  if (e)
    for (var r of e(o))
      s.call(o, r) && a(t, r, o[r]);
  return t;
}, m = (t, o) => l(t, f(o));
import c, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import z from "../defs/SplitHorizontal.mjs";
const H = d((t, o) => /* @__PURE__ */ c.createElement(w, m(i({ ref: o }, t), { weights: z })));
H.displayName = "SplitHorizontal";
export {
  H as SplitHorizontal
};
