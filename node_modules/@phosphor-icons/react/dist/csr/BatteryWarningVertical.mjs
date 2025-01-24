var n = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var o = (t, r, e) => r in t ? n(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, i = (t, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && o(t, e, r[e]);
  if (a)
    for (var e of a(r))
      s.call(r, e) && o(t, e, r[e]);
  return t;
}, m = (t, r) => c(t, f(r));
import l, { forwardRef as g } from "react";
import y from "../lib/IconBase.mjs";
import B from "../defs/BatteryWarningVertical.mjs";
const d = g((t, r) => /* @__PURE__ */ l.createElement(y, m(i({ ref: r }, t), { weights: B })));
d.displayName = "BatteryWarningVertical";
export {
  d as BatteryWarningVertical
};
