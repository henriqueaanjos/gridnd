var l = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var r = (e, t, m) => t in e ? l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[t] = m, a = (e, t) => {
  for (var m in t || (t = {}))
    p.call(t, m) && r(e, m, t[m]);
  if (o)
    for (var m of o(t))
      s.call(t, m) && r(e, m, t[m]);
  return e;
}, i = (e, t) => f(e, n(t));
import b, { forwardRef as c } from "react";
import g from "../lib/IconBase.mjs";
import h from "../defs/LightbulbFilament.mjs";
const d = c((e, t) => /* @__PURE__ */ b.createElement(g, i(a({ ref: t }, e), { weights: h })));
d.displayName = "LightbulbFilament";
export {
  d as LightbulbFilament
};
