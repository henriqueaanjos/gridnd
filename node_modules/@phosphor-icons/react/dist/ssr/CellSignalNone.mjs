var i = Object.defineProperty, n = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, l = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      s.call(e, r) && t(o, r, e[r]);
  return o;
}, m = (o, e) => n(o, f(e));
import S, { forwardRef as c } from "react";
import g from "../lib/SSRBase.mjs";
import N from "../defs/CellSignalNone.mjs";
const R = c((o, e) => /* @__PURE__ */ S.createElement(g, m(l({ ref: e }, o), { weights: N })));
R.displayName = "CellSignalNone";
export {
  R as CellSignalNone
};
