var s = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (r, o, t) => o in r ? s(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t, m = (r, o) => {
  for (var t in o || (o = {}))
    p.call(o, t) && a(r, t, o[t]);
  if (e)
    for (var t of e(o))
      c.call(o, t) && a(r, t, o[t]);
  return r;
}, i = (r, o) => f(r, n(o));
import l, { forwardRef as w } from "react";
import d from "../lib/IconBase.mjs";
import z from "../defs/ArrowsHorizontal.mjs";
const A = w((r, o) => /* @__PURE__ */ l.createElement(d, i(m({ ref: o }, r), { weights: z })));
A.displayName = "ArrowsHorizontal";
export {
  A as ArrowsHorizontal
};
