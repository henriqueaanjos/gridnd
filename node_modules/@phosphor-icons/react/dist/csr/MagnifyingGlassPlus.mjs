var m = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var r = (s, a, e) => a in s ? m(s, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[a] = e, i = (s, a) => {
  for (var e in a || (a = {}))
    l.call(a, e) && r(s, e, a[e]);
  if (o)
    for (var e of o(a))
      g.call(a, e) && r(s, e, a[e]);
  return s;
}, t = (s, a) => f(s, n(a));
import p, { forwardRef as c } from "react";
import y from "../lib/IconBase.mjs";
import d from "../defs/MagnifyingGlassPlus.mjs";
const u = c((s, a) => /* @__PURE__ */ p.createElement(y, t(i({ ref: a }, s), { weights: d })));
u.displayName = "MagnifyingGlassPlus";
export {
  u as MagnifyingGlassPlus
};
