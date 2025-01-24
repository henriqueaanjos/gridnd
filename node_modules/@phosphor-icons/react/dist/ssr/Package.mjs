var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var t = (a, e, r) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : a[e] = r, m = (a, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && t(a, r, e[r]);
  if (o)
    for (var r of o(e))
      g.call(e, r) && t(a, r, e[r]);
  return a;
}, c = (a, e) => i(a, p(e));
import R, { forwardRef as d } from "react";
import k from "../lib/SSRBase.mjs";
import l from "../defs/Package.mjs";
const n = d((a, e) => /* @__PURE__ */ R.createElement(k, c(m({ ref: e }, a), { weights: l })));
n.displayName = "Package";
export {
  n as Package
};
