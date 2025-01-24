var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var a = (l, e, m) => e in l ? i(l, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : l[e] = m, o = (l, e) => {
  for (var m in e || (e = {}))
    S.call(e, m) && a(l, m, e[m]);
  if (r)
    for (var m of r(e))
      f.call(e, m) && a(l, m, e[m]);
  return l;
}, t = (l, e) => p(l, s(e));
import c, { forwardRef as h } from "react";
import B from "../lib/SSRBase.mjs";
import R from "../defs/BellSimpleSlash.mjs";
const d = h((l, e) => /* @__PURE__ */ c.createElement(B, t(o({ ref: e }, l), { weights: R })));
d.displayName = "BellSimpleSlash";
export {
  d as BellSimpleSlash
};
