var p = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    n.call(e, a) && o(r, a, e[a]);
  if (t)
    for (var a of t(e))
      s.call(e, a) && o(r, a, e[a]);
  return r;
}, i = (r, e) => l(r, f(e));
import c, { forwardRef as P } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/PaperPlaneTilt.mjs";
const I = P((r, e) => /* @__PURE__ */ c.createElement(d, i(m({ ref: e }, r), { weights: w })));
I.displayName = "PaperPlaneTilt";
export {
  I as PaperPlaneTilt
};
