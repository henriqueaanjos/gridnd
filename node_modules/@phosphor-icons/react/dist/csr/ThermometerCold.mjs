var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && t(o, r, e[r]);
  if (m)
    for (var r of m(e))
      d.call(e, r) && t(o, r, e[r]);
  return o;
}, f = (o, e) => p(o, s(e));
import l, { forwardRef as h } from "react";
import n from "../lib/IconBase.mjs";
import w from "../defs/ThermometerCold.mjs";
const C = h((o, e) => /* @__PURE__ */ l.createElement(n, f(a({ ref: e }, o), { weights: w })));
C.displayName = "ThermometerCold";
export {
  C as ThermometerCold
};
