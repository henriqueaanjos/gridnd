var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, N = Object.prototype.propertyIsEnumerable;
var m = (e, t, r) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, a = (e, t) => {
  for (var r in t || (t = {}))
    c.call(t, r) && m(e, r, t[r]);
  if (o)
    for (var r of o(t))
      N.call(t, r) && m(e, r, t[r]);
  return e;
}, f = (e, t) => p(e, s(t));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Nut.mjs";
const u = d((e, t) => /* @__PURE__ */ R.createElement(l, f(a({ ref: t }, e), { weights: n })));
u.displayName = "Nut";
export {
  u as Nut
};
