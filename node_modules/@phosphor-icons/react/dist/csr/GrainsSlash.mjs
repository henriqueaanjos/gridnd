var i = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var s = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, t = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && s(a, e, r[e]);
  if (o)
    for (var e of o(r))
      c.call(r, e) && s(a, e, r[e]);
  return a;
}, m = (a, r) => f(a, n(r));
import l, { forwardRef as h } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/GrainsSlash.mjs";
const G = h((a, r) => /* @__PURE__ */ l.createElement(d, m(t({ ref: r }, a), { weights: w })));
G.displayName = "GrainsSlash";
export {
  G as GrainsSlash
};
