var s = Object.defineProperty, c = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    f.call(t, r) && o(e, r, t[r]);
  if (a)
    for (var r of a(t))
      p.call(t, r) && o(e, r, t[r]);
  return e;
}, i = (e, t) => c(e, l(t));
import n, { forwardRef as y } from "react";
import B from "../lib/IconBase.mjs";
import d from "../defs/BatteryPlusVertical.mjs";
const u = y((e, t) => /* @__PURE__ */ n.createElement(B, i(m({ ref: t }, e), { weights: d })));
u.displayName = "BatteryPlusVertical";
export {
  u as BatteryPlusVertical
};
