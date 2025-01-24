var i = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (m, e, o) => e in m ? i(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, n = (m, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && a(m, o, e[o]);
  if (r)
    for (var o of r(e))
      c.call(e, o) && a(m, o, e[o]);
  return m;
}, t = (m, e) => f(m, p(e));
import h, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import u from "../defs/FinnTheHuman.mjs";
const w = d((m, e) => /* @__PURE__ */ h.createElement(l, t(n({ ref: e }, m), { weights: u })));
w.displayName = "FinnTheHuman";
export {
  w as FinnTheHuman
};
