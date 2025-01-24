var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (t, e, r) => e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, i = (t, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && m(t, r, e[r]);
  if (a)
    for (var r of a(e))
      d.call(e, r) && m(t, r, e[r]);
  return t;
}, o = (t, e) => f(t, p(e));
import l, { forwardRef as y } from "react";
import B from "../lib/SSRBase.mjs";
import R from "../defs/BatteryVerticalMedium.mjs";
const n = y((t, e) => /* @__PURE__ */ l.createElement(B, o(i({ ref: e }, t), { weights: R })));
n.displayName = "BatteryVerticalMedium";
export {
  n as BatteryVerticalMedium
};
