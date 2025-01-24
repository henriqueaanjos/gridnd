var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && t(o, r, e[r]);
  if (i)
    for (var r of i(e))
      d.call(e, r) && t(o, r, e[r]);
  return o;
}, a = (o, e) => p(o, s(e));
import n, { forwardRef as l } from "react";
import v from "../lib/IconBase.mjs";
import w from "../defs/Divide.mjs";
const D = l((o, e) => /* @__PURE__ */ n.createElement(v, a(m({ ref: e }, o), { weights: w })));
D.displayName = "Divide";
export {
  D as Divide
};
