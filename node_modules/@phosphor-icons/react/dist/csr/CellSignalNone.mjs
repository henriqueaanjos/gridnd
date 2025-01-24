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
import c, { forwardRef as g } from "react";
import N from "../lib/IconBase.mjs";
import d from "../defs/CellSignalNone.mjs";
const w = g((o, e) => /* @__PURE__ */ c.createElement(N, m(l({ ref: e }, o), { weights: d })));
w.displayName = "CellSignalNone";
export {
  w as CellSignalNone
};
