var f = Object.defineProperty, g = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    s.call(t, r) && o(e, r, t[r]);
  if (a)
    for (var r of a(t))
      n.call(t, r) && o(e, r, t[r]);
  return e;
}, i = (e, t) => g(e, p(t));
import S, { forwardRef as c } from "react";
import h from "../lib/SSRBase.mjs";
import R from "../defs/MagnetStraight.mjs";
const d = c((e, t) => /* @__PURE__ */ S.createElement(h, i(m({ ref: t }, e), { weights: R })));
d.displayName = "MagnetStraight";
export {
  d as MagnetStraight
};
