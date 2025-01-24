var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var u = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var a = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, t = (r, e) => {
  for (var o in e || (e = {}))
    u.call(e, o) && a(r, o, e[o]);
  if (m)
    for (var o of m(e))
      w.call(e, o) && a(r, o, e[o]);
  return r;
}, f = (r, e) => p(r, s(e));
import S, { forwardRef as c } from "react";
import N from "../lib/SSRBase.mjs";
import R from "../defs/NumberSquareTwo.mjs";
const b = c((r, e) => /* @__PURE__ */ S.createElement(N, f(t({ ref: e }, r), { weights: R })));
b.displayName = "NumberSquareTwo";
export {
  b as NumberSquareTwo
};
