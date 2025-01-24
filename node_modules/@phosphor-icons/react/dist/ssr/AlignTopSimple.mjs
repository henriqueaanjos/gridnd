var a = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (o, e, m) => e in o ? a(o, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : o[e] = m, p = (o, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && i(o, m, e[m]);
  if (r)
    for (var m of r(e))
      n.call(e, m) && i(o, m, e[m]);
  return o;
}, t = (o, e) => l(o, f(e));
import S, { forwardRef as c } from "react";
import g from "../lib/SSRBase.mjs";
import R from "../defs/AlignTopSimple.mjs";
const d = c((o, e) => /* @__PURE__ */ S.createElement(g, t(p({ ref: e }, o), { weights: R })));
d.displayName = "AlignTopSimple";
export {
  d as AlignTopSimple
};
