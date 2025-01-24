var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      l.call(e, r) && t(o, r, e[r]);
  return o;
}, f = (o, e) => p(o, s(e));
import g, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/Flag.mjs";
const F = n((o, e) => /* @__PURE__ */ g.createElement(d, f(m({ ref: e }, o), { weights: w })));
F.displayName = "Flag";
export {
  F as Flag
};
