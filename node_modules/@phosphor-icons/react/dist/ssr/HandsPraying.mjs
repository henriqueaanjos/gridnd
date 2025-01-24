var s = Object.defineProperty, n = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (a, r, e) => r in a ? s(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, m = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && t(a, e, r[e]);
  if (o)
    for (var e of o(r))
      d.call(r, e) && t(a, e, r[e]);
  return a;
}, i = (a, r) => n(a, f(r));
import c, { forwardRef as g } from "react";
import y from "../lib/SSRBase.mjs";
import R from "../defs/HandsPraying.mjs";
const l = g((a, r) => /* @__PURE__ */ c.createElement(y, i(m({ ref: r }, a), { weights: R })));
l.displayName = "HandsPraying";
export {
  l as HandsPraying
};
