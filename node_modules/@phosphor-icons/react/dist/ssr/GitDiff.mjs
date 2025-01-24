var a = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var f = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var i = (e, t, r) => t in e ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, o = (e, t) => {
  for (var r in t || (t = {}))
    c.call(t, r) && i(e, r, t[r]);
  if (f)
    for (var r of f(t))
      R.call(t, r) && i(e, r, t[r]);
  return e;
}, m = (e, t) => p(e, s(t));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/GitDiff.mjs";
const D = l((e, t) => /* @__PURE__ */ d.createElement(n, m(o({ ref: t }, e), { weights: w })));
D.displayName = "GitDiff";
export {
  D as GitDiff
};
