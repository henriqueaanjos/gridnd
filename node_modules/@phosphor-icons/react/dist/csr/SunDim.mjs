var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (m, e, o) => e in m ? f(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, a = (m, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && t(m, o, e[o]);
  if (r)
    for (var o of r(e))
      c.call(e, o) && t(m, o, e[o]);
  return m;
}, i = (m, e) => n(m, p(e));
import d, { forwardRef as l } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/SunDim.mjs";
const D = l((m, e) => /* @__PURE__ */ d.createElement(u, i(a({ ref: e }, m), { weights: w })));
D.displayName = "SunDim";
export {
  D as SunDim
};
