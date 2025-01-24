var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (t, e, r) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, o = (t, e) => {
  for (var r in e || (e = {}))
    d.call(e, r) && a(t, r, e[r]);
  if (m)
    for (var r of m(e))
      c.call(e, r) && a(t, r, e[r]);
  return t;
}, i = (t, e) => p(t, s(e));
import y, { forwardRef as B } from "react";
import R from "../lib/SSRBase.mjs";
import l from "../defs/BatteryMedium.mjs";
const n = B((t, e) => /* @__PURE__ */ y.createElement(R, i(o({ ref: e }, t), { weights: l })));
n.displayName = "BatteryMedium";
export {
  n as BatteryMedium
};
