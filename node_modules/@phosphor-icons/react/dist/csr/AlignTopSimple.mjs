var a = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var i = (o, e, m) => e in o ? a(o, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : o[e] = m, p = (o, e) => {
  for (var m in e || (e = {}))
    n.call(e, m) && i(o, m, e[m]);
  if (r)
    for (var m of r(e))
      s.call(e, m) && i(o, m, e[m]);
  return o;
}, t = (o, e) => l(o, f(e));
import c, { forwardRef as g } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/AlignTopSimple.mjs";
const A = g((o, e) => /* @__PURE__ */ c.createElement(d, t(p({ ref: e }, o), { weights: w })));
A.displayName = "AlignTopSimple";
export {
  A as AlignTopSimple
};
