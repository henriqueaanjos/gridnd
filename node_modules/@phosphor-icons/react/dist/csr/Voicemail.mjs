var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (o, e, m) => e in o ? c(o, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : o[e] = m, i = (o, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && a(o, m, e[m]);
  if (r)
    for (var m of r(e))
      l.call(e, m) && a(o, m, e[m]);
  return o;
}, t = (o, e) => f(o, p(e));
import n, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Voicemail.mjs";
const R = d((o, e) => /* @__PURE__ */ n.createElement(w, t(i({ ref: e }, o), { weights: I })));
R.displayName = "Voicemail";
export {
  R as Voicemail
};
