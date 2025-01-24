var l = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? l(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    n.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      p.call(e, a) && t(r, a, e[a]);
  return r;
}, s = (r, e) => f(r, i(e));
import c, { forwardRef as d } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/CalendarPlus.mjs";
const C = d((r, e) => /* @__PURE__ */ c.createElement(u, s(m({ ref: e }, r), { weights: w })));
C.displayName = "CalendarPlus";
export {
  C as CalendarPlus
};
