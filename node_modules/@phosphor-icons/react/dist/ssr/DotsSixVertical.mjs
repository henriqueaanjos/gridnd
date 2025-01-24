var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (e, t, r) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, i = (e, t) => {
  for (var r in t || (t = {}))
    p.call(t, r) && a(e, r, t[r]);
  if (o)
    for (var r of o(t))
      l.call(t, r) && a(e, r, t[r]);
  return e;
}, m = (e, t) => c(e, f(t));
import S, { forwardRef as x } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/DotsSixVertical.mjs";
const n = x((e, t) => /* @__PURE__ */ S.createElement(R, m(i({ ref: t }, e), { weights: d })));
n.displayName = "DotsSixVertical";
export {
  n as DotsSixVertical
};
