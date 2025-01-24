var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (o, r, e) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, m = (o, r) => {
  for (var e in r || (r = {}))
    d.call(r, e) && t(o, e, r[e]);
  if (a)
    for (var e of a(r))
      n.call(r, e) && t(o, e, r[e]);
  return o;
}, p = (o, r) => i(o, s(r));
import w, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import l from "../defs/HandArrowUp.mjs";
const A = c((o, r) => /* @__PURE__ */ w.createElement(R, p(m({ ref: r }, o), { weights: l })));
A.displayName = "HandArrowUp";
export {
  A as HandArrowUp
};
