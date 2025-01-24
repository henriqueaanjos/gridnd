var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    s.call(t, r) && o(e, r, t[r]);
  if (a)
    for (var r of a(t))
      c.call(t, r) && o(e, r, t[r]);
  return e;
}, l = (e, t) => i(e, p(t));
import y, { forwardRef as B } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/BatteryFull.mjs";
const n = B((e, t) => /* @__PURE__ */ y.createElement(R, l(m({ ref: t }, e), { weights: d })));
n.displayName = "BatteryFull";
export {
  n as BatteryFull
};
