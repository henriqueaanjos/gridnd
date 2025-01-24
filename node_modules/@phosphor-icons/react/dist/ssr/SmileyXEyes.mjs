var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var y = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (m, e, r) => e in m ? s(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, a = (m, e) => {
  for (var r in e || (e = {}))
    y.call(e, r) && t(m, r, e[r]);
  if (o)
    for (var r of o(e))
      l.call(e, r) && t(m, r, e[r]);
  return m;
}, i = (m, e) => f(m, p(e));
import S, { forwardRef as c } from "react";
import E from "../lib/SSRBase.mjs";
import R from "../defs/SmileyXEyes.mjs";
const d = c((m, e) => /* @__PURE__ */ S.createElement(E, i(a({ ref: e }, m), { weights: R })));
d.displayName = "SmileyXEyes";
export {
  d as SmileyXEyes
};
