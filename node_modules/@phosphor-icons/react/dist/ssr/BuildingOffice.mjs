var a = Object.defineProperty, c = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var f = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var o = (i, e, r) => e in i ? a(i, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : i[e] = r, t = (i, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && o(i, r, e[r]);
  if (f)
    for (var r of f(e))
      d.call(e, r) && o(i, r, e[r]);
  return i;
}, m = (i, e) => c(i, p(e));
import l, { forwardRef as n } from "react";
import g from "../lib/SSRBase.mjs";
import B from "../defs/BuildingOffice.mjs";
const R = n((i, e) => /* @__PURE__ */ l.createElement(g, m(t({ ref: e }, i), { weights: B })));
R.displayName = "BuildingOffice";
export {
  R as BuildingOffice
};
