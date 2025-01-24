var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (e, t, r) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    c.call(t, r) && a(e, r, t[r]);
  if (o)
    for (var r of o(t))
      l.call(t, r) && a(e, r, t[r]);
  return e;
}, s = (e, t) => i(e, p(t));
import n, { forwardRef as y } from "react";
import B from "../lib/IconBase.mjs";
import d from "../defs/BatteryPlus.mjs";
const u = y((e, t) => /* @__PURE__ */ n.createElement(B, s(m({ ref: t }, e), { weights: d })));
u.displayName = "BatteryPlus";
export {
  u as BatteryPlus
};
