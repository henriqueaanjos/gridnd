var f = Object.defineProperty, g = Object.defineProperties;
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
}, i = (o, e) => g(o, n(e));
import c, { forwardRef as y } from "react";
import B from "../lib/IconBase.mjs";
import d from "../defs/PiggyBank.mjs";
const k = y((o, e) => /* @__PURE__ */ c.createElement(B, i(m({ ref: e }, o), { weights: d })));
k.displayName = "PiggyBank";
export {
  k as PiggyBank
};
