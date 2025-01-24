var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (r, e, t) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, a = (r, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && m(r, t, e[t]);
  if (o)
    for (var t of o(e))
      n.call(e, t) && m(r, t, e[t]);
  return r;
}, c = (r, e) => i(r, p(e));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import w from "../defs/Percent.mjs";
const P = d((r, e) => /* @__PURE__ */ R.createElement(l, c(a({ ref: e }, r), { weights: w })));
P.displayName = "Percent";
export {
  P as Percent
};
