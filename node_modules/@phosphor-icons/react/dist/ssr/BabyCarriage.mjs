var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var t = (a, r, e) => r in a ? f(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, m = (a, r) => {
  for (var e in r || (r = {}))
    c.call(r, e) && t(a, e, r[e]);
  if (o)
    for (var e of o(r))
      g.call(r, e) && t(a, e, r[e]);
  return a;
}, i = (a, r) => p(a, s(r));
import y, { forwardRef as B } from "react";
import R from "../lib/SSRBase.mjs";
import b from "../defs/BabyCarriage.mjs";
const d = B((a, r) => /* @__PURE__ */ y.createElement(R, i(m({ ref: r }, a), { weights: b })));
d.displayName = "BabyCarriage";
export {
  d as BabyCarriage
};
