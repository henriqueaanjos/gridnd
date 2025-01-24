var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, z = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      z.call(e, r) && t(o, r, e[r]);
  return o;
}, i = (o, e) => p(o, s(e));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Pizza.mjs";
const I = d((o, e) => /* @__PURE__ */ n.createElement(l, i(m({ ref: e }, o), { weights: w })));
I.displayName = "Pizza";
export {
  I as Pizza
};
