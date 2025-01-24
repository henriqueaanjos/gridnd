var i = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var e = (r, o, a) => o in r ? i(r, o, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[o] = a, n = (r, o) => {
  for (var a in o || (o = {}))
    g.call(o, a) && e(r, a, o[a]);
  if (t)
    for (var a of t(o))
      p.call(o, a) && e(r, a, o[a]);
  return r;
}, m = (r, o) => c(r, f(o));
import s, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/WarningOctagon.mjs";
const I = d((r, o) => /* @__PURE__ */ s.createElement(l, m(n({ ref: o }, r), { weights: w })));
I.displayName = "WarningOctagon";
export {
  I as WarningOctagon
};
