var p = Object.defineProperty, n = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var a = (e, t, r) => t in e ? p(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, i = (e, t) => {
  for (var r in t || (t = {}))
    s.call(t, r) && a(e, r, t[r]);
  if (m)
    for (var r of m(t))
      d.call(t, r) && a(e, r, t[r]);
  return e;
}, o = (e, t) => n(e, f(t));
import l, { forwardRef as c } from "react";
import g from "../lib/SSRBase.mjs";
import B from "../defs/BuildingApartment.mjs";
const R = c((e, t) => /* @__PURE__ */ l.createElement(g, o(i({ ref: t }, e), { weights: B })));
R.displayName = "BuildingApartment";
export {
  R as BuildingApartment
};
