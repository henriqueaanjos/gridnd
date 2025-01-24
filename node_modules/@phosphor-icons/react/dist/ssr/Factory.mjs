var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, y = Object.prototype.propertyIsEnumerable;
var a = (o, r, t) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[r] = t, m = (o, r) => {
  for (var t in r || (r = {}))
    s.call(r, t) && a(o, t, r[t]);
  if (e)
    for (var t of e(r))
      y.call(r, t) && a(o, t, r[t]);
  return o;
}, c = (o, r) => i(o, p(r));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Factory.mjs";
const w = d((o, r) => /* @__PURE__ */ R.createElement(l, c(m({ ref: r }, o), { weights: n })));
w.displayName = "Factory";
export {
  w as Factory
};
