var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    p.call(e, a) && o(r, a, e[a]);
  if (t)
    for (var a of t(e))
      s.call(e, a) && o(r, a, e[a]);
  return r;
}, l = (r, e) => f(r, i(e));
import n, { forwardRef as N } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/NuclearPlant.mjs";
const u = N((r, e) => /* @__PURE__ */ n.createElement(R, l(m({ ref: e }, r), { weights: d })));
u.displayName = "NuclearPlant";
export {
  u as NuclearPlant
};
