var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var t = (e, o, m) => o in e ? s(e, o, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[o] = m, a = (e, o) => {
  for (var m in o || (o = {}))
    c.call(o, m) && t(e, m, o[m]);
  if (r)
    for (var m of r(o))
      g.call(o, m) && t(e, m, o[m]);
  return e;
}, i = (e, o) => f(e, p(o));
import n, { forwardRef as y } from "react";
import N from "../lib/IconBase.mjs";
import d from "../defs/NyTimesLogo.mjs";
const l = y((e, o) => /* @__PURE__ */ n.createElement(N, i(a({ ref: o }, e), { weights: d })));
l.displayName = "NyTimesLogo";
export {
  l as NyTimesLogo
};
