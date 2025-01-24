var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var y = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, a = (e, t) => {
  for (var r in t || (t = {}))
    y.call(t, r) && o(e, r, t[r]);
  if (m)
    for (var r of m(t))
      c.call(t, r) && o(e, r, t[r]);
  return e;
}, p = (e, t) => i(e, s(t));
import n, { forwardRef as B } from "react";
import E from "../lib/IconBase.mjs";
import d from "../defs/BatteryEmpty.mjs";
const l = B((e, t) => /* @__PURE__ */ n.createElement(E, p(a({ ref: t }, e), { weights: d })));
l.displayName = "BatteryEmpty";
export {
  l as BatteryEmpty
};
