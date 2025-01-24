var l = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? l(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, i = (r, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      s.call(e, t) && a(r, t, e[t]);
  return r;
}, m = (r, e) => c(r, f(e));
import R, { forwardRef as C } from "react";
import g from "../lib/SSRBase.mjs";
import h from "../defs/CaretCircleDoubleRight.mjs";
const b = C((r, e) => /* @__PURE__ */ R.createElement(g, m(i({ ref: e }, r), { weights: h })));
b.displayName = "CaretCircleDoubleRight";
export {
  b as CaretCircleDoubleRight
};
