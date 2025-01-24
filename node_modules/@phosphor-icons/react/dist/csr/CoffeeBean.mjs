var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var f = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, t = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && f(o, r, e[r]);
  if (a)
    for (var r of a(e))
      c.call(e, r) && f(o, r, e[r]);
  return o;
}, m = (o, e) => n(o, p(e));
import B, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/CoffeeBean.mjs";
const C = d((o, e) => /* @__PURE__ */ B.createElement(l, m(t({ ref: e }, o), { weights: w })));
C.displayName = "CoffeeBean";
export {
  C as CoffeeBean
};
