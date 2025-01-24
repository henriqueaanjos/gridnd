var n = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var i = (t, r, e) => r in t ? n(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, o = (t, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && i(t, e, r[e]);
  if (a)
    for (var e of a(r))
      s.call(r, e) && i(t, e, r[e]);
  return t;
}, m = (t, r) => c(t, f(r));
import l, { forwardRef as g } from "react";
import y from "../lib/SSRBase.mjs";
import B from "../defs/BatteryWarningVertical.mjs";
const R = g((t, r) => /* @__PURE__ */ l.createElement(y, m(o({ ref: r }, t), { weights: B })));
R.displayName = "BatteryWarningVertical";
export {
  R as BatteryWarningVertical
};
