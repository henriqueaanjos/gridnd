var c = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, i = (r, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      s.call(e, t) && a(r, t, e[t]);
  return r;
}, m = (r, e) => l(r, f(e));
import C, { forwardRef as R } from "react";
import g from "../lib/IconBase.mjs";
import h from "../defs/CaretCircleDoubleRight.mjs";
const n = R((r, e) => /* @__PURE__ */ C.createElement(g, m(i({ ref: e }, r), { weights: h })));
n.displayName = "CaretCircleDoubleRight";
export {
  n as CaretCircleDoubleRight
};
