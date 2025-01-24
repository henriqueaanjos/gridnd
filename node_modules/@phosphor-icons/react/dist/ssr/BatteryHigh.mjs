var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    c.call(t, r) && o(e, r, t[r]);
  if (a)
    for (var r of a(t))
      g.call(t, r) && o(e, r, t[r]);
  return e;
}, i = (e, t) => p(e, s(t));
import h, { forwardRef as y } from "react";
import B from "../lib/SSRBase.mjs";
import R from "../defs/BatteryHigh.mjs";
const d = y((e, t) => /* @__PURE__ */ h.createElement(B, i(m({ ref: t }, e), { weights: R })));
d.displayName = "BatteryHigh";
export {
  d as BatteryHigh
};
