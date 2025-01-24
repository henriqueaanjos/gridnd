var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var t = (m, e, r) => e in m ? f(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, a = (m, e) => {
  for (var r in e || (e = {}))
    n.call(e, r) && t(m, r, e[r]);
  if (o)
    for (var r of o(e))
      S.call(e, r) && t(m, r, e[r]);
  return m;
}, i = (m, e) => p(m, s(e));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/SunDim.mjs";
const u = R((m, e) => /* @__PURE__ */ c.createElement(d, i(a({ ref: e }, m), { weights: l })));
u.displayName = "SunDim";
export {
  u as SunDim
};
