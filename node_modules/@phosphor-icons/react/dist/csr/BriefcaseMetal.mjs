var i = Object.defineProperty, s = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    p.call(e, a) && o(r, a, e[a]);
  if (t)
    for (var a of t(e))
      l.call(e, a) && o(r, a, e[a]);
  return r;
}, f = (r, e) => s(r, c(e));
import n, { forwardRef as B } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/BriefcaseMetal.mjs";
const I = B((r, e) => /* @__PURE__ */ n.createElement(d, f(m({ ref: e }, r), { weights: w })));
I.displayName = "BriefcaseMetal";
export {
  I as BriefcaseMetal
};
