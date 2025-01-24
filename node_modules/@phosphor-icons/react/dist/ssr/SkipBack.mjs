var p = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, k = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      k.call(e, a) && t(r, a, e[a]);
  return r;
}, i = (r, e) => c(r, f(e));
import S, { forwardRef as B } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/SkipBack.mjs";
const l = B((r, e) => /* @__PURE__ */ S.createElement(R, i(m({ ref: e }, r), { weights: d })));
l.displayName = "SkipBack";
export {
  l as SkipBack
};
