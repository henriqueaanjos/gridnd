var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (m, e, r) => e in m ? i(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, t = (m, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && o(m, r, e[r]);
  if (a)
    for (var r of a(e))
      c.call(e, r) && o(m, r, e[r]);
  return m;
}, f = (m, e) => p(m, s(e));
import R, { forwardRef as d } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/Flame.mjs";
const F = d((m, e) => /* @__PURE__ */ R.createElement(n, f(t({ ref: e }, m), { weights: w })));
F.displayName = "Flame";
export {
  F as Flame
};
