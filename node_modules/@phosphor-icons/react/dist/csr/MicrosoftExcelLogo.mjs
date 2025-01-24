var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var c = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    p.call(o, r) && c(e, r, o[r]);
  if (t)
    for (var r of t(o))
      l.call(o, r) && c(e, r, o[r]);
  return e;
}, a = (e, o) => i(e, s(o));
import g, { forwardRef as n } from "react";
import x from "../lib/IconBase.mjs";
import E from "../defs/MicrosoftExcelLogo.mjs";
const d = n((e, o) => /* @__PURE__ */ g.createElement(x, a(m({ ref: o }, e), { weights: E })));
d.displayName = "MicrosoftExcelLogo";
export {
  d as MicrosoftExcelLogo
};
