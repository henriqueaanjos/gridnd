var c = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? c(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    n.call(e, r) && a(o, r, e[r]);
  if (t)
    for (var r of t(e))
      p.call(e, r) && a(o, r, e[r]);
  return o;
}, i = (o, e) => l(o, f(e));
import s, { forwardRef as w } from "react";
import C from "../lib/IconBase.mjs";
import D from "../defs/CaretCircleDoubleDown.mjs";
const b = w((o, e) => /* @__PURE__ */ s.createElement(C, i(m({ ref: e }, o), { weights: D })));
b.displayName = "CaretCircleDoubleDown";
export {
  b as CaretCircleDoubleDown
};
