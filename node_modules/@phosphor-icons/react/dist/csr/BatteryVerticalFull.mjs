var i = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, l = (e, t) => {
  for (var r in t || (t = {}))
    p.call(t, r) && o(e, r, t[r]);
  if (a)
    for (var r of a(t))
      s.call(t, r) && o(e, r, t[r]);
  return e;
}, m = (e, t) => c(e, f(t));
import n, { forwardRef as y } from "react";
import B from "../lib/IconBase.mjs";
import d from "../defs/BatteryVerticalFull.mjs";
const u = y((e, t) => /* @__PURE__ */ n.createElement(B, m(l({ ref: t }, e), { weights: d })));
u.displayName = "BatteryVerticalFull";
export {
  u as BatteryVerticalFull
};
