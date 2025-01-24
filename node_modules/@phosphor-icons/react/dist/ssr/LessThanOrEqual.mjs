var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var s = (r, e, a) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, t = (r, e) => {
  for (var a in e || (e = {}))
    l.call(e, a) && s(r, a, e[a]);
  if (o)
    for (var a of o(e))
      n.call(e, a) && s(r, a, e[a]);
  return r;
}, m = (r, e) => i(r, p(e));
import c, { forwardRef as h } from "react";
import E from "../lib/SSRBase.mjs";
import R from "../defs/LessThanOrEqual.mjs";
const d = h((r, e) => /* @__PURE__ */ c.createElement(E, m(t({ ref: e }, r), { weights: R })));
d.displayName = "LessThanOrEqual";
export {
  d as LessThanOrEqual
};
