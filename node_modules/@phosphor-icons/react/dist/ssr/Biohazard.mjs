var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (a, r, o) => r in a ? f(a, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[r] = o, m = (a, r) => {
  for (var o in r || (r = {}))
    d.call(r, o) && t(a, o, r[o]);
  if (e)
    for (var o of e(r))
      c.call(r, o) && t(a, o, r[o]);
  return a;
}, i = (a, r) => p(a, s(r));
import h, { forwardRef as B } from "react";
import R from "../lib/SSRBase.mjs";
import l from "../defs/Biohazard.mjs";
const n = B((a, r) => /* @__PURE__ */ h.createElement(R, i(m({ ref: r }, a), { weights: l })));
n.displayName = "Biohazard";
export {
  n as Biohazard
};
