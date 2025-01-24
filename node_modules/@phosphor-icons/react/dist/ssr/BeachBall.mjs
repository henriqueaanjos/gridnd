var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (a, e, r) => e in a ? c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : a[e] = r, m = (a, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && t(a, r, e[r]);
  if (o)
    for (var r of o(e))
      s.call(e, r) && t(a, r, e[r]);
  return a;
}, l = (a, e) => f(a, i(e));
import B, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/BeachBall.mjs";
const n = h((a, e) => /* @__PURE__ */ B.createElement(R, l(m({ ref: e }, a), { weights: d })));
n.displayName = "BeachBall";
export {
  n as BeachBall
};
