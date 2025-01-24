var m = Object.defineProperty, c = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (o, r, t) => r in o ? m(o, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[r] = t, f = (o, r) => {
  for (var t in r || (r = {}))
    s.call(r, t) && a(o, t, r[t]);
  if (e)
    for (var t of e(r))
      l.call(r, t) && a(o, t, r[t]);
  return o;
}, i = (o, r) => c(o, p(r));
import n, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import w from "../defs/AirTrafficControl.mjs";
const A = R((o, r) => /* @__PURE__ */ n.createElement(d, i(f({ ref: r }, o), { weights: w })));
A.displayName = "AirTrafficControl";
export {
  A as AirTrafficControl
};
