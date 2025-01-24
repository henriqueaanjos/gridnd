var p = Object.defineProperty, c = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (e, t, r) => t in e ? p(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, i = (e, t) => {
  for (var r in t || (t = {}))
    f.call(t, r) && a(e, r, t[r]);
  if (o)
    for (var r of o(t))
      s.call(t, r) && a(e, r, t[r]);
  return e;
}, m = (e, t) => c(e, l(t));
import n, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/SplitVertical.mjs";
const R = d((e, t) => /* @__PURE__ */ n.createElement(w, m(i({ ref: t }, e), { weights: I })));
R.displayName = "SplitVertical";
export {
  R as SplitVertical
};
