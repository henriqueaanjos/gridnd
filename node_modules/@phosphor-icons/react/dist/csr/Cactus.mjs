var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (e, t, o) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, m = (e, t) => {
  for (var o in t || (t = {}))
    p.call(t, o) && a(e, o, t[o]);
  if (r)
    for (var o of r(t))
      n.call(t, o) && a(e, o, t[o]);
  return e;
}, s = (e, t) => f(e, i(t));
import d, { forwardRef as l } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/Cactus.mjs";
const C = l((e, t) => /* @__PURE__ */ d.createElement(u, s(m({ ref: t }, e), { weights: w })));
C.displayName = "Cactus";
export {
  C as Cactus
};
