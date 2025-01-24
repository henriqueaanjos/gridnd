var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, u = Object.prototype.propertyIsEnumerable;
var a = (r, e, m) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, t = (r, e) => {
  for (var m in e || (e = {}))
    c.call(e, m) && a(r, m, e[m]);
  if (o)
    for (var m of o(e))
      u.call(e, m) && a(r, m, e[m]);
  return r;
}, f = (r, e) => p(r, s(e));
import h, { forwardRef as n } from "react";
import N from "../lib/IconBase.mjs";
import b from "../defs/NumberSquareThree.mjs";
const d = n((r, e) => /* @__PURE__ */ h.createElement(N, f(t({ ref: e }, r), { weights: b })));
d.displayName = "NumberSquareThree";
export {
  d as NumberSquareThree
};
