var f = Object.defineProperty, g = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var o = (t, r, e) => r in t ? f(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, m = (t, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && o(t, e, r[e]);
  if (a)
    for (var e of a(r))
      s.call(r, e) && o(t, e, r[e]);
  return t;
}, i = (t, r) => g(t, n(r));
import c, { forwardRef as h } from "react";
import y from "../lib/IconBase.mjs";
import B from "../defs/BatteryCharging.mjs";
const d = h((t, r) => /* @__PURE__ */ c.createElement(y, i(m({ ref: r }, t), { weights: B })));
d.displayName = "BatteryCharging";
export {
  d as BatteryCharging
};
