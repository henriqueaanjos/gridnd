var n = Object.defineProperty, p = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (m, e, o) => e in m ? n(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, a = (m, e) => {
  for (var o in e || (e = {}))
    f.call(e, o) && t(m, o, e[o]);
  if (r)
    for (var o of r(e))
      s.call(e, o) && t(m, o, e[o]);
  return m;
}, i = (m, e) => p(m, l(e));
import c, { forwardRef as d } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/FunnelSimple.mjs";
const F = d((m, e) => /* @__PURE__ */ c.createElement(u, i(a({ ref: e }, m), { weights: w })));
F.displayName = "FunnelSimple";
export {
  F as FunnelSimple
};
