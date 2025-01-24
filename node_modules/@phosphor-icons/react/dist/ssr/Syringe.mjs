var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    n.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      S.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => p(r, s(e));
import c, { forwardRef as g } from "react";
import y from "../lib/SSRBase.mjs";
import R from "../defs/Syringe.mjs";
const d = g((r, e) => /* @__PURE__ */ c.createElement(y, i(a({ ref: e }, r), { weights: R })));
d.displayName = "Syringe";
export {
  d as Syringe
};
