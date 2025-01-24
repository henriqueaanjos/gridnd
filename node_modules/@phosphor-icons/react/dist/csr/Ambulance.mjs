var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (m, e, o) => e in m ? f(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, t = (m, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && a(m, o, e[o]);
  if (r)
    for (var o of r(e))
      s.call(e, o) && a(m, o, e[o]);
  return m;
}, c = (m, e) => i(m, n(e));
import l, { forwardRef as b } from "react";
import d from "../lib/IconBase.mjs";
import u from "../defs/Ambulance.mjs";
const w = b((m, e) => /* @__PURE__ */ l.createElement(d, c(t({ ref: e }, m), { weights: u })));
w.displayName = "Ambulance";
export {
  w as Ambulance
};
