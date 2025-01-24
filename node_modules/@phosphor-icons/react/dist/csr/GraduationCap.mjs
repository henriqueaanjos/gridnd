var p = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var e = (o, a, r) => a in o ? p(o, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[a] = r, m = (o, a) => {
  for (var r in a || (a = {}))
    s.call(a, r) && e(o, r, a[r]);
  if (t)
    for (var r of t(a))
      c.call(a, r) && e(o, r, a[r]);
  return o;
}, i = (o, a) => f(o, n(a));
import d, { forwardRef as l } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/GraduationCap.mjs";
const C = l((o, a) => /* @__PURE__ */ d.createElement(u, i(m({ ref: a }, o), { weights: w })));
C.displayName = "GraduationCap";
export {
  C as GraduationCap
};
