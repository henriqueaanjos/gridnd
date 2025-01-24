var p = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, y = Object.prototype.propertyIsEnumerable;
var m = (e, t, r) => t in e ? p(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, o = (e, t) => {
  for (var r in t || (t = {}))
    s.call(t, r) && m(e, r, t[r]);
  if (a)
    for (var r of a(t))
      y.call(t, r) && m(e, r, t[r]);
  return e;
}, i = (e, t) => c(e, f(t));
import l, { forwardRef as B } from "react";
import E from "../lib/SSRBase.mjs";
import R from "../defs/BatteryVerticalEmpty.mjs";
const d = B((e, t) => /* @__PURE__ */ l.createElement(E, i(o({ ref: t }, e), { weights: R })));
d.displayName = "BatteryVerticalEmpty";
export {
  d as BatteryVerticalEmpty
};
