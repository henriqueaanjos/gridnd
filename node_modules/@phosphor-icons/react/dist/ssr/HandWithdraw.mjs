var d = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var o = (a, r, t) => r in a ? d(a, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[r] = t, m = (a, r) => {
  for (var t in r || (r = {}))
    s.call(r, t) && o(a, t, r[t]);
  if (e)
    for (var t of e(r))
      n.call(r, t) && o(a, t, r[t]);
  return a;
}, i = (a, r) => f(a, p(r));
import w, { forwardRef as c } from "react";
import h from "../lib/SSRBase.mjs";
import R from "../defs/HandWithdraw.mjs";
const l = c((a, r) => /* @__PURE__ */ w.createElement(h, i(m({ ref: r }, a), { weights: R })));
l.displayName = "HandWithdraw";
export {
  l as HandWithdraw
};
