var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && a(o, r, e[r]);
  if (t)
    for (var r of t(e))
      c.call(e, r) && a(o, r, e[r]);
  return o;
}, f = (o, e) => n(o, p(e));
import l, { forwardRef as w } from "react";
import D from "../lib/IconBase.mjs";
import b from "../defs/CaretDoubleDown.mjs";
const d = w((o, e) => /* @__PURE__ */ l.createElement(D, f(m({ ref: e }, o), { weights: b })));
d.displayName = "CaretDoubleDown";
export {
  d as CaretDoubleDown
};
