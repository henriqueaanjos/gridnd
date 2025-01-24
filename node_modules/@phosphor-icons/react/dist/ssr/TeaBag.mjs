var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var t = (a, e, r) => e in a ? i(a, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : a[e] = r, m = (a, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && t(a, r, e[r]);
  if (o)
    for (var r of o(e))
      g.call(e, r) && t(a, r, e[r]);
  return a;
}, f = (a, e) => p(a, s(e));
import B, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/TeaBag.mjs";
const n = R((a, e) => /* @__PURE__ */ B.createElement(d, f(m({ ref: e }, a), { weights: l })));
n.displayName = "TeaBag";
export {
  n as TeaBag
};
