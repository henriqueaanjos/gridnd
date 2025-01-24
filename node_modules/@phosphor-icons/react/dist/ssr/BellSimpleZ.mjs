var i = Object.defineProperty, p = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var t = (m, e, r) => e in m ? i(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, l = (m, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && t(m, r, e[r]);
  if (o)
    for (var r of o(e))
      S.call(e, r) && t(m, r, e[r]);
  return m;
}, a = (m, e) => p(m, f(e));
import c, { forwardRef as B } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/BellSimpleZ.mjs";
const n = B((m, e) => /* @__PURE__ */ c.createElement(R, a(l({ ref: e }, m), { weights: d })));
n.displayName = "BellSimpleZ";
export {
  n as BellSimpleZ
};
