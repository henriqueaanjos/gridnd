var s = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var t = (m, e, r) => e in m ? s(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, a = (m, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && t(m, r, e[r]);
  if (o)
    for (var r of o(e))
      h.call(e, r) && t(m, r, e[r]);
  return m;
}, p = (m, e) => f(m, i(e));
import R, { forwardRef as b } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/ThumbsUp.mjs";
const n = b((m, e) => /* @__PURE__ */ R.createElement(d, p(a({ ref: e }, m), { weights: l })));
n.displayName = "ThumbsUp";
export {
  n as ThumbsUp
};
