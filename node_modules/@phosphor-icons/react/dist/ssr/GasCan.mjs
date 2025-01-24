var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, a, r) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[a] = r, m = (e, a) => {
  for (var r in a || (a = {}))
    n.call(a, r) && t(e, r, a[r]);
  if (o)
    for (var r of o(a))
      c.call(a, r) && t(e, r, a[r]);
  return e;
}, s = (e, a) => i(e, p(a));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import w from "../defs/GasCan.mjs";
const C = d((e, a) => /* @__PURE__ */ R.createElement(l, s(m({ ref: a }, e), { weights: w })));
C.displayName = "GasCan";
export {
  C as GasCan
};
