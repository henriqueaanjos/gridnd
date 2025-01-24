var c = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (o, e, t) => e in o ? c(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, n = (o, e) => {
  for (var t in e || (e = {}))
    f.call(e, t) && m(o, t, e[t]);
  if (r)
    for (var t of r(e))
      p.call(e, t) && m(o, t, e[t]);
  return o;
}, a = (o, e) => i(o, s(e));
import h, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/PhoneDisconnect.mjs";
const w = R((o, e) => /* @__PURE__ */ h.createElement(d, a(n({ ref: e }, o), { weights: l })));
w.displayName = "PhoneDisconnect";
export {
  w as PhoneDisconnect
};
