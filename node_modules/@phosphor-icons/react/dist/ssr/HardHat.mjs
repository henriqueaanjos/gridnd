var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var o = (a, r, t) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[r] = t, m = (a, r) => {
  for (var t in r || (r = {}))
    d.call(r, t) && o(a, t, r[t]);
  if (e)
    for (var t of e(r))
      H.call(r, t) && o(a, t, r[t]);
  return a;
}, f = (a, r) => p(a, s(r));
import c, { forwardRef as R } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/HardHat.mjs";
const w = R((a, r) => /* @__PURE__ */ c.createElement(l, f(m({ ref: r }, a), { weights: n })));
w.displayName = "HardHat";
export {
  w as HardHat
};
