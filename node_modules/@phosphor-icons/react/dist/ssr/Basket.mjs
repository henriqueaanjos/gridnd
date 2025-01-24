var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, B = Object.prototype.propertyIsEnumerable;
var o = (t, e, r) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m = (t, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && o(t, r, e[r]);
  if (a)
    for (var r of a(e))
      B.call(e, r) && o(t, r, e[r]);
  return t;
}, s = (t, e) => i(t, p(e));
import R, { forwardRef as d } from "react";
import k from "../lib/SSRBase.mjs";
import l from "../defs/Basket.mjs";
const n = d((t, e) => /* @__PURE__ */ R.createElement(k, s(m({ ref: e }, t), { weights: l })));
n.displayName = "Basket";
export {
  n as Basket
};
