var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (r, e, t) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, a = (r, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && m(r, t, e[t]);
  if (o)
    for (var t of o(e))
      l.call(e, t) && m(r, t, e[t]);
  return r;
}, i = (r, e) => f(r, p(e));
import R, { forwardRef as d } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/LetterCircleP.mjs";
const C = d((r, e) => /* @__PURE__ */ R.createElement(n, i(a({ ref: e }, r), { weights: w })));
C.displayName = "LetterCircleP";
export {
  C as LetterCircleP
};
