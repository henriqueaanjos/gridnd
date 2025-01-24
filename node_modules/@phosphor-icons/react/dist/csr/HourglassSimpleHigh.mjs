var t = Object.defineProperty, p = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? t(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, i = (o, e) => {
  for (var r in e || (e = {}))
    f.call(e, r) && a(o, r, e[r]);
  if (m)
    for (var r of m(e))
      g.call(e, r) && a(o, r, e[r]);
  return o;
}, s = (o, e) => p(o, l(e));
import c, { forwardRef as H } from "react";
import h from "../lib/IconBase.mjs";
import n from "../defs/HourglassSimpleHigh.mjs";
const d = H((o, e) => /* @__PURE__ */ c.createElement(h, s(i({ ref: e }, o), { weights: n })));
d.displayName = "HourglassSimpleHigh";
export {
  d as HourglassSimpleHigh
};
