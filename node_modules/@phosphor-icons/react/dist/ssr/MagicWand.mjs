var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (e, a, r) => a in e ? c(e, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[a] = r, m = (e, a) => {
  for (var r in a || (a = {}))
    s.call(a, r) && t(e, r, a[r]);
  if (o)
    for (var r of o(a))
      d.call(a, r) && t(e, r, a[r]);
  return e;
}, i = (e, a) => f(e, p(a));
import n, { forwardRef as g } from "react";
import R from "../lib/SSRBase.mjs";
import l from "../defs/MagicWand.mjs";
const w = g((e, a) => /* @__PURE__ */ n.createElement(R, i(m({ ref: a }, e), { weights: l })));
w.displayName = "MagicWand";
export {
  w as MagicWand
};
