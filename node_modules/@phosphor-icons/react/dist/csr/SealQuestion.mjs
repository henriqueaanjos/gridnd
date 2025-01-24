var m = Object.defineProperty, n = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var r = (o, e, t) => e in o ? m(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, i = (o, e) => {
  for (var t in e || (e = {}))
    f.call(e, t) && r(o, t, e[t]);
  if (a)
    for (var t of a(e))
      l.call(e, t) && r(o, t, e[t]);
  return o;
}, s = (o, e) => n(o, c(e));
import p, { forwardRef as u } from "react";
import Q from "../lib/IconBase.mjs";
import d from "../defs/SealQuestion.mjs";
const w = u((o, e) => /* @__PURE__ */ p.createElement(Q, s(i({ ref: e }, o), { weights: d })));
w.displayName = "SealQuestion";
export {
  w as CircleWavyQuestion,
  w as SealQuestion
};
