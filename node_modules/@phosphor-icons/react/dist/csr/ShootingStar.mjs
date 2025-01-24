var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (t, o, r) => o in t ? f(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, m = (t, o) => {
  for (var r in o || (o = {}))
    s.call(o, r) && a(t, r, o[r]);
  if (e)
    for (var r of e(o))
      c.call(o, r) && a(t, r, o[r]);
  return t;
}, i = (t, o) => n(t, p(o));
import S, { forwardRef as g } from "react";
import h from "../lib/IconBase.mjs";
import d from "../defs/ShootingStar.mjs";
const l = g((t, o) => /* @__PURE__ */ S.createElement(h, i(m({ ref: o }, t), { weights: d })));
l.displayName = "ShootingStar";
export {
  l as ShootingStar
};
