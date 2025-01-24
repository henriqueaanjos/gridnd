var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var t = (e, r, m) => r in e ? p(e, r, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[r] = m, a = (e, r) => {
  for (var m in r || (r = {}))
    c.call(r, m) && t(e, m, r[m]);
  if (o)
    for (var m of o(r))
      h.call(r, m) && t(e, m, r[m]);
  return e;
}, i = (e, r) => f(e, s(r));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Shrimp.mjs";
const I = d((e, r) => /* @__PURE__ */ n.createElement(l, i(a({ ref: r }, e), { weights: w })));
I.displayName = "Shrimp";
export {
  I as Shrimp
};
