var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var a = (o, r, t) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[r] = t, m = (o, r) => {
  for (var t in r || (r = {}))
    c.call(r, t) && a(o, t, r[t]);
  if (e)
    for (var t of e(r))
      w.call(r, t) && a(o, t, r[t]);
  return o;
}, p = (o, r) => i(o, s(r));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import A from "../defs/ArrowFatUp.mjs";
const F = d((o, r) => /* @__PURE__ */ n.createElement(l, p(m({ ref: r }, o), { weights: A })));
F.displayName = "ArrowFatUp";
export {
  F as ArrowFatUp
};
