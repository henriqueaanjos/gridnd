var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    s.call(r, o) && t(e, o, r[o]);
  if (a)
    for (var o of a(r))
      c.call(r, o) && t(e, o, r[o]);
  return e;
}, d = (e, r) => i(e, p(r));
import l, { forwardRef as h } from "react";
import n from "../lib/IconBase.mjs";
import w from "../defs/Cardholder.mjs";
const C = h((e, r) => /* @__PURE__ */ l.createElement(n, d(m({ ref: r }, e), { weights: w })));
C.displayName = "Cardholder";
export {
  C as Cardholder
};
