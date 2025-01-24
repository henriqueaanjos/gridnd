var p = Object.defineProperty, l = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var i = (r, e, t) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, o = (r, e) => {
  for (var t in e || (e = {}))
    f.call(e, t) && i(r, t, e[t]);
  if (a)
    for (var t of a(e))
      s.call(e, t) && i(r, t, e[t]);
  return r;
}, m = (r, e) => l(r, c(e));
import R, { forwardRef as d } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/FlipVertical.mjs";
const F = d((r, e) => /* @__PURE__ */ R.createElement(n, m(o({ ref: e }, r), { weights: w })));
F.displayName = "FlipVertical";
export {
  F as FlipVertical
};
