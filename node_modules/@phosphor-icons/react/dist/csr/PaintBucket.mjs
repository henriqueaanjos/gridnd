var c = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (e, t, o) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, m = (e, t) => {
  for (var o in t || (t = {}))
    p.call(t, o) && a(e, o, t[o]);
  if (r)
    for (var o of r(t))
      s.call(t, o) && a(e, o, t[o]);
  return e;
}, i = (e, t) => f(e, n(t));
import B, { forwardRef as d } from "react";
import k from "../lib/IconBase.mjs";
import l from "../defs/PaintBucket.mjs";
const u = d((e, t) => /* @__PURE__ */ B.createElement(k, i(m({ ref: t }, e), { weights: l })));
u.displayName = "PaintBucket";
export {
  u as PaintBucket
};
