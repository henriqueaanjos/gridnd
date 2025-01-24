var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? p(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    l.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      w.call(r, o) && m(e, o, r[o]);
  return e;
}, i = (e, r) => f(e, s(r));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/FileArrowUp.mjs";
const A = R((e, r) => /* @__PURE__ */ c.createElement(d, i(a({ ref: r }, e), { weights: n })));
A.displayName = "FileArrowUp";
export {
  A as FileArrowUp
};
