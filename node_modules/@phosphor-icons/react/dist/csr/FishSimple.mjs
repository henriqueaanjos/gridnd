var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (m, e, o) => e in m ? p(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, t = (m, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && i(m, o, e[o]);
  if (r)
    for (var o of r(e))
      l.call(e, o) && i(m, o, e[o]);
  return m;
}, a = (m, e) => s(m, f(e));
import h, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/FishSimple.mjs";
const F = n((m, e) => /* @__PURE__ */ h.createElement(d, a(t({ ref: e }, m), { weights: w })));
F.displayName = "FishSimple";
export {
  F as FishSimple
};
