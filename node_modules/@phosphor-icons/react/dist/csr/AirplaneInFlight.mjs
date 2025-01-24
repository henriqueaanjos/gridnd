var n = Object.defineProperty, p = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? n(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, i = (r, e) => {
  for (var t in e || (e = {}))
    f.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      s.call(e, t) && a(r, t, e[t]);
  return r;
}, m = (r, e) => p(r, l(e));
import c, { forwardRef as I } from "react";
import g from "../lib/IconBase.mjs";
import h from "../defs/AirplaneInFlight.mjs";
const d = I((r, e) => /* @__PURE__ */ c.createElement(g, m(i({ ref: e }, r), { weights: h })));
d.displayName = "AirplaneInFlight";
export {
  d as AirplaneInFlight
};
