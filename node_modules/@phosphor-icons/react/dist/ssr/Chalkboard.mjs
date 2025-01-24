var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (a, r, o) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[r] = o, m = (a, r) => {
  for (var o in r || (r = {}))
    d.call(r, o) && t(a, o, r[o]);
  if (e)
    for (var o of e(r))
      l.call(r, o) && t(a, o, r[o]);
  return a;
}, f = (a, r) => p(a, s(r));
import c, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import b from "../defs/Chalkboard.mjs";
const k = h((a, r) => /* @__PURE__ */ c.createElement(R, f(m({ ref: r }, a), { weights: b })));
k.displayName = "Chalkboard";
export {
  k as Chalkboard
};
