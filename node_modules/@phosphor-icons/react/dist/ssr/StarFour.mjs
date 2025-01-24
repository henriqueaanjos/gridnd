var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (o, r, t) => r in o ? i(o, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[r] = t, m = (o, r) => {
  for (var t in r || (r = {}))
    S.call(r, t) && a(o, t, r[t]);
  if (e)
    for (var t of e(r))
      c.call(r, t) && a(o, t, r[t]);
  return o;
}, f = (o, r) => p(o, s(r));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/StarFour.mjs";
const u = d((o, r) => /* @__PURE__ */ R.createElement(l, f(m({ ref: r }, o), { weights: n })));
u.displayName = "StarFour";
export {
  u as StarFour
};
