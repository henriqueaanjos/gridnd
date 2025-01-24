var t = Object.defineProperty, p = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var a = (r, e, o) => e in r ? t(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, i = (r, e) => {
  for (var o in e || (e = {}))
    f.call(e, o) && a(r, o, e[o]);
  if (m)
    for (var o of m(e))
      g.call(e, o) && a(r, o, e[o]);
  return r;
}, s = (r, e) => p(r, l(e));
import H, { forwardRef as S } from "react";
import c from "../lib/SSRBase.mjs";
import h from "../defs/HourglassSimpleHigh.mjs";
const R = S((r, e) => /* @__PURE__ */ H.createElement(c, s(i({ ref: e }, r), { weights: h })));
R.displayName = "HourglassSimpleHigh";
export {
  R as HourglassSimpleHigh
};
