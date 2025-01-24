var n = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (r, o, t) => o in r ? n(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t, i = (r, o) => {
  for (var t in o || (o = {}))
    p.call(o, t) && a(r, t, o[t]);
  if (e)
    for (var t of e(o))
      c.call(o, t) && a(r, t, o[t]);
  return r;
}, m = (r, o) => s(r, f(o));
import l, { forwardRef as w } from "react";
import d from "../lib/IconBase.mjs";
import u from "../defs/ArrowsOutLineHorizontal.mjs";
const z = w((r, o) => /* @__PURE__ */ l.createElement(d, m(i({ ref: o }, r), { weights: u })));
z.displayName = "ArrowsOutLineHorizontal";
export {
  z as ArrowsOutLineHorizontal
};
