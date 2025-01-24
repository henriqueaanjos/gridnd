var S = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (t, o, r) => o in t ? S(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, m = (t, o) => {
  for (var r in o || (o = {}))
    s.call(o, r) && a(t, r, o[r]);
  if (e)
    for (var r of e(o))
      n.call(o, r) && a(t, r, o[r]);
  return t;
}, i = (t, o) => f(t, p(o));
import c, { forwardRef as g } from "react";
import h from "../lib/SSRBase.mjs";
import R from "../defs/ShootingStar.mjs";
const d = g((t, o) => /* @__PURE__ */ c.createElement(h, i(m({ ref: o }, t), { weights: R })));
d.displayName = "ShootingStar";
export {
  d as ShootingStar
};
