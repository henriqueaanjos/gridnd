var a = Object.defineProperty, c = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var f = (i, e, o) => e in i ? a(i, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : i[e] = o, t = (i, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && f(i, o, e[o]);
  if (r)
    for (var o of r(e))
      s.call(e, o) && f(i, o, e[o]);
  return i;
}, m = (i, e) => c(i, n(e));
import d, { forwardRef as l } from "react";
import g from "../lib/IconBase.mjs";
import B from "../defs/BuildingOffice.mjs";
const u = l((i, e) => /* @__PURE__ */ d.createElement(g, m(t({ ref: e }, i), { weights: B })));
u.displayName = "BuildingOffice";
export {
  u as BuildingOffice
};
