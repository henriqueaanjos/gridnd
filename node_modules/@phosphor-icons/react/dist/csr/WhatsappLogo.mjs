var s = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var r = (a, o, t) => o in a ? s(a, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[o] = t, p = (a, o) => {
  for (var t in o || (o = {}))
    c.call(o, t) && r(a, t, o[t]);
  if (e)
    for (var t of e(o))
      g.call(o, t) && r(a, t, o[t]);
  return a;
}, m = (a, o) => f(a, i(o));
import h, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/WhatsappLogo.mjs";
const w = n((a, o) => /* @__PURE__ */ h.createElement(d, m(p({ ref: o }, a), { weights: l })));
w.displayName = "WhatsappLogo";
export {
  w as WhatsappLogo
};
