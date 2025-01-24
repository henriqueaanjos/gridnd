var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (e, a, r) => a in e ? i(e, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[a] = r, m = (e, a) => {
  for (var r in a || (a = {}))
    d.call(a, r) && t(e, r, a[r]);
  if (o)
    for (var r of o(a))
      n.call(a, r) && t(e, r, a[r]);
  return e;
}, f = (e, a) => p(e, s(a));
import c, { forwardRef as g } from "react";
import R from "../lib/SSRBase.mjs";
import b from "../defs/Handbag.mjs";
const l = g((e, a) => /* @__PURE__ */ c.createElement(R, f(m({ ref: a }, e), { weights: b })));
l.displayName = "Handbag";
export {
  l as Handbag
};
