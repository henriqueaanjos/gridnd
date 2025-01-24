var i = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var t = (a, e, r) => e in a ? i(a, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : a[e] = r, c = (a, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && t(a, r, e[r]);
  if (o)
    for (var r of o(e))
      p.call(e, r) && t(a, r, e[r]);
  return a;
}, m = (a, e) => s(a, f(e));
import h, { forwardRef as C } from "react";
import k from "../lib/IconBase.mjs";
import n from "../defs/SealCheck.mjs";
const d = C((a, e) => /* @__PURE__ */ h.createElement(k, m(c({ ref: e }, a), { weights: n })));
d.displayName = "SealCheck";
export {
  d as CircleWavyCheck,
  d as SealCheck
};
