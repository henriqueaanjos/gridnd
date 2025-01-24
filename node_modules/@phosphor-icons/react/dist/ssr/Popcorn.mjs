var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (r, o, e) => o in r ? c(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, a = (r, o) => {
  for (var e in o || (o = {}))
    s.call(o, e) && m(r, e, o[e]);
  if (t)
    for (var e of t(o))
      n.call(o, e) && m(r, e, o[e]);
  return r;
}, p = (r, o) => f(r, i(o));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import w from "../defs/Popcorn.mjs";
const P = d((r, o) => /* @__PURE__ */ R.createElement(l, p(a({ ref: o }, r), { weights: w })));
P.displayName = "Popcorn";
export {
  P as Popcorn
};
