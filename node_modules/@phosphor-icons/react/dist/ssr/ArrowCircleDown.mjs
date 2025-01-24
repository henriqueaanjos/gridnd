var w = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (o, r, e) => r in o ? w(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, a = (o, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && m(o, e, r[e]);
  if (t)
    for (var e of t(r))
      s.call(r, e) && m(o, e, r[e]);
  return o;
}, i = (o, r) => c(o, f(r));
import l, { forwardRef as n } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/ArrowCircleDown.mjs";
const A = n((o, r) => /* @__PURE__ */ l.createElement(R, i(a({ ref: r }, o), { weights: d })));
A.displayName = "ArrowCircleDown";
export {
  A as ArrowCircleDown
};
