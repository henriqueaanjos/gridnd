var i = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, l = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      s.call(e, r) && t(o, r, e[r]);
  return o;
}, m = (o, e) => f(o, n(e));
import c, { forwardRef as w } from "react";
import g from "../lib/IconBase.mjs";
import d from "../defs/CellSignalLow.mjs";
const C = w((o, e) => /* @__PURE__ */ c.createElement(g, m(l({ ref: e }, o), { weights: d })));
C.displayName = "CellSignalLow";
export {
  C as CellSignalLow
};
