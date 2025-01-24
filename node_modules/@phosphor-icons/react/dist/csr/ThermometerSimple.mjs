var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (m, e, r) => e in m ? p(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, a = (m, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && t(m, r, e[r]);
  if (o)
    for (var r of o(e))
      l.call(e, r) && t(m, r, e[r]);
  return m;
}, i = (m, e) => f(m, s(e));
import h, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/ThermometerSimple.mjs";
const I = n((m, e) => /* @__PURE__ */ h.createElement(d, i(a({ ref: e }, m), { weights: w })));
I.displayName = "ThermometerSimple";
export {
  I as ThermometerSimple
};
