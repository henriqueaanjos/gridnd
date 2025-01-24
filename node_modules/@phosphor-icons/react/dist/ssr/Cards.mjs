var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, r, a) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, m = (e, r) => {
  for (var a in r || (r = {}))
    d.call(r, a) && t(e, a, r[a]);
  if (o)
    for (var a of o(r))
      c.call(r, a) && t(e, a, r[a]);
  return e;
}, s = (e, r) => i(e, p(r));
import R, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/Cards.mjs";
const C = l((e, r) => /* @__PURE__ */ R.createElement(n, s(m({ ref: r }, e), { weights: w })));
C.displayName = "Cards";
export {
  C as Cards
};
