var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, m) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, a = (r, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && t(r, m, e[m]);
  if (o)
    for (var m of o(e))
      c.call(e, m) && t(r, m, e[m]);
  return r;
}, f = (r, e) => n(r, p(e));
import N, { forwardRef as b } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/NumberOne.mjs";
const u = b((r, e) => /* @__PURE__ */ N.createElement(d, f(a({ ref: e }, r), { weights: l })));
u.displayName = "NumberOne";
export {
  u as NumberOne
};
