var n = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (e, a, r) => a in e ? n(e, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[a] = r, m = (e, a) => {
  for (var r in a || (a = {}))
    s.call(a, r) && t(e, r, a[r]);
  if (o)
    for (var r of o(a))
      d.call(a, r) && t(e, r, a[r]);
  return e;
}, i = (e, a) => f(e, p(a));
import c, { forwardRef as g } from "react";
import R from "../lib/SSRBase.mjs";
import l from "../defs/HandWaving.mjs";
const v = g((e, a) => /* @__PURE__ */ c.createElement(R, i(m({ ref: a }, e), { weights: l })));
v.displayName = "HandWaving";
export {
  v as HandWaving
};
