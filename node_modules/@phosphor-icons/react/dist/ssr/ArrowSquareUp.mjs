var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    w.call(r, o) && t(e, o, r[o]);
  if (a)
    for (var o of a(r))
      S.call(r, o) && t(e, o, r[o]);
  return e;
}, p = (e, r) => i(e, s(r));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/ArrowSquareUp.mjs";
const n = R((e, r) => /* @__PURE__ */ c.createElement(d, p(m({ ref: r }, e), { weights: l })));
n.displayName = "ArrowSquareUp";
export {
  n as ArrowSquareUp
};
