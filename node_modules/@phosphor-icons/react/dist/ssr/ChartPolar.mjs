var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var e = (a, r, o) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[r] = o, m = (a, r) => {
  for (var o in r || (r = {}))
    l.call(r, o) && e(a, o, r[o]);
  if (t)
    for (var o of t(r))
      c.call(r, o) && e(a, o, r[o]);
  return a;
}, f = (a, r) => p(a, s(r));
import h, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/ChartPolar.mjs";
const w = R((a, r) => /* @__PURE__ */ h.createElement(d, f(m({ ref: r }, a), { weights: n })));
w.displayName = "ChartPolar";
export {
  w as ChartPolar
};
