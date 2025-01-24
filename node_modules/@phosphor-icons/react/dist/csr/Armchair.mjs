var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var a = (e, r, m) => r in e ? c(e, r, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[r] = m, t = (e, r) => {
  for (var m in r || (r = {}))
    s.call(r, m) && a(e, m, r[m]);
  if (o)
    for (var m of o(r))
      h.call(r, m) && a(e, m, r[m]);
  return e;
}, i = (e, r) => f(e, p(r));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Armchair.mjs";
const A = d((e, r) => /* @__PURE__ */ n.createElement(l, i(t({ ref: r }, e), { weights: w })));
A.displayName = "Armchair";
export {
  A as Armchair
};
