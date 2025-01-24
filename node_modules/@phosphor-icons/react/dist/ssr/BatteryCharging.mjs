var f = Object.defineProperty, g = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var o = (t, r, e) => r in t ? f(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, m = (t, r) => {
  for (var e in r || (r = {}))
    s.call(r, e) && o(t, e, r[e]);
  if (a)
    for (var e of a(r))
      n.call(r, e) && o(t, e, r[e]);
  return t;
}, i = (t, r) => g(t, p(r));
import c, { forwardRef as h } from "react";
import y from "../lib/SSRBase.mjs";
import B from "../defs/BatteryCharging.mjs";
const R = h((t, r) => /* @__PURE__ */ c.createElement(y, i(m({ ref: r }, t), { weights: B })));
R.displayName = "BatteryCharging";
export {
  R as BatteryCharging
};
