var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (e, r, o) => r in e ? s(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    p.call(r, o) && a(e, o, r[o]);
  if (t)
    for (var o of t(r))
      l.call(r, o) && a(e, o, r[o]);
  return e;
}, i = (e, r) => c(e, f(r));
import w, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/ArrowsVertical.mjs";
const A = R((e, r) => /* @__PURE__ */ w.createElement(d, i(m({ ref: r }, e), { weights: n })));
A.displayName = "ArrowsVertical";
export {
  A as ArrowsVertical
};
