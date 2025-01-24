var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var m = (o, e, t) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    i.call(e, t) && m(o, t, e[t]);
  if (r)
    for (var t of r(e))
      h.call(e, t) && m(o, t, e[t]);
  return o;
}, p = (o, e) => c(o, f(e));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Stethoscope.mjs";
const I = d((o, e) => /* @__PURE__ */ n.createElement(l, p(a({ ref: e }, o), { weights: w })));
I.displayName = "Stethoscope";
export {
  I as Stethoscope
};
