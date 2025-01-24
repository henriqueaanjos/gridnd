var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var m = (o, r, t) => r in o ? p(o, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[r] = t, a = (o, r) => {
  for (var t in r || (r = {}))
    c.call(r, t) && m(o, t, r[t]);
  if (e)
    for (var t of e(r))
      w.call(r, t) && m(o, t, r[t]);
  return o;
}, i = (o, r) => f(o, s(r));
import R, { forwardRef as U } from "react";
import g from "../lib/IconBase.mjs";
import h from "../defs/ArrowURightUp.mjs";
const n = U((o, r) => /* @__PURE__ */ R.createElement(g, i(a({ ref: r }, o), { weights: h })));
n.displayName = "ArrowURightUp";
export {
  n as ArrowURightUp
};
