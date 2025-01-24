var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var m = (e, o, t) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, a = (e, o) => {
  for (var t in o || (o = {}))
    s.call(o, t) && m(e, t, o[t]);
  if (r)
    for (var t of r(o))
      S.call(o, t) && m(e, t, o[t]);
  return e;
}, c = (e, o) => i(e, p(o));
import g, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/SketchLogo.mjs";
const k = h((e, o) => /* @__PURE__ */ g.createElement(R, c(a({ ref: o }, e), { weights: d })));
k.displayName = "SketchLogo";
export {
  k as SketchLogo
};
