var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var t = (m, e, r) => e in m ? p(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, a = (m, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && t(m, r, e[r]);
  if (o)
    for (var r of o(e))
      S.call(e, r) && t(m, r, e[r]);
  return m;
}, i = (m, e) => f(m, s(e));
import c, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/ThermometerSimple.mjs";
const n = h((m, e) => /* @__PURE__ */ c.createElement(R, i(a({ ref: e }, m), { weights: d })));
n.displayName = "ThermometerSimple";
export {
  n as ThermometerSimple
};
