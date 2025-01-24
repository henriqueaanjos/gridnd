var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      l.call(e, a) && t(r, a, e[a]);
  return r;
}, n = (r, e) => i(r, p(e));
import c, { forwardRef as g } from "react";
import B from "../lib/SSRBase.mjs";
import R from "../defs/FlagBanner.mjs";
const d = g((r, e) => /* @__PURE__ */ c.createElement(B, n(m({ ref: e }, r), { weights: R })));
d.displayName = "FlagBanner";
export {
  d as FlagBanner
};
