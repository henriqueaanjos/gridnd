var c = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (e, o, r) => o in e ? c(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    s.call(o, r) && a(e, r, o[r]);
  if (t)
    for (var r of t(o))
      l.call(o, r) && a(e, r, o[r]);
  return e;
}, f = (e, o) => i(e, p(o));
import w, { forwardRef as g } from "react";
import n from "../lib/IconBase.mjs";
import d from "../defs/StackOverflowLogo.mjs";
const k = g((e, o) => /* @__PURE__ */ w.createElement(n, f(m({ ref: o }, e), { weights: d })));
k.displayName = "StackOverflowLogo";
export {
  k as StackOverflowLogo
};
