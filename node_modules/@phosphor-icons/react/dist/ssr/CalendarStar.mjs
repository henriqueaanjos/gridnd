var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, m = (a, r) => {
  for (var e in r || (r = {}))
    d.call(r, e) && o(a, e, r[e]);
  if (t)
    for (var e of t(r))
      l.call(r, e) && o(a, e, r[e]);
  return a;
}, f = (a, r) => p(a, s(r));
import n, { forwardRef as S } from "react";
import c from "../lib/SSRBase.mjs";
import R from "../defs/CalendarStar.mjs";
const w = S((a, r) => /* @__PURE__ */ n.createElement(c, f(m({ ref: r }, a), { weights: R })));
w.displayName = "CalendarStar";
export {
  w as CalendarStar
};
