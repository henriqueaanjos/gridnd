var f = Object.defineProperty, g = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && t(o, r, e[r]);
  if (s)
    for (var r of s(e))
      n.call(e, r) && t(o, r, e[r]);
  return o;
}, a = (o, e) => g(o, i(e));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/MessengerLogo.mjs";
const w = R((o, e) => /* @__PURE__ */ c.createElement(d, a(m({ ref: e }, o), { weights: l })));
w.displayName = "MessengerLogo";
export {
  w as MessengerLogo
};
