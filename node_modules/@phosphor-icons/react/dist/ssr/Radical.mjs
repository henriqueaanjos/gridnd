var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var t = (e, a, r) => a in e ? c(e, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[a] = r, m = (e, a) => {
  for (var r in a || (a = {}))
    s.call(a, r) && t(e, r, a[r]);
  if (o)
    for (var r of o(a))
      R.call(a, r) && t(e, r, a[r]);
  return e;
}, i = (e, a) => f(e, p(a));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/Radical.mjs";
const S = l((e, a) => /* @__PURE__ */ d.createElement(n, i(m({ ref: a }, e), { weights: w })));
S.displayName = "Radical";
export {
  S as Radical
};
