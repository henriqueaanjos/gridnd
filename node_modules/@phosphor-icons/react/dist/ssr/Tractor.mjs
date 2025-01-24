var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var a = (o, r, t) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[r] = t, m = (o, r) => {
  for (var t in r || (r = {}))
    s.call(r, t) && a(o, t, r[t]);
  if (e)
    for (var t of e(r))
      R.call(r, t) && a(o, t, r[t]);
  return o;
}, c = (o, r) => i(o, p(r));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/Tractor.mjs";
const S = l((o, r) => /* @__PURE__ */ d.createElement(n, c(m({ ref: r }, o), { weights: w })));
S.displayName = "Tractor";
export {
  S as Tractor
};
