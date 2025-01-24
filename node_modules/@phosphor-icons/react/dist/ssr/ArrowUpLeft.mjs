var p = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? p(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    w.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      c.call(r, o) && m(e, o, r[o]);
  return e;
}, f = (e, r) => i(e, s(r));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/ArrowUpLeft.mjs";
const A = d((e, r) => /* @__PURE__ */ R.createElement(l, f(a({ ref: r }, e), { weights: n })));
A.displayName = "ArrowUpLeft";
export {
  A as ArrowUpLeft
};
