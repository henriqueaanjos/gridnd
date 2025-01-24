var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    s.call(t, r) && o(e, r, t[r]);
  if (a)
    for (var r of a(t))
      l.call(t, r) && o(e, r, t[r]);
  return e;
}, i = (e, t) => f(e, p(t));
import w, { forwardRef as y } from "react";
import B from "../lib/SSRBase.mjs";
import R from "../defs/BatteryVerticalLow.mjs";
const d = y((e, t) => /* @__PURE__ */ w.createElement(B, i(m({ ref: t }, e), { weights: R })));
d.displayName = "BatteryVerticalLow";
export {
  d as BatteryVerticalLow
};
