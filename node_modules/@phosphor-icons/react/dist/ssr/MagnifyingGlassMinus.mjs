var m = Object.defineProperty, n = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (i, a, s) => a in i ? m(i, a, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[a] = s, o = (i, a) => {
  for (var s in a || (a = {}))
    g.call(a, s) && r(i, s, a[s]);
  if (e)
    for (var s of e(a))
      p.call(a, s) && r(i, s, a[s]);
  return i;
}, t = (i, a) => n(i, f(a));
import l, { forwardRef as M } from "react";
import c from "../lib/SSRBase.mjs";
import y from "../defs/MagnifyingGlassMinus.mjs";
const R = M((i, a) => /* @__PURE__ */ l.createElement(c, t(o({ ref: a }, i), { weights: y })));
R.displayName = "MagnifyingGlassMinus";
export {
  R as MagnifyingGlassMinus
};
