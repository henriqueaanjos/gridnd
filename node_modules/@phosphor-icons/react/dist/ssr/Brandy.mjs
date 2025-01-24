var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (e, r, a) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, m = (e, r) => {
  for (var a in r || (r = {}))
    d.call(r, a) && t(e, a, r[a]);
  if (o)
    for (var a of o(r))
      n.call(r, a) && t(e, a, r[a]);
  return e;
}, f = (e, r) => p(e, s(r));
import c, { forwardRef as y } from "react";
import B from "../lib/SSRBase.mjs";
import R from "../defs/Brandy.mjs";
const l = y((e, r) => /* @__PURE__ */ c.createElement(B, f(m({ ref: r }, e), { weights: R })));
l.displayName = "Brandy";
export {
  l as Brandy
};
