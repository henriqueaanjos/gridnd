var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && t(o, r, e[r]);
  if (m)
    for (var r of m(e))
      l.call(e, r) && t(o, r, e[r]);
  return o;
}, i = (o, e) => f(o, p(e));
import n, { forwardRef as y } from "react";
import N from "../lib/IconBase.mjs";
import d from "../defs/SmileyNervous.mjs";
const u = y((o, e) => /* @__PURE__ */ n.createElement(N, i(a({ ref: e }, o), { weights: d })));
u.displayName = "SmileyNervous";
export {
  u as SmileyNervous
};
