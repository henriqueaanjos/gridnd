var n = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var r = (a, e, t) => e in a ? n(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t, o = (a, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && r(a, t, e[t]);
  if (m)
    for (var t of m(e))
      d.call(e, t) && r(a, t, e[t]);
  return a;
}, p = (a, e) => f(a, i(e));
import c, { forwardRef as R } from "react";
import l from "../lib/SSRBase.mjs";
import w from "../defs/LampPendant.mjs";
const L = R((a, e) => /* @__PURE__ */ c.createElement(l, p(o({ ref: e }, a), { weights: w })));
L.displayName = "LampPendant";
export {
  L as LampPendant
};
