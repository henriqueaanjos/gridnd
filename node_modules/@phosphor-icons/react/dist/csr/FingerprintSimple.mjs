var a = Object.defineProperty, n = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, e, i) => e in r ? a(r, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[e] = i, o = (r, e) => {
  for (var i in e || (e = {}))
    s.call(e, i) && m(r, i, e[i]);
  if (t)
    for (var i of t(e))
      c.call(e, i) && m(r, i, e[i]);
  return r;
}, p = (r, e) => n(r, f(e));
import l, { forwardRef as g } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/FingerprintSimple.mjs";
const F = g((r, e) => /* @__PURE__ */ l.createElement(d, p(o({ ref: e }, r), { weights: w })));
F.displayName = "FingerprintSimple";
export {
  F as FingerprintSimple
};
