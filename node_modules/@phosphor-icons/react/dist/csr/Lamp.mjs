var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (m, e, o) => e in m ? f(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, t = (m, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && a(m, o, e[o]);
  if (r)
    for (var o of r(e))
      n.call(e, o) && a(m, o, e[o]);
  return m;
}, p = (m, e) => i(m, s(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Lamp.mjs";
const L = l((m, e) => /* @__PURE__ */ d.createElement(w, p(t({ ref: e }, m), { weights: I })));
L.displayName = "Lamp";
export {
  L as Lamp
};
