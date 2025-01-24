var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (r, t, e) => t in r ? f(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e, m = (r, t) => {
  for (var e in t || (t = {}))
    S.call(t, e) && o(r, e, t[e]);
  if (a)
    for (var e of a(t))
      c.call(t, e) && o(r, e, t[e]);
  return r;
}, i = (r, t) => p(r, s(t));
import g, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/HeartStraight.mjs";
const l = h((r, t) => /* @__PURE__ */ g.createElement(R, i(m({ ref: t }, r), { weights: d })));
l.displayName = "HeartStraight";
export {
  l as HeartStraight
};
