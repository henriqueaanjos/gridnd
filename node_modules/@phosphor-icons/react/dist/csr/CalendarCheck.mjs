var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    p.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      s.call(e, a) && t(r, a, e[a]);
  return r;
}, c = (r, e) => i(r, n(e));
import d, { forwardRef as l } from "react";
import C from "../lib/IconBase.mjs";
import h from "../defs/CalendarCheck.mjs";
const k = l((r, e) => /* @__PURE__ */ d.createElement(C, c(m({ ref: e }, r), { weights: h })));
k.displayName = "CalendarCheck";
export {
  k as CalendarCheck
};
