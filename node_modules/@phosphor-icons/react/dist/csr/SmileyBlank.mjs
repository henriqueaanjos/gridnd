var l = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (m, e, o) => e in m ? l(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, t = (m, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && a(m, o, e[o]);
  if (r)
    for (var o of r(e))
      s.call(e, o) && a(m, o, e[o]);
  return m;
}, i = (m, e) => f(m, n(e));
import c, { forwardRef as y } from "react";
import B from "../lib/IconBase.mjs";
import d from "../defs/SmileyBlank.mjs";
const k = y((m, e) => /* @__PURE__ */ c.createElement(B, i(t({ ref: e }, m), { weights: d })));
k.displayName = "SmileyBlank";
export {
  k as SmileyBlank
};
