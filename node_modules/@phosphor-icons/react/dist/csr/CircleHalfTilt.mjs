var m = Object.defineProperty, f = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? m(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, i = (r, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      s.call(e, t) && a(r, t, e[t]);
  return r;
}, l = (r, e) => f(r, c(e));
import n, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/CircleHalfTilt.mjs";
const H = d((r, e) => /* @__PURE__ */ n.createElement(w, l(i({ ref: e }, r), { weights: C })));
H.displayName = "CircleHalfTilt";
export {
  H as CircleHalfTilt
};
