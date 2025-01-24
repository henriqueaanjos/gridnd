var n = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var o = (e, r, a) => r in e ? n(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, t = (e, r) => {
  for (var a in r || (r = {}))
    p.call(r, a) && o(e, a, r[a]);
  if (i)
    for (var a of i(r))
      s.call(r, a) && o(e, a, r[a]);
  return e;
}, m = (e, r) => c(e, f(r));
import l, { forwardRef as g } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/WarningCircle.mjs";
const w = g((e, r) => /* @__PURE__ */ l.createElement(R, m(t({ ref: r }, e), { weights: d })));
w.displayName = "WarningCircle";
export {
  w as WarningCircle
};
