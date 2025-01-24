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
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/FigmaLogo.mjs";
const w = d((e, o) => /* @__PURE__ */ R.createElement(l, i(t({ ref: o }, e), { weights: n })));
w.displayName = "FigmaLogo";
export {
  w as FigmaLogo
};
