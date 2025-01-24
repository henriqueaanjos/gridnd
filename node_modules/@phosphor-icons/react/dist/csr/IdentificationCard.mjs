var f = Object.defineProperty, n = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var a = (e, t, o) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, i = (e, t) => {
  for (var o in t || (t = {}))
    d.call(t, o) && a(e, o, t[o]);
  if (r)
    for (var o of r(t))
      p.call(t, o) && a(e, o, t[o]);
  return e;
}, m = (e, t) => n(e, c(t));
import s, { forwardRef as I } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/IdentificationCard.mjs";
const C = I((e, t) => /* @__PURE__ */ s.createElement(l, m(i({ ref: t }, e), { weights: w })));
C.displayName = "IdentificationCard";
export {
  C as IdentificationCard
};
