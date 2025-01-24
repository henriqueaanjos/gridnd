var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (r, o, t) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t, m = (r, o) => {
  for (var t in o || (o = {}))
    s.call(o, t) && a(r, t, o[t]);
  if (e)
    for (var t of e(o))
      n.call(o, t) && a(r, t, o[t]);
  return r;
}, c = (r, o) => i(r, p(o));
import y, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Factory.mjs";
const F = d((r, o) => /* @__PURE__ */ y.createElement(l, c(m({ ref: o }, r), { weights: w })));
F.displayName = "Factory";
export {
  F as Factory
};
