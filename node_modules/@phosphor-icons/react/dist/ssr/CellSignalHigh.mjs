var m = Object.defineProperty, f = Object.defineProperties;
var g = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? m(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, t = (r, e) => {
  for (var a in e || (e = {}))
    p.call(e, a) && o(r, a, e[a]);
  if (i)
    for (var a of i(e))
      s.call(e, a) && o(r, a, e[a]);
  return r;
}, l = (r, e) => f(r, g(e));
import n, { forwardRef as S } from "react";
import c from "../lib/SSRBase.mjs";
import h from "../defs/CellSignalHigh.mjs";
const R = S((r, e) => /* @__PURE__ */ n.createElement(c, l(t({ ref: e }, r), { weights: h })));
R.displayName = "CellSignalHigh";
export {
  R as CellSignalHigh
};
