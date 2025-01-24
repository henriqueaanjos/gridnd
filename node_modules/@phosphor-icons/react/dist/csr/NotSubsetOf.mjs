var s = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (e, t, o) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, a = (e, t) => {
  for (var o in t || (t = {}))
    c.call(t, o) && m(e, o, t[o]);
  if (r)
    for (var o of r(t))
      n.call(t, o) && m(e, o, t[o]);
  return e;
}, f = (e, t) => i(e, p(t));
import N, { forwardRef as b } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/NotSubsetOf.mjs";
const u = b((e, t) => /* @__PURE__ */ N.createElement(d, f(a({ ref: t }, e), { weights: l })));
u.displayName = "NotSubsetOf";
export {
  u as NotSubsetOf
};
