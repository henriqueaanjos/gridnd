var n = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? n(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    s.call(o, r) && t(e, r, o[r]);
  if (i)
    for (var r of i(o))
      d.call(o, r) && t(e, r, o[r]);
  return e;
}, a = (e, o) => f(e, p(o));
import L, { forwardRef as c } from "react";
import g from "../lib/SSRBase.mjs";
import R from "../defs/LinkedinLogo.mjs";
const k = c((e, o) => /* @__PURE__ */ L.createElement(g, a(m({ ref: o }, e), { weights: R })));
k.displayName = "LinkedinLogo";
export {
  k as LinkedinLogo
};
