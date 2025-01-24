var s = Object.defineProperty, d = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (e, a, r) => a in e ? s(e, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[a] = r, m = (e, a) => {
  for (var r in a || (a = {}))
    p.call(a, r) && t(e, r, a[r]);
  if (o)
    for (var r of o(a))
      n.call(a, r) && t(e, r, a[r]);
  return e;
}, i = (e, a) => d(e, f(a));
import c, { forwardRef as B } from "react";
import R from "../lib/SSRBase.mjs";
import l from "../defs/Bandaids.mjs";
const w = B((e, a) => /* @__PURE__ */ c.createElement(R, i(m({ ref: a }, e), { weights: l })));
w.displayName = "Bandaids";
export {
  w as Bandaids
};
