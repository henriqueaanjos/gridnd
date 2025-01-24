var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    d.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      n.call(e, a) && t(r, a, e[a]);
  return r;
}, f = (r, e) => p(r, s(e));
import c, { forwardRef as R } from "react";
import l from "../lib/SSRBase.mjs";
import w from "../defs/Hand.mjs";
const H = R((r, e) => /* @__PURE__ */ c.createElement(l, f(m({ ref: e }, r), { weights: w })));
H.displayName = "Hand";
export {
  H as Hand
};
