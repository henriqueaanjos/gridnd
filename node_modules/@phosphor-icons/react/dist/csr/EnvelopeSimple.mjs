var i = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var p = (o, e, m) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : o[e] = m, t = (o, e) => {
  for (var m in e || (e = {}))
    n.call(e, m) && p(o, m, e[m]);
  if (r)
    for (var m of r(e))
      s.call(e, m) && p(o, m, e[m]);
  return o;
}, a = (o, e) => l(o, f(e));
import c, { forwardRef as E } from "react";
import d from "../lib/IconBase.mjs";
import v from "../defs/EnvelopeSimple.mjs";
const w = E((o, e) => /* @__PURE__ */ c.createElement(d, a(t({ ref: e }, o), { weights: v })));
w.displayName = "EnvelopeSimple";
export {
  w as EnvelopeSimple
};
