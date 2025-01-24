var n = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var a = (t, o, e) => o in t ? n(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, i = (t, o) => {
  for (var e in o || (o = {}))
    s.call(o, e) && a(t, e, o[e]);
  if (r)
    for (var e of r(o))
      d.call(o, e) && a(t, e, o[e]);
  return t;
}, m = (t, o) => f(t, p(o));
import c, { forwardRef as g } from "react";
import R from "../lib/SSRBase.mjs";
import l from "../defs/HandPointing.mjs";
const w = g((t, o) => /* @__PURE__ */ c.createElement(R, m(i({ ref: o }, t), { weights: l })));
w.displayName = "HandPointing";
export {
  w as HandPointing
};
