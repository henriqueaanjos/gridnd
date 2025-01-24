var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, N = Object.prototype.propertyIsEnumerable;
var t = (r, e, m) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, a = (r, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && t(r, m, e[m]);
  if (o)
    for (var m of o(e))
      N.call(e, m) && t(r, m, e[m]);
  return r;
}, i = (r, e) => n(r, p(e));
import c, { forwardRef as b } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/NumberNine.mjs";
const u = b((r, e) => /* @__PURE__ */ c.createElement(d, i(a({ ref: e }, r), { weights: l })));
u.displayName = "NumberNine";
export {
  u as NumberNine
};
