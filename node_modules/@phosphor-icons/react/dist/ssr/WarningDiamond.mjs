var n = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, r, o) => r in a ? n(a, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[r] = o, i = (a, r) => {
  for (var o in r || (r = {}))
    s.call(r, o) && m(a, o, r[o]);
  if (e)
    for (var o of e(r))
      d.call(r, o) && m(a, o, r[o]);
  return a;
}, t = (a, r) => f(a, p(r));
import c, { forwardRef as g } from "react";
import R from "../lib/SSRBase.mjs";
import l from "../defs/WarningDiamond.mjs";
const w = g((a, r) => /* @__PURE__ */ c.createElement(R, t(i({ ref: r }, a), { weights: l })));
w.displayName = "WarningDiamond";
export {
  w as WarningDiamond
};
