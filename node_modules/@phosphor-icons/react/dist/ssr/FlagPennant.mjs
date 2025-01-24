var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, e, t) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t, m = (a, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && o(a, t, e[t]);
  if (r)
    for (var t of r(e))
      l.call(e, t) && o(a, t, e[t]);
  return a;
}, n = (a, e) => i(a, p(e));
import c, { forwardRef as g } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/FlagPennant.mjs";
const w = g((a, e) => /* @__PURE__ */ c.createElement(R, n(m({ ref: e }, a), { weights: d })));
w.displayName = "FlagPennant";
export {
  w as FlagPennant
};
