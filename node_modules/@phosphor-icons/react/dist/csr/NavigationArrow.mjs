var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var e = (r, o, a) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[o] = a, i = (r, o) => {
  for (var a in o || (o = {}))
    s.call(o, a) && e(r, a, o[a]);
  if (t)
    for (var a of t(o))
      c.call(o, a) && e(r, a, o[a]);
  return r;
}, m = (r, o) => n(r, p(o));
import w, { forwardRef as g } from "react";
import N from "../lib/IconBase.mjs";
import d from "../defs/NavigationArrow.mjs";
const l = g((r, o) => /* @__PURE__ */ w.createElement(N, m(i({ ref: o }, r), { weights: d })));
l.displayName = "NavigationArrow";
export {
  l as NavigationArrow
};
