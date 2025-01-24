var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    c.call(r, o) && t(e, o, r[o]);
  if (a)
    for (var o of a(r))
      w.call(r, o) && t(e, o, r[o]);
  return e;
}, p = (e, r) => i(e, s(r));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import q from "../defs/ArrowSquareUp.mjs";
const u = d((e, r) => /* @__PURE__ */ n.createElement(l, p(m({ ref: r }, e), { weights: q })));
u.displayName = "ArrowSquareUp";
export {
  u as ArrowSquareUp
};
