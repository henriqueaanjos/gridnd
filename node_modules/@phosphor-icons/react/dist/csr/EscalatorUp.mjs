var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var e = (r, o, a) => o in r ? s(r, o, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[o] = a, m = (r, o) => {
  for (var a in o || (o = {}))
    i.call(o, a) && e(r, a, o[a]);
  if (t)
    for (var a of t(o))
      l.call(o, a) && e(r, a, o[a]);
  return r;
}, p = (r, o) => c(r, f(o));
import n, { forwardRef as E } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/EscalatorUp.mjs";
const I = E((r, o) => /* @__PURE__ */ n.createElement(d, p(m({ ref: o }, r), { weights: w })));
I.displayName = "EscalatorUp";
export {
  I as EscalatorUp
};
