var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var e = (r, o, a) => o in r ? c(r, o, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[o] = a, m = (r, o) => {
  for (var a in o || (o = {}))
    n.call(o, a) && e(r, a, o[a]);
  if (t)
    for (var a of t(o))
      p.call(o, a) && e(r, a, o[a]);
  return r;
}, s = (r, o) => f(r, i(o));
import l, { forwardRef as w } from "react";
import E from "../lib/IconBase.mjs";
import d from "../defs/EscalatorDown.mjs";
const D = w((r, o) => /* @__PURE__ */ l.createElement(E, s(m({ ref: o }, r), { weights: d })));
D.displayName = "EscalatorDown";
export {
  D as EscalatorDown
};
