var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    n.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      p.call(e, t) && a(r, t, e[t]);
  return r;
}, s = (r, e) => f(r, i(e));
import I, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import q from "../defs/IntersectSquare.mjs";
const u = d((r, e) => /* @__PURE__ */ I.createElement(l, s(m({ ref: e }, r), { weights: q })));
u.displayName = "IntersectSquare";
export {
  u as IntersectSquare
};
