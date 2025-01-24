var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, y = Object.prototype.propertyIsEnumerable;
var t = (e, r, a) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, m = (e, r) => {
  for (var a in r || (r = {}))
    c.call(r, a) && t(e, a, r[a]);
  if (o)
    for (var a of o(r))
      y.call(r, a) && t(e, a, r[a]);
  return e;
}, i = (e, r) => p(e, s(r));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/HairDryer.mjs";
const w = d((e, r) => /* @__PURE__ */ R.createElement(l, i(m({ ref: r }, e), { weights: n })));
w.displayName = "HairDryer";
export {
  w as HairDryer
};
