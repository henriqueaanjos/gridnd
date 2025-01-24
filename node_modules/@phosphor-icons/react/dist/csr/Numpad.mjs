var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var a = (m, e, o) => e in m ? f(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, t = (m, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && a(m, o, e[o]);
  if (r)
    for (var o of r(e))
      d.call(e, o) && a(m, o, e[o]);
  return m;
}, p = (m, e) => i(m, s(e));
import n, { forwardRef as N } from "react";
import l from "../lib/IconBase.mjs";
import u from "../defs/Numpad.mjs";
const w = N((m, e) => /* @__PURE__ */ n.createElement(l, p(t({ ref: e }, m), { weights: u })));
w.displayName = "Numpad";
export {
  w as Numpad
};
