var a = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var f = (e, t, o) => t in e ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, i = (e, t) => {
  for (var o in t || (t = {}))
    c.call(t, o) && f(e, o, t[o]);
  if (r)
    for (var o of r(t))
      n.call(t, o) && f(e, o, t[o]);
  return e;
}, m = (e, t) => p(e, s(t));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import D from "../defs/GitDiff.mjs";
const G = l((e, t) => /* @__PURE__ */ d.createElement(w, m(i({ ref: t }, e), { weights: D })));
G.displayName = "GitDiff";
export {
  G as GitDiff
};
