var p = Object.defineProperty, s = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (a, r, e) => r in a ? p(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, m = (a, r) => {
  for (var e in r || (r = {}))
    f.call(r, e) && t(a, e, r[e]);
  if (o)
    for (var e of o(r))
      d.call(r, e) && t(a, e, r[e]);
  return a;
}, i = (a, r) => s(a, c(r));
import h, { forwardRef as R } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/GraphicsCard.mjs";
const w = R((a, r) => /* @__PURE__ */ h.createElement(l, i(m({ ref: r }, a), { weights: n })));
w.displayName = "GraphicsCard";
export {
  w as GraphicsCard
};
