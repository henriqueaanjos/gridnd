var m = Object.defineProperty, c = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var f = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (a, r, e) => r in a ? m(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, o = (a, r) => {
  for (var e in r || (r = {}))
    s.call(r, e) && i(a, e, r[e]);
  if (f)
    for (var e of f(r))
      l.call(r, e) && i(a, e, r[e]);
  return a;
}, t = (a, r) => c(a, p(r));
import n, { forwardRef as S } from "react";
import g from "../lib/SSRBase.mjs";
import R from "../defs/TrafficSignal.mjs";
const d = S((a, r) => /* @__PURE__ */ n.createElement(g, t(o({ ref: r }, a), { weights: R })));
d.displayName = "TrafficSignal";
export {
  d as TrafficSignal
};
