var i = Object.defineProperty, s = Object.defineProperties;
var S = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, e, l) => e in a ? i(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, t = (a, e) => {
  for (var l in e || (e = {}))
    f.call(e, l) && o(a, l, e[l]);
  if (r)
    for (var l of r(e))
      p.call(e, l) && o(a, l, e[l]);
  return a;
}, m = (a, e) => s(a, S(e));
import n, { forwardRef as c } from "react";
import g from "../lib/SSRBase.mjs";
import h from "../defs/CellSignalSlash.mjs";
const R = c((a, e) => /* @__PURE__ */ n.createElement(g, m(t({ ref: e }, a), { weights: h })));
R.displayName = "CellSignalSlash";
export {
  R as CellSignalSlash
};
