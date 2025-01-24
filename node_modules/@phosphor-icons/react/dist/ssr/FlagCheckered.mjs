var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      d.call(e, a) && t(r, a, e[a]);
  return r;
}, c = (r, e) => i(r, p(e));
import l, { forwardRef as g } from "react";
import h from "../lib/SSRBase.mjs";
import R from "../defs/FlagCheckered.mjs";
const k = g((r, e) => /* @__PURE__ */ l.createElement(h, c(m({ ref: e }, r), { weights: R })));
k.displayName = "FlagCheckered";
export {
  k as FlagCheckered
};
