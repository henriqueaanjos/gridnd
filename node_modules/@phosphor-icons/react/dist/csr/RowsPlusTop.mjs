var p = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? p(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    c.call(o, r) && t(e, r, o[r]);
  if (s)
    for (var r of s(o))
      l.call(o, r) && t(e, r, o[r]);
  return e;
}, a = (e, o) => f(e, i(o));
import w, { forwardRef as R } from "react";
import n from "../lib/IconBase.mjs";
import d from "../defs/RowsPlusTop.mjs";
const u = R((e, o) => /* @__PURE__ */ w.createElement(n, a(m({ ref: o }, e), { weights: d })));
u.displayName = "RowsPlusTop";
export {
  u as RowsPlusTop
};
