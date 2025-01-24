var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    d.call(o, r) && t(e, r, o[r]);
  if (a)
    for (var r of a(o))
      l.call(o, r) && t(e, r, o[r]);
  return e;
}, i = (e, o) => p(e, s(o));
import c, { forwardRef as g } from "react";
import R from "../lib/SSRBase.mjs";
import n from "../defs/TidalLogo.mjs";
const w = g((e, o) => /* @__PURE__ */ c.createElement(R, i(m({ ref: o }, e), { weights: n })));
w.displayName = "TidalLogo";
export {
  w as TidalLogo
};
