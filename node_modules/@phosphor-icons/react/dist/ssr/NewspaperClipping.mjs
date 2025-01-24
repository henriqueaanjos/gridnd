var m = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (p, e, r) => e in p ? m(p, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : p[e] = r, o = (p, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && i(p, r, e[r]);
  if (a)
    for (var r of a(e))
      n.call(e, r) && i(p, r, e[r]);
  return p;
}, t = (p, e) => s(p, f(e));
import w, { forwardRef as c } from "react";
import g from "../lib/SSRBase.mjs";
import N from "../defs/NewspaperClipping.mjs";
const R = c((p, e) => /* @__PURE__ */ w.createElement(g, t(o({ ref: e }, p), { weights: N })));
R.displayName = "NewspaperClipping";
export {
  R as NewspaperClipping
};
