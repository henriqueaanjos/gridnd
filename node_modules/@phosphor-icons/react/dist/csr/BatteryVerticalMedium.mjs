var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (t, e, r) => e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, o = (t, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && m(t, r, e[r]);
  if (a)
    for (var r of a(e))
      d.call(e, r) && m(t, r, e[r]);
  return t;
}, i = (t, e) => f(t, p(e));
import l, { forwardRef as n } from "react";
import y from "../lib/IconBase.mjs";
import B from "../defs/BatteryVerticalMedium.mjs";
const u = n((t, e) => /* @__PURE__ */ l.createElement(y, i(o({ ref: e }, t), { weights: B })));
u.displayName = "BatteryVerticalMedium";
export {
  u as BatteryVerticalMedium
};
