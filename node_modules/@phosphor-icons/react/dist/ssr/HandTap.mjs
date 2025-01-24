var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (e, a, r) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[a] = r, m = (e, a) => {
  for (var r in a || (a = {}))
    d.call(a, r) && t(e, r, a[r]);
  if (o)
    for (var r of o(a))
      n.call(a, r) && t(e, r, a[r]);
  return e;
}, p = (e, a) => i(e, s(a));
import c, { forwardRef as R } from "react";
import l from "../lib/SSRBase.mjs";
import w from "../defs/HandTap.mjs";
const H = R((e, a) => /* @__PURE__ */ c.createElement(l, p(m({ ref: a }, e), { weights: w })));
H.displayName = "HandTap";
export {
  H as HandTap
};
