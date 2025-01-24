var p = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? p(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    R.call(o, r) && t(e, r, o[r]);
  if (s)
    for (var r of s(o))
      l.call(o, r) && t(e, r, o[r]);
  return e;
}, a = (e, o) => f(e, i(o));
import w, { forwardRef as c } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/RowsPlusTop.mjs";
const u = c((e, o) => /* @__PURE__ */ w.createElement(d, a(m({ ref: o }, e), { weights: n })));
u.displayName = "RowsPlusTop";
export {
  u as RowsPlusTop
};
