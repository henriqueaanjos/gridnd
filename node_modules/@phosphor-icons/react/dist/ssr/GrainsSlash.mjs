var i = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var s = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, t = (a, r) => {
  for (var e in r || (r = {}))
    l.call(r, e) && s(a, e, r[e]);
  if (o)
    for (var e of o(r))
      n.call(r, e) && s(a, e, r[e]);
  return a;
}, m = (a, r) => f(a, p(r));
import S, { forwardRef as c } from "react";
import h from "../lib/SSRBase.mjs";
import R from "../defs/GrainsSlash.mjs";
const d = c((a, r) => /* @__PURE__ */ S.createElement(h, m(t({ ref: r }, a), { weights: R })));
d.displayName = "GrainsSlash";
export {
  d as GrainsSlash
};
