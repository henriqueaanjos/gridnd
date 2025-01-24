var s = Object.defineProperty, w = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (o, r, e) => r in o ? s(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, a = (o, r) => {
  for (var e in r || (r = {}))
    i.call(r, e) && m(o, e, r[e]);
  if (t)
    for (var e of t(r))
      n.call(r, e) && m(o, e, r[e]);
  return o;
}, p = (o, r) => w(o, f(r));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/ArrowsDownUp.mjs";
const A = R((o, r) => /* @__PURE__ */ c.createElement(d, p(a({ ref: r }, o), { weights: l })));
A.displayName = "ArrowsDownUp";
export {
  A as ArrowsDownUp
};
