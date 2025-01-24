var l = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var i = (e, t, r) => t in e ? l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, o = (e, t) => {
  for (var r in t || (t = {}))
    s.call(t, r) && i(e, r, t[r]);
  if (a)
    for (var r of a(t))
      R.call(t, r) && i(e, r, t[r]);
  return e;
}, m = (e, t) => f(e, p(t));
import c, { forwardRef as y } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/VirtualReality.mjs";
const u = y((e, t) => /* @__PURE__ */ c.createElement(d, m(o({ ref: t }, e), { weights: n })));
u.displayName = "VirtualReality";
export {
  u as VirtualReality
};
