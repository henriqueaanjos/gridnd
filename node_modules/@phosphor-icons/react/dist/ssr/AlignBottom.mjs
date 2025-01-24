var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var r = (t, o, e) => o in t ? f(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, a = (t, o) => {
  for (var e in o || (o = {}))
    l.call(o, e) && r(t, e, o[e]);
  if (m)
    for (var e of m(o))
      n.call(o, e) && r(t, e, o[e]);
  return t;
}, i = (t, o) => p(t, s(o));
import c, { forwardRef as g } from "react";
import B from "../lib/SSRBase.mjs";
import R from "../defs/AlignBottom.mjs";
const d = g((t, o) => /* @__PURE__ */ c.createElement(B, i(a({ ref: o }, t), { weights: R })));
d.displayName = "AlignBottom";
export {
  d as AlignBottom
};
