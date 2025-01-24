var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    s.call(t, r) && o(e, r, t[r]);
  if (a)
    for (var r of a(t))
      h.call(t, r) && o(e, r, t[r]);
  return e;
}, c = (e, t) => i(e, p(t));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Watch.mjs";
const w = d((e, t) => /* @__PURE__ */ R.createElement(l, c(m({ ref: t }, e), { weights: n })));
w.displayName = "Watch";
export {
  w as Watch
};
