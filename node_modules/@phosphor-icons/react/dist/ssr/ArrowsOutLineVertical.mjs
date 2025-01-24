var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (e, r, t) => r in e ? s(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, i = (e, r) => {
  for (var t in r || (r = {}))
    p.call(r, t) && a(e, t, r[t]);
  if (o)
    for (var t of o(r))
      l.call(r, t) && a(e, t, r[t]);
  return e;
}, m = (e, r) => c(e, f(r));
import n, { forwardRef as w } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/ArrowsOutLineVertical.mjs";
const u = w((e, r) => /* @__PURE__ */ n.createElement(R, m(i({ ref: r }, e), { weights: d })));
u.displayName = "ArrowsOutLineVertical";
export {
  u as ArrowsOutLineVertical
};
