var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (e, r, m) => r in e ? c(e, r, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[r] = m, t = (e, r) => {
  for (var m in r || (r = {}))
    s.call(r, m) && o(e, m, r[m]);
  if (a)
    for (var m of a(r))
      h.call(r, m) && o(e, m, r[m]);
  return e;
}, i = (e, r) => f(e, p(r));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Armchair.mjs";
const w = d((e, r) => /* @__PURE__ */ R.createElement(l, i(t({ ref: r }, e), { weights: n })));
w.displayName = "Armchair";
export {
  w as Armchair
};
