var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (e, t, o) => t in e ? p(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, m = (e, t) => {
  for (var o in t || (t = {}))
    n.call(t, o) && a(e, o, t[o]);
  if (r)
    for (var o of r(t))
      c.call(t, o) && a(e, o, t[o]);
  return e;
}, i = (e, t) => s(e, f(t));
import h, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/MathOperations.mjs";
const I = d((e, t) => /* @__PURE__ */ h.createElement(l, i(m({ ref: t }, e), { weights: w })));
I.displayName = "MathOperations";
export {
  I as MathOperations
};
