var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var i = (r, e, t) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, o = (r, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && i(r, t, e[t]);
  if (a)
    for (var t of a(e))
      R.call(e, t) && i(r, t, e[t]);
  return r;
}, m = (r, e) => f(r, p(e));
import l, { forwardRef as C } from "react";
import g from "../lib/SSRBase.mjs";
import h from "../defs/CaretCircleRight.mjs";
const d = C((r, e) => /* @__PURE__ */ l.createElement(g, m(o({ ref: e }, r), { weights: h })));
d.displayName = "CaretCircleRight";
export {
  d as CaretCircleRight
};
