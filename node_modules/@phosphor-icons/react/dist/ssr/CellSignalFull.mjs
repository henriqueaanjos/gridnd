var i = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var o = (l, e, r) => e in l ? i(l, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : l[e] = r, t = (l, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && o(l, r, e[r]);
  if (a)
    for (var r of a(e))
      n.call(e, r) && o(l, r, e[r]);
  return l;
}, m = (l, e) => f(l, p(e));
import S, { forwardRef as c } from "react";
import g from "../lib/SSRBase.mjs";
import R from "../defs/CellSignalFull.mjs";
const d = c((l, e) => /* @__PURE__ */ S.createElement(g, m(t({ ref: e }, l), { weights: R })));
d.displayName = "CellSignalFull";
export {
  d as CellSignalFull
};
