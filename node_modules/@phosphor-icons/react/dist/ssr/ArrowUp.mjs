var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, r, e) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, a = (o, r) => {
  for (var e in r || (r = {}))
    w.call(r, e) && m(o, e, r[e]);
  if (t)
    for (var e of t(r))
      c.call(r, e) && m(o, e, r[e]);
  return o;
}, p = (o, r) => i(o, s(r));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/ArrowUp.mjs";
const A = d((o, r) => /* @__PURE__ */ R.createElement(l, p(a({ ref: r }, o), { weights: n })));
A.displayName = "ArrowUp";
export {
  A as ArrowUp
};
