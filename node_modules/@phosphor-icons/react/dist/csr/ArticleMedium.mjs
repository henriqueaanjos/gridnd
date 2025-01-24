var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var o = (r, e, t) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, i = (r, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && o(r, t, e[t]);
  if (m)
    for (var t of m(e))
      d.call(e, t) && o(r, t, e[t]);
  return r;
}, a = (r, e) => f(r, p(e));
import l, { forwardRef as n } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/ArticleMedium.mjs";
const A = n((r, e) => /* @__PURE__ */ l.createElement(u, a(i({ ref: e }, r), { weights: w })));
A.displayName = "ArticleMedium";
export {
  A as ArticleMedium
};
