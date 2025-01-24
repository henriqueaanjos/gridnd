var f = Object.defineProperty, g = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    n.call(e, r) && t(o, r, e[r]);
  if (s)
    for (var r of s(e))
      p.call(e, r) && t(o, r, e[r]);
  return o;
}, a = (o, e) => g(o, i(e));
import c, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/MessengerLogo.mjs";
const I = d((o, e) => /* @__PURE__ */ c.createElement(l, a(m({ ref: e }, o), { weights: w })));
I.displayName = "MessengerLogo";
export {
  I as MessengerLogo
};
