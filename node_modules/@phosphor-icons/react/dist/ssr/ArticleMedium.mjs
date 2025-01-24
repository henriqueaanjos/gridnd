var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var i = (r, e, t) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, o = (r, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && i(r, t, e[t]);
  if (m)
    for (var t of m(e))
      d.call(e, t) && i(r, t, e[t]);
  return r;
}, a = (r, e) => f(r, p(e));
import l, { forwardRef as R } from "react";
import n from "../lib/SSRBase.mjs";
import u from "../defs/ArticleMedium.mjs";
const w = R((r, e) => /* @__PURE__ */ l.createElement(n, a(o({ ref: e }, r), { weights: u })));
w.displayName = "ArticleMedium";
export {
  w as ArticleMedium
};
