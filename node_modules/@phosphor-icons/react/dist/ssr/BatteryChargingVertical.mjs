var c = Object.defineProperty, f = Object.defineProperties;
var g = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var i = (t, r, e) => r in t ? c(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, o = (t, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && i(t, e, r[e]);
  if (a)
    for (var e of a(r))
      s.call(r, e) && i(t, e, r[e]);
  return t;
}, m = (t, r) => f(t, g(r));
import l, { forwardRef as n } from "react";
import h from "../lib/SSRBase.mjs";
import y from "../defs/BatteryChargingVertical.mjs";
const B = n((t, r) => /* @__PURE__ */ l.createElement(h, m(o({ ref: r }, t), { weights: y })));
B.displayName = "BatteryChargingVertical";
export {
  B as BatteryChargingVertical
};
