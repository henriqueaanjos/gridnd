var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (e, t, r) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    n.call(t, r) && i(e, r, t[r]);
  if (o)
    for (var r of o(t))
      c.call(t, r) && i(e, r, t[r]);
  return e;
}, a = (e, t) => f(e, p(t));
import h, { forwardRef as I } from "react";
import R from "../lib/SSRBase.mjs";
import b from "../defs/ProhibitInset.mjs";
const d = I((e, t) => /* @__PURE__ */ h.createElement(R, a(m({ ref: t }, e), { weights: b })));
d.displayName = "ProhibitInset";
export {
  d as ProhibitInset
};
