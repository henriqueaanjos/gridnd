var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, y = Object.prototype.propertyIsEnumerable;
var o = (t, r, e) => r in t ? i(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, m = (t, r) => {
  for (var e in r || (r = {}))
    c.call(r, e) && o(t, e, r[e]);
  if (a)
    for (var e of a(r))
      y.call(r, e) && o(t, e, r[e]);
  return t;
}, f = (t, r) => p(t, s(r));
import B, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/CarBattery.mjs";
const n = R((t, r) => /* @__PURE__ */ B.createElement(d, f(m({ ref: r }, t), { weights: l })));
n.displayName = "CarBattery";
export {
  n as CarBattery
};
