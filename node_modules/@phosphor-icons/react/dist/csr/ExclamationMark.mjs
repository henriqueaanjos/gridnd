var c = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var e = (o, a, r) => a in o ? c(o, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[a] = r, m = (o, a) => {
  for (var r in a || (a = {}))
    p.call(a, r) && e(o, r, a[r]);
  if (t)
    for (var r of t(a))
      s.call(a, r) && e(o, r, a[r]);
  return o;
}, i = (o, a) => f(o, n(a));
import l, { forwardRef as x } from "react";
import E from "../lib/IconBase.mjs";
import d from "../defs/ExclamationMark.mjs";
const k = x((o, a) => /* @__PURE__ */ l.createElement(E, i(m({ ref: a }, o), { weights: d })));
k.displayName = "ExclamationMark";
export {
  k as ExclamationMark
};
