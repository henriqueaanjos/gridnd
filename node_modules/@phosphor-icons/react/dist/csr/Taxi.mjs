var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      n.call(e, r) && t(o, r, e[r]);
  return o;
}, i = (o, e) => p(o, s(e));
import x, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Taxi.mjs";
const I = d((o, e) => /* @__PURE__ */ x.createElement(l, i(m({ ref: e }, o), { weights: w })));
I.displayName = "Taxi";
export {
  I as Taxi
};
