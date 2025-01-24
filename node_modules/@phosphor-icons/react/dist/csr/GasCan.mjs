var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, a, o) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[a] = o, m = (e, a) => {
  for (var o in a || (a = {}))
    p.call(a, o) && t(e, o, a[o]);
  if (r)
    for (var o of r(a))
      c.call(a, o) && t(e, o, a[o]);
  return e;
}, s = (e, a) => i(e, n(a));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/GasCan.mjs";
const G = l((e, a) => /* @__PURE__ */ d.createElement(w, s(m({ ref: a }, e), { weights: C })));
G.displayName = "GasCan";
export {
  G as GasCan
};
