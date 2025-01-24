var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, u = Object.prototype.propertyIsEnumerable;
var a = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, t = (r, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && a(r, o, e[o]);
  if (m)
    for (var o of m(e))
      u.call(e, o) && a(r, o, e[o]);
  return r;
}, f = (r, e) => p(r, s(e));
import w, { forwardRef as n } from "react";
import N from "../lib/IconBase.mjs";
import b from "../defs/NumberSquareTwo.mjs";
const d = n((r, e) => /* @__PURE__ */ w.createElement(N, f(t({ ref: e }, r), { weights: b })));
d.displayName = "NumberSquareTwo";
export {
  d as NumberSquareTwo
};
