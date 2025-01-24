var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    p.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      l.call(o, r) && m(e, r, o[r]);
  return e;
}, c = (e, o) => i(e, s(o));
import g, { forwardRef as x } from "react";
import E from "../lib/SSRBase.mjs";
import R from "../defs/MicrosoftExcelLogo.mjs";
const d = x((e, o) => /* @__PURE__ */ g.createElement(E, c(a({ ref: o }, e), { weights: R })));
d.displayName = "MicrosoftExcelLogo";
export {
  d as MicrosoftExcelLogo
};
