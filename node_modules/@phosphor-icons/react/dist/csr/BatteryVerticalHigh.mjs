var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, i = (e, t) => {
  for (var r in t || (t = {}))
    s.call(t, r) && o(e, r, t[r]);
  if (a)
    for (var r of a(t))
      l.call(t, r) && o(e, r, t[r]);
  return e;
}, m = (e, t) => f(e, p(t));
import g, { forwardRef as h } from "react";
import n from "../lib/IconBase.mjs";
import y from "../defs/BatteryVerticalHigh.mjs";
const B = h((e, t) => /* @__PURE__ */ g.createElement(n, m(i({ ref: t }, e), { weights: y })));
B.displayName = "BatteryVerticalHigh";
export {
  B as BatteryVerticalHigh
};
