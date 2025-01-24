var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var o = (t, e, r) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, a = (t, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && o(t, r, e[r]);
  if (m)
    for (var r of m(e))
      d.call(e, r) && o(t, r, e[r]);
  return t;
}, i = (t, e) => p(t, s(e));
import n, { forwardRef as y } from "react";
import B from "../lib/IconBase.mjs";
import l from "../defs/BatteryMedium.mjs";
const u = y((t, e) => /* @__PURE__ */ n.createElement(B, i(a({ ref: e }, t), { weights: l })));
u.displayName = "BatteryMedium";
export {
  u as BatteryMedium
};
