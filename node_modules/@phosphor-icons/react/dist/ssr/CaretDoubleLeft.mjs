var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (t, e, r) => e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m = (t, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && a(t, r, e[r]);
  if (o)
    for (var r of o(e))
      c.call(e, r) && a(t, r, e[r]);
  return t;
}, f = (t, e) => p(t, s(e));
import R, { forwardRef as b } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/CaretDoubleLeft.mjs";
const u = b((t, e) => /* @__PURE__ */ R.createElement(d, f(m({ ref: e }, t), { weights: n })));
u.displayName = "CaretDoubleLeft";
export {
  u as CaretDoubleLeft
};
