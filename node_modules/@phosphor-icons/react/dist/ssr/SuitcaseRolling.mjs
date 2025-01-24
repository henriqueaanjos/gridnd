var s = Object.defineProperty, l = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var a = (o, e, t) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, i = (o, e) => {
  for (var t in e || (e = {}))
    f.call(e, t) && a(o, t, e[t]);
  if (r)
    for (var t of r(e))
      p.call(e, t) && a(o, t, e[t]);
  return o;
}, m = (o, e) => l(o, c(e));
import R, { forwardRef as n } from "react";
import S from "../lib/SSRBase.mjs";
import g from "../defs/SuitcaseRolling.mjs";
const d = n((o, e) => /* @__PURE__ */ R.createElement(S, m(i({ ref: e }, o), { weights: g })));
d.displayName = "SuitcaseRolling";
export {
  d as SuitcaseRolling
};
