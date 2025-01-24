var i = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (o, e, m) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : o[e] = m, t = (o, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && p(o, m, e[m]);
  if (r)
    for (var m of r(e))
      n.call(e, m) && p(o, m, e[m]);
  return o;
}, a = (o, e) => l(o, f(e));
import S, { forwardRef as c } from "react";
import E from "../lib/SSRBase.mjs";
import R from "../defs/EnvelopeSimple.mjs";
const d = c((o, e) => /* @__PURE__ */ S.createElement(E, a(t({ ref: e }, o), { weights: R })));
d.displayName = "EnvelopeSimple";
export {
  d as EnvelopeSimple
};
