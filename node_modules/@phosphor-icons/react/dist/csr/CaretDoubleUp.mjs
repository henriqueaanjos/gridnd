var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && a(o, r, e[r]);
  if (t)
    for (var r of t(e))
      l.call(e, r) && a(o, r, e[r]);
  return o;
}, p = (o, e) => i(o, s(e));
import n, { forwardRef as b } from "react";
import d from "../lib/IconBase.mjs";
import u from "../defs/CaretDoubleUp.mjs";
const w = b((o, e) => /* @__PURE__ */ n.createElement(d, p(m({ ref: e }, o), { weights: u })));
w.displayName = "CaretDoubleUp";
export {
  w as CaretDoubleUp
};
