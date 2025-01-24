var m = Object.defineProperty, f = Object.defineProperties;
var d = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (e, t, o) => t in e ? m(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, i = (e, t) => {
  for (var o in t || (t = {}))
    p.call(t, o) && a(e, o, t[o]);
  if (r)
    for (var o of r(t))
      s.call(t, o) && a(e, o, t[o]);
  return e;
}, n = (e, t) => f(e, d(t));
import c, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import D from "../defs/StandardDefinition.mjs";
const I = l((e, t) => /* @__PURE__ */ c.createElement(w, n(i({ ref: t }, e), { weights: D })));
I.displayName = "StandardDefinition";
export {
  I as StandardDefinition
};
