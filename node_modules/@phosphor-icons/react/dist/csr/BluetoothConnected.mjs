var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (o, e, t) => e in o ? c(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && m(o, t, e[t]);
  if (r)
    for (var t of r(e))
      s.call(e, t) && m(o, t, e[t]);
  return o;
}, n = (o, e) => f(o, i(e));
import d, { forwardRef as l } from "react";
import h from "../lib/IconBase.mjs";
import B from "../defs/BluetoothConnected.mjs";
const u = l((o, e) => /* @__PURE__ */ d.createElement(h, n(a({ ref: e }, o), { weights: B })));
u.displayName = "BluetoothConnected";
export {
  u as BluetoothConnected
};
