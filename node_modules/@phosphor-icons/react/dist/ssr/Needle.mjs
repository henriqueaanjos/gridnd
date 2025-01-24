var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    d.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      l.call(e, o) && m(r, o, e[o]);
  return r;
}, f = (r, e) => p(r, s(e));
import c, { forwardRef as N } from "react";
import R from "../lib/SSRBase.mjs";
import n from "../defs/Needle.mjs";
const w = N((r, e) => /* @__PURE__ */ c.createElement(R, f(a({ ref: e }, r), { weights: n })));
w.displayName = "Needle";
export {
  w as Needle
};
