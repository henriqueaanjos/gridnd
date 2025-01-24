var l = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, i = (e, t) => {
  for (var r in t || (t = {}))
    s.call(t, r) && o(e, r, t[r]);
  if (a)
    for (var r of a(t))
      c.call(t, r) && o(e, r, t[r]);
  return e;
}, m = (e, t) => f(e, p(t));
import R, { forwardRef as n } from "react";
import y from "../lib/IconBase.mjs";
import d from "../defs/VirtualReality.mjs";
const u = n((e, t) => /* @__PURE__ */ R.createElement(y, m(i({ ref: t }, e), { weights: d })));
u.displayName = "VirtualReality";
export {
  u as VirtualReality
};
