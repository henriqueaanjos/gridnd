var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (o, e, t) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, m = (o, e) => {
  for (var t in e || (e = {}))
    d.call(e, t) && a(o, t, e[t]);
  if (r)
    for (var t of r(e))
      n.call(e, t) && a(o, t, e[t]);
  return o;
}, i = (o, e) => s(o, f(e));
import c, { forwardRef as R } from "react";
import l from "../lib/SSRBase.mjs";
import w from "../defs/HandDeposit.mjs";
const D = R((o, e) => /* @__PURE__ */ c.createElement(l, i(m({ ref: e }, o), { weights: w })));
D.displayName = "HandDeposit";
export {
  D as HandDeposit
};
