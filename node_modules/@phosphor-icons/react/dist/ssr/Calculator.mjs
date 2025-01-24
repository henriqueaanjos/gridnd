var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var e = (a, r, o) => r in a ? c(a, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[r] = o, m = (a, r) => {
  for (var o in r || (r = {}))
    p.call(r, o) && e(a, o, r[o]);
  if (t)
    for (var o of t(r))
      s.call(r, o) && e(a, o, r[o]);
  return a;
}, l = (a, r) => f(a, i(r));
import R, { forwardRef as d } from "react";
import n from "../lib/SSRBase.mjs";
import u from "../defs/Calculator.mjs";
const w = d((a, r) => /* @__PURE__ */ R.createElement(n, l(m({ ref: r }, a), { weights: u })));
w.displayName = "Calculator";
export {
  w as Calculator
};
