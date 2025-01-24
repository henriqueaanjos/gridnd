var n = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? n(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    p.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      s.call(e, a) && t(r, a, e[a]);
  return r;
}, l = (r, e) => f(r, i(e));
import d, { forwardRef as F } from "react";
import c from "../lib/SSRBase.mjs";
import g from "../defs/FlagBannerFold.mjs";
const B = F((r, e) => /* @__PURE__ */ d.createElement(c, l(m({ ref: e }, r), { weights: g })));
B.displayName = "FlagBannerFold";
export {
  B as FlagBannerFold
};
