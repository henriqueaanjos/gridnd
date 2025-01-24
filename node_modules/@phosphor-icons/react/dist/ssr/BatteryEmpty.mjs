var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var y = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (e, t, r) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, o = (e, t) => {
  for (var r in t || (t = {}))
    y.call(t, r) && a(e, r, t[r]);
  if (m)
    for (var r of m(t))
      c.call(t, r) && a(e, r, t[r]);
  return e;
}, p = (e, t) => i(e, s(t));
import B, { forwardRef as E } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/BatteryEmpty.mjs";
const l = E((e, t) => /* @__PURE__ */ B.createElement(R, p(o({ ref: t }, e), { weights: d })));
l.displayName = "BatteryEmpty";
export {
  l as BatteryEmpty
};
