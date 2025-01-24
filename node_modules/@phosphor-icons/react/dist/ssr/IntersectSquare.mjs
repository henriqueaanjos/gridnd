var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var o = (r, e, t) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && o(r, t, e[t]);
  if (a)
    for (var t of a(e))
      n.call(e, t) && o(r, t, e[t]);
  return r;
}, s = (r, e) => f(r, i(e));
import S, { forwardRef as I } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/IntersectSquare.mjs";
const l = I((r, e) => /* @__PURE__ */ S.createElement(R, s(m({ ref: e }, r), { weights: d })));
l.displayName = "IntersectSquare";
export {
  l as IntersectSquare
};
