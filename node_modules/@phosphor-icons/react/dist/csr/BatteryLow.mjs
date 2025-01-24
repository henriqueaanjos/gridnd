var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var a = (e, t, o) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, m = (e, t) => {
  for (var o in t || (t = {}))
    c.call(t, o) && a(e, o, t[o]);
  if (r)
    for (var o of r(t))
      w.call(t, o) && a(e, o, t[o]);
  return e;
}, f = (e, t) => p(e, s(t));
import n, { forwardRef as y } from "react";
import B from "../lib/IconBase.mjs";
import d from "../defs/BatteryLow.mjs";
const l = y((e, t) => /* @__PURE__ */ n.createElement(B, f(m({ ref: t }, e), { weights: d })));
l.displayName = "BatteryLow";
export {
  l as BatteryLow
};
