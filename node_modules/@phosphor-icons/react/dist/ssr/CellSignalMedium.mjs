var l = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var i = (m, e, r) => e in m ? l(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, o = (m, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && i(m, r, e[r]);
  if (a)
    for (var r of a(e))
      d.call(e, r) && i(m, r, e[r]);
  return m;
}, t = (m, e) => f(m, p(e));
import n, { forwardRef as S } from "react";
import c from "../lib/SSRBase.mjs";
import g from "../defs/CellSignalMedium.mjs";
const R = S((m, e) => /* @__PURE__ */ n.createElement(c, t(o({ ref: e }, m), { weights: g })));
R.displayName = "CellSignalMedium";
export {
  R as CellSignalMedium
};
