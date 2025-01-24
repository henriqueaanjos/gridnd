var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    n.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      p.call(e, t) && a(r, t, e[t]);
  return r;
}, s = (r, e) => f(r, i(e));
import l, { forwardRef as g } from "react";
import B from "../lib/IconBase.mjs";
import d from "../defs/BracketsAngle.mjs";
const k = g((r, e) => /* @__PURE__ */ l.createElement(B, s(m({ ref: e }, r), { weights: d })));
k.displayName = "BracketsAngle";
export {
  k as BracketsAngle
};
