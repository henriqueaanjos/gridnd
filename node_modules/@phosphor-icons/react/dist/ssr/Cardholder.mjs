var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    s.call(r, o) && t(e, o, r[o]);
  if (a)
    for (var o of a(r))
      l.call(r, o) && t(e, o, r[o]);
  return e;
}, d = (e, r) => i(e, p(r));
import c, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import n from "../defs/Cardholder.mjs";
const w = h((e, r) => /* @__PURE__ */ c.createElement(R, d(m({ ref: r }, e), { weights: n })));
w.displayName = "Cardholder";
export {
  w as Cardholder
};
