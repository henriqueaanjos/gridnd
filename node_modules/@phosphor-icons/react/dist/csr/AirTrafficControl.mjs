var m = Object.defineProperty, c = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (o, r, t) => r in o ? m(o, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[r] = t, f = (o, r) => {
  for (var t in r || (r = {}))
    p.call(r, t) && a(o, t, r[t]);
  if (e)
    for (var t of e(r))
      s.call(r, t) && a(o, t, r[t]);
  return o;
}, i = (o, r) => c(o, n(r));
import l, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import A from "../defs/AirTrafficControl.mjs";
const C = d((o, r) => /* @__PURE__ */ l.createElement(w, i(f({ ref: r }, o), { weights: A })));
C.displayName = "AirTrafficControl";
export {
  C as AirTrafficControl
};
