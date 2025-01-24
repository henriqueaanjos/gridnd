var l = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, b = Object.prototype.propertyIsEnumerable;
var a = (e, t, m) => t in e ? l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[t] = m, i = (e, t) => {
  for (var m in t || (t = {}))
    s.call(t, m) && a(e, m, t[m]);
  if (r)
    for (var m of r(t))
      b.call(t, m) && a(e, m, t[m]);
  return e;
}, o = (e, t) => f(e, p(t));
import n, { forwardRef as c } from "react";
import g from "../lib/SSRBase.mjs";
import h from "../defs/LightbulbFilament.mjs";
const R = c((e, t) => /* @__PURE__ */ n.createElement(g, o(i({ ref: t }, e), { weights: h })));
R.displayName = "LightbulbFilament";
export {
  R as LightbulbFilament
};
