var p = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && o(r, a, e[a]);
  if (t)
    for (var a of t(e))
      n.call(e, a) && o(r, a, e[a]);
  return r;
}, i = (r, e) => l(r, f(e));
import P, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/PaperPlaneTilt.mjs";
const w = c((r, e) => /* @__PURE__ */ P.createElement(R, i(m({ ref: e }, r), { weights: d })));
w.displayName = "PaperPlaneTilt";
export {
  w as PaperPlaneTilt
};
