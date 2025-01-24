var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (r, e, a) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, o = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && m(r, a, e[a]);
  if (t)
    for (var a of t(e))
      n.call(e, a) && m(r, a, e[a]);
  return r;
}, i = (r, e) => f(r, p(e));
import y, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import u from "../defs/SecurityCamera.mjs";
const w = d((r, e) => /* @__PURE__ */ y.createElement(l, i(o({ ref: e }, r), { weights: u })));
w.displayName = "SecurityCamera";
export {
  w as SecurityCamera
};
