var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    R.call(o, r) && t(e, r, o[r]);
  if (a)
    for (var r of a(o))
      d.call(o, r) && t(e, r, o[r]);
  return e;
}, i = (e, o) => p(e, s(o));
import l, { forwardRef as n } from "react";
import c from "../lib/SSRBase.mjs";
import u from "../defs/CloudRain.mjs";
const w = n((e, o) => /* @__PURE__ */ l.createElement(c, i(m({ ref: o }, e), { weights: u })));
w.displayName = "CloudRain";
export {
  w as CloudRain
};
