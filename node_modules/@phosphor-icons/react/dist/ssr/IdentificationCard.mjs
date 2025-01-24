var f = Object.defineProperty, d = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (e, t, r) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, o = (e, t) => {
  for (var r in t || (t = {}))
    c.call(t, r) && i(e, r, t[r]);
  if (a)
    for (var r of a(t))
      p.call(t, r) && i(e, r, t[r]);
  return e;
}, m = (e, t) => d(e, n(t));
import s, { forwardRef as I } from "react";
import R from "../lib/SSRBase.mjs";
import l from "../defs/IdentificationCard.mjs";
const w = I((e, t) => /* @__PURE__ */ s.createElement(R, m(o({ ref: t }, e), { weights: l })));
w.displayName = "IdentificationCard";
export {
  w as IdentificationCard
};
