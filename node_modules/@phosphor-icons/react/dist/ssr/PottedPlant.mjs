var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (e, t, o) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, m = (e, t) => {
  for (var o in t || (t = {}))
    d.call(t, o) && a(e, o, t[o]);
  if (r)
    for (var o of r(t))
      l.call(t, o) && a(e, o, t[o]);
  return e;
}, f = (e, t) => p(e, s(t));
import n, { forwardRef as P } from "react";
import c from "../lib/SSRBase.mjs";
import R from "../defs/PottedPlant.mjs";
const w = P((e, t) => /* @__PURE__ */ n.createElement(c, f(m({ ref: t }, e), { weights: R })));
w.displayName = "PottedPlant";
export {
  w as PottedPlant
};
