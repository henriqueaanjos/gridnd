var m = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, a, r) => a in e ? m(e, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[a] = r, s = (e, a) => {
  for (var r in a || (a = {}))
    g.call(a, r) && o(e, r, a[r]);
  if (i)
    for (var r of i(a))
      p.call(a, r) && o(e, r, a[r]);
  return e;
}, t = (e, a) => f(e, n(a));
import l, { forwardRef as c } from "react";
import y from "../lib/SSRBase.mjs";
import R from "../defs/MagnifyingGlass.mjs";
const d = c((e, a) => /* @__PURE__ */ l.createElement(y, t(s({ ref: a }, e), { weights: R })));
d.displayName = "MagnifyingGlass";
export {
  d as MagnifyingGlass
};
