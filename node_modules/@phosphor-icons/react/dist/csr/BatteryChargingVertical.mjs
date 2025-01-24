var c = Object.defineProperty, f = Object.defineProperties;
var g = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (t, r, e) => r in t ? c(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, i = (t, r) => {
  for (var e in r || (r = {}))
    n.call(r, e) && o(t, e, r[e]);
  if (a)
    for (var e of a(r))
      p.call(r, e) && o(t, e, r[e]);
  return t;
}, m = (t, r) => f(t, g(r));
import s, { forwardRef as l } from "react";
import h from "../lib/IconBase.mjs";
import y from "../defs/BatteryChargingVertical.mjs";
const B = l((t, r) => /* @__PURE__ */ s.createElement(h, m(i({ ref: r }, t), { weights: y })));
B.displayName = "BatteryChargingVertical";
export {
  B as BatteryChargingVertical
};
