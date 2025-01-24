var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var a = (e, r, o) => r in e ? p(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    n.call(r, o) && a(e, o, r[o]);
  if (t)
    for (var o of t(r))
      w.call(r, o) && a(e, o, r[o]);
  return e;
}, i = (e, r) => s(e, f(r));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/ArrowFatLinesUp.mjs";
const A = R((e, r) => /* @__PURE__ */ c.createElement(d, i(m({ ref: r }, e), { weights: l })));
A.displayName = "ArrowFatLinesUp";
export {
  A as ArrowFatLinesUp
};
