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
import h, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/DotsThreeVertical.mjs";
const w = R((r, e) => /* @__PURE__ */ h.createElement(d, i(m({ ref: e }, r), { weights: n })));
w.displayName = "DotsThreeVertical";
export {
  w as DotsThreeVertical
};
