var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var a = (e, t, r) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    c.call(t, r) && a(e, r, t[r]);
  if (o)
    for (var r of o(t))
      g.call(t, r) && a(e, r, t[r]);
  return e;
}, f = (e, t) => p(e, s(t));
import n, { forwardRef as y } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/Strategy.mjs";
const w = y((e, t) => /* @__PURE__ */ n.createElement(d, f(m({ ref: t }, e), { weights: l })));
w.displayName = "Strategy";
export {
  w as Strategy
};
