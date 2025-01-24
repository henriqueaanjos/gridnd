var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      c.call(e, r) && t(o, r, e[r]);
  return o;
}, s = (o, e) => i(o, n(e));
import P, { forwardRef as h } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/PhonePause.mjs";
const u = h((o, e) => /* @__PURE__ */ P.createElement(d, s(m({ ref: e }, o), { weights: l })));
u.displayName = "PhonePause";
export {
  u as PhonePause
};
