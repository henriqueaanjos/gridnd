var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      n.call(e, t) && a(r, t, e[t]);
  return r;
}, p = (r, e) => i(r, s(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/CaretUp.mjs";
const I = l((r, e) => /* @__PURE__ */ d.createElement(w, p(m({ ref: e }, r), { weights: C })));
I.displayName = "CaretUp";
export {
  I as CaretUp
};
