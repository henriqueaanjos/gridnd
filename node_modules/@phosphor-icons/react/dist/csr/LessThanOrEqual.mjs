var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var s = (r, e, a) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, t = (r, e) => {
  for (var a in e || (e = {}))
    p.call(e, a) && s(r, a, e[a]);
  if (o)
    for (var a of o(e))
      c.call(e, a) && s(r, a, e[a]);
  return r;
}, m = (r, e) => i(r, n(e));
import l, { forwardRef as h } from "react";
import E from "../lib/IconBase.mjs";
import d from "../defs/LessThanOrEqual.mjs";
const q = h((r, e) => /* @__PURE__ */ l.createElement(E, m(t({ ref: e }, r), { weights: d })));
q.displayName = "LessThanOrEqual";
export {
  q as LessThanOrEqual
};
