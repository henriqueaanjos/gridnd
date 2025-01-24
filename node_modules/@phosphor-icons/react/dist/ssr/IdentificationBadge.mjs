var f = Object.defineProperty, d = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (t, e, a) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[e] = a, r = (t, e) => {
  for (var a in e || (e = {}))
    c.call(e, a) && o(t, a, e[a]);
  if (i)
    for (var a of i(e))
      p.call(e, a) && o(t, a, e[a]);
  return t;
}, m = (t, e) => d(t, n(e));
import s, { forwardRef as g } from "react";
import B from "../lib/SSRBase.mjs";
import I from "../defs/IdentificationBadge.mjs";
const R = g((t, e) => /* @__PURE__ */ s.createElement(B, m(r({ ref: e }, t), { weights: I })));
R.displayName = "IdentificationBadge";
export {
  R as IdentificationBadge
};
