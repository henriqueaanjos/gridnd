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
import x, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/DiceSix.mjs";
const D = d((o, e) => /* @__PURE__ */ x.createElement(l, a(m({ ref: e }, o), { weights: w })));
D.displayName = "DiceSix";
export {
  D as DiceSix
};
