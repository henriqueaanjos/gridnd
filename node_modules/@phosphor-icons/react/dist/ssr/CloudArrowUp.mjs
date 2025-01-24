var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (o, r, e) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, a = (o, r) => {
  for (var e in r || (r = {}))
    d.call(r, e) && m(o, e, r[e]);
  if (t)
    for (var e of t(r))
      l.call(r, e) && m(o, e, r[e]);
  return o;
}, p = (o, r) => i(o, s(r));
import w, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import n from "../defs/CloudArrowUp.mjs";
const u = c((o, r) => /* @__PURE__ */ w.createElement(R, p(a({ ref: r }, o), { weights: n })));
u.displayName = "CloudArrowUp";
export {
  u as CloudArrowUp
};
