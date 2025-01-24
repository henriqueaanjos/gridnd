var l = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (r, e, o) => e in r ? l(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && a(r, o, e[o]);
  if (t)
    for (var o of t(e))
      s.call(e, o) && a(r, o, e[o]);
  return r;
}, i = (r, e) => c(r, f(e));
import n, { forwardRef as w } from "react";
import C from "../lib/SSRBase.mjs";
import D from "../defs/CaretCircleDoubleDown.mjs";
const R = w((r, e) => /* @__PURE__ */ n.createElement(C, i(m({ ref: e }, r), { weights: D })));
R.displayName = "CaretCircleDoubleDown";
export {
  R as CaretCircleDoubleDown
};
