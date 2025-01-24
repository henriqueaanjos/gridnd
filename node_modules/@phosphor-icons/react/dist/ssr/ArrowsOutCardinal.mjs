var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var e = (a, r, o) => r in a ? s(a, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[r] = o, m = (a, r) => {
  for (var o in r || (r = {}))
    d.call(r, o) && e(a, o, r[o]);
  if (t)
    for (var o of t(r))
      l.call(r, o) && e(a, o, r[o]);
  return a;
}, i = (a, r) => f(a, p(r));
import n, { forwardRef as w } from "react";
import c from "../lib/SSRBase.mjs";
import R from "../defs/ArrowsOutCardinal.mjs";
const u = w((a, r) => /* @__PURE__ */ n.createElement(c, i(m({ ref: r }, a), { weights: R })));
u.displayName = "ArrowsOutCardinal";
export {
  u as ArrowsOutCardinal
};
