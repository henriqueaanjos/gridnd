var d = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var o = (a, r, t) => r in a ? d(a, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[r] = t, m = (a, r) => {
  for (var t in r || (r = {}))
    p.call(r, t) && o(a, t, r[t]);
  if (e)
    for (var t of e(r))
      s.call(r, t) && o(a, t, r[t]);
  return a;
}, i = (a, r) => f(a, n(r));
import c, { forwardRef as w } from "react";
import h from "../lib/IconBase.mjs";
import l from "../defs/HandWithdraw.mjs";
const H = w((a, r) => /* @__PURE__ */ c.createElement(h, i(m({ ref: r }, a), { weights: l })));
H.displayName = "HandWithdraw";
export {
  H as HandWithdraw
};
