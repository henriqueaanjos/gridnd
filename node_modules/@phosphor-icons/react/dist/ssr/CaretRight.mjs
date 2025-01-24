var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    R.call(t, r) && o(e, r, t[r]);
  if (a)
    for (var r of a(t))
      c.call(t, r) && o(e, r, t[r]);
  return e;
}, i = (e, t) => p(e, s(t));
import g, { forwardRef as h } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/CaretRight.mjs";
const n = h((e, t) => /* @__PURE__ */ g.createElement(d, i(m({ ref: t }, e), { weights: l })));
n.displayName = "CaretRight";
export {
  n as CaretRight
};
