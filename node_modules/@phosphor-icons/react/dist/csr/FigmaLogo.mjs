var f = Object.defineProperty, g = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (e, o, m) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[o] = m, t = (e, o) => {
  for (var m in o || (o = {}))
    s.call(o, m) && a(e, m, o[m]);
  if (r)
    for (var m of r(o))
      c.call(o, m) && a(e, m, o[m]);
  return e;
}, i = (e, o) => g(e, p(o));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/FigmaLogo.mjs";
const F = d((e, o) => /* @__PURE__ */ n.createElement(l, i(t({ ref: o }, e), { weights: w })));
F.displayName = "FigmaLogo";
export {
  F as FigmaLogo
};
