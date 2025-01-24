var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var o = (r, t, e) => t in r ? f(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e, m = (r, t) => {
  for (var e in t || (t = {}))
    s.call(t, e) && o(r, e, t[e]);
  if (a)
    for (var e of a(t))
      S.call(t, e) && o(r, e, t[e]);
  return r;
}, c = (r, t) => i(r, p(t));
import R, { forwardRef as b } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Subtract.mjs";
const n = b((r, t) => /* @__PURE__ */ R.createElement(d, c(m({ ref: t }, r), { weights: l })));
n.displayName = "Subtract";
export {
  n as Subtract
};
