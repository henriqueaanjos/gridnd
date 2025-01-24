var p = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, i = (r, e) => {
  for (var t in e || (e = {}))
    n.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      s.call(e, t) && a(r, t, e[t]);
  return r;
}, m = (r, e) => l(r, f(e));
import c, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import A from "../defs/AirplaneTilt.mjs";
const I = d((r, e) => /* @__PURE__ */ c.createElement(w, m(i({ ref: e }, r), { weights: A })));
I.displayName = "AirplaneTilt";
export {
  I as AirplaneTilt
};
