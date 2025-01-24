var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var t = (e, r, a) => r in e ? p(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, m = (e, r) => {
  for (var a in r || (r = {}))
    c.call(r, a) && t(e, a, r[a]);
  if (o)
    for (var a of o(r))
      R.call(r, a) && t(e, a, r[a]);
  return e;
}, i = (e, r) => f(e, s(r));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/TipJar.mjs";
const J = l((e, r) => /* @__PURE__ */ d.createElement(n, i(m({ ref: r }, e), { weights: w })));
J.displayName = "TipJar";
export {
  J as TipJar
};
