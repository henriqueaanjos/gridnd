var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, r, t) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[r] = t, a = (o, r) => {
  for (var t in r || (r = {}))
    w.call(r, t) && m(o, t, r[t]);
  if (e)
    for (var t of e(r))
      c.call(r, t) && m(o, t, r[t]);
  return o;
}, s = (o, r) => i(o, p(r));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/ArrowsOut.mjs";
const u = d((o, r) => /* @__PURE__ */ R.createElement(l, s(a({ ref: r }, o), { weights: n })));
u.displayName = "ArrowsOut";
export {
  u as ArrowsOut
};
