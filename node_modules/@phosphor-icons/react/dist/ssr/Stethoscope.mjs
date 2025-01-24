var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var m = (o, e, t) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    i.call(e, t) && m(o, t, e[t]);
  if (r)
    for (var t of r(e))
      S.call(e, t) && m(o, t, e[t]);
  return o;
}, p = (o, e) => c(o, f(e));
import h, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Stethoscope.mjs";
const n = R((o, e) => /* @__PURE__ */ h.createElement(d, p(a({ ref: e }, o), { weights: l })));
n.displayName = "Stethoscope";
export {
  n as Stethoscope
};
