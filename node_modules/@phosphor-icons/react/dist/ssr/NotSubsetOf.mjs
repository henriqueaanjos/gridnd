var s = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (e, t, o) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, a = (e, t) => {
  for (var o in t || (t = {}))
    S.call(t, o) && m(e, o, t[o]);
  if (r)
    for (var o of r(t))
      c.call(t, o) && m(e, o, t[o]);
  return e;
}, f = (e, t) => i(e, p(t));
import N, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import d from "../defs/NotSubsetOf.mjs";
const l = R((e, t) => /* @__PURE__ */ N.createElement(b, f(a({ ref: t }, e), { weights: d })));
l.displayName = "NotSubsetOf";
export {
  l as NotSubsetOf
};
