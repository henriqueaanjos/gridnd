var m = Object.defineProperty, p = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (r, e, a) => e in r ? m(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, n = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && i(r, a, e[a]);
  if (o)
    for (var a of o(e))
      c.call(e, a) && i(r, a, e[a]);
  return r;
}, t = (r, e) => p(r, f(e));
import d, { forwardRef as l } from "react";
import g from "../lib/IconBase.mjs";
import w from "../defs/AirplaneLanding.mjs";
const A = l((r, e) => /* @__PURE__ */ d.createElement(g, t(n({ ref: e }, r), { weights: w })));
A.displayName = "AirplaneLanding";
export {
  A as AirplaneLanding
};
