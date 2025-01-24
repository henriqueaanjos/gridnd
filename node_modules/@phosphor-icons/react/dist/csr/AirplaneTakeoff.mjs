var i = Object.defineProperty, p = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var f = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, t = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && f(o, r, e[r]);
  if (a)
    for (var r of a(e))
      c.call(e, r) && f(o, r, e[r]);
  return o;
}, m = (o, e) => p(o, n(e));
import l, { forwardRef as d } from "react";
import k from "../lib/IconBase.mjs";
import w from "../defs/AirplaneTakeoff.mjs";
const A = d((o, e) => /* @__PURE__ */ l.createElement(k, m(t({ ref: e }, o), { weights: w })));
A.displayName = "AirplaneTakeoff";
export {
  A as AirplaneTakeoff
};
