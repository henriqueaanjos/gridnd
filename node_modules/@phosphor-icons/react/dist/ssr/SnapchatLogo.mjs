var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var r = (a, o, t) => o in a ? c(a, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[o] = t, m = (a, o) => {
  for (var t in o || (o = {}))
    s.call(o, t) && r(a, t, o[t]);
  if (e)
    for (var t of e(o))
      n.call(o, t) && r(a, t, o[t]);
  return a;
}, p = (a, o) => f(a, i(o));
import S, { forwardRef as g } from "react";
import h from "../lib/SSRBase.mjs";
import R from "../defs/SnapchatLogo.mjs";
const d = g((a, o) => /* @__PURE__ */ S.createElement(h, p(m({ ref: o }, a), { weights: R })));
d.displayName = "SnapchatLogo";
export {
  d as SnapchatLogo
};
