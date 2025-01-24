var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, m) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, a = (r, e) => {
  for (var m in e || (e = {}))
    S.call(e, m) && t(r, m, e[m]);
  if (o)
    for (var m of o(e))
      c.call(e, m) && t(r, m, e[m]);
  return r;
}, i = (r, e) => p(r, s(e));
import x, { forwardRef as N } from "react";
import R from "../lib/SSRBase.mjs";
import b from "../defs/NumberSix.mjs";
const d = N((r, e) => /* @__PURE__ */ x.createElement(R, i(a({ ref: e }, r), { weights: b })));
d.displayName = "NumberSix";
export {
  d as NumberSix
};
