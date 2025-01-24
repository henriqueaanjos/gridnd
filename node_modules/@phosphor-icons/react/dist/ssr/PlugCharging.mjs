var i = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (e, r, a) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, m = (e, r) => {
  for (var a in r || (r = {}))
    s.call(r, a) && t(e, a, r[a]);
  if (o)
    for (var a of o(r))
      l.call(r, a) && t(e, a, r[a]);
  return e;
}, g = (e, r) => f(e, p(r));
import n, { forwardRef as c } from "react";
import h from "../lib/SSRBase.mjs";
import R from "../defs/PlugCharging.mjs";
const d = c((e, r) => /* @__PURE__ */ n.createElement(h, g(m({ ref: r }, e), { weights: R })));
d.displayName = "PlugCharging";
export {
  d as PlugCharging
};
