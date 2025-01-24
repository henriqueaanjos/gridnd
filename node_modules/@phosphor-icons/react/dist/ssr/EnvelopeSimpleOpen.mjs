var i = Object.defineProperty, l = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var r = (o, e, p) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: p }) : o[e] = p, t = (o, e) => {
  for (var p in e || (e = {}))
    f.call(e, p) && r(o, p, e[p]);
  if (m)
    for (var p of m(e))
      s.call(e, p) && r(o, p, e[p]);
  return o;
}, a = (o, e) => l(o, n(e));
import S, { forwardRef as c } from "react";
import E from "../lib/SSRBase.mjs";
import R from "../defs/EnvelopeSimpleOpen.mjs";
const d = c((o, e) => /* @__PURE__ */ S.createElement(E, a(t({ ref: e }, o), { weights: R })));
d.displayName = "EnvelopeSimpleOpen";
export {
  d as EnvelopeSimpleOpen
};
