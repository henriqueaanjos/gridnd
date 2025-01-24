var s = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (m, e, o) => e in m ? s(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, t = (m, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && a(m, o, e[o]);
  if (r)
    for (var o of r(e))
      n.call(e, o) && a(m, o, e[o]);
  return m;
}, p = (m, e) => f(m, i(e));
import d, { forwardRef as l } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/GasPump.mjs";
const G = l((m, e) => /* @__PURE__ */ d.createElement(u, p(t({ ref: e }, m), { weights: w })));
G.displayName = "GasPump";
export {
  G as GasPump
};
