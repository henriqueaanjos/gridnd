var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (r, e, t) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, a = (r, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && m(r, t, e[t]);
  if (o)
    for (var t of o(e))
      n.call(e, t) && m(r, t, e[t]);
  return r;
}, s = (r, e) => f(r, i(e));
import h, { forwardRef as I } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/IntersectThree.mjs";
const l = I((r, e) => /* @__PURE__ */ h.createElement(R, s(a({ ref: e }, r), { weights: d })));
l.displayName = "IntersectThree";
export {
  l as IntersectThree
};
