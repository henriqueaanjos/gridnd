var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (a, e, o) => e in a ? c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[e] = o, m = (a, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && t(a, o, e[o]);
  if (r)
    for (var o of r(e))
      n.call(e, o) && t(a, o, e[o]);
  return a;
}, s = (a, e) => f(a, i(e));
import d, { forwardRef as k } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/FaceMask.mjs";
const F = k((a, e) => /* @__PURE__ */ d.createElement(l, s(m({ ref: e }, a), { weights: w })));
F.displayName = "FaceMask";
export {
  F as FaceMask
};
