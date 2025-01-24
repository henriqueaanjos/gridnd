var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, r, e) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, a = (o, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && m(o, e, r[e]);
  if (t)
    for (var e of t(r))
      c.call(r, e) && m(o, e, r[e]);
  return o;
}, s = (o, r) => i(o, n(r));
import w, { forwardRef as I } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/ArrowsIn.mjs";
const A = I((o, r) => /* @__PURE__ */ w.createElement(d, s(a({ ref: r }, o), { weights: l })));
A.displayName = "ArrowsIn";
export {
  A as ArrowsIn
};
