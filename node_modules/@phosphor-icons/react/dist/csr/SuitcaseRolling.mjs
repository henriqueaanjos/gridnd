var s = Object.defineProperty, c = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (o, e, t) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, i = (o, e) => {
  for (var t in e || (e = {}))
    f.call(e, t) && a(o, t, e[t]);
  if (r)
    for (var t of r(e))
      n.call(e, t) && a(o, t, e[t]);
  return o;
}, m = (o, e) => c(o, l(e));
import p, { forwardRef as R } from "react";
import g from "../lib/IconBase.mjs";
import d from "../defs/SuitcaseRolling.mjs";
const u = R((o, e) => /* @__PURE__ */ p.createElement(g, m(i({ ref: e }, o), { weights: d })));
u.displayName = "SuitcaseRolling";
export {
  u as SuitcaseRolling
};
