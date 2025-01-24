var l = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? l(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      s.call(e, r) && t(o, r, e[r]);
  return o;
}, n = (o, e) => f(o, i(e));
import c, { forwardRef as d } from "react";
import F from "../lib/IconBase.mjs";
import g from "../defs/FlagBannerFold.mjs";
const B = d((o, e) => /* @__PURE__ */ c.createElement(F, n(m({ ref: e }, o), { weights: g })));
B.displayName = "FlagBannerFold";
export {
  B as FlagBannerFold
};
