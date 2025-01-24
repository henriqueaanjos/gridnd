var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var m = (o, e, t) => e in o ? c(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && m(o, t, e[t]);
  if (r)
    for (var t of r(e))
      h.call(e, t) && m(o, t, e[t]);
  return o;
}, s = (o, e) => f(o, i(e));
import N, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Notches.mjs";
const n = R((o, e) => /* @__PURE__ */ N.createElement(d, s(a({ ref: e }, o), { weights: l })));
n.displayName = "Notches";
export {
  n as Notches
};
