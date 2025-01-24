var p = Object.defineProperty, s = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (e, r, o) => r in e ? p(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    f.call(r, o) && i(e, o, r[o]);
  if (t)
    for (var o of t(r))
      n.call(r, o) && i(e, o, r[o]);
  return e;
}, a = (e, r) => s(e, c(r));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import w from "../defs/Prescription.mjs";
const P = d((e, r) => /* @__PURE__ */ R.createElement(l, a(m({ ref: r }, e), { weights: w })));
P.displayName = "Prescription";
export {
  P as Prescription
};
