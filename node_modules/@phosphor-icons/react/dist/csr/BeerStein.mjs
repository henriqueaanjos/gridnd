var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, e, t) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, a = (r, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && m(r, t, e[t]);
  if (o)
    for (var t of o(e))
      c.call(e, t) && m(r, t, e[t]);
  return r;
}, i = (r, e) => n(r, p(e));
import B, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/BeerStein.mjs";
const I = d((r, e) => /* @__PURE__ */ B.createElement(l, i(a({ ref: e }, r), { weights: w })));
I.displayName = "BeerStein";
export {
  I as BeerStein
};
