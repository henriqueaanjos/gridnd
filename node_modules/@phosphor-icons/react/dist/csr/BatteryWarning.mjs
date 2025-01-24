var n = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (t, r, e) => r in t ? n(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, m = (t, r) => {
  for (var e in r || (r = {}))
    s.call(r, e) && o(t, e, r[e]);
  if (a)
    for (var e of a(r))
      c.call(r, e) && o(t, e, r[e]);
  return t;
}, i = (t, r) => f(t, p(r));
import g, { forwardRef as y } from "react";
import B from "../lib/IconBase.mjs";
import d from "../defs/BatteryWarning.mjs";
const l = y((t, r) => /* @__PURE__ */ g.createElement(B, i(m({ ref: r }, t), { weights: d })));
l.displayName = "BatteryWarning";
export {
  l as BatteryWarning
};
