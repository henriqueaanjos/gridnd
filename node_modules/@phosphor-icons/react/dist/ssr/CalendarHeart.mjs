var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    d.call(e, a) && o(r, a, e[a]);
  if (t)
    for (var a of t(e))
      l.call(e, a) && o(r, a, e[a]);
  return r;
}, f = (r, e) => p(r, s(e));
import n, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import w from "../defs/CalendarHeart.mjs";
const C = c((r, e) => /* @__PURE__ */ n.createElement(R, f(m({ ref: e }, r), { weights: w })));
C.displayName = "CalendarHeart";
export {
  C as CalendarHeart
};
