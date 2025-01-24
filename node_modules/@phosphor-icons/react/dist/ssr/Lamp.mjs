var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var o = (m, e, r) => e in m ? f(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, t = (m, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && o(m, r, e[r]);
  if (a)
    for (var r of a(e))
      R.call(e, r) && o(m, r, e[r]);
  return m;
}, p = (m, e) => i(m, s(e));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/Lamp.mjs";
const L = l((m, e) => /* @__PURE__ */ d.createElement(n, p(t({ ref: e }, m), { weights: w })));
L.displayName = "Lamp";
export {
  L as Lamp
};
