var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      l.call(e, t) && a(r, t, e[t]);
  return r;
}, i = (r, e) => c(r, f(e));
import h, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/DotsThreeVertical.mjs";
const D = n((r, e) => /* @__PURE__ */ h.createElement(d, i(m({ ref: e }, r), { weights: w })));
D.displayName = "DotsThreeVertical";
export {
  D as DotsThreeVertical
};
