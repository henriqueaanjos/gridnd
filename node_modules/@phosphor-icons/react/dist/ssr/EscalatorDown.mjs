var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var e = (r, o, a) => o in r ? c(r, o, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[o] = a, m = (r, o) => {
  for (var a in o || (o = {}))
    p.call(o, a) && e(r, a, o[a]);
  if (t)
    for (var a of t(o))
      l.call(o, a) && e(r, a, o[a]);
  return r;
}, s = (r, o) => f(r, i(o));
import n, { forwardRef as w } from "react";
import E from "../lib/SSRBase.mjs";
import R from "../defs/EscalatorDown.mjs";
const d = w((r, o) => /* @__PURE__ */ n.createElement(E, s(m({ ref: o }, r), { weights: R })));
d.displayName = "EscalatorDown";
export {
  d as EscalatorDown
};
