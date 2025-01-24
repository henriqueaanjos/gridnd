var i = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    p.call(r, o) && t(e, o, r[o]);
  if (a)
    for (var o of a(r))
      s.call(r, o) && t(e, o, r[o]);
  return e;
}, g = (e, r) => f(e, n(r));
import c, { forwardRef as l } from "react";
import h from "../lib/IconBase.mjs";
import d from "../defs/PlugCharging.mjs";
const u = l((e, r) => /* @__PURE__ */ c.createElement(h, g(m({ ref: r }, e), { weights: d })));
u.displayName = "PlugCharging";
export {
  u as PlugCharging
};
