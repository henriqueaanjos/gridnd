var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var o = (t, r, e) => r in t ? f(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, m = (t, r) => {
  for (var e in r || (r = {}))
    c.call(r, e) && o(t, e, r[e]);
  if (a)
    for (var e of a(r))
      g.call(r, e) && o(t, e, r[e]);
  return t;
}, i = (t, r) => p(t, s(r));
import h, { forwardRef as n } from "react";
import B from "../lib/IconBase.mjs";
import d from "../defs/HeartStraightBreak.mjs";
const k = n((t, r) => /* @__PURE__ */ h.createElement(B, i(m({ ref: r }, t), { weights: d })));
k.displayName = "HeartStraightBreak";
export {
  k as HeartStraightBreak
};
