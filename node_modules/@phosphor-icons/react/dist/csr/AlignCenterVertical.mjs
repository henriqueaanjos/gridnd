var n = Object.defineProperty, c = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? n(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, i = (r, e) => {
  for (var t in e || (e = {}))
    f.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      p.call(e, t) && a(r, t, e[t]);
  return r;
}, m = (r, e) => c(r, l(e));
import s, { forwardRef as g } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/AlignCenterVertical.mjs";
const A = g((r, e) => /* @__PURE__ */ s.createElement(d, m(i({ ref: e }, r), { weights: w })));
A.displayName = "AlignCenterVertical";
export {
  A as AlignCenterVertical
};
