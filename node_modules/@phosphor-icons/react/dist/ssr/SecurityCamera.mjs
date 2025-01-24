var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var m = (r, e, a) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, o = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && m(r, a, e[a]);
  if (t)
    for (var a of t(e))
      S.call(e, a) && m(r, a, e[a]);
  return r;
}, i = (r, e) => f(r, p(e));
import y, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/SecurityCamera.mjs";
const n = R((r, e) => /* @__PURE__ */ y.createElement(d, i(o({ ref: e }, r), { weights: l })));
n.displayName = "SecurityCamera";
export {
  n as SecurityCamera
};
