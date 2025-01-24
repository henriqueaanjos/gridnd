var n = Object.defineProperty, w = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (o, r, e) => r in o ? n(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, a = (o, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && m(o, e, r[e]);
  if (t)
    for (var e of t(r))
      s.call(r, e) && m(o, e, r[e]);
  return o;
}, i = (o, r) => w(o, f(r));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/ArrowLineDown.mjs";
const A = R((o, r) => /* @__PURE__ */ c.createElement(d, i(a({ ref: r }, o), { weights: l })));
A.displayName = "ArrowLineDown";
export {
  A as ArrowLineDown
};
