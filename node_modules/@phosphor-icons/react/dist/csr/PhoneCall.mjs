var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      s.call(e, r) && t(o, r, e[r]);
  return o;
}, l = (o, e) => i(o, n(e));
import c, { forwardRef as h } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/PhoneCall.mjs";
const C = h((o, e) => /* @__PURE__ */ c.createElement(d, l(m({ ref: e }, o), { weights: w })));
C.displayName = "PhoneCall";
export {
  C as PhoneCall
};
