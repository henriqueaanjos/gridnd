var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var e = (r, a, o) => a in r ? c(r, a, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[a] = o, m = (r, a) => {
  for (var o in a || (a = {}))
    s.call(a, o) && e(r, o, a[o]);
  if (t)
    for (var o of t(a))
      l.call(a, o) && e(r, o, a[o]);
  return r;
}, i = (r, a) => f(r, p(a));
import n, { forwardRef as x } from "react";
import E from "../lib/SSRBase.mjs";
import R from "../defs/ExclamationMark.mjs";
const d = x((r, a) => /* @__PURE__ */ n.createElement(E, i(m({ ref: a }, r), { weights: R })));
d.displayName = "ExclamationMark";
export {
  d as ExclamationMark
};
