var m = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var e = (i, a, s) => a in i ? m(i, a, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[a] = s, o = (i, a) => {
  for (var s in a || (a = {}))
    g.call(a, s) && e(i, s, a[s]);
  if (t)
    for (var s of t(a))
      p.call(a, s) && e(i, s, a[s]);
  return i;
}, r = (i, a) => f(i, n(a));
import c, { forwardRef as l } from "react";
import y from "../lib/IconBase.mjs";
import d from "../defs/ListMagnifyingGlass.mjs";
const w = l((i, a) => /* @__PURE__ */ c.createElement(y, r(o({ ref: a }, i), { weights: d })));
w.displayName = "ListMagnifyingGlass";
export {
  w as ListMagnifyingGlass
};
