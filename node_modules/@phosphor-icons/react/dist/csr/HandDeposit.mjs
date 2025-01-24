var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (o, e, t) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, m = (o, e) => {
  for (var t in e || (e = {}))
    n.call(e, t) && a(o, t, e[t]);
  if (r)
    for (var t of r(e))
      c.call(e, t) && a(o, t, e[t]);
  return o;
}, i = (o, e) => s(o, f(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import D from "../defs/HandDeposit.mjs";
const H = l((o, e) => /* @__PURE__ */ d.createElement(w, i(m({ ref: e }, o), { weights: D })));
H.displayName = "HandDeposit";
export {
  H as HandDeposit
};
