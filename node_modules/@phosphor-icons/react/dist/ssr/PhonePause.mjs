var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, P = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    n.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      P.call(e, r) && t(o, r, e[r]);
  return o;
}, s = (o, e) => i(o, p(e));
import c, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/PhonePause.mjs";
const l = h((o, e) => /* @__PURE__ */ c.createElement(R, s(m({ ref: e }, o), { weights: d })));
l.displayName = "PhonePause";
export {
  l as PhonePause
};
