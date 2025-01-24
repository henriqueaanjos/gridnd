var p = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, k = Object.prototype.propertyIsEnumerable;
var t = (e, a, r) => a in e ? p(e, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[a] = r, m = (e, a) => {
  for (var r in a || (a = {}))
    s.call(a, r) && t(e, r, a[r]);
  if (o)
    for (var r of o(a))
      k.call(a, r) && t(e, r, a[r]);
  return e;
}, c = (e, a) => f(e, i(a));
import B, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Backpack.mjs";
const n = R((e, a) => /* @__PURE__ */ B.createElement(d, c(m({ ref: a }, e), { weights: l })));
n.displayName = "Backpack";
export {
  n as Backpack
};
