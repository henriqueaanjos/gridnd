var n = Object.defineProperty, p = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, a = (e, t) => {
  for (var r in t || (t = {}))
    s.call(t, r) && o(e, r, t[r]);
  if (m)
    for (var r of m(t))
      c.call(t, r) && o(e, r, t[r]);
  return e;
}, i = (e, t) => p(e, f(t));
import d, { forwardRef as l } from "react";
import g from "../lib/IconBase.mjs";
import B from "../defs/BuildingApartment.mjs";
const u = l((e, t) => /* @__PURE__ */ d.createElement(g, i(a({ ref: t }, e), { weights: B })));
u.displayName = "BuildingApartment";
export {
  u as BuildingApartment
};
