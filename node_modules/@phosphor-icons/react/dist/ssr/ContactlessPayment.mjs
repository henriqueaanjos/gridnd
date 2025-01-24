var n = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (e, t, a) => t in e ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, r = (e, t) => {
  for (var a in t || (t = {}))
    i.call(t, a) && m(e, a, t[a]);
  if (o)
    for (var a of o(t))
      p.call(t, a) && m(e, a, t[a]);
  return e;
}, s = (e, t) => c(e, f(t));
import l, { forwardRef as y } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/ContactlessPayment.mjs";
const w = y((e, t) => /* @__PURE__ */ l.createElement(R, s(r({ ref: t }, e), { weights: d })));
w.displayName = "ContactlessPayment";
export {
  w as ContactlessPayment
};
