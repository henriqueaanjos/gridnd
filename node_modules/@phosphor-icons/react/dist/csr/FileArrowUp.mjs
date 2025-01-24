var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? p(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    c.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      l.call(r, o) && m(e, o, r[o]);
  return e;
}, i = (e, r) => f(e, s(r));
import w, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import A from "../defs/FileArrowUp.mjs";
const F = n((e, r) => /* @__PURE__ */ w.createElement(d, i(a({ ref: r }, e), { weights: A })));
F.displayName = "FileArrowUp";
export {
  F as FileArrowUp
};
