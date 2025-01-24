var i = Object.defineProperty, f = Object.defineProperties;
var g = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var s = (o, r, e) => r in o ? i(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, t = (o, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && s(o, e, r[e]);
  if (a)
    for (var e of a(r))
      l.call(r, e) && s(o, e, r[e]);
  return o;
}, m = (o, r) => f(o, g(r));
import H, { forwardRef as c } from "react";
import h from "../lib/SSRBase.mjs";
import R from "../defs/HourglassHigh.mjs";
const d = c((o, r) => /* @__PURE__ */ H.createElement(h, m(t({ ref: r }, o), { weights: R })));
d.displayName = "HourglassHigh";
export {
  d as HourglassHigh
};
