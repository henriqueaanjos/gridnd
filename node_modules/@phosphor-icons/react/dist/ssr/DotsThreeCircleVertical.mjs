var c = Object.defineProperty, s = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, i = (r, e) => {
  for (var t in e || (e = {}))
    f.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      p.call(e, t) && a(r, t, e[t]);
  return r;
}, m = (r, e) => s(r, l(e));
import h, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/DotsThreeCircleVertical.mjs";
const w = R((r, e) => /* @__PURE__ */ h.createElement(d, m(i({ ref: e }, r), { weights: n })));
w.displayName = "DotsThreeCircleVertical";
export {
  w as DotsThreeCircleVertical
};
