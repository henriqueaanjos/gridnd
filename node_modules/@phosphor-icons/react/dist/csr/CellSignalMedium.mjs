var l = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (m, e, o) => e in m ? l(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, i = (m, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && a(m, o, e[o]);
  if (r)
    for (var o of r(e))
      s.call(e, o) && a(m, o, e[o]);
  return m;
}, t = (m, e) => f(m, n(e));
import c, { forwardRef as d } from "react";
import g from "../lib/IconBase.mjs";
import u from "../defs/CellSignalMedium.mjs";
const w = d((m, e) => /* @__PURE__ */ c.createElement(g, t(i({ ref: e }, m), { weights: u })));
w.displayName = "CellSignalMedium";
export {
  w as CellSignalMedium
};
