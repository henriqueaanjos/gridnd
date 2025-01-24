var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (a, e, m) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : a[e] = m, t = (a, e) => {
  for (var m in e || (e = {}))
    n.call(e, m) && o(a, m, e[m]);
  if (r)
    for (var m of r(e))
      c.call(e, m) && o(a, m, e[m]);
  return a;
}, p = (a, e) => i(a, s(e));
import g, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/Champagne.mjs";
const l = h((a, e) => /* @__PURE__ */ g.createElement(R, p(t({ ref: e }, a), { weights: d })));
l.displayName = "Champagne";
export {
  l as Champagne
};
