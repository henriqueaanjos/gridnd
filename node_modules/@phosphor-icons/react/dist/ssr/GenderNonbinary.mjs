var i = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      d.call(e, o) && t(r, o, e[o]);
  return r;
}, n = (r, e) => f(r, p(e));
import c, { forwardRef as y } from "react";
import N from "../lib/SSRBase.mjs";
import R from "../defs/GenderNonbinary.mjs";
const b = y((r, e) => /* @__PURE__ */ c.createElement(N, n(m({ ref: e }, r), { weights: R })));
b.displayName = "GenderNonbinary";
export {
  b as GenderNonbinary
};
