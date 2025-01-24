var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var e = (a, r, o) => r in a ? s(a, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[r] = o, m = (a, r) => {
  for (var o in r || (r = {}))
    i.call(r, o) && e(a, o, r[o]);
  if (t)
    for (var o of t(r))
      l.call(r, o) && e(a, o, r[o]);
  return a;
}, p = (a, r) => c(a, f(r));
import E, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/EscalatorUp.mjs";
const w = R((a, r) => /* @__PURE__ */ E.createElement(d, p(m({ ref: r }, a), { weights: n })));
w.displayName = "EscalatorUp";
export {
  w as EscalatorUp
};
