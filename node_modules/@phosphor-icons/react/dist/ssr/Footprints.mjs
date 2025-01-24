var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (t, o, r) => o in t ? p(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, a = (t, o) => {
  for (var r in o || (o = {}))
    n.call(o, r) && m(t, r, o[r]);
  if (e)
    for (var r of e(o))
      c.call(o, r) && m(t, r, o[r]);
  return t;
}, i = (t, o) => s(t, f(o));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import w from "../defs/Footprints.mjs";
const F = d((t, o) => /* @__PURE__ */ R.createElement(l, i(a({ ref: o }, t), { weights: w })));
F.displayName = "Footprints";
export {
  F as Footprints
};
