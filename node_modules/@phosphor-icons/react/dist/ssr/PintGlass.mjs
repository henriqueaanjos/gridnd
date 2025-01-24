var i = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, s = (e, t) => {
  for (var r in t || (t = {}))
    l.call(t, r) && o(e, r, t[r]);
  if (a)
    for (var r of a(t))
      n.call(t, r) && o(e, r, t[r]);
  return e;
}, m = (e, t) => f(e, p(t));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import w from "../defs/PintGlass.mjs";
const G = R((e, t) => /* @__PURE__ */ c.createElement(d, m(s({ ref: t }, e), { weights: w })));
G.displayName = "PintGlass";
export {
  G as PintGlass
};
