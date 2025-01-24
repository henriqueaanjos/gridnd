var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var a = (e, r, o) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, t = (e, r) => {
  for (var o in r || (r = {}))
    s.call(r, o) && a(e, o, r[o]);
  if (m)
    for (var o of m(r))
      S.call(r, o) && a(e, o, r[o]);
  return e;
}, u = (e, r) => i(e, p(r));
import c, { forwardRef as N } from "react";
import R from "../lib/SSRBase.mjs";
import b from "../defs/NumberSquareFour.mjs";
const d = N((e, r) => /* @__PURE__ */ c.createElement(R, u(t({ ref: r }, e), { weights: b })));
d.displayName = "NumberSquareFour";
export {
  d as NumberSquareFour
};
