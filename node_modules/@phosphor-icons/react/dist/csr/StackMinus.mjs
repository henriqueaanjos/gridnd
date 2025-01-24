var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var a = (e, t, o) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, m = (e, t) => {
  for (var o in t || (t = {}))
    n.call(t, o) && a(e, o, t[o]);
  if (r)
    for (var o of r(t))
      p.call(t, o) && a(e, o, t[o]);
  return e;
}, i = (e, t) => c(e, f(t));
import d, { forwardRef as k } from "react";
import l from "../lib/IconBase.mjs";
import u from "../defs/StackMinus.mjs";
const w = k((e, t) => /* @__PURE__ */ d.createElement(l, i(m({ ref: t }, e), { weights: u })));
w.displayName = "StackMinus";
export {
  w as StackMinus
};
