var p = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (r, e, t) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, o = (r, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && i(r, t, e[t]);
  if (a)
    for (var t of a(e))
      n.call(e, t) && i(r, t, e[t]);
  return r;
}, m = (r, e) => l(r, f(e));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import w from "../defs/AirplaneTilt.mjs";
const A = R((r, e) => /* @__PURE__ */ c.createElement(d, m(o({ ref: e }, r), { weights: w })));
A.displayName = "AirplaneTilt";
export {
  A as AirplaneTilt
};
