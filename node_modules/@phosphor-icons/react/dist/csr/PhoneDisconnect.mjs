var a = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var n = (o, e, t) => e in o ? a(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, c = (o, e) => {
  for (var t in e || (e = {}))
    f.call(e, t) && n(o, t, e[t]);
  if (r)
    for (var t of r(e))
      p.call(e, t) && n(o, t, e[t]);
  return o;
}, m = (o, e) => i(o, s(e));
import h, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/PhoneDisconnect.mjs";
const D = d((o, e) => /* @__PURE__ */ h.createElement(l, m(c({ ref: e }, o), { weights: w })));
D.displayName = "PhoneDisconnect";
export {
  D as PhoneDisconnect
};
