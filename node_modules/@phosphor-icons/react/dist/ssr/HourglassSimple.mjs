var i = Object.defineProperty, p = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var a = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, s = (r, e) => {
  for (var o in e || (e = {}))
    f.call(e, o) && a(r, o, e[o]);
  if (m)
    for (var o of m(e))
      S.call(e, o) && a(r, o, e[o]);
  return r;
}, t = (r, e) => p(r, l(e));
import c, { forwardRef as g } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/HourglassSimple.mjs";
const n = g((r, e) => /* @__PURE__ */ c.createElement(R, t(s({ ref: e }, r), { weights: d })));
n.displayName = "HourglassSimple";
export {
  n as HourglassSimple
};
