var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var a = (e, t, r) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    c.call(t, r) && a(e, r, t[r]);
  if (o)
    for (var r of o(t))
      R.call(t, r) && a(e, r, t[r]);
  return e;
}, i = (e, t) => p(e, s(t));
import g, { forwardRef as h } from "react";
import n from "../lib/IconBase.mjs";
import d from "../defs/CaretRight.mjs";
const l = h((e, t) => /* @__PURE__ */ g.createElement(n, i(m({ ref: t }, e), { weights: d })));
l.displayName = "CaretRight";
export {
  l as CaretRight
};
