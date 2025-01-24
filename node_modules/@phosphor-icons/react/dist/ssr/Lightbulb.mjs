var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var b = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (e, t, r) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, a = (e, t) => {
  for (var r in t || (t = {}))
    b.call(t, r) && m(e, r, t[r]);
  if (o)
    for (var r of o(t))
      l.call(t, r) && m(e, r, t[r]);
  return e;
}, i = (e, t) => p(e, s(t));
import c, { forwardRef as g } from "react";
import h from "../lib/SSRBase.mjs";
import R from "../defs/Lightbulb.mjs";
const d = g((e, t) => /* @__PURE__ */ c.createElement(h, i(a({ ref: t }, e), { weights: R })));
d.displayName = "Lightbulb";
export {
  d as Lightbulb
};
