var m = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var e = (i, a, s) => a in i ? m(i, a, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[a] = s, r = (i, a) => {
  for (var s in a || (a = {}))
    g.call(a, s) && e(i, s, a[s]);
  if (t)
    for (var s of t(a))
      p.call(a, s) && e(i, s, a[s]);
  return i;
}, o = (i, a) => f(i, n(a));
import l, { forwardRef as c } from "react";
import y from "../lib/SSRBase.mjs";
import R from "../defs/ListMagnifyingGlass.mjs";
const d = c((i, a) => /* @__PURE__ */ l.createElement(y, o(r({ ref: a }, i), { weights: R })));
d.displayName = "ListMagnifyingGlass";
export {
  d as ListMagnifyingGlass
};
