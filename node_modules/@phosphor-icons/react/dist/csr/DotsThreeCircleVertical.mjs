var m = Object.defineProperty, s = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? m(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, i = (r, e) => {
  for (var t in e || (e = {}))
    f.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      p.call(e, t) && a(r, t, e[t]);
  return r;
}, c = (r, e) => s(r, l(e));
import h, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/DotsThreeCircleVertical.mjs";
const C = n((r, e) => /* @__PURE__ */ h.createElement(d, c(i({ ref: e }, r), { weights: w })));
C.displayName = "DotsThreeCircleVertical";
export {
  C as DotsThreeCircleVertical
};
