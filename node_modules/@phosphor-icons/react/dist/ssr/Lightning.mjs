var n = Object.defineProperty, f = Object.defineProperties;
var g = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    p.call(t, r) && o(e, r, t[r]);
  if (i)
    for (var r of i(t))
      s.call(t, r) && o(e, r, t[r]);
  return e;
}, a = (e, t) => f(e, g(t));
import c, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/Lightning.mjs";
const l = h((e, t) => /* @__PURE__ */ c.createElement(R, a(m({ ref: t }, e), { weights: d })));
l.displayName = "Lightning";
export {
  l as Lightning
};
