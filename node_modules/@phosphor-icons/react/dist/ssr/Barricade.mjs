var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (e, r, a) => r in e ? c(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, m = (e, r) => {
  for (var a in r || (r = {}))
    s.call(r, a) && t(e, a, r[a]);
  if (o)
    for (var a of o(r))
      d.call(r, a) && t(e, a, r[a]);
  return e;
}, i = (e, r) => f(e, p(r));
import B, { forwardRef as R } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Barricade.mjs";
const w = R((e, r) => /* @__PURE__ */ B.createElement(l, i(m({ ref: r }, e), { weights: n })));
w.displayName = "Barricade";
export {
  w as Barricade
};
