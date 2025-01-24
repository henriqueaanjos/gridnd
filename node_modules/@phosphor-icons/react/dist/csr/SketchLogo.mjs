var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var m = (e, o, t) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, a = (e, o) => {
  for (var t in o || (o = {}))
    s.call(o, t) && m(e, t, o[t]);
  if (r)
    for (var t of r(o))
      g.call(o, t) && m(e, t, o[t]);
  return e;
}, c = (e, o) => i(e, p(o));
import h, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import k from "../defs/SketchLogo.mjs";
const l = n((e, o) => /* @__PURE__ */ h.createElement(d, c(a({ ref: o }, e), { weights: k })));
l.displayName = "SketchLogo";
export {
  l as SketchLogo
};
