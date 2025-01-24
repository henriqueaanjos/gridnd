var n = Object.defineProperty, p = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? n(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, t = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && o(r, a, e[a]);
  if (i)
    for (var a of i(e))
      c.call(e, a) && o(r, a, e[a]);
  return r;
}, m = (r, e) => p(r, f(e));
import l, { forwardRef as g } from "react";
import x from "../lib/IconBase.mjs";
import d from "../defs/AirplaneTaxiing.mjs";
const w = g((r, e) => /* @__PURE__ */ l.createElement(x, m(t({ ref: e }, r), { weights: d })));
w.displayName = "AirplaneTaxiing";
export {
  w as AirplaneTaxiing
};
