var s = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var o = (m, e, r) => e in m ? s(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, t = (m, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && o(m, r, e[r]);
  if (a)
    for (var r of a(e))
      R.call(e, r) && o(m, r, e[r]);
  return m;
}, p = (m, e) => f(m, i(e));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import u from "../defs/GasPump.mjs";
const w = l((m, e) => /* @__PURE__ */ d.createElement(n, p(t({ ref: e }, m), { weights: u })));
w.displayName = "GasPump";
export {
  w as GasPump
};
