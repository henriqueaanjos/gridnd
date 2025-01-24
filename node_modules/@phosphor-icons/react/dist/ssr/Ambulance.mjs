var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (m, e, r) => e in m ? f(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, t = (m, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && o(m, r, e[r]);
  if (a)
    for (var r of a(e))
      l.call(e, r) && o(m, r, e[r]);
  return m;
}, c = (m, e) => i(m, p(e));
import n, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import d from "../defs/Ambulance.mjs";
const u = R((m, e) => /* @__PURE__ */ n.createElement(b, c(t({ ref: e }, m), { weights: d })));
u.displayName = "Ambulance";
export {
  u as Ambulance
};
