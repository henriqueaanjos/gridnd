var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (o, r, t) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[r] = t, m = (o, r) => {
  for (var t in r || (r = {}))
    w.call(r, t) && a(o, t, r[t]);
  if (e)
    for (var t of e(r))
      c.call(r, t) && a(o, t, r[t]);
  return o;
}, p = (o, r) => i(o, s(r));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/ArrowFatUp.mjs";
const A = d((o, r) => /* @__PURE__ */ R.createElement(l, p(m({ ref: r }, o), { weights: n })));
A.displayName = "ArrowFatUp";
export {
  A as ArrowFatUp
};
