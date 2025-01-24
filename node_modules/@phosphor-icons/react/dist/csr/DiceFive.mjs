var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? c(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && t(o, r, e[r]);
  if (i)
    for (var r of i(e))
      n.call(e, r) && t(o, r, e[r]);
  return o;
}, a = (o, e) => f(o, p(e));
import d, { forwardRef as l } from "react";
import v from "../lib/IconBase.mjs";
import w from "../defs/DiceFive.mjs";
const D = l((o, e) => /* @__PURE__ */ d.createElement(v, a(m({ ref: e }, o), { weights: w })));
D.displayName = "DiceFive";
export {
  D as DiceFive
};
