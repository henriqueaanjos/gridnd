var i = Object.defineProperty, n = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var r = (o, e, p) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: p }) : o[e] = p, t = (o, e) => {
  for (var p in e || (e = {}))
    f.call(e, p) && r(o, p, e[p]);
  if (m)
    for (var p of m(e))
      s.call(e, p) && r(o, p, e[p]);
  return o;
}, a = (o, e) => n(o, l(e));
import c, { forwardRef as E } from "react";
import d from "../lib/IconBase.mjs";
import v from "../defs/EnvelopeSimpleOpen.mjs";
const w = E((o, e) => /* @__PURE__ */ c.createElement(d, a(t({ ref: e }, o), { weights: v })));
w.displayName = "EnvelopeSimpleOpen";
export {
  w as EnvelopeSimpleOpen
};
