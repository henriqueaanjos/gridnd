var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var a = (e, t, r) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    c.call(t, r) && a(e, r, t[r]);
  if (o)
    for (var r of o(t))
      g.call(t, r) && a(e, r, t[r]);
  return e;
}, i = (e, t) => p(e, s(t));
import h, { forwardRef as n } from "react";
import y from "../lib/IconBase.mjs";
import B from "../defs/BatteryHigh.mjs";
const d = n((e, t) => /* @__PURE__ */ h.createElement(y, i(m({ ref: t }, e), { weights: B })));
d.displayName = "BatteryHigh";
export {
  d as BatteryHigh
};
