var m = Object.defineProperty, f = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var i = (s, a, e) => a in s ? m(s, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[a] = e, o = (s, a) => {
  for (var e in a || (a = {}))
    n.call(a, e) && i(s, e, a[e]);
  if (r)
    for (var e of r(a))
      g.call(a, e) && i(s, e, a[e]);
  return s;
}, t = (s, a) => f(s, l(a));
import p, { forwardRef as c } from "react";
import y from "../lib/SSRBase.mjs";
import R from "../defs/MagnifyingGlassPlus.mjs";
const d = c((s, a) => /* @__PURE__ */ p.createElement(y, t(o({ ref: a }, s), { weights: R })));
d.displayName = "MagnifyingGlassPlus";
export {
  d as MagnifyingGlassPlus
};
