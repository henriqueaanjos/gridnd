var i = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (o, e, m) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : o[e] = m, p = (o, e) => {
  for (var m in e || (e = {}))
    l.call(e, m) && a(o, m, e[m]);
  if (r)
    for (var m of r(e))
      n.call(e, m) && a(o, m, e[m]);
  return o;
}, t = (o, e) => f(o, s(e));
import S, { forwardRef as c } from "react";
import g from "../lib/SSRBase.mjs";
import h from "../defs/MegaphoneSimple.mjs";
const R = c((o, e) => /* @__PURE__ */ S.createElement(g, t(p({ ref: e }, o), { weights: h })));
R.displayName = "MegaphoneSimple";
export {
  R as MegaphoneSimple
};
