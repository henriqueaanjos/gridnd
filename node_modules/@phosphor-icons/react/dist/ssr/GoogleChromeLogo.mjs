var g = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? g(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    s.call(o, r) && t(e, r, o[r]);
  if (m)
    for (var r of m(o))
      l.call(o, r) && t(e, r, o[r]);
  return e;
}, f = (e, o) => i(e, p(o));
import c, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/GoogleChromeLogo.mjs";
const n = h((e, o) => /* @__PURE__ */ c.createElement(R, f(a({ ref: o }, e), { weights: d })));
n.displayName = "GoogleChromeLogo";
export {
  n as GoogleChromeLogo
};
