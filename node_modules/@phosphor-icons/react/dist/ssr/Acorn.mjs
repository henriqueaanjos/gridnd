var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (o, r, e) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, a = (o, r) => {
  for (var e in r || (r = {}))
    s.call(r, e) && m(o, e, r[e]);
  if (t)
    for (var e of t(r))
      n.call(r, e) && m(o, e, r[e]);
  return o;
}, c = (o, r) => i(o, p(r));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import w from "../defs/Acorn.mjs";
const A = d((o, r) => /* @__PURE__ */ R.createElement(l, c(a({ ref: r }, o), { weights: w })));
A.displayName = "Acorn";
export {
  A as Acorn
};
