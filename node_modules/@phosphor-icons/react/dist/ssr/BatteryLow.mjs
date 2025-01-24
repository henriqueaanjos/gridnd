var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (e, t, r) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    w.call(t, r) && a(e, r, t[r]);
  if (o)
    for (var r of o(t))
      c.call(t, r) && a(e, r, t[r]);
  return e;
}, f = (e, t) => p(e, s(t));
import y, { forwardRef as B } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/BatteryLow.mjs";
const l = B((e, t) => /* @__PURE__ */ y.createElement(R, f(m({ ref: t }, e), { weights: d })));
l.displayName = "BatteryLow";
export {
  l as BatteryLow
};
