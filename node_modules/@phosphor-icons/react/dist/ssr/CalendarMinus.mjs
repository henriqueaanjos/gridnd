var s = Object.defineProperty, n = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    p.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      d.call(e, a) && t(r, a, e[a]);
  return r;
}, i = (r, e) => n(r, f(e));
import l, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import u from "../defs/CalendarMinus.mjs";
const w = c((r, e) => /* @__PURE__ */ l.createElement(R, i(m({ ref: e }, r), { weights: u })));
w.displayName = "CalendarMinus";
export {
  w as CalendarMinus
};
