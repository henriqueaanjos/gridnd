var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var u = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var a = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, t = (r, e) => {
  for (var o in e || (e = {}))
    u.call(e, o) && a(r, o, e[o]);
  if (m)
    for (var o of m(e))
      S.call(e, o) && a(r, o, e[o]);
  return r;
}, f = (r, e) => p(r, s(e));
import c, { forwardRef as N } from "react";
import R from "../lib/SSRBase.mjs";
import b from "../defs/NumberSquareZero.mjs";
const d = N((r, e) => /* @__PURE__ */ c.createElement(R, f(t({ ref: e }, r), { weights: b })));
d.displayName = "NumberSquareZero";
export {
  d as NumberSquareZero
};
