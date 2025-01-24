var l = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? l(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    p.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      d.call(e, a) && t(r, a, e[a]);
  return r;
}, s = (r, e) => f(r, i(e));
import n, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import u from "../defs/CalendarPlus.mjs";
const w = c((r, e) => /* @__PURE__ */ n.createElement(R, s(m({ ref: e }, r), { weights: u })));
w.displayName = "CalendarPlus";
export {
  w as CalendarPlus
};
