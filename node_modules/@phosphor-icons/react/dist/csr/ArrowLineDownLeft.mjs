var i = Object.defineProperty, n = Object.defineProperties;
var w = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      s.call(e, r) && m(o, r, e[r]);
  return o;
}, f = (o, e) => n(o, w(e));
import c, { forwardRef as L } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/ArrowLineDownLeft.mjs";
const A = L((o, e) => /* @__PURE__ */ c.createElement(d, f(a({ ref: e }, o), { weights: l })));
A.displayName = "ArrowLineDownLeft";
export {
  A as ArrowLineDownLeft
};
