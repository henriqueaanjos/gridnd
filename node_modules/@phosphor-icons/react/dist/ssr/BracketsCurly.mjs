var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (e, r, t) => r in e ? c(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, m = (e, r) => {
  for (var t in r || (r = {}))
    p.call(r, t) && o(e, t, r[t]);
  if (a)
    for (var t of a(r))
      l.call(r, t) && o(e, t, r[t]);
  return e;
}, s = (e, r) => f(e, i(r));
import y, { forwardRef as B } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/BracketsCurly.mjs";
const k = B((e, r) => /* @__PURE__ */ y.createElement(R, s(m({ ref: r }, e), { weights: d })));
k.displayName = "BracketsCurly";
export {
  k as BracketsCurly
};
