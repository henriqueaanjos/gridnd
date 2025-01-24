var p = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      c.call(e, t) && a(r, t, e[t]);
  return r;
}, i = (r, e) => f(r, n(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/CaretLineUp.mjs";
const I = l((r, e) => /* @__PURE__ */ d.createElement(w, i(m({ ref: e }, r), { weights: C })));
I.displayName = "CaretLineUp";
export {
  I as CaretLineUp
};
