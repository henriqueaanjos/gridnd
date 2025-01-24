var i = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var s = (e, t, r) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    l.call(t, r) && s(e, r, t[r]);
  if (o)
    for (var r of o(t))
      c.call(t, r) && s(e, r, t[r]);
  return e;
}, a = (e, t) => f(e, p(t));
import R, { forwardRef as d } from "react";
import n from "../lib/SSRBase.mjs";
import u from "../defs/ListPlus.mjs";
const w = d((e, t) => /* @__PURE__ */ R.createElement(n, a(m({ ref: t }, e), { weights: u })));
w.displayName = "ListPlus";
export {
  w as ListPlus
};
