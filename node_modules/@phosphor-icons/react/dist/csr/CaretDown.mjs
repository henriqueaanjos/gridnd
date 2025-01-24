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
import w, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import C from "../defs/CaretDown.mjs";
const D = d((o, e) => /* @__PURE__ */ w.createElement(l, f(m({ ref: e }, o), { weights: C })));
D.displayName = "CaretDown";
export {
  D as CaretDown
};
