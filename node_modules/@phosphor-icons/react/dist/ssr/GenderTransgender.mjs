var s = Object.defineProperty, d = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    i.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      p.call(e, a) && t(r, a, e[a]);
  return r;
}, n = (r, e) => d(r, f(e));
import c, { forwardRef as g } from "react";
import R from "../lib/SSRBase.mjs";
import l from "../defs/GenderTransgender.mjs";
const w = g((r, e) => /* @__PURE__ */ c.createElement(R, n(m({ ref: e }, r), { weights: l })));
w.displayName = "GenderTransgender";
export {
  w as GenderTransgender
};
