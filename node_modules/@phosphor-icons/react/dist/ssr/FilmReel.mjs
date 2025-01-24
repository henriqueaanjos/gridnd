var l = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var t = (m, e, r) => e in m ? l(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, a = (m, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && t(m, r, e[r]);
  if (o)
    for (var r of o(e))
      R.call(e, r) && t(m, r, e[r]);
  return m;
}, i = (m, e) => f(m, p(e));
import c, { forwardRef as d } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/FilmReel.mjs";
const F = d((m, e) => /* @__PURE__ */ c.createElement(n, i(a({ ref: e }, m), { weights: w })));
F.displayName = "FilmReel";
export {
  F as FilmReel
};
