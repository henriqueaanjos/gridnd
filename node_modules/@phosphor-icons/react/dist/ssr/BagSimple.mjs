var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var o = (m, e, r) => e in m ? p(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, t = (m, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && o(m, r, e[r]);
  if (a)
    for (var r of a(e))
      S.call(e, r) && o(m, r, e[r]);
  return m;
}, i = (m, e) => f(m, s(e));
import c, { forwardRef as g } from "react";
import B from "../lib/SSRBase.mjs";
import R from "../defs/BagSimple.mjs";
const d = g((m, e) => /* @__PURE__ */ c.createElement(B, i(t({ ref: e }, m), { weights: R })));
d.displayName = "BagSimple";
export {
  d as BagSimple
};
