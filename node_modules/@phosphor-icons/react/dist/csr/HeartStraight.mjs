var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var o = (r, t, e) => t in r ? f(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e, m = (r, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && o(r, e, t[e]);
  if (a)
    for (var e of a(t))
      g.call(t, e) && o(r, e, t[e]);
  return r;
}, i = (r, t) => p(r, s(t));
import h, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/HeartStraight.mjs";
const w = n((r, t) => /* @__PURE__ */ h.createElement(d, i(m({ ref: t }, r), { weights: l })));
w.displayName = "HeartStraight";
export {
  w as HeartStraight
};
