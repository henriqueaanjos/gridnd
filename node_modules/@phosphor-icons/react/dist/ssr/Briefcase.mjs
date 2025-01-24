var i = Object.defineProperty, s = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, B = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    p.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      B.call(e, a) && t(r, a, e[a]);
  return r;
}, f = (r, e) => s(r, c(e));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Briefcase.mjs";
const w = d((r, e) => /* @__PURE__ */ R.createElement(l, f(m({ ref: e }, r), { weights: n })));
w.displayName = "Briefcase";
export {
  w as Briefcase
};
