var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var o = (r, e, t) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && o(r, t, e[t]);
  if (a)
    for (var t of a(e))
      R.call(e, t) && o(r, t, e[t]);
  return r;
}, p = (r, e) => i(r, s(e));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/CaretUp.mjs";
const C = l((r, e) => /* @__PURE__ */ d.createElement(n, p(m({ ref: e }, r), { weights: w })));
C.displayName = "CaretUp";
export {
  C as CaretUp
};
