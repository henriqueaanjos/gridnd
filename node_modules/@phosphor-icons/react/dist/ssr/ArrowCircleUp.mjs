var p = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? p(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    s.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      l.call(r, o) && m(e, o, r[o]);
  return e;
}, i = (e, r) => c(e, f(r));
import w, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/ArrowCircleUp.mjs";
const A = R((e, r) => /* @__PURE__ */ w.createElement(d, i(a({ ref: r }, e), { weights: n })));
A.displayName = "ArrowCircleUp";
export {
  A as ArrowCircleUp
};
