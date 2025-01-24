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
}, w = (o, r) => i(o, p(r));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/ArrowDown.mjs";
const A = R((o, r) => /* @__PURE__ */ c.createElement(d, w(a({ ref: r }, o), { weights: l })));
A.displayName = "ArrowDown";
export {
  A as ArrowDown
};
