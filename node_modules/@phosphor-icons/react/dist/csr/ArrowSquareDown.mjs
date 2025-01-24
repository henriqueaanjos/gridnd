var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (o, r, e) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, m = (o, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && t(o, e, r[e]);
  if (a)
    for (var e of a(r))
      s.call(r, e) && t(o, e, r[e]);
  return o;
}, w = (o, r) => i(o, n(r));
import c, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import q from "../defs/ArrowSquareDown.mjs";
const u = d((o, r) => /* @__PURE__ */ c.createElement(l, w(m({ ref: r }, o), { weights: q })));
u.displayName = "ArrowSquareDown";
export {
  u as ArrowSquareDown
};
