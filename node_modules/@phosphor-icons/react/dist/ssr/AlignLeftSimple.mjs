var f = Object.defineProperty, p = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (t, e, m) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : t[e] = m, o = (t, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && i(t, m, e[m]);
  if (r)
    for (var m of r(e))
      n.call(e, m) && i(t, m, e[m]);
  return t;
}, a = (t, e) => p(t, l(e));
import S, { forwardRef as c } from "react";
import g from "../lib/SSRBase.mjs";
import R from "../defs/AlignLeftSimple.mjs";
const d = c((t, e) => /* @__PURE__ */ S.createElement(g, a(o({ ref: e }, t), { weights: R })));
d.displayName = "AlignLeftSimple";
export {
  d as AlignLeftSimple
};
