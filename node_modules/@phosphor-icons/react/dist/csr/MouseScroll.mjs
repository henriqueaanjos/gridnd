var c = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? c(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    i.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      p.call(o, r) && m(e, r, o[r]);
  return e;
}, s = (e, o) => l(e, f(o));
import n, { forwardRef as d } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/MouseScroll.mjs";
const I = d((e, o) => /* @__PURE__ */ n.createElement(u, s(a({ ref: o }, e), { weights: w })));
I.displayName = "MouseScroll";
export {
  I as MouseScroll
};
