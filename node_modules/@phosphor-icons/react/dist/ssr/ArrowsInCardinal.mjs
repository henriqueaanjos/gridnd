var s = Object.defineProperty, n = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (a, r, o) => r in a ? s(a, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[r] = o, m = (a, r) => {
  for (var o in r || (r = {}))
    p.call(r, o) && t(a, o, r[o]);
  if (e)
    for (var o of e(r))
      d.call(r, o) && t(a, o, r[o]);
  return a;
}, i = (a, r) => n(a, f(r));
import l, { forwardRef as w } from "react";
import c from "../lib/SSRBase.mjs";
import I from "../defs/ArrowsInCardinal.mjs";
const R = w((a, r) => /* @__PURE__ */ l.createElement(c, i(m({ ref: r }, a), { weights: I })));
R.displayName = "ArrowsInCardinal";
export {
  R as ArrowsInCardinal
};
