var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (r, e, m) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, t = (r, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && a(r, m, e[m]);
  if (o)
    for (var m of o(e))
      c.call(e, m) && a(r, m, e[m]);
  return r;
}, f = (r, e) => n(r, p(e));
import u, { forwardRef as S } from "react";
import N from "../lib/IconBase.mjs";
import b from "../defs/NumberSquareSeven.mjs";
const d = S((r, e) => /* @__PURE__ */ u.createElement(N, f(t({ ref: e }, r), { weights: b })));
d.displayName = "NumberSquareSeven";
export {
  d as NumberSquareSeven
};
