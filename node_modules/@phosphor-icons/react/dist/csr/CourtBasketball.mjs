var l = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (e, t, o) => t in e ? l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, m = (e, t) => {
  for (var o in t || (t = {}))
    p.call(t, o) && a(e, o, t[o]);
  if (r)
    for (var o of r(t))
      c.call(t, o) && a(e, o, t[o]);
  return e;
}, s = (e, t) => f(e, i(t));
import n, { forwardRef as B } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/CourtBasketball.mjs";
const k = B((e, t) => /* @__PURE__ */ n.createElement(b, s(m({ ref: t }, e), { weights: d })));
k.displayName = "CourtBasketball";
export {
  k as CourtBasketball
};
