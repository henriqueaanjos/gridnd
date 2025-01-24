var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    c.call(o, r) && t(e, r, o[r]);
  if (a)
    for (var r of a(o))
      d.call(o, r) && t(e, r, o[r]);
  return e;
}, f = (e, o) => p(e, s(o));
import g, { forwardRef as n } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/CodaLogo.mjs";
const C = n((e, o) => /* @__PURE__ */ g.createElement(l, f(m({ ref: o }, e), { weights: w })));
C.displayName = "CodaLogo";
export {
  C as CodaLogo
};
