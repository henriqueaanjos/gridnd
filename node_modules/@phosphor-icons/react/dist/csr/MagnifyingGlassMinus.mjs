var t = Object.defineProperty, m = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (i, a, s) => a in i ? t(i, a, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[a] = s, r = (i, a) => {
  for (var s in a || (a = {}))
    g.call(a, s) && o(i, s, a[s]);
  if (e)
    for (var s of e(a))
      p.call(a, s) && o(i, s, a[s]);
  return i;
}, n = (i, a) => m(i, f(a));
import c, { forwardRef as l } from "react";
import M from "../lib/IconBase.mjs";
import y from "../defs/MagnifyingGlassMinus.mjs";
const d = l((i, a) => /* @__PURE__ */ c.createElement(M, n(r({ ref: a }, i), { weights: y })));
d.displayName = "MagnifyingGlassMinus";
export {
  d as MagnifyingGlassMinus
};
