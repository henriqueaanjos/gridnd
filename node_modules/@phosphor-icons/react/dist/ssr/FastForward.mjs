var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var e = (a, r, o) => r in a ? f(a, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[r] = o, m = (a, r) => {
  for (var o in r || (r = {}))
    d.call(r, o) && e(a, o, r[o]);
  if (t)
    for (var o of t(r))
      w.call(r, o) && e(a, o, r[o]);
  return a;
}, s = (a, r) => i(a, p(r));
import F, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import l from "../defs/FastForward.mjs";
const n = c((a, r) => /* @__PURE__ */ F.createElement(R, s(m({ ref: r }, a), { weights: l })));
n.displayName = "FastForward";
export {
  n as FastForward
};
