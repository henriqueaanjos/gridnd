var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (e, t, r) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, o = (e, t) => {
  for (var r in t || (t = {}))
    s.call(t, r) && i(e, r, t[r]);
  if (a)
    for (var r of a(t))
      l.call(t, r) && i(e, r, t[r]);
  return e;
}, m = (e, t) => f(e, p(t));
import g, { forwardRef as h } from "react";
import y from "../lib/SSRBase.mjs";
import B from "../defs/BatteryVerticalHigh.mjs";
const R = h((e, t) => /* @__PURE__ */ g.createElement(y, m(o({ ref: t }, e), { weights: B })));
R.displayName = "BatteryVerticalHigh";
export {
  R as BatteryVerticalHigh
};
