var l = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? l(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    i.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      p.call(o, r) && m(e, r, o[r]);
  return e;
}, s = (e, o) => c(e, f(o));
import S, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/MouseScroll.mjs";
const u = R((e, o) => /* @__PURE__ */ S.createElement(d, s(a({ ref: o }, e), { weights: n })));
u.displayName = "MouseScroll";
export {
  u as MouseScroll
};
