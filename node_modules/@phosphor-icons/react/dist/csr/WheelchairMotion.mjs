var c = Object.defineProperty, f = Object.defineProperties;
var h = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? c(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, i = (o, e) => {
  for (var r in e || (e = {}))
    n.call(e, r) && a(o, r, e[r]);
  if (t)
    for (var r of t(e))
      p.call(e, r) && a(o, r, e[r]);
  return o;
}, m = (o, e) => f(o, h(e));
import s, { forwardRef as l } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/WheelchairMotion.mjs";
const I = l((o, e) => /* @__PURE__ */ s.createElement(d, m(i({ ref: e }, o), { weights: w })));
I.displayName = "WheelchairMotion";
export {
  I as WheelchairMotion
};
