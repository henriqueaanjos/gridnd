var i = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (e, t, o) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, s = (e, t) => {
  for (var o in t || (t = {}))
    p.call(t, o) && a(e, o, t[o]);
  if (r)
    for (var o of r(t))
      c.call(t, o) && a(e, o, t[o]);
  return e;
}, m = (e, t) => f(e, n(t));
import l, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import G from "../defs/PintGlass.mjs";
const I = d((e, t) => /* @__PURE__ */ l.createElement(w, m(s({ ref: t }, e), { weights: G })));
I.displayName = "PintGlass";
export {
  I as PintGlass
};
