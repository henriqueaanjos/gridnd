var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var f = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, t = (o, e) => {
  for (var r in e || (e = {}))
    n.call(e, r) && f(o, r, e[r]);
  if (a)
    for (var r of a(e))
      c.call(e, r) && f(o, r, e[r]);
  return o;
}, m = (o, e) => p(o, s(e));
import B, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/CoffeeBean.mjs";
const w = R((o, e) => /* @__PURE__ */ B.createElement(d, m(t({ ref: e }, o), { weights: l })));
w.displayName = "CoffeeBean";
export {
  w as CoffeeBean
};
