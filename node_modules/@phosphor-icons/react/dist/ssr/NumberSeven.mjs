var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var t = (r, e, m) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, a = (r, e) => {
  for (var m in e || (e = {}))
    n.call(e, m) && t(r, m, e[m]);
  if (o)
    for (var m of o(e))
      S.call(e, m) && t(r, m, e[m]);
  return r;
}, f = (r, e) => p(r, s(e));
import c, { forwardRef as N } from "react";
import R from "../lib/SSRBase.mjs";
import b from "../defs/NumberSeven.mjs";
const d = N((r, e) => /* @__PURE__ */ c.createElement(R, f(a({ ref: e }, r), { weights: b })));
d.displayName = "NumberSeven";
export {
  d as NumberSeven
};
