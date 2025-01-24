var n = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (e, t, o) => t in e ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, r = (e, t) => {
  for (var o in t || (t = {}))
    i.call(t, o) && m(e, o, t[o]);
  if (a)
    for (var o of a(t))
      p.call(t, o) && m(e, o, t[o]);
  return e;
}, s = (e, t) => c(e, f(t));
import l, { forwardRef as y } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/ContactlessPayment.mjs";
const C = y((e, t) => /* @__PURE__ */ l.createElement(d, s(r({ ref: t }, e), { weights: w })));
C.displayName = "ContactlessPayment";
export {
  C as ContactlessPayment
};
