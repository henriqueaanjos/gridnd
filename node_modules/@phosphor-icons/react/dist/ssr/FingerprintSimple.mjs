var a = Object.defineProperty, n = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (r, e, i) => e in r ? a(r, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[e] = i, o = (r, e) => {
  for (var i in e || (e = {}))
    s.call(e, i) && m(r, i, e[i]);
  if (t)
    for (var i of t(e))
      l.call(e, i) && m(r, i, e[i]);
  return r;
}, p = (r, e) => n(r, f(e));
import S, { forwardRef as c } from "react";
import g from "../lib/SSRBase.mjs";
import R from "../defs/FingerprintSimple.mjs";
const d = c((r, e) => /* @__PURE__ */ S.createElement(g, p(o({ ref: e }, r), { weights: R })));
d.displayName = "FingerprintSimple";
export {
  d as FingerprintSimple
};
