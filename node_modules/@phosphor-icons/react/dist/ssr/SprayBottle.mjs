var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var a = (e, t, r) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    l.call(t, r) && a(e, r, t[r]);
  if (o)
    for (var r of o(t))
      S.call(t, r) && a(e, r, t[r]);
  return e;
}, p = (e, t) => i(e, s(t));
import c, { forwardRef as y } from "react";
import B from "../lib/SSRBase.mjs";
import R from "../defs/SprayBottle.mjs";
const d = y((e, t) => /* @__PURE__ */ c.createElement(B, p(m({ ref: t }, e), { weights: R })));
d.displayName = "SprayBottle";
export {
  d as SprayBottle
};
