var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      d.call(e, r) && t(o, r, e[r]);
  return o;
}, f = (o, e) => p(o, s(e));
import l, { forwardRef as n } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Medal.mjs";
const M = n((o, e) => /* @__PURE__ */ l.createElement(w, f(m({ ref: e }, o), { weights: I })));
M.displayName = "Medal";
export {
  M as Medal
};
