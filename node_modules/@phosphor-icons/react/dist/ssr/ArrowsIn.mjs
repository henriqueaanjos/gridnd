var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var m = (o, r, e) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, a = (o, r) => {
  for (var e in r || (r = {}))
    n.call(r, e) && m(o, e, r[e]);
  if (t)
    for (var e of t(r))
      w.call(r, e) && m(o, e, r[e]);
  return o;
}, s = (o, r) => i(o, p(r));
import c, { forwardRef as I } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/ArrowsIn.mjs";
const l = I((o, r) => /* @__PURE__ */ c.createElement(R, s(a({ ref: r }, o), { weights: d })));
l.displayName = "ArrowsIn";
export {
  l as ArrowsIn
};
