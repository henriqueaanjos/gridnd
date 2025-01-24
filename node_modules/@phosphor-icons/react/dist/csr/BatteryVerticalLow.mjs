var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (e, t, r) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    s.call(t, r) && a(e, r, t[r]);
  if (o)
    for (var r of o(t))
      l.call(t, r) && a(e, r, t[r]);
  return e;
}, i = (e, t) => f(e, p(t));
import w, { forwardRef as n } from "react";
import y from "../lib/IconBase.mjs";
import B from "../defs/BatteryVerticalLow.mjs";
const d = n((e, t) => /* @__PURE__ */ w.createElement(y, i(m({ ref: t }, e), { weights: B })));
d.displayName = "BatteryVerticalLow";
export {
  d as BatteryVerticalLow
};
