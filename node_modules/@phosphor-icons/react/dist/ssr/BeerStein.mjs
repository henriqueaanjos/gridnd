var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var m = (r, e, t) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, a = (r, e) => {
  for (var t in e || (e = {}))
    n.call(e, t) && m(r, t, e[t]);
  if (o)
    for (var t of o(e))
      S.call(e, t) && m(r, t, e[t]);
  return r;
}, i = (r, e) => p(r, s(e));
import c, { forwardRef as B } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/BeerStein.mjs";
const l = B((r, e) => /* @__PURE__ */ c.createElement(R, i(a({ ref: e }, r), { weights: d })));
l.displayName = "BeerStein";
export {
  l as BeerStein
};
