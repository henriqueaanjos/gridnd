var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var t = (a, r, e) => r in a ? f(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, m = (a, r) => {
  for (var e in r || (r = {}))
    l.call(r, e) && t(a, e, r[e]);
  if (o)
    for (var e of o(r))
      S.call(r, e) && t(a, e, r[e]);
  return a;
}, s = (a, r) => i(a, p(r));
import c, { forwardRef as h } from "react";
import E from "../lib/SSRBase.mjs";
import R from "../defs/EarSlash.mjs";
const d = h((a, r) => /* @__PURE__ */ c.createElement(E, s(m({ ref: r }, a), { weights: R })));
d.displayName = "EarSlash";
export {
  d as EarSlash
};
