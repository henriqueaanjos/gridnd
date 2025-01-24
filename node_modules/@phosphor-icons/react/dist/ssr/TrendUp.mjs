var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    d.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      n.call(e, o) && m(r, o, e[o]);
  return r;
}, p = (r, e) => i(r, s(e));
import c, { forwardRef as R } from "react";
import l from "../lib/SSRBase.mjs";
import w from "../defs/TrendUp.mjs";
const S = R((r, e) => /* @__PURE__ */ c.createElement(l, p(a({ ref: e }, r), { weights: w })));
S.displayName = "TrendUp";
export {
  S as TrendUp
};
