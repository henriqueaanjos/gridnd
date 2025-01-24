var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var o = (a, r, t) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[r] = t, m = (a, r) => {
  for (var t in r || (r = {}))
    c.call(r, t) && o(a, t, r[t]);
  if (e)
    for (var t of e(r))
      d.call(r, t) && o(a, t, r[t]);
  return a;
}, f = (a, r) => p(a, s(r));
import H, { forwardRef as n } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/HardHat.mjs";
const I = n((a, r) => /* @__PURE__ */ H.createElement(l, f(m({ ref: r }, a), { weights: w })));
I.displayName = "HardHat";
export {
  I as HardHat
};
