var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (e, t, o) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, a = (e, t) => {
  for (var o in t || (t = {}))
    n.call(t, o) && m(e, o, t[o]);
  if (r)
    for (var o of r(t))
      c.call(t, o) && m(e, o, t[o]);
  return e;
}, f = (e, t) => p(e, s(t));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import w from "../defs/Confetti.mjs";
const C = d((e, t) => /* @__PURE__ */ R.createElement(l, f(a({ ref: t }, e), { weights: w })));
C.displayName = "Confetti";
export {
  C as Confetti
};
