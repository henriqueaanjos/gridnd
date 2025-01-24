var m = Object.defineProperty, c = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var f = (a, r, e) => r in a ? m(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, i = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && f(a, e, r[e]);
  if (o)
    for (var e of o(r))
      s.call(r, e) && f(a, e, r[e]);
  return a;
}, t = (a, r) => c(a, n(r));
import l, { forwardRef as g } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/TrafficSignal.mjs";
const I = g((a, r) => /* @__PURE__ */ l.createElement(d, t(i({ ref: r }, a), { weights: w })));
I.displayName = "TrafficSignal";
export {
  I as TrafficSignal
};
