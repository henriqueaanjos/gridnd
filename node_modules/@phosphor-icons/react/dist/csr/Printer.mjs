var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (e, r, t) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, a = (e, r) => {
  for (var t in r || (r = {}))
    s.call(r, t) && m(e, t, r[t]);
  if (o)
    for (var t of o(r))
      c.call(r, t) && m(e, t, r[t]);
  return e;
}, i = (e, r) => n(e, p(r));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Printer.mjs";
const P = l((e, r) => /* @__PURE__ */ d.createElement(w, i(a({ ref: r }, e), { weights: I })));
P.displayName = "Printer";
export {
  P as Printer
};
