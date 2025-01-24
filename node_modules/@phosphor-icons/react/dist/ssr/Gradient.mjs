var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var o = (r, e, t) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    d.call(e, t) && o(r, t, e[t]);
  if (a)
    for (var t of a(e))
      n.call(e, t) && o(r, t, e[t]);
  return r;
}, i = (r, e) => p(r, s(e));
import c, { forwardRef as R } from "react";
import l from "../lib/SSRBase.mjs";
import w from "../defs/Gradient.mjs";
const G = R((r, e) => /* @__PURE__ */ c.createElement(l, i(m({ ref: e }, r), { weights: w })));
G.displayName = "Gradient";
export {
  G as Gradient
};
