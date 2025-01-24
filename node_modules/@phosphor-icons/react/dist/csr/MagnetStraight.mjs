var f = Object.defineProperty, g = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    p.call(t, r) && o(e, r, t[r]);
  if (a)
    for (var r of a(t))
      s.call(t, r) && o(e, r, t[r]);
  return e;
}, i = (e, t) => g(e, n(t));
import c, { forwardRef as h } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/MagnetStraight.mjs";
const w = h((e, t) => /* @__PURE__ */ c.createElement(d, i(m({ ref: t }, e), { weights: l })));
w.displayName = "MagnetStraight";
export {
  w as MagnetStraight
};
