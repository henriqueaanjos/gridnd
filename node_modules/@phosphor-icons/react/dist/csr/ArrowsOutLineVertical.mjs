var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var a = (e, r, t) => r in e ? s(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, i = (e, r) => {
  for (var t in r || (r = {}))
    n.call(r, t) && a(e, t, r[t]);
  if (o)
    for (var t of o(r))
      p.call(r, t) && a(e, t, r[t]);
  return e;
}, m = (e, r) => c(e, f(r));
import l, { forwardRef as w } from "react";
import d from "../lib/IconBase.mjs";
import u from "../defs/ArrowsOutLineVertical.mjs";
const A = w((e, r) => /* @__PURE__ */ l.createElement(d, m(i({ ref: r }, e), { weights: u })));
A.displayName = "ArrowsOutLineVertical";
export {
  A as ArrowsOutLineVertical
};
