var c = Object.defineProperty, f = Object.defineProperties;
var h = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? c(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, i = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && a(o, r, e[r]);
  if (t)
    for (var r of t(e))
      s.call(e, r) && a(o, r, e[r]);
  return o;
}, m = (o, e) => f(o, h(e));
import l, { forwardRef as n } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/WheelchairMotion.mjs";
const w = n((o, e) => /* @__PURE__ */ l.createElement(R, m(i({ ref: e }, o), { weights: d })));
w.displayName = "WheelchairMotion";
export {
  w as WheelchairMotion
};
