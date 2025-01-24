var i = Object.defineProperty, c = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      s.call(e, t) && a(r, t, e[t]);
  return r;
}, f = (r, e) => c(r, l(e));
import C, { forwardRef as n } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/CaretCircleDoubleLeft.mjs";
const u = n((r, e) => /* @__PURE__ */ C.createElement(b, f(m({ ref: e }, r), { weights: d })));
u.displayName = "CaretCircleDoubleLeft";
export {
  u as CaretCircleDoubleLeft
};
