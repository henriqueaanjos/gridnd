var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var t = (m, e, r) => e in m ? f(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, a = (m, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && t(m, r, e[r]);
  if (o)
    for (var r of o(e))
      S.call(e, r) && t(m, r, e[r]);
  return m;
}, i = (m, e) => p(m, s(e));
import c, { forwardRef as h } from "react";
import y from "../lib/SSRBase.mjs";
import R from "../defs/SmileyMeh.mjs";
const d = h((m, e) => /* @__PURE__ */ c.createElement(y, i(a({ ref: e }, m), { weights: R })));
d.displayName = "SmileyMeh";
export {
  d as SmileyMeh
};
