var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    n.call(t, r) && o(e, r, t[r]);
  if (a)
    for (var r of a(t))
      c.call(t, r) && o(e, r, t[r]);
  return e;
}, s = (e, t) => i(e, p(t));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import w from "../defs/Pants.mjs";
const P = d((e, t) => /* @__PURE__ */ R.createElement(l, s(m({ ref: t }, e), { weights: w })));
P.displayName = "Pants";
export {
  P as Pants
};
