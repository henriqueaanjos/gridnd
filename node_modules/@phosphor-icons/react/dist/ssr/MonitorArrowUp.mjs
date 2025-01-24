var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var m = (o, r, t) => r in o ? p(o, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[r] = t, a = (o, r) => {
  for (var t in r || (r = {}))
    n.call(r, t) && m(o, t, r[t]);
  if (e)
    for (var t of e(r))
      w.call(r, t) && m(o, t, r[t]);
  return o;
}, i = (o, r) => f(o, s(r));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/MonitorArrowUp.mjs";
const A = R((o, r) => /* @__PURE__ */ c.createElement(d, i(a({ ref: r }, o), { weights: l })));
A.displayName = "MonitorArrowUp";
export {
  A as MonitorArrowUp
};
