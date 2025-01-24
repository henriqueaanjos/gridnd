var n = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (r, e, t) => e in r ? n(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    i.call(e, t) && o(r, t, e[t]);
  if (a)
    for (var t of a(e))
      p.call(e, t) && o(r, t, e[t]);
  return r;
}, s = (r, e) => c(r, f(e));
import d, { forwardRef as S } from "react";
import R from "../lib/SSRBase.mjs";
import l from "../defs/StarAndCrescent.mjs";
const w = S((r, e) => /* @__PURE__ */ d.createElement(R, s(m({ ref: e }, r), { weights: l })));
w.displayName = "StarAndCrescent";
export {
  w as StarAndCrescent
};
