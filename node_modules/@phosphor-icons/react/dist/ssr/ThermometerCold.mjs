var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    d.call(e, o) && t(r, o, e[o]);
  if (m)
    for (var o of m(e))
      l.call(e, o) && t(r, o, e[o]);
  return r;
}, f = (r, e) => p(r, s(e));
import c, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import n from "../defs/ThermometerCold.mjs";
const w = h((r, e) => /* @__PURE__ */ c.createElement(R, f(a({ ref: e }, r), { weights: n })));
w.displayName = "ThermometerCold";
export {
  w as ThermometerCold
};
