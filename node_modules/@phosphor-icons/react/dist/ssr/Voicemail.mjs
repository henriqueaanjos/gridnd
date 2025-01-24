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
import R, { forwardRef as d } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/Voicemail.mjs";
const S = d((o, e) => /* @__PURE__ */ R.createElement(n, t(i({ ref: e }, o), { weights: w })));
S.displayName = "Voicemail";
export {
  S as Voicemail
};
