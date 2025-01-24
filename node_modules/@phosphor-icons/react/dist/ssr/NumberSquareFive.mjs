var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var u = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var o = (r, e, m) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, t = (r, e) => {
  for (var m in e || (e = {}))
    u.call(e, m) && o(r, m, e[m]);
  if (a)
    for (var m of a(e))
      S.call(e, m) && o(r, m, e[m]);
  return r;
}, i = (r, e) => p(r, s(e));
import c, { forwardRef as N } from "react";
import R from "../lib/SSRBase.mjs";
import b from "../defs/NumberSquareFive.mjs";
const d = N((r, e) => /* @__PURE__ */ c.createElement(R, i(t({ ref: e }, r), { weights: b })));
d.displayName = "NumberSquareFive";
export {
  d as NumberSquareFive
};
