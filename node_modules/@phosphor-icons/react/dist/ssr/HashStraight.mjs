var s = Object.defineProperty, f = Object.defineProperties;
var h = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var o = (r, t, a) => t in r ? s(r, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[t] = a, m = (r, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && o(r, a, t[a]);
  if (e)
    for (var a of e(t))
      S.call(t, a) && o(r, a, t[a]);
  return r;
}, i = (r, t) => f(r, h(t));
import c, { forwardRef as g } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/HashStraight.mjs";
const l = g((r, t) => /* @__PURE__ */ c.createElement(R, i(m({ ref: t }, r), { weights: d })));
l.displayName = "HashStraight";
export {
  l as HashStraight
};
