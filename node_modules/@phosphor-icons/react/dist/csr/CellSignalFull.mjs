var i = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (l, e, o) => e in l ? i(l, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : l[e] = o, t = (l, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && a(l, o, e[o]);
  if (r)
    for (var o of r(e))
      s.call(e, o) && a(l, o, e[o]);
  return l;
}, m = (l, e) => f(l, n(e));
import c, { forwardRef as g } from "react";
import d from "../lib/IconBase.mjs";
import u from "../defs/CellSignalFull.mjs";
const w = g((l, e) => /* @__PURE__ */ c.createElement(d, m(t({ ref: e }, l), { weights: u })));
w.displayName = "CellSignalFull";
export {
  w as CellSignalFull
};
