var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, m = (a, r) => {
  for (var e in r || (r = {}))
    s.call(r, e) && o(a, e, r[e]);
  if (t)
    for (var e of t(r))
      c.call(r, e) && o(a, e, r[e]);
  return a;
}, f = (a, r) => n(a, p(r));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/CalendarStar.mjs";
const I = l((a, r) => /* @__PURE__ */ d.createElement(w, f(m({ ref: r }, a), { weights: C })));
I.displayName = "CalendarStar";
export {
  I as CalendarStar
};
