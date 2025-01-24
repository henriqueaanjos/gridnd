var p = Object.defineProperty, l = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var i = (r, e, t) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, o = (r, e) => {
  for (var t in e || (e = {}))
    f.call(e, t) && i(r, t, e[t]);
  if (a)
    for (var t of a(e))
      s.call(e, t) && i(r, t, e[t]);
  return r;
}, m = (r, e) => l(r, n(e));
import c, { forwardRef as g } from "react";
import h from "../lib/SSRBase.mjs";
import I from "../defs/AirplaneInFlight.mjs";
const R = g((r, e) => /* @__PURE__ */ c.createElement(h, m(o({ ref: e }, r), { weights: I })));
R.displayName = "AirplaneInFlight";
export {
  R as AirplaneInFlight
};
