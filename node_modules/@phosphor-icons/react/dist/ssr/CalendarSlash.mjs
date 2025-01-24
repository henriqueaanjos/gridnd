var l = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (e, a, r) => a in e ? l(e, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[a] = r, m = (e, a) => {
  for (var r in a || (a = {}))
    p.call(a, r) && t(e, r, a[r]);
  if (o)
    for (var r of o(a))
      d.call(a, r) && t(e, r, a[r]);
  return e;
}, s = (e, a) => f(e, i(a));
import n, { forwardRef as S } from "react";
import c from "../lib/SSRBase.mjs";
import h from "../defs/CalendarSlash.mjs";
const R = S((e, a) => /* @__PURE__ */ n.createElement(c, s(m({ ref: a }, e), { weights: h })));
R.displayName = "CalendarSlash";
export {
  R as CalendarSlash
};
