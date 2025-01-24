var s = Object.defineProperty, l = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    f.call(t, r) && o(e, r, t[r]);
  if (a)
    for (var r of a(t))
      p.call(t, r) && o(e, r, t[r]);
  return e;
}, i = (e, t) => l(e, c(t));
import y, { forwardRef as B } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/BatteryPlusVertical.mjs";
const n = B((e, t) => /* @__PURE__ */ y.createElement(R, i(m({ ref: t }, e), { weights: d })));
n.displayName = "BatteryPlusVertical";
export {
  n as BatteryPlusVertical
};
