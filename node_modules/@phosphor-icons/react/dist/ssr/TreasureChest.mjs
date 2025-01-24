var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (r, e, t) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, s = (r, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && o(r, t, e[t]);
  if (a)
    for (var t of a(e))
      h.call(e, t) && o(r, t, e[t]);
  return r;
}, m = (r, e) => i(r, p(e));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/TreasureChest.mjs";
const u = d((r, e) => /* @__PURE__ */ R.createElement(l, m(s({ ref: e }, r), { weights: n })));
u.displayName = "TreasureChest";
export {
  u as TreasureChest
};
