var i = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (m, e, r) => e in m ? i(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, t = (m, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && o(m, r, e[r]);
  if (a)
    for (var r of a(e))
      c.call(e, r) && o(m, r, e[r]);
  return m;
}, n = (m, e) => f(m, p(e));
import h, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/FinnTheHuman.mjs";
const u = R((m, e) => /* @__PURE__ */ h.createElement(d, n(t({ ref: e }, m), { weights: l })));
u.displayName = "FinnTheHuman";
export {
  u as FinnTheHuman
};
