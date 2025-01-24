var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (r, o, a) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[o] = a, m = (r, o) => {
  for (var a in o || (o = {}))
    c.call(o, a) && t(r, a, o[a]);
  if (e)
    for (var a of e(o))
      d.call(o, a) && t(r, a, o[a]);
  return r;
}, i = (r, o) => p(r, s(o));
import h, { forwardRef as n } from "react";
import B from "../lib/IconBase.mjs";
import l from "../defs/Biohazard.mjs";
const w = n((r, o) => /* @__PURE__ */ h.createElement(B, i(m({ ref: o }, r), { weights: l })));
w.displayName = "Biohazard";
export {
  w as Biohazard
};
