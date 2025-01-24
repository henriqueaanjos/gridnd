var f = Object.defineProperty, g = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      n.call(e, a) && t(r, a, e[a]);
  return r;
}, i = (r, e) => g(r, p(e));
import c, { forwardRef as y } from "react";
import B from "../lib/SSRBase.mjs";
import R from "../defs/PiggyBank.mjs";
const d = y((r, e) => /* @__PURE__ */ c.createElement(B, i(m({ ref: e }, r), { weights: R })));
d.displayName = "PiggyBank";
export {
  d as PiggyBank
};
