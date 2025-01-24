var n = Object.defineProperty, f = Object.defineProperties;
var g = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var e = (r, t, a) => t in r ? n(r, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[t] = a, i = (r, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && e(r, a, t[a]);
  if (o)
    for (var a of o(t))
      s.call(t, a) && e(r, a, t[a]);
  return r;
}, m = (r, t) => f(r, g(t));
import S, { forwardRef as c } from "react";
import h from "../lib/SSRBase.mjs";
import R from "../defs/ChargingStation.mjs";
const d = c((r, t) => /* @__PURE__ */ S.createElement(h, m(i({ ref: t }, r), { weights: R })));
d.displayName = "ChargingStation";
export {
  d as ChargingStation
};
