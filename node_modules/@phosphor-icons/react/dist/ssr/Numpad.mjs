var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (m, e, r) => e in m ? f(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, t = (m, e) => {
  for (var r in e || (e = {}))
    d.call(e, r) && o(m, r, e[r]);
  if (a)
    for (var r of a(e))
      c.call(e, r) && o(m, r, e[r]);
  return m;
}, p = (m, e) => i(m, s(e));
import N, { forwardRef as R } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Numpad.mjs";
const u = R((m, e) => /* @__PURE__ */ N.createElement(l, p(t({ ref: e }, m), { weights: n })));
u.displayName = "Numpad";
export {
  u as Numpad
};
