var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, b = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    R.call(t, r) && o(e, r, t[r]);
  if (a)
    for (var r of a(t))
      b.call(t, r) && o(e, r, t[r]);
  return e;
}, i = (e, t) => p(e, s(t));
import c, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Rabbit.mjs";
const w = d((e, t) => /* @__PURE__ */ c.createElement(l, i(m({ ref: t }, e), { weights: n })));
w.displayName = "Rabbit";
export {
  w as Rabbit
};
