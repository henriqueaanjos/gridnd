var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (o, e, t) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && m(o, t, e[t]);
  if (r)
    for (var t of r(e))
      l.call(e, t) && m(o, t, e[t]);
  return o;
}, i = (o, e) => p(o, s(e));
import n, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Toilet.mjs";
const R = d((o, e) => /* @__PURE__ */ n.createElement(w, i(a({ ref: e }, o), { weights: I })));
R.displayName = "Toilet";
export {
  R as Toilet
};
