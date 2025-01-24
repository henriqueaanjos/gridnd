var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (t, e, r) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m = (t, e) => {
  for (var r in e || (e = {}))
    R.call(e, r) && a(t, r, e[r]);
  if (o)
    for (var r of o(e))
      l.call(e, r) && a(t, r, e[r]);
  return t;
}, i = (t, e) => p(t, s(e));
import c, { forwardRef as g } from "react";
import h from "../lib/SSRBase.mjs";
import b from "../defs/CaretDoubleRight.mjs";
const d = g((t, e) => /* @__PURE__ */ c.createElement(h, i(m({ ref: e }, t), { weights: b })));
d.displayName = "CaretDoubleRight";
export {
  d as CaretDoubleRight
};
