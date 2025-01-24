var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (e, r, o) => r in e ? p(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    n.call(r, o) && a(e, o, r[o]);
  if (t)
    for (var o of t(r))
      c.call(r, o) && a(e, o, r[o]);
  return e;
}, i = (e, r) => s(e, f(r));
import w, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import A from "../defs/ArrowFatLinesUp.mjs";
const F = d((e, r) => /* @__PURE__ */ w.createElement(l, i(m({ ref: r }, e), { weights: A })));
F.displayName = "ArrowFatLinesUp";
export {
  F as ArrowFatLinesUp
};
