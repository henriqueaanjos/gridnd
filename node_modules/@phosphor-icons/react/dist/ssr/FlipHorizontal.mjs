var p = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (r, o, t) => o in r ? p(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t, i = (r, o) => {
  for (var t in o || (o = {}))
    s.call(o, t) && a(r, t, o[t]);
  if (e)
    for (var t of e(o))
      n.call(o, t) && a(r, t, o[t]);
  return r;
}, m = (r, o) => l(r, f(o));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import w from "../defs/FlipHorizontal.mjs";
const z = R((r, o) => /* @__PURE__ */ c.createElement(d, m(i({ ref: o }, r), { weights: w })));
z.displayName = "FlipHorizontal";
export {
  z as FlipHorizontal
};
