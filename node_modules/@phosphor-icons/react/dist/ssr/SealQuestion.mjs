var m = Object.defineProperty, f = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (o, e, t) => e in o ? m(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, i = (o, e) => {
  for (var t in e || (e = {}))
    n.call(e, t) && r(o, t, e[t]);
  if (a)
    for (var t of a(e))
      p.call(e, t) && r(o, t, e[t]);
  return o;
}, s = (o, e) => f(o, l(e));
import c, { forwardRef as S } from "react";
import u from "../lib/SSRBase.mjs";
import Q from "../defs/SealQuestion.mjs";
const R = S((o, e) => /* @__PURE__ */ c.createElement(u, s(i({ ref: e }, o), { weights: Q })));
R.displayName = "SealQuestion";
export {
  R as CircleWavyQuestion,
  R as SealQuestion
};
