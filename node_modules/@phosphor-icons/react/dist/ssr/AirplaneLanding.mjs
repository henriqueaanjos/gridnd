var n = Object.defineProperty, p = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? n(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, t = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && o(r, a, e[a]);
  if (i)
    for (var a of i(e))
      d.call(e, a) && o(r, a, e[a]);
  return r;
}, m = (r, e) => p(r, f(e));
import l, { forwardRef as c } from "react";
import g from "../lib/SSRBase.mjs";
import R from "../defs/AirplaneLanding.mjs";
const w = c((r, e) => /* @__PURE__ */ l.createElement(g, m(t({ ref: e }, r), { weights: R })));
w.displayName = "AirplaneLanding";
export {
  w as AirplaneLanding
};
