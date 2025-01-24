var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (a, e, r) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : a[e] = r, m = (a, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && t(a, r, e[r]);
  if (o)
    for (var r of o(e))
      d.call(e, r) && t(a, r, e[r]);
  return a;
}, c = (a, e) => i(a, p(e));
import n, { forwardRef as R } from "react";
import l from "../lib/SSRBase.mjs";
import w from "../defs/HandPeace.mjs";
const H = R((a, e) => /* @__PURE__ */ n.createElement(l, c(m({ ref: e }, a), { weights: w })));
H.displayName = "HandPeace";
export {
  H as HandPeace
};
