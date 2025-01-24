var p = Object.defineProperty, n = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, t = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && o(r, a, e[a]);
  if (i)
    for (var a of i(e))
      l.call(e, a) && o(r, a, e[a]);
  return r;
}, m = (r, e) => n(r, f(e));
import c, { forwardRef as g } from "react";
import x from "../lib/SSRBase.mjs";
import R from "../defs/AirplaneTaxiing.mjs";
const d = g((r, e) => /* @__PURE__ */ c.createElement(x, m(t({ ref: e }, r), { weights: R })));
d.displayName = "AirplaneTaxiing";
export {
  d as AirplaneTaxiing
};
