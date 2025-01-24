var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (r, e, t) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && o(r, t, e[t]);
  if (a)
    for (var t of a(e))
      l.call(e, t) && o(r, t, e[t]);
  return r;
}, s = (r, e) => f(r, i(e));
import n, { forwardRef as g } from "react";
import B from "../lib/SSRBase.mjs";
import R from "../defs/BracketsAngle.mjs";
const d = g((r, e) => /* @__PURE__ */ n.createElement(B, s(m({ ref: e }, r), { weights: R })));
d.displayName = "BracketsAngle";
export {
  d as BracketsAngle
};
