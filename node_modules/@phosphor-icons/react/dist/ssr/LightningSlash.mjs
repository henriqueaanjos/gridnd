var s = Object.defineProperty, n = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var i = (e, t, r) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, o = (e, t) => {
  for (var r in t || (t = {}))
    g.call(t, r) && i(e, r, t[r]);
  if (a)
    for (var r of a(t))
      h.call(t, r) && i(e, r, t[r]);
  return e;
}, m = (e, t) => n(e, f(t));
import p, { forwardRef as l } from "react";
import S from "../lib/SSRBase.mjs";
import c from "../defs/LightningSlash.mjs";
const R = l((e, t) => /* @__PURE__ */ p.createElement(S, m(o({ ref: t }, e), { weights: c })));
R.displayName = "LightningSlash";
export {
  R as LightningSlash
};
