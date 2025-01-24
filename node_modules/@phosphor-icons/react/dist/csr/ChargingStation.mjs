var n = Object.defineProperty, f = Object.defineProperties;
var g = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var e = (o, t, r) => t in o ? n(o, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[t] = r, i = (o, t) => {
  for (var r in t || (t = {}))
    p.call(t, r) && e(o, r, t[r]);
  if (a)
    for (var r of a(t))
      s.call(t, r) && e(o, r, t[r]);
  return o;
}, m = (o, t) => f(o, g(t));
import c, { forwardRef as h } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/ChargingStation.mjs";
const w = h((o, t) => /* @__PURE__ */ c.createElement(d, m(i({ ref: t }, o), { weights: l })));
w.displayName = "ChargingStation";
export {
  w as ChargingStation
};
