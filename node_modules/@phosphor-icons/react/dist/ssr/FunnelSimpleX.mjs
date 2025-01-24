var p = Object.defineProperty, l = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (m, e, r) => e in m ? p(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, a = (m, e) => {
  for (var r in e || (e = {}))
    f.call(e, r) && t(m, r, e[r]);
  if (o)
    for (var r of o(e))
      s.call(e, r) && t(m, r, e[r]);
  return m;
}, i = (m, e) => l(m, n(e));
import S, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/FunnelSimpleX.mjs";
const u = c((m, e) => /* @__PURE__ */ S.createElement(R, i(a({ ref: e }, m), { weights: d })));
u.displayName = "FunnelSimpleX";
export {
  u as FunnelSimpleX
};
