var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (e, t, o) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, m = (e, t) => {
  for (var o in t || (t = {}))
    p.call(t, o) && a(e, o, t[o]);
  if (r)
    for (var o of r(t))
      l.call(t, o) && a(e, o, t[o]);
  return e;
}, s = (e, t) => f(e, i(t));
import n, { forwardRef as d } from "react";
import k from "../lib/IconBase.mjs";
import u from "../defs/StackPlus.mjs";
const w = d((e, t) => /* @__PURE__ */ n.createElement(k, s(m({ ref: t }, e), { weights: u })));
w.displayName = "StackPlus";
export {
  w as StackPlus
};
