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
import n, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/LetterCircleH.mjs";
const H = d((r, e) => /* @__PURE__ */ n.createElement(w, i(a({ ref: e }, r), { weights: C })));
H.displayName = "LetterCircleH";
export {
  H as LetterCircleH
};
