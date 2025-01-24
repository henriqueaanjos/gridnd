var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var o = (a, r, t) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[r] = t, m = (a, r) => {
  for (var t in r || (r = {}))
    d.call(r, t) && o(a, t, r[t]);
  if (e)
    for (var t of e(r))
      S.call(r, t) && o(a, t, r[t]);
  return a;
}, f = (a, r) => p(a, s(r));
import c, { forwardRef as R } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/StarOfDavid.mjs";
const v = R((a, r) => /* @__PURE__ */ c.createElement(l, f(m({ ref: r }, a), { weights: n })));
v.displayName = "StarOfDavid";
export {
  v as StarOfDavid
};
