var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var o = (t, e, r) => e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m = (t, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && o(t, r, e[r]);
  if (a)
    for (var r of a(e))
      R.call(e, r) && o(t, r, e[r]);
  return t;
}, f = (t, e) => p(t, s(e));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/CaretLeft.mjs";
const C = l((t, e) => /* @__PURE__ */ d.createElement(n, f(m({ ref: e }, t), { weights: w })));
C.displayName = "CaretLeft";
export {
  C as CaretLeft
};
