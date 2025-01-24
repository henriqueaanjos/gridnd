var p = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (e, r, o) => r in e ? p(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    s.call(r, o) && a(e, o, r[o]);
  if (t)
    for (var o of t(r))
      c.call(r, o) && a(e, o, r[o]);
  return e;
}, i = (e, r) => f(e, n(r));
import w, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import A from "../defs/ArrowFatLineUp.mjs";
const F = d((e, r) => /* @__PURE__ */ w.createElement(l, i(m({ ref: r }, e), { weights: A })));
F.displayName = "ArrowFatLineUp";
export {
  F as ArrowFatLineUp
};
