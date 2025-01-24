var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (i, r, e) => r in i ? f(i, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[r] = e, m = (i, r) => {
  for (var e in r || (r = {}))
    s.call(r, e) && t(i, e, r[e]);
  if (o)
    for (var e of o(r))
      c.call(r, e) && t(i, e, r[e]);
  return i;
}, a = (i, r) => n(i, p(r));
import g, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Onigiri.mjs";
const I = d((i, r) => /* @__PURE__ */ g.createElement(l, a(m({ ref: r }, i), { weights: w })));
I.displayName = "Onigiri";
export {
  I as Onigiri
};
