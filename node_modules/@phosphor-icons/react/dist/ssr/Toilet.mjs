var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, e, t) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    l.call(e, t) && m(o, t, e[t]);
  if (r)
    for (var t of r(e))
      c.call(e, t) && m(o, t, e[t]);
  return o;
}, i = (o, e) => p(o, s(e));
import R, { forwardRef as d } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/Toilet.mjs";
const S = d((o, e) => /* @__PURE__ */ R.createElement(n, i(a({ ref: e }, o), { weights: w })));
S.displayName = "Toilet";
export {
  S as Toilet
};
