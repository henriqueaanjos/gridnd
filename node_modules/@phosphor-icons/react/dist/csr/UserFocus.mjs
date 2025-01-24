var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? c(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && t(o, r, e[r]);
  if (s)
    for (var r of s(e))
      n.call(e, r) && t(o, r, e[r]);
  return o;
}, a = (o, e) => f(o, i(e));
import d, { forwardRef as l } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/UserFocus.mjs";
const F = l((o, e) => /* @__PURE__ */ d.createElement(u, a(m({ ref: e }, o), { weights: w })));
F.displayName = "UserFocus";
export {
  F as UserFocus
};
