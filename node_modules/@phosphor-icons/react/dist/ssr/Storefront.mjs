var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var m = (o, r, t) => r in o ? i(o, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[r] = t, a = (o, r) => {
  for (var t in r || (r = {}))
    n.call(r, t) && m(o, t, r[t]);
  if (e)
    for (var t of e(r))
      S.call(r, t) && m(o, t, r[t]);
  return o;
}, f = (o, r) => p(o, s(r));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Storefront.mjs";
const w = R((o, r) => /* @__PURE__ */ c.createElement(d, f(a({ ref: r }, o), { weights: l })));
w.displayName = "Storefront";
export {
  w as Storefront
};
