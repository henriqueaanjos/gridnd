var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (t, r, e) => r in t ? f(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, m = (t, r) => {
  for (var e in r || (r = {}))
    S.call(r, e) && o(t, e, r[e]);
  if (a)
    for (var e of a(r))
      c.call(r, e) && o(t, e, r[e]);
  return t;
}, i = (t, r) => p(t, s(r));
import g, { forwardRef as h } from "react";
import B from "../lib/SSRBase.mjs";
import R from "../defs/HeartStraightBreak.mjs";
const d = h((t, r) => /* @__PURE__ */ g.createElement(B, i(m({ ref: r }, t), { weights: R })));
d.displayName = "HeartStraightBreak";
export {
  d as HeartStraightBreak
};
