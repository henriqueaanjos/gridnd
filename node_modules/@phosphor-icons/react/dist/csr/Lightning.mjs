var n = Object.defineProperty, f = Object.defineProperties;
var g = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var i = (e, t, o) => t in e ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, m = (e, t) => {
  for (var o in t || (t = {}))
    p.call(t, o) && i(e, o, t[o]);
  if (r)
    for (var o of r(t))
      s.call(t, o) && i(e, o, t[o]);
  return e;
}, a = (e, t) => f(e, g(t));
import c, { forwardRef as h } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/Lightning.mjs";
const w = h((e, t) => /* @__PURE__ */ c.createElement(d, a(m({ ref: t }, e), { weights: l })));
w.displayName = "Lightning";
export {
  w as Lightning
};
