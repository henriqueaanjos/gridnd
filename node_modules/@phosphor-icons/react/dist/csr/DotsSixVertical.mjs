var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (e, t, o) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, i = (e, t) => {
  for (var o in t || (t = {}))
    p.call(t, o) && a(e, o, t[o]);
  if (r)
    for (var o of r(t))
      l.call(t, o) && a(e, o, t[o]);
  return e;
}, m = (e, t) => c(e, f(t));
import n, { forwardRef as x } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/DotsSixVertical.mjs";
const D = x((e, t) => /* @__PURE__ */ n.createElement(d, m(i({ ref: t }, e), { weights: w })));
D.displayName = "DotsSixVertical";
export {
  D as DotsSixVertical
};
