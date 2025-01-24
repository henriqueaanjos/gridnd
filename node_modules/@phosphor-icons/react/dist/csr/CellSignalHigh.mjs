var m = Object.defineProperty, f = Object.defineProperties;
var g = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (o, e, r) => e in o ? m(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, t = (o, e) => {
  for (var r in e || (e = {}))
    n.call(e, r) && i(o, r, e[r]);
  if (a)
    for (var r of a(e))
      p.call(e, r) && i(o, r, e[r]);
  return o;
}, l = (o, e) => f(o, g(e));
import s, { forwardRef as c } from "react";
import h from "../lib/IconBase.mjs";
import d from "../defs/CellSignalHigh.mjs";
const w = c((o, e) => /* @__PURE__ */ s.createElement(h, l(t({ ref: e }, o), { weights: d })));
w.displayName = "CellSignalHigh";
export {
  w as CellSignalHigh
};
