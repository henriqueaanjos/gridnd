var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && a(o, r, e[r]);
  if (t)
    for (var r of t(e))
      n.call(e, r) && a(o, r, e[r]);
  return o;
}, f = (o, e) => p(o, s(e));
import w, { forwardRef as D } from "react";
import c from "../lib/SSRBase.mjs";
import R from "../defs/CaretDoubleDown.mjs";
const b = D((o, e) => /* @__PURE__ */ w.createElement(c, f(m({ ref: e }, o), { weights: R })));
b.displayName = "CaretDoubleDown";
export {
  b as CaretDoubleDown
};
