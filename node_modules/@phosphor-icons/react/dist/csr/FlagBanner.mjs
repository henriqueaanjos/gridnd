var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      c.call(e, a) && t(r, a, e[a]);
  return r;
}, n = (r, e) => i(r, p(e));
import l, { forwardRef as g } from "react";
import B from "../lib/IconBase.mjs";
import d from "../defs/FlagBanner.mjs";
const w = g((r, e) => /* @__PURE__ */ l.createElement(B, n(m({ ref: e }, r), { weights: d })));
w.displayName = "FlagBanner";
export {
  w as FlagBanner
};
