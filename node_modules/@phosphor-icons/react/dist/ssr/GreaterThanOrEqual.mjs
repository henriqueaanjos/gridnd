var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var o = (e, r, a) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, m = (e, r) => {
  for (var a in r || (r = {}))
    l.call(r, a) && o(e, a, r[a]);
  if (t)
    for (var a of t(r))
      n.call(r, a) && o(e, a, r[a]);
  return e;
}, f = (e, r) => p(e, s(r));
import c, { forwardRef as h } from "react";
import E from "../lib/SSRBase.mjs";
import R from "../defs/GreaterThanOrEqual.mjs";
const d = h((e, r) => /* @__PURE__ */ c.createElement(E, f(m({ ref: r }, e), { weights: R })));
d.displayName = "GreaterThanOrEqual";
export {
  d as GreaterThanOrEqual
};
