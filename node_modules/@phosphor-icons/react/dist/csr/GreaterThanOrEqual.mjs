var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (e, r, a) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, m = (e, r) => {
  for (var a in r || (r = {}))
    s.call(r, a) && o(e, a, r[a]);
  if (t)
    for (var a of t(r))
      c.call(r, a) && o(e, a, r[a]);
  return e;
}, f = (e, r) => n(e, p(r));
import l, { forwardRef as h } from "react";
import E from "../lib/IconBase.mjs";
import d from "../defs/GreaterThanOrEqual.mjs";
const q = h((e, r) => /* @__PURE__ */ l.createElement(E, f(m({ ref: r }, e), { weights: d })));
q.displayName = "GreaterThanOrEqual";
export {
  q as GreaterThanOrEqual
};
