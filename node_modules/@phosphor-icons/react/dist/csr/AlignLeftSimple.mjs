var f = Object.defineProperty, p = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var r = (t, e, m) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : t[e] = m, i = (t, e) => {
  for (var m in e || (e = {}))
    n.call(e, m) && r(t, m, e[m]);
  if (o)
    for (var m of o(e))
      s.call(e, m) && r(t, m, e[m]);
  return t;
}, a = (t, e) => p(t, l(e));
import c, { forwardRef as g } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/AlignLeftSimple.mjs";
const A = g((t, e) => /* @__PURE__ */ c.createElement(d, a(i({ ref: e }, t), { weights: w })));
A.displayName = "AlignLeftSimple";
export {
  A as AlignLeftSimple
};
