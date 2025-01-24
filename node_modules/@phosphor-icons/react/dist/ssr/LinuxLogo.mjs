var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    n.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      L.call(o, r) && m(e, r, o[r]);
  return e;
}, i = (e, o) => p(e, s(o));
import c, { forwardRef as g } from "react";
import x from "../lib/SSRBase.mjs";
import R from "../defs/LinuxLogo.mjs";
const d = g((e, o) => /* @__PURE__ */ c.createElement(x, i(a({ ref: o }, e), { weights: R })));
d.displayName = "LinuxLogo";
export {
  d as LinuxLogo
};
