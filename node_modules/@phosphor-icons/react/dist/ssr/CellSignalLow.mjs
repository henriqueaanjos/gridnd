var i = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, l = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      n.call(e, r) && t(o, r, e[r]);
  return o;
}, m = (o, e) => f(o, p(e));
import w, { forwardRef as S } from "react";
import c from "../lib/SSRBase.mjs";
import g from "../defs/CellSignalLow.mjs";
const R = S((o, e) => /* @__PURE__ */ w.createElement(c, m(l({ ref: e }, o), { weights: g })));
R.displayName = "CellSignalLow";
export {
  R as CellSignalLow
};
