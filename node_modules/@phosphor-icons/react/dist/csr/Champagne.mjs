var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var r = (a, e, m) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : a[e] = m, t = (a, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && r(a, m, e[m]);
  if (o)
    for (var m of o(e))
      c.call(e, m) && r(a, m, e[m]);
  return a;
}, p = (a, e) => i(a, n(e));
import g, { forwardRef as h } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/Champagne.mjs";
const w = h((a, e) => /* @__PURE__ */ g.createElement(d, p(t({ ref: e }, a), { weights: l })));
w.displayName = "Champagne";
export {
  w as Champagne
};
