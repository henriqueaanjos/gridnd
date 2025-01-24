var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var r = (o, e, t) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    l.call(e, t) && r(o, t, e[t]);
  if (m)
    for (var t of m(e))
      w.call(e, t) && r(o, t, e[t]);
  return o;
}, f = (o, e) => p(o, s(e));
import S, { forwardRef as c } from "react";
import B from "../lib/SSRBase.mjs";
import R from "../defs/BowlSteam.mjs";
const d = c((o, e) => /* @__PURE__ */ S.createElement(B, f(a({ ref: e }, o), { weights: R })));
d.displayName = "BowlSteam";
export {
  d as BowlSteam
};
