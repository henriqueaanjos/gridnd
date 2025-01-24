var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (r, e, t) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    n.call(e, t) && o(r, t, e[t]);
  if (a)
    for (var t of a(e))
      c.call(e, t) && o(r, t, e[t]);
  return r;
}, i = (r, e) => f(r, s(e));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import w from "../defs/CaretLineUp.mjs";
const C = d((r, e) => /* @__PURE__ */ R.createElement(l, i(m({ ref: e }, r), { weights: w })));
C.displayName = "CaretLineUp";
export {
  C as CaretLineUp
};
