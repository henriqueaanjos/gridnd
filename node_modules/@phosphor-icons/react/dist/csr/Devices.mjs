var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      n.call(e, r) && m(o, r, e[r]);
  return o;
}, i = (o, e) => c(o, f(e));
import d, { forwardRef as l } from "react";
import v from "../lib/IconBase.mjs";
import w from "../defs/Devices.mjs";
const D = l((o, e) => /* @__PURE__ */ d.createElement(v, i(a({ ref: e }, o), { weights: w })));
D.displayName = "Devices";
export {
  D as Devices
};
