var n = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (e, a, r) => a in e ? n(e, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[a] = r, m = (e, a) => {
  for (var r in a || (a = {}))
    p.call(a, r) && t(e, r, a[r]);
  if (o)
    for (var r of o(a))
      s.call(a, r) && t(e, r, a[r]);
  return e;
}, l = (e, a) => f(e, i(a));
import d, { forwardRef as c } from "react";
import B from "../lib/SSRBase.mjs";
import R from "../defs/CalendarBlank.mjs";
const k = c((e, a) => /* @__PURE__ */ d.createElement(B, l(m({ ref: a }, e), { weights: R })));
k.displayName = "CalendarBlank";
export {
  k as CalendarBlank
};
