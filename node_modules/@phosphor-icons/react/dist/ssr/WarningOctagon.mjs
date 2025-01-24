var i = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var e = (a, r, o) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[r] = o, m = (a, r) => {
  for (var o in r || (r = {}))
    g.call(r, o) && e(a, o, r[o]);
  if (t)
    for (var o of t(r))
      p.call(r, o) && e(a, o, r[o]);
  return a;
}, n = (a, r) => c(a, f(r));
import s, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/WarningOctagon.mjs";
const w = R((a, r) => /* @__PURE__ */ s.createElement(d, n(m({ ref: r }, a), { weights: l })));
w.displayName = "WarningOctagon";
export {
  w as WarningOctagon
};
