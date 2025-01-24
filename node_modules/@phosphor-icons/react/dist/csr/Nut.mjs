var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (e, t, o) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, a = (e, t) => {
  for (var o in t || (t = {}))
    c.call(t, o) && m(e, o, t[o]);
  if (r)
    for (var o of r(t))
      n.call(t, o) && m(e, o, t[o]);
  return e;
}, f = (e, t) => p(e, s(t));
import N, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import u from "../defs/Nut.mjs";
const w = d((e, t) => /* @__PURE__ */ N.createElement(l, f(a({ ref: t }, e), { weights: u })));
w.displayName = "Nut";
export {
  w as Nut
};
