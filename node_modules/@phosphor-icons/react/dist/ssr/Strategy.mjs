var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    S.call(t, r) && o(e, r, t[r]);
  if (a)
    for (var r of a(t))
      c.call(t, r) && o(e, r, t[r]);
  return e;
}, f = (e, t) => p(e, s(t));
import g, { forwardRef as y } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/Strategy.mjs";
const l = y((e, t) => /* @__PURE__ */ g.createElement(R, f(m({ ref: t }, e), { weights: d })));
l.displayName = "Strategy";
export {
  l as Strategy
};
