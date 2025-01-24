var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    d.call(t, r) && o(e, r, t[r]);
  if (a)
    for (var r of a(t))
      n.call(t, r) && o(e, r, t[r]);
  return e;
}, i = (e, t) => f(e, p(t));
import c, { forwardRef as R } from "react";
import l from "../lib/SSRBase.mjs";
import w from "../defs/HandFist.mjs";
const F = R((e, t) => /* @__PURE__ */ c.createElement(l, i(m({ ref: t }, e), { weights: w })));
F.displayName = "HandFist";
export {
  F as HandFist
};
