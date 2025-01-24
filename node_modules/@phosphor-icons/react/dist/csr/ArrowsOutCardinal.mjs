var s = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var e = (o, r, a) => r in o ? s(o, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : o[r] = a, m = (o, r) => {
  for (var a in r || (r = {}))
    p.call(r, a) && e(o, a, r[a]);
  if (t)
    for (var a of t(r))
      c.call(r, a) && e(o, a, r[a]);
  return o;
}, i = (o, r) => f(o, n(r));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import u from "../defs/ArrowsOutCardinal.mjs";
const A = l((o, r) => /* @__PURE__ */ d.createElement(w, i(m({ ref: r }, o), { weights: u })));
A.displayName = "ArrowsOutCardinal";
export {
  A as ArrowsOutCardinal
};
