var s = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, l = (r, e) => {
  for (var a in e || (e = {}))
    p.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      S.call(e, a) && t(r, a, e[a]);
  return r;
}, m = (r, e) => f(r, i(e));
import c, { forwardRef as h } from "react";
import B from "../lib/SSRBase.mjs";
import R from "../defs/BellSlash.mjs";
const d = h((r, e) => /* @__PURE__ */ c.createElement(B, m(l({ ref: e }, r), { weights: R })));
d.displayName = "BellSlash";
export {
  d as BellSlash
};
