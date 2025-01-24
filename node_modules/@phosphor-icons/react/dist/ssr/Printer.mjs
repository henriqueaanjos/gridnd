var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (e, r, t) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, a = (e, r) => {
  for (var t in r || (r = {}))
    n.call(r, t) && m(e, t, r[t]);
  if (o)
    for (var t of o(r))
      c.call(r, t) && m(e, t, r[t]);
  return e;
}, i = (e, r) => p(e, s(r));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import w from "../defs/Printer.mjs";
const P = d((e, r) => /* @__PURE__ */ R.createElement(l, i(a({ ref: r }, e), { weights: w })));
P.displayName = "Printer";
export {
  P as Printer
};
