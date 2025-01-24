var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (e, o, m) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[o] = m, a = (e, o) => {
  for (var m in o || (o = {}))
    c.call(o, m) && t(e, m, o[m]);
  if (r)
    for (var m of r(o))
      d.call(o, m) && t(e, m, o[m]);
  return e;
}, i = (e, o) => p(e, s(o));
import g, { forwardRef as n } from "react";
import l from "../lib/IconBase.mjs";
import u from "../defs/MediumLogo.mjs";
const w = n((e, o) => /* @__PURE__ */ g.createElement(l, i(a({ ref: o }, e), { weights: u })));
w.displayName = "MediumLogo";
export {
  w as MediumLogo
};
