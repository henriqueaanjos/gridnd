var p = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (r, e, o) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && a(r, o, e[o]);
  if (t)
    for (var o of t(e))
      l.call(e, o) && a(r, o, e[o]);
  return r;
}, i = (r, e) => c(r, f(e));
import n, { forwardRef as w } from "react";
import C from "../lib/SSRBase.mjs";
import R from "../defs/CaretCircleUpDown.mjs";
const d = w((r, e) => /* @__PURE__ */ n.createElement(C, i(m({ ref: e }, r), { weights: R })));
d.displayName = "CaretCircleUpDown";
export {
  d as CaretCircleUpDown
};
