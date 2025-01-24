var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    l.call(e, o) && t(r, o, e[o]);
  if (m)
    for (var o of m(e))
      S.call(e, o) && t(r, o, e[o]);
  return r;
}, i = (r, e) => f(r, p(e));
import c, { forwardRef as y } from "react";
import N from "../lib/SSRBase.mjs";
import R from "../defs/SmileyNervous.mjs";
const d = y((r, e) => /* @__PURE__ */ c.createElement(N, i(a({ ref: e }, r), { weights: R })));
d.displayName = "SmileyNervous";
export {
  d as SmileyNervous
};
