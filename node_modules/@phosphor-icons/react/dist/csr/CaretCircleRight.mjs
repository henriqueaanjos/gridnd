var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, i = (r, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      l.call(e, t) && a(r, t, e[t]);
  return r;
}, m = (r, e) => f(r, p(e));
import C, { forwardRef as R } from "react";
import g from "../lib/IconBase.mjs";
import h from "../defs/CaretCircleRight.mjs";
const n = R((r, e) => /* @__PURE__ */ C.createElement(g, m(i({ ref: e }, r), { weights: h })));
n.displayName = "CaretCircleRight";
export {
  n as CaretCircleRight
};
